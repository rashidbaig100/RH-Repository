import React, { useState } from 'react';
import { PageId, ConsultationFormData } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  preselectedService?: string;
}

const SERVICE_OPTIONS = [
  'Financial Services',
  'Medical Billing / RCM',
  'USA Tax Services',
  'Business Consulting',
  'Marketing',
  'Operational Efficiency',
  'Other'
];

const COMPANY_SIZES = [
  'Startup / Early Stage (1-5 staff)',
  'Small Business (6-20 staff)',
  'Mid-Market (21-100 staff)',
  'Established Enterprise (100+ staff)',
  'Medical Practice / Healthcare Clinic (1-10 Providers)',
  'Medical Center / Healthcare Facility (10+ Providers)'
];

const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Australia',
  'Singapore',
  'Other International'
];

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, preselectedService }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'United States',
    serviceRequired: preselectedService || 'Financial Services',
    companySize: 'Small Business (6-20 staff)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company / Practice name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Direct telephone number is required.';
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Please select a service required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: 'United States',
      serviceRequired: 'Financial Services',
      companySize: 'Small Business (6-20 staff)',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <span>Direct Communication Channel</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RH Business Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Connect With Our Practice Leadership
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you require outsourced accounting, healthcare revenue cycle management, USA tax support, or operational optimization, our senior consulting team is ready to evaluate your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Contact Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Comprehensive Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="border-b border-slate-100 pb-6 mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
                Executive Discovery Request
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Request a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Complete the parameters below to schedule a tailored operational briefing with our domain leads.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Consultation Request Dispatched
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. An executive practice director will review your inquiry for <span className="font-semibold text-slate-900">{formData.companyName}</span> regarding <span className="font-semibold text-slate-900">{formData.serviceRequired}</span> and contact you within 1 business day.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-600 mt-6">
                  <div><span className="font-semibold text-slate-800">Assigned Service:</span> {formData.serviceRequired}</div>
                  <div><span className="font-semibold text-slate-800">Jurisdiction / Country:</span> {formData.country}</div>
                  <div><span className="font-semibold text-slate-800">Email:</span> {formData.email}</div>
                  <div><span className="font-semibold text-slate-800">Direct Phone:</span> {formData.phone}</div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Richard Henderson"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Northstar Medical Partners"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                    {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Country / Market *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {COUNTRIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {SERVICE_OPTIONS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Company Size */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Practice Scale
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {COMPANY_SIZES.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Current Challenges &amp; Strategic Objectives
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your current transaction volume, EHR system, accounting software, or specific areas requiring outsourced optimization..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Your submission is held in strict commercial confidence under mutual NDA standards.</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors"
                  >
                    Request a Consultation
                  </button>
                </div>

                {/* Direct Alternative */}
                <div className="pt-3 text-center text-xs text-slate-500">
                  <span>Prefer to talk directly? Contact our team.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Global Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-blue-400 block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Corporate Communication Desk
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect with client relations for urgent scheduling or request formal RFP submission packages.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-semibold text-[10px]">Email Correspondence</span>
                    <span className="text-slate-200 font-mono text-xs">[INSERT BUSINESS EMAIL]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-semibold text-[10px]">Direct Phone Desk</span>
                    <span className="text-slate-200 font-mono text-xs">[INSERT BUSINESS PHONE]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-semibold text-[10px]">Instant WhatsApp Business</span>
                    <span className="text-slate-200 font-mono text-xs">[INSERT WHATSAPP]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-semibold text-[10px]">Primary Operational Headquarters</span>
                    <span className="text-slate-200 text-xs">[INSERT BUSINESS LOCATION]</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Official Corporate Channels
                </div>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center justify-between hover:text-white transition-colors cursor-pointer py-1">
                    <span>LinkedIn Network</span>
                    <span className="font-mono text-slate-500 text-[11px]">[INSERT LINKEDIN]</span>
                  </div>
                  <div className="flex items-center justify-between hover:text-white transition-colors cursor-pointer py-1">
                    <span>Facebook Corporate</span>
                    <span className="font-mono text-slate-500 text-[11px]">[INSERT LINK]</span>
                  </div>
                  <div className="flex items-center justify-between hover:text-white transition-colors cursor-pointer py-1">
                    <span>Instagram Profile</span>
                    <span className="font-mono text-slate-500 text-[11px]">[INSERT LINK]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Commitment Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Client Service Level Agreement (SLA)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All consultation inquiries submitted during regular North American and international business hours receive dedicated acknowledgment within 4 hours, and formal discovery calls are confirmed within 24 hours.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
