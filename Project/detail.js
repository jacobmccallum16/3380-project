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
          <div class="flex-row">
            <img
              class="rectangle-31"
              src="./public/rectangle-31.png"
              alt="Rectangle 31"
            />
            <div class="flex-col">
              <h1 class="surname">Green Tea</h1>
              <div class="frame-1">
                <div class="price">$28.98</div>
                <p class="incl-local-tax-shipping">
                  incl. local Tax &amp; Shipping.
                </p>
              </div>
              <p class="sleek-and-timeless">
                Sleek and timeless. Titanium glasses with an innovative bridge.
                A frame to suit every face, Morgan is a classic ‘panto’ shape.
              </p>
              <div class="overlap-group">
                <div class="add-to-bag">Add to Bag</div>
              </div>
            </div>
          </div>
          <div class="flex-row-1">
            <div class="flex-col-1 flex-col-3">
              <div class="frame-182">
                <div class="description">Description</div>
                <img
                  class="vector-1"
                  src="./public/vector-1.png"
                  alt="Vector 1"
                />
                <p class="sleek-and-timeless-1">
                  Sleek and timeless. Titanium glasses with an innovative
                  bridge. A frame to suit every face, Morgan is a classic
                  ‘panto’ shape. Named after James Morgan, the engineer who
                  built the Regent&#39;s Canal, it features custom elements
                  including fluid single piece bridge, adjustable nose pads and
                  temple tips based on Constantin Brâncuși&#39;s Bird in Space.
                </p>
                <p class="x997-pure-titanium">
                  99.7% pure titanium front
                  <br />
                  More than 4hv on the Vickers hardness test.
                  <br />
                  Ion plated to over 0.3µ
                  <br />
                  Weighs under 5.0g
                  <br />
                  Adjustable titanium nose pads for a comfortable fit
                  <br />
                  UV protection
                </p>
              </div>
              <div class="flex-row-2">
                <div class="flex-col-2 flex-col-3">
                  <img
                    class="bag-fill-frame"
                    src="img/bag-fill-frame-2@2x.png"
                    alt="bag-fill-frame"
                  />
                  <img class="x03-2" src="img/03-2@2x.png" alt="03 2" />
                </div>
                <img class="x06-2" src="img/06-1.png" alt="06 2" />
                <img class="x03-5" src="img/03-1.png" alt="03 5" />
              </div>
              <img class="x03-4" src="img/03-1.png" alt="03 4" />
              <img class="x04-1" src="img/04-1.png" alt="04 1" />
            </div>
            <div class="overlap-group1">
              <img class="x06-1" src="img/06-1.png" alt="06 1" />
              <img class="x03-3" src="img/03-1.png" alt="03 3" />
            </div>
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
