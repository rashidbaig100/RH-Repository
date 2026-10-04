import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Target, Award, Globe2, Compass, Layers, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase mb-3">
              <span>Corporate Overview</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RH Business Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Building Enduring Value Through Financial &amp; Operational Excellence
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              RH Business Solutions is a dedicated consulting and outsourcing services company delivering financial precision, healthcare revenue cycle management, tax compliance support, and operational rigor to enterprises across North America and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section: Who We Are & Our Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase font-bold tracking-wider text-blue-600">
              Our Positioning &amp; Commitment
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              An International Extension of Your Executive Team
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Modern enterprises operate in an environment characterized by increasing regulatory scrutiny, cross-border complexity, and aggressive margin pressures. In healthcare, shrinking reimbursement windows threaten clinic viability; in commerce and professional services, manual bookkeeping and fragmented software create blind spots in executive decision-making.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              RH Business Solutions was built to solve these structural challenges. Rather than acting as a transactional freelancer platform, we position our firm as an integrated, long-term B2B partner. We combine domain-trained financial and billing specialists with modern cloud software and institutional Standard Operating Procedures (SOPs).
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-lg text-xs sm:text-sm text-slate-700 font-medium">
              "Our objective is not merely to record transactions or post claims, but to provide leaders with the clarity, efficiency, and operational stability required to scale with confidence."
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/src/assets/images/business_consulting_ops_1791154139711.jpg"
                alt="Executive business consulting and operational review session"
                className="w-full h-72 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Factual Specification Box (No invented historical numbers, pure corporate facts & placeholders) */}
            <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-3 text-xs">
              <div className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-2">
                Operational Profile &amp; Governance
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Headquarters / Primary Operating Base:</span>
                <span className="font-semibold text-slate-200 font-mono">[INSERT BUSINESS LOCATION]</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Primary Geographies Served:</span>
                <span className="font-semibold text-slate-200">USA, Canada, UK, GCC &amp; Global</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Security &amp; Data Safeguards:</span>
                <span className="font-semibold text-slate-200">HIPAA Compliant / Strict NDAs</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Practice Leadership:</span>
                <span className="font-semibold text-slate-200">[Executive Practice Directors]</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Operating Principles */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Deliver Trusted Results
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The operational disciplines that govern every client engagement across our financial, medical billing, and consulting practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Domain Specialization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We do not deploy generalist clerks to handle complex medical coding or corporate reconciliations. Our practice is partitioned into dedicated domain teams specializing in healthcare RCM, multi-state tax workpapers, and corporate accounting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Institutional Process Discipline
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every deliverable follows a formalized checklist, dual-tier quality control, and supervisory sign-off. Work is never dependent on the memory or ad-hoc style of a single individual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Confidentiality &amp; Data Security
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating with corporate clients demands enterprise data security. We protect proprietary financial models, commercial records, and patient health information (PHI) through strict technical controls and binding legal covenants.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Verified Placeholder Testimonial / Social Proof Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-dashed border-slate-300 rounded-xl p-8 bg-slate-50 text-center">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            [Client Testimonial &amp; Case Study Registry]
          </div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">
            Client Verification &amp; Case Evidence
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6">
            In compliance with our ethical advertising policy, we do not publish fabricated client reviews or synthetic metric claims. Client references, engagement case studies, and letters of attribution are provided to qualified prospective enterprise clients during discovery.
          </p>
          <div className="inline-block p-4 bg-white border border-slate-200 rounded-lg text-xs text-slate-500 italic max-w-lg">
            "[Client Testimonial — Replace with verified testimonial from authorized client representative following executed non-disclosure protocol]"
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Discover How RH Business Solutions Can Partner With Your Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Schedule a comprehensive introductory discussion to explore our service delivery models and review your unique operational requirements.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Schedule Introductory Call
          </button>
        </div>
      </section>

    </div>
  );
};
