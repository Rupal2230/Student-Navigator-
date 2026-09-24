import React, { useState } from 'react';
import {
  Language,
  MatchResult,
  Scheme,
  StudentProfile,
  StudentSchemeTracking,
  StudentStatusOption
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { calculateDaysRemaining } from '../utils/matchingEngine';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Clock,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Flag
} from 'lucide-react';

interface PersonalizedSchemeListProps {
  matchResults: MatchResult[];
  language: Language;
  profile: StudentProfile;
  trackingMap: Record<string, StudentSchemeTracking>;
  onStatusChange: (schemeId: string, status: StudentStatusOption) => void;
  onOpenSchemeModal: (scheme: Scheme) => void;
  onReportOutdated: (scheme: Scheme) => void;
}

export const PersonalizedSchemeList: React.FC<PersonalizedSchemeListProps> = ({
  matchResults,
  language,
  profile,
  trackingMap,
  onStatusChange,
  onOpenSchemeModal,
  onReportOutdated
}) => {
  const t = TRANSLATIONS[language];
  const [filterType, setFilterType] = useState<'all' | 'likely' | 'check' | 'closing_soon'>('all');
  const [expandedWhyId, setExpandedWhyId] = useState<string | null>(null);

  const likelyList = matchResults.filter((m) => m.matchType === 'likely');
  const checkList = matchResults.filter((m) => m.matchType === 'check_eligibility');

  const filteredResults = matchResults.filter((item) => {
    if (filterType === 'likely') return item.matchType === 'likely';
    if (filterType === 'check') return item.matchType === 'check_eligibility';
    if (filterType === 'closing_soon') {
      const days = calculateDaysRemaining(item.scheme.deadline);
      return days <= 7;
    }
    return true;
  });

  const toggleWhy = (schemeId: string) => {
    setExpandedWhyId(expandedWhyId === schemeId ? null : schemeId);
  };

  return (
    <div className="space-y-6">
      {/* Category / Urgency Filter Bar (Interactive functional buttons) */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'all'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Opportunities ({matchResults.length})
          </button>
          <button
            onClick={() => setFilterType('likely')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'likely'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🟢 {t.likelyMatchesCount} ({likelyList.length})
          </button>
          <button
            onClick={() => setFilterType('check')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'check'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🟡 {t.checkEligibilityCount} ({checkList.length})
          </button>
          <button
            onClick={() => setFilterType('closing_soon')}
            className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
              filterType === 'closing_soon'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚠️ Closing Soon (&lt;= 7 Days)
          </button>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Showing <span className="tabular-nums font-semibold text-slate-800">{filteredResults.length}</span> verified schemes
        </div>
      </div>

      {filteredResults.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-slate-200">
          <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">{t.zeroMatchesPrompt}</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Try adjusting your profile parameters, such as income range or course branch, to view broader opportunities.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {filteredResults.map(({ scheme, matchType, matchedCriteria, unverifiedCriteria }) => {
            const daysLeft = calculateDaysRemaining(scheme.deadline);
            const tracking = trackingMap[scheme.id] || {
              schemeId: scheme.id,
              status: 'interested',
              readyDocuments: [],
              lastUpdated: ''
            };
            const isWhyOpen = expandedWhyId === scheme.id;

            return (
              <div
                key={scheme.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs overflow-hidden"
              >
                {/* Card Top Banner with Metadata & Match Category */}
                <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-start justify-between gap-3 bg-slate-50/50">
                  <div className="space-y-1.5">
                    {/* Unboxed metadata line with typographic bullet separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">
                        {scheme.governmentLevel === 'state' ? 'Maharashtra State' : 'Central Govt (India)'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Verified: {scheme.lastVerifiedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-slate-600">{scheme.code}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {scheme.title[language]}
                    </h3>

                    <p className="text-xs text-slate-600">
                      {scheme.department[language]}
                    </p>
                  </div>

                  {/* Match Status Badge & Urgency Pill */}
                  <div className="flex flex-row md:flex-col items-end gap-2 shrink-0">
                    {matchType === 'likely' ? (
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold"
                        title={t.likelyTooltip}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.badgeLikelyMatch}</span>
                      </div>
                    ) : (
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg text-xs font-semibold"
                        title={t.checkTooltip}
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.badgeCheckEligibility}</span>
                      </div>
                    )}

                    {/* Deadline urgency indicator */}
                    <div className="flex items-center gap-1 text-xs text-slate-600 tabular-nums">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.deadlineLabel}: <strong>{scheme.deadline}</strong></span>
                      {daysLeft <= 3 ? (
                        <span className="text-red-700 font-bold ml-1">🔴 {daysLeft} {t.daysLeft}</span>
                      ) : daysLeft <= 7 ? (
                        <span className="text-amber-700 font-semibold ml-1">🟠 {daysLeft} {t.daysLeft}</span>
                      ) : (
                        <span className="text-slate-500 font-medium ml-1">({daysLeft} {t.daysLeft})</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  {/* Financial Benefit Callout */}
                  <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg">
                    <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-0.5">
                      Direct Financial Benefit
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {scheme.benefitsSummary[language]}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {scheme.financialBenefit[language]}
                    </div>
                  </div>

                  {/* Simple Language Explanation */}
                  <div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">
                      {t.modalExplanationTitle}:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {scheme.simpleExplanation[language]}
                    </p>
                  </div>

                  {/* "Why Am I Seeing This?" Accordion */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleWhy(scheme.id)}
                      className="w-full px-3 py-2 text-xs font-semibold text-slate-800 bg-slate-100/70 hover:bg-slate-100 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        {t.btnWhyAmISeeingThis}
                      </span>
                      {isWhyOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </button>

                    {isWhyOpen && (
                      <div className="p-3 bg-white text-xs space-y-3 border-t border-slate-200">
                        {matchedCriteria.length > 0 && (
                          <div>
                            <div className="font-semibold text-emerald-800 mb-1 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              {t.reasonsMatched}
                            </div>
                            <ul className="space-y-1 pl-5 list-disc text-slate-700">
                              {matchedCriteria.map((c, i) => (
                                <li key={i}>
                                  <strong>{c.criterion}:</strong> {c.detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {unverifiedCriteria.length > 0 && (
                          <div>
                            <div className="font-semibold text-amber-800 mb-1 flex items-center gap-1">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                              {t.reasonsWarning}
                            </div>
                            <ul className="space-y-1 pl-5 list-disc text-slate-700">
                              {unverifiedCriteria.map((c, i) => (
                                <li key={i}>
                                  <strong>{c.criterion}:</strong> {c.detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <p className="text-[11px] text-slate-500 italic mt-2">
                          * Note: Government schemes change periodically. Please verify final eligibility on the official portal.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions & Student Status Tracking */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
                    {/* Student Reported Status Selector */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700">
                        {t.btnMarkStatus}:
                      </span>
                      <select
                        value={tracking.status}
                        onChange={(e) =>
                          onStatusChange(scheme.id, e.target.value as StudentStatusOption)
                        }
                        className="text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                      >
                        <option value="interested">{t.statusInterested}</option>
                        <option value="preparing">{t.statusPreparing}</option>
                        <option value="applied">{t.statusApplied}</option>
                        <option value="need_help">{t.statusNeedHelp}</option>
                      </select>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onReportOutdated(scheme)}
                        className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                        title="Report incorrect information"
                      >
                        <Flag className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenSchemeModal(scheme)}
                        className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        {t.btnViewDetails}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
