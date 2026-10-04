import React, { useState } from 'react';
import { PageId } from '../types';
import { coreServicesList } from '../data/servicesData';
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, Layers } from 'lucide-react';

interface ServicesOverviewPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? coreServicesList
    : coreServicesList.filter(s => s.id === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase mb-3">
              <span>Service Portfolio</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RH Business Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Comprehensive B2B Consulting &amp; Outsourcing Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We provide six specialized service disciplines tailored for business leaders, healthcare providers, and international organizations seeking institutional execution and predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Filter Service Discipline:
          </div>
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 6 Pillars
            </button>
            {coreServicesList.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveCategory(s.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeCategory === s.id
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s.title.replace('Services', '').replace('USA & Canada ', '').trim()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exhaustive Service Pillars Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
          >
            {/* Top Bar on Card */}
            <div className="bg-slate-900 text-white px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  PILLAR 0{index + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                  {service.tagline}
                </p>
              </div>
              <div className="flex items-center gap-3 self-start md:self-auto">
                <button
                  onClick={() => onNavigate(service.pageId)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5"
                >
                  <span>Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Overview Paragraph */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
                  Service Discipline Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
                  {service.overview}
                </p>
              </div>

              {/* 3 Grid Columns: Services Included, Who It Is For, Business Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-slate-100">
                
                {/* 1. Services Included */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>Scope &amp; Deliverables</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.servicesIncluded.slice(0, 6).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.servicesIncluded.length > 6 && (
                      <li className="text-[11px] text-blue-700 font-semibold pt-1">
                        + {service.servicesIncluded.length - 6} more specialized deliverables included
                      </li>
                    )}
                  </ul>
                </div>

                {/* 2. Who It Is For */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-2">
                    <ShieldCheck className="w-4 h-4 text-slate-600" />
                    <span>Who It Is Designed For</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.whoItIsFor.map((target, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Business Benefits */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-slate-200 pb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Business Benefits</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.businessBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Custom Service Level Agreements (SLAs) and dedicated management available for this discipline.
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onNavigate(service.pageId)}
                    className="text-xs font-bold text-slate-700 hover:text-slate-950 px-3 py-2"
                  >
                    View Detailed Specification &amp; Workflow →
                  </button>
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-md shadow-xs transition-colors"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Global Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-2xl border border-slate-800 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Need a Multi-Discipline Outsourcing Package?
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Many enterprise clients combine Global Financial Services with Operational SOP development or Medical Billing with executive management dashboards. We build custom integrated scopes tailored to your team.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Comprehensive Multi-Discipline Package')}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Discuss a Customized Solution
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
