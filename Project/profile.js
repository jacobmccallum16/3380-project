const { useState, useEffect } = React;

const URI = "http://34.105.6.153:3003/api";
// const URI = "http://127.0.0.1:3003/api";

const Header = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Check if user is logged in & fetch their username
        const fetchUsername = async () => {
            try {
                // console.log(`fetching from "${URI}/username"`)
                let response = await fetch(`/api/session`)
                let result = await response.json()
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
                        <div className="profile-right">
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
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    useEffect(() => {
        // Check if user is logged in & fetch their username
        const fetchData = async () => {
            try {
                // console.log(`fetching from "${URI}/username"`)
                let response = await fetch(`/api/session`)
                let result = await response.json()
                setUsername(result.fullname)
                setEmail(result.email)
            } catch (error) {
                console.error("Error fetching user data:", error)
            }
        }
        fetchData();
    }, []);
    return (
        <main >
            <input type="hidden" id="anPageName" name="page" value="profile" />
            <div class="container-center-horizontal">
                <div class="profile screen">
                    <div class="content">
                        <img
                            class="greentrans-1"
                            src="./public/greentrans-1.png"
                            alt="greentrans 1"
                        />
                        <div class="title">Welcome to your profile</div>
                        <div class="full-name_-input">
                            <div class="full-name poppins-medium-abbey-14px">Full Name</div>
                            <div class="overlap-group">
                                {username && (
                                    <div class="name poppins-normal-gray-13px">{username}</div>
                                )}
                            </div>
                        </div>
                        <div class="_-input">
                            <div class="email poppins-medium-abbey-14px">Email</div>
                            <div class="overlap-group">
                                {email && (
                                    <div class="enter-your-email-here poppins-normal-gray-13px">
                                        {email}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
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
