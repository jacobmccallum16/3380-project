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
      {/* <img href="" src="./public/bg.png" className="bgimg" /> */}
    </header>
  );
};

const Main = () => {
  return (
    <main className="bg-teal-100 text-center p-3">
        <div class="login screen">
          <div class="content">
            <div class="overlap-group1 overlap">
              <img
                class="greentrans-1"
                src="./public/greentrans-1.png"
                alt="greentrans 1"
              />
              <div class="title">Welcome to TeaOrganic!</div>
              <div class="form">
                <div class="email_-input">
                  <div class="email">Email</div>
                  <div class="overlap-group overlap">
                    <div class="enter-your-email-here">
                      Enter your Email here
                    </div>
                  </div>
                </div>
                <div class="password_-input">
                  <div class="password">Password</div>
                  <div class="overlap-group overlap">
                    <div class="enter-your-password">Enter your Password</div>
                  </div>
                </div>
                <div class="action-buttons">
                  <div class="btn_-create-account">
                    <div class="log-in">Log In</div>
                  </div>
                  <p class="have-an-account">
                    <span class="span0">Don’t have an account?</span>
                    <span class="span1">&nbsp;</span>
                    <span class="span2">Sign Up</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            class="chris-lee-70l1t-dai6r-m-unsplash-2"
            src="./public/chris-lee-70l1tdai6rm-unsplash-2.png"
            alt="chris-lee-70l1tDAI6rM-unsplash 2"
          />
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
        <Header/>
        <Main/>
        <Footer />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById("root"));
