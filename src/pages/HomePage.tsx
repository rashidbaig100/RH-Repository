import React from 'react';
import { PageId } from '../types';
import { coreServicesList } from '../data/servicesData';
import { industriesList } from '../data/industriesData';
import { GlobalReachSection } from '../components/GlobalReachSection';
import { AssessmentTool } from '../components/AssessmentTool';
import { 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Globe, 
  Cpu, 
  LineChart, 
  Maximize2, 
  MessageSquareText, 
  Percent, 
  Handshake,
  CheckCircle2,
  Stethoscope,
  Briefcase,
  UtensilsCrossed,
  Building,
  HardHat,
  GraduationCap,
  ShoppingBag,
  Store,
  Rocket
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  const whyChoosePoints = [
    {
      title: 'Experienced Professionals',
      description: 'Domain-specialized accountants, billing specialists, and business analysts with cross-border expertise.',
      icon: Users
    },
    {
      title: 'Global Service Delivery',
      description: 'Synchronous and asynchronous support tailored to North American (EST/PST), UK, and GCC working hours.',
      icon: Globe
    },
    {
      title: 'Technology-Driven Processes',
      description: 'Direct integration with QuickBooks, NetSuite, leading EHR/EMR platforms, and Power BI dashboards.',
      icon: Cpu
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Replacing guesswork with structured financial analytics, variance reporting, and operational KPIs.',
      icon: LineChart
    },
    {
      title: 'Scalable Outsourcing',
      description: 'Flexible engagement models that expand seamlessly as transaction volume or patient census increases.',
      icon: Maximize2
    },
    {
      title: 'Transparent Communication',
      description: 'Dedicated account managers, clear SLAs, weekly progress cadences, and zero opaque billing terms.',
      icon: MessageSquareText
    },
    {
      title: 'Process & Cost Optimization',
      description: 'Elimination of redundant clerical steps, lowering effective administrative cost per transaction.',
      icon: Percent
    },
    {
      title: 'Long-Term Partnership',
      description: 'Committed to acting as a strategic extension of your internal executive leadership team.',
      icon: Handshake
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Understand the client’s business, challenges, systems, and primary operational objectives.'
    },
    {
      num: '02',
      title: 'Analyze',
      desc: 'Review financial, operational, revenue cycle, and cross-departmental workflow requirements.'
    },
    {
      num: '03',
      title: 'Plan',
      desc: 'Develop a practical, tailored solution, communication protocol, and phased implementation roadmap.'
    },
    {
      num: '04',
      title: 'Implement',
      desc: 'Execute the agreed financial, billing, tax-support, marketing, or operational optimization workflows.'
    },
    {
      num: '05',
      title: 'Improve',
      desc: 'Monitor performance indicators, identify emerging bottlenecks, and continuously refine outcomes.'
    }
  ];

  const businessOutcomes = [
    { title: 'Better Financial Visibility', desc: 'Real-time insight into true cash balances, operating expenses, and margins.' },
    { title: 'Improved Cash Flow Management', desc: 'Proactive 13-week forecasting that prevents working capital shocks.' },
    { title: 'Reduced Administrative Burden', desc: 'Reclaim 20+ hours per week for core operational and executive focus.' },
    { title: 'Faster Reporting', desc: 'Accelerated month-end closes that deliver timely P&L and balance sheets.' },
    { title: 'Better Revenue Cycle Management', desc: 'Elevated first-pass clean claim rates and systematic denial resolution.' },
    { title: 'Improved Operational Efficiency', desc: 'Standardized SOPs eliminating duplicate effort across business units.' },
    { title: 'Stronger Business Controls', desc: 'Segregation of duties and auditable records that safeguard corporate assets.' },
    { title: 'Better Management Decisions', desc: 'Forward-looking scenarios backed by defensible financial modeling.' }
  ];

  const industryIcons: Record<string, any> = {
    'healthcare': Stethoscope,
    'professional-services': Briefcase,
    'restaurants-hospitality': UtensilsCrossed,
    'real-estate': Building,
    'construction': HardHat,
    'education': GraduationCap,
    'ecommerce': ShoppingBag,
    'small-medium-businesses': Store,
    'startups': Rocket
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed text metadata kicker - zero-pill discipline */}
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
                <span>International B2B Advisory &amp; Outsourcing</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>USA · Canada · UK · GCC · Global</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Global Business Solutions for Finance, Healthcare, Tax &amp; Operations
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                RH Business Solutions helps businesses improve financial performance, streamline operations, manage revenue cycles, and make better business decisions through professional outsourced services.
              </p>

              {/* Value Proposition Statement */}
              <div className="p-4 bg-slate-100/90 border-l-4 border-blue-600 rounded-r-lg text-sm font-medium text-slate-800">
                Helping businesses improve financial performance, reduce operational complexity, and scale with confidence.
              </div>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-300 transition-colors"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Trust Signal Strip */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs text-slate-500">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Target Markets</span>
                  <span>USA, Canada &amp; Global</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Security &amp; Privacy</span>
                  <span>HIPAA &amp; Strict NDA</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Engagement</span>
                  <span>Dedicated B2B Teams</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <img
                  src="/src/assets/images/hero_global_business_1791154102183.jpg"
                  alt="RH Business Solutions executive global headquarters and financial operations"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs uppercase font-mono tracking-wider text-blue-400">
                    Enterprise Capability
                  </div>
                  <div className="text-base font-bold tracking-tight text-white mt-0.5">
                    Cross-Border Execution &amp; C-Suite Visibility
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Providing international businesses with reliable finance, healthcare RCM, and operational excellence.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Practice Disciplines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Outsourced Business Services
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Engineered to remove administrative friction and replace ad-hoc workflows with institutional rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServicesList.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div>
                <div className="text-xs font-mono font-bold text-blue-600 mb-2">
                  0{idx + 1}. SERVICE DISCIPLINE
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                
                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  <div className="text-xs font-semibold text-slate-700">Representative Deliverables:</div>
                  {service.servicesIncluded.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(service.pageId)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DIAGNOSTIC TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AssessmentTool
          onScheduleWithContext={(service, notes) => {
            onOpenConsultation(service);
          }}
        />
      </section>

      {/* SECTION 3 — WHY BUSINESSES CHOOSE RH BUSINESS SOLUTIONS */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-400 block mb-2">
              The RH Business Solutions Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Why Businesses Choose RH Business Solutions
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              We position our firm as a trustworthy, institutional outsourcing partner delivering accountability, deep regulatory alignment, and reliable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 hover:border-blue-500/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center text-blue-400 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Value Anchor Bar */}
          <div className="mt-12 p-6 bg-slate-950/70 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="text-xs uppercase tracking-wider text-blue-400 font-bold">
                Client Trust &amp; Governance
              </div>
              <p className="text-sm text-slate-200 mt-1 max-w-xl">
                We do not use cookie-cutter templates or low-cost gig workers. Every account is assigned senior supervisory leads who review workpapers, reconciliations, and claim submissions before delivery.
              </p>
            </div>
            <button
              onClick={() => onNavigate('why-us')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors whitespace-nowrap"
            >
              Explore Governance &amp; Standards
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
              Industry Domain Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              Specialized financial workflows, revenue cycle management, and operational frameworks tailored to distinct vertical requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('industries')}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>View All Industry Solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesList.map((ind) => {
            const Icon = industryIcons[ind.id] || Building;
            return (
              <div
                key={ind.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-3">
                    {ind.tagline}
                  </p>
                  
                  <div className="text-xs text-slate-600 space-y-1.5">
                    <div className="font-semibold text-slate-700">Addressed Challenges:</div>
                    {ind.challenges.slice(0, 2).map((ch, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-1.5 text-slate-600">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('industries')}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    View Vertical Specs →
                  </button>
                  <button
                    onClick={() => onOpenConsultation(`Industry: ${ind.name}`)}
                    className="text-xs text-slate-500 hover:text-slate-800"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK (5-Step Process) */}
      <section className="bg-slate-100 py-16 sm:py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
              Our 5-Step Engagement Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Work
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A disciplined, phased onboarding roadmap that ensures zero disruption to daily business operations while rapidly establishing structured controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between relative"
              >
                <div>
                  <div className="text-2xl font-extrabold text-blue-600 font-mono mb-2">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-700">
                  Phased Review Checkpoint
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors"
            >
              Start Step 01 — Schedule Initial Business Discovery
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUSINESS OUTCOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-2">
            Measurable Operational Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Target Business Outcomes
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Rather than making unsubstantiated numerical promises, we build repeatable operational foundations that naturally drive these executive outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessOutcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-400 transition-colors"
            >
              <div className="w-7 h-7 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs mb-3">
                ✓
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                {outcome.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {outcome.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — GLOBAL REACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalReachSection />
      </section>

      {/* SECTION 8 — CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
              Take the Next Step
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
              Let’s Build a More Efficient and Profitable Business.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need outsourced finance, medical billing, tax support, business consulting, marketing or operational improvement, RH Business Solutions can help you build a practical solution around your business needs.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-colors"
              >
                Contact Our Team
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Confidential · Zero Obligation · Initial Operational Review
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
