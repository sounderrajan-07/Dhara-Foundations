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
        <div className="nav-inner">
          <a href="#" className="logo-floating" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
            <div className="logo-emblem-glow">
              <img src="/logo/updated logo.png" alt="Dhara Foundations emblem" />
            </div>
          </a>
          
          <div className="nav-capsule">
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
              <button onClick={() => setActiveTab('nominations')} className="btn btn-gold sparkle-shimmer-btn">Nominate Now</button>
            </div>
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
      </header>

      {/* Mobile nav dropdown overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden" style={{ background: 'var(--ivory-deep)', borderBottom: '1px solid var(--line)', padding: '16px 20px', position: 'sticky', top: '73px', zIndex: '49' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>Home</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('highlights'); }}>Highlights</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('registration'); }}>Register</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('nominations'); }}>Nominate</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('sponsorship'); }}>Sponsors</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('csr'); }}>CSR</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('volunteer'); }}>Volunteer</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('donor'); }}>Donate</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('media'); }}>Media</a>
            <a href="#" style={{ color: 'var(--ink-soft)', fontWeight: '500' }} onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }}>Contact</a>
            
            <div style={{ height: '1px', background: 'var(--line)', margin: '8px 0' }} />
            
            <button onClick={() => setActiveTab('nominations')} className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Nominate Now</button>
          </div>
        </div>
      )}
    </>
  );
}
