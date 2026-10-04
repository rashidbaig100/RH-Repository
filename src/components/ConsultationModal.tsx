import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, PhoneCall, Mail, Shield } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
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

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'United States',
    serviceRequired: 'Financial Services',
    companySize: 'Small Business (6-20 staff)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceRequired: preselectedService
      }));
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate email.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact phone number is required.';
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Please select a service.';

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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 id="consultation-modal-title" className="text-lg font-bold tracking-tight text-white">
              Schedule an Executive Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              RH Business Solutions · Professional Outsourced Finance, Healthcare RCM &amp; Consulting
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Consultation Request Received
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. An executive practice director from RH Business Solutions will review your requirements for <span className="font-semibold text-slate-900">{formData.companyName}</span> ({formData.serviceRequired}) and contact you within one business day.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-600">
                <div><span className="font-semibold text-slate-700">Selected Service:</span> {formData.serviceRequired}</div>
                <div><span className="font-semibold text-slate-700">Country:</span> {formData.country}</div>
                <div><span className="font-semibold text-slate-700">Corporate Email:</span> {formData.email}</div>
                <div><span className="font-semibold text-slate-700">Direct Phone:</span> {formData.phone}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-blue-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Practice Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Health Partners LLC"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Country */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  Company / Organization Scale
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {COMPANY_SIZES.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Overview of Your Objectives or Current Challenges
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your accounting, medical billing, tax support, or operational goals..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              {/* Security & Confidentiality note */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Strict non-disclosure standards. Your commercial data is never shared.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm uppercase tracking-wider rounded-lg shadow-md transition-colors"
                >
                  Request a Consultation
                </button>
              </div>

              {/* Direct Team Alternative */}
              <div className="pt-2 text-center text-xs text-slate-500">
                <span>Prefer to talk directly? Contact our team at </span>
                <span className="font-semibold text-slate-700">[INSERT BUSINESS EMAIL]</span>
                <span> or WhatsApp </span>
                <span className="font-semibold text-slate-700">[INSERT WHATSAPP]</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
