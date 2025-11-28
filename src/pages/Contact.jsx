import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    agree: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Inquiry from ${formData.name} - ${formData.company || 'Individual'}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service || 'General Inquiry'}

Project Details:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:mpasjkt@ptmpas.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      agree: false
    });

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Have a project in mind? Contact our team to discuss your oil & gas well testing needs</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="form-container">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and your default email client will open with your message
              </p>

              {showSuccess && (
                <div className="success-message">
                  <span>✓</span>
                  <div>
                    <strong>Form submitted!</strong><br />
                    Your email client should open. If not, please email us directly at mpasjkt@ptmpas.com
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+62 812-3456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="2-Phase Metering System">2-Phase Metering System</option>
                    <option value="3-Phase Metering System">3-Phase Metering System</option>
                    <option value="Mobile Testing Unit">Mobile Testing Unit</option>
                    <option value="Engineering Services">Engineering Services</option>
                    <option value="Installation & Maintenance">Installation & Maintenance</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Project Details <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="checkbox-input"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="agree" className="checkbox-label">
                      I agree to PT MPAS contacting me about my inquiry <span className="required">*</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="form-submit">
                  Submit Inquiry
                </button>

                <div className="alternative-contact">
                  <h4>Prefer instant messaging?</h4>
                  <div className="alt-buttons">
                    <a
                      href="https://wa.me/6281380365608"  
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-alt"
                    >
                      💬 WhatsApp Us
                    </a>
                    <a href="salesmpas@ptmpas.com" className="btn-email">
                      ✉️ Send Email
                    </a>
                  </div>
                </div>
              </form>
            </div>

            <div className="contact-info-panel">
              <div className="info-section">
                <h3>
                  <span className="info-icon">📍</span>
                  Our Offices
                </h3>
                <div className="office-block">
                  <div className="office-title">Head Office</div>
                  <div className="office-details">
                    Kokan Permata Kelapa Gading Block D/27<br />
                    Jl. Boulevard Bukit Gading Raya<br />
                    Kelapa Gading, Jakarta 14240<br />
                    <a href="tel:0214529256">Tel: 0214529256</a><br />
                  </div>
                </div>

                <div className="office-block">
                  <div className="office-title">Workshop Cikarang</div>
                  <div className="office-details">
                    Greenland Industrial Area<br />
                    Block AE-20/21, Km.37 Tol Cikampek<br />
                    Cikarang Pusat, Bekasi<br />
                    Jawa Barat 17550<br />
                    <a href="tel:02189118310">Tel: 02189118310</a>
                  </div>
                </div>

                <div className="office-block">
                  <div className="office-title">Workshop Duri</div>
                  <div className="office-details">
                    Dumai KM4, Jl. Duri IV<br />
                    Balai Makam, Kec. Mandau<br />
                    Kabupaten Bengkalis, Riau 28983
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>
                  <span className="info-icon">✉️</span>
                  Email
                </h3>
                <div className="office-details">
                  <a href="mailto:salesmpas@ptmpas.com">salesmpas@ptmpas.com</a><br />
                  {/* <a href="mailto:mpas.jkt@gmail.com">mpas.jkt@gmail.com</a> */}
                </div>
              </div>

              <div className="info-section">
                <h3>
                  <span className="info-icon">🕐</span>
                  Business Hours
                </h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday:</span>
                    <strong>8:00 AM - 5:00 PM</strong>
                  </div>
                  <div className="hours-item">
                    <span>Saturday - Sunday:</span>
                    <strong>Closed</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
