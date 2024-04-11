
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

const Card = (props) => {
  const [data, setData] = useState(null);
  const [cost, setCost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${localURI}/${props.prodId}`);
        let result = await response.json();
        setData(result);
        // setInCartQty(props.qty);
        let calculatedCost = calculateCost(result.price, props.qty) // it breaks without this, idk why
        setCost(calculatedCost)
        console.log(`${props.prodId}: ${cost}`);
        props.addPrice(calculatedCost)
        // console.log(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.addPrice]);

  return (
    <div className="card">
      {data ? (
        <div className="frame-284">
          <img className="rectangle-1 rectangle" src={data.image} height="100" width="100"/>
          <div className="frame-283">
            <div className="flex-col-2 flex-col-8">
              <div className="vegan-powder inter-medium-fuscous-gray-18px">{data.title}</div>
              <p className="cloud-set-baked-sett inter-normal-suva-gray-12px">{data.origin}</p>
              <div className="price price-3 inter-semi-bold-fuscous-gray-16px">{formatPrice(cost)}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="frame-284">
          <img className="rectangle-1 rectangle" height="100" width="100"/>
          <div className="frame-283">
            <div className="flex-col-2 flex-col-8">
              <div className="vegan-powder inter-medium-fuscous-gray-18px">data.title</div>
              <p className="cloud-set-baked-sett inter-normal-suva-gray-12px">data.origin</p>
              <div className="price price-3 inter-semi-bold-fuscous-gray-16px">formatPrice(cost)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Figure out what's in the cart
let itemsInCart = [];
let localStorageLength = localStorage.length;
for (let i = 0; i < localStorageLength; i++) {
  let key = localStorage.key(i);
  // console.log(`key ${i}: ${key}`);
  if (Number(localStorage.getItem(key)) > 0) {
    itemsInCart.push(
      { "key": localStorage.key(i),
        "qty": localStorage.getItem(key),
        "price": 0,
        "cost": 0
      }
    );
  }
}
console.log(itemsInCart);

const CheckoutForm = (props) => {
  return (
    <form onSubmit={props.submitCheckout} id="orderForm" className="d-none">
      <input hidden name="productTotal" value={props.state.totalPrice}/>
      <input hidden name="taxTotal" value={props.state.taxTotal}/>
      <input hidden name="total" value={props.state.total}/>
    </form>
  )
}

const Main = (props) => {

  const submitCheckout = async (event) => {
    event.preventDefault();

    try {
      let submitData = {
        productTotal: props.state.productTotal,
        taxTotal: props.state.taxTotal,
        total: props.state.TOTAL,
      }
      const response = await fetch(`${localURI}/orders/checkout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const responseData = await response.json();
      console.log(responseData);

    //   if (response.ok) {
    //     // Login successful
    //     alert('Login Successful') //temporary
    //     console.log(data.message);
    //     // Redirect or show success message
    //     window.location.href = '/tea.html' // idk what's going on lol
    //   } else {
    //     // Login failed
    //     alert('Login Failed') //temporary
    //   }
    } catch (error) {
      console.error("ERROR", error)
    //   console.error('An error occurred. Please try again later.:', error);
    //   window.location.href = '/tea.html' // idk what's going on lol
    }
  };

  return (
    <main>
      <input type="hidden" id="anPageName" name="page" value="teadetail" />
      <div className="container-center-horizontal">
        <div className="teadetail screen">
          <div className="flex-row flex">
            <div className="flex-col flex">
              <h1 className="title">Order Summary</h1>
              <div className="flex-row-1 flex-row-3">
                <div className="flex-col-1 flex-col-8">
                  <img
                    className="bag-fill-frame"
                    src="./public/sumimg/bag-fill-frame-2@2x.png"
                    alt="bag-fill-frame"
                  />
                  <img
                    className="x03-2"
                    src="./public/sumimg/03-2@2x.png"
                    alt="03 2"
                  />
                </div>
                <div className="frame-290">
                  {props.state.itemsInCart.map(item => {
                    return (<Card item={item} prodId={item.key} key={item.key} qty={item.qty} cost={item.qty} addPrice={props.addPrice} />)
                  })}
                </div>
              </div>
            </div>
            <div className="flex-col-6 flex-col-8">
              <div className="frame-292">
                <div className="frame-293 inter-normal-fuscous-gray-24px">
                  <div className="product-total">Product total</div>
                  <div className="price-2 price-3">{formatPrice(props.state.productTotal)}</div>
                </div>
                <img
                  className="line"
                  src="./public/sumimg/line-3@2x.png"
                  alt="Line 3"
                />
              </div>
              <div className="frame-29">
                <div className="frame-294">
                  <div className="tax inter-normal-fuscous-gray-24px">Tax</div>
                  <div className="text-1">
                    <span className="inter-normal-fuscous-gray-24px">12% </span>
                    <span className="span1">{formatPrice(props.state.taxTotal)}</span>
                  </div>
                </div>
                <img
                  className="line"
                  src="./public/sumimg/line-3@2x.png"
                  alt="Line 5"
                />
              </div>
              <div className="frame-29">
                <div className="frame-295 inter-normal-fuscous-gray-24px">
                  <div className="delivery-fee">Delivery fee</div>
                  <div className="free">Free</div>
                </div>
                <img
                  className="line"
                  src="./public/sumimg/line-3@2x.png"
                  alt="Line 4"
                />
              </div>
              <div className="frame-296">
                <div className="frame-296-item">Total</div>
                <div className="frame-296-item">{formatPrice(props.state.TOTAL)}</div>
              </div>
              <div className="button-container">
                <form onSubmit={submitCheckout} id="orderForm" className="d-none">
                  <input hidden readOnly name="productTotal" value={props.state.productTotal}/>
                  <input hidden readOnly name="taxTotal" value={props.state.taxTotal}/>
                  <input hidden readOnly name="total" value={props.state.TOTAL}/>
                </form>
                <button onClick={() => document.getElementById('orderForm').submit()} className="btn order-btn">Order</button>
              </div>
            </div>
          </div>
          <div className="flex-col-7 flex-col-8">
            <div className="flex-row-2 flex-row-3">
              <img
                className="x04-1"
                src="./public/sumimg/mask-group-2.png"
                alt="04 1"
              />
              <div className="overlap-group1">
                <img className="x06-1" src="./public/sumimg/06-1.png" alt="06 1" />
                <img className="x03-3" src="./public/sumimg/03-1.png" alt="03 3" />
              </div>
            </div>
            <img className="x03-5" src="./public/sumimg/03-1.png" alt="03 5" />
            <img className="x06-2" src="./public/sumimg/06-1.png" alt="06 2" />
            <img className="x03-4" src="./public/sumimg/03-1.png" alt="03 4" />
          </div>
        </div>
      </div>
    </main>
  );
};

class App extends React.Component {
  state = {
    itemsInCart: itemsInCart,
    productTotal: 0,
    taxTotal: 0,
    TOTAL: 0
  }
  addPrice = (price) => {
    this.setState(prevState => {
      let newProductTotal = Math.round((prevState.productTotal + price) * 100) / 100
      let newTaxTotal = Math.round(newProductTotal * 0.12 * 100) / 100
      let newTOTAL = Math.round((newProductTotal + newTaxTotal) * 100) / 100
      return {
        productTotal: newProductTotal,
        taxTotal: newTaxTotal,
        TOTAL: newTOTAL
      }
    });
    console.log(this.state.productTotal)
  };

  render() {
    return (
      <div className="container-fluid p-0 d-flex" id="reactDiv">
        <Header />
        <Main addPrice={this.addPrice} state={this.state} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
