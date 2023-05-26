import "../styles.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-primary text-light text-center py-3 mt-5">
      <div>
        &copy;{new Date().getFullYear()} J-MERN INC | All Rights Reserved |
        Terms of Service | Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
