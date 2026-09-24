import React, { useState } from 'react';
import { Scheme } from '../types';
import { AlertCircle, CheckCircle2, Flag, X } from 'lucide-react';

interface ReportOutdatedModalProps {
  scheme: Scheme | null;
  onClose: () => void;
}

export const ReportOutdatedModal: React.FC<ReportOutdatedModalProps> = ({
  scheme,
  onClose
}) => {
  if (!scheme) return null;

  const [issueType, setIssueType] = useState('deadline_changed');
  const [description, setDescription] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-sm">Report Scheme Information</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-slate-900">Feedback Submitted</h4>
            <p className="text-xs text-slate-500">
              Thank you for keeping government scheme records accurate. Our verification team will cross-reference the official Government Resolution (GR).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-4 text-xs text-slate-800">
            <div>
              <span className="text-slate-500">Target Scheme:</span>
              <div className="font-bold text-slate-900 text-sm mt-0.5">
                {scheme.title.en}
              </div>
              <div className="text-[11px] text-slate-500">
                Last Verified: {scheme.lastVerifiedDate}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Type of Discrepancy:</label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg font-medium"
              >
                <option value="deadline_changed">Deadline extended / closed earlier</option>
                <option value="income_limit_revised">Income ceiling revised by new GR</option>
                <option value="broken_link">Official portal link broken or changed</option>
                <option value="eligibility_discrepancy">Eligibility condition mismatch</option>
                <option value="document_changed">Document requirement changed at Setu Kendra</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Details & Context:</label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain the new rule or circular details..."
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">New Official GR / Link (Optional):</label>
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://mahadbt.maharashtra.gov.in/..."
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
              >
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
