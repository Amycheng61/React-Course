import { it as test, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Homepage from "./HomePage";
import App from "../../App";
import { MemoryRouter } from "react-router";

vi.mock("axios");
let loadCart;
let products;
beforeEach(() => {
  products = [
    {
      id: 123,
      name: "Test Product",
      priceCents: 1999,
      image: "test-image.jpg",
      rating: {
        stars: 4.5,
        count: 100,
      },
    },
    {
      id: 124,
      name: "Test Product 2",
      priceCents: 2999,
      image: "test-image-2.jpg",
      rating: {
        stars: 4.0,
        count: 50,
      },
    },
  ];
  loadCart = vi.fn();
  axios.get.mockImplementation(async(urlPtath) => {
    if (urlPtath === "/api/products") {
      return Promise.resolve({ data: products });   
    } else if (urlPtath === "/api/cart-items?expand=product") {
        return Promise.resolve({ data: [] });   
    }
     return [];
    
    });
});

test("component in HomePage", async () => {
  render(
  <MemoryRouter>
    <Homepage cart={[]} loadCart={loadCart} />
  </MemoryRouter>   );   
    const productContainers = await screen.findAllByTestId("product-container");
    expect(productContainers).toHaveLength(2); // We want to make sure that the correct number of products are rendered based on the mocked API response
    expect(within(productContainers[0]).getByText("Test Product")).toBeInTheDocument(); // We want to make sure that the first product's name is rendered correctly
    expect(within(productContainers[0]).getByText("$19.99")).toBeInTheDocument();   // We want to make sure that the first product's price is rendered correctly, and that the formatMoney function is working as expected      
    expect(within(productContainers[1]).getByText("Test Product 2")).toBeInTheDocument(); // We want to make sure that the second product's name is rendered correctly
    expect(within(productContainers[1]).getByText("$29.99")).toBeInTheDocument();   // We want to make sure that the second product's price is rendered correctly, and that the formatMoney function is working as expected

});


