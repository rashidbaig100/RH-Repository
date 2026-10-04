import React, { useState } from 'react';
import { Globe2, CheckCircle2, ShieldCheck, Clock, Building2, MapPin } from 'lucide-react';

interface RegionData {
  id: string;
  name: string;
  tagline: string;
  compliance: string;
  currencies: string;
  turnaround: string;
  servicesSummary: string;
  highlights: string[];
}

const REGIONS: RegionData[] = [
  {
    id: 'usa',
    name: 'United States',
    tagline: 'Healthcare RCM, Multi-State Tax Support & Corporate Accounting',
    compliance: 'HIPAA, CMS Guidelines, GAAP, IRS & Multi-State Nexus Standards',
    currencies: 'USD ($)',
    turnaround: 'US Business Hours (EST, CST, MST, PST coverage)',
    servicesSummary: 'Primary market for end-to-end medical billing, 270/271 eligibility verification, denial appeals, bookkeeping, and state tax support.',
    highlights: [
      'Dedicated Medicare, Medicaid & Commercial Payer Claim Scrubbing',
      'QuickBooks Online & NetSuite GAAP-compliant reconciliation',
      '1099, W-2 workpaper organization & multi-state sales tax reporting'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    tagline: 'Provincial Healthcare Billing, GST/HST Reconciliation & Financials',
    compliance: 'PIPEDA, ASPE / IFRS, CRA Compliance Workpapers',
    currencies: 'CAD ($)',
    turnaround: 'Eastern, Central, Mountain & Pacific coverage',
    servicesSummary: 'Healthcare administrative billing support, provincial health claims, Canadian corporate bookkeeping, and GST/HST workpaper management.',
    highlights: [
      'Provincial health insurance plan workflow adherence',
      'Dual currency (USD/CAD) intercompany reconciliations',
      'Month-end close and management P&L reporting'
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    tagline: 'Outsourced Management Accounts, VAT Workpapers & Operational FP&A',
    compliance: 'UK GAAP (FRS 102), HMRC Compliance Prep, UK GDPR',
    currencies: 'GBP (£)',
    turnaround: 'GMT / BST aligned service delivery',
    servicesSummary: 'Bookkeeping, management accounts, rolling cash forecasts, VAT reconciliation workpapers, and business process automation.',
    highlights: [
      'Xero and QuickBooks UK ledger management',
      'Rolling 13-week cash flow and working capital forecasting',
      'Institutional SOP drafting for service firms'
    ]
  },
  {
    id: 'gcc',
    name: 'Middle East / GCC',
    tagline: 'UAE, Saudi Arabia, Qatar & Regional Corporate Outsourcing',
    compliance: 'FTA UAE VAT, ZATCA (Saudi Arabia) Invoicing Standards, IFRS',
    currencies: 'AED, SAR, QAR, USD',
    turnaround: 'Gulf Standard Time (GST / AST) business alignment',
    servicesSummary: 'Corporate bookkeeping, multi-currency accounting, regional VAT workpaper compilation, and executive management dashboards.',
    highlights: [
      'Cross-border regional holding company consolidations',
      'ZATCA and FTA compliant recordkeeping and voucher archiving',
      'Power BI executive performance scorecards'
    ]
  },
  {
    id: 'international',
    name: 'International & Cross-Border',
    tagline: 'Distributed Teams, Global SaaS, E-Commerce & Global Operations',
    compliance: 'Cross-Border Transfer Pricing Workpapers, IFRS Standards',
    currencies: 'Multi-Currency (USD, EUR, AUD, SGD, etc.)',
    turnaround: '24-hour asynchronous and synchronous hybrid delivery',
    servicesSummary: 'Comprehensive outsourced back-office for international ventures selling across multiple jurisdictions.',
    highlights: [
      'Multi-currency general ledger reconciliations to base currency',
      'Multi-channel e-commerce payout tracking (Stripe, Amazon, Shopify)',
      'Cross-border operational efficiency and workflow automation'
    ]
  }
];

export const GlobalReachSection: React.FC = () => {
  const [activeRegionId, setActiveRegionId] = useState<string>('usa');
  const activeRegion = REGIONS.find(r => r.id === activeRegionId) || REGIONS[0];

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
      {/* Subtle background world grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            <Globe2 className="w-4 h-4" />
            <span>Cross-Border Service Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Supporting Businesses Across Borders
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            With professional outsourced solutions engineered to meet the regulatory, temporal, and linguistic requirements of key international markets.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegionId(region.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeRegionId === region.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/50'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Selected Region Showcase */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Overview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <MapPin className="w-4 h-4" />
                <span>Primary Market Focus: {activeRegion.name}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeRegion.tagline}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeRegion.servicesSummary}
              </p>

              <div className="pt-2 space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Key Capabilities in this Market:
                </div>
                {activeRegion.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Meta Specifications */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-lg p-5 space-y-4 text-xs">
              <div className="text-xs uppercase font-bold tracking-wider text-blue-400 border-b border-slate-800 pb-2">
                Operational Framework
              </div>

              <div>
                <span className="text-slate-400 block mb-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  Regulatory &amp; Accounting Standards:
                </span>
                <span className="font-semibold text-slate-200">{activeRegion.compliance}</span>
              </div>

              <div>
                <span className="text-slate-400 block mb-0.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  Transaction Currencies Managed:
                </span>
                <span className="font-semibold text-slate-200">{activeRegion.currencies}</span>
              </div>

              <div>
                <span className="text-slate-400 block mb-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  Time Zone Coverage:
                </span>
                <span className="font-semibold text-slate-200">{activeRegion.turnaround}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Global Markets Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Cross-Border Service Delivery Network Active</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] text-slate-400">
            <span>USA (EST/PST)</span>
            <span aria-hidden="true">·</span>
            <span>CANADA</span>
            <span aria-hidden="true">·</span>
            <span>UK (GMT)</span>
            <span aria-hidden="true">·</span>
            <span>GCC (GST)</span>
            <span aria-hidden="true">·</span>
            <span>INTERNATIONAL</span>
          </div>
        </div>

      </div>
    </div>
  );
};
