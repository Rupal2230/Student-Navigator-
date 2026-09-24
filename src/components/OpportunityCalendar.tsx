import React, { useState } from 'react';
import { Language, Scheme } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SCHEMES_DATABASE } from '../data/schemesData';
import { calculateDaysRemaining } from '../utils/matchingEngine';
import {
  Calendar as CalendarIcon,
  Clock,
  ExternalLink,
  AlertTriangle,
  Download,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface OpportunityCalendarProps {
  language: Language;
  onSelectScheme: (scheme: Scheme) => void;
}

export const OpportunityCalendar: React.FC<OpportunityCalendarProps> = ({
  language,
  onSelectScheme
}) => {
  const t = TRANSLATIONS[language];
  const [filterMode, setFilterMode] = useState<'all' | 'urgent3' | 'warning7' | 'rolling'>('all');

  const allSchemesWithUrgency = SCHEMES_DATABASE.map((s) => {
    const days = calculateDaysRemaining(s.deadline);
    let urgency: 'urgent' | 'warning' | 'normal' | 'rolling' = 'normal';
    if (s.deadlineStatus === 'open_rolling') {
      urgency = 'rolling';
    } else if (days <= 3) {
      urgency = 'urgent';
    } else if (days <= 7) {
      urgency = 'warning';
    }
    return {
      scheme: s,
      daysRemaining: days,
      urgency
    };
  }).sort((a, b) => {
    // Sort urgent first, then warning, then ascending by daysRemaining
    if (a.urgency === 'urgent' && b.urgency !== 'urgent') return -1;
    if (b.urgency === 'urgent' && a.urgency !== 'urgent') return 1;
    return a.daysRemaining - b.daysRemaining;
  });

  const filteredSchemes = allSchemesWithUrgency.filter((item) => {
    if (filterMode === 'urgent3') return item.urgency === 'urgent';
    if (filterMode === 'warning7') return item.urgency === 'warning' || item.urgency === 'urgent';
    if (filterMode === 'rolling') return item.scheme.deadlineStatus === 'open_rolling';
    return true;
  });

  const handleDownloadAllIcs = () => {
    const icsEvents = SCHEMES_DATABASE.map((scheme) => [
      'BEGIN:VEVENT',
      `SUMMARY:Deadline: ${scheme.title.en}`,
      `DESCRIPTION:${scheme.benefitsSummary.en} - Portal: ${scheme.officialPortalUrl}`,
      `DTSTART;VALUE=DATE:${scheme.deadline.replace(/-/g, '')}`,
      `DTEND;VALUE=DATE:${scheme.deadline.replace(/-/g, '')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    ].join('\r\n')).join('\r\n');

    const fullIcs = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Student Opportunity Navigator Calendar//EN',
      icsEvents,
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([fullIcs], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'all-maharashtra-scholarship-deadlines.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-600 mb-1">
            <CalendarIcon className="w-5 h-5 text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-wider">
              {t.calendarTitle}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Upcoming Cycles & Closing Windows
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            {t.calendarSubtitle}
          </p>
        </div>

        <button
          onClick={handleDownloadAllIcs}
          className="px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg flex items-center gap-2 transition-colors cursor-pointer self-start md:self-auto shrink-0"
        >
          <Download className="w-4 h-4 text-slate-600" />
          Export All Deadlines (.ics)
        </button>
      </div>

      {/* Urgency Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          onClick={() => setFilterMode('urgent3')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            filterMode === 'urgent3'
              ? 'bg-red-50 border-red-400 ring-2 ring-red-400'
              : 'bg-white border-slate-200 hover:border-red-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-red-900 flex items-center gap-1.5">
              🔴 Urgent Attention
            </span>
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
              &lt;= 3 Days
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            {allSchemesWithUrgency.filter((s) => s.urgency === 'urgent').length} Schemes
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Action needed immediately before portal verification locks.
          </p>
        </div>

        <div
          onClick={() => setFilterMode('warning7')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            filterMode === 'warning7'
              ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400'
              : 'bg-white border-slate-200 hover:border-amber-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              🟠 Approaching Soon
            </span>
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
              4 – 7 Days
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            {allSchemesWithUrgency.filter((s) => s.urgency === 'warning').length} Schemes
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Prepare Setu Kendra certificates and bonafide letters.
          </p>
        </div>

        <div
          onClick={() => setFilterMode('all')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            filterMode === 'all'
              ? 'bg-slate-100 border-slate-400 ring-2 ring-slate-400'
              : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              🟢 All Deadlines
            </span>
            <span className="text-xs font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
              Full Calendar
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            {allSchemesWithUrgency.length} Active Schemes
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Includes central sector, state fee waivers, and rolling apprenticeships.
          </p>
        </div>
      </div>

      {/* Deadlines Table / List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Verified Deadlines Schedule
          </div>
          <div className="text-xs text-slate-500">
            Current Date Reference: <strong>23 September 2026</strong>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredSchemes.map(({ scheme, daysRemaining, urgency }) => (
            <div
              key={scheme.id}
              className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-700">
                    {scheme.governmentLevel === 'state' ? 'Maharashtra State' : 'Central Government'}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">{scheme.department[language]}</span>
                </div>

                <h3
                  onClick={() => onSelectScheme(scheme)}
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-800 transition-colors cursor-pointer leading-snug"
                >
                  {scheme.title[language]}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-1">
                  {scheme.benefitsSummary[language]}
                </p>
              </div>

              {/* Deadline countdown & action */}
              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                <div className="text-left md:text-right">
                  <div className="text-xs text-slate-500">Official Deadline</div>
                  <div className="text-sm font-bold text-slate-900 tabular-nums">
                    {scheme.deadline}
                  </div>
                  <div>
                    {urgency === 'urgent' && (
                      <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        🔴 {daysRemaining} days left!
                      </span>
                    )}
                    {urgency === 'warning' && (
                      <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        🟠 {daysRemaining} days left
                      </span>
                    )}
                    {urgency === 'normal' && (
                      <span className="text-xs text-slate-600 tabular-nums">
                        🟢 {daysRemaining} days left
                      </span>
                    )}
                    {urgency === 'rolling' && (
                      <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-medium">
                        Year-Round Rolling
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectScheme(scheme)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
