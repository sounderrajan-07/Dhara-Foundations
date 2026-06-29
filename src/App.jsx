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
  <div className="sunrise-glow"></div>
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
        <div className="eyebrow">
          <svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 0c3.5 4.5 5.2 7.4 5.2 10.4a5.2 5.2 0 1 1-10.4 0C2.8 7.4 4.5 4.5 8 0z" fill="#D9762E"/></svg>
          Registered Public Trust · Est. 2024
        </div>
        <h1>Kindness in Action, <em>Faith</em> in Every Step</h1>
        <p className="lede">Dhara Foundations stands beside the poor, the forgotten, and the faithful — feeding the hungry, restoring sacred spaces, and giving dignity to those society often overlooks.</p>
        <div className="hero-actions">
          <button onClick={() => setActiveTab('donor')} className="btn btn-primary">Donate Now</button>
          <button onClick={(e) => { e.preventDefault(); setActiveTab('registration'); }} className="btn btn-ghost">Explore Divine Awards 2026 →</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="num">3</div><div className="label">Founding Trustees</div></div>
          <div className="hero-stat"><div className="num">40+</div><div className="label">Community Programs</div></div>
          <div className="hero-stat"><div className="num">80G</div><div className="label">Tax Exemption</div></div>
        </div>
      </div>
      <div className="hero-visual">
        <svg className="mandala-ring" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="195" stroke="#C9A646" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 6"/>
          <circle cx="200" cy="200" r="175" stroke="#3F8C4A" strokeWidth="0.6" opacity="0.3" strokeDasharray="1 4"/>
        </svg>
        <div className="hero-badge">
          <svg className="icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FCE6BC"/><path d="M20 28V20M20 20c0-4-3-6-6-6 0 4 2 6 6 6zM20 20c0-4 3-6 6-6 0 4-2 6-6 6z" stroke="#D9762E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div><div className="t1">CSR Registered</div><div className="t2">Reg. No. CSR00034928</div></div>
        </div>
        <div className="hero-photo">
        </div>
      </div>
    </div>
  </div>
</section>

{/* Trust strip */}
<div className="trust">
  <div className="wrap">
    <div className="trust-item"><span className="dot"></span>Indian Trust Act, 1882 — <b>Registered</b></div>
    <div className="trust-item"><span className="dot"></span>80G &amp; 12A — <b>Tax Exempt</b></div>
    <div className="trust-item"><span className="dot"></span>Ministry of Corporate Affairs — <b>CSR Approved</b></div>
    <div className="trust-item"><span className="dot"></span>NGO Darpan — <b>TN/2024/0473120</b></div>
  </div>
</div>

{/* Kindness / Helping the Poor */}
<section className="kindness-section reveal">
  <div className="wrap">
    <div className="kindness-grid">
      <div className="kindness-copy">
        <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 0c3.5 4.5 5.2 7.4 5.2 10.4a5.2 5.2 0 1 1-10.4 0C2.8 7.4 4.5 4.5 8 0z" fill="#D9762E"/></svg>Compassion in Practice</div>
        <h2>Every act of kindness reaches someone who needs it most</h2>
        <p>Behind every program is a simple belief — that dignity, food, shelter, and care should never depend on circumstance. We work directly with the poor, the elderly, the differently-abled, and forgotten communities across Tamil Nadu.</p>
        <p>No gesture is too small. A meal, a pair of shoes, a rebuilt roof, a restored prayer hall — each is a step toward a more compassionate society.</p>
      </div>
      <div className="impact-grid">
        <div className="impact-card">
          <div className="impact-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 11h16M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 11l1 8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-8" stroke="#A85A1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <h4>Meals &amp; Essentials</h4>
          <p>Food carriers and daily essentials for government homes and underserved families.</p>
        </div>
        <div className="impact-card">
          <div className="impact-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" stroke="#2D6440" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <h4>Shelter &amp; Care Homes</h4>
          <p>Support for children's homes and care facilities for the elderly and disabled.</p>
        </div>
        <div className="impact-card">
          <div className="impact-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="#146E6A" strokeWidth="1.6"/><path d="M5 20c0-3.8 3.2-6.5 7-6.5s7 2.7 7 6.5" stroke="#146E6A" strokeWidth="1.6"/></svg></div>
          <h4>Clothing &amp; Footwear</h4>
          <p>Festive clothing and footwear drives for children in government homes.</p>
        </div>
        <div className="impact-card">
          <div className="impact-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9-9c-1.4-3 .5-6.5 4-6.5 2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.5 0 5.4 3.5 4 6.5-2 4.5-9 9-9 9z" stroke="#A85A1E" strokeWidth="1.6"/></svg></div>
          <h4>Health &amp; Relief</h4>
          <p>Emergency relief support, including pandemic-era response for vulnerable groups.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Mission Pillars */}
<section className="pillars-section reveal" id="programs">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>What We Stand For</div>
      <h2>Three pillars, one purpose</h2>
      <p>Every program we run traces back to one of these commitments — culture, spirit, and people.</p>
    </div>
    <div className="pillars-grid">
      <div className="pillar-card">
        <div className="pillar-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M5 8c0 6 3 10 7 12 4-2 7-6 7-12-2-2-5-3-7-3s-5 1-7 3z" stroke="#A85A1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <div className="num">01 — Desiyam</div>
        <h3>National Culture</h3>
        <p>We promote and preserve India's rich cultural identity — from temple traditions to heritage arts that risk being forgotten.</p>
      </div>
      <div className="pillar-card">
        <div className="pillar-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3c3 4 4.5 6.5 4.5 9.5a4.5 4.5 0 1 1-9 0C7.5 9.5 9 7 12 3z" stroke="#2D6440" strokeWidth="1.6" strokeLinejoin="round"/><path d="M5 20h14" stroke="#2D6440" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
        <div className="num">02 — Spiritualism</div>
        <h3>Sacred Restoration</h3>
        <p>We support spiritual education, temple renovation, and rituals that connect communities with timeless wisdom.</p>
      </div>
      <div className="pillar-card">
        <div className="pillar-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="#146E6A" strokeWidth="1.6"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="#146E6A" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
        <div className="num">03 — Welfare</div>
        <h3>Community Care</h3>
        <p>Through rehabilitation, medical care, and outreach, we empower vulnerable people to live with purpose and pride.</p>
      </div>
    </div>
  </div>
</section>

{/* About / Founder message */}
<section id="about" className="reveal">
  <div className="wrap">
    <div className="about-grid">
      <div className="about-visual">
        <div className="about-photo"></div>
        <div className="quote-card"><p>"Service to people is service to the divine."</p></div>
      </div>
      <div className="about-copy">
        <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>A Message From Our Founders</div>
        <h2>Built on two decades of quiet, consistent service</h2>
        <p>Dhara Foundations was born from years of grassroots work — temple protection, legal advocacy for spiritual heritage, and direct support for tribal and rural communities across Tamil Nadu.</p>
        <p>What began as individual conviction has grown into a registered public trust working at the intersection of culture, faith, and welfare — one renovation, one ration kit, one scholarship at a time.</p>
        <ul className="about-list">
          <li><svg className="check" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#D6EFD0"/><path d="M8 12.5l2.5 2.5L16 9" stroke="#2D6440" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>Two decades of construction &amp; community leadership</li>
          <li><svg className="check" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#D6EFD0"/><path d="M8 12.5l2.5 2.5L16 9" stroke="#2D6440" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>Legal advocacy for temple &amp; heritage protection</li>
          <li><svg className="check" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#D6EFD0"/><path d="M8 12.5l2.5 2.5L16 9" stroke="#2D6440" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>Chartered governance — financial transparency by design</li>
        </ul>
        <a href="#" className="btn btn-primary">Read Our Full Story</a>
      </div>
    </div>
  </div>
</section>

{/* Founders */}
<section style={{"background":"var(--ivory-deep)"}} className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>Our Trustees</div>
      <h2>The people behind the purpose</h2>
    </div>
    <div className="founders-grid">
      <div className="founder-card">
        <div className="founder-photo"></div>
        <h4>S. Vinoth Ragavendran</h4>
        <div className="role">Engineering Entrepreneur</div>
        <p>Two decades in construction; active in temple protection and legal advocacy for heritage preservation.</p>
      </div>
      <div className="founder-card">
        <div className="founder-photo"></div>
        <h4>P. Ezhumalai</h4>
        <div className="role">Agriculturist &amp; Social Worker</div>
        <p>A dedicated dairy farmer in public life since childhood, guided by deep devotion to Hindu values.</p>
      </div>
      <div className="founder-card">
        <div className="founder-photo"></div>
        <h4>S. Srividhya</h4>
        <div className="role">Chartered Accountant &amp; CS</div>
        <p>Dual-qualified professional bringing ethics and precision to the trust's governance.</p>
      </div>
    </div>
  </div>
</section>

{/* Divine Awards 2026 */}
<section id="awards" className="reveal">
  <div className="awards-band">
    <div className="awards-inner">
      <div>
        <div className="awards-eyebrow">
          <svg width="15" height="18" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#F0C266" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Flagship Event
        </div>
        <img className="awards-wordmark" src="data:image/jpeg;base64,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" alt="Dhara Divine Awards 2026" />
        <p>A prestigious convergence of spiritual leaders, selfless changemakers, and corporate CSR visionaries. Join us in cultivating harmony, empowering community growth, and acknowledging the quiet souls who serve humanity.</p>
        <div className="awards-meta">
          <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="#D5E5CD" strokeWidth="1.6"/><path d="M3 9h18M8 3v4M16 3v4" stroke="#D5E5CD" strokeWidth="1.6"/></svg>October 24, 2026</div>
          <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.5 7-12.5A7 7 0 0 0 5 9.5C5 14.5 12 22 12 22z" stroke="#D5E5CD" strokeWidth="1.6"/><circle cx="12" cy="9.5" r="2.4" stroke="#D5E5CD" strokeWidth="1.6"/></svg>Grand Assembly Hall, Bengaluru</div>
        </div>
        <div className="awards-actions">
          <a href="#" className="btn btn-primary">Register for Event</a>
          <a href="#" className="btn btn-light">Sponsorship Opportunities</a>
        </div>
      </div>
      <div className="awards-visual">
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="#D5E5CD" strokeWidth="1.2" opacity="0.5"/>
          <path d="M50 70V40M50 40c0-8-6-12-13-12 0 8 5 13 13 13zM50 40c0-8 6-12 13-12 0 8-5 13-13 13z" stroke="#F0C266" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
  </div>
</section>

{/* Events */}

{/* Operations Portal / Seva Dashboard */}
<section id="seva-dashboard" className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow">
        <svg className="sprout" viewBox="0 0 16 22" fill="none">
          <path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Seva Portal
      </div>
      <h2>Operations Dashboard</h2>
      <p>Select an operational panel below to access dedicated tools and registration pages</p>
    </div>
    <div className="impact-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
      
      <div onClick={() => setActiveTab('registration')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#FCE6BC,#F0C266)' }}>
            <Ticket className="w-5 h-5 text-[#A85A1E]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Event Booking</h4>
          <p>Secure delegate or VIP tickets, choose dietary options.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>Book Tickets</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('sponsorship')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#D6EFD0,#9FD494)' }}>
            <Handshake className="w-5 h-5 text-[#2D6440]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Sponsorship Options</h4>
          <p>View Platinum, Gold, Silver tiers and sponsorship deliverables.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>View Tiers</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('volunteer')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#CDEFEC,#7FD9D2)' }}>
            <Heart className="w-5 h-5 text-[#146E6A]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Volunteer Seva</h4>
          <p>Register availability, alignment, and coordinate skills.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>Join Seva</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('donor')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#FCE6BC,#F0C266)' }}>
            <Gift className="w-5 h-5 text-[#A85A1E]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Giving Gateway</h4>
          <p>Pre-set micro-donations and claim 80G tax benefits.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>Donate Now</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('csr')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#D6EFD0,#9FD494)' }}>
            <Briefcase className="w-5 h-5 text-[#2D6440]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Corporate CSR</h4>
          <p>Register institutional budgets, CIN, and joint targets.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>Partner Up</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('nominations')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#CDEFEC,#7FD9D2)' }}>
            <Award className="w-5 h-5 text-[#146E6A]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Award Nominations</h4>
          <p>Submit multi-step nominations for grassroots unsung heroes.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>Submit Nomination</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('media')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#FCE6BC,#F0C266)' }}>
            <Newspaper className="w-5 h-5 text-[#A85A1E]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Press & Media Kit</h4>
          <p>Request journalist credentials and download media assets.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>Media Panel</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('highlights')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#D6EFD0,#9FD494)' }}>
            <Image className="w-5 h-5 text-[#2D6440]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>Event Highlights</h4>
          <p>View statistics, visual archives, and annual impact reports.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
          <span>View Archive</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </div>
      </div>

      <div onClick={() => setActiveTab('contact')} className="impact-card cursor-pointer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <div className="impact-icon" style={{ background: 'linear-gradient(135deg,#CDEFEC,#7FD9D2)' }}>
            <MessageSquare className="w-5 h-5 text-[#146E6A]" />
          </div>
          <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: '600', color: 'var(--ink)' }}>General Enquiries</h4>
          <p>Submit questions and get quick guidance or support.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', color: 'var(--leaf-deep)', marginTop: '20px' }}>
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
      <div className="section-head">
        <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>On the Ground</div>
        <h2>Recent &amp; upcoming events</h2>
      </div>
      <a href="#" className="btn btn-ghost">View All Events</a>
    </div>
    <div className="events-row">
      <div className="event-card">
        <div className="event-thumb" style={{ backgroundImage: "url('/images/Events/Providing Diwali Dresses To Home Children.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="event-date"><div className="d">18</div><div className="m">Oct</div></div></div>
        <div className="event-body"><div className="event-loc">📍 Cuddalore</div><h4>Providing Diwali dresses to home children</h4></div>
      </div>
      <div className="event-card">
        <div className="event-thumb" style={{ backgroundImage: "url('/images/Events/In Digitisation activities for Women Self Help Group society.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="event-date"><div className="d">01</div><div className="m">Jan</div></div></div>
        <div className="event-body"><div className="event-loc">📍 Cuddalore</div><h4>Digitisation drive for Women Self-Help Groups</h4></div>
      </div>
      <div className="event-card">
        <div className="event-thumb" style={{ backgroundImage: "url('/images/Events/In Tribal welfare activities at Javadhu hills.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="event-date"><div className="d">06</div><div className="m">Nov</div></div></div>
        <div className="event-body"><div className="event-loc">📍 Vellore</div><h4>Tribal welfare activities at Javadhu Hills</h4></div>
      </div>
      <div className="event-card">
        <div className="event-thumb" style={{ backgroundImage: "url('/images/Events/Felicitation of Sports children at Cuddalore during Pongal festival.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="event-date"><div className="d">14</div><div className="m">Jan</div></div></div>
        <div className="event-body"><div className="event-loc">📍 Cuddalore</div><h4>Felicitation of sports children, Pongal</h4></div>
      </div>
    </div>
  </div>
</section>

{/* Gallery teaser */}
<section style={{"background":"var(--ivory-deep)"}} className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>Moments</div>
      <h2>From our photo gallery</h2>
    </div>
    <div className="gallery-grid">
      <div className="g-item tall g1" style={{ backgroundImage: "url('/images/Sanatana Dharma/Brindavana Kumbabhishekam ceremony.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="tag">Temple Restoration</div></div>
      <div className="g-item g2" style={{ backgroundImage: "url('/images/Events/Providing meal and food carriers to Govt Home Children.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="tag">Community Outreach</div></div>
      <div className="g-item g3" style={{ backgroundImage: "url('/images/News/DHARA Divine Awards.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="tag">Divine Awards</div></div>
      <div className="g-item g4" style={{ backgroundImage: "url('/images/Events/In Tribal welfare activities at Javadhu hills.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="tag">Tribal Welfare</div></div>
    </div>
  </div>
</section>

{/* News */}
<section id="news" className="reveal">
  <div className="wrap">
    <div className="section-head">
      <div className="eyebrow"><svg className="sprout" viewBox="0 0 16 22" fill="none"><path d="M8 22V11M8 11C8 6 4 4 1 4c0 5 3 7 7 7zM8 11c0-5 4-7 7-7 0 5-3 7-7 7z" stroke="#3F8C4A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>Press &amp; Updates</div>
      <h2>Latest news &amp; articles</h2>
    </div>
    <div className="news-grid">
      <div className="news-card">
        <div className="news-thumb" style={{ backgroundImage: "url('/images/News/Dhara Foundation Registrations & Certifications.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="news-date">20 Feb, 2025</div>
        <h4>Dhara Foundation — Registrations &amp; Certifications</h4>
        <a href="#" className="news-link">Read More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
      <div className="news-card">
        <div className="news-thumb" style={{ backgroundImage: "url('/images/News/Governor of Maharashtra Appreciates DHARA Divine Awards 2025.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="news-date">31 Aug, 2025</div>
        <h4>Governor of Maharashtra Appreciates Dhara Divine Awards 2025</h4>
        <a href="#" className="news-link">Read More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
      <div className="news-card">
        <div className="news-thumb" style={{ backgroundImage: "url('/images/News/Send-Off Ceremony in Honour of His Excellency, Honourable Governor Shri R. N. Ravi..jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="news-date">30 May, 2026</div>
        <h4>Send-Off Ceremony in Honour of Hon'ble Governor Shri R. N. Ravi</h4>
        <a href="#" className="news-link">Read More <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
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
        <button onClick={() => setActiveTab('donor')} className="btn" style={{"background":"#fff","color":"var(--sunrise-deep)"}}>Donate Now</button>
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
