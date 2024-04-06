const { useState, useEffect } = React;

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
