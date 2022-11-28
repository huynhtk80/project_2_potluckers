import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Kamikaze Cheese | All rights
            reserved |{" "}
            <a href="/" className="footer__link">
              Home
            </a>{" "}
            |{" "}
            <a href="/PrivacyPolicy" className="footer__link">
              Privacy
            </a>{" "}
            |{" "}
            <a href="/TermsOfUse" className="footer__link">
              Terms of Use
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
