import React, { useState, useEffect } from 'react';
import { 
  X, Award, Ticket, Handshake, Heart, Gift, 
  Briefcase, Newspaper, Image, MessageSquare, ExternalLink, 
  CheckCircle, Share2, ArrowRight, Sparkles 
} from 'lucide-react';

import EventRegistration from './components/EventRegistration';
import Sponsorship from './components/Sponsorship';
import Volunteer from './components/Volunteer';
import DonorSupport from './components/DonorSupport';
import CorporateCSR from './components/CorporateCSR';
import AwardNominations from './components/AwardNominations';
import MediaCoverage from './components/MediaCoverage';
import EventHighlights from './components/EventHighlights';
import GeneralEnquiries from './components/GeneralEnquiries';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Thank You State
  const [successData, setSuccessData] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activeTab]);

  // Scroll Reveal Observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
    
    return () => {
      observer.disconnect();
    };
  }, [activeTab]);

  const handleFormSuccess = (data) => {
    setSuccessData(data);
    setShowThankYou(true);
  };

  const handleNavClick = (sectionId) => {
    setActiveTab('home');
    setMobileMenuOpen(false);
    
    // If we're already on home, scroll directly
    if (activeTab === 'home') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another tab, wait for the tab change to render home, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const devotionalQuotes = [
    {
      quote: "Yat karoṣi yad aśnāsi yaj juhoṣi dadāsi yat, yat tapasyasi kaunteya tat kuruṣva mad-arpaṇam.",
      translation: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that, O son of Kunti, as an offering unto Me. (Bhagavad Gita 9.27)"
    },
    {
      quote: "Dharmo rakshati rakshitah.",
      translation: "Dharma (righteousness/duty) protects those who protect it."
    },
    {
      quote: "Samanvaya eva sādhu.",
      translation: "Harmony and coordination in noble actions lead to ultimate wellness."
    }
  ];

  const randomQuote = devotionalQuotes[0]; 
  const shareText = encodeURIComponent("I just participated in the Dhara Foundations Divine Awards 2026 registration! Join this celebration of selfless service.");
  const shareUrl = encodeURIComponent("https://dharafoundations.in");

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      {/* Main Content Area */}
      <main style={{ flex: '1 0 auto' }}>
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <section className="hero" id="home-section">
  <div className="divine-glow"></div>
  <div className="ember-particles">
    <span style={{"left":"6%","animationDuration":"11s","animationDelay":"0s"}}></span>
    <span style={{"left":"14%","animationDuration":"9s","animationDelay":"2s"}}></span>
    <span style={{"left":"24%","animationDuration":"13s","animationDelay":"4s"}}></span>
    <span style={{"left":"33%","animationDuration":"10s","animationDelay":"1s"}}></span>
    <span style={{"left":"45%","animationDuration":"14s","animationDelay":"6s"}}></span>
    <span style={{"left":"58%","animationDuration":"8s","animationDelay":"3s"}}></span>
    <span style={{"left":"67%","animationDuration":"12s","animationDelay":"7s"}}></span>
    <span style={{"left":"76%","animationDuration":"10s","animationDelay":"2.5s"}}></span>
    <span style={{"left":"85%","animationDuration":"15s","animationDelay":"5s"}}></span>
    <span style={{"left":"93%","animationDuration":"9s","animationDelay":"1.5s"}}></span>
  </div>
  <div className="wrap">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
          <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 0c3.5 4.5 5.2 7.4 5.2 10.4a5.2 5.2 0 1 1-10.4 0C2.8 7.4 4.5 4.5 8 0z" fill="var(--color-saffron-glow)"/></svg>
          Registered Public Trust · Est. 2024
        </div>
        <h1 style={{ color: 'var(--color-deep-forest-dark)', fontFamily: 'var(--font-serif)', fontWeight: '800' }}>
          Kindness in Action, <br/>
          <em style={{ fontStyle: 'italic', fontWeight: '500', background: 'linear-gradient(120deg, var(--color-saffron-glow), var(--color-primary-accent))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Faith</em> in Every Step
        </h1>
        <p className="lede" style={{ color: 'var(--ink-soft)' }}>
          Dhara Foundations stands beside the poor, the forgotten, and the faithful — feeding the hungry, restoring sacred spaces, and giving dignity to those society often overlooks.
        </p>
        <div className="hero-actions">
          <button onClick={() => setActiveTab('donor')} className="btn btn-primary sparkle-shimmer-btn">Donate Now</button>
          <button onClick={(e) => { e.preventDefault(); setActiveTab('registration'); }} className="btn btn-ghost-dark">Explore Divine Awards 2026 →</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num" style={{ color: 'var(--color-saffron-glow-dark)', fontFamily: 'var(--font-serif)' }}>3</div>
            <div className="label" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', tracking: '1px' }}>Founding Trustees</div>
          </div>
          <div className="hero-stat">
            <div className="num" style={{ color: 'var(--color-saffron-glow-dark)', fontFamily: 'var(--font-serif)' }}>40+</div>
            <div className="label" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', tracking: '1px' }}>Community Programs</div>
          </div>
          <div className="hero-stat">
            <div className="num" style={{ color: 'var(--color-saffron-glow-dark)', fontFamily: 'var(--font-serif)' }}>80G</div>
            <div className="label" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', tracking: '1px' }}>Tax Exemption</div>
          </div>
        </div>
      </div>
      <div className="hero-visual" style={{ position: 'relative' }}>
        <svg className="mandala-ring rotating-mandala" viewBox="0 0 400 400" fill="none" style={{ position: 'absolute', inset: '-40px', zIndex: 0, opacity: 0.25 }}>
          <circle cx="200" cy="200" r="195" stroke="var(--color-saffron-glow)" strokeWidth="0.8" strokeDasharray="2 6"/>
          <circle cx="200" cy="200" r="175" stroke="var(--color-card-border)" strokeWidth="0.6" strokeDasharray="1 4"/>
        </svg>
        <div className="hero-badge glassmorphism-card" style={{ zIndex: 10, border: '1px solid rgba(217, 203, 176, 0.6)' }}>
          <svg className="icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="var(--color-card-cream)"/><path d="M20 28V20M20 20c0-4-3-6-6-6 0 4 2 6 6 6zM20 20c0-4 3-6 6-6 0 4-2 6-6 6z" stroke="var(--color-saffron-glow-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div>
            <div className="t1" style={{ color: 'var(--color-deep-forest-dark)', fontWeight: '700' }}>CSR Registered</div>
            <div className="t2" style={{ fontFamily: 'var(--font-mono)', fontSize: '9px' }}>Reg. No. CSR00034928</div>
          </div>
        </div>
        <div className="hero-photo" style={{ 
          border: '2px solid var(--color-card-border)', 
          outline: '1px solid var(--color-saffron-glow)', 
          outlineOffset: '6px', 
          boxShadow: '0 20px 40px rgba(10,58,42,0.12)',
          borderRadius: '32px'
        }}>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Redesigned floating glassmorphic trust banner */}
<div className="trust-strip-wrapper">
  <div className="trust-strip">
    <div className="trust-item">
      <Sparkles className="w-3.5 h-3.5 text-[var(--color-saffron-glow)]" />
      <span>Indian Trust Act, 1882 — <b>Registered</b></span>
    </div>
    <span className="hidden md:inline" style={{ color: 'var(--color-card-border)' }}>|</span>
    <div className="trust-item">
      <Sparkles className="w-3.5 h-3.5 text-[var(--color-saffron-glow)]" />
      <span>80G &amp; 12A — <b>Tax Exempt</b></span>
    </div>
    <span className="hidden md:inline" style={{ color: 'var(--color-card-border)' }}>|</span>
    <div className="trust-item">
      <Sparkles className="w-3.5 h-3.5 text-[var(--color-saffron-glow)]" />
      <span>MCA — <b>CSR Approved</b></span>
    </div>
    <span className="hidden md:inline" style={{ color: 'var(--color-card-border)' }}>|</span>
    <div className="trust-item">
      <Sparkles className="w-3.5 h-3.5 text-[var(--color-saffron-glow)]" />
      <span>NGO Darpan — <b>TN/2024/0473120</b></span>
    </div>
  </div>
</div>

{/* Kindness / Helping the Poor */}
<section className="kindness-section reveal">
  <div className="wrap">
    <div className="kindness-grid">
      <div className="kindness-copy">
        <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
          <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 0c3.5 4.5 5.2 7.4 5.2 10.4a5.2 5.2 0 1 1-10.4 0C2.8 7.4 4.5 4.5 8 0z" fill="var(--color-saffron-glow)"/></svg>
          Compassion in Practice
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '32px' }}>Every act of kindness reaches someone who needs it most</h2>
        <p style={{ color: 'var(--ink-soft)' }}>Behind every program is a simple belief — that dignity, food, shelter, and care should never depend on circumstance. We work directly with the poor, the elderly, the differently-abled, and forgotten communities across Tamil Nadu.</p>
        <p style={{ color: 'var(--ink-soft)' }}>No gesture is too small. A meal, a pair of shoes, a rebuilt roof, a restored prayer hall — each is a step toward a more compassionate society.</p>
      </div>
      <div className="impact-grid">
        <div className="impact-card glassmorphism-card" style={{ borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}><svg viewBox="0 0 24 24" fill="none"><path d="M4 11h16M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 11l1 8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-8" stroke="var(--color-saffron-glow-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Meals &amp; Essentials</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13px' }}>Food carriers and daily essentials for government homes and underserved families.</p>
        </div>
        <div className="impact-card glassmorphism-card" style={{ borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" stroke="var(--color-saffron-glow-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Shelter &amp; Care Homes</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13px' }}>Support for children's homes and care facilities for the elderly and disabled.</p>
        </div>
        <div className="impact-card glassmorphism-card" style={{ borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="var(--color-saffron-glow-dark)" strokeWidth="1.6"/><path d="M5 20c0-3.8 3.2-6.5 7-6.5s7 2.7 7 6.5" stroke="var(--color-saffron-glow-dark)" strokeWidth="1.6"/></svg></div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Clothing &amp; Footwear</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13px' }}>Festive clothing and footwear drives for children in government homes.</p>
        </div>
        <div className="impact-card glassmorphism-card" style={{ borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9-9c-1.4-3 .5-6.5 4-6.5 2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.5 0 5.4 3.5 4 6.5-2 4.5-9 9-9 9z" stroke="var(--color-saffron-glow-dark)" strokeWidth="1.6"/></svg></div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Health &amp; Relief</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13px' }}>Emergency relief support, including pandemic-era response for vulnerable groups.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Mission Pillars */}
<section className="pillars-section reveal" id="programs">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
        <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        What We Stand For
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Three pillars, one purpose</h2>
      <p style={{ color: 'var(--ink-soft)' }}>Every program we run traces back to one of these commitments — culture, spirit, and people.</p>
    </div>
    <div className="pillars-grid">
      <div className="pillar-card glassmorphism-card" style={{ borderRadius: '28px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
        <div className="pillar-icon" style={{ background: 'var(--color-deep-forest)', display: 'flex', itemsAlign: 'center', justifyContent: 'center' }}><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M5 8c0 6 3 10 7 12 4-2 7-6 7-12-2-2-5-3-7-3s-5 1-7 3z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <div className="num" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-primary-accent)', fontSize: '11px', fontWeight: 'bold' }}>01 — Desiyam</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontWeight: 'bold', fontSize: '20px' }}>National Culture</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>We promote and preserve India's rich cultural identity — from temple traditions to heritage arts that risk being forgotten.</p>
      </div>
      <div className="pillar-card glassmorphism-card" style={{ borderRadius: '28px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
        <div className="pillar-icon" style={{ background: 'var(--color-deep-forest)', display: 'flex', itemsAlign: 'center', justifyContent: 'center' }}><svg viewBox="0 0 24 24" fill="none"><path d="M12 3c3 4 4.5 6.5 4.5 9.5a4.5 4.5 0 1 1-9 0C7.5 9.5 9 7 12 3z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round"/><path d="M5 20h14" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
        <div className="num" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-primary-accent)', fontSize: '11px', fontWeight: 'bold' }}>02 — Spiritualism</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontWeight: 'bold', fontSize: '20px' }}>Sacred Restoration</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>We support spiritual education, temple renovation, and rituals that connect communities with timeless wisdom.</p>
      </div>
      <div className="pillar-card glassmorphism-card" style={{ borderRadius: '28px', border: '1px solid rgba(217, 203, 176, 0.5)' }}>
        <div className="pillar-icon" style={{ background: 'var(--color-deep-forest)', display: 'flex', itemsAlign: 'center', justifyContent: 'center' }}><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="var(--color-saffron-glow)" strokeWidth="1.6"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
        <div className="num" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-primary-accent)', fontSize: '11px', fontWeight: 'bold' }}>03 — Welfare</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontWeight: 'bold', fontSize: '20px' }}>Community Care</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>Through rehabilitation, medical care, and outreach, we empower vulnerable people to live with purpose and pride.</p>
      </div>
    </div>
  </div>
</section>

{/* About / Founder message */}
<section id="about" className="reveal">
  <div className="wrap">
    <div className="about-grid">
      <div className="about-visual">
        <div className="about-photo" style={{ borderRadius: '28px', border: '2px solid var(--color-card-border)', boxShadow: '0 20px 40px rgba(10,58,42,0.12)' }}></div>
        <div className="quote-card glassmorphism-card" style={{ background: 'var(--color-card-cream)', borderLeft: '4px solid var(--color-saffron-glow)', color: 'var(--color-deep-forest-dark)', borderRadius: '18px', padding: '22px 24px', boxShadow: '0 12px 28px rgba(10,58,42,0.08)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '15px', lineHeight: '1.5' }}>"Service to people is service to the divine."</p>
        </div>
      </div>
      <div className="about-copy">
        <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
          <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          A Message From Our Founders
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '34px' }}>Built on two decades of quiet, consistent service</h2>
        <p style={{ color: 'var(--ink-soft)' }}>Dhara Foundations was born from years of grassroots work — temple protection, legal advocacy for spiritual heritage, and direct support for tribal and rural communities across Tamil Nadu.</p>
        <p style={{ color: 'var(--ink-soft)' }}>What began as individual conviction has grown into a registered public trust working at the intersection of culture, faith, and welfare — one renovation, one ration kit, one scholarship at a time.</p>
        <ul className="about-list">
          <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink-soft)' }}>
            <svg className="check" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px' }}><circle cx="12" cy="12" r="11" fill="var(--color-card-cream)"/><path d="M8 12.5l2.5 2.5L16 9" stroke="var(--color-saffron-glow)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Two decades of construction &amp; community leadership</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink-soft)' }}>
            <svg className="check" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px' }}><circle cx="12" cy="12" r="11" fill="var(--color-card-cream)"/><path d="M8 12.5l2.5 2.5L16 9" stroke="var(--color-saffron-glow)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Legal advocacy for temple &amp; heritage protection</span>
          </li>
          <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--ink-soft)' }}>
            <svg className="check" viewBox="0 0 24 24" fill="none" style={{ marginTop: '2px' }}><circle cx="12" cy="12" r="11" fill="var(--color-card-cream)"/><path d="M8 12.5l2.5 2.5L16 9" stroke="var(--color-saffron-glow)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Chartered governance — financial transparency by design</span>
          </li>
        </ul>
        <a href="#" className="btn btn-primary sparkle-shimmer-btn" style={{ marginTop: '30px' }}>Read Our Full Story</a>
      </div>
    </div>
  </div>
</section>

{/* Founders / Trustees */}
<section style={{"background":"var(--color-card-cream)"}} className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
        <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Our Trustees
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>The people behind the purpose</h2>
    </div>
    <div className="founders-grid">
      <div className="founder-card glassmorphism-card" style={{ padding: '36px 24px', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.4)' }}>
        <div className="founder-photo" style={{ 
          border: '3px solid var(--color-card-border)', 
          outline: '1px solid var(--color-saffron-glow)', 
          outlineOffset: '4px',
          boxShadow: '0 8px 24px rgba(10,58,42,0.1)'
        }}></div>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '18px', fontWeight: 'bold' }}>S. Vinoth Ragavendran</h4>
        <div className="role" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', color: 'var(--color-primary-accent)', fontWeight: 'bold', margin: '8px 0 12px' }}>Engineering Entrepreneur</div>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>Two decades in construction; active in temple protection and legal advocacy for heritage preservation.</p>
      </div>
      <div className="founder-card glassmorphism-card" style={{ padding: '36px 24px', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.4)' }}>
        <div className="founder-photo" style={{ 
          border: '3px solid var(--color-card-border)', 
          outline: '1px solid var(--color-saffron-glow)', 
          outlineOffset: '4px',
          boxShadow: '0 8px 24px rgba(10,58,42,0.1)'
        }}></div>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '18px', fontWeight: 'bold' }}>P. Ezhumalai</h4>
        <div className="role" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', color: 'var(--color-primary-accent)', fontWeight: 'bold', margin: '8px 0 12px' }}>Agriculturist &amp; Social Worker</div>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>A dedicated dairy farmer in public life since childhood, guided by deep devotion to Hindu values.</p>
      </div>
      <div className="founder-card glassmorphism-card" style={{ padding: '36px 24px', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.4)' }}>
        <div className="founder-photo" style={{ 
          border: '3px solid var(--color-card-border)', 
          outline: '1px solid var(--color-saffron-glow)', 
          outlineOffset: '4px',
          boxShadow: '0 8px 24px rgba(10,58,42,0.1)'
        }}></div>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '18px', fontWeight: 'bold' }}>S. Srividhya</h4>
        <div className="role" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', color: 'var(--color-primary-accent)', fontWeight: 'bold', margin: '8px 0 12px' }}>Chartered Accountant &amp; CS</div>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>Dual-qualified professional bringing ethics and precision to the trust's governance.</p>
      </div>
    </div>
  </div>
</section>

{/* Divine Awards 2026 */}
<section id="awards" className="reveal">
  <div className="awards-band" style={{ background: 'linear-gradient(135deg, var(--color-deep-forest) 0%, var(--color-deep-forest-dark) 100%)', border: '1.5px solid rgba(217,203,176,0.3)', borderRadius: '36px', overflow: 'hidden' }}>
    <div className="awards-inner">
      <div>
        <div className="awards-eyebrow" style={{ color: 'var(--color-saffron-glow)', fontFamily: 'var(--font-mono)', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="15" height="18" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Flagship Event
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '36px', fontWeight: 'bold', marginTop: '12px', marginBottom: '16px' }}>Dhara Divine Awards 2026</h2>
        <p style={{ color: '#D5E5CD', fontSize: '15.5px', maxWidth: '460px', marginBottom: '30px' }}>A prestigious convergence of spiritual leaders, selfless changemakers, and corporate CSR visionaries. Join us in cultivating harmony, empowering community growth, and acknowledging the quiet souls who serve humanity.</p>
        <div className="awards-meta" style={{ display: 'flex', gap: '28px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#F3E9D4', fontWeight: '500' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="var(--color-saffron-glow)" strokeWidth="1.6"/><path d="M3 9h18M8 3v4M16 3v4" stroke="var(--color-saffron-glow)" strokeWidth="1.6"/></svg>
            <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>October 24, 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#F3E9D4', fontWeight: '500' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z" stroke="var(--color-saffron-glow)" strokeWidth="1.6"/><circle cx="12" cy="9.5" r="2.4" stroke="var(--color-saffron-glow)" strokeWidth="1.6"/></svg>
            <span>Grand Assembly Hall, Bengaluru</span>
          </div>
        </div>
        <div className="awards-actions" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '30px' }}>
          <button onClick={() => setActiveTab('registration')} className="btn btn-primary sparkle-shimmer-btn">Register for Event</button>
          <button onClick={() => setActiveTab('sponsorship')} className="btn btn-light">Sponsorship Opportunities</button>
        </div>
      </div>
      <div className="awards-visual" style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '320px', borderRadius: '26px' }}>
        <img 
          src="/images/Divine Awards 2026.jpg" 
          alt="Dhara Divine Awards 2026" 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          style={{ position: 'absolute', inset: 0 }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
    </div>
  </div>
</section>

{/* Events */}

{/* Operations Portal / Seva Dashboard */}
<section id="seva-dashboard" className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
        <svg className="sprout" viewBox="0 0 16 22" fill="none">
          <path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Seva Portal
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Operations Dashboard</h2>
      <p style={{ color: 'var(--ink-soft)' }}>Select an operational panel below to access dedicated tools and registration pages</p>
    </div>
    <div className="impact-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
      
      <div onClick={() => setActiveTab('registration')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Ticket className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Event Booking</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Secure delegate or VIP tickets, choose dietary options.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Book Tickets</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('sponsorship')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Handshake className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Sponsorship Options</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>View Platinum, Gold, Silver tiers and sponsorship deliverables.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>View Tiers</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('volunteer')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Heart className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Volunteer Seva</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Register availability, alignment, and coordinate skills.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Join Seva</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('donor')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Gift className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Giving Gateway</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Pre-set micro-donations and claim 80G tax benefits.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Donate Now</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('csr')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Briefcase className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Corporate CSR</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Register institutional budgets, CIN, and joint targets.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Partner Up</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('nominations')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Award className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Award Nominations</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Submit multi-step nominations for grassroots unsung heroes.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Submit Nomination</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('media')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Newspaper className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Press & Media Kit</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Request journalist credentials and download media assets.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Media Panel</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('highlights')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <Image className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>Event Highlights</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>View statistics, visual archives, and annual impact reports.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>View Archive</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('contact')} className="impact-card glassmorphism-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderRadius: '24px', border: '1px solid rgba(217, 203, 176, 0.45)', padding: '28px' }}>
        <div>
          <div className="impact-icon" style={{ background: 'var(--color-card-cream)' }}>
            <MessageSquare className="w-5 h-5" style={{ color: 'var(--color-saffron-glow-dark)' }} />
          </div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 'bold', color: 'var(--color-deep-forest-dark)', margin: '14px 0 8px' }}>General Enquiries</h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '13.5px' }}>Submit questions and get quick guidance or support.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: 'bold', color: 'var(--color-primary-accent)', marginTop: '20px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Send Enquiry</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

    </div>
  </div>
</section>
<section id="events" className="reveal">
  <div className="wrap">
    <div className="events-head">
      <div className="section-head" style={{ textAlign: 'left', margin: 0 }}>
        <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)', justifyContent: 'flex-start' }}>
          <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          On the Ground
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '38px', marginTop: '12px' }}>Recent &amp; upcoming events</h2>
      </div>
      <a href="#" className="btn btn-ghost-dark">View All Events</a>
    </div>
    <div className="events-row">
      <div className="event-card glassmorphism-card group" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(217, 203, 176, 0.45)' }}>
        <div className="event-thumb h-48 overflow-hidden relative">
          <img src="/images/Events/Providing Diwali Dresses To Home Children.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="event-date" style={{ background: 'var(--color-saffron-glow)', border: '1px solid var(--color-card-border)', color: 'var(--color-deep-forest-dark)', fontFamily: 'var(--font-mono)', padding: '8px 12px', borderRadius: '12px' }}>
            <div className="d" style={{ fontWeight: 'bold', fontSize: '16px' }}>18</div>
            <div className="m" style={{ fontSize: '9px', textTransform: 'uppercase', tracking: '1px' }}>Oct</div>
          </div>
        </div>
        <div className="event-body" style={{ padding: '24px' }}>
          <div className="event-loc" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>📍 Cuddalore</div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16px', fontWeight: 'bold', marginTop: '8px' }}>Providing Diwali dresses to home children</h4>
        </div>
      </div>
      <div className="event-card glassmorphism-card group" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(217, 203, 176, 0.45)' }}>
        <div className="event-thumb h-48 overflow-hidden relative">
          <img src="/images/Events/In Digitisation activities for Women Self Help Group society.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="event-date" style={{ background: 'var(--color-saffron-glow)', border: '1px solid var(--color-card-border)', color: 'var(--color-deep-forest-dark)', fontFamily: 'var(--font-mono)', padding: '8px 12px', borderRadius: '12px' }}>
            <div className="d" style={{ fontWeight: 'bold', fontSize: '16px' }}>01</div>
            <div className="m" style={{ fontSize: '9px', textTransform: 'uppercase', tracking: '1px' }}>Jan</div>
          </div>
        </div>
        <div className="event-body" style={{ padding: '24px' }}>
          <div className="event-loc" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>📍 Cuddalore</div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16px', fontWeight: 'bold', marginTop: '8px' }}>Digitisation drive for Women Self-Help Groups</h4>
        </div>
      </div>
      <div className="event-card glassmorphism-card group" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(217, 203, 176, 0.45)' }}>
        <div className="event-thumb h-48 overflow-hidden relative">
          <img src="/images/Events/In Tribal welfare activities at Javadhu hills.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="event-date" style={{ background: 'var(--color-saffron-glow)', border: '1px solid var(--color-card-border)', color: 'var(--color-deep-forest-dark)', fontFamily: 'var(--font-mono)', padding: '8px 12px', borderRadius: '12px' }}>
            <div className="d" style={{ fontWeight: 'bold', fontSize: '16px' }}>06</div>
            <div className="m" style={{ fontSize: '9px', textTransform: 'uppercase', tracking: '1px' }}>Nov</div>
          </div>
        </div>
        <div className="event-body" style={{ padding: '24px' }}>
          <div className="event-loc" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>📍 Vellore</div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16px', fontWeight: 'bold', marginTop: '8px' }}>Tribal welfare activities at Javadhu Hills</h4>
        </div>
      </div>
      <div className="event-card glassmorphism-card group" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(217, 203, 176, 0.45)' }}>
        <div className="event-thumb h-48 overflow-hidden relative">
          <img src="/images/Events/Felicitation of Sports children at Cuddalore during Pongal festival.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="event-date" style={{ background: 'var(--color-saffron-glow)', border: '1px solid var(--color-card-border)', color: 'var(--color-deep-forest-dark)', fontFamily: 'var(--font-mono)', padding: '8px 12px', borderRadius: '12px' }}>
            <div className="d" style={{ fontWeight: 'bold', fontSize: '16px' }}>14</div>
            <div className="m" style={{ fontSize: '9px', textTransform: 'uppercase', tracking: '1px' }}>Jan</div>
          </div>
        </div>
        <div className="event-body" style={{ padding: '24px' }}>
          <div className="event-loc" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>📍 Cuddalore</div>
          <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16px', fontWeight: 'bold', marginTop: '8px' }}>Felicitation of sports children, Pongal</h4>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Gallery teaser */}
<section style={{"background":"var(--color-card-cream)"}} className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
        <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Moments
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>From our photo gallery</h2>
    </div>
    <div className="gallery-grid">
      <div className="g-item tall overflow-hidden rounded-3xl border border-[var(--color-card-border)]/50 shadow-premium relative group">
        <img src="/images/Sanatana Dharma/Brindavana Kumbabhishekam ceremony.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="tag font-mono uppercase tracking-[2px] bg-deep-forest text-saffron-glow text-[10px]" style={{ background: 'var(--color-deep-forest)' }}>Temple Restoration</div>
      </div>
      <div className="g-item overflow-hidden rounded-3xl border border-[var(--color-card-border)]/50 shadow-premium relative group">
        <img src="/images/Events/Providing meal and food carriers to Govt Home Children.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="tag font-mono uppercase tracking-[2px] bg-deep-forest text-saffron-glow text-[10px]" style={{ background: 'var(--color-deep-forest)' }}>Community Outreach</div>
      </div>
      <div className="g-item overflow-hidden rounded-3xl border border-[var(--color-card-border)]/50 shadow-premium relative group">
        <img src="/images/News/DHARA Divine Awards.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="tag font-mono uppercase tracking-[2px] bg-deep-forest text-saffron-glow text-[10px]" style={{ background: 'var(--color-deep-forest)' }}>Divine Awards</div>
      </div>
      <div className="g-item overflow-hidden rounded-3xl border border-[var(--color-card-border)]/50 shadow-premium relative group">
        <img src="/images/Events/In Tribal welfare activities at Javadhu hills.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="tag font-mono uppercase tracking-[2px] bg-deep-forest text-saffron-glow text-[10px]" style={{ background: 'var(--color-deep-forest)' }}>Tribal Welfare</div>
      </div>
    </div>
  </div>
</section>

{/* News */}
<section id="news" className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow" style={{ color: 'var(--color-primary-accent)', fontFamily: 'var(--font-mono)' }}>
        <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="var(--color-saffron-glow)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Press &amp; Updates
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)' }}>Latest news &amp; articles</h2>
    </div>
    <div className="news-grid">
      <div className="news-card glassmorphism-card group" style={{ borderRadius: '24px', borderTop: '4px solid var(--color-primary-accent)', padding: '24px', borderLeft: '1px solid rgba(217,203,176,0.4)', borderRight: '1px solid rgba(217,203,176,0.4)', borderBottom: '1px solid rgba(217,203,176,0.4)' }}>
        <div className="news-thumb h-44 overflow-hidden rounded-2xl mb-4">
          <img src="/images/News/Dhara Foundation Registrations & Certifications.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="news-date" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>20 Feb, 2025</div>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16.5px', fontWeight: 'bold', margin: '10px 0 14px' }}>Dhara Foundation — Registrations &amp; Certifications</h4>
        <a href="#" className="news-link" style={{ color: 'var(--color-primary-accent)', fontWeight: 'bold', fontSize: '13px' }}>Read More <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px', display: 'inline-block' }}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
      <div className="news-card glassmorphism-card group" style={{ borderRadius: '24px', borderTop: '4px solid var(--color-primary-accent)', padding: '24px', borderLeft: '1px solid rgba(217,203,176,0.4)', borderRight: '1px solid rgba(217,203,176,0.4)', borderBottom: '1px solid rgba(217,203,176,0.4)' }}>
        <div className="news-thumb h-44 overflow-hidden rounded-2xl mb-4">
          <img src="/images/News/Governor of Maharashtra Appreciates DHARA Divine Awards 2025.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="news-date" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>31 Aug, 2025</div>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16.5px', fontWeight: 'bold', margin: '10px 0 14px' }}>Governor of Maharashtra Appreciates Dhara Divine Awards 2025</h4>
        <a href="#" className="news-link" style={{ color: 'var(--color-primary-accent)', fontWeight: 'bold', fontSize: '13px' }}>Read More <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px', display: 'inline-block' }}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
      <div className="news-card glassmorphism-card group" style={{ borderRadius: '24px', borderTop: '4px solid var(--color-primary-accent)', padding: '24px', borderLeft: '1px solid rgba(217,203,176,0.4)', borderRight: '1px solid rgba(217,203,176,0.4)', borderBottom: '1px solid rgba(217,203,176,0.4)' }}>
        <div className="news-thumb h-44 overflow-hidden rounded-2xl mb-4">
          <img src="/images/News/Send-Off Ceremony in Honour of His Excellency, Honourable Governor Shri R. N. Ravi..jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="news-date" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: '11px', color: 'var(--color-primary-accent)', fontWeight: 'bold' }}>30 May, 2026</div>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-deep-forest-dark)', fontSize: '16.5px', fontWeight: 'bold', margin: '10px 0 14px' }}>Send-Off Ceremony in Honour of Hon'ble Governor Shri R. N. Ravi</h4>
        <a href="#" className="news-link" style={{ color: 'var(--color-primary-accent)', fontWeight: 'bold', fontSize: '13px' }}>Read More <svg viewBox="0 0 24 24" fill="none" style={{ width: '13px', height: '13px', display: 'inline-block' }}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
    </div>
  </div>
</section>

{/* CTA band */}
<section className="reveal">
  <div className="cta-band">
    <div className="cta-band-inner">
      <h2>Join hands with us</h2>
      <p>Whether through volunteering, sponsorship, or a one-time gift — every contribution carries our mission forward.</p>
      <div className="cta-actions">
        <button onClick={() => setActiveTab('volunteer')} className="btn btn-light">Become a Volunteer</button>
        <button onClick={() => setActiveTab('donor')} className="btn btn-white">Donate Now</button>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
          </div>
        )}

        {/* 2. Divine Awards 2026 Event Registration */}
        {activeTab === 'registration' && (
          <div className="animate-fade-in">
            <EventRegistration onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 3. Sponsorship Opportunities */}
        {activeTab === 'sponsorship' && (
          <div className="animate-fade-in">
            <Sponsorship onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 4. Volunteer Registration */}
        {activeTab === 'volunteer' && (
          <div className="animate-fade-in">
            <Volunteer onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 5. Donor Support */}
        {activeTab === 'donor' && (
          <div className="animate-fade-in">
            <DonorSupport onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 6. Corporate CSR Partnership */}
        {activeTab === 'csr' && (
          <div className="animate-fade-in">
            <CorporateCSR onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 7. Award Nominations */}
        {activeTab === 'nominations' && (
          <div className="animate-fade-in">
            <AwardNominations onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 8. Media Coverage */}
        {activeTab === 'media' && (
          <div className="animate-fade-in">
            <MediaCoverage onSubmitSuccess={handleFormSuccess} />
          </div>
        )}

        {/* 9. Event Highlights */}
        {activeTab === 'highlights' && (
          <div className="animate-fade-in">
            <EventHighlights />
          </div>
        )}

        {/* 10. General Event Enquiries */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            <GeneralEnquiries onSubmitSuccess={handleFormSuccess} />
          </div>
        )}
      </main>

      <Footer handleNavClick={handleNavClick} />

      {/* 11. Thank You Confirmation Overlay State */}
      {showThankYou && successData && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(5, 46, 42, 0.6)', backdropFilter: 'blur(8px)', zIndex: 55, display: 'flex', itemsAlign: 'center', justifyContent: 'center', padding: '16px' }} className="items-center">
          <div className="bg-[#FFFEFB] rounded-3xl border-2 border-[#C9A646] p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto" style={{ margin: 'auto' }}>
            <div className="absolute right-0 top-0 w-36 h-36 bg-amber-100 rounded-full filter blur-3xl opacity-40 -z-10"></div>
            
            {/* Close Button */}
            <button
              onClick={() => {
                setShowThankYou(false);
                setSuccessData(null);
                setActiveTab('home');
              }}
              style={{ position: 'absolute', right: '16px', top: '16px', color: 'var(--ink-soft)', padding: '8px' }}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6" style={{ marginTop: '12px' }}>
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              
              <span className="text-xs text-[#D9762E] font-bold uppercase tracking-wider font-sans block mb-1">Submission Complete</span>
              <h3 className="text-2xl font-serif text-[#1F2318] font-bold" style={{ fontFamily: 'var(--display)' }}>{successData.title}</h3>
            </div>

            {/* Devotional confirmation message */}
            <div className="bg-white rounded-2xl p-5 border border-sage-accent/30 mb-6 text-sm text-neutral-700 leading-relaxed font-sans shadow-sm text-center">
              {successData.message}
            </div>

            {/* Submission specific details */}
            {successData.details && successData.details.length > 0 && (
              <div className="bg-[#F3EDDC] rounded-2xl p-4 border border-sage-accent/20 mb-6 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-teal font-sans border-b border-sage-accent/30 pb-2 mb-2" style={{ color: 'var(--leaf-deep)' }}>Details Summary</h4>
                {successData.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between text-xs font-sans" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span className="text-neutral-500">{detail.label}:</span>
                    <span className="font-bold text-forest-teal-dark" style={{ color: 'var(--ink)' }}>{detail.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Devotional scripture card */}
            <div className="border-y border-neutral-100 py-4 mb-6 text-center" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
              <span className="text-[10px] text-[#C9A646] font-semibold uppercase tracking-wider font-sans block mb-2">Gita Seva Sankalpa</span>
              <p className="text-xs text-neutral-600 font-serif italic max-w-lg mx-auto leading-relaxed">
                "{randomQuote.quote}"
              </p>
              <p className="text-[10px] text-neutral-400 font-sans mt-1.5">
                {randomQuote.translation}
              </p>
            </div>

            {/* Social Share & Close CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-start" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="text-xs font-semibold text-neutral-500 font-sans flex items-center">
                  <Share2 className="w-4 h-4 mr-1.5 text-forest-teal-light" style={{ marginRight: '6px' }} />
                  Share Seva:
                </span>
                
                <a 
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white border border-neutral-200 hover:border-blue-400 text-neutral-600 hover:text-blue-400 transition-all duration-200 shadow-sm flex items-center justify-center"
                  aria-label="Share on X"
                  style={{ display: 'inline-flex', padding: '6px', border: '1px solid var(--line)', borderRadius: '8px' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white border border-neutral-200 hover:border-blue-700 text-neutral-600 hover:text-blue-700 transition-all duration-200 shadow-sm flex items-center justify-center"
                  aria-label="Share on Facebook"
                  style={{ display: 'inline-flex', padding: '6px', border: '1px solid var(--line)', borderRadius: '8px' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>

                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white border border-neutral-200 hover:border-blue-600 text-neutral-600 hover:text-blue-600 transition-all duration-200 shadow-sm flex items-center justify-center"
                  aria-label="Share on LinkedIn"
                  style={{ display: 'inline-flex', padding: '6px', border: '1px solid var(--line)', borderRadius: '8px' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              <button
                onClick={() => {
                  setShowThankYou(false);
                  setSuccessData(null);
                  setActiveTab('home');
                }}
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                Close & Return Home
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
