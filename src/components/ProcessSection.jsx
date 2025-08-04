import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ProcessSection.css";

const ProcessSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, challenges, and requirements through detailed consultation sessions.",
      icon: "🔍",
      duration: "1-2 weeks",
      deliverables: ["Project Brief", "Requirements Document", "Technical Proposal"]
    },
    {
      number: "02",
      title: "Planning & Strategy",
      description: "Our experts create a comprehensive project roadmap with clear timelines, milestones, and technical specifications.",
      icon: "📋",
      duration: "1 week",
      deliverables: ["Project Timeline", "Technical Architecture", "Resource Allocation"]
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description: "We create wireframes, mockups, and prototypes to visualize the solution before development begins.",
      icon: "🎨",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Designs", "Interactive Prototypes", "Design System"]
    },
    {
      number: "04",
      title: "Development & Testing",
      description: "Our development team builds your solution using agile methodologies with continuous testing and quality assurance.",
      icon: "⚙️",
      duration: "4-12 weeks",
      deliverables: ["Working Software", "Test Reports", "Documentation"]
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We deploy your solution to production environments and ensure everything runs smoothly for your launch.",
      icon: "🚀",
      duration: "1 week",
      deliverables: ["Live Application", "Deployment Guide", "Performance Report"]
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Post-launch support includes monitoring, updates, and continuous improvements to ensure optimal performance.",
      icon: "🛠️",
      duration: "Ongoing",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring"]
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="process-section">
      <div className="process-container">
        {/* Header */}
        <div className="process-header animate-on-scroll">
          <motion.h2 
            className="process-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="word">OUR</span>
            <span className="word highlight">PROCESS</span>
          </motion.h2>
          <motion.p 
            className="process-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A proven methodology to bring your ideas to life
          </motion.p>
        </div>

        {/* Steps */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="step-item animate-on-scroll"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`step-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="step-number">{step.number}</div>
                
                <div className="step-content">
                  <div className="step-icon">
                    <span>{step.icon}</span>
                  </div>
                  
                  <div className="step-info">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    
                    <div className="step-meta">
                      <div className="step-duration">
                        <strong>Duration:</strong> {step.duration}
                      </div>
                      
                      <div className="step-deliverables">
                        <strong>Deliverables:</strong>
                        <ul>
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="process-cta animate-on-scroll">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's begin with a free consultation to understand your needs</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            START YOUR PROJECT
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
