import React, { useState } from 'react';
import { WorkflowStep } from '../types';
import { CheckCircle2, ChevronRight, FileCheck, Layers } from 'lucide-react';

interface WorkflowVisualizerProps {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  themeColor?: 'blue' | 'emerald' | 'indigo';
}

export const WorkflowVisualizer: React.FC<WorkflowVisualizerProps> = ({
  title,
  subtitle,
  steps,
  themeColor = 'blue'
}) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep = steps[selectedStepIndex] || steps[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase font-bold tracking-wider text-blue-600 block mb-1">
          Interactive Operational Architecture
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          {subtitle}
        </p>
      </div>

      {/* Horizontal Steps Nav / Selector */}
      <div className="overflow-x-auto pb-4 mb-6">
        <div className="flex items-center gap-2 min-w-max">
          {steps.map((step, idx) => {
            const isSelected = idx === selectedStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStepIndex(idx)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-blue-800 text-blue-200' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step.step}
                </span>
                <span className="max-w-[140px] truncate">{step.title}</span>
                {idx < steps.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Card */}
      <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-extrabold px-2.5 py-1 rounded bg-blue-600 text-white">
                STEP {activeStep.step}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {activeStep.title}
              </h4>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              {activeStep.description}
            </p>

            {activeStep.deliverables && activeStep.deliverables.length > 0 && (
              <div className="pt-3">
                <span className="text-xs uppercase font-bold tracking-wider text-blue-400 block mb-2 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  Key Quality Control Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStep.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-800/60 p-2 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-4 bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-center">
            <Layers className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-xs font-semibold text-white">Institutional Execution</div>
            <p className="text-[11px] text-slate-400 mt-1">
              Every step is governed by strict checklists, dual-review quality assurance, and automated tracking.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-700/60 flex justify-between text-[11px] text-slate-400">
              <button
                disabled={selectedStepIndex === 0}
                onClick={() => setSelectedStepIndex(prev => Math.max(0, prev - 1))}
                className="hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                ← Previous
              </button>
              <span className="font-mono">{selectedStepIndex + 1} of {steps.length}</span>
              <button
                disabled={selectedStepIndex === steps.length - 1}
                onClick={() => setSelectedStepIndex(prev => Math.min(steps.length - 1, prev + 1))}
                className="hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
