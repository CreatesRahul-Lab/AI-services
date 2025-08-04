import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import "./AboutSection.css";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [showTeamCards, setShowTeamCards] = useState(false);

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

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that drive the future."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work closely with our clients as trusted partners, ensuring their success is our success."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "Quality is never an accident. We maintain the highest standards in everything we deliver."
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "We build scalable solutions that grow with your business and adapt to changing needs."
    }
  ];

  const teamMembers = [
    {
      name: "Rahul Arora",
      title: "AI Research Director",
      handle: "rahularora",
      status: "Online",
      avatarUrl: "/WhatsApp Image 2025-06-20 at 22.41.40.jpeg",
      contactText: "Contact Me"
    },
    {
      name: "Kamal",
      title: "Lead ML Engineer",
      handle: "kamal_dev",
      status: "Online",
      avatarUrl: "/Leonardo_Phoenix_A_warm_and_inviting_profile_picture_of_a_youn_1.jpg",
      contactText: "Contact Me"
    },
    {
      name: "Himat Singh",
      title: "AI Solutions Architect",
      handle: "himatsingh",
      status: "Online",
      avatarUrl: "/Lucid_Origin_generate_a_professional_image_of_a_man_of_Indian__2.jpg",
      contactText: "Contact Me"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero animate-on-scroll">
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="word">ABOUT</span>
            <span className="word highlight">AI-SERV</span>
          </motion.h2>
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transforming businesses through intelligent technology solutions
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="about-story">
          <div className="story-content animate-on-scroll">
            <div className="story-text">
              <h3>Our Story</h3>
              <p>
                Founded with a vision to democratize artificial intelligence, AI-SERV has been at the forefront 
                of digital transformation for over 5 years. We believe that every business, regardless of size, 
                deserves access to cutting-edge technology that can drive growth and innovation.
              </p>
              <p>
                Our journey began with a simple question: "How can we make complex technology accessible and 
                beneficial for everyone?" This question continues to drive our mission as we develop solutions 
                that bridge the gap between advanced AI capabilities and real-world business needs.
              </p>
              <p>
                Today, we're proud to have helped over 50 companies transform their operations, improve 
                efficiency, and achieve unprecedented growth through our innovative AI-powered solutions.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🌟</span>
                <p>Innovation in Action</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats animate-on-scroll">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="about-values animate-on-scroll">
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="about-team animate-on-scroll">
          <h3 className="team-title">Meet Our Team</h3>
          <p className="team-description">
            Our diverse team of experts brings together decades of experience in AI, software development, 
            and business strategy to deliver exceptional results for our clients.
          </p>
          <div className="team-cta">
            <motion.button 
              className="team-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTeamCards(!showTeamCards)}
            >
              {showTeamCards ? 'Hide Team' : 'Meet Our Team'}
            </motion.button>
          </div>

          {/* Team Cards */}
          {showTeamCards && (
            <motion.div 
              className="team-cards-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="team-cards-grid">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProfileCard
                      name={member.name}
                      title={member.title}
                      handle={member.handle}
                      status={member.status}
                      contactText={member.contactText}
                      avatarUrl={member.avatarUrl}
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                      onContactClick={() => console.log(`Contact ${member.name} clicked`)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
