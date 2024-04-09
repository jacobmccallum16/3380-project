const { useState, useEffect } = React;

function formatPrice(price) {
  let dollars = Math.floor(price);
  let cents = Math.round((price - dollars) * 100);
  let formattedPrice = `$ ${dollars}.${cents}`;
  return formattedPrice;
}

const Header = () => {
  useEffect(() => {
    // Initialize Bootstrap Carousel when component mounts
    const carouselElement = document.querySelector(".carousel");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000, // Set the interval in milliseconds (2 seconds in this case)
      });
    }
  }, []);

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
            <a href="login.html" className="nav-link">
              <i className="bi-person-fill"></i> Login
            </a>
          </div>
          <div className="signup-right">
            <a href="signup.html" className="nav-link">
              <i className="bi-person-plus-fill"></i> Signup
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

      
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="5000">
            <img src="./public/pic1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="5000">
            <img src="./public/pic2.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="5000">
            <img src="./public/pic3.png" class="d-block w-100" alt="..." />
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
    const fetchData = async () => {
      try {
        let response = await fetch(`${URI}/${props.prodId}`);
        let result = await response.json();
        setData(result);
        let qty =
          localStorage.getItem(props.prodId) == null
            ? 0
            : localStorage.getItem(props.prodId);
        setInCartQty(qty);
        console.log(`${props.prodId}: ${inCartQty}`);
        // console.log(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (prodId, change) => {
    let prevQuantity = Number(localStorage.getItem(prodId));
    if (prevQuantity == null) {
      prevQuantity = 0;
    }
    prevQuantity += change;
    localStorage.setItem(prodId, prevQuantity);
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
                <img src={data.image} height="150" width="150"></img>
              </div>
              <h5 className="card-title text-start">{data.title}</h5>
              <h6 className="row">
                <span className="col-auto">{data.type}</span>
                <span className="ms-auto col-auto">
                  {formatPrice(data.price)}
                </span>
              </h6>
              <p className="card-text text-start small">
                &emsp;{data.description}
              </p>
            </div>
            {inCartQty > 0 ? (
              <div className="text-end pt-2">
                <div className="btn-group">
                  <button
                    onClick={() => handleClick(props.prodId, -1)}
                    className="btn1 btn-red"
                  >
                    &ensp;-1&ensp;
                  </button>
                  <a href="cart.html" className="btn btn-light">
                    &ensp;<b>{inCartQty}</b> in cart&ensp;
                  </a>
                  <button
                    onClick={() => handleClick(props.prodId, 1)}
                    className="btn1 btn-green"
                  >
                    &ensp;+1&ensp;
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-end pt-2">
                <button
                  onClick={() => handleClick(props.prodId, 1)}
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
  console.log(`key ${i}: ${key}`);
  if (Number(localStorage.getItem(key)) > 0) {
    itemsInCart.push(localStorage.key(i));
  }
}
console.log(`itemsInCart:`);
console.log(itemsInCart);

const URI = "http://34.83.182.59:3003/api";

const Main = () => {
  // state = {
  //   itemsInCart: itemsInCart
  // }

  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        <div className="row g-3 p-3">
          {/* {itemsInCart.map(item => {
            let link = `products/` + item
            return (<CardCol cols="4" link={link} prodId={item}/>)
          })} */}
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
      </div>
    </main>
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
