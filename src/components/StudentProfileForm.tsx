import React from 'react';
import {
  EducationLevel,
  IncomeRange,
  Language,
  SocialCategory,
  Stream,
  StudentProfile
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PRESET_STUDENT_PROFILES } from '../data/fieldSurveyData';
import { UserCheck, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface StudentProfileFormProps {
  profile: StudentProfile;
  onProfileChange: (updated: StudentProfile) => void;
  language: Language;
  matchingCount: { likely: number; check: number };
}

const MAHARASHTRA_DISTRICTS = [
  'Pune',
  'Mumbai City',
  'Mumbai Suburban',
  'Nashik',
  'Nagpur',
  'Chhatrapati Sambhaji Nagar',
  'Amravati',
  'Solapur',
  'Thane',
  'Kolhapur',
  'Satara',
  'Sangli',
  'Ahmednagar',
  'Jalgaon',
  'Nanded',
  'Latur',
  'Akola',
  'Dhule',
  'Chandrapur',
  'Yavatmal'
];

export const StudentProfileForm: React.FC<StudentProfileFormProps> = ({
  profile,
  onProfileChange,
  language,
  matchingCount
}) => {
  const t = TRANSLATIONS[language];

  const handleInputChange = <K extends keyof StudentProfile>(
    field: K,
    value: StudentProfile[K]
  ) => {
    onProfileChange({
      ...profile,
      [field]: value
    });
  };

  const loadPreset = (presetIndex: number) => {
    const selected = PRESET_STUDENT_PROFILES[presetIndex];
    if (selected) {
      onProfileChange(selected.profile);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold tracking-tight text-white">
              {t.profileHeader}
            </h2>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">
              Zero Document Upload Required
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            {t.profileSubtitle}
          </p>
        </div>

        {/* Live Matching Summary Badge */}
        <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-lg p-2 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-medium">Matched Schemes</div>
            <div className="text-sm font-bold text-white flex items-center gap-2 tabular-nums">
              <span className="text-emerald-400">🟢 {matchingCount.likely} Likely</span>
              <span className="text-amber-400">🟡 {matchingCount.check} Check</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Profiles Quick Bar */}
      <div className="px-4 sm:px-6 py-3 bg-amber-50/60 border-b border-amber-200/60 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-amber-900 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          {t.btnLoadPreset}:
        </span>
        {PRESET_STUDENT_PROFILES.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => loadPreset(idx)}
            className="px-2.5 py-1 rounded bg-white hover:bg-amber-100/80 text-amber-900 font-medium border border-amber-300 transition-colors cursor-pointer"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Form Content */}
      <form onSubmit={(e) => e.preventDefault()} className="p-4 sm:p-6 space-y-6">
        {/* Row 1: Name, Age, Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-5">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldFullName}
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g. Pooja Jadhav"
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldAge}
            </label>
            <input
              type="number"
              min={12}
              max={35}
              value={profile.age}
              onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 18)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden tabular-nums"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldGender}
            </label>
            <select
              value={profile.gender}
              onChange={(e) =>
                handleInputChange('gender', e.target.value as 'male' | 'female' | 'other')
              }
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            >
              <option value="female">{t.genderFemale}</option>
              <option value="male">{t.genderMale}</option>
              <option value="other">{t.genderOther}</option>
            </select>
          </div>
        </div>

        {/* Row 2: Education Level, Standard/Year, Stream */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldEducationLevel}
            </label>
            <select
              value={profile.educationLevel}
              onChange={(e) =>
                handleInputChange('educationLevel', e.target.value as EducationLevel)
              }
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            >
              <option value="10th">{t.level10th}</option>
              <option value="11th-12th">{t.level11th12th}</option>
              <option value="diploma">{t.levelDiploma}</option>
              <option value="iti">{t.levelITI}</option>
              <option value="degree">{t.levelDegree}</option>
              <option value="postgraduate">{t.levelPostgraduate}</option>
            </select>
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldStandardYear}
            </label>
            <input
              type="text"
              value={profile.standardYear}
              onChange={(e) => handleInputChange('standardYear', e.target.value)}
              placeholder="e.g. 12th Science / 2nd Yr B.Tech"
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldStream}
            </label>
            <select
              value={profile.stream}
              onChange={(e) => handleInputChange('stream', e.target.value as Stream)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            >
              <option value="general">{t.streamGeneral}</option>
              <option value="science">{t.streamScience}</option>
              <option value="engineering">{t.streamEngineering}</option>
              <option value="commerce">{t.streamCommerce}</option>
              <option value="arts">{t.streamArts}</option>
              <option value="medical">{t.streamMedical}</option>
              <option value="vocational">{t.streamVocational}</option>
            </select>
          </div>
        </div>

        {/* Row 3: Category, Income Slab, Percentage, District */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldCategory}
            </label>
            <select
              value={profile.category}
              onChange={(e) =>
                handleInputChange('category', e.target.value as SocialCategory)
              }
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            >
              <option value="open">{t.catOpen}</option>
              <option value="obc">{t.catOBC}</option>
              <option value="sc">{t.catSC}</option>
              <option value="st">{t.catST}</option>
              <option value="vjnt">{t.catVJNT}</option>
              <option value="sbc">{t.catSBC}</option>
              <option value="ews">{t.catEWS}</option>
              <option value="minority">{t.catMinority}</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldAnnualIncome}
            </label>
            <select
              value={profile.annualIncomeRange}
              onChange={(e) =>
                handleInputChange('annualIncomeRange', e.target.value as IncomeRange)
              }
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            >
              <option value="below_1l">{t.incomeBelow1L}</option>
              <option value="1l_to_2_5l">{t.income1Lto25L}</option>
              <option value="2_5l_to_8l">{t.income25Lto8L}</option>
              <option value="above_8l">{t.incomeAbove8L}</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldPercentage}
            </label>
            <input
              type="number"
              min={35}
              max={100}
              step="0.1"
              value={profile.percentage}
              onChange={(e) =>
                handleInputChange('percentage', parseFloat(e.target.value) || 60)
              }
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden tabular-nums"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.fieldDistrict}
            </label>
            <select
              value={profile.district}
              onChange={(e) => handleInputChange('district', e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-hidden"
            >
              {MAHARASHTRA_DISTRICTS.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Condition Checkboxes */}
        <div className="pt-2 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-600 mb-2">
            Specific Scheme Conditions & Quotas:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100/60 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.isMaharashtraDomicile}
                onChange={(e) =>
                  handleInputChange('isMaharashtraDomicile', e.target.checked)
                }
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
              />
              <span className="text-slate-800 font-medium">
                {t.fieldMaharashtraDomicile}
              </span>
            </label>

            <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100/60 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.hostelResident}
                onChange={(e) => handleInputChange('hostelResident', e.target.checked)}
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
              />
              <span className="text-slate-800 font-medium">
                {t.fieldHostelResident}
              </span>
            </label>

            <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100/60 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.hasDisability}
                onChange={(e) => handleInputChange('hasDisability', e.target.checked)}
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
              />
              <span className="text-slate-800 font-medium">
                {t.fieldDisability}
              </span>
            </label>

            <label className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100/60 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.firstGenerationLearner}
                onChange={(e) =>
                  handleInputChange('firstGenerationLearner', e.target.checked)
                }
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
              />
              <span className="text-slate-800 font-medium">
                {t.fieldFirstGen}
              </span>
            </label>
          </div>
        </div>

        {/* Privacy Note Guarantee */}
        <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Zero-Upload Privacy Policy:</strong> Your data is used exclusively on your device to calculate eligibility rules. We never ask for, view, or store Aadhaar cards, caste certificates, or income receipts.
          </span>
        </div>
      </form>
    </div>
  );
};
