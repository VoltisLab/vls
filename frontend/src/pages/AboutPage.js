import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const AboutPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const sideProjects = [
    {
      title: "Little Buddy Move",
      description: "Interactive Music Video",
      link: "#"
    },
    {
      title: "Zorya",
      description: "Music Album by Floex",
      link: "#"
    },
    {
      title: "Kooky",
      description: "Puppet Feature Film and Book",
      link: "#"
    },
    {
      title: "Osada",
      description: "Online Interactive Music Video",
      link: "#"
    },
    {
      title: "Shy Dwarf",
      description: "Short Web Game by Jára Plachý",
      link: "#"
    },
    {
      title: "Plantage",
      description: "Music Video for Under Byen",
      link: "#"
    },
    {
      title: "Na tu svatbu",
      description: "Music Video for Kamil Jasmín",
      link: "#"
    },
    {
      title: "Nusle",
      description: "Short Film",
      link: "#"
    },
    {
      title: "Psyride",
      description: "Psytrance Music Video",
      link: "#"
    },
    {
      title: "Blanka Šperková",
      description: "Flash Website",
      link: "#"
    },
    {
      title: "Podvědomím",
      description: "Flash Website",
      link: "#"
    },
    {
      title: "Pantry",
      description: "Web Toy",
      link: "#"
    }
  ];

  return (
    <div className="about-page">
      <Header />
      <main className="main-content">
        <div className="about-content">
          <section className="about-section">
            <h1 className="page-title">About Amanita Design</h1>
            <div className="about-text">
              <p>
                Amanita Design is a Czech indie game developer. The studio was founded in 2003 by 
                designer, artist and animator Jakub Dvorsky, and is known for its emphasis on surreal 
                worlds, light-hearted humour, hand-crafted appeal and audiovisual experience.
              </p>
              <p>
                Amanita is currently operating in several small teams, working on a bunch of new games 
                for various platforms.
              </p>
            </div>
          </section>

          <section className="crew-section">
            <h2 className="section-title">Amanita Crew</h2>
            <div className="crew-info">
              <p>
                Our team consists of passionate creators, artists, programmers, and designers who bring 
                unique artistic visions to life through interactive experiences.
              </p>
            </div>
          </section>

          <section className="projects-section">
            <h2 className="section-title">Our Side Projects</h2>
            <div className="projects-grid">
              {sideProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              ))}
            </div>

            <div className="music-videos">
              <h3 className="subsection-title">Music Videos</h3>
              <ul className="music-video-list">
                <li><a href="https://youtu.be/lZk-9hyF-sQ" target="_blank" rel="noopener noreferrer">Vespering - DVA, Jaromír Plachý</a></li>
                <li><a href="https://youtu.be/JPJrHrH4dWc" target="_blank" rel="noopener noreferrer">Mulatu - DVA, Jaromír Plachý</a></li>
                <li><a href="https://youtu.be/xMoXnZpYgFk" target="_blank" rel="noopener noreferrer">Nunovó tango - DVA, Jaromír Plachý</a></li>
              </ul>
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