import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const ContactPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="main-content">
        <div className="contact-content">
          <section className="contact-header">
            <h1 className="page-title">Contact Voltis Labs Games</h1>
            <p className="page-description">
              Get in touch with our team. We'd love to hear from you about our games, partnerships, or any questions you might have.
            </p>
          </section>

          <div className="contact-layout">
            <div className="contact-form-section">
              <h2 className="form-title">Send us a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    required
                  />
                </div>
                
                <button type="submit" className="submit-button">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2 className="info-title">Get in touch</h2>
              
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>games@voltislabs.com</p>
                    <p>support@voltislabs.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Available Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Remote-First Studio</p>
                    <p>Global Team, Local Impact</p>
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <h3>More Information</h3>
                <p>
                  Voltis Labs Games is a remote-first studio that thrives on innovation and creativity. 
                  We're always excited to connect with fellow gamers, developers, and partners.
                </p>
                
                <div className="info-links">
                  <a href="https://voltislabs.com" target="_blank" rel="noopener noreferrer" className="info-link">
                    <ExternalLink size={16} />
                    Main Voltis Labs Website
                  </a>
                  <a href="https://voltislabs.com/academy" target="_blank" rel="noopener noreferrer" className="info-link">
                    <ExternalLink size={16} />
                    Voltis Labs Academy
                  </a>
                  <a href="https://voltislabs.com/blog" target="_blank" rel="noopener noreferrer" className="info-link">
                    <ExternalLink size={16} />
                    Our Blog
                  </a>
                </div>

                <div className="business-hours">
                  <h4>Business Hours</h4>
                  <ul>
                    <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                    <li>Saturday - Sunday: Closed</li>
                    <li>Emergency Support: Available 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="partnership-section">
            <h2 className="section-title">Partnership Opportunities</h2>
            <div className="partnership-content">
              <p>
                Interested in partnering with Voltis Labs Games? We're always looking for 
                collaborations that push the boundaries of gaming and technology.
              </p>
              <div className="partnership-types">
                <div className="partnership-type">
                  <h3>Game Development</h3>
                  <p>Collaborate on innovative gaming experiences</p>
                </div>
                <div className="partnership-type">
                  <h3>Technology Integration</h3>
                  <p>Integrate cutting-edge tech into gaming</p>
                </div>
                <div className="partnership-type">
                  <h3>Publishing</h3>
                  <p>Publish your games through our network</p>
                </div>
              </div>
              <a href="mailto:partnerships@voltislabs.com" className="partnership-cta">
                Contact Partnerships Team
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

export default ContactPage;