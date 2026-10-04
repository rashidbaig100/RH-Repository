import React from 'react';
import { PageId } from '../types';
import { coreServicesList } from '../data/servicesData';
import { 
  Megaphone, 
  Linkedin, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  BarChart2, 
  Search, 
  FileText, 
  Share2 
} from 'lucide-react';

interface MarketingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const serviceInfo = coreServicesList.find(s => s.id === 'marketing')!;

  const marketingPillars = [
    {
      title: 'B2B Client Acquisition & Lead Generation',
      desc: 'Systematic pipeline development targeting enterprise and mid-market decision-makers with personalized value propositions.',
      icon: Target
    },
    {
      title: 'LinkedIn Corporate Marketing & Thought Leadership',
      desc: 'Positioning executive founders and practice leaders as industry authorities through curated, high-credibility editorial content.',
      icon: Linkedin
    },
    {
      title: 'High-Intent Content Strategy',
      desc: 'Formulating whitepapers, case studies, and analytical articles that educate prospective corporate clients and nurture sales cycles.',
      icon: FileText
    },
    {
      title: 'Commercial Brand Identity & Messaging',
      desc: 'Establishing sophisticated visual identity and copy that distinguishes your firm from low-cost gig providers.',
      icon: Megaphone
    },
    {
      title: 'Digital Channel Optimization',
      desc: 'Optimized search and targeted B2B visibility ensuring your services are discoverable when buyers search for specialized solutions.',
      icon: Search
    },
    {
      title: 'Marketing Analytics & ROI Telemetry',
      desc: 'Transparent reporting tying marketing spend directly to qualified sales opportunities, CAC benchmarks, and closed pipeline.',
      icon: BarChart2
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <Megaphone className="w-4 h-4" />
              <span>B2B Commercial Growth &amp; Acquisition</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Lead Generation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Marketing Services for Professional B2B Enterprises
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Business-focused marketing solutions designed to build executive brand authority, cultivate high-intent corporate inquiries, and establish predictable client acquisition pipelines.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Marketing')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                <span>Request Marketing Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
              >
                Inquire on B2B Lead Gen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Strategic Marketing Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Targeted Disciplines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Commercial Positioning &amp; Pipeline Architecture
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Engineered exclusively for B2B service firms, healthcare institutions, and expanding enterprises where credibility dictates purchasing decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingPillars.map((item, idx) => {
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
                  <span className="text-slate-400 font-mono">Channel 0{idx + 1}</span>
                  <span className="text-blue-700 font-semibold">High-Intent Focus</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complete Scope of 9 Marketing Services */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
              Scope of Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              9 B2B Marketing Services
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Measurable commercial initiatives focused on revenue outcomes rather than vanity impressions.
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
              Build a Predictable B2B Client Pipeline
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a strategy discussion to define your Ideal Client Profile (ICP) and outline a disciplined corporate acquisition campaign.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Marketing')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Request Marketing Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
