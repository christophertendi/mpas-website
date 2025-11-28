import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">26 Years of Excellence in<br />Oil & Gas Piping Solutions</h1>
          <p className="hero-subtitle fade-in-up">
            Trusted partner for custom piping solutions, engineering services, and quality assurance 
            in Indonesia's energy sector with proven Accuflow technology
          </p>
          <div className="hero-buttons fade-in-up">
            <Link to="/products" className="btn btn-primary">Explore Our Solutions</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
        <div className="scroll-indicator bounce">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <div className="trust-number">ISO9001/14001/45001</div>
              <div className="trust-text">Certified Quality</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📈</div>
              <div className="trust-number">100+</div>
              <div className="trust-text">Projects Completed</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🏭</div>
              <div className="trust-number">26 Years</div>
              <div className="trust-text">Industry Experience</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <div className="trust-number">15+</div>
              <div className="trust-text">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section section-gray">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h3 className="eyebrow">About PT Mitra Prana Abadi Sentosa</h3>
              <h2>Leading Provider of Well Test Measurement Solutions</h2>
              <p className="overview-text">
                Established in 1999, PT. MPAS is committed to providing the best solutions in production 
                well testing, flow measurement, and operation and maintenance services for oil and gas 
                facilities. MPAS has become a trusted partner to various national upstream oil and gas 
                companies, with a proven track record of over 120,000 well tests conducted annually.
              </p>
              <ul className="overview-highlights">
                <li>Over 120,000 well tests conducted annually</li>
                <li>Comprehensive Mobile Well Test and MPFM solutions</li>
                <li>ISO 9001, 14001, and 45001 certified</li>
                <li>Authorized Accuflow multiphase metering distributor</li>
              </ul>
              <Link to="/about" className="learn-more">Learn More About Us →</Link>
            </div>
            <div className="overview-visual">
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p className="section-subtitle">Comprehensive well test measurement solutions for your oil & gas operations</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h4>Custom Piping Solutions</h4>
              <p className="service-description">
                Tailored Accuflow metering systems designed to meet your specific operational requirements 
                and industry standards for multiphase flow measurement.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">📐</div>
              <h4>Engineering Services</h4>
              <p className="service-description">
                Expert engineering design, consultation, and technical support for complex well testing 
                and measurement projects.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h4>Installation & Maintenance</h4>
              <p className="service-description">
                Professional installation and ongoing maintenance services to ensure optimal system 
                performance and longevity.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">✓</div>
              <h4>Quality Assurance</h4>
              <p className="service-description">
                Rigorous quality control and testing procedures with industry-leading accuracy to 
                guarantee safety and reliability.
              </p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{color: 'white'}}>Accuflow Product Range</h2>
            <p className="section-subtitle">Proven well test technology solutions for all flow conditions</p>
          </div>
          <div className="products-preview-grid">
            <div className="product-preview-card">
              <div className="product-preview-image">
                <img 
                  src="/images/products/2phase-1.png" 
                  alt="Accuflow 2-Phase Series"
                  className="product-preview-img"
                />
                <div className="product-badge">Proven Technology</div>
              </div>
              <div className="product-preview-info">
                <h4>Accuflow 2-Phase Series</h4>
                <p>Complete gas/liquid separation for 0-100% GVF applications</p>
                <Link to="/products" className="btn btn-primary btn-sm">View Products</Link>
              </div>
            </div>
            <div className="product-preview-card">
              <div className="product-preview-image">
                <img 
                  src="/images/products/3phase-1.png" 
                  alt="Accuflow 3-Phase Series"
                  className="product-preview-img"
                />
                <div className="product-badge">High Water Cut</div>
              </div>
              <div className="product-preview-info">
                <h4>Accuflow 3-Phase Series</h4>
                <p>Advanced water/oil separation for more than 85% water cut conditions</p>
                <Link to="/products" className="btn btn-primary btn-sm">View Products</Link>
              </div>
            </div>
            <div className="product-preview-card">
              <div className="product-preview-image">
                <img 
                  src="/images/products/2phase-jr-1.png" 
                  alt="Accuflow 2-Phase JR Series"
                  className="product-preview-img"
                />
                <div className="product-badge">Small Footprint</div>
              </div>
              <div className="product-preview-info">
                <h4>Accuflow 2-Phase JR Series</h4>
                <p>Most compact 2-phase system with self-regulated liquid level</p>
                <Link to="/products" className="btn btn-primary btn-sm">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Start Your Next Project?</h2>
          <p className="cta-subtitle">Get in touch with our team for a custom quote</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Contact Us</Link>
            <a 
              href="https://wa.me/6281195521770" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-white-outline"
            >
              <span>💬</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
