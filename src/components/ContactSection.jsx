import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <motion.div 
          className="contact-header animate-on-scroll"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="contact-title" variants={itemVariants}>
            <span className="word">Ready</span>
            <span className="word">to</span>
            <span className="word highlight">Transform</span>
            <span className="word">Your</span>
            <span className="word">Business?</span>
          </motion.h2>
          <motion.p className="contact-subtitle" variants={itemVariants}>
            Let's discuss your AI transformation journey. Get in touch with our experts today.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="contact-content animate-on-scroll">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="ai-consulting">AI Strategy Consulting</option>
                    <option value="automation">Process Automation</option>
                    <option value="chatbots">AI Chatbots</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="ml-models">Machine Learning Models</option>
                    <option value="custom">Custom AI Solutions</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select id="budget" name="budget">
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <span className="button-arrow">→</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-card">
                <h3>Get in Touch</h3>
                <p>Ready to start your AI transformation? We're here to help you every step of the way.</p>
                
                <div className="contact-methods">
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="method-icon">📧</div>
                    <div className="method-content">
                      <h4>Email Us</h4>
                      <p>hello@ai-serv.com</p>
                      <span>Response within 2-4 hours</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="method-icon">📞</div>
                    <div className="method-content">
                      <h4>Call Us</h4>
                      <p>+1 (555) 123-4567</p>
                      <span>Mon-Fri 9AM-6PM EST</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="method-icon">💬</div>
                    <div className="method-content">
                      <h4>Live Chat</h4>
                      <p>Available on our website</p>
                      <span>Instant responses</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-method"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="method-icon">📍</div>
                    <div className="method-content">
                      <h4>Visit Us</h4>
                      <p>123 AI Street, Tech City</p>
                      <span>By appointment only</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="office-hours">
                  <h4>Office Hours</h4>
                  <div className="hours-grid">
                    <div className="hours-row">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-grid">
                    <motion.a href="#" whileHover={{ scale: 1.1 }}>
                      <span>📘</span> LinkedIn
                    </motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.1 }}>
                      <span>🐦</span> Twitter
                    </motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.1 }}>
                      <span>📺</span> YouTube
                    </motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.1 }}>
                      <span>📸</span> Instagram
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="contact-faq animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does a typical AI project take?</h4>
              <p>Project timelines vary based on complexity, but most implementations take 3-6 months from consultation to deployment.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide ongoing support?</h4>
              <p>Yes, we offer comprehensive support packages including maintenance, updates, and optimization services.</p>
            </div>
            <div className="faq-item">
              <h4>What industries do you serve?</h4>
              <p>We work with businesses across all industries, from startups to enterprise corporations looking to leverage AI.</p>
            </div>
            <div className="faq-item">
              <h4>Can you integrate with existing systems?</h4>
              <p>Absolutely. Our solutions are designed to seamlessly integrate with your current technology stack and workflows.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
