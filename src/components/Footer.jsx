import React from "react";
import "./styles/Footer.scss";
import banner from "../assets/footer_banner.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_top">
          <div className="flex">
            <div className="footer_img">
              <img src={banner} alt="footer_img" />
            </div>
            <div className="subscribe">
              <h3>
                Be a member of our community{" "}
                <span role="img" aria-label="emoji for community">
                  🎉
                </span>
              </h3>
              <p>
                We’d make sure you’re always first to know what’s happening on
                Vasiti—thus, the world.
              </p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form_group">
                  <input type="text" placeholder="enter your email address" />
                  <button class="sub_btn">subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__bottom flex">
          <div className="footer__links">
            <h6>Company</h6>
            <nav>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Term of Use</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Press & Media</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__links">
            <h6>Products</h6>
            <nav>
              <ul>
                <li>
                  <a href="/">Marketplace</a>
                </li>
                <li>
                  <a href="/">Magazine</a>
                </li>
                <li>
                  <a href="/">Seller</a>
                </li>
                <li>
                  <a href="/">Wholesale</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__links">
            <h6>Careers</h6>
            <nav>
              <ul>
                <li>
                  <a href="/">Become a Campus Rep</a>
                </li>
                <li>
                  <a href="/">Become a Vasiti Influencer</a>
                </li>
                <li>
                  <a href="/">Become a Campus writer</a>
                </li>
                <li>
                  <a href="/">Become an Affiliate</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__links">
            <h6>Get in touch</h6>
            <nav>
              <ul>
                <li>
                  <a href="/">Contact us</a>
                </li>
                <li>
                  <a href="/">Partner with us</a>
                </li>
                <li>
                  <a href="/">Advertise with us</a>
                </li>
                <li>
                  <a href="/">Help/FAQs</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__links">
            <h6>Join our community</h6>
            <nav>
              <ul>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Email Newsletter</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
