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
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
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
      </header>

      {/* Mobile nav dropdown overlay */}
      {mobileMenuOpen && (
        <div style={{ background: 'rgba(10, 58, 42, 0.98)', border: '1px solid rgba(243, 167, 18, 0.3)', padding: '24px 28px', position: 'fixed', top: '135px', left: '16px', right: '16px', borderRadius: '24px', zIndex: '99', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>Home</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('highlights'); }}>Highlights</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('registration'); }}>Register</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('nominations'); }}>Nominate</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('sponsorship'); }}>Sponsors</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('csr'); }}>CSR</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('volunteer'); }}>Volunteer</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('donor'); }}>Donate</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('media'); }}>Media</a>
            <a href="#" style={{ color: 'white', fontWeight: '600', fontSize: '15px' }} onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }}>Contact</a>
            
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
            
            <button onClick={() => { setActiveTab('donor'); setMobileMenuOpen(false); }} className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Donate Now</button>
          </div>
        </div>
      )}
    </>
  );
}
