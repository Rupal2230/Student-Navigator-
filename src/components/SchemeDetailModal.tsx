import React from 'react';
import { Language, Scheme, StudentSchemeTracking, StudentStatusOption } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { calculateDaysRemaining } from '../utils/matchingEngine';
import {
  X,
  ExternalLink,
  Calendar,
  CheckSquare,
  Square,
  ShieldCheck,
  Building2,
  Clock,
  AlertCircle,
  FileCheck,
  Download,
  Share2,
  Flag
} from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  onClose: () => void;
  language: Language;
  tracking: StudentSchemeTracking | undefined;
  onToggleDocumentReady: (schemeId: string, docId: string) => void;
  onStatusChange: (schemeId: string, status: StudentStatusOption) => void;
  onReportOutdated: (scheme: Scheme) => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  scheme,
  onClose,
  language,
  tracking,
  onToggleDocumentReady,
  onStatusChange,
  onReportOutdated
}) => {
  if (!scheme) return null;

  const t = TRANSLATIONS[language];
  const daysLeft = calculateDaysRemaining(scheme.deadline);
  const readyDocs = tracking?.readyDocuments || [];

  const handleDownloadCalendar = () => {
    // Generate .ics calendar event
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Student Opportunity Navigator//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Deadline: ${scheme.title.en}`,
      `DESCRIPTION:Application deadline for ${scheme.title.en}. Official portal: ${scheme.officialPortalUrl}`,
      `DTSTART;VALUE=DATE:${scheme.deadline.replace(/-/g, '')}`,
      `DTEND;VALUE=DATE:${scheme.deadline.replace(/-/g, '')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${scheme.code}-deadline.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-medium">
              <span>{scheme.governmentLevel === 'state' ? 'Maharashtra State Government' : 'Central Government'}</span>
              <span>·</span>
              <span className="font-mono text-slate-300">{scheme.code}</span>
              <span>·</span>
              <span className="text-slate-400">Verified: {scheme.lastVerifiedDate}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
              {scheme.title[language]}
            </h2>

            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{scheme.department[language]}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-800">
          {/* Deadline & Official Portal Action Strip */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <span className="text-slate-600">{t.deadlineLabel}:</span>{' '}
                <strong className="text-slate-900 font-bold tabular-nums">{scheme.deadline}</strong>
                {daysLeft <= 3 ? (
                  <span className="ml-2 font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                    🔴 {daysLeft} {t.daysLeft} (Urgent!)
                  </span>
                ) : daysLeft <= 7 ? (
                  <span className="ml-2 font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    🟠 {daysLeft} {t.daysLeft}
                  </span>
                ) : (
                  <span className="ml-2 text-slate-600 tabular-nums">
                    ({daysLeft} {t.daysLeft})
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-600" />
                Add to Calendar
              </button>

              <a
                href={scheme.officialPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>{t.modalOfficialPortal}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Section 1: Financial Benefits */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {t.modalBenefitsTitle}
            </h3>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="text-base font-bold text-slate-900">
                {scheme.benefitsSummary[language]}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {scheme.financialBenefit[language]}
              </p>
            </div>
          </div>

          {/* Section 2: Simple Language Explanation */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t.modalExplanationTitle}
            </h3>
            <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl text-slate-800 text-xs sm:text-sm leading-relaxed">
              {scheme.simpleExplanation[language]}
            </div>
          </div>

          {/* Section 3: Official Eligibility Criteria */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t.modalEligibilityTitle}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {scheme.eligibilityBullets[language].map((bullet, idx) => (
                <li
                  key={idx}
                  className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Document Checklist (Interactive, Zero upload) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-blue-600" />
                {t.modalDocumentsTitle}
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {readyDocs.length} of {scheme.requiredDocuments.length} ready
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3">
              {t.checklistTip}
            </p>

            <div className="space-y-2.5">
              {scheme.requiredDocuments.map((doc) => {
                const isChecked = readyDocs.includes(doc.id);
                return (
                  <div
                    key={doc.id}
                    onClick={() => onToggleDocumentReady(scheme.id, doc.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="mt-0.5 text-emerald-600 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isChecked ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                          {doc.name[language]}
                        </span>
                        {doc.isMandatory && (
                          <span className="text-[10px] text-red-600 font-semibold bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                            Mandatory
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-600">
                        <strong>{t.authorityLabel}</strong> {doc.issuingAuthority[language]}
                      </div>

                      <div className="text-[11px] text-slate-500">
                        <strong>{t.howToObtainLabel}</strong> {doc.howToObtain[language]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Step-by-Step Application Procedure */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {t.modalProcedureTitle}
            </h3>
            <div className="space-y-3">
              {scheme.applicationProcedure.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 tabular-nums">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {step.title[language]}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {step.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification & Safety Note */}
          <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <strong>Official Portal Rule:</strong> Apply only through the verified government domain ({scheme.officialPortalUrl}). Never pay any middleman or third-party agent for scholarship sanction.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">
              {t.btnMarkStatus}:
            </span>
            <select
              value={tracking?.status || 'interested'}
              onChange={(e) =>
                onStatusChange(scheme.id, e.target.value as StudentStatusOption)
              }
              className="text-xs font-medium bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            >
              <option value="interested">{t.statusInterested}</option>
              <option value="preparing">{t.statusPreparing}</option>
              <option value="applied">{t.statusApplied}</option>
              <option value="need_help">{t.statusNeedHelp}</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onReportOutdated(scheme)}
              className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1"
            >
              <Flag className="w-3.5 h-3.5 text-slate-400" />
              {t.modalReportOutdated}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
