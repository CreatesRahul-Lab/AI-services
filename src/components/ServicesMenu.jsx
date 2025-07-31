import React from "react";
import { motion } from "framer-motion";
import "./ServicesMenu.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ServicesMenu = () => {
  return (
    <motion.div
      className="services-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="service-box" variants={itemVariants}>
        <span>BRANDING</span>
        <img src="https://img.icons8.com/ios/100/design--v1.png" alt="Branding" />
      </motion.div>

      <motion.div className="service-box" variants={itemVariants}>
        <span>WEB DESIGN</span>
        <img src="https://img.icons8.com/ios/100/laptop.png" alt="Web Design" />
      </motion.div>

      <motion.div className="service-box quote" variants={itemVariants}>
        <img src="https://img.icons8.com/ios/100/email.png" alt="Quote" />
        <span>REQUEST A QUOTE</span>
      </motion.div>
    </motion.div>
  );
};

export default ServicesMenu;
