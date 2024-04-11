const { useState, useEffect } = React;
const URI = "http://127.0.0.1:3003/api";

const Header = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    // Initialize Bootstrap Carousel when component mounts
    const carouselElement = document.querySelector(".carousel");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000, // Set the interval in milliseconds (2 seconds in this case)
      });
    }
    // Check if user is logged in & fetch their username
    const fetchUsername = async () => {
      try {
        // console.log(`fetching from "${URI}/username"`)
        let response = await fetch(`/api/session`)
        let result = await response.json()
        console.log(response)
        console.log(result)
        console.log(JSON.stringify(response))
        console.log(JSON.stringify(result))
        setUsername(result.fullname)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    fetchUsername();
  }, []);

  const handleLogout = () => {
    // Clear session cookie
    fetch('/api/logout', { method: 'POST', credentials: 'include' })
      .then(() => {
        window.location.href = '/login.html';
      })
      .catch(error => console.error('Logout failed:', error));
  }
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
              <a href="tea.html" className="nav-link">
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

          <div className="loginright">
            {username ? (
              <a href="profile.html" className="nav-link">
                <i className="bi-person-fill"></i> {username}
              </a>
            ) : (
              <a href="login.html" className="nav-link">
                <i className="bi-person-fill"></i> Login
              </a>
            )}
          </div>

          {!username && (
            // don't show signup button if logged in
            <div className="signup-right">
              <a href="signup.html" className="nav-link">
                <i className="bi-person-plus-fill"></i> Signup
              </a>
            </div>
          )}

          {username && (
            <div className="logout">
              <button className="nav-link" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            </div>
          )}

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
      {/* <img href="" src="./public/homebg.png" className="bgimg" /> */}
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="5000">
            <img src="./public/pic4.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="5000">
            <img src="./public/pic5.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="5000">
            <img src="./public/pic6.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <input type="hidden" id="anPageName" name="page" value="tea" />
      <div class="container-center-horizontal">
        <div class="tea screen">
          <div class="flex-col">
            <div class="overlap-group6">
              <div class="overlap-group2">
                <img class="x03-1" src="public/homeimg/03-1.png" alt="03 1" />
                <div class="frame-2">
                  <img
                    class="ellipse-24"
                    src="public/homeimg/ellipse-24-1@2x.png"
                    alt="Ellipse 24"
                  />
                  <div class="flex-col-1 flex-col-3">
                    <div class="advantages smalltext">ADVANTAGES</div>
                    <p class="the-hidden-health-benefits-of-tea x02-headline">
                      The Hidden Health Benefits Of Tea
                    </p>
                    <p class="lorem-ipsum-dolor-si text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In commodo enim sit amet magna semper lacinia. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. In commodo
                      enim sit amet.
                    </p>
                  </div>
                </div>
              </div>
              <div class="since-2022 smalltext">SINCE 2022</div>
            </div>
            <h1 class="why-choose-us x02-headline">Why Choose Us</h1>
            <p class="lorem-ipsum-dolor-si-1 text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              commodo enim sit amet magna semper lacinia. Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div class="asset-container">
            <img
              class="asset"
              src="public/homeimg/asset-2-4x.png"
              alt="Asset 2@4x"
            />
            <img
              class="asset-44x"
              src="public/homeimg/asset-4-4x.png"
              alt="Asset 4@4x"
            />
            <img
              class="asset"
              src="public/homeimg/asset-3-4x.png"
              alt="Asset 3@4x"
            />
          </div>
          <div class="flex-row">
            <div class="flex-col-2 flex-col-3">
              <div class="flex-row-1 smalltittle">
                <div class="organic-products">Organic Products</div>
                <div class="great-customer-service">Great Customer Service</div>
                <div class="natural-ingredients">Natural Ingredients</div>
              </div>
              <div class="our-unique-tea-blends x02-headline">
                Our Unique Tea Blends
              </div>
              <div class="overlap-group-container">
                <div class="overlap-group1">
                  <div class="rectangle-8 rectangle"></div>
                  <img
                    class="x01-dry-gynostemma-pe"
                    src="public/homeimg/01-dry-gynostemma-pentaphyllum-leaf-isolated-white-blackground-j.png"
                    alt="01-dry-gynostemma-pentaphyllum-leaf-isolated-white-blackground-jiaogulan-miracle-grass-chinese-herbal-tea-top-view 1"
                  />
                </div>
                <div class="overlap-group5">
                  <div class="rectangle-12 rectangle"></div>
                  <div class="rectangle-13 rectangle"></div>
                  <img
                    class="x03-top-view-powder-g"
                    src="public/homeimg/03-top-view-powder-green-tea-green-tea-leaf-isolated-white-backg.png"
                    alt="03-top-view-powder-green-tea-green-tea-leaf-isolated-white-background 1"
                  />
                  <img
                    class="x02-dry-oolong-tea-le"
                    src="public/homeimg/02-dry-oolong-tea-leaves-isolated-white-background-1.png"
                    alt="02-dry-oolong-tea-leaves-isolated-white-background 1"
                  />
                </div>
              </div>
              <div class="flex-row-2 roboto-normal-mine-shaft-20px">
                <div class="gynostemma-tea">Gynostemma Tea</div>
                <div class="oolong-tea">Oolong Tea</div>
                <div class="surname">Green Tea</div>
              </div>
              <p class="sometimes-all-you-n x02-headline">
                “sometimes All You Need Is A Good Cup Of Tea”
              </p>
              <div class="overlap-group-container-1">
                <div class="overlap-group4">
                  <img
                    class="bag-fill-frame"
                    src="public/homeimg/bag-fill-frame@2x.png"
                    alt="bag-fill-frame"
                  />
                  <p class="x100-organic-et-male smalltittle">
                    <span class="span smalltittle">
                      100% Organic
                      <br />
                    </span>
                    <span class="span-1 text">
                      Et malesuada fames ac turpis egestas maecenas pharetra
                      convallis met nisl purus.
                      <br />
                    </span>
                    <span class="span-2 roboto-normal-mine-shaft-20px">
                      <br />
                    </span>
                    <span class="span smalltittle">
                      High Quality
                      <br />
                    </span>
                    <span class="span-1 text">
                      Et malesuada fames ac turpis egestas maecenas pharetra
                      convallis met nisl purus.
                      <br />
                    </span>
                    <span class="span-2 roboto-normal-mine-shaft-20px">
                      <br />
                    </span>
                    <span class="span smalltittle">
                      Always Fresh
                      <br />
                    </span>
                    <span class="span-1 text">
                      Et malesuada fames ac turpis egestas maecenas pharetra
                      convallis met nisl purus.
                    </span>
                  </p>
                </div>
                <div class="overlap-group">
                  <img
                    class="bag-fill-frame-1 bag-fill-frame-3"
                    src="public/homeimg/bag-fill-frame@2x.png"
                    alt="bag-fill-frame"
                  />
                  <img
                    class="rectangle-31 rectangle"
                    src="public/homeimg/rectangle-31-1.png"
                    alt="Rectangle 31"
                  />
                </div>
              </div>
              <img
                class="bag-fill-frame-2 bag-fill-frame-3"
                src="public/homeimg/bag-fill-frame-2@2x.png"
                alt="bag-fill-frame"
              />
              <div class="flex-row-3">
                <img
                  class="x03-2"
                  src="public/homeimg/bag-fill-frame-2@2x.png"
                  alt="03 2"
                />
                <img class="x06-2" src="img/06-1.png" alt="06 2" />
                <img class="x03-5" src="img/03-1.png" alt="03 5" />
              </div>
              <img class="x03-4" src="img/03-1.png" alt="03 4" />
              <img class="x04-1" src="img/mask-group-2.png" alt="04 1" />
            </div>
            <div class="overlap-group3">
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
            <div className="text-wrapper">Working Hours</div>
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
