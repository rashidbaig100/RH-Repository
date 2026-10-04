import React from 'react';
import { PageId } from '../types';
import { financialServicesWorkflow, coreServicesList } from '../data/servicesData';
import { WorkflowVisualizer } from '../components/WorkflowVisualizer';
import { CheckCircle2, ArrowRight, ShieldCheck, Database, BarChart4, FileSpreadsheet, Lock } from 'lucide-react';

interface FinancialServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const FinancialServicesPage: React.FC<FinancialServicesPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const serviceInfo = coreServicesList.find(s => s.id === 'financial-services')!;

  const techPlatforms = [
    { name: 'QuickBooks Online / Desktop', desc: 'Full chart of accounts hierarchy, bank rules, class tracking & clean ledger closes.' },
    { name: 'Microsoft Power BI', desc: 'Executive visual dashboards with real-time liquidity, cash burn, and margin trends.' },
    { name: 'Oracle NetSuite / SAP', desc: 'Mid-market ERP transaction processing, multi-currency ledger matching & consolidations.' },
    { name: 'Advanced Excel / Financial Modeling', desc: '13-week rolling cash forecasts, dynamic scenario models, and CapEx evaluations.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
                <span>Core Service Pillar 01</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Global Practice</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Global Financial Services &amp; Accounting Outsourcing
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Precision bookkeeping, accounts payable, accounts receivable, month-end closing, rolling cash flow management, and Power BI dashboards for growing domestic and cross-border enterprises.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Global Financial Services')}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors"
                >
                  Get Your Finance Function Under Control
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
                >
                  Request Rate &amp; Scope Brief
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="/src/assets/images/financial_services_fpa_1791154128150.jpg"
                  alt="Corporate FP&A and financial analytics reporting console"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10-Step Interactive Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkflowVisualizer
          title="The 10-Step End-to-End Financial Workflow"
          subtitle="From daily transaction ingestion through disciplined general ledger reconciliations to C-suite Power BI intelligence."
          steps={financialServicesWorkflow}
        />
      </section>

      {/* Complete Scope of 16 Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Complete Service Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            16 Dedicated Financial Capabilities
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A full-service outsourced accounting and finance department available at a predictable, transparent monthly structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceInfo.servicesIncluded.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-xs transition-all flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {item}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Managed by certified accounting specialists with supervisory QA.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology & Software Integrations */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
              Systems &amp; Analytics Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Tools We Support &amp; Deploy
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We integrate seamlessly with your existing accounting tech stack without forcing costly migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPlatforms.map((tech, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                  {idx === 0 && <FileSpreadsheet className="w-4 h-4" />}
                  {idx === 1 && <BarChart4 className="w-4 h-4" />}
                  {idx === 2 && <Database className="w-4 h-4" />}
                  {idx === 3 && <Lock className="w-4 h-4" />}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Ready to Establish Month-End Discipline?
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a confidential discovery session to review your transaction volume, chart of accounts, and management reporting requirements.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Global Financial Services')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Get Your Finance Function Under Control
          </button>
        </div>
      </section>

    </div>
  );
};
