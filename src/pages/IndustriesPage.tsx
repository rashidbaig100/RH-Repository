import React, { useState } from 'react';
import { PageId } from '../types';
import { industriesList } from '../data/industriesData';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Stethoscope, 
  Briefcase, 
  UtensilsCrossed, 
  Building, 
  HardHat, 
  GraduationCap, 
  ShoppingBag, 
  Store, 
  Rocket 
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

const iconMap: Record<string, any> = {
  'healthcare': Stethoscope,
  'professional-services': Briefcase,
  'restaurants-hospitality': UtensilsCrossed,
  'real-estate': Building,
  'construction': HardHat,
  'education': GraduationCap,
  'ecommerce': ShoppingBag,
  'small-medium-businesses': Store,
  'startups': Rocket
};

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('healthcare');
  const activeIndustry = industriesList.find(i => i.id === selectedIndustryId) || industriesList[0];
  const ActiveIcon = iconMap[activeIndustry.id] || Building2;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <span>Industry Vertical Solutions</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RH Business Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Specialized Expertise for Targeted Sectors
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every industry carries distinct accounting nuances, regulatory standards, and operational workflows. We deploy specialized teams who understand your sector's economics.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Industry Selector & Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Pill / Tab Selector */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200">
          {industriesList.map((ind) => {
            const Icon = iconMap[ind.id] || Building2;
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-300' : 'text-slate-500'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Showcase */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                <ActiveIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                  INDUSTRY VERTICAL SOLUTION
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {activeIndustry.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {activeIndustry.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation(`Industry: ${activeIndustry.name}`)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors self-start md:self-auto whitespace-nowrap"
            >
              Inquire on This Sector
            </button>
          </div>

          {/* 3 Pillars for Selected Industry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Industry Challenges */}
            <div className="bg-red-50/40 rounded-xl p-5 border border-red-200/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-900 border-b border-red-200/60 pb-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Common Operational Pain Points</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {activeIndustry.challenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. RH Business Solutions Mechanism */}
            <div className="bg-blue-50/40 rounded-xl p-5 border border-blue-200/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-blue-200/60 pb-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Tailored Outsourced Solutions</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {activeIndustry.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold shrink-0">✓</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Business Benefits */}
            <div className="bg-emerald-50/40 rounded-xl p-5 border border-emerald-200/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 border-b border-emerald-200/60 pb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Quantifiable Strategic Outcomes</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {activeIndustry.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">★</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Complete Catalog Grid for All 9 Industries */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              All 9 Served Industry Verticals
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select any industry below to inspect targeted capabilities or initiate a conversation with an industry-specialized practice lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industriesList.map((ind) => {
              const Icon = iconMap[ind.id] || Building2;
              return (
                <div
                  key={ind.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-3">
                      <Icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {ind.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedIndustryId(ind.id);
                        window.scrollTo({ top: 350, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900"
                    >
                      Inspect Details ↑
                    </button>
                    <button
                      onClick={() => onOpenConsultation(`Industry: ${ind.name}`)}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Do You Operate in a Niche or Multi-Entity Sector?
            </h3>
            <p className="text-sm text-slate-300">
              Our practice directors configure tailored workflows for complex multi-entity holdings, hybrid clinic networks, and cross-border ventures.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Specialized Industry Solution')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Discuss Industry Specifications
          </button>
        </div>
      </section>

    </div>
  );
};
