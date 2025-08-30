import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const AboutPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const sideProjects = [
    {
      title: "VModel",
      description: "Designed for Creators, Built for the Future",
      link: "https://vmodelapp.com/"
    },
    {
      title: "Prelura",
      description: "A New Home for Your Fashion Finds",
      link: "https://prelura.com/"
    },
    {
      title: "PONY",
      description: "Interests Make Connections, Start With Substance",
      link: "https://myponyapp.com/"
    },
    {
      title: "Afrogarm",
      description: "Rooted in Culture, Styled for Everyone",
      link: "https://www.afrogarm.com/"
    },
    {
      title: "Outfeatz",
      description: "Smart Fashion Tools",
      link: "#"
    },
    {
      title: "Loyalty Bot",
      description: "Building Customer Loyalty",
      link: "#"
    },
    {
      title: "VoltisLabs Academy",
      description: "Hands-on Learning and Internship Hub",
      link: "https://voltislabs.com/academy"
    },
    {
      title: "ProductiveToolkits",
      description: "Smart Tools for Fast Image & Video Editing",
      link: "#"
    }
  ];

  return (
    <div className="about-page">
      <Header />
      <main className="main-content">
        <div className="about-content">
          <section className="about-section">
            <h1 className="page-title">About Voltis Labs Games</h1>
            <div className="about-text">
              <p>
                Voltis Labs Games is the game development arm of Voltis Labs, built to push the boundaries of play, creativity, and interactive storytelling.
              </p>
              <p>
                We craft unique, addictive, and visually striking experiences that merge fun with imagination. From high-speed racers like Spinnersonic to experimental titles still in the lab, our mission is simple: to make games that feel good to play and hard to put down.
              </p>
              <p>
                We believe in player-first design, ADHD-friendly features, and building global communities around our titles - all from a remote, creative-first studio culture that thrives on innovation.
              </p>
              <p>
                Our games are not just for entertainment. They're ecosystems, challenges, and canvases built with care, purpose, and the same experimental energy that defines Voltis Labs.
              </p>
              <p>
                Whether you're here to race, build, explore, or collaborate, welcome to the new era of gaming.
              </p>
              <p>
                <strong>Welcome to Voltis Labs Games.</strong>
              </p>
            </div>
          </section>

          <section className="crew-section">
            <h2 className="section-title">Our Team</h2>
            <div className="crew-info">
              <p>
                Our team consists of passionate creators, artists, programmers, and designers who bring 
                unique gaming visions to life through interactive experiences that push boundaries.
              </p>
            </div>
          </section>

          <section className="projects-section">
            <h2 className="section-title">Our Focus</h2>
            <div className="projects-info">
              <p>
                At Voltis Labs Games, we are dedicated exclusively to creating exceptional gaming experiences. 
                Our team focuses all energy and creativity on developing innovative games that push the 
                boundaries of interactive entertainment.
              </p>
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