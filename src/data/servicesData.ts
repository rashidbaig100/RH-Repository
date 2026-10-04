import { ServiceDetail, WorkflowStep } from '../types';

export const medicalBillingWorkflow: WorkflowStep[] = [
  {
    step: '01',
    title: 'Patient Registration & Demographics',
    description: 'Initial intake capture with strict validation of patient details, guarantor data, and insurance primary/secondary ordering.',
    deliverables: ['Demographic audit', 'Guarantor verification', 'EMR intake synchronization']
  },
  {
    step: '02',
    title: 'Eligibility & Benefits Verification',
    description: 'Real-time 270/271 inquiry to confirm active coverage, deductibles, copays, out-of-pocket maximums, and prior authorization needs.',
    deliverables: ['Coverage confirmation report', 'Copay/deductible schedule', 'Prior authorization flags']
  },
  {
    step: '03',
    title: 'Medical Coding & Charge Capture',
    description: 'Review of clinical encounter documentation against current ICD-10-CM, CPT, and HCPCS Level II standards with NCCI edit checking.',
    deliverables: ['Modifier precision check', 'Medical necessity alignment', 'Zero duplicate charge review']
  },
  {
    step: '04',
    title: 'Claim Preparation & Scrubbing',
    description: 'Automated and manual pre-submission claim scrubbing against clearinghouse rules, payer-specific edits, and clinical validation guidelines.',
    deliverables: ['98%+ first-pass clean rate target', 'Clearinghouse error resolution', 'CMS-1500 / UB-04 format audit']
  },
  {
    step: '05',
    title: 'Claims Submission',
    description: 'Direct electronic batch transmission via secure HIPAA-compliant 837P and 837I EDI clearinghouses to commercial and government payers.',
    deliverables: ['EDI transmission confirmations', 'Payer acceptance tracking', 'Batch receipt logging']
  },
  {
    step: '06',
    title: 'Payer Processing & Status Adjudication',
    description: 'Active monitoring of 276/277 claim status transactions to intercept pending, pended, or stalled claims before payment windows lapse.',
    deliverables: ['Under-review claim alerts', 'Payer turnaround logging', 'Lag prevention']
  },
  {
    step: '07',
    title: 'ERA / EOB Processing & Payment Posting',
    description: 'Electronic Remittance Advice (835) ingestion, contract allowance verification, write-off auditing, and secondary claim handoff.',
    deliverables: ['Line-item payment posting', 'Contractual adjustment verification', 'Secondary billing trigger']
  },
  {
    step: '08',
    title: 'Denial Management & Root-Cause Remediation',
    description: 'Immediate triage of CARC/RARC denial codes, clinical appeal letter drafting, re-submission, and underlying workflow root-cause fixing.',
    deliverables: ['Denial categorization log', 'Formal appeal package', 'Provider feedback loops']
  },
  {
    step: '09',
    title: 'Accounts Receivable (A/R) Follow-Up',
    description: 'Disciplined aging bucket management (30, 60, 90, 120+ days) with dedicated payer follow-up and timely filing monitoring.',
    deliverables: ['A/R aging recovery pipeline', 'Payer escalation logs', 'Bad debt reduction']
  },
  {
    step: '10',
    title: 'Executive Financial Reporting & RCM Analytics',
    description: 'Comprehensive monthly performance briefings highlighting net collection rate, days in A/R, denial velocity, and procedure profitability.',
    deliverables: ['Executive RCM dashboards', 'Denial trend diagnostics', 'Monthly revenue forecast']
  }
];

export const financialServicesWorkflow: WorkflowStep[] = [
  {
    step: '01',
    title: 'Transaction Ingestion & Processing',
    description: 'Secure digital capture of vendor bills, customer receipts, payroll records, and daily bank activity feeds into the accounting engine.',
    deliverables: ['Source document indexing', 'Multi-currency data feeds', 'Expense categorization']
  },
  {
    step: '02',
    title: 'Systematic Bookkeeping',
    description: 'Double-entry recording with standard chart of accounts hierarchy, vendor bill entry, and sales invoice generation.',
    deliverables: ['AP voucher validation', 'AR invoice dispatch', 'Journal voucher maintenance']
  },
  {
    step: '03',
    title: 'Bank & Credit Card Reconciliation',
    description: 'Periodic and month-end matching of statements against ledger entries to eliminate uncleared checks, stale balances, and discrepancies.',
    deliverables: ['Bank reconciliation schedules', 'Credit facility matching', 'Suspense balance clearance']
  },
  {
    step: '04',
    title: 'General Ledger Maintenance',
    description: 'Continuous oversight of asset, liability, equity, income, and expense accounts with accrual entries, prepayments, and amortization.',
    deliverables: ['Depreciation schedules', 'Prepaid expense amortization', 'Accrual journal adjustments']
  },
  {
    step: '05',
    title: 'Month-End Financial Close',
    description: 'Rigorous checklist-driven closing procedure ensuring all sub-ledgers tie out to the trial balance without variance.',
    deliverables: ['Month-end close binder', 'Trial balance sign-off', 'Intercompany reconciliations']
  },
  {
    step: '06',
    title: 'Financial Statements Preparation',
    description: 'Production of standard GAAP/IFRS balance sheets, income statements (P&L), and statements of cash flows.',
    deliverables: ['Comparative balance sheets', 'Multi-period P&L', 'Statement of cash flows']
  },
  {
    step: '07',
    title: 'Financial Planning & Analysis (FP&A)',
    description: 'Deep dive into budget vs. actual variance, operational cost structures, gross margin drivers, and rolling liquidity requirements.',
    deliverables: ['Budget variance analysis', '13-week rolling cash flow', 'Unit economic analysis']
  },
  {
    step: '08',
    title: 'Management Reporting & Advisory',
    description: 'Executive-level summary packages prepared for board members, owners, and leadership highlighting key performance signals.',
    deliverables: ['Board deck financial slides', 'Departmental spend reports', 'Profitability analysis']
  },
  {
    step: '09',
    title: 'Interactive KPI & Power BI Dashboards',
    description: 'Dynamic visual reporting consoles tracking working capital, customer acquisition cost, gross margins, and burn rate.',
    deliverables: ['Automated Power BI feeds', 'Real-time liquidity telemetry', 'Custom KPI scorecards']
  },
  {
    step: '10',
    title: 'Strategic Business Decision Support',
    description: 'Forward-looking financial modeling for capital investments, pricing revisions, geographic expansion, or cost rationalization.',
    deliverables: ['Scenario sensitivity models', 'CapEx ROI evaluations', 'Strategic growth roadmap']
  }
];

export const coreServicesList: ServiceDetail[] = [
  {
    id: 'financial-services',
    pageId: 'financial-services',
    title: 'Global Financial Services',
    tagline: 'Precision Bookkeeping, Financial Reporting, Cash Flow Management & FP&A',
    shortDescription: 'Professional outsourced accounting, bookkeeping, financial modeling, and management reporting for growing cross-border and domestic businesses.',
    overview: 'RH Business Solutions delivers end-to-end finance and accounting outsourcing built for scalability, compliance, and strategic decision-making. We provide business leaders with clean financial records, disciplined month-end closes, and actionable management intelligence without the overhead of maintaining an internal multi-tiered finance department.',
    servicesIncluded: [
      'Bookkeeping & General Ledger Management',
      'Accounts Payable (AP) & Vendor Management',
      'Accounts Receivable (AR) & Collections Tracking',
      'Bank & Credit Card Reconciliation',
      'Month-End & Year-End Closing Checklists',
      'Financial Reporting (P&L, Balance Sheet, Cash Flow)',
      'Management Reporting & Board Reporting Packages',
      'Budgeting & Rolling Forecasting',
      'Financial Planning & Analysis (FP&A)',
      '13-Week Cash Flow Management & Liquidity Models',
      'Financial Modeling & Scenario Planning',
      'Executive KPI & Management Dashboards',
      'QuickBooks Online & Desktop Accounting Support',
      'ERP System Migration & Accounting Support',
      'Power BI Financial Dashboards & Automated Analytics',
      'Finance Process & Internal Control Improvement'
    ],
    whoItIsFor: [
      'Growing small and mid-sized enterprises (SMEs)',
      'Startups requiring robust financial modeling and investor-ready reporting',
      'Multi-entity businesses operating across international borders',
      'Companies seeking to transition from informal recordkeeping to structured finance'
    ],
    businessBenefits: [
      'Total financial clarity with timely, GAAP-compliant statements',
      'Significant reduction in administrative and accounting overhead',
      'Proactive cash flow forecasting preventing working capital bottlenecks',
      'C-suite financial intelligence at a fraction of full-time executive cost'
    ],
    keyOutcomes: [
      'Standardized month-end close completed reliably each cycle',
      'Real-time access to interactive financial dashboards',
      'Audit-ready financial records and clean reconciliations',
      'Defensible data for bank financing, investors, and growth initiatives'
    ],
    imagePath: '/src/assets/images/financial_services_fpa_1791154128150.jpg'
  },
  {
    id: 'medical-billing',
    pageId: 'medical-billing',
    title: 'USA & Canada Medical Billing Services',
    tagline: 'Specialized Healthcare Revenue Cycle Management (RCM) & Claims Optimization',
    shortDescription: 'End-to-end healthcare billing, insurance eligibility, clean claim submission, aggressive denial management, and accounts receivable recovery.',
    overview: 'Healthcare providers face intense administrative complexity, evolving payer rules, and chronic denial rates. RH Business Solutions operates as a dedicated revenue cycle management partner for clinics, medical practices, and healthcare organizations across the United States and Canada. Our structured workflow accelerates cash collections, reduces days in A/R, and enables clinical staff to concentrate exclusively on patient care.',
    servicesIncluded: [
      'Patient Eligibility & Real-Time Benefits Verification',
      'Insurance Order-of-Benefits Verification',
      'Medical Claims Preparation & Scrubbing',
      'Electronic Claims Submission (CMS-1500 & UB-04)',
      'Proactive Claim Status Follow-Up',
      'Denial Management & CARC/RARC Root Cause Resolution',
      'Accounts Receivable (A/R) Follow-Up & Aging Reduction',
      'Electronic Remittance Advice (ERA) & EOB Payment Posting',
      'Medical Coding Support & Modifier Optimization',
      'Prior Authorization Tracking & Documentation Support',
      'Patient Statement Billing & Inquiry Support',
      'Insurance Aging Analysis & Stalled Claim Escalation',
      'Full-Scope Revenue Cycle Management (RCM)',
      'A/R Recovery Audits on Stale Unpaid Claims',
      'Healthcare Billing Analytics & Net Collection Reporting'
    ],
    whoItIsFor: [
      'Independent physician practices and group specialty clinics',
      'Outpatient healthcare centers and diagnostic facilities',
      'Physical therapy, chiropractic, and rehabilitation clinics',
      'Behavioral health, psychiatric, and mental health practices',
      'Dental practices and healthcare organizations in the USA & Canada'
    ],
    businessBenefits: [
      'Accelerated claim turnaround with reduced days in A/R',
      'Higher first-pass clean claim submission rates',
      'Maximized net collections through systematic denial recovery',
      'HIPAA-conscious data handling and payer-compliant workflows'
    ],
    keyOutcomes: [
      'Predictable clinical cash flow and transparent collection metrics',
      'Elimination of backlogged insurance claims and missed filing limits',
      'Clear, actionable monthly reporting on payer behavior and practice yield',
      'Relief for in-clinic front desk staff from cumbersome billing calls'
    ],
    imagePath: '/src/assets/images/medical_billing_rcm_1791154116510.jpg'
  },
  {
    id: 'usa-tax',
    pageId: 'usa-tax',
    title: 'USA Tax Services',
    tagline: 'Professional Tax Preparation Support, Multi-State Compliance & Financial Data Preparation',
    shortDescription: 'Thorough tax preparation support, multi-state compliance support, sales tax organization, and financial data structuring for businesses and individuals.',
    overview: 'Navigating United States federal and state tax requirements demands organized records, methodical compliance schedules, and rigorous data preparation. RH Business Solutions provides dependable outsourced tax preparation support and financial documentation assistance for international and domestic businesses. We organize your workpapers, reconcile book-to-tax differences, and prepare compliant schedules for seamless filings.',
    servicesIncluded: [
      'Individual Tax Preparation Support (Workpaper Compilation & Schedule Organization)',
      'Business Tax Preparation Support (S-Corp, C-Corp, Partnership, LLC)',
      'Federal Tax Compliance Support & Deadlines Management',
      'State & Local Tax (SALT) Filing Support',
      'Sales & Use Tax Reconciliation & Reporting Support',
      'Tax Documentation, Receipt Archiving & Workpaper Organization',
      'Tax Planning Support & Quarterly Estimate Calculation Worksheets',
      'Tax Research Support & Regulatory Rule Mapping',
      'Business Entity Annual Reporting & Compliance Data Preparation',
      'Year-End Financial Data Cleansing for External Tax Review'
    ],
    whoItIsFor: [
      'US-based small and mid-market businesses seeking organized tax workpapers',
      'Foreign-owned entities with US operational presence requiring compliance support',
      'E-commerce merchants managing multi-state economic nexus and sales tax obligations',
      'Companies collaborating with external CPAs who need pristine book-to-tax workpapers'
    ],
    businessBenefits: [
      'Organized, defensible workpapers ready well in advance of statutory deadlines',
      'Mitigated exposure to penalty assessments and late filing liabilities',
      'Reduced external CPA billable hours through pre-cleansed financial datasets',
      'Comprehensive visibility over multi-jurisdictional compliance requirements'
    ],
    keyOutcomes: [
      'Timely quarterly estimated tax calculations and workpapers',
      'Fully reconciled sales tax records across multi-state sales channels',
      'Structured annual book-to-tax reconciliation binders',
      'Zero last-minute filing panic during peak tax seasons'
    ],
    imagePath: '/src/assets/images/hero_global_business_1791154102183.jpg'
  },
  {
    id: 'consulting',
    pageId: 'consulting',
    title: 'Business Consulting',
    tagline: 'Strategic Financial Planning, Cost Rationalization & Performance Architecture',
    shortDescription: 'Executive consulting focused on boosting profitability, optimizing internal controls, constructing forward-looking business plans, and driving margins.',
    overview: 'Growth brings complexity that often erodes operating margins and clouds executive visibility. RH Business Solutions provides practical, numbers-grounded business consulting to help founders and executive teams identify cost inefficiencies, model expansion opportunities, and establish institutional-grade operational controls.',
    servicesIncluded: [
      'Strategic Financial Consulting & Advisory',
      'Comprehensive Business Plan Development & Review',
      'In-Depth Financial & Margin Analysis',
      'Cost Structure Analysis & Overhead Rationalization',
      'Product & Service Line Profitability Audits',
      'Strategic Budgeting & Multi-Year Financial Forecasting',
      'Business Performance & Revenue Run-Rate Analysis',
      'Business Process Architecture & Workflow Diagnostics',
      'Internal Financial Controls & Segregation of Duties Design',
      'Management Reporting Systems & Executive Briefings',
      'Custom Business Performance Dashboards',
      'Strategic Capital Allocation & Investment Modeling'
    ],
    whoItIsFor: [
      'Business owners seeking to increase EBITDA and eliminate margin leakage',
      'Startups preparing institutional decks and defensible operational projections',
      'Mature businesses navigating restructuring, acquisition, or geographic entry',
      'Organizations with complex departmental costs needing disciplined budgeting'
    ],
    businessBenefits: [
      'Uncompromising clarity on profitable vs. loss-leading business segments',
      'Institutionalized budgeting frameworks that hold departments accountable',
      'Strengthened internal control mechanisms that safeguard company assets',
      'Data-backed strategic roadmaps for sustainable, profitable scaling'
    ],
    keyOutcomes: [
      'Identified margin recovery opportunities within existing revenue streams',
      'Robust financial forecasts aligned with executive growth targets',
      'Documented internal control protocols across key financial processes',
      'Transparent board-level dashboards monitoring leading business KPIs'
    ],
    imagePath: '/src/assets/images/business_consulting_ops_1791154139711.jpg'
  },
  {
    id: 'marketing',
    pageId: 'marketing',
    title: 'Marketing Services',
    tagline: 'B2B Client Acquisition, LinkedIn Marketing Strategy & Commercial Growth',
    shortDescription: 'Commercial marketing strategies engineered for professional services, B2B lead generation, brand authority, and quantifiable client acquisition.',
    overview: 'Unlike consumer-centric consumer promotion, B2B services require high-credibility messaging, structured outreach, and measurable pipeline creation. RH Business Solutions delivers business-focused marketing services designed to position your company as an authority and convert targeted corporate decision-makers.',
    servicesIncluded: [
      'Commercial Digital Marketing Strategy',
      'B2B Social Media Marketing & Channel Management',
      'Executive LinkedIn Marketing & Thought Leadership Strategy',
      'Outbound & Inbound B2B Lead Generation Systems',
      'High-Intent Content Strategy & Editorial Planning',
      'Corporate Brand Identity & Positioning Architecture',
      'Marketing Analytics & Funnel Tracking',
      'Marketing ROI & Performance Reporting',
      'Ideal Client Profile (ICP) & Client Acquisition Strategy'
    ],
    whoItIsFor: [
      'B2B consulting, legal, and financial firms expanding their corporate roster',
      'Healthcare and technology ventures looking to generate qualified client inquiries',
      'Mid-market service providers seeking to transition from word-of-mouth to repeatable acquisition',
      'Founders seeking to build credible industry authority on LinkedIn and digital channels'
    ],
    businessBenefits: [
      'Consistent influx of qualified commercial inquiries and RFP opportunities',
      'Professional executive positioning that supports premium service pricing',
      'Transparent marketing reporting tied directly to pipeline value rather than vanity metrics',
      'Scalable digital footprint across key North American and international markets'
    ],
    keyOutcomes: [
      'Targeted pipeline of high-intent corporate prospects',
      'Enhanced digital brand presence reflecting executive competence',
      'Clear visibility into customer acquisition cost (CAC) and conversion rates',
      'Automated marketing attribution connecting campaigns to revenue'
    ],
    imagePath: '/src/assets/images/hero_global_business_1791154102183.jpg'
  },
  {
    id: 'operational-efficiency',
    pageId: 'operational-efficiency',
    title: 'Operational Efficiency',
    tagline: 'Process Optimization, SOP Institutionalization & Workflow Automation',
    shortDescription: 'Eliminate operational bottlenecks, standardize workflows, formulate Standard Operating Procedures (SOPs), and deploy scalable business automation.',
    overview: 'Operational friction, disjointed handoffs, and undocumented procedures waste hundreds of billable hours and degrade client satisfaction. RH Business Solutions audits your business workflows, drafts institutional Standard Operating Procedures (SOPs), and implements modern process automation to ensure your enterprise operates like a well-oiled machine.',
    servicesIncluded: [
      'End-to-End Business Process Analysis & Bottleneck Mapping',
      'Cross-Departmental Workflow Optimization',
      'Institutional Standard Operating Procedure (SOP) Development',
      'Finance & Accounting Process Automation',
      'Management Reporting & Operational Automation',
      'Operational Key Performance Indicator (KPI) Frameworks',
      'Non-Value-Added Cost Identification & Elimination',
      'Workforce Productivity & Resource Allocation Auditing',
      'Internal Control & Compliance Governance Systems',
      'Comprehensive Process Documentation & Training Manuals',
      'Software Evaluation, Selection & Implementation Support'
    ],
    whoItIsFor: [
      'Growing businesses experiencing operational bottlenecks as headcount expands',
      'Enterprises seeking to standardize service delivery across distributed teams',
      'Companies burdened by manual, spreadsheet-heavy workflows',
      'Businesses preparing for ISO compliance, acquisition diligence, or franchise rollout'
    ],
    businessBenefits: [
      'Dramatic reduction in operational cycle times and preventable rework',
      'Predictable, consistent output quality across all business functions',
      'Seamless onboarding of new staff using institutional SOP repositories',
      'Sustainable margin expansion through automation and elimination of duplicate effort'
    ],
    keyOutcomes: [
      'Fully documented standard operating procedures accessible company-wide',
      'Automated routine data handoffs between operational and finance systems',
      'Measurable productivity gains without proportional headcount increases',
      'Clear operational accountability metrics tracked on executive scorecards'
    ],
    imagePath: '/src/assets/images/business_consulting_ops_1791154139711.jpg'
  }
];
