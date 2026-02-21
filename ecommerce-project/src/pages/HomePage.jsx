import './homePage.css';
import './header.css';

function Homepage() {
  return (
    <div>
      <div>
        <div className="header">
            <div className="left-section">
                <a href="index.html" className="header-linker">
                    welcome to my ecommerce website
                    <img className="logo" src="images/mobile-logo-white.svg" alt="logo" />
                    <img className="mobile-logo" src="images/mobile-logo-white.svg" alt="mobile-logo" />
                </a>
            </div>

        </div>
      </div>

      <div className="home-page">
        <div className="products-grid">
          <div className="product-container">
            <div className="product-image-container">Product 1</div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Homepage;
