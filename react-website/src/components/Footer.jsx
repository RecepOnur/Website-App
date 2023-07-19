import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <BsInstagram /> <BsTwitter /> <BsFacebook />
        <a
          href="https://www.linkedin.com/in/recep-onur-okan-195681236/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <p> &copy; 2023 corbaci.com</p>
    </div>
  );
};

export default Footer;
