import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

interface LegalModalsProps {
  type: 'disclaimer' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            {type === 'disclaimer' && <ShieldAlert className="w-5 h-5 text-amber-400" />}
            {type === 'privacy' && <Lock className="w-5 h-5 text-blue-400" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-emerald-400" />}
            <h3 className="text-base font-bold tracking-tight">
              {type === 'disclaimer' && 'Professional Practice & Regulatory Disclaimer'}
              {type === 'privacy' && 'Corporate Privacy & Data Protection Policy'}
              {type === 'terms' && 'Master Terms of B2B Service Engagement'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed">
          {type === 'disclaimer' && (
            <>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-amber-900 text-xs">
                <strong>Important Notice on Professional Status:</strong> RH Business Solutions operates strictly as a management consulting, bookkeeping, business advisory, operational improvement, and healthcare revenue cycle outsourcing partner.
              </div>
              
              <h4 className="font-bold text-slate-900 text-base">1. Not a CPA Firm or Licensed Law Firm</h4>
              <p>
                RH Business Solutions is not a Certified Public Accounting (CPA) firm, an enrolled agent firm, or a licensed law practice. We do not issue formal public statutory audit opinions, certified compilation reports requiring attest licensing, or formal legal advice. Services such as "tax preparation support", "tax documentation organization", "tax planning support", and "sales tax compliance support" involve back-office schedule preparation, workpaper compilation, and data structuring intended for client management review or submission via the client’s designated licensed CPA or tax attorney.
              </p>

              <h4 className="font-bold text-slate-900 text-base">2. Healthcare Billing &amp; Regulatory Compliance</h4>
              <p>
                All medical billing, patient eligibility verification, claims preparation, and revenue cycle management services for healthcare providers in the United States and Canada are performed in accordance with applicable payer guidelines, national standards (including HIPAA in the USA and PIPEDA in Canada), and the formal Business Associate Agreement (BAA) executed with each healthcare entity. Clinical documentation, diagnosis determination, and medical necessity remain the ultimate legal responsibility of the licensed attending healthcare practitioners.
              </p>

              <h4 className="font-bold text-slate-900 text-base">3. Management Responsibility</h4>
              <p>
                RH Business Solutions assists executive management teams in organizing, interpreting, and optimizing business data. Management maintains final authority over commercial decisions, contract executions, banking authorizations, and regulatory filings.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">1. Commitment to Confidentiality</h4>
              <p>
                RH Business Solutions recognizes that client financial records, patient billing data, operational SOPs, and marketing strategies constitute proprietary and sensitive trade secrets. We maintain strict non-disclosure safeguards across all engagements.
              </p>

              <h4 className="font-bold text-slate-900 text-base">2. Data Security &amp; Access Controls</h4>
              <p>
                All client documents and system credentials are managed via role-based access control (RBAC), multi-factor authentication (MFA), and bank-grade encryption in transit and at rest. We never sell, lease, or monetize client data under any circumstance.
              </p>

              <h4 className="font-bold text-slate-900 text-base">3. Healthcare Data (HIPAA &amp; PIPEDA Safeguards)</h4>
              <p>
                Protected Health Information (PHI) is handled strictly within secure, compliant environments adhering to federal administrative, physical, and technical safeguards. All billing associates undergo mandatory annual compliance training.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">1. Scope of Services &amp; Master Service Agreement (MSA)</h4>
              <p>
                All outsourced services provided by RH Business Solutions are governed by a mutually executed Master Services Agreement (MSA) and detailed Statement of Work (SOW) defining service deliverables, performance metrics, SLAs, and billing schedules.
              </p>

              <h4 className="font-bold text-slate-900 text-base">2. Client Data Accuracy &amp; Source Records</h4>
              <p>
                The client agrees to provide timely, accurate source documentation (bank records, clearinghouse access, vendor invoices, clinical encounter forms). RH Business Solutions relies upon the good-faith accuracy of data supplied by client personnel.
              </p>

              <h4 className="font-bold text-slate-900 text-base">3. Intellectual Property</h4>
              <p>
                All client proprietary financial records, operational SOPs customized for the client, and practice data remain the exclusive property of the client.
              </p>
            </>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-slate-800 transition-colors"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
