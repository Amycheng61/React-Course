import { formatMoney } from "../../utils/money";
import { use, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import   DeliveryOptions  from "./DeliveryOptions";

function OrderSummary({ cart }) {
   const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
  axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOption(response.data);
      });
    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);
  return (
    <div className="order-summary">
      {cart.map((cartItem) => {
        const selectedDeliveryOption = deliveryOption.find(
          (option) => option.id === cartItem.deliveryOptionId,
        );

        return (
          <div key={cartItem.id} className="cart-item-container">
            <div className="delivery-date">
              Delivery date:{" "}
              {selectedDeliveryOption
                ? dayjs(selectedDeliveryOption.estimatedDeliveryTime).format(
                    "dddd, MMMM D",
                  )
                : "Not selected"}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image" src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">{cartItem.product.name}</div>
                <div className="product-price">
                  ${formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity:{" "}
                    <span className="quantity-label">{cartItem.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <DeliveryOptions  deliveryOption={deliveryOption} cartItem={cartItem}/>
            </div>
          </div>
        );
      })}

      <div className="payment-summary">
        <div className="payment-summary-title">Payment Summary</div>

        <div className="payment-summary-row">
          <div>Items ({paymentSummary?.totalItems || 0}):</div>
          <div className="payment-summary-money">
            ${formatMoney(paymentSummary?.productCostCents || 0)}
          </div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div className="payment-summary-money">
            ${formatMoney(paymentSummary?.shippingCostCents || 0)}
          </div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money">
            ${formatMoney(paymentSummary?.totalCostBeforeTaxCents || 0)}
          </div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div className="payment-summary-money">
            ${formatMoney(paymentSummary?.taxCents || 0)}
          </div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total:</div>
          <div className="payment-summary-money">
            ${formatMoney(paymentSummary?.totalCostCents || 0)}
          </div>
        </div>

        <button className="place-order-button button-primary">
          Place your order
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
