import { IndustryItem } from '../types';

export const industriesList: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Practices',
    tagline: 'Specialized Revenue Cycle Management, Eligibility Verification & Clinical Cash Flow',
    challenges: [
      'Complex payer denial logic and ever-tightening timely filing windows',
      'Burden on clinic staff answering payer queries instead of assisting patients',
      'Lagging A/R exceeding 90+ days eating away at physician practice operating capital'
    ],
    solutions: [
      'Dedicated medical billing specialists handling 270/271 real-time eligibility checks',
      'Thorough claim scrubbing achieving high first-pass clean claim submission rates',
      'Proactive A/R follow-up and CARC/RARC denial remediation pipelines'
    ],
    benefits: [
      'Consistent, predictable reimbursement schedules from commercial and government payers',
      'Substantial reduction in clinical front-office administrative stress',
      'Actionable reporting on procedure profitability and payer contract yields'
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Time-Tracking Integration, Project Accounting, Retainer Billing & Profitability',
    challenges: [
      'Unbilled WIP (work-in-progress) and delayed invoice generation',
      'Difficulty understanding true client and matter profitability after partner hours',
      'Disjointed accounts receivable collection cycles impacting partner distributions'
    ],
    solutions: [
      'Structured work-in-progress audits and accelerated monthly retainer billing',
      'Project-level gross margin analysis and consultant utilization reporting',
      'Automated Accounts Receivable reminders and payment portal integrations'
    ],
    benefits: [
      'Shortened cash conversion cycle on billed professional hours',
      'Absolute clarity on high-margin practice areas vs. resource-draining clients',
      'Timely financial reporting that powers partner distributions and strategic growth'
    ]
  },
  {
    id: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    tagline: 'Daily Sales Reconciliations, Prime Cost Control & Multi-Unit Financial Visibility',
    challenges: [
      'High volume of daily POS card batches, third-party delivery splits (DoorDash, UberEats), and cash tips',
      'Volatile food and beverage costs eroding operating margins week to week',
      'Multi-location visibility challenges for ownership groups'
    ],
    solutions: [
      'Daily POS and merchant payment gateway reconciliations to the penny',
      'Prime cost tracking (COGS + Labor) against weekly revenue benchmarks',
      'Consolidated multi-unit P&L reporting with store-by-store comparative analytics'
    ],
    benefits: [
      'Zero unidentified merchant fee leakage or uncollected delivery platform receivables',
      'Early identification of food waste, inventory slippage, and overtime spikes',
      'Turnkey financial management ready for unit expansion and investor reporting'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property Management',
    tagline: 'CAM Reconciliations, Rent Roll Accounting, Escrow Tracking & Investor Statements',
    challenges: [
      'Tracking separate security deposits, escrows, and tenant ledgers across portfolios',
      'Year-end common area maintenance (CAM) reconciliations creating tenant disputes',
      'Complex entity structures (individual LLCs per property) complicating roll-ups'
    ],
    solutions: [
      'Strict trust and operating account segregations in compliance with real estate guidelines',
      'Automated tenant rent collection workflows and late fee tracking',
      'Property-level cash flow statements and standardized investor distribution schedules'
    ],
    benefits: [
      'Clean multi-entity general ledgers ready for tax workpaper handoffs',
      'Defensible, documented CAM reconciliation schedules eliminating tenant friction',
      'Immediate visibility into net operating income (NOI) across individual assets'
    ]
  },
  {
    id: 'construction',
    name: 'Construction & Contracting',
    tagline: 'Job Costing, Percentage of Completion (PoC), AIA Billing & Vendor Lien Compliance',
    challenges: [
      'Cash flow vulnerability due to delayed retainage and slow general contractor pay applications',
      'Cost overruns hidden until project completion due to sluggish expense tracking',
      'Complex subcontractor lien waiver management and payroll compliance'
    ],
    solutions: [
      'Rigorous job costing tracking actual vs. estimated labor, materials, and equipment',
      'Structured progress billing and AIA G702/G703 payment application preparation',
      'WIP schedule maintenance and subcontractor 1099/lien compliance tracking'
    ],
    benefits: [
      'Timely billings that keep trade financing and working capital intact',
      'Early warning triggers on budget variance before cost overruns become fatal',
      'Audit-ready bonding and banking packages that expand your bonding capacity'
    ]
  },
  {
    id: 'education',
    name: 'Education & Institutional Training',
    tagline: 'Tuition Accounting, Grant Tracking, Departmental Budgeting & Operational Controls',
    challenges: [
      'Deferred revenue tracking for multi-term tuition and course enrollments',
      'Strict compliance and reporting requirements for grants and designated endowments',
      'Fragmented operational procurement across academic departments'
    ],
    solutions: [
      'Systematic deferred revenue schedules recognizing revenue according to academic calendars',
      'Restricted fund and grant accounting with detailed audit trails',
      'Departmental budget allocation controls and procurement workflow automation'
    ],
    benefits: [
      'Compliant financial statements ready for board trustees and accrediting bodies',
      'Predictable tuition cash flow with automated payment plan follow-ups',
      'Clear fiscal stewardship that safeguards institutional reputation and longevity'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Digital Commerce',
    tagline: 'Multi-Channel Sales Reconciliation, Sales Tax Nexus & Inventory COGS Tracking',
    challenges: [
      'Complex settlements from Shopify, Amazon, Stripe, and PayPal with embedded fees and refunds',
      'Multi-state sales tax economic nexus obligations triggering audit risks',
      'Inaccurate landing cost tracking skewing reported gross margins on physical goods'
    ],
    solutions: [
      'Automated channel payout matching and accurate gross-to-net sales recognition',
      'Multi-state sales tax tracking and organized workpapers for compliance filings',
      'Perpetual inventory costing accounting for freight, customs, and warehousing'
    ],
    benefits: [
      'True visibility into real unit economics after advertising, return rates, and platform fees',
      'Mitigated sales tax exposure across jurisdictions where nexus has been established',
      'Accurate cash flow forecasts enabling confident seasonal inventory purchasing'
    ]
  },
  {
    id: 'small-medium-businesses',
    name: 'Small & Medium-Sized Businesses',
    tagline: 'Turnkey Outsourced Finance Department, Cash Control & Operational Governance',
    challenges: [
      'Business owners consumed by evening bookkeeping and payroll firefighting',
      'Lack of seasoned financial guidance to navigate expansion and cash crunches',
      'Informal operational workflows causing customer onboarding errors'
    ],
    solutions: [
      'Comprehensive outsourced bookkeeping, vendor AP, and billing management',
      'Monthly financial statements paired with an executive review meeting',
      'Documented Standard Operating Procedures (SOPs) for repeatable front-office tasks'
    ],
    benefits: [
      'Reclaims 20+ hours per month for business owners to focus on customer acquisition',
      'C-suite financial discipline without the six-figure salary of an in-house controller',
      'Smooth, professional client experience that elevates company reputation'
    ]
  },
  {
    id: 'startups',
    name: 'Startups & Scaleups',
    tagline: 'Investor-Ready Financial Models, 13-Week Cash Burn & Financial Infrastructure',
    challenges: [
      'Managing tight runway and fluctuating monthly burn rates',
      'Building defensible financial models that stand up to venture or angel scrutiny',
      'Rapidly outgrowing basic spreadsheets while lacking time to implement an ERP'
    ],
    solutions: [
      '13-week rolling cash burn models and scenario runway calculators',
      'GAAP-compliant revenue recognition (SaaS ARR/MRR metrics and churn analysis)',
      'Clean data room preparation and investor reporting slide decks'
    ],
    benefits: [
      'Unflinching visibility into zero-cash dates, enabling timely fundraising decisions',
      'High investor confidence during due diligence processes',
      'Agile financial foundation ready to absorb rapid team and customer expansion'
    ]
  }
];
