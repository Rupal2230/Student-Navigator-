import React, { useMemo, useState } from 'react';
import {
  AuthUser,
  Language,
  Scheme,
  StudentProfile,
  StudentSchemeTracking,
  StudentStatusOption,
  UserRole
} from './types';
import { TRANSLATIONS } from './data/translations';
import { SCHEMES_DATABASE } from './data/schemesData';
import { matchStudentWithSchemes } from './utils/matchingEngine';
import { Navbar } from './components/Navbar';
import { StudentProfileForm } from './components/StudentProfileForm';
import { PersonalizedSchemeList } from './components/PersonalizedSchemeList';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { WhatAfterThisClass } from './components/WhatAfterThisClass';
import { OpportunityCalendar } from './components/OpportunityCalendar';
import { TeacherCounsellorPortal } from './components/TeacherCounsellorPortal';
import { InstitutionAwarenessReport } from './components/InstitutionAwarenessReport';
import { AuthPage } from './components/AuthPage';
import { ReportOutdatedModal } from './components/ReportOutdatedModal';
import {
  AlertCircle,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  Compass,
  Building2,
  ArrowRight
} from 'lucide-react';

const INITIAL_PROFILE: StudentProfile = {
  name: 'Pooja Sanjay Jadhav',
  age: 17,
  dob: '2008-04-12',
  gender: 'female',
  educationLevel: '11th-12th',
  standardYear: '12th Science (HSC Board)',
  stream: 'science',
  state: 'Maharashtra',
  district: 'Pune',
  isMaharashtraDomicile: true,
  category: 'obc',
  annualIncomeRange: '1l_to_2_5l',
  percentage: 84.5,
  hostelResident: false,
  hasDisability: false,
  firstGenerationLearner: true,
  orphanOrSingleParent: false
};

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('student');
  const [activeTab, setActiveTab] = useState<string>('matches');

  // User Authentication State
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('benefit_navigator_user');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      id: 'usr-student-1',
      name: 'Pooja Sanjay Jadhav',
      email: 'student@school.edu',
      role: 'student',
      institutionName: 'Shivaji Junior College, Pune',
      rollNumber: 'XII-SCI-402',
      department: 'Science (HSC Board)'
    };
  });

  // Student Profile state
  const [profile, setProfile] = useState<StudentProfile>(INITIAL_PROFILE);

  const handleLogin = (user: AuthUser) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('benefit_navigator_user', JSON.stringify(user));
    } catch {
      // ignore
    }
    setRole(user.role);
    if (user.role === 'student' && user.studentProfile) {
      setProfile((prev) => ({
        ...prev,
        ...user.studentProfile,
        name: user.name || prev.name
      }));
    }
  };

  const handleLogout = async () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('benefit_navigator_user');
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      // ignore
    }
    setActiveTab('auth');
  };

  // Status & document checklist tracking per scheme
  const [trackingMap, setTrackingMap] = useState<
    Record<string, StudentSchemeTracking>
  >({
    'post-matric-obc-vjnt': {
      schemeId: 'post-matric-obc-vjnt',
      status: 'need_help',
      readyDocuments: ['doc-domicile', 'doc-income', 'doc-marksheet'],
      lastUpdated: '2026-09-22'
    },
    'savitribai-phule-scholarship': {
      schemeId: 'savitribai-phule-scholarship',
      status: 'preparing',
      readyDocuments: ['doc-bonafide', 'doc-marksheet'],
      lastUpdated: '2026-09-21'
    }
  });

  // Modal states
  const [activeDetailScheme, setActiveDetailScheme] = useState<Scheme | null>(null);
  const [reportingScheme, setReportingScheme] = useState<Scheme | null>(null);

  const t = TRANSLATIONS[language];

  // Calculate live matching results
  const matchResults = useMemo(() => {
    return matchStudentWithSchemes(profile, SCHEMES_DATABASE);
  }, [profile]);

  const matchingCounts = useMemo(() => {
    const likely = matchResults.filter((m) => m.matchType === 'likely').length;
    const check = matchResults.filter((m) => m.matchType === 'check_eligibility').length;
    return { likely, check };
  }, [matchResults]);

  const handleStatusChange = (schemeId: string, status: StudentStatusOption) => {
    setTrackingMap((prev) => ({
      ...prev,
      [schemeId]: {
        schemeId,
        status,
        readyDocuments: prev[schemeId]?.readyDocuments || [],
        lastUpdated: new Date().toISOString().split('T')[0]
      }
    }));
  };

  const handleToggleDocumentReady = (schemeId: string, docId: string) => {
    setTrackingMap((prev) => {
      const existing = prev[schemeId] || {
        schemeId,
        status: 'preparing',
        readyDocuments: [],
        lastUpdated: new Date().toISOString().split('T')[0]
      };

      const docSet = new Set(existing.readyDocuments);
      if (docSet.has(docId)) {
        docSet.delete(docId);
      } else {
        docSet.add(docId);
      }

      return {
        ...prev,
        [schemeId]: {
          ...existing,
          readyDocuments: Array.from(docSet),
          lastUpdated: new Date().toISOString().split('T')[0]
        }
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-800 flex flex-col font-sans">
      {/* Top Disclaimer Notification Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <p className="text-[11px] sm:text-xs">
              <strong>Official Guidance Notice:</strong> {t.disclaimerBanner}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-400 shrink-0">
            <span>MahaDBT · NSP · AICTE Verified</span>
            <span>·</span>
            <span>Ref: Sept 2026</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentLanguage={language}
        onLanguageChange={setLanguage}
        currentRole={role}
        onRoleChange={setRole}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Hero Welcome Banner (Only visible on initial matching tab for clear orientation) */}
      {activeTab === 'matches' && (
        <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Maharashtra Student Opportunity & Benefit Portal</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {t.appTitle}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                  {t.appSubtitle}. Discover scholarships, fee reimbursements, hostel subsidies, and skill stipends matching your education level — before deadlines close.
                </p>

                {/* Core Pillars Unboxed with Bullet Separators */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-700 pt-2">
                  <span className="flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Zero Document Upload Privacy
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-slate-800">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    Proactive Deadline Alerts
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-blue-800">
                    <Users className="w-4 h-4 text-blue-600" />
                    Teacher & Counsellor Desk
                  </span>
                </div>
              </div>

              {/* Quick Summary Pill / Action Card */}
              <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-700 truncate max-w-[180px]">
                    {currentUser ? `Welcome, ${currentUser.name.split(' ')[0]}` : 'Student Portal Active'}
                  </span>
                  <span className="text-emerald-700 font-bold">● Active Intake 2026</span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-slate-600">Currently Matched Opportunities:</div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex-1 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums">
                        {matchingCounts.likely}
                      </div>
                      <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                        Likely Matches
                      </div>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex-1 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-amber-800 tabular-nums">
                        {matchingCounts.check}
                      </div>
                      <div className="text-[11px] text-amber-700 font-semibold mt-0.5">
                        Verify Conditions
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const formElement = document.getElementById('student-profile-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Edit Student Criteria</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main App Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* TAB 1: Profile & Personalized Scheme Matches */}
        {activeTab === 'matches' && (
          <div className="space-y-8">
            <div id="student-profile-form">
              <StudentProfileForm
                profile={profile}
                onProfileChange={setProfile}
                language={language}
                matchingCount={matchingCounts}
              />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {t.matchingSummary}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Recommendations are generated deterministically based on your education level, income slab, category, and domicile.
                  </p>
                </div>
              </div>

              <PersonalizedSchemeList
                matchResults={matchResults}
                language={language}
                profile={profile}
                trackingMap={trackingMap}
                onStatusChange={handleStatusChange}
                onOpenSchemeModal={setActiveDetailScheme}
                onReportOutdated={setReportingScheme}
              />
            </div>
          </div>
        )}

        {/* TAB 2: What After This Class? */}
        {activeTab === 'after-class' && (
          <WhatAfterThisClass
            language={language}
            onSelectScheme={setActiveDetailScheme}
          />
        )}

        {/* TAB 3: Opportunity Calendar & Deadline Alerts */}
        {activeTab === 'calendar' && (
          <OpportunityCalendar
            language={language}
            onSelectScheme={setActiveDetailScheme}
          />
        )}

        {/* TAB 4: Teacher / Counsellor Portal */}
        {activeTab === 'counsellor' && (
          <TeacherCounsellorPortal language={language} />
        )}

        {/* TAB 5: School / College Awareness Report */}
        {activeTab === 'institution' && (
          <InstitutionAwarenessReport language={language} />
        )}

        {/* TAB 6: Login / Logout / Sign Up Page */}
        {activeTab === 'auth' && (
          <AuthPage
            language={language}
            currentUser={currentUser}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onNavigateToTab={setActiveTab}
          />
        )}
      </main>

      {/* Scheme Detail & Document Checklist Modal */}
      <SchemeDetailModal
        scheme={activeDetailScheme}
        onClose={() => setActiveDetailScheme(null)}
        language={language}
        tracking={activeDetailScheme ? trackingMap[activeDetailScheme.id] : undefined}
        onToggleDocumentReady={handleToggleDocumentReady}
        onStatusChange={handleStatusChange}
        onReportOutdated={(scheme) => {
          setActiveDetailScheme(null);
          setReportingScheme(scheme);
        }}
      />

      {/* Report Outdated Information Modal */}
      <ReportOutdatedModal
        scheme={reportingScheme}
        onClose={() => setReportingScheme(null)}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <GraduationCap className="w-5 h-5 text-amber-500" />
                <span>{t.appTitle}</span>
              </div>
              <p className="text-slate-400 text-xs max-w-md leading-relaxed">
                Empowering students, teachers, and institutions across Maharashtra with transparent, timely government scheme navigation, document preparation checklists, and proactive deadline reminders.
              </p>
              <div className="pt-2 text-[11px] text-emerald-400 font-medium">
                Zero Document Upload · Privacy Guaranteed · Student-Controlled
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold uppercase tracking-wider text-xs">
                Official Portals
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <a
                    href="https://mahadbt.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    MahaDBT Portal (Maharashtra) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://scholarships.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    National Scholarship Portal (NSP) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.aicte-india.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    AICTE Central Portal ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://aaplesarkar.mahaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Aaple Sarkar (Certificates) ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-semibold uppercase tracking-wider text-xs">
                Platform Navigation
              </div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveTab('matches')}
                    className="hover:text-white transition-colors"
                  >
                    {t.tabProfileAndMatches}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('after-class')}
                    className="hover:text-white transition-colors"
                  >
                    {t.tabAfterClass}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('calendar')}
                    className="hover:text-white transition-colors"
                  >
                    {t.tabCalendar}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setRole('counsellor');
                      setActiveTab('counsellor');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {t.tabCounsellor}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setRole('institution');
                      setActiveTab('institution');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {t.tabInstitutionReport}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('system-arch')}
                    className="hover:text-white transition-colors"
                  >
                    {t.tabSystemArch}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              Disclaimer: This platform is an educational guidance system and is NOT an official government website. Final sanction and disbursal are subject to verification by the respective government departments.
            </div>
            <div className="shrink-0">
              Built for Maharashtra Schools & Colleges · 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
