import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import FacebookIcon from "../../utils/icons/social/facebook";
import TwitterIcon from "../../utils/icons/social/twitter";
import GoogleIcon from "../../utils/icons/social/google";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container d-flex justify-space-between align-center">
                <div className="brand-container">
                    <Link to="/" className="brand">Petsbourg</Link>
                </div>
                <ul className="d-flex list-style-none">
                    <li className="margin-h-10">
                        <Link className="color-gray" to="/about-us">ABOUT US</Link>
                    </li>
                    <li className="margin-h-10">
                        <Link className="color-gray" to="/contact-us">CONTACT US</Link>
                    </li>
                    <li className="margin-h-10">
                        <Link className="color-gray" to="/faq">FAQ</Link>
                    </li>
                </ul>
                <div className="social">
                    <a href="https://www.facebook.com/petsbourg" target="_blank" className="btn social-btn btn-circle small btn-facebook margin-h-10">
                        <FacebookIcon width={7} color="#BDBDBD" />
                    </a>
                    <a href="https://www.facebook.com/petsbourg" target="_blank" className="btn social-btn btn-circle small btn-twitter margin-h-10">
                        <TwitterIcon width={12} color="#BDBDBD" />
                    </a>
                    <a href="https://www.facebook.com/petsbourg" target="_blank" className="btn social-btn btn-circle small btn-google margin-h-10">
                        <GoogleIcon width={12} color="#BDBDBD" />
                    </a>
                </div>
            </div>
            <ul className="d-flex justify-center margin-t-30 list-style-none">
                <li className="margin-h-10">
                    <Link className="color-gray" to="/">© { moment().year() } Petsbourg</Link>
                </li>
                <li className="margin-h-10">
                    <Link className="color-gray" to="/">Terms of Service</Link>
                </li>
                <li className="margin-h-10">
                    <Link className="color-gray" to="/">Privacy Policy</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;