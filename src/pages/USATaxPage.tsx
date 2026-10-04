import React from 'react';
import { PageId } from '../types';
import { coreServicesList } from '../data/servicesData';
import { 
  FileSpreadsheet, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  UserCheck, 
  Coins, 
  FolderLock, 
  CalendarClock, 
  Search,
  Scale
} from 'lucide-react';

interface USATaxPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const USATaxPage: React.FC<USATaxPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const serviceInfo = coreServicesList.find(s => s.id === 'usa-tax')!;

  const taxPillars = [
    {
      title: 'Individual Tax Support',
      desc: 'Systematic compilation of personal tax workpapers, 1040 schedule organization, W-2/1099 verification, and structured summaries ready for licensed tax professional review.',
      icon: UserCheck
    },
    {
      title: 'Business Tax Support',
      desc: 'Preparation of organized corporate workpapers for C-Corporations, S-Corporations, Partnerships, and multi-member LLCs, including book-to-tax income adjustments.',
      icon: Building2
    },
    {
      title: 'Sales & Use Tax Support',
      desc: 'Multi-state economic nexus tracking, marketplace facilitator reconciliation, and sales tax filing preparation across jurisdictions with active nexus.',
      icon: Coins
    },
    {
      title: 'Tax Documentation & Workpaper Organization',
      desc: 'Digitization and indexing of source receipts, depreciable fixed asset records, loan amortizations, and equity contribution documentation in an audit-ready binder.',
      icon: FolderLock
    },
    {
      title: 'Tax Compliance Support & Calendaring',
      desc: 'Tracking statutory federal, state, and local filing milestones, annual entity franchise reports, and estimated quarterly tax voucher preparation.',
      icon: CalendarClock
    },
    {
      title: 'Financial Data & Year-End Preparation',
      desc: 'Cleansing year-end trial balances, reconciling shareholder distributions, and formatting financial datasets for rapid, cost-effective CPA handoff.',
      icon: FileSpreadsheet
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <Scale className="w-4 h-4" />
              <span>USA Federal &amp; State Compliance Practice</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Workpaper &amp; Data Support</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              USA Tax Preparation Support &amp; Compliance Services
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Meticulous tax workpaper organization, multi-state sales tax tracking, business compliance support, and financial data preparation for domestic enterprises and foreign-owned US businesses.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('USA Tax Services')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                <span>Request Tax Support Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
              >
                Inquire on Multi-State Compliance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Regulatory Transparency Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 border-l-4 border-blue-900 p-5 rounded-r-xl text-slate-800 text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900 uppercase tracking-wide text-xs">
            <ShieldAlert className="w-4 h-4 text-blue-900" />
            <span>Scope of Services &amp; Regulatory Practice Notice</span>
          </div>
          <p>
            RH Business Solutions provides professional tax preparation support, documentation organization, tax compliance support, and financial data structuring. RH Business Solutions is not a Certified Public Accounting (CPA) firm, an enrolled agent firm, or a licensed law office, and does not provide formal legal representation or statutory public audit opinions. Our tax services focus on organizing client workpapers, assembling schedules, and coordinating with your designated licensed CPA, Enrolled Agent, or corporate tax counsel.
          </p>
        </div>
      </section>

      {/* 6 Structured Tax Support Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Structured Support Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Six Pillars of USA Tax Support
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Engineered to streamline corporate filings, reduce external CPA billing hours, and eliminate filing deadline surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taxPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Discipline 0{idx + 1}</span>
                  <span className="text-blue-700 font-semibold">Audit-Ready Workpapers</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full 10 Tax Support Services Included */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
              Deliverable Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              10 Dedicated Tax Support Deliverables
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Thorough data preparation and schedule structuring for businesses and individual owners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceInfo.servicesIncluded.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-800"
              >
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">{item}</span>
                  <span className="text-slate-500 text-[11px]">Strict documentation standards &amp; reconciled workpaper sets.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Get Your Tax Records Organized &amp; Audit-Ready
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a consultation to discuss your multi-state compliance needs, sales tax exposure, or year-end financial data cleansing.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('USA Tax Services')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Request Tax Support Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
