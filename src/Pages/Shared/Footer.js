import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer style={{
        background:`url(${footer})`
    }} className="footer p-10">
        <div>
          <span className="footer-title">Services</span>
          <a href="f" className="link link-hover">
            Branding
          </a>
          <a href="f" className="link link-hover">
            Design
          </a>
          <a href="f" className="link link-hover">
            Marketing
          </a>
          <a href="f" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="r" className="link link-hover">About us</a>
          <a href="r" className="link link-hover">Contact</a>
          <a href="r" className="link link-hover">Jobs</a>
          <a href="r" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="h" className="link link-hover">Terms of use</a>
          <a href="h" className="link link-hover">Privacy policy</a>
          <a href="h" className="link link-hover">Cookie policy</a>
        </div>
        
      </footer>
      <div>
          <p className="text-center py-5">Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
    </div>
  );
};

export default Footer;
