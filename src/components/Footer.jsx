import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <motion.div 
          className="footer-content"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="footer-section company-info" variants={itemVariants}>
            <div className="footer-logo">
              <span className="logo-text">AI-SERV</span>
              <span className="logo-subtitle">Transforming Business with AI</span>
            </div>
            <p className="footer-description">
              Leading AI transformation company helping businesses leverage artificial intelligence 
              to drive growth, efficiency, and innovation. From strategy to implementation, 
              we're your trusted AI partner.
            </p>
            <div className="social-links">
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, backgroundColor: '#F7DD43' }}
                transition={{ duration: 0.2 }}
              >
                📘
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, backgroundColor: '#F7DD43' }}
                transition={{ duration: 0.2 }}
              >
                🐦
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, backgroundColor: '#F7DD43' }}
                transition={{ duration: 0.2 }}
              >
                📺
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, backgroundColor: '#F7DD43' }}
                transition={{ duration: 0.2 }}
              >
                📸
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.1, backgroundColor: '#F7DD43' }}
                transition={{ duration: 0.2 }}
              >
                💼
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Services</h3>
            <ul>
              <li><a href="#services">AI Strategy Consulting</a></li>
              <li><a href="#services">Process Automation</a></li>
              <li><a href="#services">AI Chatbots</a></li>
              <li><a href="#services">Data Analytics</a></li>
              <li><a href="#services">Machine Learning</a></li>
              <li><a href="#services">Custom AI Solutions</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#work">Case Studies</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News & Insights</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Resources</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#whitepapers">Whitepapers</a></li>
              <li><a href="#webinars">Webinars</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#support">Support Center</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@ai-serv.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>123 AI Street<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="newsletter-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated with AI Insights</h3>
              <p>Get the latest trends, case studies, and AI innovations delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <motion.button 
                className="newsletter-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} AI-SERV. All rights reserved.</p>
            </div>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
              <a href="#accessibility">Accessibility</a>
            </div>
            <div className="certifications">
              <span className="cert-item">🔒 SOC 2 Certified</span>
              <span className="cert-item">🛡️ ISO 27001</span>
              <span className="cert-item">✅ GDPR Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-gradient"></div>
      </div>
    </footer>
  );
};

export default Footer;
