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
          <div className="loginright">
            <a href="login.html" className="nav-link">
              <i className="bi-person-fill"></i> Login
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
    <main >
      <input type="hidden" id="anPageName" name="page" value="signup" />
      <div class="container-center-horizontal">
        <div class="signup screen">
          <div class="content">
            <img
              class="greentrans-1"
              src="./public/greentrans-1.png"
              alt="greentrans 1"
            />
            <div class="full-name_-input">
              <div class="full-name poppins-medium-abbey-14px">Full Name</div>
              <div class="overlap-group">
                <div class="name poppins-normal-gray-13px">John Doe</div>
              </div>
            </div>
            <div class="_-input">
              <div class="email poppins-medium-abbey-14px">Email</div>
              <div class="overlap-group">
                <div class="enter-your-email-here poppins-normal-gray-13px">
                  Enter your Email here
                </div>
              </div>
            </div>
            <div class="_-input">
              <div class="password poppins-medium-abbey-14px">Password</div>
              <div class="overlap-group">
                <div class="enter-your-password poppins-normal-gray-13px">
                  Enter your Password
                </div>
              </div>
            </div>
            <div class="btn_-create-account">
              <div class="sign-up">SignUp</div>
            </div>
            <p class="have-an-account">
              <span class="span0">Already have an account?</span>
              <span class="span1">&nbsp;</span>
              <span class="span2">Log in</span>
            </p>
          </div>
          <img
            class="chris-lee-70l1t-dai6r-m-unsplash-1"
            src="./public/chris-lee-70l1tdai6rm-unsplash-1.png"
            alt="chris-lee-70l1tDAI6rM-unsplash 1"
          />
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
        <Header/>
        <Main />
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
