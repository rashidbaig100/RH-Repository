import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Clock, AlertCircle } from 'lucide-react';

interface AssessmentToolProps {
  onScheduleWithContext: (service: string, notes: string) => void;
}

export const AssessmentTool: React.FC<AssessmentToolProps> = ({ onScheduleWithContext }) => {
  const [assessmentType, setAssessmentType] = useState<'finance' | 'rcm'>('rcm');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(150000);
  const [currentLagDays, setCurrentLagDays] = useState<number>(45);
  const [inHouseHours, setInHouseHours] = useState<number>(30);

  // Computed values
  const rcmDenialEstimate = Math.round(monthlyVolume * 0.08); // estimated 8% denial without dedicated scrubbing
  const rcmRecoverableEstimate = Math.round(rcmDenialEstimate * 0.72); // 72% typical recovery rate
  const annualCashFlowAcceleration = Math.round((monthlyVolume * (Math.max(0, currentLagDays - 24) / 365)) * 0.075);
  const annualHoursSaved = Math.round(inHouseHours * 4.33 * 12 * 0.65); // 65% burden reduction

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
            Executive Diagnostic Calculator
          </span>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Estimate Your Process &amp; Revenue Cycle Improvements
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Evaluate potential cash flow acceleration and administrative hour recovery with outsourced execution.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setAssessmentType('rcm')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              assessmentType === 'rcm'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Healthcare RCM
          </button>
          <button
            onClick={() => setAssessmentType('finance')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              assessmentType === 'finance'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Finance &amp; Bookkeeping
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>{assessmentType === 'rcm' ? 'Monthly Practice Gross Billings' : 'Monthly Business Operating Volume'}</span>
              <span className="text-blue-700 font-bold tabular-nums">${monthlyVolume.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="30000"
              max="1000000"
              step="10000"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$30k/mo</span>
              <span>$500k/mo</span>
              <span>$1.0M+/mo</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>{assessmentType === 'rcm' ? 'Average Days in Accounts Receivable (A/R)' : 'Days Required for Month-End Close'}</span>
              <span className="text-blue-700 font-bold tabular-nums">{currentLagDays} Days</span>
            </div>
            <input
              type="range"
              min="15"
              max="90"
              step="1"
              value={currentLagDays}
              onChange={(e) => setCurrentLagDays(Number(e.target.value))}
              className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>15 Days (Ideal)</span>
              <span>45 Days (Average)</span>
              <span>90+ Days (Severe Lag)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
              <span>Internal Hours Spent on Admin/Billing Per Week</span>
              <span className="text-blue-700 font-bold tabular-nums">{inHouseHours} hrs/week</span>
            </div>
            <input
              type="range"
              min="5"
              max="80"
              step="5"
              value={inHouseHours}
              onChange={(e) => setInHouseHours(Number(e.target.value))}
              className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5 hrs (Minimal)</span>
              <span>30 hrs (Part-Time Team)</span>
              <span>80+ hrs (Heavy Overhead)</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-blue-400 font-bold mb-4">
              Estimated Operational &amp; Financial Impact
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-lg">
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{assessmentType === 'rcm' ? 'Recoverable Denials / Mo' : 'Working Capital Optimization'}</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                  ~${rcmRecoverableEstimate.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 block sm:inline sm:ml-1">/month</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {assessmentType === 'rcm' ? 'From CARC/RARC denial remediation' : 'Faster cash conversion velocity'}
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-lg">
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Annual Staff Hours Reclaimed</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                  {annualHoursSaved.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 block sm:inline sm:ml-1">hrs/yr</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Re-allocated to patient care or core business sales
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-800/40 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Target clean claim first-pass submission rate: <strong>98%+</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Target days in A/R: <strong>&lt; 25 days</strong> with disciplined 30/60/90 tracking</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-800">
            <button
              onClick={() => {
                const service = assessmentType === 'rcm' ? 'Medical Billing / RCM' : 'Financial Services';
                const notes = `Diagnostic calculation: Monthly volume: $${monthlyVolume.toLocaleString()}, Current lag: ${currentLagDays} days, Weekly admin time: ${inHouseHours} hrs.`;
                onScheduleWithContext(service, notes);
              }}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Discuss These Metrics in a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
