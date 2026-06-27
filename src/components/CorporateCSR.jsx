import React, { useState } from 'react';
import { Briefcase, Building, ShieldCheck, Mail, Phone, User, Landmark, HelpCircle, ArrowRight } from 'lucide-react';

export default function CorporateCSR({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    companyName: '',
    cin: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    budgetBracket: '5-10',
    primarySector: 'education',
    csrGoals: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.cin) {
      alert('Please fill in all required fields.');
      return;
    }

    const budgetText = {
      '5-10': '₹5 Lakhs – ₹10 Lakhs',
      '10-25': '₹10 Lakhs – ₹25 Lakhs',
      '25-50': '₹25 Lakhs – ₹50 Lakhs',
      '50plus': '₹50 Lakhs +'
    }[formData.budgetBracket];

    const submission = {
      module: 'Corporate CSR Partnership',
      ...formData,
      budgetBracketText: budgetText,
      timestamp: new Date().toISOString()
    };

    // Save to localstorage
    const current = JSON.parse(localStorage.getItem('dhara_submissions') || '[]');
    current.push(submission);
    localStorage.setItem('dhara_submissions', JSON.stringify(current));

    onSubmitSuccess({
      title: 'CSR Proposal Registered',
      message: `Namaste. Dhara Foundations acknowledges the CSR partnership proposal from ${formData.companyName}. We have logged your priority area as ${formData.primarySector.toUpperCase()} with an estimated budget bracket of ${budgetText}. Our Board of Trustees and CSR compliance officer will review your CIN (${formData.cin.toUpperCase()}) and objectives to draft an actionable MoU.`,
      details: [
        { label: 'Corporate Entity', value: formData.companyName },
        { label: 'Representative', value: formData.contactName },
        { label: 'Budget Bracket', value: budgetText }
      ]
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sun-gold font-semibold uppercase tracking-wider text-sm font-sans">Institutional Seva</span>
        <h2 className="text-4xl font-serif text-forest-teal-dark mt-2 mb-4">Corporate CSR Partnerships</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto font-sans">
          Build structured, compliant, and highly impactful CSR programs with Dhara Foundations. Partner with us to execute rural development, environment, and educational initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#eef4f1] rounded-3xl p-6 border border-sage-accent/30 shadow-premium">
            <h3 className="text-lg font-serif text-forest-teal-dark mb-4 pb-2 border-b border-sage-accent/30 flex items-center">
              <ShieldCheck className="w-5 h-5 text-forest-teal mr-2" />
              Compliance & Audit
            </h3>
            <ul className="space-y-4 text-xs font-sans text-neutral-600 leading-relaxed">
              <li>
                <strong className="text-forest-teal-dark block">12A & 80G Registered</strong>
                Fully compliant with the Income Tax Department guidelines.
              </li>
              <li>
                <strong className="text-forest-teal-dark block">CSR-1 Compliant</strong>
                Registered with the Ministry of Corporate Affairs (MCA) to undertake CSR activities. Registration ID: CSR00034928.
              </li>
              <li>
                <strong className="text-forest-teal-dark block">Transparency & Reports</strong>
                We provide quarterly impact videos, audited balance sheets, and utilization certificates (Form 10BD).
              </li>
            </ul>
          </div>

          <div className="bg-[#FDFBF7] rounded-3xl p-6 border border-sage-accent/30">
            <h3 className="text-lg font-serif text-forest-teal-dark mb-3">Our Core CSR Domains</h3>
            <div className="space-y-2 text-xs text-neutral-600 font-sans leading-relaxed">
              <p><strong>• Rural Development:</strong> Implementing solar water pumps, micro-grids, and primary schools.</p>
              <p><strong>• Skill Empowerment:</strong> Tailoring, handicraft training, and digital literacy for rural youth.</p>
              <p><strong>• Prakriti conservation:</strong> Implementing sustainable organic farming & composting sites.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-3xl border border-neutral-100 shadow-premium p-8">
          <div className="flex items-center space-x-3 mb-6 border-b border-neutral-100 pb-4">
            <Briefcase className="text-sun-gold w-6 h-6" />
            <h3 className="text-xl font-serif text-forest-teal-dark">CSR Intake Portal</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Company Legal Name *</label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="Dhara Technologies Pvt Ltd"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Corporate Identification Number (CIN) *</label>
                <input
                  type="text"
                  name="cin"
                  required
                  placeholder="U72200KA2021PTC123456"
                  maxLength="21"
                  value={formData.cin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans uppercase placeholder:normal-case"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Primary CSR Contact Person *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    name="contactName"
                    required
                    placeholder="Ms. Priya Nair"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Designation / Role *</label>
                <input
                  type="text"
                  name="designation"
                  required
                  placeholder="CSR Lead / Director HR"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Work Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="priya.nair@dhara.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Contact Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 80 4567 8901"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Estimated CSR Budget (Annual)</label>
                <select
                  name="budgetBracket"
                  value={formData.budgetBracket}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans bg-white"
                >
                  <option value="5-10">₹5 Lakhs – ₹10 Lakhs</option>
                  <option value="10-25">₹10 Lakhs – ₹25 Lakhs</option>
                  <option value="25-50">₹25 Lakhs – ₹50 Lakhs</option>
                  <option value="50plus">₹50 Lakhs +</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Priority Sector Alignment</label>
                <select
                  name="primarySector"
                  value={formData.primarySector}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans bg-white"
                >
                  <option value="education">Vidya (Rural Education)</option>
                  <option value="healthcare">Arogya (Healthcare Camps)</option>
                  <option value="environment">Prakriti (Tree Plantation & Farming)</option>
                  <option value="heritage">Sanskriti (Arts & Heritage Preservation)</option>
                  <option value="sanitation">Drinking Water & Sanitation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">CSR Collaboration Goals / Scope of Work</label>
              <textarea
                name="csrGoals"
                rows="3"
                placeholder="Briefly state your alignment goals, geographical preferences (e.g. Karnataka, Maharashtra), or key milestones..."
                value={formData.csrGoals}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-forest-teal mb-2 font-sans">Additional Notes / Request for Call</label>
              <textarea
                name="notes"
                rows="2"
                placeholder="E.g. We require a custom presentation for our CSR board, please arrange a call..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-forest-teal text-sm font-sans"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-forest-teal text-white hover:bg-forest-teal-light font-sans font-semibold text-base transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 border-2 border-transparent hover:border-sun-gold cursor-pointer group"
              >
                <span>Initiate CSR Discussion</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
