/** @format */

import React from "react";
import { Container } from "./Footer.styled";
import { Link } from "react-router-dom";
import { MdCall, MdMail, MdLocationOn, MdFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube, FaCopyright, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { footerAnimation } from "../animation/Animation";

const Footer = () => {
  return (
    <Container>
      <motion.div
        variants={footerAnimation.parent}
        initial="hidden"
        animate="visible"
        className="footer">
        <motion.div variants={footerAnimation.section} className="section one">
          <h4>quick links</h4>
          <Link to="/">home</Link>
          <Link to="/allproducts">shop</Link>
          <Link to="/contact">contact</Link>
          <Link to="/cart">cat</Link>
        </motion.div>
        <motion.div variants={footerAnimation.section} className="section two">
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
        </motion.div>
        <motion.div
          variants={footerAnimation.section}
          className="section three">
          <h4>follow us on social</h4>
          <Link to="">
            <MdFacebook />
          </Link>
          <Link to="">
            <FaTwitter />
          </Link>
          <a href="https://www.youtube.com/channel/UCII7qdtJDFsDFex91KbopRw">
            <FaYoutube />
          </a>
        </motion.div>
        <motion.div variants={footerAnimation.section} className="section four">
          <p>copyright</p>
          <FaCopyright className="copyrigt" />
          <p>2022 aluku jewellery</p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Footer;
