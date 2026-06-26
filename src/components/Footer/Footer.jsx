import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiHeart, FiArrowUp } from 'react-icons/fi';
import { SiFiverr } from 'react-icons/si';
import './Footer.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/hassan26150', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/m-hassan-arshad-28238b3a3', label: 'LinkedIn' },
  { icon: SiFiverr, href: 'https://www.fiverr.com/m_hassan_26/', label: 'Fiverr' },
  { icon: FiInstagram, href: 'https://www.instagram.com/m.hassan_926', label: 'Instagram' },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo" onClick={scrollToTop}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Hassan</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Engineering production-grade systems across mobile, web, and AI.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Quick Links</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className="footer-link"
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-social">
            <h4 className="footer-nav-title">Connect</h4>
            <div className="footer-social-links">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Muhammad Hassan Arshad. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with <FiHeart className="heart-icon" size={14} /> by Hassan
          </p>
        </div>
      </div>
    </footer>
  );
}
