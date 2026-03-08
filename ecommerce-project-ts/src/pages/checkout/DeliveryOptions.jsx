import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

function DeliveryOptions({ deliveryOption, cartItem, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOption.map((option) => {
        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: option.id,
          });
          await loadCart();
        };
        return (
          <div
            key={option.id}
            className="delivery-option"
            onClick={() => updateDeliveryOption()}
          >
            <input
              type="radio"
              checked={cartItem.deliveryOptionId === option.id}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.id}`} onchange={() => {}}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(option.estimatedDeliveryTime).format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">
                {option.priceCents === 0
                  ? "FREE Shipping"
                  : `$${formatMoney(option.priceCents)} - Shipping`}{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;
