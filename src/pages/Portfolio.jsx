import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All Projects');

  const projects = [
    {
      id: 1,
      name: "Offshore Platform Well Testing",
      client: "PT Energy Indonesia",
      category: "Offshore Installation",
      location: "Jakarta Bay",
      year: "2024",
      description: "Complete 2-Phase Accuflow system installation for offshore platform well testing operations.",
      system: "Accuflow 2-Phase SR Series"
    },
    {
      id: 2,
      name: "Refinery Pipeline Measurement",
      client: "National Petroleum Corp",
      category: "Refinery",
      location: "Balikpapan",
      year: "2023",
      description: "Custom 3-Phase metering system for high water cut crude oil processing facility.",
      system: "Accuflow 3-Phase Series"
    },
    {
      id: 3,
      name: "Gas Processing Facility",
      client: "Indonesian Gas Corporation",
      category: "Gas Processing",
      location: "Surabaya",
      year: "2023",
      description: "Engineering and installation of multiphase metering for gas condensate wells.",
      system: "Accuflow 2-Phase JR Series"
    },
    {
      id: 4,
      name: "Mobile Well Testing Campaign",
      client: "Pacific Energy Resources",
      category: "Mobile Testing",
      location: "Multiple Locations",
      year: "2024",
      description: "Truck-mounted Accuflow system for multi-well testing campaign across Sumatra.",
      system: "Mobile Testing Unit"
    },
    {
      id: 5,
      name: "Storage Tank Measurement",
      client: "Indonesian Oil Storage",
      category: "Storage Facility",
      location: "Bekasi",
      year: "2022",
      description: "Installation of Accuflow systems for accurate tank farm measurement and custody transfer.",
      system: "Accuflow 2-Phase LT Series"
    },
    {
      id: 6,
      name: "Pipeline Maintenance Project",
      client: "Trans-Java Pipeline",
      category: "Pipeline",
      location: "Central Java",
      year: "2023",
      description: "Ongoing maintenance and calibration services for Trans-Java pipeline metering stations.",
      system: "Multiple Accuflow Systems"
    },
    {
      id: 7,
      name: "Petrochemical Complex",
      client: "Petrochemical Industries",
      category: "Petrochemical",
      location: "Cilegon",
      year: "2024",
      description: "Complete turnkey solution including design, installation, and commissioning of Accuflow systems.",
      system: "Accuflow 3-Phase JR Series"
    },
    {
      id: 8,
      name: "Enhanced Oil Recovery Project",
      client: "Major Oil Company",
      category: "Production",
      location: "Duri, Riau",
      year: "2024",
      description: "Trailer-mounted Accuflow for steam flood well testing in mature oil fields.",
      system: "Trailer-Mounted System"
    }
  ];

  const categories = ['All Projects', 'Offshore Installation', 'Refinery', 'Gas Processing', 'Mobile Testing', 'Production'];

  const filteredProjects = filter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Portfolio
          </div>
          <h1>Our Projects</h1>
          <p>Delivering excellence across Indonesia's energy sector</p>
        </div>
      </div>

      {/* Filters */}
      <section className="filter-section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="results-info">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">
                  <div className="portfolio-image-placeholder">🏭</div>
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <h4>{project.name}</h4>
                      <p>{project.client}</p>
                      <div className="overlay-meta">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p className="portfolio-client">{project.client}</p>
                  <p className="portfolio-desc">{project.description}</p>
                  <div className="portfolio-meta">
                    <div className="meta-item">
                      <strong>System:</strong> {project.system}
                    </div>
                    <div className="meta-item">
                      <strong>Location:</strong> {project.location}
                    </div>
                    <div className="meta-item">
                      <strong>Year:</strong> {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">26</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Start Your Project With Us</h2>
          <p className="cta-subtitle">Let's discuss how we can help with your well testing needs</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Get in Touch</Link>
            <Link to="/products" className="btn btn-white-outline">View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
