import React from 'react';

export default function Navbar({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      {/* Top utility bar */}
      <div className="topbar-container">
        <div className="topbar-pill">
          <div className="topbar-left">
            <a href="tel:04422236641" className="topbar-link">
              <span className="label-helpline">Helpline</span>
              <span className="value-phone">044-22236641</span>
            </a>
            <span className="separator">|</span>
            <a href="mailto:info@dharafoundations.in" className="topbar-link">
              <span className="label-email">Email</span>
              <span className="value-email">info@dharafoundations.in</span>
            </a>
          </div>
          <div className="topbar-right">
            <span className="location">Tambaram Sanatorium</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner animate-fade-in">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); setActiveTab('home'); setMobileMenuOpen(false); }}>
            <img src="/logo/updated logo.png" alt="Dhara Foundations" className="nav-logo-img" />
          </a>
          
          <nav className="links">
            <a href="#" className={activeTab === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>Home</a>
            <a href="#" className={activeTab === 'highlights' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('highlights'); }}>Highlights</a>
            <a href="#" className={activeTab === 'registration' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('registration'); }}>Register</a>
            <a href="#" className={activeTab === 'nominations' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('nominations'); }}>Nominate</a>
            <a href="#" className={activeTab === 'sponsorship' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('sponsorship'); }}>Sponsors</a>
            <a href="#" className={activeTab === 'csr' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('csr'); }}>CSR</a>
            <a href="#" className={activeTab === 'volunteer' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('volunteer'); }}>Volunteer</a>
            <a href="#" className={activeTab === 'donor' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('donor'); }}>Donate</a>
            <a href="#" className={activeTab === 'media' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('media'); }}>Media</a>
            <a href="#" className={activeTab === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }}>Contact</a>
          </nav>

          <div className="nav-cta">
            <button onClick={() => setActiveTab('donor')} className="btn btn-gold sparkle-shimmer-btn">Donate Now</button>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="menu-toggle" 
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile nav dropdown overlay */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); setMobileMenuOpen(false); }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('highlights'); setMobileMenuOpen(false); }}>Highlights</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('registration'); setMobileMenuOpen(false); }}>Register</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('nominations'); setMobileMenuOpen(false); }}>Nominate</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('sponsorship'); setMobileMenuOpen(false); }}>Sponsors</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('csr'); setMobileMenuOpen(false); }}>CSR</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('volunteer'); setMobileMenuOpen(false); }}>Volunteer</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('donor'); setMobileMenuOpen(false); }}>Donate</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('media'); setMobileMenuOpen(false); }}>Media</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); setMobileMenuOpen(false); }}>Contact</a>
            
            <div className="mobile-dropdown-divider" />
            
            <button onClick={() => { setActiveTab('donor'); setMobileMenuOpen(false); }} className="btn btn-gold w-full justify-center">Donate Now</button>
          </div>
        )}
      </header>
    </>
  );
}
