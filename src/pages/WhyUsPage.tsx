import React from 'react';
import { PageId } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Cpu, 
  Maximize2, 
  MessageSquareText, 
  Layers, 
  FileCheck2,
  Award,
  ArrowRight
} from 'lucide-react';

interface WhyUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const pillars = [
    {
      title: 'Professionalism',
      description: 'Domain-educated finance leads, medical billers, and business analysts who understand the stakes of corporate reporting and clinical compliance.',
      icon: Award
    },
    {
      title: 'Confidentiality',
      description: 'Strict non-disclosure agreements (NDAs) and binding confidentiality covenants executed prior to document inspection across all client relationships.',
      icon: Lock
    },
    {
      title: 'Accuracy & Quality Assurance',
      description: 'Two-tier verification protocol: every bank reconciliation, medical claim batch, and tax workpaper schedule is independently peer-reviewed before sign-off.',
      icon: CheckCircle2
    },
    {
      title: 'Data Security & Infrastructure',
      description: 'Encrypted communication, zero local data caching on unauthorized endpoints, and rigorous adherence to HIPAA (USA) and PIPEDA (Canada) standards.',
      icon: ShieldCheck
    },
    {
      title: 'Process Discipline',
      description: 'Standardized workflows and checklists that guarantee repeatable, on-time month-end closes and consistent claim turnaround schedules.',
      icon: Layers
    },
    {
      title: 'Transparent Communication',
      description: 'Regular cadence of executive status briefings, transparent ticketing, and dedicated account managers who respond within defined SLA windows.',
      icon: MessageSquareText
    },
    {
      title: 'Technology-Enabled Delivery',
      description: 'Seamless integration with QuickBooks Online, NetSuite, leading EHR clearinghouses, and Power BI visual business intelligence consoles.',
      icon: Cpu
    },
    {
      title: 'Scalability Across Borders',
      description: 'Elastic capacity that scales up as your transaction volume expands, your clinic opens additional locations, or you launch new geographic entities.',
      icon: Maximize2
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <span>Trust &amp; Governance</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RH Business Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Why Businesses Choose RH Business Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We operate as a high-integrity, institutional partner delivering predictable outcomes, strict compliance, and professional service across borders.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Foundational Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            The Eight Governance Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Standard of Practice
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            How we protect your business, ensure accuracy, and build reliable operational foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
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
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono font-semibold text-blue-700">
                  PILLAR 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison: Freelancer vs In-House vs RH Business Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              The RH Business Solutions Operational Difference
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Comparing organizational models for finance, medical billing, and business operations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                  <th className="p-4 sm:px-6">Operational Criterion</th>
                  <th className="p-4 sm:px-6 text-slate-500">Low-Cost Freelancer</th>
                  <th className="p-4 sm:px-6 text-slate-500">Full In-House Hire</th>
                  <th className="p-4 sm:px-6 bg-blue-50 text-blue-900 border-l border-blue-200">RH Business Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-900">Multi-Disciplinary Redundancy</td>
                  <td className="p-4 sm:px-6 text-red-600">None (single point of failure)</td>
                  <td className="p-4 sm:px-6 text-amber-700">Limited (expensive to double-staff)</td>
                  <td className="p-4 sm:px-6 bg-blue-50/50 font-semibold text-blue-950 border-l border-blue-200">Institutional team backup</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-900">Standard Operating Procedures</td>
                  <td className="p-4 sm:px-6 text-red-600">Ad-hoc &amp; undocumented</td>
                  <td className="p-4 sm:px-6 text-amber-700">Often dependent on individual habits</td>
                  <td className="p-4 sm:px-6 bg-blue-50/50 font-semibold text-blue-950 border-l border-blue-200">Documented institutional SOPs</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-900">Quality Assurance &amp; Dual Review</td>
                  <td className="p-4 sm:px-6 text-red-600">Unsupervised self-review</td>
                  <td className="p-4 sm:px-6 text-amber-700">Requires executive manager oversight</td>
                  <td className="p-4 sm:px-6 bg-blue-50/50 font-semibold text-blue-950 border-l border-blue-200">Independent supervisory sign-off</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-900">Regulatory Security &amp; Compliance</td>
                  <td className="p-4 sm:px-6 text-red-600">Unverified personal devices</td>
                  <td className="p-4 sm:px-6 text-slate-700">Internal company IT overhead</td>
                  <td className="p-4 sm:px-6 bg-blue-50/50 font-semibold text-blue-950 border-l border-blue-200">HIPAA/PIPEDA compliant systems</td>
                </tr>
                <tr>
                  <td className="p-4 sm:px-6 font-semibold text-slate-900">Total Effective Cost Structure</td>
                  <td className="p-4 sm:px-6 text-slate-600">Low upfront / high error rework</td>
                  <td className="p-4 sm:px-6 text-slate-600">High (salary, benefits, taxes, tools)</td>
                  <td className="p-4 sm:px-6 bg-blue-50/50 font-semibold text-blue-950 border-l border-blue-200">Predictable, all-inclusive monthly retainer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verified Placeholder Testimonial / Social Proof Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-dashed border-slate-300 rounded-xl p-8 bg-slate-50 text-center space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
            [Client Testimonial &amp; Reference Policy]
          </div>
          <h4 className="text-lg font-bold text-slate-900">
            Genuine Client References &amp; Case Study Registry
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            In compliance with our strict corporate non-disclosure protocols and ethical governance standards, we do not fabricate client logos, fictitious reviews, or false statistics. Direct client references are provided to prospective clients during the formal proposal phase.
          </p>
          <div className="inline-block p-4 bg-white border border-slate-200 rounded-lg text-xs text-slate-500 italic max-w-lg">
            "[Client Testimonial — Replace with verified testimonial]"
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Experience the Value of a Dedicated B2B Partner
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a discussion with our management to review how we can tailor our service delivery to your specific operational criteria.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
