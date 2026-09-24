import React, { useState } from 'react';
import { CounsellorStudentItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { INITIAL_COUNSELLOR_STUDENTS } from '../data/fieldSurveyData';
import {
  UserCheck,
  AlertCircle,
  Clock,
  PhoneCall,
  FileCheck,
  Search,
  Filter,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  X
} from 'lucide-react';

interface TeacherCounsellorPortalProps {
  language: Language;
}

export const TeacherCounsellorPortal: React.FC<TeacherCounsellorPortalProps> = ({
  language
}) => {
  const t = TRANSLATIONS[language];
  const [students, setStudents] = useState<CounsellorStudentItem[]>(
    INITIAL_COUNSELLOR_STUDENTS
  );
  const [urgencyFilter, setUrgencyFilter] = useState<'all' | 'urgent' | 'warning' | 'normal'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'need_help' | 'preparing' | 'applied'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected student for guidance modal
  const [activeGuidanceStudent, setActiveGuidanceStudent] = useState<CounsellorStudentItem | null>(null);
  const [guidanceActionType, setGuidanceActionType] = useState<
    'guidance_given' | 'documents_assisted' | 'parent_contacted' | 'resolved'
  >('guidance_given');
  const [guidanceNoteText, setGuidanceNoteText] = useState('');
  const [notificationToast, setNotificationToast] = useState<string | null>(null);

  // Auto-calculated urgency counts
  const urgentCount = students.filter((s) => s.urgency === 'urgent').length;
  const warningCount = students.filter((s) => s.urgency === 'warning').length;
  const normalCount = students.filter((s) => s.urgency === 'normal').length;

  const filteredStudents = students.filter((s) => {
    if (urgencyFilter !== 'all' && s.urgency !== urgencyFilter) return false;
    if (statusFilter !== 'all' && s.studentReportedStatus !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        s.studentName.toLowerCase().includes(q) ||
        s.rollNumber.toLowerCase().includes(q) ||
        s.matchedSchemeTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleOpenGuidanceModal = (student: CounsellorStudentItem) => {
    setActiveGuidanceStudent(student);
    setGuidanceNoteText(student.counsellorNotes || '');
  };

  const handleSaveGuidance = () => {
    if (!activeGuidanceStudent) return;
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === activeGuidanceStudent.id) {
          return {
            ...s,
            counsellorStatus: guidanceActionType,
            counsellorNotes: guidanceNoteText,
            lastFollowUpDate: '2026-09-23'
          };
        }
        return s;
      })
    );
    setActiveGuidanceStudent(null);
    setNotificationToast(`Action logged for ${activeGuidanceStudent.studentName}`);
    setTimeout(() => setNotificationToast(null), 3000);
  };

  const handleSendReminderAlert = (student: CounsellorStudentItem) => {
    setNotificationToast(
      `🔔 Urgent reminder dispatched to ${student.studentName} for ${student.matchedSchemeTitle}!`
    );
    setTimeout(() => setNotificationToast(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Toast alert */}
      {notificationToast && (
        <div className="p-3 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-lg border border-amber-400/30 flex items-center justify-between animate-fade-in">
          <span>{notificationToast}</span>
          <button
            onClick={() => setNotificationToast(null)}
            className="text-slate-400 hover:text-white"
          >
            ×
          </button>
        </div>
      )}

      {/* Header & Role Context */}
      <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 mb-1">
            <UserCheck className="w-5 h-5 text-amber-700" />
            <span className="text-xs font-bold uppercase tracking-wider">
              {t.counsellorTitle}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Intelligent Triage & Student Follow-Up Desk
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            {t.counsellorSubtitle}
          </p>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 max-w-xs">
          <strong>Workload Prioritization:</strong> Focus on students with approaching deadlines (&lt;= 3 days) or marked with <em>"Need Help"</em>.
        </div>
      </div>

      {/* Auto-Prioritized Urgency Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Red Tier: <= 3 Days */}
        <div
          onClick={() => setUrgencyFilter(urgencyFilter === 'urgent' ? 'all' : 'urgent')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            urgencyFilter === 'urgent'
              ? 'bg-red-50 border-red-400 ring-2 ring-red-400'
              : 'bg-white border-slate-200 hover:border-red-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-red-900 flex items-center gap-1.5">
              🔴 Urgent Attention
            </span>
            <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded tabular-nums">
              &lt;= 3 Days
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            {urgentCount} Students
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Highest priority: Requires immediate desk guidance or certificate token review.
          </p>
        </div>

        {/* Orange Tier: 4-7 Days */}
        <div
          onClick={() => setUrgencyFilter(urgencyFilter === 'warning' ? 'all' : 'warning')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            urgencyFilter === 'warning'
              ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400'
              : 'bg-white border-slate-200 hover:border-amber-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              🟠 Approaching Soon
            </span>
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded tabular-nums">
              4 – 7 Days
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            {warningCount} Students
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Ensure students have bonafide letters & bank mapping done.
          </p>
        </div>

        {/* Green Tier: Later */}
        <div
          onClick={() => setUrgencyFilter(urgencyFilter === 'normal' ? 'all' : 'normal')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            urgencyFilter === 'normal'
              ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-400'
              : 'bg-white border-slate-200 hover:border-emerald-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
              🟢 On Track / Later
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded tabular-nums">
              Later
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            {normalCount} Students
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Standard monitoring. No immediate deadline pressure.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search student, roll number, or scheme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg font-medium"
          >
            <option value="all">All Student Statuses</option>
            <option value="need_help">🆘 Need Help / Guidance</option>
            <option value="preparing">📋 Preparing Documents</option>
            <option value="applied">✅ Applied via Official Portal</option>
          </select>
        </div>

        <div className="text-slate-500 font-medium">
          Showing <span className="tabular-nums font-semibold text-slate-800">{filteredStudents.length}</span> students
        </div>
      </div>

      {/* Student List Data Grid */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">{t.colStudent}</th>
                <th className="py-3 px-4">{t.colClass}</th>
                <th className="py-3 px-4">{t.colScheme}</th>
                <th className="py-3 px-4">{t.colDeadline}</th>
                <th className="py-3 px-4">{t.colStudentStatus}</th>
                <th className="py-3 px-4">Counsellor Status</th>
                <th className="py-3 px-4 text-right">{t.colAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-500">
                    No students match the current filter criteria.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                    {/* Student & Roll */}
                    <td className="py-3 px-4 font-medium text-slate-900">
                      <div className="font-bold text-slate-900">{s.studentName}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{s.rollNumber}</div>
                    </td>

                    {/* Class & Category */}
                    <td className="py-3 px-4 text-slate-700">
                      <div>{s.educationLevel}</div>
                      <div className="text-[11px] text-slate-500">Category: {s.category}</div>
                    </td>

                    {/* Target Scheme */}
                    <td className="py-3 px-4 text-slate-800 max-w-xs">
                      <div className="font-semibold line-clamp-1">{s.matchedSchemeTitle}</div>
                      {s.counsellorNotes && (
                        <div className="text-[11px] text-slate-500 line-clamp-1 italic mt-0.5">
                          Note: "{s.counsellorNotes}"
                        </div>
                      )}
                    </td>

                    {/* Deadline urgency */}
                    <td className="py-3 px-4 tabular-nums">
                      <div className="font-semibold text-slate-900">{s.deadline}</div>
                      {s.urgency === 'urgent' && (
                        <span className="text-red-700 font-bold text-[11px] bg-red-100 px-1.5 py-0.5 rounded">
                          🔴 {s.daysRemaining} days remaining
                        </span>
                      )}
                      {s.urgency === 'warning' && (
                        <span className="text-amber-800 font-semibold text-[11px] bg-amber-100 px-1.5 py-0.5 rounded">
                          🟠 {s.daysRemaining} days remaining
                        </span>
                      )}
                      {s.urgency === 'normal' && (
                        <span className="text-slate-600 text-[11px]">
                          🟢 {s.daysRemaining} days remaining
                        </span>
                      )}
                    </td>

                    {/* Student Status */}
                    <td className="py-3 px-4">
                      {s.studentReportedStatus === 'need_help' && (
                        <span className="px-2 py-1 rounded bg-red-50 text-red-700 font-semibold border border-red-200 inline-block">
                          🆘 Need Help
                        </span>
                      )}
                      {s.studentReportedStatus === 'preparing' && (
                        <span className="px-2 py-1 rounded bg-amber-50 text-amber-800 font-medium border border-amber-200 inline-block">
                          📋 Preparing Docs
                        </span>
                      )}
                      {s.studentReportedStatus === 'applied' && (
                        <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 inline-block">
                          ✅ Applied on Portal
                        </span>
                      )}
                    </td>

                    {/* Counsellor Followup Status */}
                    <td className="py-3 px-4">
                      {s.counsellorStatus === 'pending' && (
                        <span className="text-slate-500 font-medium">Pending Follow-up</span>
                      )}
                      {s.counsellorStatus === 'guidance_given' && (
                        <span className="text-blue-700 font-semibold">Guidance Given</span>
                      )}
                      {s.counsellorStatus === 'documents_assisted' && (
                        <span className="text-amber-800 font-semibold">Document Assist</span>
                      )}
                      {s.counsellorStatus === 'parent_contacted' && (
                        <span className="text-purple-700 font-semibold">Parent Contacted</span>
                      )}
                      {s.counsellorStatus === 'resolved' && (
                        <span className="text-emerald-700 font-bold">Resolved ✓</span>
                      )}
                      {s.lastFollowUpDate && (
                        <div className="text-[10px] text-slate-400">on {s.lastFollowUpDate}</div>
                      )}
                    </td>

                    {/* Action buttons */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleSendReminderAlert(s)}
                          className="p-1.5 text-slate-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                          title="Send Urgent Reminder to Student"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleOpenGuidanceModal(s)}
                          className="px-2.5 py-1 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors cursor-pointer"
                        >
                          {t.btnProvideGuidance}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guidance Log Modal */}
      {activeGuidanceStudent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm">
                Log Guidance: {activeGuidanceStudent.studentName}
              </h3>
              <button
                onClick={() => setActiveGuidanceStudent(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-5 space-y-4 text-xs text-slate-800">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div><strong>Target Scheme:</strong> {activeGuidanceStudent.matchedSchemeTitle}</div>
                <div><strong>Deadline:</strong> {activeGuidanceStudent.deadline} ({activeGuidanceStudent.daysRemaining} days left)</div>
                <div><strong>Student Status:</strong> {activeGuidanceStudent.studentReportedStatus}</div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Counsellor Action Taken:</label>
                <select
                  value={guidanceActionType}
                  onChange={(e) => setGuidanceActionType(e.target.value as any)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg font-medium"
                >
                  <option value="guidance_given">Informed student & explained eligibility rules</option>
                  <option value="documents_assisted">Assisted in drafting Tahsildar / Setu Kendra application</option>
                  <option value="parent_contacted">Called parent / guardian regarding certificate timeline</option>
                  <option value="resolved">Issue resolved; application submitted on official portal</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Guidance Notes & Next Steps:</label>
                <textarea
                  rows={3}
                  value={guidanceNoteText}
                  onChange={(e) => setGuidanceNoteText(e.target.value)}
                  placeholder="e.g. Student informed to collect non-creamy layer token from Setu Kendra by Friday..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2 text-xs">
              <button
                type="button"
                onClick={() => setActiveGuidanceStudent(null)}
                className="px-3.5 py-1.5 font-medium text-slate-600 hover:bg-slate-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveGuidance}
                className="px-4 py-1.5 font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
              >
                {t.saveNotes}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
