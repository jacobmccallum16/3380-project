const { useState, useEffect } = React;

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

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0 d-flex" id="reactDiv">
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
