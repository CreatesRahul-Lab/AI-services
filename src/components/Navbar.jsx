import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for navbar on load
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      x: -20
    },
    open: (index) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: index * 0.1 + 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 45
    }
  };

  return (
    <>
      <motion.header className="navbar">
        <div className="navbar-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="logo-text">
              AI<span className="logo-dot">-SERV</span>
            </span>
          </motion.div>
          
          <motion.div
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="hamburger-line"
              variants={hamburgerVariants}
              animate={menuOpen ? "open" : "closed"}
              style={{ transformOrigin: "center" }}
            ></motion.span>
            <motion.span
              className="hamburger-line"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            ></motion.span>
            <motion.span
              className="hamburger-line"
              animate={{ rotate: menuOpen ? -45 : 0 }}
              style={{ transformOrigin: "center" }}
            ></motion.span>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Close button - positioned relative to fullscreen menu */}
            <motion.button
              className="menu-close"
              onClick={closeMenu}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
            >
              ✕
            </motion.button>

            <div className="menu-content">
              <div className="menu-items">
                {[
                  { name: "HOME", icon: "�", section: "home" },
                  { name: "PORTFOLIO", icon: "�", section: "portfolio" },
                  { name: "ABOUT", icon: "👋", section: "about" },
                  { name: "SERVICES", icon: "⚡", section: "services" },
                  { name: "PROCESS", icon: "�", section: "process" },
                  { name: "CONTACT", icon: "📧", section: "contact" }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="menu-item"
                    custom={index}
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05, x: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => scrollToSection(item.section)}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-text">{item.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="menu-footer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p>Ready to grow your business?</p>
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET STARTED
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
