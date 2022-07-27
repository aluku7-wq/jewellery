/** @format */

import React from "react";
import { Container } from "./Preloader.style";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <Container>
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
        }}></motion.div>
    </Container>
  );
};

export default Preloader;
