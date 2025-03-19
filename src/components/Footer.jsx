import { NavLink } from 'react-router-dom';
import '../css/Footer.css';

const Footer = ({ navLinks, socialLinks, contactInfo }) => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Quick Links Section */}
        <section className="footer-section" aria-label="Quick Links">
          <h2 className="footer-heading">Quick Links</h2>
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              {navLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <NavLink to={link.url} className="footer-link">
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Contact Info Section */}
        <section className="footer-section" aria-label="Contact Information">
          <h2 className="footer-heading">Contact Us</h2>
          <address className="footer-contact">
            <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p>Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
            <p>Address: {contactInfo.address}</p>
          </address>
        </section>

        {/* Social Media Section */}
        <section className="footer-section" aria-label="Social Media">
          <h2 className="footer-heading">Follow Us</h2>
          <ul className="footer-social-links">
            {socialLinks.map((social, index) => (
              <li key={index} className="footer-social-item">
                <a
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {social.platform}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;