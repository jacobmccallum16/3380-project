const { useState, useEffect } = React;

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid px-3">
          <img
            href=""
            src="./public/greentrans.png"
            className="logoimg"
            width="200"
          />

          <div className="col-sm" id="navbarNav">
            <div className="navbar-nav">
              <a href="home.html" className="nav-link">
                Home
              </a>
              <a href="index.html" className="nav-link">
                Tea
              </a>
              <a href="about.html" className="nav-link">
                About
              </a>
            </div>
          </div>
          <div className="cart">
            <a href="cart.html" className="nav-link">
              <i className="bi bi-bag-fill"></i> Cart
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      {/* <img href="" src="./public/bg.png" className="bgimg" /> */}
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <input type="hidden" id="anPageName" name="page" value="teadetail" />
      <div class="container-center-horizontal">
        <div class="teadetail screen">
          <div class="flex-row flex">
            <div class="flex-col flex">
              <h1 class="title">Order Summary</h1>
              <div class="flex-row-1 flex-row-3">
                <div class="flex-col-1 flex-col-8">
                  <img
                    class="bag-fill-frame"
                    src="./public/sumimg/bag-fill-frame-2@2x.png"
                    alt="bag-fill-frame"
                  />
                  <img
                    class="x03-2"
                    src="./public/sumimg/03-2@2x.png"
                    alt="03 2"
                  />
                </div>
                <div class="frame-290">
                  
                  <div class="card">
                    <div class="frame-284">
                      <img
                        class="rectangle-1 rectangle"
                        src="./public/sumimg/rectangle-12@2x.png"
                        alt="Rectangle 12"
                      />
                      <div class="frame-283">
                        <div class="flex-col-2 flex-col-8">
                          <div class="vegan-powder inter-medium-fuscous-gray-18px">
                            Vegan Powder
                          </div>
                          <p class="cloud-set-baked-sett inter-normal-suva-gray-12px">
                            Cloud Set Baked Setting &amp; Smoothing Talc
                          </p>
                          <div class="price price-3 inter-semi-bold-fuscous-gray-16px">
                            $ 15.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="frame-284">
                      <img
                        class="rectangle-1 rectangle"
                        src="./public/sumimg/rectangle-13@2x.png"
                        alt="Rectangle 13"
                      />
                      <div class="frame-283">
                        <div class="flex-col-3 flex-col-8">
                          <div class="brow-pencil inter-medium-fuscous-gray-18px">
                            Brow Pencil
                          </div>
                          <div class="angled-mechanical inter-normal-suva-gray-12px">
                            Angled Mechanical
                          </div>
                          <div class="price price-3 inter-semi-bold-fuscous-gray-16px">
                            $ 04.05
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="frame-284">
                      <img
                        class="rectangle-1 rectangle"
                        src="./public/sumimg/rectangle-14@2x.png"
                        alt="Rectangle 14"
                      />
                      <div class="frame-283">
                        <div class="flex-col-4 flex-col-8">
                          <div class="lip-gel inter-medium-fuscous-gray-18px">
                            Lip Gel
                          </div>
                          <div class="ultra-shine-lip-gel inter-normal-suva-gray-12px">
                            Ultra Shine Lip Gel
                          </div>
                          <div class="price price-3 inter-semi-bold-fuscous-gray-16px">
                            $ 11.25
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="frame-284">
                      <img
                        class="rectangle-1 rectangle"
                        src="./public/sumimg/rectangle-15@2x.png"
                        alt="Rectangle 15"
                      />
                      <div class="frame-283">
                        <div class="flex-col-5 flex-col-8">
                          <div class="foundation inter-medium-fuscous-gray-18px">
                            Foundation
                          </div>
                          <div class="the-formula-blends-effortlessly inter-normal-suva-gray-12px">
                            The formula blends effortlessly,
                          </div>
                          <div class="price price-3 inter-semi-bold-fuscous-gray-16px">
                            $ 28.45
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-col-6 flex-col-8">
              <div class="frame-292">
                <div class="frame-293 inter-normal-fuscous-gray-24px">
                  <div class="product-total">Product total</div>
                  <div class="price-2 price-3">$124.50</div>
                </div>
                <img
                  class="line"
                  src="./public/sumimg/line-3@2x.png"
                  alt="Line 3"
                />
              </div>
              <div class="frame-29">
                <div class="frame-294">
                  <div class="tax inter-normal-fuscous-gray-24px">Tax</div>
                  <div class="text-1">
                    <span class="inter-normal-fuscous-gray-24px">%12 </span>
                    <span class="span1">($12.25)</span>
                  </div>
                </div>
                <img
                  class="line"
                  src="./public/sumimg/line-3@2x.png"
                  alt="Line 5"
                />
              </div>
              <div class="frame-29">
                <div class="frame-295 inter-normal-fuscous-gray-24px">
                  <div class="delivery-fee">Delivery fee</div>
                  <div class="free">Free</div>
                </div>
                <img
                  class="line"
                  src="./public/sumimg/line-3@2x.png"
                  alt="Line 4"
                />
              </div>
              <div class="frame-296">
                <div class="frame-296-item">Total</div>
                <div class="frame-296-item">$112.25</div>
              </div>
              <div class="button-container">
                <button class="order-btn">Order</button>
              </div>
            </div>
          </div>
          <div class="flex-col-7 flex-col-8">
            <div class="flex-row-2 flex-row-3">
              <img
                class="x04-1"
                src="./public/sumimg/mask-group-2.png"
                alt="04 1"
              />
              <div class="overlap-group1">
                <img class="x06-1" src="./public/sumimg/06-1.png" alt="06 1" />
                <img class="x03-3" src="./public/sumimg/03-1.png" alt="03 3" />
              </div>
            </div>
            <img class="x03-5" src="./public/sumimg/03-1.png" alt="03 5" />
            <img class="x06-2" src="./public/sumimg/06-1.png" alt="06 2" />
            <img class="x03-4" src="./public/sumimg/03-1.png" alt="03 4" />
          </div>
        </div>
      </div>
    </main>
  );
};

const Footer = () => {
  // return <footer className="text-bg-teal text-center p-1">Project</footer>;
  return (
    <div className="frame footer">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="socila-icons">
            <img className="img" src="public/img/medium-negative.svg" />
            <img className="img" src="public/img/negative.svg" />
            <img className="img" src="public/img/tiktok-negative.svg" />
            <img className="img" src="public/img/twitter-negative.svg" />
          </div>
          <div className="sitemap">
            <div className="text-wrapper">Get In Touch</div>
            <div className="div">+012-345-6789</div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Tealand@contact.com</div>
            </div>
            <div className="div-wrapper">
              <p className="text-wrapper-2">
                9889 Lorem Ipsum Street, Pellentesque, Ca, Usa
              </p>
            </div>
          </div>
          <div className="sitemap-2">
            <div className="text-wrapper">Working Our</div>
            <div className="div">Monday/friday 9:00-23:00</div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Saturday 10:00-21:00</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-2">Weekend Closed</div>
            </div>
          </div>

          <div className="text-wrapper-3">Copyright Dotcreativemarket</div>

          <img className="whitetrans" src="public/img/whitetrans-1.png" />
        </div>
      </div>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 d-flex" id="reactDiv">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
