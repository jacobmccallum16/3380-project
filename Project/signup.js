const { useState, browserHistory } = React;

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

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  //localhost URI
  const URI = 'http://localhost:3003/api/register'
  const handleRegistration = (event) => {
    event.preventDefault();

    //check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    fetch(URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //temporary?...
        alert('Succesfully registered.');
        setFullname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        window.location.href = '/login.html' // idk what's going on lol
      })
      .catch(error => {
        console.error('Error:', error);
        window.location.href = '/login.html' // idk what's going on lol
      });
  };

  return (
    <main>
      <input type="hidden" id="anPageName" name="page" value="signup" />
      <div className="container-center-horizontal">
        <div className="signup screen">
          <form onSubmit={handleRegistration}>
            <div className="content">
              <img
                class="greentrans-1"
                src="./public/greentrans-1.png"
                alt="greentrans 1"
              />
              <div className="full-name_-input">
                <div className="full-name poppins-medium-abbey-14px">Full Name</div>
                <input type="text" className="form-control" placeholder="Enter your name" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
              </div>
              <div className="_-input">
                <div className="email poppins-medium-abbey-14px">Email</div>
                <input type="text" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="_-input">
                <div className="password poppins-medium-abbey-14px">Password</div>
                <input type="password" className="form-control" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="_-input">
                <div className="password poppins-medium-abbey-14px">Confirm Password</div>
                <input type="password" className="form-control" placeholder="Confirm your password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn_-create-account">SignUp</button>
              <p class="have-an-account">
                <span class="span0">Already have an account?</span>
                <span class="span1">&nbsp;</span>
                <a href="login.html" class="span2">Log in</a>
              </p>
            </div>
          </form>

          <img
            className="chris-lee-70l1t-dai6r-m-unsplash-1"
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
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
