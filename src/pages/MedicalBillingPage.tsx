import React from 'react';
import { PageId } from '../types';
import { medicalBillingWorkflow, coreServicesList } from '../data/servicesData';
import { WorkflowVisualizer } from '../components/WorkflowVisualizer';
import { 
  Stethoscope, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  FileText, 
  AlertTriangle, 
  Clock, 
  BarChart2, 
  FileCheck2,
  Lock
} from 'lucide-react';

interface MedicalBillingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const MedicalBillingPage: React.FC<MedicalBillingPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const serviceInfo = coreServicesList.find(s => s.id === 'medical-billing')!;

  const corePillars = [
    {
      title: 'Eligibility & Benefits Verification',
      desc: 'Real-time 270/271 electronic transactions confirming active coverage, primary/secondary order, deductibles, copayments, and prior authorization needs before patient appointments.',
      icon: FileCheck2
    },
    {
      title: 'Claims Preparation & Scrubbing',
      desc: 'Rigorous multi-layer claim validation verifying patient demographics, provider NPI, CPT/HCPCS codes, ICD-10 medical necessity, and NCCI edits for clean first-pass submission.',
      icon: FileText
    },
    {
      title: 'Denial Management & Remediation',
      desc: 'Root-cause analysis of CARC/RARC codes. Immediate clinical appeal packet generation with provider chart notes, payer portal escalation, and front-desk feedback loops.',
      icon: AlertTriangle
    },
    {
      title: 'Accounts Receivable (A/R) Follow-Up',
      desc: 'Disciplined aging bucket oversight (30, 60, 90, 120+ days). Dedicated team contacting payer representatives to resolve stalled, pending, or underpaid claims.',
      icon: Clock
    },
    {
      title: 'ERA / EOB Processing & Payment Posting',
      desc: 'Electronic Remittance Advice (835) ingestion, contract allowance write-off verification, co-insurance calculation, secondary claim triggering, and patient balance posting.',
      icon: Activity
    },
    {
      title: 'Executive Healthcare Analytics & KPIs',
      desc: 'Monthly practice health briefings monitoring net collection rate, days in A/R, denial velocity by provider, and payer-by-payer contract yields.',
      icon: BarChart2
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
                <Stethoscope className="w-4 h-4" />
                <span>USA &amp; Canada Healthcare Specialization</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>HIPAA Compliant</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Healthcare Medical Billing &amp; Revenue Cycle Management
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                A specialized revenue cycle partner for physician practices, outpatient clinics, and healthcare organizations in the United States and Canada. Accelerate clinical cash collections and reduce days in A/R.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Medical Billing / RCM')}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center gap-2"
                >
                  <span>Request a Medical Billing Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
                >
                  Request Practice Audit
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>HIPAA (USA) &amp; PIPEDA (Canada) Protocols</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <span>Strict Business Associate Agreement (BAA)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="/src/assets/images/medical_billing_rcm_1791154116510.jpg"
                  alt="Professional healthcare billing specialist reviewing digital patient claims"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10-Step Interactive Healthcare Claims Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkflowVisualizer
          title="The 10-Step Healthcare Revenue Cycle Workflow"
          subtitle="A disciplined, payer-compliant pipeline engineered to maximize first-pass acceptance and eliminate aged receivables."
          steps={medicalBillingWorkflow}
        />
      </section>

      {/* Core Revenue Cycle Management Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Practice Disciplines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Healthcare Revenue Cycle Solutions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Dedicated support across every phase of payer and patient interaction, designed for clinics, medical practices, and healthcare organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
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
                  <span className="text-slate-400 font-mono">Pillar 0{idx + 1}</span>
                  <span className="text-blue-700 font-semibold">Specialized Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complete Scope of 15 Healthcare Services */}
      <section className="bg-slate-100 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
              Scope of Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              15 Specialized Medical Billing Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Designed specifically for healthcare practices and clinics seeking reliable, high-yield revenue operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {serviceInfo.servicesIncluded.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Clinical Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-6 text-xs text-amber-900 leading-relaxed space-y-2">
          <div className="font-bold flex items-center gap-2 text-sm text-amber-950">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Healthcare Regulatory &amp; Professional Practice Disclaimer</span>
          </div>
          <p>
            Actual medical billing, claims preparation, and coding support services are performed in accordance with applicable federal, state, and provincial laws, payer requirements, executed Business Associate Agreements (BAA), and the professional qualifications of clinical providers. RH Business Solutions operates as an outsourced administrative business associate; diagnostic determinations, treatment protocols, and clinical medical necessity remain the ultimate legal responsibility of the attending licensed healthcare providers.
          </p>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Accelerate Practice Cash Flow &amp; Slash Days in A/R
            </h3>
            <p className="text-sm text-slate-300">
              Schedule a comprehensive consultation with our healthcare revenue cycle leadership to evaluate your current clean claim rate and aging receivables.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Medical Billing / RCM')}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors whitespace-nowrap"
          >
            Request a Medical Billing Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
