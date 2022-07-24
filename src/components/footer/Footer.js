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
        <h4>contact us</h4>
        <Link to={""}>
          <p>
            <MdCall /> :
          </p>
          <p className="logo">+254769301113</p>
        </Link>
        <Link to={""}>
          <p>
            <FaWhatsapp /> :
          </p>
          <p className="logo">+254769301113</p>
        </Link>
        <Link to={""}>
          <p>
            <MdMail /> :
          </p>
          <p className="logo">forveraluku@gmail.com</p>
        </Link>
        <Link to={""}>
          <p>
            <MdLocationOn /> :
          </p>
          <p className="logo">remote</p>
        </Link>
      </div>
      <div className="section three">
        <h4>follow us on social</h4>
        <Link to="">
          <MdFacebook />
        </Link>
        <Link to="">
          <FaTwitter />
        </Link>
        <Link to="">
          <FaYoutube />
        </Link>
      </div>
      <div className="section four">
        <p>copyright</p>
        <FaCopyright className="copyrigt" />
        <p>2022 aluku jewellery</p>
      </div>
    </Container>
  );
};

export default Footer;
