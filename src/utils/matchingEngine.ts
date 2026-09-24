import { MatchResult, Scheme, StudentProfile } from '../types';

export function matchStudentWithSchemes(
  profile: StudentProfile,
  schemes: Scheme[]
): MatchResult[] {
  const results: MatchResult[] = [];

  for (const scheme of schemes) {
    let score = 0;
    const matchedCriteria: { criterion: string; detail: string }[] = [];
    const unverifiedCriteria: { criterion: string; detail: string }[] = [];
    let isDisqualified = false;

    // 1. Gender check
    if (scheme.genderRequirement !== 'all') {
      if (profile.gender === scheme.genderRequirement) {
        score += 20;
        matchedCriteria.push({
          criterion: 'Gender Match',
          detail: `Scheme is specifically designated for ${scheme.genderRequirement} candidates.`
        });
      } else {
        isDisqualified = true;
      }
    }

    // 2. Education level check
    const matchesLevel =
      scheme.educationLevels.includes(profile.educationLevel) ||
      (scheme.educationLevels as string[]).includes('all');

    if (matchesLevel) {
      score += 25;
      matchedCriteria.push({
        criterion: 'Education Level',
        detail: `Currently enrolled in eligible level (${profile.educationLevel.toUpperCase()}).`
      });
    } else {
      isDisqualified = true;
    }

    // 3. Category check
    const matchesCategory =
      scheme.allowedCategories.includes('all') ||
      scheme.allowedCategories.includes(profile.category);

    if (matchesCategory) {
      score += 25;
      matchedCriteria.push({
        criterion: 'Social Category',
        detail: `Student category (${profile.category.toUpperCase()}) is eligible.`
      });
    } else {
      isDisqualified = true;
    }

    // 4. Stream check
    const matchesStream =
      scheme.allowedStreams.includes('all') ||
      scheme.allowedStreams.includes(profile.stream);

    if (matchesStream) {
      score += 15;
      matchedCriteria.push({
        criterion: 'Academic Stream',
        detail: `Enrolled in eligible branch (${profile.stream}).`
      });
    } else {
      // If stream doesn't strictly match, flag for verification
      unverifiedCriteria.push({
        criterion: 'Course Specialization',
        detail: `Requires verification if specific course under ${profile.stream} is covered by department GR.`
      });
    }

    // 5. Income check
    const incomeNumericMap = {
      below_1l: 100000,
      '1l_to_2_5l': 250000,
      '2_5l_to_8l': 800000,
      above_8l: 1200000
    };
    const studentIncomeMax = incomeNumericMap[profile.annualIncomeRange];

    if (scheme.maxAnnualIncome > 0) {
      if (studentIncomeMax <= scheme.maxAnnualIncome) {
        score += 20;
        matchedCriteria.push({
          criterion: 'Family Income Limit',
          detail: `Family income is within ₹${(scheme.maxAnnualIncome / 100000).toFixed(1)} Lakh ceiling.`
        });
      } else {
        isDisqualified = true;
      }
    } else {
      matchedCriteria.push({
        criterion: 'No Income Cap',
        detail: 'Scheme has no upper income limit restrictions.'
      });
      score += 10;
    }

    // 6. Domicile check
    if (scheme.requiresMaharashtraDomicile) {
      if (profile.isMaharashtraDomicile) {
        score += 15;
        matchedCriteria.push({
          criterion: 'Maharashtra Domicile',
          detail: 'Resident of Maharashtra with 15+ years domicile.'
        });
      } else {
        unverifiedCriteria.push({
          criterion: 'Domicile Verification',
          detail: 'Valid Maharashtra Domicile Certificate required at time of application.'
        });
      }
    }

    // 7. Percentage check
    if (scheme.minPercentage > 0) {
      if (profile.percentage >= scheme.minPercentage) {
        score += 15;
        matchedCriteria.push({
          criterion: 'Merit / Percentage Cutoff',
          detail: `Student has ${profile.percentage}% (min required: ${scheme.minPercentage}%).`
        });
      } else {
        unverifiedCriteria.push({
          criterion: 'Marks Cutoff Check',
          detail: `Qualifying cutoff is ${scheme.minPercentage}%. Previous score: ${profile.percentage}%.`
        });
      }
    }

    // 8. Hostel condition
    if (scheme.requiresHostel) {
      if (profile.hostelResident) {
        score += 15;
        matchedCriteria.push({
          criterion: 'Hostel / Rent Status',
          detail: 'Student resides in college hostel or rented room outside native place.'
        });
      } else {
        unverifiedCriteria.push({
          criterion: 'Hostel Living Proof',
          detail: 'Requires registered college hostel receipt or certified rent agreement.'
        });
      }
    }

    // 9. Disability condition
    if (scheme.requiresDisability) {
      if (profile.hasDisability) {
        score += 30;
        matchedCriteria.push({
          criterion: 'Divyangjan / PwD Status',
          detail: 'UDID card / medical board disability certificate verified.'
        });
      } else {
        isDisqualified = true;
      }
    }

    // Additional general verification checkpoints
    if (scheme.id === 'rcsm-ebc' || scheme.id === 'panjabrao-deshmukh-hostel') {
      unverifiedCriteria.push({
        criterion: 'CAP Admission Allotment',
        detail: 'Must verify that seat was allocated through official Centralized Allotment Process (CAP).'
      });
    }

    if (scheme.id === 'post-matric-obc-vjnt') {
      unverifiedCriteria.push({
        criterion: 'Non-Creamy Layer Validity',
        detail: 'Current financial year valid Non-Creamy Layer certificate required.'
      });
    }

    if (!isDisqualified) {
      const matchType: 'likely' | 'check_eligibility' =
        unverifiedCriteria.length === 0 || score >= 85
          ? 'likely'
          : 'check_eligibility';

      results.push({
        scheme,
        matchType,
        score,
        matchedCriteria,
        unverifiedCriteria
      });
    }
  }

  // Sort: likely matches first, then by highest score
  return results.sort((a, b) => {
    if (a.matchType === 'likely' && b.matchType !== 'likely') return -1;
    if (a.matchType !== 'likely' && b.matchType === 'likely') return 1;
    return b.score - a.score;
  });
}

export function calculateDaysRemaining(deadlineStr: string): number {
  const targetDate = new Date(deadlineStr);
  const now = new Date('2026-09-23T06:22:00Z'); // synchronized with current environment local date
  const diffTime = targetDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
