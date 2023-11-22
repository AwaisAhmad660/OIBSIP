import React from "react";
import logo_white from "../images/logo-white.png";
import "font-awesome/css/font-awesome.min.css";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-black">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="index.html">
                <img src={logo_white} alt="logo" />
              </a>
              <div className="card">
                <h4>Subscribe to Newsletter</h4>
                <p className="text-sm">
                  Subscribe now to receive tips on how to take your business to
                  the next level.
                </p>
                <form>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="btn btn-primary btn-block">
                    Subscribe
                  </button>
                </form>
              </div>
              <i className="fa fa-linkedin text-teal-600"></i>
              <i className="fa fa-facebook  text-teal-600"></i>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Process</a>
                </li>
                <li>
                  <a href="#">Join Our Team</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Recent Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#">hello@growthapp.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
