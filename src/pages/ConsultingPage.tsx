import React from 'react';
import { PageId } from '../types';
import { coreServicesList } from '../data/servicesData';
import { 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  PieChart, 
  FileCheck, 
  Layers, 
  Compass,
  LineChart
} from 'lucide-react';

interface ConsultingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const ConsultingPage: React.FC<ConsultingPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const serviceInfo = coreServicesList.find(s => s.id === 'consulting')!;

  const consultingHighlights = [
    {
      title: 'Financial & Margin Analysis',
      desc: 'Deep audit of revenue streams to isolate true gross margins by product line, client tier, or business division.',
      icon: PieChart
    },
    {
      title: 'Overhead & Cost Rationalization',
      desc: 'Rigorous examination of vendor contracts, operational spending, and duplicate software licenses to eliminate waste.',
      icon: TrendingUp
    },
    {
      title: 'Strategic Budgeting & Rolling Forecasts',
      desc: 'Developing dynamic multi-scenario financial forecasts that respond dynamically to market changes and revenue shifts.',
      icon: LineChart
    },
    {
      title: 'Internal Financial Controls',
      desc: 'Formulating segregation of duties, spending approval thresholds, and payment disbursement authorization policies.',
      icon: ShieldCheck
    },
    {
      title: 'Executive Management Dashboards',
      desc: 'Configuring custom visual performance telemetry to track working capital, gross margins, and burn rates.',
      icon: BarChart3
    },
    {
      title: 'Long-Term Strategic Planning',
      desc: 'Developing data-backed business models for expansion, financing, M&A diligence, and capital allocation.',
      icon: Compass
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
                <Compass className="w-4 h-4" />
                <span>Executive Business Advisory</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Performance Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Business Consulting &amp; Strategic Financial Advisory
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Transform complex financial figures into actionable executive strategy. We help founders and executive teams increase profitability, optimize cost structures, and establish robust internal controls.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Business Consulting')}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center gap-2"
                >
                  <span>Request Consulting Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
                >
                  Schedule Margin Audit
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="/src/assets/images/business_consulting_ops_1791154139711.jpg"
                  alt="Senior business consultants developing strategic financial models"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Advisory Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Driving Profitability &amp; Operational Governance
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Practical consulting grounded in quantitative financial data rather than vague theoretical frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingHighlights.map((item, idx) => {
            const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Pillar 0{idx + 1}</span>
                  <span className="text-blue-700 font-semibold">Measurable Impact</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Scope of Consulting Deliverables */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
              Complete Engagement Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              12 Business Consulting Deliverables
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Targeted consulting engagements designed for high-growth and restructuring businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceInfo.servicesIncluded.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="font-semibold">{item}</span>
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
              Upgrade Your Financial Architecture
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a preliminary performance review to examine profitability leaks and construct a scalable operational roadmap.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Business Consulting')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Request Consulting Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
