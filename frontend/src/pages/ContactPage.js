import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const ContactPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(''); // 'submitted', 'error', ''

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowForm(true);
    setFormStatus('');
    
    // Set default subject based on selection
    let defaultSubject = '';
    switch(value) {
      case 'games':
        defaultSubject = 'Customer Support - Games';
        break;
      case 'merch':
        defaultSubject = 'Customer Support - Merch';
        break;
      case 'business':
        defaultSubject = 'Business & Licensing Enquiry';
        break;
      case 'press':
        defaultSubject = 'Press & Marketing Enquiry';
        break;
      case 'feedback':
        defaultSubject = 'Other Suggestions & Feedback';
        break;
      default:
        defaultSubject = '';
    }
    
    setFormData(prev => ({
      ...prev,
      subject: defaultSubject
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    try {
      console.log('Form submitted:', formData);
      setFormStatus('submitted');
      setShowForm(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSelectedOption('');
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="main-content">
        <div className="amanita-contact-container">
          {/* Hero Section */}
          <div className="contact-hero-section">
            <div className="contact-hero-icon">
              📧
            </div>
            <h1 className="amanita-contact-title">Get In Touch</h1>
            <p className="amanita-contact-subtitle">
              We'd love to hear from you. Choose your inquiry type below and we'll get back to you soon.
            </p>
          </div>

          {/* Status Messages */}
          {formStatus === 'submitted' && (
            <div className="amanita-success">
              ✅ We have received your message and a copy was sent to your email.
            </div>
          )}

          {formStatus === 'error' && (
            <div className="amanita-error">
              ❌ There was an error sending the message. Please try again later.
            </div>
          )}

          {/* Main Layout */}
          <div className="contact-main-layout">
            {/* Selection Section */}
            <div className="contact-selection-section">
              <h2 className="amanita-question">What can we help you with?</h2>
              
              <div className="amanita-radio-group">
                <label className="amanita-radio-label">
                  <input 
                    type="radio" 
                    name="support-type" 
                    value="games"
                    checked={selectedOption === 'games'}
                    onChange={handleRadioChange}
                  />
                  <span className="amanita-checkmark"></span>
                  🎮 Customer Support - Games
                </label>
                
                <label className="amanita-radio-label">
                  <input 
                    type="radio" 
                    name="support-type" 
                    value="merch"
                    checked={selectedOption === 'merch'}
                    onChange={handleRadioChange}
                  />
                  <span className="amanita-checkmark"></span>
                  🛍️ Customer Support - Merch
                </label>
                
                <label className="amanita-radio-label">
                  <input 
                    type="radio" 
                    name="support-type" 
                    value="business"
                    checked={selectedOption === 'business'}
                    onChange={handleRadioChange}
                  />
                  <span className="amanita-checkmark"></span>
                  💼 Business & Licensing Enquiry
                </label>
                
                <label className="amanita-radio-label">
                  <input 
                    type="radio" 
                    name="support-type" 
                    value="press"
                    checked={selectedOption === 'press'}
                    onChange={handleRadioChange}
                  />
                  <span className="amanita-checkmark"></span>
                  📰 Press & Marketing Enquiry
                </label>
                
                <label className="amanita-radio-label">
                  <input 
                    type="radio" 
                    name="support-type" 
                    value="feedback"
                    checked={selectedOption === 'feedback'}
                    onChange={handleRadioChange}
                  />
                  <span className="amanita-checkmark"></span>
                  💭 Other Suggestions & Feedback
                </label>
              </div>
            </div>

            {/* Form Section */}
            <div className="contact-form-section">
              {showForm ? (
                <form className={`amanita-contact-form ${showForm ? 'show' : ''}`} onSubmit={handleSubmit}>
                  <h2 className="form-title">Contact Form</h2>
                  
                  <div className="amanita-form-group">
                    <label htmlFor="name" className="amanita-form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="amanita-form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="amanita-form-group">
                    <label htmlFor="email" className="amanita-form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="amanita-form-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="amanita-form-group">
                    <label htmlFor="subject" className="amanita-form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="amanita-form-input"
                      placeholder="Subject of your inquiry"
                      required
                    />
                  </div>

                  <div className="amanita-form-group">
                    <label htmlFor="message" className="amanita-form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="amanita-form-textarea"
                      rows="6"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <button type="submit" className="amanita-submit-button">
                    Send Message
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#cccccc' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>👈</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Select an option</h3>
                  <p>Choose what you need help with to get started</p>
                </div>
              )}
            </div>
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