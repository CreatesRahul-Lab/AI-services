import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ServicesSection.css";

const ServicesSection = () => {
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

  const services = [
    {
      id: 1,
      icon: "🤖",
      title: "AI Development",
      description: "Custom artificial intelligence solutions tailored to your business needs.",
      features: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision"],
      price: "Starting at $5,000"
    },
    {
      id: 2,
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["React/Next.js", "Node.js", "Modern UI/UX", "Performance Optimization"],
      price: "Starting at $3,000"
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "iOS Development", "Android Development", "Cross-Platform"],
      price: "Starting at $4,000"
    },
    {
      id: 4,
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["AWS/Azure", "DevOps", "Microservices", "Auto-scaling"],
      price: "Starting at $2,500"
    },
    {
      id: 5,
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics.",
      features: ["Big Data", "Data Visualization", "Business Intelligence", "Predictive Analytics"],
      price: "Starting at $3,500"
    },
    {
      id: 6,
      icon: "💡",
      title: "Consulting",
      description: "Strategic technology consulting to optimize your digital transformation.",
      features: ["Tech Strategy", "Digital Transformation", "Process Optimization", "Team Training"],
      price: "Starting at $200/hour"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header animate-on-scroll">
          <motion.h2 
            className="services-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="word">OUR</span>
            <span className="word highlight">SERVICES</span>
          </motion.h2>
          <motion.p 
            className="services-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions to accelerate your digital journey
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="services-grid animate-on-scroll">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <motion.button 
                    className="service-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta animate-on-scroll">
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss how our services can help you achieve your goals</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET STARTED TODAY
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
