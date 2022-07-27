/** @format */

import { useContext } from "react";
import { Container } from "./Contact.styled";
import Navigation from "../navigationbar/Navigation";
import Footer from "../footer/Footer";
import { MdCall, MdMail, MdLocationOn, MdFacebook } from "react-icons/md";
import { FaTwitter, FaYoutube, FaCopyright, FaWhatsapp } from "react-icons/fa";
import { jewelleryContext } from "../statemaneger/contextapi/Context";

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
        <div className="contact_details">
          <div className="section">
            <MdMail />
            <div className="text">
              <p>email</p>
              <p>foreveraluku@gmail.com</p>
            </div>
          </div>
          <div className="section">
            <MdCall />
            <div className="text">
              <p>call</p>
              <p>+254769301113</p>
            </div>
          </div>
          <div className="section">
            <FaWhatsapp />
            <div className="text">
              <p>whatsapp</p>
              <p>+254769301113</p>
            </div>
          </div>
          <div className="section">
            <MdLocationOn />
            <div className="text">
              <p>address</p>
              <p>remote</p>
            </div>
          </div>
        </div>
        <div className="message">
          <h3>leave us a message</h3>
          <input type="text" placeholder="name" id="" />
          <input type="email" placeholder="email" id="" />
          <textarea placeholder="message" id="" />
          <button>send</button>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Contact;
