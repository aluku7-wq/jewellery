/** @format */

import { useContext } from "react";
import { Container } from "./Contact.styled";
import Navigation from "../navigationbar/Navigation";
import Footer from "../footer/Footer";
import { MdCall, MdMail, MdLocationOn, MdFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube, FaCopyright, FaWhatsapp } from "react-icons/fa";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { motion } from "framer-motion";
import { contactAnimation } from "../animation/Animation";

const Contact = () => {
  const { scroll } = useContext(jewelleryContext);
  return (
    <Container
      style={{
        height: scroll ? "100vh" : null,
        overflow: scroll ? "hidden" : null,
      }}>
      <Navigation />
      <div className="body">
        <motion.div
          variants={contactAnimation.details}
          initial="hidden"
          animate="visible"
          className="contact_details">
          <motion.div variants={contactAnimation.section} className="section">
            <MdMail />
            <div className="text">
              <p>email</p>
              <p>foreveraluku@gmail.com</p>
            </div>
          </motion.div>
          <motion.div variants={contactAnimation.section} className="section">
            <MdCall />
            <div className="text">
              <p>call</p>
              <p>+254769301113</p>
            </div>
          </motion.div>
          <motion.div variants={contactAnimation.section} className="section">
            <FaWhatsapp />
            <div className="text">
              <p>whatsapp</p>
              <p>+254769301113</p>
            </div>
          </motion.div>
          <motion.div variants={contactAnimation.section} className="section">
            <MdLocationOn />
            <div className="text">
              <p>address</p>
              <p>remote</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={contactAnimation.message}
          initial="closed"
          animate="open"
          className="message">
          <motion.h3 variants={contactAnimation.parts}>
            leave us a message
          </motion.h3>
          <motion.input
            variants={contactAnimation.parts}
            type="text"
            placeholder="name"
            id=""
          />
          <motion.input
            variants={contactAnimation.parts}
            type="email"
            placeholder="email"
            id=""
          />
          <motion.textarea
            variants={contactAnimation.parts}
            placeholder="message"
            id=""
          />
          <motion.button variants={contactAnimation.parts}>send</motion.button>
        </motion.div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Contact;
