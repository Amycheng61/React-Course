import "./CheckoutPage.css";
import "./checkout-header.css";
import OrderSummary from "./OrderSummary";

function CheckoutPage({ cart }) {
  return (
    <div>
      <title>Checkout Page</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <OrderSummary cart={cart} />
        <div className="checkout-grid"></div>
      </div>
    </div>
  );
}

export default CheckoutPage;
