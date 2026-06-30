import React from 'react';
import { Award, Users, Calendar, Trees } from 'lucide-react';

export default function EventHighlights() {
  const stats = [
    {
      icon: Award,
      value: '28',
      label: 'Divine Awardees Honored',
      desc: 'Grassroots leaders recognized for outstanding selfless seva across rural regions.'
    },
    {
      icon: Users,
      value: '2,400+',
      label: 'Delegates & Seva Sadhaks',
      desc: 'Spiritual teachers, volunteers, and change-makers united in a singular ecosystem.'
    },
    {
      icon: Calendar,
      value: '100%',
      label: 'Pure Sattvic Environment',
      desc: 'Every session conducted with traditional scriptural decorum, yoga, and organic foods.'
    },
    {
      icon: Trees,
      value: '₹45L+',
      label: 'Direct CSR Support Deployed',
      desc: 'Corporate partnership grants channeled to clean water, education, and forestry projects.'
    }
  ];

  const galleryImages = [
    {
      src: '/logo/photo_6195100629672333270_y.jpg',
      title: 'Devotional Assembly',
      desc: 'Spiritual masters blessing the seva sadhaks.'
    },
    {
      src: '/logo/photo_6195100629672333269_y.jpg',
      title: 'Lighting the Lamp of Seva',
      desc: 'Inaugural lamp lighting by eminent community leaders.'
    },
    {
      src: '/logo/photo_6195100629672333270_y.jpg',
      title: 'Honorary Award Ceremony',
      desc: 'Recognizing a grassroots hero for environment preservation.'
    },
    {
      src: '/logo/photo_6195100629672333271_y.jpg',
      title: 'Sattvic Plenary Dialogue',
      desc: 'Interactive panel discussing traditional education models.'
    },
    {
      src: '/logo/photo_6195100629672333272_y.jpg',
      title: 'Prakriti Seva Initiative',
      desc: 'Promoting afforestation and biodiversity conservation.'
    },
    {
      src: '/logo/photo_6195100629672333273_y.jpg',
      title: 'Traditional Cultural Evening',
      desc: 'Classical music performance showcasing Vedic heritage.'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sun-gold font-semibold uppercase tracking-wider text-sm font-sans">Retrospective and Impact</span>
        <h2 className="text-4xl font-serif text-forest-teal-dark mt-2 mb-4">Event Highlights & Impact Metrics</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto font-sans">
          A glimpse into the spiritual fervor, cultural depth, and humanitarian impact of our previous Divine Awards assembly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((s, index) => {
          const IconComponent = s.icon;
          return (
            <div key={index} className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-premium text-center hover:border-sun-gold-light transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-soft-sage flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-6 h-6 text-forest-teal-light" />
              </div>
              <span className="text-3xl font-serif font-bold text-forest-teal-dark block mb-1">
                {s.value}
              </span>
              <h3 className="text-sm font-bold text-forest-teal font-sans mb-2">
                {s.label}
              </h3>
              <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif text-forest-teal-dark">Moments of Seva & Celebration</h3>
        <p className="text-sm text-neutral-500 font-sans mt-1">Archived memories from the Divine Awards</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-neutral-100">
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"; // fallback
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-teal-dark/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h4 className="text-sm font-bold font-sans">{img.title}</h4>
                  <p className="text-[10px] text-neutral-200 font-sans mt-0.5">{img.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
