/** @format */

import React from "react";
import { Container } from "./Footer.styled";
import { Link } from "react-router-dom";
import { MdCall, MdMail, MdLocationOn, MdFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube, FaCopyright, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="section one">
        <h4>quick links</h4>
        <Link to="">home</Link>
        <Link to="">shop</Link>
        <Link to="">contact</Link>
      </div>
      <div className="section two">
        <div className="log_container">
          <Link to={""}>
            <p className="logo">aluku</p>
          </Link>
        </div>
        <div className="contact">
          <h4>contact us</h4>
          <Link to={""}>
            <MdCall />:<p className="logo">+254769301113</p>
          </Link>
          <Link to={""}>
            <FaWhatsapp />:<p className="logo">+254769301113</p>
          </Link>
          <Link to={""}>
            <MdMail />:<p className="logo">forveraluku@gmail.com</p>
          </Link>
          <Link to={""}>
            <MdLocationOn />:<p className="logo">remote</p>
          </Link>
        </div>
      </div>
      <div className="section three">
        <h4>follow us on social</h4>
        <Link to="">
          <MdFacebook />
        </Link>
        <Link to="">
          <MdFacebook />
        </Link>
        <Link to="">
          <FaYoutube />
        </Link>
      </div>
      <div className="section four">
        <p>copyright</p>
        <FaCopyright />
        <p>2022 aluku jewellery</p>
      </div>
    </Container>
  );
};

export default Footer;
