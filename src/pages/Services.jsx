import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Oil & Gas Well Testing Solutions</p>
        </div>
      </div>

      {/* Services Introduction */}
      <section className="section">
        <div className="container">
          <div className="services-intro">
            <h2>End-to-End Well Testing & Production Measurement</h2>
            <p>
              PT MPAS provides comprehensive services for oil & gas production measurement, 
              from mobile well testing to operation & maintenance. With over 26 years of experience 
              and a proven track record of 10,000+ well tests annually, we deliver reliable solutions 
              for your production operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p className="section-subtitle">Professional well testing solutions backed by proven technology</p>
          </div>

          <div className="services-detailed">
            {/* Mobile Well Test */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/mobile well test 1.png" alt="Mobile Well Test Unit" />
              </div>
              <div className="service-text">
                <div className="service-number">01</div>
                <div className="service-content">
                  <h3>Mobile Well Test Services</h3>
                  <p className="service-desc">
                    Comprehensive production well testing services with mobile units equipped with 
                    Accuflow multiphase metering technology for accurate measurement of oil, gas, 
                    and water production.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Key Features:</h4>
                      <ul>
                        <li>2-Phase and 3-Phase separation systems</li>
                        <li>Truck-mounted and trailer-mounted units</li>
                        <li>ANSI ratings: 150#, 300#, 600#, 900#</li>
                        <li>Rapid deployment capability</li>
                        <li>Onshore and offshore solutions</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Proven Experience:</h4>
                      <ul>
                        <li>Pertamina Hulu Rokan - Sumatra Light North (2021-2027)</li>
                        <li>Pertamina Hulu Rokan - Sumatra Light South (2021-2022)</li>
                        <li>Pertamina EP - Zona 7 (2009-2025)</li>
                        <li>Chevron Pacific Indonesia (2011-2021)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sonolog Services */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/sonolog 2.png" alt="Sonolog Equipment" />
              </div>
              <div className="service-text">
                <div className="service-number">02</div>
                <div className="service-content">
                  <h3>Sonolog Services</h3>
                  <p className="service-desc">
                    Fluid level measurement services using advanced acoustic technology for 
                    accurate determination of static and dynamic fluid levels in production 
                    and injection wells.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Applications:</h4>
                      <ul>
                        <li>Static fluid level measurement</li>
                        <li>Dynamic fluid level monitoring</li>
                        <li>Well productivity analysis</li>
                        <li>Pump efficiency evaluation</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Clients:</h4>
                      <ul>
                        <li>Pertamina Hulu Rokan (2021-2027)</li>
                        <li>Chevron Pacific Indonesia (2011-2021)</li>
                        <li>Supreme Energy (2018)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operation & Maintenance */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/ops 4.png" alt="Operation & Maintenance" />
              </div>
              <div className="service-text">
                <div className="service-number">03</div>
                <div className="service-content">
                  <h3>Operation & Maintenance (O&M) Services</h3>
                  <p className="service-desc">
                    Comprehensive operation and maintenance services for oil & gas production 
                    facilities, ensuring optimal performance, reliability, and safety compliance.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Services Include:</h4>
                      <ul>
                        <li>Facility operations management</li>
                        <li>Preventive maintenance programs</li>
                        <li>Equipment calibration & certification</li>
                        <li>Performance monitoring & optimization</li>
                        <li>QHSE compliance management</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Current Projects:</h4>
                      <ul>
                        <li>Pertamina EP - Zona 7 Field Tambun (2019-2025)</li>
                        <li>Bumi Siak Pusako - Wet Oil Shipment CTM (2025)</li>
                        <li>Chevron Pacific Indonesia - SLO (2016-2018)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offshore MPFM & GLCC */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/offshore 6.png" alt="Offshore MPFM & GLCC" />
              </div>
              <div className="service-text">
                <div className="service-number">04</div>
                <div className="service-content">
                  <h3>Offshore MPFM & GLCC Systems</h3>
                  <p className="service-desc">
                    Provision, installation, and maintenance of Multiphase Flow Meters (MPFM) 
                    and Gas-Liquid Cylindrical Cyclone (GLCC) systems for offshore platforms.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Technology:</h4>
                      <ul>
                        <li>Accuflow MPFM for multiphase measurement</li>
                        <li>GLCC compact separation technology</li>
                        <li>Subsea-rated equipment</li>
                        <li>Real-time data monitoring (SCADA)</li>
                        <li>Minimal footprint design</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Offshore Projects:</h4>
                      <ul>
                        <li>Medco EP Natuna - Multiple platforms (2021-2024)</li>
                        <li>Pertamina EP - Poleng</li>
                        <li>Pertamina PHE - WMO</li>
                        <li>Maintenance & troubleshooting services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Early Production Facility */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/early 1.png" alt="Early Production Facility" />
              </div>
              <div className="service-text">
                <div className="service-number">05</div>
                <div className="service-content">
                  <h3>Early Production Facility (EPF)</h3>
                  <p className="service-desc">
                    Design, fabrication, and installation of early production facilities for 
                    rapid field development and production testing of new discoveries.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>EPF Solutions:</h4>
                      <ul>
                        <li>Modular facility design</li>
                        <li>Fast-track installation</li>
                        <li>Complete separation & metering systems</li>
                        <li>Temporary production infrastructure</li>
                        <li>Field development support</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Project History:</h4>
                      <ul>
                        <li>PT Aceh Timur Kawal Energi</li>
                        <li>Pacific Oil & Gas - Peurlak (2008-2012)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCADA & Data Management */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/scada.jpeg" alt="SCADA System" />
              </div>
              <div className="service-text">
                <div className="service-number">06</div>
                <div className="service-content">
                  <h3>SCADA & Data Management</h3>
                  <p className="service-desc">
                    Internet-based data management and monitoring systems for real-time production 
                    surveillance and remote operations management.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Capabilities:</h4>
                      <ul>
                        <li>Real-time data acquisition</li>
                        <li>Web-based monitoring dashboards</li>
                        <li>Historical data trending</li>
                        <li>Alarm management systems</li>
                        <li>Remote diagnostics & control</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Benefits:</h4>
                      <ul>
                        <li>24/7 production monitoring</li>
                        <li>Reduced operational costs</li>
                        <li>Improved decision making</li>
                        <li>Enhanced safety compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steel Fabrication & EPCC */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/steel 3.jpeg" alt="Steel Fabrication" />
              </div>
              <div className="service-text">
                <div className="service-number">07</div>
                <div className="service-content">
                  <h3>Steel Fabrication & EPCC</h3>
                  <p className="service-desc">
                    Engineering, Procurement, Construction, and Commissioning (EPCC) services 
                    including steel fabrication for oil & gas facilities and infrastructure.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Services:</h4>
                      <ul>
                        <li>Detailed engineering design</li>
                        <li>Steel structure fabrication</li>
                        <li>Piping & equipment installation</li>
                        <li>System commissioning & startup</li>
                        <li>Quality assurance & testing</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Facilities:</h4>
                      <ul>
                        <li>Workshop Cikarang - Greenland Industrial</li>
                        <li>Workshop Duri - Riau</li>
                        <li>ISO certified fabrication processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calibration & Certification */}
            <div className="service-detail-card">
              <div className="service-image">
                <img src="images/products/calibration and certification.png" alt="Calibration Services" />
              </div>
              <div className="service-text">
                <div className="service-number">08</div>
                <div className="service-content">
                  <h3>Calibration & Certification</h3>
                  <p className="service-desc">
                    Comprehensive calibration and certification services for flow meters, 
                    pressure instruments, and production measurement equipment.
                  </p>
                  <div className="service-features">
                    <div className="feature-col">
                      <h4>Services Include:</h4>
                      <ul>
                        <li>Flow meter calibration & proving</li>
                        <li>Pressure & temperature instrument calibration</li>
                        <li>Multiphase meter verification</li>
                        <li>Certification documentation</li>
                        <li>Traceable to national standards</li>
                      </ul>
                    </div>
                    <div className="feature-col">
                      <h4>Experience:</h4>
                      <ul>
                        <li>Pertamina Hulu Rokan (2021-2027)</li>
                        <li>Chevron Pacific Indonesia (2011-2021)</li>
                        <li>Regular calibration programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications & Standards
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{color: 'white'}}>Quality & Safety Certifications</h2>
            <p className="section-subtitle">Our commitment to excellence and compliance</p>
          </div>
          <div className="certifications-grid">
            <div className="cert-item">
              <div className="cert-badge">ISO 9001:2015</div>
              <p>Quality Management System<br />Valid through Nov 2026</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge">ISO 14001:2015</div>
              <p>Environmental Management<br />Valid through Nov 2026</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge">ISO 45001:2018</div>
              <p>Occupational Health & Safety<br />Valid through Nov 2026</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge">CIVD</div>
              <p>SPDA CIVD Certificate<br />Valid through Apr 2026</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge">E-CHSEMS</div>
              <p>High Risk Category<br />Valid through Sept 2026</p>
            </div>
            <div className="cert-item">
              <div className="cert-badge">Accuflow</div>
              <p>Letter of Agency<br />Authorized Distributor</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="services-cta">
            <h2>Ready to Discuss Your Project?</h2>
            <p>Contact our team to learn how we can support your well testing and production measurement needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Request a Quote</Link>
              <a 
                href="https://wa.me/6281195521770" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
