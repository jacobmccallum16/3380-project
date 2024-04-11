// const { useState, useEffect } = React;

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
        let response = await fetch(`${URI}/session`)
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
              <a href="search.html" className="nav-link">
                Search?
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


      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img src="./public/pic1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src="./public/pic2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src="./public/pic3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <div className="frame">
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

// Figure out what's in the cart
let itemsInCart = [];
let localStorageLength = localStorage.length;
for (let i = 0; i < localStorageLength; i++) {
  let key = localStorage.key(i);
  // console.log(`key ${i}: ${key}`);
  if (Number(localStorage.getItem(key)) > 0) {
    itemsInCart.push(localStorage.key(i));
  }
}
console.log(`itemsInCart:`);
console.log(itemsInCart);

const Main = () => {
  // state = {
  //   itemsInCart: itemsInCart
  // }
  const [teas, setTeas] = useState(null);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        let response = await fetch(`${URI}/`);
        let result = await response.json();
        setTeas(result);
        // console.log(`${props.prodId}: ${inCartQty}`);
        // console.log(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeas();
  }, []);

  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        { teas ? (
          <div className="row g-3 p-3">
            <h6>yes</h6>
            {teas.map(tea => {
              <CardCol cols="4" link={URI} prodId={tea._id} />
            })}
          </div>
        ) : (
          <div className="row g-3 p-3">
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72011e" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720122" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720123" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720126" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720128" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72012a" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72012d" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72011c" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72011d" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72011f" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720120" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720121" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720125" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720127" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72012c" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72012e" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72012f" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720124" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720129" />
            <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72012b" />
          </div>
        )}
      </div>
    </main>
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
