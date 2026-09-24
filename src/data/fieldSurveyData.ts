import { CounsellorStudentItem, FieldSurveyStat } from '../types';

export const FIELD_SURVEY_STATISTICS: FieldSurveyStat[] = [
  {
    reason: {
      en: "Didn't know about the scheme",
      hi: 'योजना के बारे में जानकारी ही नहीं थी',
      mr: 'योजना अस्तित्वात असल्याची माहितीच नव्हती'
    },
    percentage: 46.5,
    studentsCount: 209,
    description: {
      en: 'Information scattered across disparate government circulars; no single centralized student-friendly notice board.',
      hi: 'सरकारी परिपत्रकों का अलग-अलग जगह बिखराव; कोई एकीकृत छात्र सूचना मंच उपलब्ध न होना।',
      mr: 'माहिती विविध सरकारी संकेतस्थळांवर विखुरलेली असल्याने वेळेवर कळत नाही.'
    }
  },
  {
    reason: {
      en: "Didn't have documents ready in time",
      hi: 'अंतिम समय पर आवश्यक दस्तावेज उपलब्ध नहीं थे',
      mr: 'वेळेवर आवश्यक कागदपत्रे (उदा. उत्पन्न/जात दाखला) तयार नसणे'
    },
    percentage: 34.2,
    studentsCount: 154,
    description: {
      en: 'Tehsildar income certificates, domicile, or caste validity take 15-30 days to process at Setu Kendra.',
      hi: 'तहसीलदार आय प्रमाण या जाति वैधता प्रमाण पत्र बनने में 15 से 30 दिन लगते हैं।',
      mr: 'तहसीलदार उत्पन्नाचा दाखला किंवा जात पडताळणी मिळण्यास १५-३० दिवस लागतात.'
    }
  },
  {
    reason: {
      en: 'Missed the application deadline',
      hi: 'अंतिम तिथि निकल गई या समय पर पता नहीं चला',
      mr: 'मुदत संपल्याचे वेळेत लक्षात न येणे / तारीख निघून जाणे'
    },
    percentage: 28.0,
    studentsCount: 126,
    description: {
      en: 'No automated reminder mechanisms; students assumed deadlines were later in the semester.',
      hi: 'कोई रिमाइंडर सुविधा नहीं थी; छात्रों ने सोचा कि अभी समय बाकी है।',
      mr: 'कोणतीही आठवण करून देणारी यंत्रणा नसल्याने अनेक विद्यार्थ्यांची संधी हुकली.'
    }
  },
  {
    reason: {
      en: "Didn't understand complex eligibility rules",
      hi: 'जटिल पात्रता शर्तें समझ में नहीं आईं',
      mr: 'गुंतागुंतीच्या सरकारी अटी व नियम समजू शकले नाहीत'
    },
    percentage: 22.7,
    studentsCount: 102,
    description: {
      en: 'Legalistic government GR language created confusion regarding CAP admission, income ceiling, and child count limits.',
      hi: 'शासनादेश (GR) की क्लिष्ट कानूनी भाषा के कारण छात्र समझ नहीं पाए कि वे पात्र हैं या नहीं।',
      mr: 'शासनादेशातील क्लिष्ट भाषेमुळे आपण पात्र आहोत की नाही याचा संभ्रम राहिला.'
    }
  },
  {
    reason: {
      en: 'Language and terminology barrier',
      hi: 'अंग्रेजी या तकनीकी शब्दावली की कठिनाई',
      mr: 'भाषा व तांत्रिक शब्दांची अडचण (मराठी/हिंदीत सुलभ माहितीचा अभाव)'
    },
    percentage: 19.3,
    studentsCount: 87,
    description: {
      en: 'Technical terms (e.g. Non-Creamy Layer, DBT, ETR, Percentile vs Percentage) without simple local translations.',
      hi: 'स्थानीय भाषाओं में सरल व्याख्या का अभाव और कठिन प्रशासनिक शब्दों का प्रयोग।',
      mr: 'स्थानिक भाषेत सोप्या शब्दांत मार्गदर्शन उपलब्ध नसणे.'
    }
  },
  {
    reason: {
      en: 'Application portal errors & complex process',
      hi: 'ऑनलाइन पोर्टल पर गलतियां और कठिन प्रक्रिया',
      mr: 'ऑनलाईन पोर्टलवरील त्रुटी व क्लिष्ट अर्ज प्रक्रिया'
    },
    percentage: 16.4,
    studentsCount: 74,
    description: {
      en: 'Biometric mismatch, Aadhaar bank seeding (NPCI) issues, and unguided document scanning requirements.',
      hi: 'बायोमेट्रिक मिलान न होना, आधार बैंक मैपिंग में दिक्कत और सर्वर त्रुटियां।',
      mr: 'आधार-बँक लिंकिंग (NPCI) च्या अडचणी व कागदपत्रे स्कॅन करताना येणाऱ्या समस्या.'
    }
  }
];

export const FIELD_VISIT_METADATA = {
  sampleSize: 450,
  institutionsVisited: [
    'Government Polytechnic, Pune',
    'Modern Junior College of Arts, Science & Commerce, Shivajinagar',
    'K.K. Wagh Institute of Engineering Education & Research, Nashik',
    'Government Industrial Training Institute (ITI), Aurangabad',
    'Shri Shivaji Science College, Amravati'
  ],
  stakeholdersInterviewed: {
    students: 310,
    teachersCounsellors: 42,
    scholarshipClerks: 18,
    principals: 8
  },
  fieldObservationSummary: {
    en: 'Real field findings indicate that >70% of missed scholarships are completely preventable through timely document checklists and proactive counsellor alerts before the final 7-day cutoff.',
    hi: 'वास्तविक क्षेत्रीय निष्कर्ष बताते हैं कि 70% से अधिक छूटी हुई छात्रवृत्तियां केवल समय पर दस्तावेज चेकलिस्ट और शिक्षकों द्वारा अंतिम 7 दिनों में मार्गदर्शन देकर बचाई जा सकती हैं।',
    mr: 'प्रत्यक्ष अभ्यासातून दिसून आले की, ७०% पेक्षा जास्त संधी केवळ वेळेत कागदपत्रे तयार ठेवल्यास आणि शेवटच्या ७ दिवसांत शिक्षकांनी फॉलोअप घेतल्यास सहज मिळवता येतात.'
  }
};

export const INITIAL_COUNSELLOR_STUDENTS: CounsellorStudentItem[] = [
  {
    id: 'stud-01',
    studentName: 'Pooja Sanjay Jadhav',
    rollNumber: 'ENG-2024-042',
    educationLevel: 'Degree (Engineering 2nd Yr)',
    stream: 'engineering',
    category: 'OBC',
    matchedSchemeId: 'post-matric-obc-vjnt',
    matchedSchemeTitle: 'Post Matric Scholarship for OBC / VJNT Students',
    deadline: '2026-10-25',
    daysRemaining: 2, // 🔴 Urgent!
    urgency: 'urgent',
    studentReportedStatus: 'need_help',
    counsellorStatus: 'pending',
    lastFollowUpDate: '2026-09-21',
    counsellorNotes: 'Student needs urgent guidance with current financial year Non-Creamy Layer certificate renewal.'
  },
  {
    id: 'stud-02',
    studentName: 'Rahul Tukaram Shinde',
    rollNumber: 'JC-SCI-118',
    educationLevel: '12th Science',
    stream: 'science',
    category: 'Open (EBC)',
    matchedSchemeId: 'rcsm-ebc',
    matchedSchemeTitle: 'Rajarshi Chhatrapati Shahu Maharaj EBC Fee Waiver',
    deadline: '2026-10-15',
    daysRemaining: 3, // 🔴 Urgent!
    urgency: 'urgent',
    studentReportedStatus: 'preparing',
    counsellorStatus: 'pending',
    counsellorNotes: 'Awaiting Tehsildar income certificate token from Setu Kendra.'
  },
  {
    id: 'stud-03',
    studentName: 'Snehal Ramesh Gaikwad',
    rollNumber: 'DIP-MECH-019',
    educationLevel: 'Diploma (Mechanical 3rd Yr)',
    stream: 'engineering',
    category: 'SC',
    matchedSchemeId: 'post-matric-sc',
    matchedSchemeTitle: 'Post-Matric Scholarship for SC Students',
    deadline: '2026-10-31',
    daysRemaining: 6, // 🟠 Warning!
    urgency: 'warning',
    studentReportedStatus: 'need_help',
    counsellorStatus: 'guidance_given',
    lastFollowUpDate: '2026-09-22',
    counsellorNotes: 'Caste Scrutiny committee submission pending. Helped draft urgent letter.'
  },
  {
    id: 'stud-04',
    studentName: 'Aarti Dinkar Patil',
    rollNumber: 'ENG-COMP-088',
    educationLevel: 'Degree (B.Tech Computer 1st Yr)',
    stream: 'engineering',
    category: 'General / Open',
    matchedSchemeId: 'aicte-pragati-girls',
    matchedSchemeTitle: 'AICTE Pragati Scholarship for Girls',
    deadline: '2026-11-20',
    daysRemaining: 6, // 🟠 Warning!
    urgency: 'warning',
    studentReportedStatus: 'preparing',
    counsellorStatus: 'documents_assisted',
    lastFollowUpDate: '2026-09-20',
    counsellorNotes: 'Provided AICTE Institute Permanent ID code for bonafide verification.'
  },
  {
    id: 'stud-05',
    studentName: 'Tanvi Dilip More',
    rollNumber: 'JC-ARTS-054',
    educationLevel: '11th Arts',
    stream: 'arts',
    category: 'SC',
    matchedSchemeId: 'savitribai-phule-scholarship',
    matchedSchemeTitle: 'Savitribai Phule Scholarship for Girl Students',
    deadline: '2026-10-15',
    daysRemaining: 1, // 🔴 Urgent!
    urgency: 'urgent',
    studentReportedStatus: 'need_help',
    counsellorStatus: 'pending',
    counsellorNotes: 'Bank passbook does not have student name clearly printed. Guided to open IPPB account.'
  },
  {
    id: 'stud-06',
    studentName: 'Kunal Bhagwan Thorat',
    rollNumber: 'ITI-ELEC-012',
    educationLevel: 'ITI (Electrician)',
    stream: 'vocational',
    category: 'VJNT',
    matchedSchemeId: 'naps-iti-apprenticeship',
    matchedSchemeTitle: 'National Apprenticeship Promotion Scheme (NAPS)',
    deadline: '2026-12-31',
    daysRemaining: 24, // 🟢 Normal!
    urgency: 'normal',
    studentReportedStatus: 'applied',
    counsellorStatus: 'resolved',
    lastFollowUpDate: '2026-09-18',
    counsellorNotes: 'Apprenticeship contract signed with MIDC Chakan establishment.'
  },
  {
    id: 'stud-07',
    studentName: 'Omkar Suresh Kadam',
    rollNumber: 'DEG-BSC-076',
    educationLevel: 'Degree (B.Sc 2nd Yr)',
    stream: 'science',
    category: 'Open / EWS',
    matchedSchemeId: 'panjabrao-deshmukh-hostel',
    matchedSchemeTitle: 'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta',
    deadline: '2026-11-15',
    daysRemaining: 18, // 🟢 Normal!
    urgency: 'normal',
    studentReportedStatus: 'preparing',
    counsellorStatus: 'pending',
    counsellorNotes: 'Waiting for Talathi small landholder (Alpabhudharak) 7/12 extract.'
  }
];

export const PRESET_STUDENT_PROFILES = [
  {
    label: 'Pooja - 12th Science (OBC Girl, Pune)',
    profile: {
      name: 'Pooja संजय जाधव',
      age: 17,
      dob: '2008-04-12',
      gender: 'female' as const,
      educationLevel: '11th-12th' as const,
      standardYear: '12th Science (HSC)',
      stream: 'science' as const,
      state: 'Maharashtra',
      district: 'Pune',
      isMaharashtraDomicile: true,
      category: 'obc' as const,
      annualIncomeRange: '1l_to_2_5l' as const,
      percentage: 84.5,
      hostelResident: false,
      hasDisability: false,
      firstGenerationLearner: true,
      orphanOrSingleParent: false
    }
  },
  {
    label: 'Rahul - 2nd Yr B.Tech (Open / EBC in Hostel)',
    profile: {
      name: 'Rahul तुकाराम शिंदे',
      age: 20,
      dob: '2005-09-15',
      gender: 'male' as const,
      educationLevel: 'degree' as const,
      standardYear: '2nd Year B.Tech Mechanical (CAP Admitted)',
      stream: 'engineering' as const,
      state: 'Maharashtra',
      district: 'Nashik',
      isMaharashtraDomicile: true,
      category: 'open' as const,
      annualIncomeRange: '2_5l_to_8l' as const,
      percentage: 72.8,
      hostelResident: true,
      hasDisability: false,
      firstGenerationLearner: false,
      orphanOrSingleParent: false
    }
  },
  {
    label: 'Amit - ITI Electrician (SC, Chhatrapati Sambhaji Nagar)',
    profile: {
      name: 'Amit भगवान मोरे',
      age: 19,
      dob: '2006-11-03',
      gender: 'male' as const,
      educationLevel: 'iti' as const,
      standardYear: 'ITI Electrician 2nd Year',
      stream: 'vocational' as const,
      state: 'Maharashtra',
      district: 'Chhatrapati Sambhaji Nagar',
      isMaharashtraDomicile: true,
      category: 'sc' as const,
      annualIncomeRange: 'below_1l' as const,
      percentage: 68.0,
      hostelResident: false,
      hasDisability: false,
      firstGenerationLearner: true,
      orphanOrSingleParent: false
    }
  },
  {
    label: 'Sneha - 10th Standard Girl (Divyangjan PwD, Amravati)',
    profile: {
      name: 'Sneha रमेश गायकवाड',
      age: 15,
      dob: '2010-06-20',
      gender: 'female' as const,
      educationLevel: '10th' as const,
      standardYear: '10th SSC Board',
      stream: 'general' as const,
      state: 'Maharashtra',
      district: 'Amravati',
      isMaharashtraDomicile: true,
      category: 'sc' as const,
      annualIncomeRange: 'below_1l' as const,
      percentage: 79.2,
      hostelResident: false,
      hasDisability: true,
      firstGenerationLearner: true,
      orphanOrSingleParent: false
    }
  }
];
