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
              <a href="index.html" className="nav-link">
                Home
              </a>
              <a href="#divStandings" className="nav-link">
                Tea
              </a>
              <a href="index.html" className="nav-link">
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
      <img href="" src="./public/bg.png" className="bgimg" />
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <input type="hidden" id="anPageName" name="page" value="tea" />
        <div className="container-center-horizontal">
            <div className="tea screen">
                <div className="flex-col flex">

                    <div className="overlap-group6">
                        <div className="overlap-group3">
                            <img
                            className="x03-1"
                            src="public/homeimg/03-1.png"
                            alt="03 1"
                            />
                            <div className="frame-2">
                            <img
                                className="ellipse-24"
                                src="public/homeimg/ellipse-24-1@2x.png"
                                alt="Ellipse 24"
                            />
                                <div className="flex-col-1 flex-col-7">
                                    <div className="advantages smalltext">ADVANTAGES</div>
                                    <p className="the-hidden-health-benefits-of-tea x02-headline">
                                    The Hidden Health Benefits Of Tea
                                    </p>
                                    <p className="lorem-ipsum-dolor-si text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    In commodo enim sit amet magna semper lacinia. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. In commodo
                                    enim sit amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    <div className="since-2022 smalltext">SINCE 2022</div>
                    </div>

                    <h1 className="why-choose-us x02-headline">Why Choose Us</h1>
                    <p className="lorem-ipsum-dolor-si-1 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    commodo enim sit amet magna semper lacinia. Lorem ipsum dolor sit
                    amet.
                    </p>
                </div>

                <div className="asset-container">
                    <img
                    className="asset"
                    src="public/homeimg/asset-2-4x.png"
                    alt="Asset 2@4x"
                    />
                    <img
                    className="asset-44x"
                    src="public/homeimg/asset-4-4x.png"
                    alt="Asset 4@4x"
                    />
                    <img
                    className="asset"
                    src="public/homeimg/asset-3-4x.png"
                    alt="Asset 3@4x"
                    />
                </div>

                <div className="text-container">
                    <div className="organic-products">Organic Products</div>
                    <div className="great-customer-service">Great Customer Service</div>
                    <div className="natural-ingredients">Natural Ingredients</div>
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
