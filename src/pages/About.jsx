import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [selectedCert, setSelectedCert] = React.useState(null);

  const openModal = (certImage, certTitle) => {
    setSelectedCert({ image: certImage, title: certTitle });
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          {/* <div className="breadcrumb">
            <Link to="/">Home</Link> / About
          </div> */}
          <h1>About PT MPAS</h1>
          <p>26 Years of Excellence | Since 1999</p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-content">
              <h2>Leading Provider of Well Test Measurement Solutions</h2>
              <p>
                Established in 1999, initially operating in the fields of trading, steel fabrication, 
                and mechanical, electrical, and instrumentation system integration, PT. Mitra Prana 
                Abadi Sentosa (MPAS) is a company engaged in oil & gas energy services in Indonesia, 
                particularly in oil & gas well production measurement (production well testing).
              </p>
              <p>
                PT. MPAS is committed to providing the best solutions in production well testing, 
                flow measurement, and operation and maintenance services for oil and gas facilities. 
                MPAS has become a trusted partner to various national upstream oil and gas companies, 
                with a proven track record of over 10,000 well tests conducted annually.
              </p>
              <p>
                We focus on technology and innovations and workplace safety as the main pillars of 
                every service we provide. Supported by an experienced team and an integrated work 
                system, MPAS is capable of designing, operating, and developing Mobile Well Test 
                units and multiphase flow metering systems for various field conditions, both onshore 
                and offshore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p className="section-subtitle">Over two decades of innovation and growth</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1999</div>
              <div className="timeline-content">
                <h4>Company Founded</h4>
                <p>PT MPAS established, initially operating in trading, steel fabrication, and MEI system integration</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h4>First Major Project</h4>
                <p>Early Production Facility for PT Aceh Timur Kawal Energi (Pacific Oil & Gas - Peurlak)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2009</div>
              <div className="timeline-content">
                <h4>Long-Term Partnership Begins</h4>
                <p>Started Mobile Well Test services with Pertamina EP Zona 7, continuing through 2025</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2011</div>
              <div className="timeline-content">
                <h4>Chevron Partnership</h4>
                <p>Commenced Mobile Well Test and Sonolog services for Chevron Pacific Indonesia</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h4>ISO 9001:2015 Certification</h4>
                <p>Achieved ISO 9001:2015 certification for Quality Management Systems</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>Environmental & Safety Excellence</h4>
                <p>Achieved ISO 14001:2015 (Environmental Management) and ISO 45001:2018 (Occupational Health & Safety) certifications</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Offshore MPFM Expansion</h4>
                <p>Began offshore multiphase flow meter installations with Medco EP Natuna and Pertamina projects</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>Industry Leader</h4>
                <p>Recognized as leading provider of production well testing solutions with 10,000+ annual well tests and proven track record across Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                To become a long-term, sustainable provider of Products & Services in niche markets 
                within the oil & gas industry and other energy sectors, both in Indonesia and 
                internationally.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🧭</div>
              <h3>Our Mission</h3>
              <p>
                Helping clients meet their business objectives by providing added values through 
                technology and engineering-based products and services, with a strong commitment 
                to QHSE aspects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="section-subtitle">PT. MPAS is committed to:</p>
          </div>
          <div className="values-list">
            <div className="value-item">
              <span className="value-icon">⚖️</span>
              <p>Compliance with laws and ethics</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🛡️</span>
              <p>Providing a safe and injury-free workplace</p>
            </div>
            <div className="value-item">
              <span className="value-icon">⭐</span>
              <p>Superior quality of products and services</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🔬</span>
              <p>Excellence in research, technology, and continuous improvement</p>
            </div>
            <div className="value-item">
              <span className="value-icon">👥</span>
              <p>A well-trained and professional workforce</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{color: 'white'}}>Why Choose PT MPAS</h2>
            <p className="section-subtitle">Your trusted partner in well test measurement</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>Proven Technology</h4>
              <p>Exclusive Accuflow distributor with patented multiphase metering systems</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>26 Years Experience</h4>
              <p>Over two decades of expertise in oil & gas well testing solutions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>ISO Certified</h4>
              <p>Quality management systems certified to ISO 9001 standards</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>Complete Support</h4>
              <p>From engineering design to installation, maintenance, and training</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>Wide Coverage</h4>
              <p>Three strategic locations across Indonesia (Jakarta, Bekasi, Duri)</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>Mobile Solutions</h4>
              <p>Truck and trailer-mounted systems for flexible field operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Certifications</h2>
            <p className="section-subtitle">Committed to quality and compliance</p>
          </div>
          <div className="cert-grid">
            <div className="cert-card" onClick={() => openModal('/images/products/9001.jpg', 'ISO 9001')}>
              <img src="/images/products/9001.jpg" alt="ISO 9001" className="cert-img" />
              <div className="cert-title">ISO 9001</div>
              <p>Quality Management Systems</p>
            </div>
            <div className="cert-card" onClick={() => openModal('/images/products/14001.jpg', 'ISO 14001')}>
              <img src="/images/products/14001.jpg" alt="ISO 14001" className="cert-img" />
              <div className="cert-title">ISO 14001</div>
              <p>Environmental Management</p>
            </div>
            <div className="cert-card" onClick={() => openModal('/images/products/45001.jpg', 'ISO 45001')}>
              <img src="/images/products/45001.jpg" alt="ISO 45001" className="cert-img" />
              <div className="cert-title">ISO 45001</div>
              <p>Occupational Health & Safety</p>
            </div>
            <div className="cert-card" onClick={() => openModal('/images/products/spda.jpg', 'SPDA MPAS')}>
              <img src="/images/products/spda.jpg" alt="SPDA MPAS" className="cert-img" />
              <div className="cert-title">SPDA MPAS</div>
              <p>Sertifikat Pengganti Dokumen Administrasi</p>
            </div>
            <div className="cert-card" onClick={() => openModal('/images/products/chesms.jpg', 'e-CHESMS')}>
              <img src="/images/products/chesms.jpg" alt="e-CHESMS" className="cert-img" />
              <div className="cert-title">e-CHESMS</div>
              <p>SERTIFIKAT e-CHSEMS PT Pertamina Hulu Rokan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Certificate Images */}
      {selectedCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal}>&times;</button>
            <h3>{selectedCert.title}</h3>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Work With Us?</h2>
          <p className="cta-subtitle">Get in touch to discuss your well testing needs</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Contact Us</Link>
            <Link to="/products" className="btn btn-white-outline">View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
