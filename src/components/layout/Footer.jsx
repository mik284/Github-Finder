import React from "react";
import ProIcon from "../profile.png";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <div>
        <a href="https://github.com/mik284">
          <img
            src={ProIcon}
            className="inline-block fill-current h-20"
            alt="mik284"
          />
        </a>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
