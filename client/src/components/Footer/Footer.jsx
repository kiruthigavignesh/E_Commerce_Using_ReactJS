import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" >
      <div className="top">
        <div className="item">
          <h1 className="head">Categories</h1>
          <span>About Us</span>
          <span>Our Products</span>
          <span>Shopping</span>
          <span>Organic Millets</span>
        </div>
        <div className="item">
          <h1 className="head">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="item">
          <h1 className="head">About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1 className="head">Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="/img/logo.png" width="50px" height="50px"/>
          <span className="logo">BioGarden</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
