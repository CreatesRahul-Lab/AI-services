import React, { useEffect, useRef, useState } from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./WorkSection.css";

const WorkSection = () => {
  const sectionRef = useRef(null);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight;
          const section = sectionRef.current;
          
          if (section) {
            // Calculate smooth translation with easing
            const progress = Math.min(scrolled / windowHeight, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Smooth easing
            const translateY = (1 - easeProgress) * windowHeight;
            
            section.style.transform = `translateY(${translateY}px)`;
            
            // Check if work section is fully visible (completely overlaying)
            if (progress >= 0.95 && !isFullyVisible) {
              setIsFullyVisible(true);
              section.style.overflowY = "auto";
            } else if (progress < 0.95 && isFullyVisible) {
              setIsFullyVisible(false);
              section.style.overflowY = "hidden";
              section.scrollTop = 0;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add smooth scrolling behavior to body
    document.documentElement.style.scrollBehavior = "smooth";
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [isFullyVisible]);

  const workItems = [
    {
      id: 1,
      title: "AI-Powered E-Commerce",
      category: "Web Development",
      description: "Revolutionary shopping experience with AI recommendations",
      image: "🛒",
      tech: ["React", "TensorFlow", "Node.js"]
    },
    {
      id: 2,
      title: "Smart Analytics Dashboard",
      category: "Data Visualization", 
      description: "Real-time business insights with predictive analytics",
      image: "📊",
      tech: ["D3.js", "Python", "MongoDB"]
    },
    {
      id: 3,
      title: "Voice Assistant Platform",
      category: "AI Solutions",
      description: "Custom voice AI for enterprise applications",
      image: "🎤",
      tech: ["Speech API", "NLP", "Cloud AI"]
    },
    {
      id: 4,
      title: "Automated Trading Bot",
      category: "FinTech",
      description: "AI-driven trading algorithms with risk management",
      image: "📈",
      tech: ["Python", "ML", "API Integration"]
    },
    {
      id: 5,
      title: "Smart Home Ecosystem",
      category: "IoT",
      description: "Unified platform for intelligent home automation",
      image: "🏠",
      tech: ["IoT", "Mobile App", "AI"]
    },
    {
      id: 6,
      title: "Healthcare AI Platform",
      category: "Healthcare",
      description: "Diagnostic assistance with machine learning",
      image: "🏥",
      tech: ["Computer Vision", "AI", "HIPAA"]
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="portfolio"
      className={`work-section ${isFullyVisible ? 'fully-visible' : ''}`}
    >
      <div className="work-content">
        <div className="work-header">
          <h2 className="work-title">
            <span className="word">OUR</span>
            <span className="word highlight">PORTFOLIO</span>
          </h2>
          <p className="work-subtitle">
            Transforming ideas into intelligent solutions that drive business growth
          </p>
        </div>

        <div className="work-grid">
          {workItems.map((item, index) => (
            <div key={item.id} className="work-item">
              <div className="work-item-content">
                <div className="work-image">
                  <span className="work-emoji">{item.image}</span>
                  <div className="work-overlay">
                    <button className="view-project-btn">View Project</button>
                  </div>
                </div>
                
                <div className="work-info">
                  <span className="work-category">{item.category}</span>
                  <h3 className="work-item-title">{item.title}</h3>
                  <p className="work-description">{item.description}</p>
                  
                  <div className="work-tech">
                    {item.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-cta">
          <h3>Ready to start your project?</h3>
          <button className="contact-btn">
            LET'S WORK TOGETHER
          </button>
        </div>

        {/* All other sections within the work section overlay */}
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </section>
  );
};

export default WorkSection;
