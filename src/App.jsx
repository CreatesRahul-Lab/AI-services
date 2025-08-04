import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import WorkSection from "./components/WorkSection";
import "./App.css";

function App() {
  useEffect(() => {
    // Set body height to enable scrolling for the overlay effect
    document.body.style.height = "200vh";
    
    // GSAP animations for hero text
    const tl = gsap.timeline({ delay: 1.5 });
    
    tl.fromTo(
      ".hero-title .word",
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        stagger: 0.2 
      }
    )
    .fromTo(
      ".hero-subtitle",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      },
      "-=0.5"
    )
    .fromTo(
      ".hero-description",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      },
      "-=0.3"
    );

    // Cleanup function
    return () => {
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      
      <main className="hero-section">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="word">TRANSFORMING</span>
            <span className="word highlight">BUSINESSES</span>
            <span className="word">WITH</span>
            <span className="word ai-text">AI-POWERED</span>
            <span className="word">SOLUTIONS</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            Elevate your digital presence with cutting-edge AI technology
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.3 }}
          >
            <motion.button 
              className="primary-btn"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(247, 221, 67, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              START YOUR TRANSFORMATION
            </motion.button>
            
            <motion.button 
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW OUR WORK
            </motion.button>
          </motion.div>

          {/* Left Side Floating Elements */}
          <motion.div 
            className="side-animations left-side"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <motion.div 
              className="floating-element brain-icon"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              🧠
            </motion.div>
            <motion.div 
              className="floating-element chart-icon"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.5 
              }}
            >
              📊
            </motion.div>
          </motion.div>

          {/* Right Side Floating Elements */}
          <motion.div 
            className="side-animations right-side"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            <motion.div 
              className="floating-element robot-icon"
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, -8, 8, 0]
              }}
              transition={{ 
                duration: 4.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5 
              }}
            >
              🤖
            </motion.div>
            <motion.div 
              className="floating-element rocket-icon"
              animate={{ 
                y: [0, -18, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2 
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
        
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </main>

      {/* Work Section - This will overlay the hero section on scroll and contain all other sections */}
      <WorkSection />
    </div>
  );
}

export default App;
