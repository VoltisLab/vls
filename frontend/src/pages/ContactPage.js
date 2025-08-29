import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";

const ContactPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Mock form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="main-content">
        <div className="contact-content">
          <section className="contact-header">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-description">
              Get in touch with the Amanita Design team. We'd love to hear from you!
            </p>
          </section>

          <div className="contact-layout">
            <section className="contact-form-section">
              <h2 className="section-title">Send us a message</h2>
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
                  ></textarea>
                </div>
                
                <Button type="submit" className="submit-button">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </section>

            <section className="contact-info-section">
              <h2 className="section-title">Contact Information</h2>
              
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>
                      Amanita Design s.r.o.<br />
                      Brno, Czech Republic
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>info@amanita-design.net</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-details">
                    <h3>Business Inquiries</h3>
                    <p>For press and business inquiries, please use the contact form or email us directly.</p>
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <h3>Press & Media</h3>
                <p>
                  For press kits, interviews, or media inquiries, please contact us using the form. 
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </section>
          </div>
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