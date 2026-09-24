export type Language = 'en' | 'hi' | 'mr';

export type UserRole = 'student' | 'counsellor' | 'institution';

export type EducationLevel =
  | '10th'
  | '11th-12th'
  | 'diploma'
  | 'iti'
  | 'degree'
  | 'postgraduate';

export type Stream =
  | 'general'
  | 'arts'
  | 'commerce'
  | 'science'
  | 'engineering'
  | 'medical'
  | 'vocational';

export type SocialCategory =
  | 'open'
  | 'obc'
  | 'sc'
  | 'st'
  | 'vjnt'
  | 'sbc'
  | 'ews'
  | 'minority';

export type IncomeRange =
  | 'below_1l'
  | '1l_to_2_5l'
  | '2_5l_to_8l'
  | 'above_8l';

export type StudentStatusOption = 'interested' | 'preparing' | 'applied' | 'need_help';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  institutionName?: string;
  rollNumber?: string;
  department?: string;
  studentProfile?: Partial<StudentProfile>;
  createdAt?: string;
}

export interface StudentProfile {
  name: string;
  age: number;
  dob: string;
  gender: 'male' | 'female' | 'other';
  educationLevel: EducationLevel;
  standardYear: string;
  stream: Stream;
  state: string;
  district: string;
  isMaharashtraDomicile: boolean;
  category: SocialCategory;
  annualIncomeRange: IncomeRange;
  percentage: number;
  hostelResident: boolean;
  hasDisability: boolean;
  firstGenerationLearner: boolean;
  orphanOrSingleParent: boolean;
}

export interface DocumentItem {
  id: string;
  name: {
    en: string;
    hi: string;
    mr: string;
  };
  issuingAuthority: {
    en: string;
    hi: string;
    mr: string;
  };
  howToObtain: {
    en: string;
    hi: string;
    mr: string;
  };
  isMandatory: boolean;
}

export interface ApplicationStep {
  stepNumber: number;
  title: {
    en: string;
    hi: string;
    mr: string;
  };
  description: {
    en: string;
    hi: string;
    mr: string;
  };
}

export interface Scheme {
  id: string;
  code: string;
  title: {
    en: string;
    hi: string;
    mr: string;
  };
  department: {
    en: string;
    hi: string;
    mr: string;
  };
  governmentLevel: 'state' | 'central';
  educationLevels: EducationLevel[];
  allowedStreams: (Stream | 'all')[];
  allowedCategories: (SocialCategory | 'all')[];
  maxAnnualIncome: number; // 0 means no income cap
  minPercentage: number; // 0 means passing is sufficient
  genderRequirement: 'all' | 'female' | 'male';
  requiresMaharashtraDomicile: boolean;
  requiresHostel?: boolean;
  requiresDisability?: boolean;
  schemeType: 'scholarship' | 'fee_reimbursement' | 'hostel_stipend' | 'skill_allowance' | 'merit_award';
  benefitsSummary: {
    en: string;
    hi: string;
    mr: string;
  };
  financialBenefit: {
    en: string;
    hi: string;
    mr: string;
  };
  simpleExplanation: {
    en: string;
    hi: string;
    mr: string;
  };
  eligibilityBullets: {
    en: string[];
    hi: string[];
    mr: string[];
  };
  requiredDocuments: DocumentItem[];
  applicationProcedure: ApplicationStep[];
  deadline: string; // YYYY-MM-DD
  deadlineStatus: 'closing_soon' | 'active' | 'open_rolling';
  officialPortalName: string;
  officialPortalUrl: string;
  lastVerifiedDate: string;
}

export interface MatchResult {
  scheme: Scheme;
  matchType: 'likely' | 'check_eligibility';
  score: number;
  matchedCriteria: {
    criterion: string;
    detail: string;
  }[];
  unverifiedCriteria: {
    criterion: string;
    detail: string;
  }[];
}

export interface StudentSchemeTracking {
  schemeId: string;
  status: StudentStatusOption;
  readyDocuments: string[]; // document ids
  studentNotes?: string;
  lastUpdated: string;
}

export interface CounsellorStudentItem {
  id: string;
  studentName: string;
  rollNumber: string;
  educationLevel: string;
  stream: string;
  category: string;
  matchedSchemeId: string;
  matchedSchemeTitle: string;
  deadline: string;
  daysRemaining: number;
  urgency: 'urgent' | 'warning' | 'normal'; // 🔴 < 3 days, 🟠 < 7 days, 🟢 later
  studentReportedStatus: StudentStatusOption;
  counsellorStatus: 'pending' | 'guidance_given' | 'documents_assisted' | 'parent_contacted' | 'resolved';
  lastFollowUpDate?: string;
  counsellorNotes?: string;
}

export interface FieldSurveyStat {
  reason: {
    en: string;
    hi: string;
    mr: string;
  };
  percentage: number;
  studentsCount: number;
  description: {
    en: string;
    hi: string;
    mr: string;
  };
}
