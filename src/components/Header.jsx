import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../css/Header.css'

const Header = ({ logoText, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <h1 className="logo">
          <NavLink to="/" aria-label="Home">
            {logoText}
          </NavLink>
        </h1>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on click (mobile)
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;