import React from 'react';

export default function Footer({ handleNavClick }) {
  return (
    <footer id="contact-section">
      <div className="footer-top-section">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-logo-floating">
                <div className="footer-logo-glow">
                  <img src="/logo/photo_6195100629672333271_y.jpg" alt="Dhara Foundations emblem" />
                </div>
              </div>
              <p className="footer-about">
                A non-profit trust dedicated to transforming lives and protecting traditions — across culture, spirituality, and community welfare.
              </p>
              <div className="footer-social-new">
                <a href="#" className="social-fb" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 9h2.5V6H14c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6H14v-6h2.2l.5-3H14V9.6c0-.4.3-.6.6-.6z" />
                  </svg>
                </a>
                <a href="#" className="social-ig" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="5" stroke="#FFFFFF" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="3.4" stroke="#FFFFFF" strokeWidth="1.5"/>
                    <circle cx="16.6" cy="7.4" r="1" fill="#FFFFFF"/>
                  </svg>
                </a>
                <a href="#" className="social-yt" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="12" rx="3" stroke="#FFFFFF" strokeWidth="1.5"/>
                    <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="#FFFFFF"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs" onClick={(e) => { e.preventDefault(); handleNavClick('programs'); }}>Programs</a></li>
                <li><a href="#awards" onClick={(e) => { e.preventDefault(); handleNavClick('awards'); }}>Divine Awards</a></li>
                <li><a href="#events" onClick={(e) => { e.preventDefault(); handleNavClick('events'); }}>Events</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>Get Involved</h5>
              <ul>
                <li><a href="#">Volunteer</a></li>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Sponsorship</a></li>
                <li><a href="#">CSR Partnership</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>Contact</h5>
              <ul className="footer-contact-new">
                <li>
                  <span className="contact-icon contact-icon-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z" strokeWidth="1.8"/>
                    </svg>
                  </span>
                  <span className="contact-text">No 44A, 3rd Street, Judge Colony, Tambaram Sanatorium, Chennai – 600047</span>
                </li>
                <li>
                  <span className="contact-icon contact-icon-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.2 3.2 2 2 0 0 1 4.2 1h2a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L7.1 8.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" strokeWidth="1.8"/>
                    </svg>
                  </span>
                  <span className="contact-text">044-22236641</span>
                </li>
                <li>
                  <span className="contact-icon contact-icon-email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.8"/>
                      <path d="M3 6l9 7 9-7" strokeWidth="1.8"/>
                    </svg>
                  </span>
                  <span className="contact-text">info@dharafoundations.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom-section">
        <div className="wrap">
          <div className="footer-sparkle-container">
            <svg className="sparkle-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </svg>
          </div>
          <div className="footer-bottom-divider"></div>
          <div className="footer-bottom-content">
            <span className="copyright">© 2026 Dhara Foundations. All rights reserved.</span>
            <span className="trust-details">Registered under Indian Trust Act 1882 · 12A: AAATD9284LE20 · 80G: AAATD9284LF20 · CSR00034928</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
