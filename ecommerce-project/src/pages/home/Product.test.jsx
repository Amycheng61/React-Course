import { it as test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import userEvent from "@testing-library/user-event";
import axios from "axios";

vi.mock("axios");

test("renders product name and price", () => {
  const product = {
    id: 1,
    name: "Test Product",
    priceCents: 1999,
    image: "test-image.jpg",
    rating: {
      stars: 4.5,
      count: 100,
    },
  };

  render(<Product product={product} loadCart={() => {}} />);

  const nameElement = screen.getByText("Test Product"); // We want to make sure the product name is rendered correctly
  const priceElement = screen.getByText("$19.99"); // We want to make sure the price is rendered correctly, and that the formatMoney function is working as expected
  expect(nameElement).toBeInTheDocument(); // We want to make sure the product name is rendered correctly
  expect(priceElement).toBeInTheDocument(); // We want to make sure the price is rendered correctly, and that the formatMoney function is working as expected
  expect(screen.getByTestId("product-image")).toBeInTheDocument(); // We want to make sure the product image is rendered correctly
  expect(screen.getByTestId("product-rating-stars")).toHaveAttribute(
    "src",
    expect.stringContaining(`images/ratings/rating-45.png`),
  ); // We want to make sure the product rating stars are rendered correctlyS
  expect(screen.getByText("100")).toBeInTheDocument(); // We want to make sure the product rating count is rendered correctly
});

test("add to cart button calls loadCart", async () => {
  const product = {
    id: 123,
    name: "Test Product",
    priceCents: 1999,
    image: "test-image.jpg",
    rating: {
      stars: 4.5,
      count: 100,
    },
  };
  const loadCart = vi.fn(); // We want to create a mock function for loadCart so we can test if it's called when the add to cart button is clicked

  render(<Product product={product} loadCart={loadCart} />);

  const user = userEvent.setup();
  const addToCartButton = screen.getByTestId("add-to-cart-button");
  await user.click(addToCartButton);

  expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
    productId: 123,
    quantity: 1,
  }); // We want to make sure that when the add to cart button is clicked, the axios.post function is called with the correct arguments to add the product to the cart with the default quantity of 1

  expect(loadCart).toHaveBeenCalled(); // We want to make sure that after the product is added to the cart, the loadCart function is called to refresh the cart state in the app
});
