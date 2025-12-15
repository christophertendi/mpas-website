import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  // Modal state for client projects
  const [selectedClient, setSelectedClient] = useState(null);

// Client project data
const clientProjects = {
  'pertamina-hulu-rokan': {
    name: 'PT Pertamina Hulu Rokan',
    project: 'SLN Well Test',
    location: 'Sumatra Light North (Bangko, Balam, Bekasap, and Libo)',
    date: '2021–Present',
    description:
      'Long-term partnership providing Mobile Well Test services in Sumatra Light North and South operations since 2021 using Accuflow MWT technology.',
    products: [
      {
        name: 'Mobile Well Test Unit',
        model: 'Accuflow MWT',
        link: '/products/5'
      }
    ],
    services: [
      {
        name: 'Mobile Well Test Operations',
        detail: 'Truck-mounted Accuflow MWT units for SLN/SLS production well testing.'
      },
      {
        name: 'Production Test Data & Reporting',
        detail: 'Daily test validation, data acquisition and reporting to PHR operations team.'
      }
    ],
    tag: 'Major Client'
  },

  'pertamina-ep': {
    name: 'PT Pertamina EP',
    project: 'Multiple Field Operations',
    location: 'Tambun, Bekasi',
    date: '2009–Present',
    description:
      'Long-standing partnership spanning multiple field operations. Project 1: Field Tambun (2018) – mobile multiphase flow meter campaign with Accuflow Unit 408. Project 2: Zona 7 Field (2009–Present) – long-term deployment of mobile well test unit MMFM-02 for continuous operations.',
    products: [
      {
        name: '3-Phase MPFM System',
        model: 'Accuflow Unit 408',
        link: '/products/3',
        project: 'Tambun, Bekasi'
      },
      {
        name: 'Mobile Well Test Unit',
        model: 'MMFM-02 (Serial 450)',
        link: '/products/5',
        project: 'Tambun, Bekasi'
      }
    ],
    services: [
      {
        name: 'Mobile MPFM Well Test Campaign',
        detail: 'Accuflow Unit 408, 180-day well testing campaign at Field Tambun.'
      },
      {
        name: 'Mobile Well Test Operations',
        detail: 'MMFM-02 (Serial 450) for long-term Zona 7 production testing and monitoring.'
      }
    ],
    tag: '16+ Years Partnership'
  },

  'vico': {
    name: 'VICO Indonesia',
    project: 'Well Test Service',
    location: 'Indonesia',
    date: 'December 2014',
    description:
      'Provision of Accuflow 2-phase metering system for well test services, capable of handling high liquid rates with operating pressure up to 700 psig.',
    products: [
      {
        name: '2-Phase Metering System',
        model: 'SR-16-16-3-3-3-300',
        link: '/products/1'
      }
    ],
    services: [
      {
        name: '2-Phase MPFM Well Testing',
        detail: 'Rental and operation of Accuflow SR-16 2-phase meter for VICO production wells.'
      }
    ],
    tag: 'Completed Project'
  },

  'petro-energy-fula': {
    name: 'Petro Energy E&P',
    project: 'Multiphase Flow Meter – Fula Project',
    location: 'Fula Field, Sudan',
    date: '2015–2016',
    description:
      'Design and installation of advanced multiphase flow meter with integrated PLC control system and HMI for real-time monitoring of oil, water, and gas production with automated well test sequencing.',
    products: [
      {
        name: '3-Phase MPFM with Control System',
        model: 'Project 1511',
        link: '/products/3'
      }
    ],
    services: [
      {
        name: 'MPFM Design, Supply & Commissioning',
        detail: 'Engineering, fabrication and start-up of Accuflow MPFM skid for Fula project.'
      },
      {
        name: 'PLC & HMI Integration',
        detail: 'Automatic well-test sequencing and real-time production monitoring.'
      }
    ],
    tag: 'Advanced Controls'
  },

  'chevron': {
    name: 'Chevron Pacific Indonesia',
    project: 'Mobile Well Test & Sonolog Services',
    location: 'Sumatra Light Operations',
    date: '2011–2021',
    description:
      'Provided Mobile Well Test and Sonolog services for Sumatra Light operations, supporting production optimization and reservoir management.',
    products: [
      {
        name: 'Mobile Well Test Unit',
        link: '/products/5'
      }
    ],
    services: [
      {
        name: 'Mobile Well Test Services',
        detail: 'Mobile well test units deployed across SL operations from 2011–2021.'
      },
      {
        name: 'Sonolog / Fluid Level Measurement',
        detail: 'Fluid level surveys for production and reservoir monitoring.'
      }
    ],
    tag: 'Historical Partner'
  },

  'medco': {
    name: 'Medco E&P Natuna',
    project: 'Offshore MPFM Installations',
    location: 'Natuna Sea (Offshore)',
    date: '2021–2024',
    description:
      'Offshore MPFM and GLCC installations including Malong, Forel, Bronang, West Belut, and Terubuk projects, providing continuous production monitoring.',
    products: [
      {
        name: '3-Phase MPFM System',
        link: '/products/3'
      }
    ],
    services: [
      {
        name: 'Offshore MPFM & GLCC Installation',
        detail: 'Supply and installation of MPFM and GLCC systems on multiple offshore platforms.'
      },
      {
        name: 'Commissioning & Performance Testing',
        detail: 'Start-up, calibration and verification of MPFM performance offshore.'
      }
    ],
    tag: 'Offshore Projects'
  },

  'star-energy': {
    name: 'Star Energy Geothermal',
    project: 'Geothermal Well Testing',
    location: 'Indonesia',
    description:
      'Trusted partner for geothermal energy operations, providing specialized well testing and measurement solutions using Accuflow technology.',
    products: [
      {
        name: '3-Phase MPFM System',
        link: '/products/3'
      }
    ],
    services: [
      {
        name: 'Geothermal Well Testing Services',
        detail: 'MPFM-based geothermal well testing and production monitoring.'
      },
      {
        name: 'Data Acquisition & Interpretation',
        detail: 'Analysis and reporting of geothermal well performance data.'
      }
    ],
    tag: 'Geothermal'
  },

  'supreme-energy': {
    name: 'Supreme Energy',
    project: 'Geothermal Operations',
    location: 'Indonesia',
    description:
      'Provided Sonolog services and fluid level measurement for geothermal energy production operations.',
    products: [
      {
        name: '3-Phase MPFM System',
        link: '/products/3'
      }
    ],
    services: [
      {
        name: 'Sonolog & Fluid Level Measurement',
        detail: 'Fluid level surveys and well diagnostics for geothermal wells.'
      },
      {
        name: 'Well Test Support Services',
        detail: 'Support for geothermal production testing and monitoring.'
      }
    ],
    tag: 'Energy Sector'
  }
};


  const openModal = (clientKey) => {
    setSelectedClient(clientProjects[clientKey]);
  };

  const closeModal = () => {
    setSelectedClient(null);
  };

  // Mobile tap handling
  const handleCardClick = (e) => {
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
          <h1 className="fade-in-up">26 Years of Excellence in<br />Oil & Gas Well Testing Solutions</h1>
          <p className="hero-subtitle fade-in-up">
            Trusted partner for Accuflow MPFM technology, engineering services, and quality assurance 
            in Indonesia's energy sector
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
              <div className="trust-number">10,000+</div>
              <div className="trust-text">Annual Well Tests</div>
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

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Industry-Leading Multiphase Flow Solutions</h2>
            <p className="section-subtitle">Specializing in Accuflow technology for precise oil, gas, and water measurement</p>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-image-bg" style={{backgroundImage: 'url(/images/products/southsudan1.jpeg)'}}></div>
              <div className="card-content">
                <div className="overview-icon">🔬</div>
                <h3>MPFM Technology</h3>
                <p>Advanced multiphase flow meters providing accurate real-time measurements of oil, gas, and water.</p>
              </div>
            </div>
            <div className="overview-card">
              <div className="card-image-bg" style={{backgroundImage: 'url(/images/products/7.png)'}}></div>
              <div className="card-content">
                <div className="overview-icon">🛠️</div>
                <h3>Complete Solutions</h3>
                <p>From mobile testing units to permanent installations, we deliver turnkey solutions tailored to your field requirements.</p>
              </div>
            </div>
            <div className="overview-card">
              <div className="card-image-bg" style={{backgroundImage: 'url(/images/3.jpeg)'}}></div>
              <div className="card-content">
                <div className="overview-icon">📊</div>
                <h3>Proven Track Record</h3>
                <p>Trusted by major oil & gas companies including Pertamina, Chevron, and Medco for critical well testing operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p className="section-subtitle">Comprehensive well testing and measurement solutions</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Mobile Well Testing</h3>
              <p>Truck and trailer-mounted Accuflow systems for on-demand field testing</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>MPFM Installation</h3>
              <p>Permanent multiphase flow meter installations for continuous monitoring</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Engineering & Fabrication</h3>
              <p>Custom piping solutions and equipment fabrication to specification</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Calibration & Certification</h3>
              <p>ISO-certified calibration services ensuring measurement accuracy</p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase with Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted by Industry Leaders</h2>
            <p className="section-subtitle">Partnering with major oil & gas companies across Indonesia and beyond</p>
          </div>
          <div className="client-grid">
            {/* PT Pertamina Hulu Rokan */}
            <div className="flip-card" onClick={() => openModal('pertamina-hulu-rokan')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/pertaminahulurokan.png" alt="PT Pertamina Hulu Rokan" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>PT Pertamina Hulu Rokan</h4>
                  <p>SLN Well Test - Sumatra Light North operations since 2021</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div>

            {/* PT Pertamina EP - Combined */}
            <div className="flip-card" onClick={() => openModal('pertamina-ep')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/pertaminaep.png" alt="PT Pertamina EP" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>PT Pertamina EP</h4>
                  <p>Multiple field operations since 2009 - Zona 7</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div>

            {/* VICO Indonesia */}
            {/* <div className="flip-card" onClick={() => openModal('vico')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/vico.png" alt="Vico Indonesia" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>VICO Indonesia</h4>
                  <p>Well Test Service - 2-Phase Accuflow technology deployment</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div> */}

            {/* Petro Energy Fula */}
            <div className="flip-card" onClick={() => openModal('petro-energy-fula')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/petroep.png" alt="Petro Energy E&P Co., LTD." className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Petro Energy E&P</h4>
                  <p>Fula Project - Advanced MPFM with PLC Control</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div>

            {/* Chevron Pacific Indonesia */}
            <div className="flip-card" onClick={() => openModal('chevron')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/chevron.png" alt="Chevron Pacific Indonesia" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Chevron Pacific Indonesia</h4>
                  <p>Mobile Well Test and Sonolog services (2011-2021)</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div>

            {/* Medco E&P */}
            <div className="flip-card" onClick={() => openModal('medco')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/medco.png" alt="Medco E&P Natuna" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Medco E&P Natuna</h4>
                  <p>Offshore MPFM installations - Multiple platforms</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div>

            {/* Star Energy Geothermal */}
            {/* <div className="flip-card" onClick={() => openModal('star-energy')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/star.png" alt="Star Energy Geothermal" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Star Energy Geothermal</h4>
                  <p>Specialized geothermal well testing solutions</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div> */}

            {/* Supreme Energy */}
            {/* <div className="flip-card" onClick={() => openModal('supreme-energy')}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="client-logo-placeholder">
                    <img src="/images/supreme.png" alt="Supreme Energy" className="client-logo" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>Supreme Energy</h4>
                  <p>Sonolog services and fluid level measurement</p>
                  <button className="btn-view-project">View Project Details</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{color: 'white'}}>Accuflow Product Range</h2>
            <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.8)'}}>Industry-leading multiphase flow measurement technology</p>
          </div>
          <div className="products-preview-grid">
            <div className="product-preview-card">
              <div className="product-preview-image">
                <div className="product-badge">2-Phase</div>
                <img src="/images/products/2phase-1.png" alt="2-Phase Metering" className="product-preview-img" />
              </div>
              <div className="product-preview-info">
                <h4>2-Phase Metering System</h4>
                <p>Accurate measurement of oil and gas phases with minimal pressure drop</p>
                <Link to="/products/2-phase-metering" className="btn btn-primary btn-sm">View Details</Link>
              </div>
            </div>

            <div className="product-preview-card">
              <div className="product-preview-image">
                <div className="product-badge">3-Phase</div>
                <img src="/images/products/3phase-1.png" alt="3-Phase Metering" className="product-preview-img" />
              </div>
              <div className="product-preview-info">
                <h4>3-Phase Metering System</h4>
                <p>Comprehensive measurement of oil, gas, and water without separation</p>
                <Link to="/products/3-phase-metering" className="btn btn-primary btn-sm">View Details</Link>
              </div>
            </div>

            <div className="product-preview-card">
              <div className="product-preview-image">
                <div className="product-badge">Mobile</div>
                <img src="/images/products/mobile well test 1.png" alt="Mobile Testing" className="product-preview-img" />
              </div>
              <div className="product-preview-info">
                <h4>Mobile Testing Units</h4>
                <p>Truck and trailer-mounted systems for field operations</p>
                <Link to="/products/5" className="btn btn-primary btn-sm">View Details</Link>
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
              href="https://wa.me/6281380365608" 
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

      {/* Client Project Modal */}
      {selectedClient && (
        <div className="client-modal" onClick={closeModal}>
          <div className="client-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="client-modal-close" onClick={closeModal}>&times;</button>
            
            <div className="client-modal-header">
              <h2>{selectedClient.name}</h2>
              {/* <span className="modal-tag">{selectedClient.tag}</span> */}
            </div>

            <div className="client-modal-body">
              <div className="project-info-grid">
                <div className="project-info-item">
                  <div className="info-label">Project</div>
                  <div className="info-value">{selectedClient.project}</div>
                </div>
                <div className="project-info-item">
                  <div className="info-label">Location</div>
                  <div className="info-value">{selectedClient.location}</div>
                </div>
                {selectedClient.date && (
                  <div className="project-info-item">
                    <div className="info-label">Timeline</div>
                    <div className="info-value">{selectedClient.date}</div>
                  </div>
                )}
              </div>

              <div className="project-description">
                <h3>Project Overview</h3>
                <p>{selectedClient.description}</p>
              </div>

              <div className="products-used">
                {/* Products */}
                {selectedClient.products && selectedClient.products.length > 0 && (
                  <>
                    <h3>Products Used</h3>
                    <div className="product-buttons">
                      {selectedClient.products.map((product, index) => (
                        <Link
                          key={index}
                          to={product.link}
                          className="btn btn-product"
                          onClick={closeModal}
                        >
                          <span className="product-icon">📦</span>
                          <div className="product-btn-text">
                            <div className="product-btn-name">{product.name}</div>
                            {product.model && (
                              <div className="product-btn-model">{product.model}</div>
                            )}
                            {product.project && (
                              <div className="product-btn-project">
                                Used in: {product.project}
                              </div>
                            )}
                          </div>
                          <span className="arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  </>
                )}

                {/* Services */}
                {selectedClient.services && selectedClient.services.length > 0 && (
                  <div className="services-used">
                    <h3>Services Provided</h3>
                    <ul className="services-list">
                      {selectedClient.services.map((service, index) => (
                        <li key={index} className="service-item">
                          <strong>{service.name}</strong>
                          {service.detail && (
                            <span className="service-detail"> – {service.detail}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;