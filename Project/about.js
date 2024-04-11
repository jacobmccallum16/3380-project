const { useState, useEffect } = React;

const URI = "http://127.0.0.1:3003/api";

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
      {/* <img href="" src="./public/bg.png" className="bgimg" /> */}
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <input type="hidden" id="anPageName" name="page" value="about" />
      <div class="container-center-horizontal">
        <div class="about screen">
          <div class="about-us x02-headline">About Us</div>
          <div class="overlap-group">
            <h1 class="title">Welcome to TeaOrganic !</h1>
          </div>
          <p class="at-tea-organic-we-ar text">
            <span class="span text">
              At TeaOrganic, we are passionate about bringing you the finest
              organic tea blends from around the world. Our journey began with a
              vision to promote wellness and sustainability through the art of
              tea-making, and we are proud to share our love for tea with tea
              enthusiasts like you.
              <br />
              <br />
            </span>
            <span class="span-1 roboto-bold-mine-shaft-20px">
              Our Commitment to Quality
              <br />
            </span>
            <span class="span text">
              <br />
              Quality is at the heart of everything we do. We source our tea
              leaves from certified organic farms that prioritize sustainable
              farming practices and environmental stewardship. This ensures that
              every sip of TeaOrganic tea is not only delightful but also
              contributes to a healthier planet.
              <br />
              <br />
            </span>
            <span class="span-1 roboto-bold-mine-shaft-20px">
              Our Unique Blends
              <br />
            </span>
            <span class="span text">
              <br />
              Discover a world of flavors with our unique tea blends carefully
              crafted to cater to diverse palates. From soothing herbal
              infusions to invigorating green teas and rich black teas, we have
              something for every mood and occasion. Our blends are meticulously
              curated to deliver freshness, aroma, and exquisite taste in every
              cup.
              <br />
              <br />
            </span>
            <span class="span-1 roboto-bold-mine-shaft-20px">
              Ethical Sourcing
              <br />
            </span>
            <span class="span text">
              <br />
              We believe in ethical sourcing that respects both nature and
              communities. By partnering directly with tea growers and
              cooperatives, we ensure fair wages and sustainable livelihoods for
              farmers while maintaining transparency throughout the supply
              chain.
              <br />
              <br />
            </span>
            <span class="span-1 roboto-bold-mine-shaft-20px">
              Our Mission
              <br />
            </span>
            <span class="span text">
              <br />
              TeaOrganic&#39;s mission is to promote well-being, mindfulness,
              and a deep appreciation for nature&#39;s gifts. We invite you to
              join us on this journey of tea exploration and experience the
              harmony of flavors and wellness benefits that our teas offer.
              <br />
              <br />
            </span>
            <span class="span-1 roboto-bold-mine-shaft-20px">
              Get in Touch
              <br />
            </span>
            <span class="span text">
              <br />
              Have questions or feedback? We&#39;d love to hear from you! Reach
              out to our friendly team for tea recommendations, brewing tips, or
              any inquiries. Your satisfaction is our priority, and we are here
              to enhance your tea experience.
              <br />
              <br />
            </span>
            <span class="span-1 roboto-bold-mine-shaft-20px">
              Thank you for choosing TeaOrganic. Let&#39;s brew happiness
              together!
            </span>
          </p>
          <div class="overlap-group1">
            <img class="x06-1" src="img/06-1.png" alt="06 1" />
            <img class="x03-3" src="img/03-1.png" alt="03 3" />
          </div>
          <img
            class="bag-fill-frame"
            src="img/bag-fill-frame@2x.png"
            alt="bag-fill-frame"
          />
          <div class="flex-row">
            <img class="x03-2" src="img/03-2@2x.png" alt="03 2" />
            <img class="x06-2" src="img/06-1.png" alt="06 2" />
            <img class="x03-5" src="img/03-1.png" alt="03 5" />
          </div>
          <img class="x03-4" src="img/03-1.png" alt="03 4" />
          <img class="x04-1" src="img/04-1.png" alt="04 1" />
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
