import React, { useState } from 'react';
import { Heart, Calendar, Wrench, ShieldAlert, Check, ArrowRight } from 'lucide-react';

export default function Volunteer({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    profession: '',
    pillar: 'vidya',
    motivation: ''
  });

  const [skills, setSkills] = useState({
    eventCoordination: false,
    guestRelations: false,
    socialMedia: false,
    translation: false,
    technicalAV: false,
    medicalSupport: false
  });

  const [availability, setAvailability] = useState({
    weekdays: false,
    weekends: false,
    fullEvent: false,
    preEventPrep: false
  });

  const pillars = {
    vidya: {
      title: 'Vidya Dan (Education Support)',
      desc: 'Teaching under-privileged kids, conducting value-based education workshops.'
    },
    arogya: {
      title: 'Arogya Seva (Healthcare & Wellness)',
      desc: 'Assisting in medical camps, distributing medicine, promoting yoga and mental health.'
    },
    prakriti: {
      title: 'Prakriti Seva (Environmental Preservation)',
      desc: 'Tree plantation drives, lake restoration, and organic farming workshops.'
    },
    sanskriti: {
      title: 'Sanskriti Seva (Cultural Heritage)',
      desc: 'Preserving ancient literature, scriptural research, and organizing traditional art events.'
    }
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (name) => {
    setSkills(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleAvailabilityChange = (name) => {
    setAvailability(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    const selectedSkills = Object.keys(skills).filter(k => skills[k]);
    const selectedAvail = Object.keys(availability).filter(k => availability[k]);

    if (selectedSkills.length === 0) {
      alert('Please select at least one skill area.');
      return;
    }
    if (selectedAvail.length === 0) {
      alert('Please select your availability.');
      return;
    }

    const submission = {
      module: 'Volunteer Registration',
      ...formData,
      pillarName: pillars[formData.pillar].title,
      skills: selectedSkills,
      availability: selectedAvail,
      timestamp: new Date().toISOString()
    };

    // Save to localstorage
    const current = JSON.parse(localStorage.getItem('dhara_submissions') || '[]');
    current.push(submission);
    localStorage.setItem('dhara_submissions', JSON.stringify(current));

    onSubmitSuccess({
      title: 'Volunteer Application Received',
      message: `Dhanyavaad, ${formData.name}. Your offer of self-less service (Seva) for the Divine Awards 2026 has been registered. You have aligned with our ${pillars[formData.pillar].title} pillar. Our volunteer coordinator will review your skills (${selectedSkills.join(', ')}) and contact you to begin coordination.`,
      details: [
        { label: 'Volunteer', value: formData.name },
        { label: 'Pillar Alignment', value: pillars[formData.pillar].title },
        { label: 'Selected Seva', value: selectedSkills.map(s => s.replace(/([A-Z])/g, ' $1')).join(', ') }
      ]
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sun-gold font-semibold uppercase tracking-wider text-sm font-sans">Join the Seva Team</span>
        <h2 className="text-4xl font-serif text-forest-teal-dark mt-2 mb-4">Volunteer Registration</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto font-sans">
          "Seva is the highest form of worship." Become the hands that support the celebration of spiritual and humanitarian excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-premium">
            <h3 className="text-lg font-serif text-forest-teal-dark mb-4 pb-2 border-b border-neutral-100 flex items-center">
              <Heart className="w-5 h-5 text-sun-gold mr-2" />
              Our Core Pillars
            </h3>
            <div className="space-y-4">
              {Object.entries(pillars).map(([key, p]) => (
                <div key={key} className="p-3.5 rounded-xl bg-[#FDFBF7] border border-sage-accent/40">
                  <h4 className="text-sm font-bold text-forest-teal-dark font-sans">{p.title}</h4>
                  <p className="text-xs text-neutral-500 font-sans mt-1 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#eef4f1] rounded-3xl p-6 border border-sage-accent/30">
            <h3 className="text-lg font-serif text-forest-teal-dark mb-3">Volunteer Guidelines</h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-sans list-disc pl-4 leading-relaxed">
              <li>Punctuality and respect for all guests, sadhus, and attendees is paramount.</li>
              <li>Sattvic behavioral guidelines must be followed at the event venue.</li>
              <li>Volunteers are requested to wear traditional/sober clothing (white, cream, or light pastel hues).</li>
              <li>Mandatory volunteer briefings will be held online 1 week prior to the event.</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl border border-neutral-100 shadow-premium p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Sevak Kumar"
                  value={formData.name}
                  onChange={handleTextChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="sevak@example.com"
                  value={formData.email}
                  onChange={handleTextChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 99999 88888"
                  value={formData.phone}
                  onChange={handleTextChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Age *</label>
                <input
                  type="number"
                  name="age"
                  required
                  min="18"
                  max="80"
                  placeholder="24"
                  value={formData.age}
                  onChange={handleTextChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Profession / Student</label>
                <input
                  type="text"
                  name="profession"
                  placeholder="Software Engineer / Student"
                  value={formData.profession}
                  onChange={handleTextChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Core Foundation Pillar Alignment</label>
              <select
                name="pillar"
                value={formData.pillar}
                onChange={handleTextChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans bg-white"
              >
                <option value="vidya">Vidya Dan (Education Support)</option>
                <option value="arogya">Arogya Seva (Healthcare & Wellness)</option>
                <option value="prakriti">Prakriti Seva (Environmental Preservation)</option>
                <option value="sanskriti">Sanskriti Seva (Cultural Heritage)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-teal-dark mb-2.5 font-sans flex items-center">
                <Wrench className="w-4 h-4 mr-1.5 text-sun-gold" />
                Select Your Skills / Seva Focus *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 bg-[#FDFBF7] p-4 rounded-xl border border-sage-accent/30">
                {[
                  { key: 'eventCoordination', label: 'Event Coordination & Ushering' },
                  { key: 'guestRelations', label: 'VIP Guest Relations & Hospitality' },
                  { key: 'socialMedia', label: 'Photography & Social Media Coverage' },
                  { key: 'translation', label: 'Translation & Documentation' },
                  { key: 'technicalAV', label: 'AV Production & Technical Support' },
                  { key: 'medicalSupport', label: 'First Aid & Medical Camp Support' }
                ].map((s) => (
                  <label key={s.key} className="flex items-center space-x-3 cursor-pointer select-none">
                    <div
                      onClick={() => handleSkillChange(s.key)}
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
                        skills[s.key]
                          ? 'bg-forest-teal border-forest-teal text-white'
                          : 'bg-white border-neutral-300'
                      }`}
                    >
                      {skills[s.key] && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                    </div>
                    <span className="text-xs text-neutral-700 font-sans">{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-teal-dark mb-2.5 font-sans flex items-center">
                <Calendar className="w-4 h-4 mr-1.5 text-sun-gold" />
                Availability Check *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { key: 'weekdays', label: 'Pre-event Weekdays' },
                  { key: 'weekends', label: 'Pre-event Weekends' },
                  { key: 'fullEvent', label: 'Full Event Day' },
                  { key: 'preEventPrep', label: 'Dismantling/Wrap-up' }
                ].map((a) => (
                  <div
                    key={a.key}
                    onClick={() => handleAvailabilityChange(a.key)}
                    className={`cursor-pointer border py-3 px-2 rounded-xl text-center transition-all duration-300 ${
                      availability[a.key]
                        ? 'border-forest-teal bg-soft-sage text-forest-teal-dark font-semibold'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <span className="text-xs font-sans block">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-forest-teal-dark mb-2 font-sans">Why do you want to volunteer for the Divine Awards? (Seva Motivation)</label>
              <textarea
                name="motivation"
                rows="3"
                placeholder="Share a brief statement about your connection to social service, spiritual paths, or community engagement..."
                value={formData.motivation}
                onChange={handleTextChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal focus:border-transparent transition-all duration-300 text-sm font-sans"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-forest-teal text-white hover:bg-forest-teal-light font-sans font-semibold text-base transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 border-2 border-transparent hover:border-sun-gold cursor-pointer group"
              >
                <span>Register as Sevak</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
