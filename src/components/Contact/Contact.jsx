import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram, FiCheck, FiAlertCircle
} from 'react-icons/fi';
import { SiFiverr } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:m.hassanarshad2602@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setTimeout(() => setStatus(null), 4000);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'm.hassanarshad2602@gmail.com', href: 'mailto:m.hassanarshad2602@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+92 302 1655890', href: 'tel:+923021655890' },
    { icon: BsWhatsapp, label: 'WhatsApp', value: '+92 302 1655890', href: 'https://wa.me/923021655890' },
    { icon: FiMapPin, label: 'Location', value: 'Lahore, Pakistan', href: null },
  ];

  const socials = [
    { icon: FiGithub, href: 'https://github.com/hassan26150', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/m-hassan-arshad-28238b3a3', label: 'LinkedIn' },
    { icon: SiFiverr, href: 'https://www.fiverr.com/m_hassan_26/', label: 'Fiverr' },
    { icon: FiInstagram, href: 'https://www.instagram.com/m.hassan_926', label: 'Instagram' },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="grid-pattern" />
      <div className="container" ref={ref}>
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project idea, a question, or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
                className="form-input form-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <FiSend />
              Send Message
            </button>

            {status === 'success' && (
              <motion.div
                className="form-status success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FiCheck /> Message ready to send! Check your email client.
              </motion.div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact-cards">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact-info-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-info-link">
                      <div className="contact-info-icon">
                        <item.icon size={20} />
                      </div>
                      <div className="contact-info-text">
                        <span className="contact-info-label">{item.label}</span>
                        <span className="contact-info-value">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-info-link">
                      <div className="contact-info-icon">
                        <item.icon size={20} />
                      </div>
                      <div className="contact-info-text">
                        <span className="contact-info-label">{item.label}</span>
                        <span className="contact-info-value">{item.value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="contact-socials">
              <h4 className="contact-socials-title">Follow Me</h4>
              <div className="contact-social-links">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
