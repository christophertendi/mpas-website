import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>About PT MPAS</h4>
            <p className="footer-about">
              Leading provider of oil & gas piping solutions in Indonesia since 1999. 
              Committed to delivering excellence in every project with Accuflow proven technology.
            </p>
            <div className="social-links">
              {/* <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a> */}
              <a href="https://www.instagram.com/ptmpas.id/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">ig</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/products">Accuflow 2-Phase Series</Link></li>
              <li><Link to="/products">Accuflow 3-Phase Series</Link></li>
              {/* <li><Link to="/products">Mobile Testing Units</Link></li> */}
              <li><Link to="/products">All Products</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-group">
                <strong>Head Office:</strong><br />
                Kelapa Gading Block D/27<br />
                Jl. Boulevard Bukit Gading Raya<br />
                Jakarta 14240<br />
                <a href="tel: 0214529256">Tel: 0214529256</a><br />
                <span>Fax: 021-45860454</span>
              </div>

              <div className="contact-group">
                <strong>Workshop Bekasi:</strong><br />
                Greenland Industrial Area<br />
                Block AE-20/21, Bekasi<br />
                <a href="tel:02189118310">Tel: 02189118310</a>
              </div>

              <div className="contact-group">
                <strong>Workshop Duri:</strong><br />
                Dumai KM4, Jl. Duri IV<br />
                Balai Makam, Kec. Mandau<br />
                Kabupaten Bengkalis, Riau 28983
              </div>

              <div className="contact-group">
                <a href="mailto:salesmpas@ptmpas.com">salesmpas@ptmpas.com</a><br />
                {/* <a href="mailto:mpas.jkt@gmail.com">mpas.jkt@gmail.com</a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2025 PT Mitra Prana Abadi Sentosa. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
