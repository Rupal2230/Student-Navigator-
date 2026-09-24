import React from 'react';
import { AuthUser, Language, UserRole } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { GraduationCap, LogIn, LogOut, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  currentUser: AuthUser | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  currentRole,
  onRoleChange,
  activeTab,
  onTabChange,
  currentUser,
  onLogout
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Zone 1: Wordmark Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
              <GraduationCap className="w-5 h-5 text-slate-950" />
            </div>
            <button
              onClick={() => onTabChange('matches')}
              className="text-left font-bold text-slate-900 text-sm sm:text-base md:text-lg tracking-tight hover:text-amber-700 transition-colors cursor-pointer"
            >
              {t.appTitle}
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600">
            <button
              onClick={() => onTabChange('matches')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'matches'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.tabProfileAndMatches}
            </button>

            <button
              onClick={() => onTabChange('after-class')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'after-class'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.tabAfterClass}
            </button>

            <button
              onClick={() => onTabChange('calendar')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.tabCalendar}
            </button>

            <button
              onClick={() => {
                onRoleChange('counsellor');
                onTabChange('counsellor');
              }}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'counsellor'
                  ? 'bg-amber-50 text-amber-900 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.tabCounsellor}
            </button>

            <button
              onClick={() => {
                onRoleChange('institution');
                onTabChange('institution');
              }}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'institution'
                  ? 'bg-blue-50 text-blue-900 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.tabInstitutionReport}
            </button>
          </nav>

          {/* Zone 3: Language, Role & Auth controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  currentLanguage === 'en'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  currentLanguage === 'hi'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="हिन्दी"
              >
                हिं
              </button>
              <button
                onClick={() => onLanguageChange('mr')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  currentLanguage === 'mr'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="मराठी"
              >
                मरा
              </button>
            </div>

            {/* Quick Role Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1.5 rounded-lg text-xs font-medium">
              <span className="text-amber-700">Role:</span>
              <select
                value={currentRole}
                onChange={(e) => {
                  const newRole = e.target.value as UserRole;
                  onRoleChange(newRole);
                  if (newRole === 'student') onTabChange('matches');
                  if (newRole === 'counsellor') onTabChange('counsellor');
                  if (newRole === 'institution') onTabChange('institution');
                }}
                className="bg-transparent font-semibold text-amber-950 focus:outline-hidden cursor-pointer"
              >
                <option value="student">{t.roleStudent}</option>
                <option value="counsellor">{t.roleCounsellor}</option>
                <option value="institution">{t.roleInstitution}</option>
              </select>
            </div>

            {/* User Session / Login Button */}
            {currentUser ? (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onTabChange('auth')}
                  title="View Account Profile"
                  className={`flex items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-lg border transition-colors cursor-pointer text-xs ${
                    activeTab === 'auth'
                      ? 'bg-amber-100 border-amber-300 text-amber-950 font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-semibold max-w-[90px] sm:max-w-[130px] truncate">
                    {currentUser.name}
                  </span>
                  <span className="hidden md:inline px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-white text-slate-600 border border-slate-200">
                    {currentUser.role}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={onLogout}
                  title="Log out of session"
                  className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-rose-200"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onTabChange('auth')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                  activeTab === 'auth'
                    ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{t.tabAuth || 'Sign In / Register'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between py-2 border-t border-slate-100 overflow-x-auto gap-2 text-xs">
          <button
            onClick={() => onTabChange('matches')}
            className={`px-2.5 py-1 rounded whitespace-nowrap cursor-pointer ${
              activeTab === 'matches' ? 'bg-slate-900 text-white font-medium' : 'text-slate-600'
            }`}
          >
            {t.tabProfileAndMatches}
          </button>
          <button
            onClick={() => onTabChange('after-class')}
            className={`px-2.5 py-1 rounded whitespace-nowrap cursor-pointer ${
              activeTab === 'after-class' ? 'bg-slate-900 text-white font-medium' : 'text-slate-600'
            }`}
          >
            {t.tabAfterClass}
          </button>
          <button
            onClick={() => onTabChange('calendar')}
            className={`px-2.5 py-1 rounded whitespace-nowrap cursor-pointer ${
              activeTab === 'calendar' ? 'bg-slate-900 text-white font-medium' : 'text-slate-600'
            }`}
          >
            {t.tabCalendar}
          </button>
          <button
            onClick={() => {
              onRoleChange('counsellor');
              onTabChange('counsellor');
            }}
            className={`px-2.5 py-1 rounded whitespace-nowrap cursor-pointer ${
              activeTab === 'counsellor' ? 'bg-amber-600 text-white font-medium' : 'text-slate-600'
            }`}
          >
            {t.tabCounsellor}
          </button>
          <button
            onClick={() => {
              onRoleChange('institution');
              onTabChange('institution');
            }}
            className={`px-2.5 py-1 rounded whitespace-nowrap cursor-pointer ${
              activeTab === 'institution' ? 'bg-blue-600 text-white font-medium' : 'text-slate-600'
            }`}
          >
            {t.tabInstitutionReport}
          </button>
          <button
            onClick={() => onTabChange('auth')}
            className={`px-2.5 py-1 rounded whitespace-nowrap cursor-pointer ${
              activeTab === 'auth' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-amber-800 bg-amber-50'
            }`}
          >
            {currentUser ? `Account (${currentUser.name.split(' ')[0]})` : 'Sign In'}
          </button>
        </div>
      </div>
    </header>
  );
};
