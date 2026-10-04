import React from 'react';
import { PageId } from '../types';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: 'disclaimer' | 'privacy' | 'terms') => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenConsultation
}) => {
  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to Strengthen Your Financial, Healthcare RCM, or Operational Workflows?
            </h3>
            <p className="mt-2 text-slate-300 text-sm">
              Connect with our senior consulting team for a thorough, zero-obligation assessment of your current processes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-md shadow-md transition-colors"
            >
              Book a Free Consultation
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-md border border-slate-700 transition-colors"
            >
              Contact Team
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter">
                RH
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                RH BUSINESS SOLUTIONS
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
              Global Financial, Healthcare Billing, Tax &amp; Business Solutions
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              RH Business Solutions is a professional consulting and outsourcing services company providing financial, healthcare revenue cycle, taxation support, marketing, and operational efficiency solutions to businesses in the USA, Canada, UK, GCC, and international markets.
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dedicated confidentiality &amp; professional service standards.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors">
                  Services Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('industries')} className="hover:text-blue-400 transition-colors">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('why-us')} className="hover:text-blue-400 transition-colors">
                  Why RH Business Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('insights')} className="hover:text-blue-400 transition-colors">
                  Blog / Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('financial-services')} className="hover:text-blue-400 transition-colors text-left">
                  Financial Services &amp; FP&amp;A
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('medical-billing')} className="hover:text-blue-400 transition-colors text-left">
                  Medical Billing &amp; RCM
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('usa-tax')} className="hover:text-blue-400 transition-colors text-left">
                  USA Tax Services Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('consulting')} className="hover:text-blue-400 transition-colors text-left">
                  Business Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('marketing')} className="hover:text-blue-400 transition-colors text-left">
                  Marketing Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('operational-efficiency')} className="hover:text-blue-400 transition-colors text-left">
                  Operational Efficiency
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Email:</span>
                  <span className="text-slate-300 font-mono">[INSERT BUSINESS EMAIL]</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Phone:</span>
                  <span className="text-slate-300 font-mono">[INSERT BUSINESS PHONE]</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">WhatsApp:</span>
                  <span className="text-slate-300 font-mono">[INSERT WHATSAPP]</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Location:</span>
                  <span className="text-slate-300">[INSERT BUSINESS LOCATION]</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <h5 className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Corporate Social
              </h5>
              <div className="flex flex-col gap-1.5 text-xs text-slate-400">
                <span className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  LinkedIn: [INSERT LINKEDIN]
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  Facebook: [INSERT LINK]
                  <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  Instagram: [INSERT LINK]
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 bg-slate-900/60 p-4 rounded-lg text-xs leading-relaxed text-slate-400">
          <p className="font-semibold text-slate-300 mb-1">
            Professional Practice &amp; Regulatory Disclaimer:
          </p>
          <p>
            RH Business Solutions is an outsourced professional business consulting, management reporting, bookkeeping, marketing, operational improvement, and healthcare revenue cycle management services company. RH Business Solutions is not a Certified Public Accounting (CPA) firm, enrolled agent firm, or licensed legal law practice, and does not provide formal legal representation or statutory public audit opinions unless expressly contracted through duly credentialed external affiliated professionals. All USA and Canadian healthcare medical billing, medical coding support, and tax support services are performed in accordance with client contracts, applicable HIPAA/PIPEDA privacy standards, clearinghouse regulations, and local jurisdiction statutory requirements.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} RH Business Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Disclaimer
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
