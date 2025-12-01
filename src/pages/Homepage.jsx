import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const handleCardClick = (e) => {
    // For mobile: toggle flip on tap
    if (window.innerWidth <= 640) {
      const card = e.currentTarget;
      card.classList.toggle('active');
    }
  };

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
              <div className="trust-number">ISO 9001</div>
              <div className="trust-text">Certified Quality</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📈</div>
              <div className="trust-number">500+</div>
              <div className="trust-text">Projects Completed</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🏭</div>
              <div className="trust-number">26 Years</div>
              <div className="trust-text">Industry Experience</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <div className="trust-number">100+</div>
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
                companies, with a proven track record of over 10,000 well tests conducted annually.
              </p>
              <ul className="overview-highlights">
                <li>Over 10,000 well tests conducted annually</li>
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
                  alt="Mobile Testing Units"
                  className="product-preview-img"
                />
                <div className="product-badge">Mobile Solutions</div>
              </div>
              <div className="product-preview-info">
                <h4>Mobile Testing Units</h4>
                <p>Truck and trailer-mounted systems for field operations</p>
                <Link to="/products" className="btn btn-primary btn-sm">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Trusted by Industry Leaders</h2>
            <p className="section-subtitle">Partnering with major oil & gas companies across Indonesia and beyond</p>
          </div>
          <div className="client-grid">
            {/* PT Pertamina Hulu Rokan */}
            <div className="flip-card" onClick={handleCardClick}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/pertaminahulurokan.png" alt="PT Pertamina Hulu Rokan" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>PT Pertamina Hulu Rokan</h4>
                  <p>Long-term partnership providing Mobile Well Test services in Sumatra Light North and South operations since 2021.</p>
                  <div className="client-tag">Major Client</div>
                </div>
              </div>
            </div>

            {/* Chevron Pacific Indonesia */}
            <div className="flip-card" onClick={handleCardClick}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/chevron.png" alt="Chevron Pacific Indonesia" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Chevron Pacific Indonesia</h4>
                  <p>Provided Mobile Well Test and Sonolog services for Sumatra Light operations from 2011-2021.</p>
                  <div className="client-tag">Historical Partner</div>
                </div>
              </div>
            </div>

            {/* Medco E&P */}
            <div className="flip-card" onClick={handleCardClick}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="images/medco.png" alt="Medco E&P Natuna" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Medco E&P Natuna</h4>
                  <p>Offshore MPFM and GLCC installations including Malong, Forel, Bronang, West Belut, and Terubuk projects (2021-2024).</p>
                  <div className="client-tag">Offshore Projects</div>
                </div>
              </div>
            </div>

            {/* PT Pertamina EP */}
            <div className="flip-card" onClick={handleCardClick}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="images/pertaminaep.png" alt="PT Pertamina EP" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>PT Pertamina EP</h4>
                  <p>Long-standing partnership providing Mobile Well Test services for Zona 7 Field operations since 2009, continuing through 2025.</p>
                  <div className="client-tag">16+ Years</div>
                </div>
              </div>
            </div>

            {/* Star Energy Geothermal */}
            <div className="flip-card" onClick={handleCardClick}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/star.png" alt="Star Energy Geothermal" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Star Energy Geothermal</h4>
                  <p>Trusted partner for geothermal energy operations, providing specialized well testing and measurement solutions.</p>
                  <div className="client-tag">Geothermal</div>
                </div>
              </div>
            </div>

            {/* Supreme Energy */}
            <div className="flip-card" onClick={handleCardClick}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/supreme.png" alt="Supreme Energy" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Supreme Energy</h4>
                  <p>Provided Sonolog services and fluid level measurement for geothermal energy production operations.</p>
                  <div className="client-tag">Energy Sector</div>
                </div>
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
