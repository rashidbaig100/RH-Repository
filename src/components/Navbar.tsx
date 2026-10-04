import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicePage = [
    'services',
    'financial-services',
    'medical-billing',
    'usa-tax',
    'consulting',
    'marketing',
    'operational-efficiency',
  ].includes(currentPage);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtitles) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left font-bold text-lg sm:text-xl tracking-wider text-white hover:text-blue-300 transition-colors focus:outline-none flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white font-extrabold text-sm tracking-tighter shadow-sm">
              RH
            </div>
            <span className="font-extrabold tracking-tight">RH BUSINESS SOLUTIONS</span>
          </button>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors hover:text-white ${
                currentPage === 'home' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors hover:text-white ${
                currentPage === 'about' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1 transition-colors hover:text-white py-2 ${
                  isServicePage ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-slate-900 border border-slate-700/80 rounded-lg shadow-2xl py-2 mt-0 z-50 text-slate-200">
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2.5 text-xs uppercase tracking-wider text-blue-400 font-bold border-b border-slate-800 hover:bg-slate-800"
                  >
                    All Services Overview →
                  </button>
                  <button
                    onClick={() => handleNavClick('financial-services')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-800/80 hover:text-white block transition-colors"
                  >
                    <div className="font-medium text-slate-100">Global Financial Services</div>
                    <div className="text-xs text-slate-400">Bookkeeping, FP&A &amp; Dashboards</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('medical-billing')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-800/80 hover:text-white block transition-colors"
                  >
                    <div className="font-medium text-slate-100">USA &amp; Canada Medical Billing</div>
                    <div className="text-xs text-slate-400">RCM, Claims &amp; Denial Recovery</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('usa-tax')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-800/80 hover:text-white block transition-colors"
                  >
                    <div className="font-medium text-slate-100">USA Tax Support</div>
                    <div className="text-xs text-slate-400">Compliance &amp; Data Preparation</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('consulting')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-800/80 hover:text-white block transition-colors"
                  >
                    <div className="font-medium text-slate-100">Business Consulting</div>
                    <div className="text-xs text-slate-400">Profitability, Margins &amp; Planning</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('marketing')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-800/80 hover:text-white block transition-colors"
                  >
                    <div className="font-medium text-slate-100">Marketing Services</div>
                    <div className="text-xs text-slate-400">B2B Growth &amp; LinkedIn Strategy</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('operational-efficiency')}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-800/80 hover:text-white block transition-colors"
                  >
                    <div className="font-medium text-slate-100">Operational Efficiency</div>
                    <div className="text-xs text-slate-400">SOPs &amp; Workflow Automation</div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('industries')}
              className={`transition-colors hover:text-white ${
                currentPage === 'industries' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
              }`}
            >
              Industries
            </button>

            <button
              onClick={() => handleNavClick('why-us')}
              className={`transition-colors hover:text-white ${
                currentPage === 'why-us' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
              }`}
            >
              Why Us
            </button>

            <button
              onClick={() => handleNavClick('insights')}
              className={`transition-colors hover:text-white ${
                currentPage === 'insights' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
              }`}
            >
              Insights
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors hover:text-white ${
                currentPage === 'contact' ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1' : 'text-slate-300'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md shadow-sm transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 whitespace-nowrap"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'home' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'about' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'services' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              All Services
            </button>
            <button
              onClick={() => handleNavClick('industries')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'industries' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              Industries
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'why-us' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              Why Us
            </button>
            <button
              onClick={() => handleNavClick('insights')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'insights' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              Insights
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2 px-3 rounded text-sm ${currentPage === 'contact' ? 'bg-slate-800 text-blue-400 font-semibold' : 'text-slate-200'}`}
            >
              Contact Us
            </button>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase font-semibold tracking-wider text-slate-400 px-3 py-1">
              Direct Service Pages
            </p>
            <button
              onClick={() => handleNavClick('financial-services')}
              className="w-full text-left py-1.5 px-3 rounded text-xs text-slate-300 hover:bg-slate-800"
            >
              • Global Financial Services
            </button>
            <button
              onClick={() => handleNavClick('medical-billing')}
              className="w-full text-left py-1.5 px-3 rounded text-xs text-slate-300 hover:bg-slate-800"
            >
              • Medical Billing &amp; RCM (USA/Canada)
            </button>
            <button
              onClick={() => handleNavClick('usa-tax')}
              className="w-full text-left py-1.5 px-3 rounded text-xs text-slate-300 hover:bg-slate-800"
            >
              • USA Tax Support
            </button>
            <button
              onClick={() => handleNavClick('consulting')}
              className="w-full text-left py-1.5 px-3 rounded text-xs text-slate-300 hover:bg-slate-800"
            >
              • Business Consulting
            </button>
            <button
              onClick={() => handleNavClick('marketing')}
              className="w-full text-left py-1.5 px-3 rounded text-xs text-slate-300 hover:bg-slate-800"
            >
              • Marketing Services
            </button>
            <button
              onClick={() => handleNavClick('operational-efficiency')}
              className="w-full text-left py-1.5 px-3 rounded text-xs text-slate-300 hover:bg-slate-800"
            >
              • Operational Efficiency
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded text-center hover:bg-blue-700"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
