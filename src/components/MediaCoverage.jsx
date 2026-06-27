import React, { useState } from 'react';
import { FileDown, Newspaper, Camera, Mail, Phone, User, Landmark, Send, CheckCircle } from 'lucide-react';

export default function MediaCoverage({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    outlet: '',
    email: '',
    phone: '',
    idNumber: '',
    coverageType: 'online',
    message: ''
  });

  const pressKits = [
    {
      title: 'Official Press Release (June 2026)',
      desc: 'Official announcement of categories, guest list, and jury details for the Divine Awards 2026.',
      fileSize: '1.2 MB',
      type: 'PDF'
    },
    {
      title: 'Brand Asset Kit & Logos',
      desc: 'Includes high-resolution vector logos, color codes, and usage guidelines for Dhara Foundations.',
      fileSize: '4.8 MB',
      type: 'ZIP'
    },
    {
      title: 'Event Schedule & Media Guidelines',
      desc: 'Detailed itinerary, routing details, and photography regulations for accredited reporters.',
      fileSize: '850 KB',
      type: 'PDF'
    },
    {
      title: 'Divine Awards 2025 Retrospective',
      desc: 'Statistics, winner profile summaries, and high-quality royalty-free images from last year.',
      fileSize: '18.4 MB',
      type: 'ZIP'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDownload = (title) => {
    alert(`Downloading press asset: ${title} (Mock Event)`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.outlet || !formData.email || !formData.idNumber) {
      alert('Please fill in all required fields.');
      return;
    }

    const submission = {
      module: 'Media Coverage & Accreditation',
      ...formData,
      timestamp: new Date().toISOString()
    };

    // Save to localstorage
    const current = JSON.parse(localStorage.getItem('dhara_submissions') || '[]');
    current.push(submission);
    localStorage.setItem('dhara_submissions', JSON.stringify(current));

    onSubmitSuccess({
      title: 'Media Accreditation Request Received',
      message: `Namaste, ${formData.name}. Your application for press credentials representing "${formData.outlet}" at the Divine Awards 2026 has been registered. Our media relations desk will evaluate your press ID (${formData.idNumber}) and verify coverage details. Approved passes will be sent to ${formData.email} by early July 2026.`,
      details: [
        { label: 'Journalist', value: formData.name },
        { label: 'Publication/Outlet', value: formData.outlet },
        { label: 'Coverage Class', value: formData.coverageType.toUpperCase() }
      ]
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sun-gold font-semibold uppercase tracking-wider text-sm font-sans">Press & Media Desk</span>
        <h2 className="text-4xl font-serif text-forest-teal-dark mt-2 mb-4">Media Coverage & Accreditation</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto font-sans">
          Access official press resources, download brand assets, or apply for journalist credentials to cover the Divine Awards 2026 live from the venue.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-neutral-100 shadow-premium p-8">
          <h3 className="text-2xl font-serif text-forest-teal-dark mb-6 pb-2 border-b border-neutral-100 flex items-center">
            <FileDown className="w-6 h-6 text-sun-gold mr-2" />
            Media Press Kit
          </h3>
          
          <div className="space-y-4">
            {pressKits.map((kit, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-neutral-100 bg-[#FDFBF7] flex justify-between items-center transition-all duration-300 hover:border-forest-teal-light group"
              >
                <div className="pr-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold font-sans bg-soft-sage text-forest-teal mb-1">
                    {kit.type} • {kit.fileSize}
                  </span>
                  <h4 className="text-sm font-bold text-forest-teal-dark font-sans">{kit.title}</h4>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5 leading-normal">{kit.desc}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDownload(kit.title)}
                  className="p-3 rounded-xl bg-white text-forest-teal border border-neutral-200 hover:bg-forest-teal hover:text-white transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
                >
                  <FileDown className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#eef4f1] border border-sage-accent/30 text-xs font-sans text-neutral-600 leading-relaxed flex items-start space-x-2.5">
            <Camera className="w-5 h-5 text-forest-teal shrink-0 mt-0.5" />
            <div>
              <strong className="text-forest-teal-dark block">Photography & Video Notice</strong>
              Broadcasters and independent videographers must obtain an official filming pass. Unauthorized tripods or heavy telephoto lenses are not permitted in the inner prayer hall.
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-neutral-100 shadow-premium p-8">
          <h3 className="text-2xl font-serif text-forest-teal-dark mb-6 pb-2 border-b border-neutral-100 flex items-center">
            <Newspaper className="w-6 h-6 text-sun-gold mr-2" />
            Apply for Press Pass
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Karan Bajwa"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Media House / Publication *</label>
              <div className="relative">
                <Landmark className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  name="outlet"
                  required
                  placeholder="The National Chronicle / Seva Vani"
                  value={formData.outlet}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Press ID / Accreditation Card No *</label>
                <input
                  type="text"
                  name="idNumber"
                  required
                  placeholder="PIB-7890123"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Coverage Type</label>
                <select
                  name="coverageType"
                  value={formData.coverageType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans bg-white"
                >
                  <option value="online">Online / Digital Newspaper</option>
                  <option value="print">Print Newspaper / Magazine</option>
                  <option value="tv">Television Broadcaster</option>
                  <option value="photo">Official Press Photographer</option>
                  <option value="radio">Radio / Podcast Correspondent</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Work Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="karan@chronicle.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Mobile Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 97777 66666"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Special Requirements (e.g. AV Feed, Interview Slots)</label>
              <textarea
                name="message"
                rows="3"
                placeholder="We require an audio split-feed from the main podium, and a 10-minute interview slot with the Sanskriti Vibhushan awardee..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-forest-teal text-white hover:bg-forest-teal-light font-sans font-semibold text-base transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 border-2 border-transparent hover:border-sun-gold cursor-pointer group"
              >
                <span>Request Accreditation</span>
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
