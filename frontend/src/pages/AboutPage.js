import React, { useState } from "react";
import { Users, Target, Zap, Globe, Heart, Award, Rocket } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const AboutPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const values = [
    {
      icon: <Zap size={32} />,
      title: "Player-First Design",
      description: "Every decision we make prioritizes the player experience, ensuring games that feel intuitive and engaging.",
      color: "#6366f1"
    },
    {
      icon: <Heart size={32} />,
      title: "ADHD-Friendly Features",
      description: "We design with neurodiversity in mind, creating satisfying feedback systems and accessible gameplay.",
      color: "#ec4899"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Communities",
      description: "Building worldwide gaming communities that connect players across different cultures and backgrounds.",
      color: "#10b981"
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation Focus",
      description: "Pushing boundaries with experimental mechanics and cutting-edge technology in every project.",
      color: "#f59e0b"
    },
    {
      icon: <Target size={32} />,
      title: "Quality Craftsmanship",
      description: "Meticulous attention to detail in every aspect of game development, from concept to final polish.",
      color: "#8b5cf6"
    },
    {
      icon: <Rocket size={32} />,
      title: "Creative Expression",
      description: "Empowering our team's creativity to produce unique experiences that stand out in the gaming landscape.",
      color: "#06b6d4"
    }
  ];

  const stats = [
    { number: "100K+", label: "Players Worldwide" },
    { number: "4.8★", label: "Average Rating" },
    { number: "9", label: "Games in Portfolio" },
    { number: "2024", label: "Founded" }
  ];

  const team = [
    {
      name: "Game Development",
      role: "Core Team",
      description: "Passionate developers creating innovative gaming experiences"
    },
    {
      name: "Creative Design",
      role: "Art & UX",
      description: "Visual artists and UX designers crafting beautiful interfaces"
    },
    {
      name: "Community",
      role: "Player Success",
      description: "Dedicated to building and supporting our gaming communities"
    }
  ];

  return (
    <div className="about-page">
      <Header />
      <main className="main-content">
        <div className="container">
          {/* Simple Hero Section */}
          <section className="about-hero-simple">
            <div className="hero-badge">
              <Award size={20} />
              <span>Game Development Studio</span>
            </div>
            <h1 className="about-title">Voltis Labs Games</h1>
            <p className="about-subtitle">
              Pushing the boundaries of play, creativity, and interactive storytelling
            </p>
            <div className="hero-description">
              <p>
                We craft unique, addictive, and visually striking experiences that merge fun with imagination. 
                From high-speed racers to experimental titles, our mission is simple: make games that feel 
                good to play and hard to put down.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mission-section">
            <div className="app-store-card wide-card">
              <div className="card-header">
                <div className="card-icon">
                  <Target size={24} />
                </div>
                <h2 className="card-title">Our Mission</h2>
              </div>
              <div className="card-content">
                <p>
                  We believe in player-first design, ADHD-friendly features, and building global communities 
                  around our titles. Our games are not just entertainment—they're ecosystems, challenges, 
                  and canvases built with care, purpose, and experimental energy.
                </p>
                <p>
                  Whether you're here to race, build, explore, or collaborate, welcome to the new era of gaming. 
                  We're committed to creating experiences that are not only fun but meaningful, bringing people 
                  together across the globe through shared adventures and challenges.
                </p>
                <p>
                  Our approach combines cutting-edge technology with timeless game design principles, ensuring 
                  that every title we release pushes the medium forward while remaining accessible to players 
                  of all backgrounds and skill levels.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h2 className="section-title">What Drives Us</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon" style={{ background: `linear-gradient(135deg, ${value.color}, ${value.color}dd)` }}>
                    {value.icon}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2 className="section-title">Our Team</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-avatar">
                    <Users size={32} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Culture Section */}
          <section className="culture-section">
            <div className="app-store-card">
              <div className="card-header">
                <div className="card-icon">
                  <Rocket size={24} />
                </div>
                <h2 className="card-title">Studio Culture</h2>
              </div>
              <div className="card-content">
                <p>
                  We thrive on a remote, creative-first studio culture that values innovation, collaboration, 
                  and individual creativity. Our team consists of passionate creators, artists, programmers, 
                  and designers from around the world.
                </p>
                <p>
                  Every team member brings unique perspectives that shape our gaming visions into interactive 
                  experiences that push boundaries and create lasting memories.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-card">
              <h2 className="cta-title">Ready to Play?</h2>
              <p className="cta-description">
                Discover our collection of innovative games and join our growing community of players worldwide.
              </p>
              <a href="/games" className="cta-button">
                <Zap size={20} />
                Explore Our Games
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
};

export default AboutPage;