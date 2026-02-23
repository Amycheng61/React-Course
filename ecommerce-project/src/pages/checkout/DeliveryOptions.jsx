import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

function DeliveryOptions({deliveryOption, cartItem}) {
 
  
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOption.map((option) => {
        return (
          <div key={option.id} className="delivery-option">
            <input
              type="radio"
              checked={cartItem.deliveryOptionId === option.id}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.id}`}
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
