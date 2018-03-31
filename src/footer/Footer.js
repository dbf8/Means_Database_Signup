import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="wlfm">Waste Less || Feed More</p>
      <p className="hpp">
        Help &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;<span className="fb-twit-logo">
          <img
            className="twitter"
            src="https://www.dasgudspice.com/wp-content/uploads/2017/03/twitter-white-clear2.png"
          />{" "}
          <img src="https://www.iconsdb.com/icons/preview/white/facebook-3-xxl.png" />
        </span>
      </p>
    </div>
  );
};

export default Footer;
