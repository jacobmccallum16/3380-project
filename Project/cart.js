
const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
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
    </header>
  );
};

const Main = () => {
  // state = {
  //   itemsInCart: itemsInCart
  // }

  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        <div className="row g-3 p-3">
          {itemsInCart.map(item => {
            return (<CardCol cols="4" prodId={item} key={item} />)
          })}
        </div>
        <div className="button-container">
          <a className="btn checkout-btn" href="orderSum.html" type="button">Check Out</a>
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
console.log(itemsInCart);

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
