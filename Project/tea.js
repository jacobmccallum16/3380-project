const { useState, useEffect } = React;

// const URI = "http://34.83.182.59:3003/api";
const URI = "/api";
const localURI = "/api"

function formatPrice(price) {
  let dollars = Math.floor(price);
  let cents = Math.round((price - dollars) * 100);
  let formattedPrice = `$ ${dollars}.${cents}`;
  return formattedPrice;
}

function calculateCost(price, qty) {
  let newPrice = Math.round(price * qty * 100) / 100;
  return newPrice;
}

function formatAndCalculatePrice(price, qty, setCostFunction) {
  let newPrice = Math.round(price * qty * 100) / 100;
  let dollars = Math.floor(newPrice);
  let cents = Math.round((newPrice - dollars) * 100);
  setCostFunction(newPrice);
  let formattedPrice = `$ ${dollars}.${cents}`;
  return formattedPrice;
}

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

const COLS = [
  "col-auto",
  "col-12",
  "col-12 col-lg-6",
  "col-12 col-md-6 col-xl-4",
  "col-12 col-sm-6 col-lg-4 col-xl-3",
];

const CardCol = (props) => {
  const [data, setData] = useState(null);
  const [inCartQty, setInCartQty] = useState(0);

  useEffect(() => {

    setData(props.product)
    let qty = Number(localStorage.getItem(props.product._id))
    if (qty != null) {
      setInCartQty(qty)
    } else {
      setInCartQty(0)
    }
    // fetchData();
  }, []);

  const handleClick = (prodId, change) => {
    let prevQuantity = Number(localStorage.getItem(prodId));
    if (prevQuantity == null) {
      prevQuantity = 0;
    }
    prevQuantity += change;
    if (prevQuantity == 0) { 
      localStorage.removeItem(prodId);
    } else {
      localStorage.setItem(prodId, prevQuantity);
    }
    console.log(localStorage);
    setInCartQty(prevQuantity);
  };
  return (
    <div className={COLS[props.cols]}>
      {data ? (
        <div className="card h-100 px-1 py-2">
          <div className="card-body h-100 d-flex flex-column text-start pb-2">
            <div className="h-100">
              <div className="text-center mb-2">
                <img src={props.product.image} height="150" width="150"></img>
              </div>
              <h5 className="card-title text-start">{props.product.title}</h5>
              <h6 className="row">
                <span className="col-auto">{props.product.type}</span>
                <span className="ms-auto col-auto">
                  {formatPrice(props.product.price)}
                </span>
              </h6>
              <p className="card-text text-start small">
                &emsp;{props.product.description}
              </p>
            </div>
            {inCartQty > 0 ? (
              <div className="text-end pt-2">
                <div className="btn-group">
                  <button
                    onClick={() => handleClick(props.product._id, -1)}
                    className="btn1 btn-red"
                  >
                    &ensp;-1&ensp;
                  </button>
                  <a href="cart.html" className="btn btn-light">
                    &ensp;<b>{inCartQty}</b> in cart&ensp;
                  </a>
                  <button
                    onClick={() => handleClick(props.product._id, 1)}
                    className="btn1 btn-green"
                  >
                    &ensp;+1&ensp;
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-end pt-2">
                <button
                  onClick={() => handleClick(props.product._id, 1)}
                  className="btn1 btn-green"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="card h-100 pt-2">
          <div className="card-body h-100 d-flex flex-column text-start">
            <div className="h-100">
              <div className="text-center mb-2">
                <img height="150" width="150"></img>
              </div>
              <h5 className="card-title text-start">data.title</h5>
              <h6 className="row">
                <span className="col-auto">data.category</span>
                <span className="ms-auto col-auto">data.rating.rate ⭐️</span>
              </h6>
              <p className="card-text text-start small">
                &emsp;data.description
              </p>
            </div>
            <div className="text-end">
              <button
                onClick={() => handleClick(props.prodId)}
                className="btn btn-green"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
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

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm == '') {
        try {
          const response = await fetch('/api/');
          const data = await response.json();
          setProducts(data)
        } catch (error) {
          console.error(`Error fetching products`, error)
        }
      } else {
          try {
          const response = await fetch(`/api/tea/search/${searchTerm}`);
          const data = await response.json();
          setProducts(data)
        } catch (error) {
          console.error(`Error fetching products`, error)
        }
      }
    };
    fetchProducts();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        <div className="row g-3 p-3">
          <form className="col-6 offset-3 row" action="/tea.html">
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="searchString" value={searchTerm} onChange={handleSearchChange} placeholder="Type to search"></input>
              <input type="submit" className="btn btn-green disabled" value="Search" disabled={true}></input>
            </div>
          </form>
          <div className="col-3"></div>
          {products.map(product => (
            <CardCol cols="4" link={URI} product={product} key={product._id}/>
          ))}
        </div>
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
