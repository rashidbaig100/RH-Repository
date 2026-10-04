import React from 'react';
import { PageId } from '../types';
import { coreServicesList } from '../data/servicesData';
import { 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  FileText, 
  Gauge, 
  ShieldCheck, 
  Settings2,
  TrendingDown
} from 'lucide-react';

interface OperationalEfficiencyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const OperationalEfficiencyPage: React.FC<OperationalEfficiencyPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const serviceInfo = coreServicesList.find(s => s.id === 'operational-efficiency')!;

  const operationalPillars = [
    {
      title: 'Institutional SOP Development',
      desc: 'Formulating comprehensive, step-by-step Standard Operating Procedures that convert undocumented tribal knowledge into repeatable company assets.',
      icon: FileText
    },
    {
      title: 'Workflow Optimization & Bottleneck Elimination',
      desc: 'Analyzing cross-departmental handoffs, removing duplicate approvals, and reducing end-to-end task turnaround times.',
      icon: Workflow
    },
    {
      title: 'Finance & Reporting Process Automation',
      desc: 'Integrating cloud accounting feeds, automated bank ingestion, recurring invoicing scripts, and scheduled dashboard distribution.',
      icon: Cpu
    },
    {
      title: 'Operational KPI & Scorecard Development',
      desc: 'Establishing clear, measurable operational targets across throughput, error rates, customer cycle times, and resource utilization.',
      icon: Gauge
    },
    {
      title: 'Cost Control & Non-Value-Added Waste Elimination',
      desc: 'Systematically targeting and eradicating redundant vendor subscriptions, process rework, and clerical overtime.',
      icon: TrendingDown
    },
    {
      title: 'Software Implementation & Systems Integration',
      desc: 'Selecting, configuring, and onboarding your team onto modern workflow management, ERP, and CRM platforms without disruption.',
      icon: Settings2
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <Workflow className="w-4 h-4" />
              <span>Process Excellence &amp; Scalability</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>SOP Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Operational Efficiency &amp; Process Optimization
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eliminate operational friction, institutionalize Standard Operating Procedures (SOPs), automate routine handoffs, and position your organization for sustainable, profitable scale.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Operational Efficiency')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center gap-2"
              >
                <span>Request Efficiency Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
              >
                Schedule Process Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Operational Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Process Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Streamlining Enterprise Workflows
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A methodical approach to auditing current operations, removing bottlenecks, and codifying best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operationalPillars.map((item, idx) => {
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
                  <span className="text-slate-400 font-mono">Discipline 0{idx + 1}</span>
                  <span className="text-blue-700 font-semibold">Institutional Quality</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complete Scope of 11 Operational Services */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
              Deliverable Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              11 Operational Efficiency Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Practical deliverables that improve employee productivity and eliminate costly human errors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceInfo.servicesIncluded.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
              Eliminate Operational Friction Across Your Enterprise
            </h3>
            <p className="text-sm text-slate-300">
              Contact our operational consulting team for a thorough workflow mapping review and discover your largest efficiency bottlenecks.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Operational Efficiency')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Request Efficiency Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
