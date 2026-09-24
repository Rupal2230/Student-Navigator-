import React, { useState } from 'react';
import { AuthUser, Language, UserRole, EducationLevel, Stream, SocialCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  GraduationCap,
  Users,
  Building2,
  LogIn,
  UserPlus,
  Lock,
  Mail,
  User,
  School,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  LogOut,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface AuthPageProps {
  language: Language;
  currentUser: AuthUser | null;
  onLogin: (user: AuthUser) => void;
  onLogout: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  language,
  currentUser,
  onLogin,
  onLogout,
  onNavigateToTab
}) => {
  const t = TRANSLATIONS[language];
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Sign In Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up Form State
  const [signUpRole, setSignUpRole] = useState<UserRole>('student');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');

  // Role-Specific Fields
  const [studentEduLevel, setStudentEduLevel] = useState<EducationLevel>('11th-12th');
  const [studentStandard, setStudentStandard] = useState('12th Standard');
  const [studentStream, setStudentStream] = useState<Stream>('science');
  const [studentCategory, setStudentCategory] = useState<SocialCategory>('obc');
  const [studentDistrict, setStudentDistrict] = useState('Pune');
  const [institutionName, setInstitutionName] = useState('');
  const [department, setDepartment] = useState('');
  const [identifierCode, setIdentifierCode] = useState('');

  // Quick Demo Logins
  const DEMO_ACCOUNTS = [
    {
      role: 'student' as UserRole,
      title: 'Student Demo',
      subtitle: 'Pooja Sanjay Jadhav (12th Science)',
      email: 'student@school.edu',
      password: 'password123',
      icon: GraduationCap,
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      role: 'counsellor' as UserRole,
      title: 'Teacher / Counsellor Demo',
      subtitle: 'Prof. Sachin Kulkarni (Guidance Cell)',
      email: 'teacher@school.edu',
      password: 'password123',
      icon: Users,
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      role: 'institution' as UserRole,
      title: 'School / College Admin Demo',
      subtitle: 'Dr. Anand Deshmukh (Principal)',
      email: 'college@institution.edu',
      password: 'password123',
      icon: Building2,
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
    }
  ];

  const handleDemoLogin = async (email: string, pass: string) => {
    setLoginEmail(email);
    setLoginPassword(pass);
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass })
      });
      const data = await res.json();

      if (data.success && data.user) {
        setSuccessMessage(`Signed in as ${data.user.name}`);
        onLogin(data.user);
        setTimeout(() => {
          if (data.user.role === 'counsellor') {
            onNavigateToTab('counsellor');
          } else if (data.user.role === 'institution') {
            onNavigateToTab('institution');
          } else {
            onNavigateToTab('matches');
          }
        }, 600);
      } else {
        // Fallback demo user if backend endpoint is unavailable
        fallbackDemoLogin(email);
      }
    } catch {
      fallbackDemoLogin(email);
    } finally {
      setIsLoading(false);
    }
  };

  const fallbackDemoLogin = (email: string) => {
    let fallbackUser: AuthUser;
    if (email === 'teacher@school.edu') {
      fallbackUser = {
        id: 'usr-teacher-1',
        name: 'Prof. Sachin Kulkarni',
        email: 'teacher@school.edu',
        role: 'counsellor',
        institutionName: 'Shivaji Junior College, Pune',
        department: 'Scholarship Guidance Cell',
        rollNumber: 'EMP-7801'
      };
      onLogin(fallbackUser);
      onNavigateToTab('counsellor');
    } else if (email === 'college@institution.edu') {
      fallbackUser = {
        id: 'usr-college-1',
        name: 'Dr. Anand Deshmukh (Principal)',
        email: 'college@institution.edu',
        role: 'institution',
        institutionName: 'Government Polytechnic, Pune',
        rollNumber: 'AISHE-C-34190'
      };
      onLogin(fallbackUser);
      onNavigateToTab('institution');
    } else {
      fallbackUser = {
        id: 'usr-student-1',
        name: 'Pooja Sanjay Jadhav',
        email: 'student@school.edu',
        role: 'student',
        institutionName: 'Shivaji Junior College, Pune',
        rollNumber: 'XII-SCI-402'
      };
      onLogin(fallbackUser);
      onNavigateToTab('matches');
    }
  };

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!loginEmail.trim() || !loginPassword) {
      setErrorMessage('Please enter both your email address and password.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail.trim(), password: loginPassword })
      });
      const data = await res.json();

      if (res.ok && data.success && data.user) {
        setSuccessMessage(`Welcome back, ${data.user.name}!`);
        onLogin(data.user);
        setTimeout(() => {
          if (data.user.role === 'counsellor') {
            onNavigateToTab('counsellor');
          } else if (data.user.role === 'institution') {
            onNavigateToTab('institution');
          } else {
            onNavigateToTab('matches');
          }
        }, 500);
      } else {
        setErrorMessage(data.message || 'Invalid email or password. Please try again.');
      }
    } catch {
      // Local fallback check
      if (loginEmail === 'student@school.edu' && loginPassword === 'password123') {
        fallbackDemoLogin(loginEmail);
      } else {
        setErrorMessage('Unable to reach authentication server. Try a demo account or check network.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!signUpName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!signUpEmail.trim() || !signUpEmail.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (signUpPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (signUpPassword !== signUpConfirmPassword) {
      setErrorMessage('Passwords do not match. Please re-check.');
      return;
    }

    setIsLoading(true);

    const payload = {
      name: signUpName.trim(),
      email: signUpEmail.trim().toLowerCase(),
      password: signUpPassword,
      role: signUpRole,
      institutionName: institutionName.trim() || 'Maharashtra Educational Institution',
      department: department.trim() || (signUpRole === 'student' ? studentStream : 'General'),
      rollNumber: identifierCode.trim() || `ID-${Math.floor(1000 + Math.random() * 9000)}`,
      studentProfile:
        signUpRole === 'student'
          ? {
              name: signUpName.trim(),
              age: 17,
              dob: '2008-01-01',
              gender: 'male' as const,
              educationLevel: studentEduLevel,
              standardYear: studentStandard,
              stream: studentStream,
              state: 'Maharashtra',
              district: studentDistrict,
              isMaharashtraDomicile: true,
              category: studentCategory,
              annualIncomeRange: '1l_to_2_5l' as const,
              percentage: 80.0,
              hostelResident: false,
              hasDisability: false,
              firstGenerationLearner: false,
              orphanOrSingleParent: false
            }
          : undefined
    };

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (res.ok && data.success && data.user) {
        setSuccessMessage('Account created successfully! Redirecting...');
        onLogin(data.user);
        setTimeout(() => {
          if (data.user.role === 'counsellor') {
            onNavigateToTab('counsellor');
          } else if (data.user.role === 'institution') {
            onNavigateToTab('institution');
          } else {
            onNavigateToTab('matches');
          }
        }, 600);
      } else {
        setErrorMessage(data.message || 'Registration failed. Please try a different email.');
      }
    } catch {
      // Local fallback user creation
      const localUser: AuthUser = {
        id: `usr-${Date.now()}`,
        name: signUpName.trim(),
        email: signUpEmail.trim().toLowerCase(),
        role: signUpRole,
        institutionName: institutionName || 'Maharashtra Educational Institution',
        rollNumber: identifierCode || 'REG-1001',
        department: department || studentStream
      };
      setSuccessMessage('Account created locally! Welcome aboard.');
      onLogin(localUser);
      setTimeout(() => {
        onNavigateToTab(signUpRole === 'student' ? 'matches' : signUpRole);
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  // IF USER IS CURRENTLY LOGGED IN
  if (currentUser) {
    const roleIcon =
      currentUser.role === 'student'
        ? GraduationCap
        : currentUser.role === 'counsellor'
        ? Users
        : Building2;
    const Icon = roleIcon;

    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl shadow-xs">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-1">
                  Active Session · {currentUser.role}
                </span>
                <h1 className="text-2xl font-bold text-slate-900">{currentUser.name}</h1>
                <p className="text-xs text-slate-500">{currentUser.email}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.btnLogout || 'Log Out'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 block mb-0.5">Assigned Institution</span>
              <span className="font-semibold text-slate-800">
                {currentUser.institutionName || 'Maharashtra Education Board'}
              </span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 block mb-0.5">Role / Designation</span>
              <span className="font-semibold text-slate-800 capitalize">
                {currentUser.role === 'student'
                  ? 'Student (Candidate)'
                  : currentUser.role === 'counsellor'
                  ? 'Teacher / Guidance Officer'
                  : 'School / College Principal'}
              </span>
            </div>
            {currentUser.rollNumber && (
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 block mb-0.5">Identifier / Roll No</span>
                <span className="font-semibold text-slate-800">{currentUser.rollNumber}</span>
              </div>
            )}
            {currentUser.department && (
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="text-slate-400 block mb-0.5">Department / Stream</span>
                <span className="font-semibold text-slate-800">{currentUser.department}</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <strong>Zero-Document Upload Security:</strong> Your credentials authorize access to personalized scheme criteria and counselling status. Original government certificates and identity cards are never stored or requested on this platform.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {currentUser.role === 'student' && (
              <button
                onClick={() => onNavigateToTab('matches')}
                className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Go to My Scheme Matches</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {currentUser.role === 'counsellor' && (
              <button
                onClick={() => onNavigateToTab('counsellor')}
                className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Go to Teacher Guidance Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {currentUser.role === 'institution' && (
              <button
                onClick={() => onNavigateToTab('institution')}
                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Go to College Awareness Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onLogout}
              className="py-3 px-5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Sign In with Different Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 space-y-6">
      {/* Header Banner */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Student Opportunity & Benefit Access Portal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {authMode === 'signin' ? 'Sign In to Your Account' : 'Register New Account'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Connect as a Student, Teacher/Counsellor, or School/College to manage eligibility matching and guidance.
        </p>
      </div>

      {/* Quick Demo Credentials Panel */}
      <div className="bg-gradient-to-r from-amber-50/70 via-slate-50 to-emerald-50/70 rounded-2xl border border-amber-200/60 p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              One-Click Instant Demo Login
            </span>
          </div>
          <span className="text-[11px] text-slate-500">Click any role to test immediately</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {DEMO_ACCOUNTS.map((demo) => {
            const Icon = demo.icon;
            return (
              <button
                key={demo.role}
                type="button"
                onClick={() => handleDemoLogin(demo.email, demo.password)}
                className="text-left bg-white hover:bg-amber-50/50 p-3.5 rounded-xl border border-slate-200 hover:border-amber-400 transition-all shadow-2xs group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-amber-100 text-slate-700 group-hover:text-amber-900 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-amber-900">
                    {demo.title}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 truncate">{demo.subtitle}</div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-100 pt-1.5">
                  <span>{demo.email}</span>
                  <span className="text-amber-600 font-semibold group-hover:underline">Login →</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Tab Toggle: Sign In vs Sign Up */}
        <div className="flex border-b border-slate-200 bg-slate-50/80">
          <button
            type="button"
            onClick={() => {
              setAuthMode('signin');
              setErrorMessage(null);
            }}
            className={`flex-1 py-3.5 px-4 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              authMode === 'signin'
                ? 'bg-white text-slate-900 border-b-2 border-amber-500 shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In (लॉगिन)</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthMode('signup');
              setErrorMessage(null);
            }}
            className={`flex-1 py-3.5 px-4 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              authMode === 'signup'
                ? 'bg-white text-slate-900 border-b-2 border-amber-500 shadow-2xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Create Account (नवीन नोंदणी)</span>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {/* Notifications */}
          {errorMessage && (
            <div className="mb-5 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-xs text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* SIGN IN FORM */}
          {authMode === 'signin' && (
            <form onSubmit={handleSignInSubmit} className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address / ईमेल
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="student@school.edu"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password / पासवर्ड
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 text-slate-950" />
                      <span>{t.btnSignIn || 'Sign In'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Don't have an account yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signup');
                      setErrorMessage(null);
                    }}
                    className="text-amber-700 font-bold hover:underline cursor-pointer"
                  >
                    Create Account here
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* SIGN UP FORM */}
          {authMode === 'signup' && (
            <form onSubmit={handleSignUpSubmit} className="space-y-5">
              {/* Step 1: Role Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  1. Select Your Role / तुमची भूमिका निवडा:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      role: 'student' as UserRole,
                      title: 'Student (विद्यार्थी)',
                      desc: 'Apply for scholarships & track benefits',
                      icon: GraduationCap
                    },
                    {
                      role: 'counsellor' as UserRole,
                      title: 'Teacher / Counsellor (शिक्षक)',
                      desc: 'Guide students and track deadlines',
                      icon: Users
                    },
                    {
                      role: 'institution' as UserRole,
                      title: 'School / College Admin (संस्था)',
                      desc: 'Cohort analysis and intake reporting',
                      icon: Building2
                    }
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = signUpRole === item.role;
                    return (
                      <button
                        key={item.role}
                        type="button"
                        onClick={() => setSignUpRole(item.role)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                          isSelected
                            ? 'bg-amber-50/70 border-amber-500 ring-2 ring-amber-400/40'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-amber-500 text-slate-950 font-bold'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.title}</div>
                          <div className="text-[11px] text-slate-500">{item.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Account Details */}
              <div className="border-t border-slate-100 pt-4">
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  2. Account Information / वैयक्तिक माहिती:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={signUpName}
                        onChange={(e) => setSignUpName(e.target.value)}
                        placeholder="e.g. Pooja Sanjay Jadhav"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        placeholder="e.g. student@college.edu"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Password (min. 6 chars) *</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="password"
                        required
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Confirm Password *</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="password"
                        required
                        value={signUpConfirmPassword}
                        onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Role-Specific Fields */}
              <div className="border-t border-slate-100 pt-4">
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  3. {signUpRole === 'student' ? 'Academic & Eligibility Details' : 'Institution Details'}:
                </label>

                {signUpRole === 'student' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-600 mb-1">Education Level</label>
                      <select
                        value={studentEduLevel}
                        onChange={(e) => setStudentEduLevel(e.target.value as EducationLevel)}
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      >
                        <option value="10th">10th Standard (SSC)</option>
                        <option value="11th-12th">11th-12th (HSC)</option>
                        <option value="diploma">Polytechnic Diploma</option>
                        <option value="iti">ITI / Vocational</option>
                        <option value="degree">Undergraduate Degree</option>
                        <option value="postgraduate">Postgraduate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-1">Current Stream</label>
                      <select
                        value={studentStream}
                        onChange={(e) => setStudentStream(e.target.value as Stream)}
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      >
                        <option value="science">Science</option>
                        <option value="arts">Arts</option>
                        <option value="commerce">Commerce</option>
                        <option value="engineering">Engineering</option>
                        <option value="medical">Medical / Health</option>
                        <option value="vocational">Vocational</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-1">Social Category</label>
                      <select
                        value={studentCategory}
                        onChange={(e) => setStudentCategory(e.target.value as SocialCategory)}
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      >
                        <option value="open">Open / General</option>
                        <option value="obc">OBC</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="vjnt">VJNT</option>
                        <option value="ews">EWS</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-600 mb-1">District (Maharashtra)</label>
                      <input
                        type="text"
                        value={studentDistrict}
                        onChange={(e) => setStudentDistrict(e.target.value)}
                        placeholder="Pune"
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-slate-600 mb-1">College / School Name</label>
                      <input
                        type="text"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="e.g. Government Junior College, Pune"
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      />
                    </div>
                  </div>
                )}

                {signUpRole === 'counsellor' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-slate-600 mb-1">School / College Name *</label>
                      <input
                        type="text"
                        required
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="e.g. Shivaji Polytechnic & Junior College"
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-600 mb-1">Department / Cell</label>
                      <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="e.g. Scholarship Guidance Cell"
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      />
                    </div>
                  </div>
                )}

                {signUpRole === 'institution' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-slate-600 mb-1">Official Institution Name *</label>
                      <input
                        type="text"
                        required
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        placeholder="e.g. Government Polytechnic, Pune"
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-600 mb-1">AISHE / U-DISE Code</label>
                      <input
                        type="text"
                        value={identifierCode}
                        onChange={(e) => setIdentifierCode(e.target.value)}
                        placeholder="e.g. C-34190"
                        className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Privacy Notice */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Document Upload: We never request or store original certificates or identity proofs.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Registering Account...</span>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4 text-amber-400" />
                      <span>{t.btnSignUp || 'Complete Registration'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signin');
                      setErrorMessage(null);
                    }}
                    className="text-amber-700 font-bold hover:underline cursor-pointer"
                  >
                    Sign In here
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
