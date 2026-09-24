import { Scheme } from '../types';

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: 'rcsm-ebc',
    code: 'MAHA-DHE-EBC-01',
    title: {
      en: 'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)',
      hi: 'राजर्षि छत्रपति शाहू महाराज शिक्षण शुल्क शिष्यवृत्ति योजना (ईबीसी)',
      mr: 'राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना (ईबीसी)'
    },
    department: {
      en: 'Directorate of Higher Education / Technical Education, Govt. of Maharashtra',
      hi: 'उच्च व तकनीकी शिक्षा निदेशालय, महाराष्ट्र शासन',
      mr: 'उच्च व तंत्रशिक्षण संचालनालय, महाराष्ट्र शासन'
    },
    governmentLevel: 'state',
    educationLevels: ['diploma', 'degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['open', 'ews'],
    maxAnnualIncome: 800000,
    minPercentage: 50,
    genderRequirement: 'all',
    requiresMaharashtraDomicile: true,
    schemeType: 'fee_reimbursement',
    benefitsSummary: {
      en: '50% Tuition Fee & 50% Exam Fee waiver for Professional & Non-Professional Courses.',
      hi: 'व्यावसायिक और गैर-व्यावसायिक पाठ्यक्रमों के लिए 50% शिक्षण शुल्क व परीक्षा शुल्क माफी।',
      mr: 'व्यावसायिक व बिगर-व्यावसायिक अभ्यासक्रमांसाठी ५०% शिक्षण शुल्क आणि ५०% परीक्षा शुल्क सवलत.'
    },
    financialBenefit: {
      en: 'Direct reimbursement of 50% college tuition fees (up to ₹50,000–₹1,50,000/year depending on course).',
      hi: 'महाविद्यालयीन शिक्षण शुल्क का 50% सीधा पुनर्भुगतान (पाठ्यक्रम के अनुसार प्रति वर्ष ₹50,000 से ₹1,50,000 तक)।',
      mr: 'कॉलेजच्या ५०% ट्यूशन फीचा थेट परतावा (अभ्यासक्रमानुसार दरवर्षी ₹५०,००० ते ₹१,५०,००० पर्यंत).'
    },
    simpleExplanation: {
      en: 'If you are from the General/Open category or EWS with family income under ₹8 Lakh and have taken admission through Centralized Admission (CAP) in Maharashtra, the government pays half of your college tuition fees.',
      hi: 'यदि आप सामान्य/ओपन वर्ग या ईडब्ल्यूएस से हैं और आपके परिवार की वार्षिक आय ₹8 लाख से कम है, तथा आपने कैप (CAP) राउंड से प्रवेश लिया है, तो सरकार आपकी आधी कॉलेज फीस भरती है।',
      mr: 'जर तुम्ही खुल्या (Open) किंवा ईडब्ल्यूएस (EWS) प्रवर्गातील असाल आणि कुटुंबाचे वार्षिक उत्पन्न ₹८ लाखांपेक्षा कमी असेल, व कॅप (CAP) फेरीत प्रवेश घेतला असेल, तर सरकार तुमची अर्धी फी भरते.'
    },
    eligibilityBullets: {
      en: [
        'Maharashtra Domicile certificate is mandatory',
        'Family annual income must not exceed ₹8,00,000 (Tahsildar certified)',
        'Must be admitted through Centralized Admission Process (CAP)',
        'Minimum 50% marks in previous qualifying examination',
        'Applicable only for up to 2 children in the family'
      ],
      hi: [
        'महाराष्ट्र अधिवास प्रमाणपत्र (Domicile) अनिवार्य है',
        'परिवार की वार्षिक आय ₹8,00,000 से कम होनी चाहिए (तहसीलदार प्रमाणित)',
        'केंद्रीकृत प्रवेश प्रक्रिया (CAP) के माध्यम से प्रवेश होना चाहिए',
        'पिछली परीक्षा में न्यूनतम 50% अंक आवश्यक हैं',
        'परिवार के अधिकतम 2 बच्चों के लिए ही मान्य'
      ],
      mr: [
        'महाराष्ट्राचे अधिवास प्रमाणपत्र (Domicile Certificate) असणे आवश्यक',
        'कुटुंबाचे वार्षिक उत्पन्न ₹८,००,००० च्या आत असणे बंधनकारक (तहसीलदार दाखला)',
        'केंद्रीभूत प्रवेश प्रक्रियेद्वारे (CAP) प्रवेश घेतलेला असावा',
        'मागील परीक्षेत किमान ५०% गुण आवश्यक',
        'एका कुटुंबातील जास्तीत जास्त २ अपत्यांसाठीच लागू'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Income Certificate from competent authority (Tahsildar)',
          hi: 'सक्षम प्राधिकारी (तहसीलदार) द्वारा जारी आय प्रमाणपत्र',
          mr: 'सक्षम प्राधिकाऱ्याने (तहसीलदार) दिलेला उत्पन्नाचा दाखला'
        },
        issuingAuthority: {
          en: 'Tehsildar Office / Aaple Sarkar Portal',
          hi: 'तहसीलदार कार्यालय / आपले सरकार पोर्टल',
          mr: 'तहसीलदार कार्यालय / आपले सरकार पोर्टल'
        },
        howToObtain: {
          en: 'Apply online on aaplesarkar.mahaonline.gov.in using Form 16 or agricultural income proof.',
          hi: 'aaplesarkar.mahaonline.gov.in पर फॉर्म 16 या कृषि आय प्रमाण के साथ ऑनलाइन आवेदन करें।',
          mr: 'आपले सरकार पोर्टलवर शेती उतारा किंवा फॉर्म १६ जोडून ऑनलाईन अर्ज करा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-domicile',
        name: {
          en: 'Maharashtra State Domicile Certificate',
          hi: 'महाराष्ट्र राज्य अधिवास प्रमाणपत्र (Domicile)',
          mr: 'महाराष्ट्र राज्य अधिवास प्रमाणपत्र (डोमिसाईल)'
        },
        issuingAuthority: {
          en: 'Sub-Divisional Officer / Executive Magistrate',
          hi: 'उप-विभागीय अधिकारी / कार्यकारी दंडाधिकारी',
          mr: 'उपविभागीय अधिकारी / तहसीलदार'
        },
        howToObtain: {
          en: 'Issued through Setu Kendra or Aaple Sarkar based on 15 years Maharashtra residence proof.',
          hi: '15 वर्ष के निवास प्रमाण के आधार पर सेतु केंद्र या आपले सरकार से प्राप्त करें।',
          mr: '१५ वर्षांच्या वास्तव्याचा पुरावा दाखवून सेतू केंद्र किंवा ऑनलाईन मिळवा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-cap-allotment',
        name: {
          en: 'CAP Admission Allotment Letter',
          hi: 'कैप प्रवेश आवंटन पत्र (CAP Allotment Letter)',
          mr: 'कॅप (CAP) प्रवेश वाटप पत्र'
        },
        issuingAuthority: {
          en: 'State CET Cell, Maharashtra',
          hi: 'राज्य सीईटी सेल, महाराष्ट्र',
          mr: 'राज्य सीईटी सेल, महाराष्ट्र'
        },
        howToObtain: {
          en: 'Download from the respective CET admission portal (e.g., cetcell.mahacet.org).',
          hi: 'सीईटी प्रवेश पोर्टल से डाउनलोड करें।',
          mr: 'सीईटी सेलच्या पोर्टलवरून डाउनलोड करा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-marksheets',
        name: {
          en: 'Previous Year Marksheet & Current Fee Receipt',
          hi: 'पिछले वर्ष की अंकसूची और चालू वर्ष की फीस रसीद',
          mr: 'मागील वर्षाचे गुणपत्रक व चालू वर्षाची कॉलेज फी पावती'
        },
        issuingAuthority: {
          en: 'School / College / University Board',
          hi: 'स्कूल / कॉलेज / विश्वविद्यालय',
          mr: 'कॉलेज / विद्यापीठ'
        },
        howToObtain: {
          en: 'Collect from your college administrative desk upon fee payment.',
          hi: 'फीस जमा करने के बाद अपने कॉलेज कार्यालय से प्राप्त करें।',
          mr: 'कॉलेज फी भरल्यावर ऑफिसमधून अधिकृत पावती घ्या.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Register on MahaDBT Portal',
          hi: 'महाडीबीटी पोर्टल पर पंजीकरण करें',
          mr: 'महाडीबीटी (MahaDBT) पोर्टलवर नोंदणी करा'
        },
        description: {
          en: 'Visit mahadbt.maharashtra.gov.in and create user profile with Aadhaar biometric or OTP.',
          hi: 'mahadbt.maharashtra.gov.in पर जाएं और आधार ओटीपी द्वारा प्रोफाइल बनाएं।',
          mr: 'mahadbt.maharashtra.gov.in वर जाऊन आधार ओटीपीने स्वतःचे प्रोफाईल तयार करा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Complete Profile Details',
          hi: 'प्रोफाइल विवरण भरें',
          mr: 'वैयक्तिक व शैक्षणिक माहिती भरा'
        },
        description: {
          en: 'Fill personal info, address, caste/category, income details, and current academic course.',
          hi: 'व्यक्तिगत, आय, पता और चालू पाठ्यक्रम की जानकारी सही भरें।',
          mr: 'पत्ता, उत्पन्न, अधिवास आणि चालू शैक्षणिक वर्षाची माहिती अचूक भरा.'
        }
      },
      {
        stepNumber: 3,
        title: {
          en: 'Select DHE Scheme & Submit',
          hi: 'डीएचई योजना चुनें और आवेदन जमा करें',
          mr: 'योजना निवडा आणि ऑनलाईन सबमिट करा'
        },
        description: {
          en: 'Navigate to Directorate of Higher Education -> EBC Scheme and submit application.',
          hi: 'उच्च शिक्षा निदेशालय -> ईबीसी योजना चुनें और ऑनलाइन सबमिट करें।',
          mr: 'उच्च शिक्षण संचालनालय -> ईबीसी योजना निवडून अर्ज सादर करा.'
        }
      }
    ],
    deadline: '2026-11-30',
    deadlineStatus: 'active',
    officialPortalName: 'MahaDBT Portal (Maharashtra Government)',
    officialPortalUrl: 'https://mahadbt.maharashtra.gov.in',
    lastVerifiedDate: '2026-09-15'
  },
  {
    id: 'panjabrao-deshmukh-hostel',
    code: 'MAHA-DHE-HOSTEL-02',
    title: {
      en: 'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (Hostel Allowance)',
      hi: 'डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना',
      mr: 'डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना'
    },
    department: {
      en: 'Higher & Technical Education Department, Govt. of Maharashtra',
      hi: 'उच्च व तकनीकी शिक्षा विभाग, महाराष्ट्र शासन',
      mr: 'उच्च व तंत्र शिक्षण विभाग, महाराष्ट्र शासन'
    },
    governmentLevel: 'state',
    educationLevels: ['diploma', 'degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['open', 'ews', 'obc', 'sbc', 'vjnt'],
    maxAnnualIncome: 800000,
    minPercentage: 50,
    genderRequirement: 'all',
    requiresMaharashtraDomicile: true,
    requiresHostel: true,
    schemeType: 'hostel_stipend',
    benefitsSummary: {
      en: 'Annual Hostel subsistence allowance of ₹20,000 to ₹30,000 for staying in private or college hostels.',
      hi: 'निजी या कॉलेज हॉस्टल/पीजी में रहने वाले छात्रों के लिए ₹20,000 से ₹30,000 का वार्षिक निर्वाह भत्ता।',
      mr: 'वसतिगृहात किंवा भाड्याने राहणाऱ्या विद्यार्थ्यांसाठी दरवर्षी ₹२०,००० ते ₹३०,००० निर्वाह भत्ता.'
    },
    financialBenefit: {
      en: '₹30,000/year for Mega-cities (Mumbai, Pune, Nagpur) and ₹20,000/year for other districts for children of registered farmers/labourers.',
      hi: 'मुंबई, पुणे, नागपुर जैसे महानगरों के लिए ₹30,000/वर्ष और अन्य जिलों के लिए ₹20,000/वर्ष।',
      mr: 'मुंबई, पुणे, नागपूर या शहरांसाठी ₹३०,०००/वर्ष आणि इतर जिल्ह्यांसाठी ₹२०,०००/वर्ष थेट बँक खात्यात.'
    },
    simpleExplanation: {
      en: 'Students pursuing higher education away from home who stay in hostels or rented rooms and whose parents are marginal farmers or registered labourers can receive monthly money for food and accommodation.',
      hi: 'जो छात्र उच्च शिक्षा के लिए घर से दूर हॉस्टल या किराए के कमरे में रहते हैं और जिनके माता-पिता किसान या श्रमिक हैं, उन्हें रहने और खाने के लिए सरकारी आर्थिक सहायता मिलती है।',
      mr: 'शिक्षणासाठी घरापासून दूर वसतिगृहात किंवा भाड्याच्या खोलीत राहणाऱ्या आणि शेतकरी/शेतमजूर कुटुंबातील विद्यार्थ्यांना राहण्या-खाण्यासाठी सरकारकडून रोख भत्ता मिळतो.'
    },
    eligibilityBullets: {
      en: [
        'Student must be admitted through CAP round in registered college',
        'Must be staying in college hostel or approved private accommodation outside own village/city',
        'Parent must be a small/marginal landholder or registered agricultural labourer',
        'Annual family income ≤ ₹8,00,000',
        'Minimum 50% passing marks in qualifying exam'
      ],
      hi: [
        'छात्र का प्रवेश कैप राउंड से होना चाहिए',
        'छात्र अपने मूल शहर/गांव से दूर हॉस्टल या किराए के कमरे में रह रहा हो',
        'माता-पिता अल्पभूधारक किसान या पंजीकृत खेतिहर मजदूर हों',
        'वार्षिक पारिवारिक आय ₹8,00,000 से कम हो',
        'पिछली परीक्षा में न्यूनतम 50% अंक अनिवार्य हैं'
      ],
      mr: [
        'कॅप (CAP) फेरीतून अधिकृत कॉलेजमध्ये प्रवेश घेतलेला असावा',
        'विद्यार्थी मूळ गावापासून दूर वसतिगृहात किंवा पेइंग गेस्ट/भाड्याने राहत असावा',
        'पालक अल्पभूधारक शेतकरी किंवा नोंदणीकृत शेतमजूर असणे आवश्यक',
        'वार्षिक कौटुंबिक उत्पन्न ₹८,००,००० च्या आत असावे',
        'मागील परीक्षेत किमान ५०% गुण असणे आवश्यक'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-hostel-cert',
        name: {
          en: 'Hostel Certificate / Rent Agreement with Warden/Owner Sign',
          hi: 'हॉस्टल प्रमाणपत्र या किराए का अनुबंध पत्र',
          mr: 'वसतिगृह प्रमाणपत्र / घरमालकासोबतचा भाडेकरार'
        },
        issuingAuthority: {
          en: 'Hostel Rector or House Owner / Sub-Registrar',
          hi: 'हॉस्टल रेक्टर या मकान मालिक',
          mr: 'वसतिगृह प्रमुख किंवा घरमालक'
        },
        howToObtain: {
          en: 'Obtain signed hostel admission receipt or rent agreement letter attested by college principal.',
          hi: 'कॉलेज प्राचार्य द्वारा प्रमाणित हॉस्टल रसीद या किराया पत्र बनवाएं।',
          mr: 'कॉलेज प्राचार्यांच्या स्वाक्षरीसह वसतिगृह किंवा भाडे पावती सादर करा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-alpbhudharak-cert',
        name: {
          en: 'Small Landholder (Alpabhudharak) Certificate / Labour Card',
          hi: 'अल्पभूधारक किसान प्रमाणपत्र या श्रमिक कार्ड',
          mr: 'अल्पभूधारक शेतकरी दाखला / नोंदणीकृत शेतमजूर प्रमाणपत्र'
        },
        issuingAuthority: {
          en: 'Tahsildar / Talathi Office',
          hi: 'तहसीलदार / तलाठी कार्यालय',
          mr: 'तहसीलदार / तलाठी कार्यालय'
        },
        howToObtain: {
          en: 'Obtain 7/12 extract and agricultural certificate from local Talathi.',
          hi: 'स्थानीय तलाठी से 7/12 खसरा खतौनी और अल्पभूधारक प्रमाण लें।',
          mr: 'स्थानिक तलाठ्याकडून ७/१२ उतारा व अल्पभूधारक प्रमाणपत्र मिळवा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Tahsildar Income Certificate',
          hi: 'तहसीलदार आय प्रमाणपत्र',
          mr: 'तहसीलदार उत्पन्नाचा दाखला'
        },
        issuingAuthority: {
          en: 'Aaple Sarkar / Revenue Department',
          hi: 'राजस्व विभाग, महाराष्ट्र',
          mr: 'महसूल विभाग, महाराष्ट्र शासन'
        },
        howToObtain: {
          en: 'Official certificate for current financial year.',
          hi: 'चालू वित्तीय वर्ष का आधिकारिक प्रमाणपत्र।',
          mr: 'चालू आर्थिक वर्षाचा अधिकृत दाखला.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Log in to MahaDBT Portal',
          hi: 'महाडीबीटी पोर्टल पर लॉग इन करें',
          mr: 'महाडीबीटी पोर्टलवर लॉगिन करा'
        },
        description: {
          en: 'Select Higher and Technical Education -> Dr. Panjabrao Deshmukh Vasatigruh Scheme.',
          hi: 'उच्च व तकनीकी शिक्षा विभाग -> डॉ. पंजाबराव देशमुख योजना चुनें।',
          mr: 'उच्च व तंत्रशिक्षण विभाग -> डॉ. पंजाबराव देशमुख वसतिगृह योजना निवडा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Fill Hostel & Landholding Data',
          hi: 'हॉस्टल और जमीन संबंधी विवरण भरें',
          mr: 'वसतिगृह व शेतजमीन माहिती भरा'
        },
        description: {
          en: 'Enter hostel address, distance from home, monthly rent, and upload verified certificates.',
          hi: 'हॉस्टल का पता, घर से दूरी और किराया विवरण दर्ज करें।',
          mr: 'वसतिगृहाचा पत्ता, घरापासून अंतर आणि भाड्याची माहिती नोंदवा.'
        }
      },
      {
        stepNumber: 3,
        title: {
          en: 'Submit for College Verification',
          hi: 'कॉलेज सत्यापन के लिए सबमिट करें',
          mr: 'कॉलेज पडताळणीसाठी अर्ज सादर करा'
        },
        description: {
          en: 'Submit online and submit physical hard copy of checklist to college scholarship clerk.',
          hi: 'ऑनलाइन जमा करें और चेकलिस्ट की प्रति कॉलेज क्लर्क को दें।',
          mr: 'ऑनलाईन सबमिट करा आणि कॉलेजच्या शिष्यवृत्ती विभागाकडे हार्डकॉपी जमा करा.'
        }
      }
    ],
    deadline: '2026-11-15',
    deadlineStatus: 'active',
    officialPortalName: 'MahaDBT Scholarship Portal',
    officialPortalUrl: 'https://mahadbt.maharashtra.gov.in',
    lastVerifiedDate: '2026-09-18'
  },
  {
    id: 'post-matric-sc',
    code: 'MAHA-SOC-SC-03',
    title: {
      en: 'Government of India Post-Matric Scholarship for SC Students',
      hi: 'भारत सरकार अनुसूचित जाति (SC) मैट्रिक-उपरांत छात्रवृत्ति',
      mr: 'भारत सरकार मॅट्रिकोत्तर शिष्यवृत्ती योजना (अनुसूचित जाती - SC)'
    },
    department: {
      en: 'Social Justice & Special Assistance Department, Govt. of Maharashtra',
      hi: 'सामाजिक न्याय व विशेष सहायता विभाग, महाराष्ट्र शासन',
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र शासन'
    },
    governmentLevel: 'state',
    educationLevels: ['11th-12th', 'diploma', 'iti', 'degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['sc'],
    maxAnnualIncome: 250000,
    minPercentage: 0, // Passing marks
    genderRequirement: 'all',
    requiresMaharashtraDomicile: true,
    schemeType: 'fee_reimbursement',
    benefitsSummary: {
      en: '100% Tuition Fee Reimbursement + Monthly Maintenance Allowance of up to ₹13,500/year.',
      hi: '100% शिक्षण शुल्क व अन्य शुल्क माफी + प्रति वर्ष ₹13,500 तक का मासिक निर्वाह भत्ता।',
      mr: '१००% शिक्षण व परीक्षा फी माफी + दरमहा ₹१३,५०० पर्यंत निर्वाह भत्ता.'
    },
    financialBenefit: {
      en: 'Full 100% college fee paid directly to the institution + maintenance stipend credited to student bank account.',
      hi: 'कॉलेज की पूरी फीस माफ + छात्र के खाते में निर्वाह भत्ता सीधे जमा।',
      mr: 'कॉलेजची संपूर्ण फी सरकार भरणार + विद्यार्थ्याच्या बँक खात्यात थेट निर्वाह भत्ता.'
    },
    simpleExplanation: {
      en: 'For Scheduled Caste (SC) students studying after 10th standard in junior college, ITI, diploma, or degree courses whose family income is under ₹2.5 Lakhs, education is virtually free with monthly pocket allowance.',
      hi: '10वीं के बाद जूनियर कॉलेज, आईटीआई, डिप्लोमा या डिग्री कर रहे अनुसूचित जाति (SC) के छात्र जिनकी पारिवारिक आय ₹2.5 लाख से कम है, उनकी पूरी कॉलेज फीस सरकार भरती है।',
      mr: '१० वी नंतर ११ वी-१२ वी, आयटीआय, डिप्लोमा किंवा डिग्री करणाऱ्या अनुसूचित जाती (SC) प्रवर्गातील विद्यार्थ्यांना ज्यांचे कौटुंबिक उत्पन्न ₹२.५ लाखांच्या आत आहे, त्यांना १००% मोफत शिक्षण व मासिक भत्ता मिळतो.'
    },
    eligibilityBullets: {
      en: [
        'Candidate must belong to Scheduled Caste (SC) or Neo-Buddhist community',
        'Annual family income from all sources must not exceed ₹2,50,000',
        'Maharashtra Domicile & Caste Certificate from Maharashtra competent authority',
        'Caste Validity Certificate is mandatory for professional degree/diploma courses',
        'No minimum percentage required; student must have passed the previous year'
      ],
      hi: [
        'उम्मीदवार अनुसूचित जाति (SC) या नवबौद्ध समुदाय से होना चाहिए',
        'सभी स्रोतों से वार्षिक पारिवारिक आय ₹2,50,000 से कम हो',
        'महाराष्ट्र का जाति प्रमाणपत्र और अधिवास प्रमाणपत्र आवश्यक है',
        'व्यावसायिक डिग्री/डिप्लोमा के लिए जाति वैधता (Caste Validity) अनिवार्य है',
        'कोई न्यूनतम अंक सीमा नहीं; केवल पिछली कक्षा उत्तीर्ण होना आवश्यक'
      ],
      mr: [
        'विद्यार्थी अनुसूचित जाती (SC) किंवा नवबौद्ध समाजाचा असावा',
        'सर्व मार्गांनी मिळणारे वार्षिक कौटुंबिक उत्पन्न ₹२,५०,००० पेक्षा जास्त नसावे',
        'महाराष्ट्राचे जात प्रमाणपत्र आणि अधिवास दाखला अनिवार्य',
        'व्यावसायिक अभ्यासक्रमांसाठी जात पडताळणी (Caste Validity) प्रमाणपत्र आवश्यक',
        'किमान गुणांची अट नाही; मागील परीक्षेत उत्तीर्ण असणे पुरेसे'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-caste-cert',
        name: {
          en: 'Caste Certificate issued by Maharashtra Authority',
          hi: 'महाराष्ट्र प्राधिकारी द्वारा जारी जाति प्रमाणपत्र',
          mr: 'सक्षम अधिकाऱ्याने दिलेला जातीचा दाखला'
        },
        issuingAuthority: {
          en: 'Sub-Divisional Officer (SDO) / Executive Magistrate',
          hi: 'उप-विभागीय अधिकारी (SDO)',
          mr: 'उपविभागीय अधिकारी / तहसीलदार'
        },
        howToObtain: {
          en: 'Obtain through Aaple Sarkar portal using family lineage documents.',
          hi: 'वंशावली दस्तावेजों के साथ आपले सरकार पोर्टल से प्राप्त करें।',
          mr: 'वंशावळीच्या पुराव्यासह आपले सरकार पोर्टलवरून मिळवा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-caste-validity',
        name: {
          en: 'Caste Validity Certificate (for Professional Degree/Diploma)',
          hi: 'जाति वैधता प्रमाणपत्र (Caste Validity Certificate)',
          mr: 'जात पडताळणी प्रमाणपत्र (Caste Validity)'
        },
        issuingAuthority: {
          en: 'District Caste Scrutiny Committee, Maharashtra',
          hi: 'जिला जाति जांच समिति, महाराष्ट्र',
          mr: 'जिल्हा जात प्रमाणपत्र पडताळणी समिती'
        },
        howToObtain: {
          en: 'Apply through bartievalidity.maharashtra.gov.in portal.',
          hi: 'bartievalidity.maharashtra.gov.in पोर्टल पर आवेदन करें।',
          mr: 'बार्टीच्या (BARTI) व्हॅलिडीटी पोर्टलवरून ऑनलाईन अर्ज करा.'
        },
        isMandatory: false
      },
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Tahsildar Income Certificate (<= ₹2.5 Lakh)',
          hi: 'तहसीलदार आय प्रमाणपत्र (₹2.5 लाख तक)',
          mr: 'तहसीलदार उत्पन्नाचा दाखला (₹२.५ लाखांपर्यंत)'
        },
        issuingAuthority: {
          en: 'Revenue Department / Aaple Sarkar',
          hi: 'राजस्व विभाग, महाराष्ट्र',
          mr: 'महसूल विभाग, महाराष्ट्र शासन'
        },
        howToObtain: {
          en: 'Apply on Aaple Sarkar portal for official digital certificate.',
          hi: 'डिजिटल प्रमाणपत्र के लिए आपले सरकार पोर्टल पर जाएं।',
          mr: 'आपले सरकार पोर्टलवरून डिजिटल स्वाक्षरी असलेला दाखला घ्या.'
        },
        isMandatory: true
      },
      {
        id: 'doc-aadhaar-bank',
        name: {
          en: 'Aadhaar Seeded Nationalised Bank Passbook Copy',
          hi: 'आधार से जुड़ा राष्ट्रीयकृत बैंक पासबुक',
          mr: 'आधार लिंक असलेले राष्ट्रीयकृत बँक पासबुक'
        },
        issuingAuthority: {
          en: 'Any Nationalized Bank / Post Payments Bank',
          hi: 'बैंक शाखा / डाकघर',
          mr: 'बँक शाखा'
        },
        howToObtain: {
          en: 'Visit your bank branch and submit NPCI / Aadhaar mapping mandate form.',
          hi: 'बैंक जाकर एनपीसीआई आधार मैपिंग फॉर्म भरें।',
          mr: 'बँकेत जाऊन एनपीसीआय (NPCI) मॅपिंग पूर्ण करून घ्या.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Register on MahaDBT with Aadhaar OTP',
          hi: 'आधार ओटीपी से महाडीबीटी पर रजिस्टर करें',
          mr: 'आधार ओटीपीने महाडीबीटीवर नोंदणी करा'
        },
        description: {
          en: 'Ensure your Aadhaar is linked with active mobile number and bank account.',
          hi: 'सुनिश्चित करें कि आधार से मोबाइल और बैंक खाता लिंक है।',
          mr: 'आधारला मोबाईल नंबर व बँक खाते लिंक असल्याची खात्री करा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Select Social Justice & Special Assistance Department',
          hi: 'सामाजिक न्याय विभाग का चयन करें',
          mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग निवडा'
        },
        description: {
          en: 'Choose "Government of India Post-Matric Scholarship for SC Students".',
          hi: 'एससी विद्यार्थियों के लिए भारत सरकार मैट्रिक-उपरांत योजना चुनें।',
          mr: 'अनुसूचित जातीच्या विद्यार्थ्यांसाठी भारत सरकार मॅट्रिकोत्तर योजना निवडा.'
        }
      },
      {
        stepNumber: 3,
        title: {
          en: 'Upload Documents & Submit Application',
          hi: 'दस्तावेज अपलोड कर फॉर्म जमा करें',
          mr: 'कागदपत्रे अपलोड करून अर्ज सबमिट करा'
        },
        description: {
          en: 'Submit online and track verification status on dashboard.',
          hi: 'ऑनलाइन जमा करें और डैशबोर्ड पर स्थिति ट्रैक करें।',
          mr: 'ऑनलाईन सबमिट करा आणि अर्जाची स्थिती तपासा.'
        }
      }
    ],
    deadline: '2026-10-31',
    deadlineStatus: 'active',
    officialPortalName: 'MahaDBT Portal (Social Justice Dept)',
    officialPortalUrl: 'https://mahadbt.maharashtra.gov.in',
    lastVerifiedDate: '2026-09-20'
  },
  {
    id: 'post-matric-obc-vjnt',
    code: 'MAHA-VJNT-OBC-04',
    title: {
      en: 'Post Matric Scholarship for OBC / VJNT / SBC Students',
      hi: 'ओबीसी / विमुक्त जाति, भटक्या जमाती (VJNT) / एसबीसी मैट्रिक-उपरांत छात्रवृत्ति',
      mr: 'इतर मागास वर्ग (OBC), विमुक्त जाती व भटक्या जमाती (VJNT) मॅट्रिकोत्तर शिष्यवृत्ती'
    },
    department: {
      en: 'VJNT, OBC and SBC Welfare Department, Govt. of Maharashtra',
      hi: 'विमुक्त जाति, भटक्या जमाती, ओबीसी व एसबीसी कल्याण विभाग',
      mr: 'इतर मागास बहुजन कल्याण विभाग, महाराष्ट्र शासन'
    },
    governmentLevel: 'state',
    educationLevels: ['11th-12th', 'diploma', 'iti', 'degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['obc', 'vjnt', 'sbc'],
    maxAnnualIncome: 150000, // Full scholarship <= 1.5L; 1.5L to 8L gets tuition fee waiver (Freeship)
    minPercentage: 0,
    genderRequirement: 'all',
    requiresMaharashtraDomicile: true,
    schemeType: 'fee_reimbursement',
    benefitsSummary: {
      en: '100% Tuition Fee Reimbursement + Monthly Maintenance Allowance for family income <= ₹1.5L.',
      hi: '100% ट्यूशन फीस माफी + मासिक निर्वाह भत्ता (आय ₹1.5 लाख तक के लिए)।',
      mr: '१००% ट्यूशन फी परतावा + मासिक निर्वाह भत्ता (उत्पन्न ₹१.५ लाखांपर्यंत).'
    },
    financialBenefit: {
      en: 'Tuition and exam fees reimbursed + up to ₹4,250 maintenance allowance annually.',
      hi: 'ट्यूशन व परीक्षा फीस माफी + प्रति वर्ष ₹4,250 तक का निर्वाह भत्ता।',
      mr: 'शिक्षण शुल्क पूर्ण माफ + दरवर्षी ₹४,२५० पर्यंत निर्वाह भत्ता खात्यात.'
    },
    simpleExplanation: {
      en: 'Students belonging to OBC, VJNT, or SBC communities in Maharashtra can get their college tuition and exam fees paid by the government, along with study expenses.',
      hi: 'महाराष्ट्र के ओबीसी, विजेएनटी और एसबीसी वर्ग के छात्रों को कॉलेज की फीस में पूरी छूट और पढ़ाई के खर्च के लिए सरकारी भत्ता मिलता है।',
      mr: 'महाराष्ट्रातील ओबीसी, विजेएनटी आणि एसबीसी प्रवर्गातील विद्यार्थ्यांना कॉलेजची शिक्षण फी सरकारकडून माफ मिळते आणि शैक्षणिक खर्चासाठी भत्ता मिळतो.'
    },
    eligibilityBullets: {
      en: [
        'Candidate must belong to OBC, VJNT, or SBC category of Maharashtra State',
        'Annual income must not exceed ₹1,50,000 for Scholarship (up to ₹8 Lakh gets Freeship fee concession)',
        'Must have passed the previous examination',
        'Valid Non-Creamy Layer Certificate is mandatory for OBC and VJNT categories',
        'Must hold Maharashtra Domicile certificate'
      ],
      hi: [
        'उम्मीदवार महाराष्ट्र के ओबीसी, विजेएनटी या एसबीसी वर्ग से होना चाहिए',
        'छात्रवृत्ति हेतु वार्षिक आय ₹1,50,000 से कम (₹8 लाख तक फ्रीशिप शुल्क छूट)',
        'पिछली कक्षा में उत्तीर्ण होना आवश्यक',
        'गैर-मलाईदार परत (Non-Creamy Layer) प्रमाणपत्र अनिवार्य है',
        'महाराष्ट्र अधिवास प्रमाणपत्र अनिवार्य'
      ],
      mr: [
        'विद्यार्थी महाराष्ट्र राज्यातील ओबीसी, विजेएनटी किंवा एसबीसी प्रवर्गातील असावा',
        'शिष्यवृत्तीसाठी कौटुंबिक उत्पन्न ₹१,५०,००० पर्यंत (₹८ लाखांपर्यंत शिक्षण शुल्क सवलत/फ्रीशिप)',
        'मागील परीक्षेत उत्तीर्ण असणे आवश्यक',
        'वैध नॉन-क्रिमीलेअर (Non-Creamy Layer) प्रमाणपत्र असणे बंधनकारक',
        'महाराष्ट्राचे अधिवास प्रमाणपत्र असणे आवश्यक'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-caste-cert',
        name: {
          en: 'Caste Certificate (OBC/VJNT/SBC)',
          hi: 'जाति प्रमाणपत्र (OBC/VJNT/SBC)',
          mr: 'जातीचा दाखला (OBC/VJNT/SBC)'
        },
        issuingAuthority: {
          en: 'Competent SDO / Executive Magistrate',
          hi: 'उप-विभागीय अधिकारी (SDO)',
          mr: 'उपविभागीय अधिकारी'
        },
        howToObtain: {
          en: 'From Aaple Sarkar portal or Setu Kendra.',
          hi: 'सेतु केंद्र या आपले सरकार पोर्टल से।',
          mr: 'सेतू केंद्र किंवा आपले सरकारवरून घ्या.'
        },
        isMandatory: true
      },
      {
        id: 'doc-ncl',
        name: {
          en: 'Non-Creamy Layer Certificate (Valid for Current Year)',
          hi: 'नॉन-क्रीमीलेयर प्रमाणपत्र (चालू वर्ष हेतु वैध)',
          mr: 'नॉन-क्रिमीलेअर प्रमाणपत्र (चालू आर्थिक वर्षासाठी वैध)'
        },
        issuingAuthority: {
          en: 'Tahsildar / Sub-Divisional Officer',
          hi: 'तहसीलदार / एसडीओ',
          mr: 'तहसीलदार / उपविभागीय अधिकारी'
        },
        howToObtain: {
          en: 'Apply on Aaple Sarkar with last 3 years income proof of father.',
          hi: 'पिता के पिछले 3 साल के आय प्रमाण के साथ आवेदन करें।',
          mr: 'वडिलांच्या मागील ३ वर्षांच्या उत्पन्नाचा पुरावा जोडून अर्ज करा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Tahsildar Income Certificate',
          hi: 'तहसीलदार आय प्रमाणपत्र',
          mr: 'तहसीलदार उत्पन्नाचा दाखला'
        },
        issuingAuthority: {
          en: 'Tehsildar Office',
          hi: 'तहसीलदार कार्यालय',
          mr: 'तहसीलदार कार्यालय'
        },
        howToObtain: {
          en: 'Issued by local Tahsil office.',
          hi: 'स्थानीय तहसील कार्यालय से प्राप्त करें।',
          mr: 'तहसील कार्यालयाकडून मिळवा.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Fill Profile on MahaDBT',
          hi: 'महाडीबीटी पर प्रोफाइल भरें',
          mr: 'महाडीबीटीवर प्रोफाईल भरा'
        },
        description: {
          en: 'Upload Caste Certificate, Non-Creamy Layer, and Income Certificate.',
          hi: 'जाति प्रमाणपत्र, नॉन-क्रीमीलेयर व आय प्रमाण अपलोड करें।',
          mr: 'जात दाखला, नॉन-क्रिमीलेअर आणि उत्पन्नाचा दाखला जोडा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Apply under OBC/VJNT/SBC Welfare Dept',
          hi: 'ओबीसी/विजेएनटी कल्याण विभाग में आवेदन करें',
          mr: 'ओबीसी/विजेएनटी बहुजन कल्याण विभागात अर्ज करा'
        },
        description: {
          en: 'Select Post-Matric Scholarship or Tuition Fee Waiver depending on income slab.',
          hi: 'आय के अनुसार छात्रवृत्ति या शिक्षण शुल्क छूट योजना चुनें।',
          mr: 'उत्पन्नाच्या मर्यादेनुसार शिष्यवृत्ती किंवा शिक्षण शुल्क माफी निवडा.'
        }
      }
    ],
    deadline: '2026-10-25',
    deadlineStatus: 'active',
    officialPortalName: 'MahaDBT Portal (OBC & VJNT Dept)',
    officialPortalUrl: 'https://mahadbt.maharashtra.gov.in',
    lastVerifiedDate: '2026-09-17'
  },
  {
    id: 'savitribai-phule-scholarship',
    code: 'MAHA-SAVITRI-05',
    title: {
      en: 'Savitribai Phule Scholarship for Girl Students',
      hi: 'सावित्रीबाई फुले कन्या शिष्यवृत्ति योजना',
      mr: 'क्रांतीज्योती सावित्रीबाई फुले शिष्यवृत्ती योजना (मुलींसाठी)'
    },
    department: {
      en: 'Social Justice & Special Assistance Department, Govt. of Maharashtra',
      hi: 'सामाजिक न्याय विभाग, महाराष्ट्र शासन',
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र शासन'
    },
    governmentLevel: 'state',
    educationLevels: ['10th', '11th-12th'],
    allowedStreams: ['all'],
    allowedCategories: ['sc', 'vjnt', 'sbc', 'obc'],
    maxAnnualIncome: 0, // No income limit for girl students in 8th-10th & junior college!
    minPercentage: 0,
    genderRequirement: 'female',
    requiresMaharashtraDomicile: true,
    schemeType: 'scholarship',
    benefitsSummary: {
      en: 'Annual direct cash scholarship to encourage girls to complete secondary and higher secondary education.',
      hi: 'छात्राओं को माध्यमिक व उच्चतर माध्यमिक शिक्षा पूरी करने हेतु वार्षिक नकद छात्रवृत्ति।',
      mr: 'मुलींना माध्यमिक व उच्च माध्यमिक शिक्षण पूर्ण करण्यासाठी वार्षिक थेट आर्थिक शिष्यवृत्ती.'
    },
    financialBenefit: {
      en: '₹1,000 to ₹1,500/year credited directly without income ceiling.',
      hi: 'बिना किसी आय सीमा के ₹1,000 से ₹1,500 प्रति वर्ष सीधा बैंक खाते में।',
      mr: 'कोणतीही उत्पन्नाची मर्यादा न ठेवता दरवर्षी ₹१,००० ते ₹१,५०० थेट बँक खात्यात.'
    },
    simpleExplanation: {
      en: 'To prevent girls from dropping out after 8th, 9th, 10th or 12th standard, the Maharashtra government offers this stipend to all eligible girl students belonging to backward classes without income limitation.',
      hi: 'छात्राओं की पढ़ाई न छूटे, इसके लिए 10वीं और 12वीं की कक्षाओं में पढ़ रही पिछड़े वर्ग की सभी छात्राओं को बिना किसी आय सीमा के यह छात्रवृत्ति दी जाती है।',
      mr: 'मुलींचे शिक्षण थांबू नये म्हणून १० वी व १२ वी मध्ये शिकणाऱ्या मागासवर्गीय विद्यार्थिनींना कोणत्याही उत्पन्नाच्या अटीशिवाय ही शिष्यवृत्ती दिली जाते.'
    },
    eligibilityBullets: {
      en: [
        'Must be a female student studying in recognized school/junior college in Maharashtra',
        'Belongs to SC, VJNT, SBC or backward classes',
        'NO annual family income limit applies for this scheme',
        'Must maintain regular attendance (minimum 75%)',
        'Application is forwarded directly through school/junior college principal'
      ],
      hi: [
        'महाराष्ट्र के मान्यता प्राप्त स्कूल या जूनियर कॉलेज में पढ़ने वाली छात्रा हो',
        'अनुसूचित जाति (SC), विजेएनटी या एसबीसी वर्ग से संबंधित हो',
        'इस योजना के लिए परिवार की कोई अधिकतम आय सीमा नहीं है',
        'न्यूनतम 75% उपस्थिति आवश्यक',
        'आवेदन स्कूल/कॉलेज प्राचार्य के माध्यम से अग्रेषित किया जाता है'
      ],
      mr: [
        'महाराष्ट्र शासनाच्या मान्यताप्राप्त शाळेत किंवा ज्युनिअर कॉलेजमध्ये शिकणारी विद्यार्थिनी असावी',
        'अनुसूचित जाती (SC), विजेएनटी किंवा एसबीसी प्रवर्गातील असावी',
        'या योजनेसाठी उत्पन्नाची कोणतीही मर्यादा नाही',
        'शाळेत किमान ७५% नियमित उपस्थिती असावी',
        'शाळेच्या मुख्याध्यापकांमार्फतच अर्ज थेट सादर केला जातो'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-caste-cert',
        name: {
          en: 'Caste Certificate of student or father',
          hi: 'छात्रा या पिता का जाति प्रमाणपत्र',
          mr: 'विद्यार्थिनीचा किंवा वडिलांचा जातीचा दाखला'
        },
        issuingAuthority: {
          en: 'Competent Revenue Officer / SDO',
          hi: 'तहसीलदार / एसडीओ',
          mr: 'सक्षम महसूल अधिकारी'
        },
        howToObtain: {
          en: 'From Tahsildar office or Aaple Sarkar.',
          hi: 'तहसीलदार कार्यालय या सेतु केंद्र से।',
          mr: 'तहसीलदार कार्यालय किंवा सेतू केंद्रातून.'
        },
        isMandatory: true
      },
      {
        id: 'doc-aadhaar-bank',
        name: {
          en: 'Student Bank Account Details (Aadhaar linked)',
          hi: 'छात्रा का आधार से जुड़ा बैंक खाता',
          mr: 'विद्यार्थिनीचे आधार लिंक असलेले बँक पासबुक'
        },
        issuingAuthority: {
          en: 'Nationalized Bank / India Post Payments Bank',
          hi: 'बैंक या डाकघर',
          mr: 'बँक किंवा पोस्ट ऑफिस'
        },
        howToObtain: {
          en: 'Open Zero-Balance PM Jan Dhan or student savings account in student name.',
          hi: 'छात्रा के नाम से शून्य-बैलेंस बचत खाता खोलें।',
          mr: 'विद्यार्थिनीच्या नावे शून्य शिल्लक बचत खाते सुरू करा.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'School Level Application Submission',
          hi: 'स्कूल स्तर पर आवेदन पत्र भरें',
          mr: 'शाळा पातळीवर अर्ज सादर करा'
        },
        description: {
          en: 'Collect the Savitribai Phule scholarship form from the school/college clerk in July-August.',
          hi: 'जुलाई-अगस्त में स्कूल/कॉलेज कार्यालय से फॉर्म प्राप्त कर भरें।',
          mr: 'शाळेच्या शिष्यवृत्ती विभागाकडून छापील अर्ज घेऊन भरा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Headmaster Endorsement & Forwarding',
          hi: 'मुख्याध्यापक द्वारा सत्यापन एवं अग्रेषण',
          mr: 'मुख्याध्यापकांचे प्रमाणीकरण व ऑनलाईन नोंद'
        },
        description: {
          en: 'Principal approves attendance and submits batch to District Social Welfare Officer.',
          hi: 'प्रिंसिपल उपस्थिति सत्यापित कर समाज कल्याण विभाग को भेजते हैं।',
          mr: 'मुख्याध्यापक उपस्थिती तपासून समाज कल्याण विभागाकडे यादी पाठवतात.'
        }
      }
    ],
    deadline: '2026-10-15',
    deadlineStatus: 'closing_soon',
    officialPortalName: 'Maharashtra Social Justice Department',
    officialPortalUrl: 'https://sjsa.maharashtra.gov.in',
    lastVerifiedDate: '2026-09-12'
  },
  {
    id: 'aicte-pragati-girls',
    code: 'CENT-AICTE-PRAGATI-06',
    title: {
      en: 'AICTE Pragati Scholarship for Girl Students (Technical Degree & Diploma)',
      hi: 'एआईसीटीई प्रगति छात्रा छात्रवृत्ति (तकनीकी डिग्री एवं डिप्लोमा)',
      mr: 'एआयसीटीई प्रगती शिष्यवृत्ती योजना (मुलींसाठी तंत्रशिक्षण - पदवी व पदविका)'
    },
    department: {
      en: 'All India Council for Technical Education (AICTE), Ministry of Education, Govt. of India',
      hi: 'अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE), भारत सरकार',
      mr: 'अखिल भारतीय तंत्रशिक्षण परिषद (AICTE), भारत सरकार'
    },
    governmentLevel: 'central',
    educationLevels: ['diploma', 'degree'],
    allowedStreams: ['engineering', 'vocational'],
    allowedCategories: ['all'],
    maxAnnualIncome: 800000,
    minPercentage: 0,
    genderRequirement: 'female',
    requiresMaharashtraDomicile: false,
    schemeType: 'scholarship',
    benefitsSummary: {
      en: '₹50,000 per year scholarship for every year of degree (4 years) or diploma (3 years) study.',
      hi: 'डिग्री (4 वर्ष) या डिप्लोमा (3 वर्ष) की पढ़ाई के दौरान ₹50,000 प्रति वर्ष की छात्रवृत्ति।',
      mr: 'डिग्री किंवा डिप्लोमाच्या प्रत्येक वर्षासाठी दरवर्षी ₹५०,००० रोख शिष्यवृत्ती.'
    },
    financialBenefit: {
      en: '₹50,000 per annum paid as a lump sum towards college fees, computer purchase, and stationery.',
      hi: 'कॉलेज फीस, लैपटॉप/कंप्यूटर और किताबों के लिए एकमुश्त ₹50,000 प्रति वर्ष।',
      mr: 'कॉलेज फी, लॅपटॉप/पुस्तके खरेदीसाठी एकरकमी ₹५०,००० दरवर्षी थेट बँक खात्यात.'
    },
    simpleExplanation: {
      en: 'Female students admitted into the first year of AICTE-approved Engineering/Polytechnic diploma or degree programs with family income under ₹8 Lakh receive ₹50,000 every year to cover their tuition, laptop, books, and living expenses.',
      hi: 'एआईसीटीई से मान्यता प्राप्त कॉलेज में इंजीनियरिंग डिग्री या पॉलिटेक्निक डिप्लोमा में प्रवेश लेने वाली छात्राओं को जिनकी पारिवारिक आय ₹8 लाख तक है, हर साल ₹50,000 की छात्रवृत्ति मिलती है।',
      mr: 'एआयसीटीई मान्यताप्राप्त कॉलेजमध्ये इंजिनिअरिंग डिग्री किंवा पॉलिटेक्निक डिप्लोमाच्या पहिल्या वर्षात प्रवेश घेतलेल्या व कुटुंब उत्पन्न ₹८ लाखांच्या आत असणाऱ्या मुलींना दरवर्षी ₹५०,००० मिळतात.'
    },
    eligibilityBullets: {
      en: [
        'Only girl students admitted to 1st year or 2nd year (Lateral Entry) of Technical Degree/Diploma',
        'College must be approved by AICTE',
        'Maximum 2 girl children per family eligible',
        'Family annual income must not exceed ₹8,00,000',
        'Admission must be through Centralized Allotment Process (CAP)'
      ],
      hi: [
        'केवल तकनीकी डिग्री या डिप्लोमा के प्रथम वर्ष या लेटरल एंट्री में प्रवेशित छात्राएं',
        'कॉलेज एआईसीटीई (AICTE) द्वारा अनुमोदित होना आवश्यक',
        'प्रति परिवार अधिकतम 2 लड़कियां पात्र',
        'पारिवारिक वार्षिक आय ₹8,00,000 से अधिक न हो',
        'प्रवेश केंद्रीकृत सीट आवंटन (CAP) के माध्यम से होना चाहिए'
      ],
      mr: [
        'फक्त टेक्निकल डिग्री किंवा डिप्लोमाच्या पहिल्या वर्षात किंवा थेट द्वितीय वर्षात (Lateral Entry) प्रवेशित मुली',
        'कॉलेज एआयसीटीई (AICTE) मान्यताप्राप्त असणे गरजेचे',
        'एका कुटुंबातील जास्तीत जास्त २ मुली पात्र',
        'वार्षिक कौटुंबिक उत्पन्न ₹८,००,००० च्या आत असावे',
        'प्रवेश कॅप (CAP) प्रक्रियेतून झालेला असावा'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Annual Family Income Certificate (< ₹8 Lakh)',
          hi: 'वार्षिक पारिवारिक आय प्रमाणपत्र (< ₹8 लाख)',
          mr: 'वार्षिक कौटुंबिक उत्पन्नाचा दाखला (< ₹८ लाख)'
        },
        issuingAuthority: {
          en: 'Competent Revenue Officer / Tehsildar',
          hi: 'तहसीलदार कार्यालय',
          mr: 'तहसीलदार कार्यालय'
        },
        howToObtain: {
          en: 'Issued by local revenue authority on Aaple Sarkar.',
          hi: 'तहसीलदार से आय प्रमाणपत्र बनवाएं।',
          mr: 'तहसीलदारांकडून उत्पन्नाचा दाखला मिळवा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-bonafide-study',
        name: {
          en: 'Bonafide Certificate & AICTE College Code Proof',
          hi: 'बोनाफाइड प्रमाणपत्र और कॉलेज एआईसीटीई कोड',
          mr: 'बोनाफाईड प्रमाणपत्र आणि कॉलेज एआयसीटीई कोड पुरावा'
        },
        issuingAuthority: {
          en: 'Engineering College / Polytechnic Principal',
          hi: 'कॉलेज प्राचार्य',
          mr: 'इंजिनिअरिंग कॉलेज / पॉलिटेक्निक प्राचार्य'
        },
        howToObtain: {
          en: 'Obtain bonafide certificate specifically for AICTE Pragati from college student section.',
          hi: 'कॉलेज छात्र शाखा से बोनाफाइड प्रमाणपत्र प्राप्त करें।',
          mr: 'कॉलेजच्या स्टुडंट सेक्शनमधून बोनाफाईड सर्टिफिकेट घ्या.'
        },
        isMandatory: true
      },
      {
        id: 'doc-cap-allotment',
        name: {
          en: 'CAP Round Admission Seat Allotment Letter',
          hi: 'कैप राउंड प्रवेश पत्र',
          mr: 'कॅप (CAP) फेरी प्रवेश वाटप पत्र'
        },
        issuingAuthority: {
          en: 'State CET Cell Maharashtra',
          hi: 'सीईटी सेल',
          mr: 'सीईटी सेल'
        },
        howToObtain: {
          en: 'Downloaded CET allotment slip verifying merit admission.',
          hi: 'सीईटी आवंटन पत्र डाउनलोड करें।',
          mr: 'सीईटी सेलच्या लॉगिनमधून वाटप पत्र डाउनलोड करा.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Register on National Scholarship Portal (NSP)',
          hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर पंजीकरण करें',
          mr: 'नॅशनल स्कॉलरशिप पोर्टल (NSP) वर नोंदणी करा'
        },
        description: {
          en: 'Go to scholarships.gov.in and complete One-Time Registration (OTR) with Aadhaar Face/OTP.',
          hi: 'scholarships.gov.in पर जाएं और आधार प्रमाणीकरण से वन-टाइम रजिस्ट्रेशन (OTR) पूरा करें।',
          mr: 'scholarships.gov.in वर जाऊन आधार प्रमाणीकरणाद्वारे वन-टाईम रजिस्ट्रेशन (OTR) पूर्ण करा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Select AICTE Pragati Scheme',
          hi: 'एआईसीटीई प्रगति योजना का चयन करें',
          mr: 'एआयसीटीई प्रगती योजना निवडा'
        },
        description: {
          en: 'Fill academic history, fee details, and upload bonafide and income certificates.',
          hi: 'अकादमिक जानकारी भरें और आवश्यक दस्तावेज अपलोड करें।',
          mr: 'शैक्षणिक माहिती भरून बोनाफाईड व उत्पन्नाचा दाखला जोडा.'
        }
      },
      {
        stepNumber: 3,
        title: {
          en: 'Institutional Verification (INO & DNO)',
          hi: 'संस्थान एवं जिला नोडल अधिकारी सत्यापन',
          mr: 'कॉलेज व जिल्हा नोडल अधिकारी पडताळणी'
        },
        description: {
          en: 'College Institute Nodal Officer (INO) verifies application on the NSP portal.',
          hi: 'कॉलेज नोडल अधिकारी पोर्टल पर आपके फॉर्म का ऑनलाइन सत्यापन करते हैं।',
          mr: 'कॉलेजचे नोडल अधिकारी पोर्टलवर अर्जाची ऑनलाईन पडताळणी करतात.'
        }
      }
    ],
    deadline: '2026-11-20',
    deadlineStatus: 'active',
    officialPortalName: 'National Scholarship Portal (NSP)',
    officialPortalUrl: 'https://scholarships.gov.in',
    lastVerifiedDate: '2026-09-19'
  },
  {
    id: 'central-sector-csss',
    code: 'CENT-CSSS-07',
    title: {
      en: 'Central Sector Scheme of Scholarship for College and University Students (CSSS)',
      hi: 'कॉलेज एवं विश्वविद्यालय छात्रों हेतु केंद्रीय क्षेत्र छात्रवृत्ति योजना',
      mr: 'कॉलेज व विद्यापीठातील विद्यार्थ्यांसाठी सेंट्रल सेक्टर शिष्यवृत्ती योजना (CSSS)'
    },
    department: {
      en: 'Department of Higher Education, Ministry of Education, Govt. of India',
      hi: 'उच्च शिक्षा विभाग, शिक्षा मंत्रालय, भारत सरकार',
      mr: 'उच्च शिक्षण विभाग, शिक्षण मंत्रालय, भारत सरकार'
    },
    governmentLevel: 'central',
    educationLevels: ['degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['all'],
    maxAnnualIncome: 450000,
    minPercentage: 80, // 80th percentile in Class 12 board
    genderRequirement: 'all',
    requiresMaharashtraDomicile: false,
    schemeType: 'merit_award',
    benefitsSummary: {
      en: '₹12,000 per year for Graduation (3 years) and ₹20,000 per year for Post Graduation.',
      hi: 'स्नातक (3 वर्ष) हेतु ₹12,000 प्रति वर्ष एवं स्नातकोत्तर हेतु ₹20,000 प्रति वर्ष।',
      mr: 'पदवीच्या ३ वर्षांसाठी दरवर्षी ₹१२,००० आणि पदव्युत्तर शिक्षणासाठी दरवर्षी ₹२०,००० शिष्यवृत्ती.'
    },
    financialBenefit: {
      en: 'Direct Benefit Transfer (DBT) to bank account: ₹36,000 total for 3-yr UG / ₹48,000 for 4-yr UG.',
      hi: 'सीधे बैंक खाते में डीबीटी: स्नातक के 3 साल के लिए ₹36,000 और 4 साल के लिए ₹48,000।',
      mr: 'थेट बँक खात्यात: पदवीच्या ३ वर्षांसाठी ₹३६,००० व ४ वर्षांच्या इंजिनिअरिंगसाठी ₹४८,०००.'
    },
    simpleExplanation: {
      en: 'Students who scored in the top 20th percentile (above ~80%) in their 12th board exams (HSC / CBSE / ICSE) and have family income under ₹4.5 Lakh receive yearly merit scholarship throughout their college degree.',
      hi: 'जिन छात्रों ने 12वीं बोर्ड में 80% से अधिक अंक हासिल किए हैं और पारिवारिक आय ₹4.5 लाख से कम है, उन्हें पूरे कॉलेज की पढ़ाई के दौरान हर साल योग्यता छात्रवृत्ति मिलती है।',
      mr: 'ज्या विद्यार्थ्यांनी १२ वी बोर्ड परीक्षेत ८०% पेक्षा जास्त गुण (टॉप २० टक्के गुणवंत) मिळवले आहेत आणि कौटुंबिक उत्पन्न ₹४.५ लाखांच्या आत आहे, त्यांना संपूर्ण पदवी काळात दरवर्षी शिष्यवृत्ती मिळते.'
    },
    eligibilityBullets: {
      en: [
        'Above 80th percentile in relevant stream in Class 12 (HSC Maharashtra Board / CBSE)',
        'Pursuing regular (full-time) degree course in recognized college/university',
        'Annual parental income should not exceed ₹4,50,000',
        'Not receiving any other Central or State government scholarship simultaneously',
        'Renewal requires minimum 50% marks in annual university exam'
      ],
      hi: [
        '12वीं बोर्ड परीक्षा (HSC/CBSE) में संबंधित स्ट्रीम में 80 पर्सेंटाइल से अधिक अंक',
        'मान्यता प्राप्त कॉलेज में नियमित (फुल-टाइम) डिग्री कोर्स कर रहे हों',
        'वार्षिक पारिवारिक आय ₹4,50,000 से अधिक न हो',
        'साथ में किसी अन्य सरकारी छात्रवृत्ति का लाभ न ले रहे हों',
        'नवीनीकरण के लिए हर साल कम से कम 50% अंक आवश्यक'
      ],
      mr: [
        '१२ वी बोर्ड परीक्षेत (HSC / CBSE) संबंधित शाखेत ८० पर्सेंटाईलपेक्षा जास्त गुण',
        'मान्यताप्राप्त कॉलेजमध्ये नियमित (Full-Time) पदवी अभ्यासक्रमात शिक्षण घेत असावे',
        'वार्षिक कौटुंबिक उत्पन्न ₹४,५०,००० पेक्षा जास्त नसावे',
        'एकाच वेळी इतर कोणत्याही सरकारी शिष्यवृत्तीचा लाभ घेतलेला नसावा',
        'पुढील वर्षाच्या नूतनीकरणासाठी कॉलेज परीक्षेत किमान ५०% गुण आवश्यक'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-hsc-marksheet',
        name: {
          en: '12th Standard (HSC) Marksheet verifying percentile',
          hi: '12वीं (HSC) की अंकसूची',
          mr: '१२ वी बोर्ड परीक्षेचे अधिकृत गुणपत्रक'
        },
        issuingAuthority: {
          en: 'Maharashtra State Board / CBSE',
          hi: 'महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडल',
          mr: 'महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ (पुणे)'
        },
        howToObtain: {
          en: 'Official original marksheet issued by Junior College.',
          hi: 'अपने जूनियर कॉलेज से मूल अंकसूची प्राप्त करें।',
          mr: 'ज्युनिअर कॉलेजकडून मिळालेले मूळ गुणपत्रक.'
        },
        isMandatory: true
      },
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Income Certificate (< ₹4.5 Lakh)',
          hi: 'आय प्रमाणपत्र (< ₹4.5 लाख)',
          mr: 'तहसीलदार उत्पन्नाचा दाखला (< ₹४.५ लाख)'
        },
        issuingAuthority: {
          en: 'Revenue Officer / Tehsildar',
          hi: 'तहसीलदार कार्यालय',
          mr: 'तहसीलदार कार्यालय'
        },
        howToObtain: {
          en: 'From Aaple Sarkar portal with salary slip or agricultural income.',
          hi: 'आपले सरकार पोर्टल से ऑनलाइन प्राप्त करें।',
          mr: 'आपले सरकार पोर्टलवरून ऑनलाईन मिळवा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-bonafide-study',
        name: {
          en: 'College Bonafide Certificate with Roll No & Course Year',
          hi: 'कॉलेज बोनाफाइड प्रमाणपत्र',
          mr: 'कॉलेजचे बोनाफाईड प्रमाणपत्र'
        },
        issuingAuthority: {
          en: 'Degree College Principal',
          hi: 'कॉलेज प्रिंसिपल',
          mr: 'कॉलेज प्राचार्य'
        },
        howToObtain: {
          en: 'Issued by college upon admission verification.',
          hi: 'कॉलेज कार्यालय से प्राप्त करें।',
          mr: 'कॉलेजच्या विद्यार्थी विभागाकडून घ्या.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Check Cutoff Percentile on Board Portal',
          hi: 'बोर्ड कटऑफ सूची में अपना नाम/प्रतिशत जांचें',
          mr: 'मंडळाच्या संकेतस्थळावर कटऑफ पर्सेंटाईल तपासा'
        },
        description: {
          en: 'Maharashtra State Board publishes stream-wise cutoff marks for Central Sector Scholarship in August.',
          hi: 'महाराष्ट्र बोर्ड प्रतिवर्ष अगस्त में स्ट्रीम-वार कटऑफ अंक जारी करता है।',
          mr: 'महाराष्ट्र राज्य मंडळ दरवर्षी ऑगस्टमध्ये शाखांनुसार कटऑफ यादी जाहीर करते.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Submit Application on NSP',
          hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर आवेदन करें',
          mr: 'नॅशनल स्कॉलरशिप पोर्टल (NSP) वर अर्ज सादर करा'
        },
        description: {
          en: 'Log in to scholarships.gov.in, select CSSS under Ministry of Education, and complete application.',
          hi: 'scholarships.gov.in पर जाएं और शिक्षा मंत्रालय के अंतर्गत सीएसएसएस योजना चुनें।',
          mr: 'scholarships.gov.in वर जाऊन शिक्षण मंत्रालयाअंतर्गत योजना निवडून अर्ज करा.'
        }
      }
    ],
    deadline: '2026-10-31',
    deadlineStatus: 'active',
    officialPortalName: 'National Scholarship Portal',
    officialPortalUrl: 'https://scholarships.gov.in',
    lastVerifiedDate: '2026-09-16'
  },
  {
    id: 'mukhyamantri-yuva-prashikshan',
    code: 'MAHA-SKILL-YUVAKARYA-08',
    title: {
      en: 'Mukhyamantri Yuva Karya Prashikshan Yojana (Maharashtra Skill & Internship Stipend)',
      hi: 'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (महाराष्ट्र कौशल्य व इंटर्नशिप वजीफा)',
      mr: 'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (महाराष्ट्र कौशल्य व विद्यावेतन)'
    },
    department: {
      en: 'Skills, Employment, Entrepreneurship & Innovation Dept, Govt. of Maharashtra',
      hi: 'कौशल, रोजगार एवं उद्यमिता विभाग, महाराष्ट्र शासन',
      mr: 'कौशल्य, रोजगार, उद्योजकता व नाविन्यता विभाग, महाराष्ट्र शासन'
    },
    governmentLevel: 'state',
    educationLevels: ['11th-12th', 'diploma', 'iti', 'degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['all'],
    maxAnnualIncome: 0, // No income cap
    minPercentage: 0,
    genderRequirement: 'all',
    requiresMaharashtraDomicile: true,
    schemeType: 'skill_allowance',
    benefitsSummary: {
      en: 'Monthly direct government stipend of ₹6,000 (12th passed), ₹8,000 (ITI/Diploma), or ₹10,000 (Graduate) for 6 months on-the-job training.',
      hi: '6 महीने के व्यावहारिक प्रशिक्षण हेतु ₹6,000 (12वीं पास), ₹8,000 (आईटीआई/डिप्लोमा), या ₹10,000 (स्नातक) का मासिक सरकारी मानदेय।',
      mr: '६ महिन्यांच्या प्रत्यक्ष कार्य प्रशिक्षणासाठी दरमहा ₹६,००० (१२ वी पास), ₹८,००० (आयटीआय/डिप्लोमा), किंवा ₹१०,००० (पदवीधर) थेट विद्यावेतन.'
    },
    financialBenefit: {
      en: 'Total stipend of ₹36,000 to ₹60,000 paid directly by Maharashtra Govt via DBT into trainee bank account.',
      hi: 'प्रशिक्षण अवधि में ₹36,000 से ₹60,000 का कुल सरकारी मानदेय सीधा बैंक खाते में।',
      mr: '६ महिन्यांत ₹३६,००० ते ₹६०,००० थेट बँक खात्यात शासनाकडून जमा.'
    },
    simpleExplanation: {
      en: 'Students who completed 12th, ITI, Diploma, or Degree who want practical industry work experience can join registered government or private organizations and receive a handsome monthly stipend paid directly by the government.',
      hi: '12वीं, आईटीआई, डिप्लोमा या डिग्री पूरी कर चुके युवा जो कंपनियों या सरकारी कार्यालयों में काम का अनुभव लेना चाहते हैं, उन्हें सरकार 6 महीने तक हर माह ₹6,000 से ₹10,000 का वजीफा देती है।',
      mr: '१२ वी, आयटीआय, पदविका किंवा पदवी पूर्ण केलेले विद्यार्थी उद्योग किंवा शासकीय कार्यालयांमध्ये प्रत्यक्ष काम शिकताना शासनाकडून दरमहा ₹६,००० ते ₹१०,००० विद्यावेतन मिळवू शकतात.'
    },
    eligibilityBullets: {
      en: [
        'Candidate age must be between 18 to 35 years',
        'Must be a permanent resident (Domicile) of Maharashtra',
        'Minimum education: 12th Pass, ITI, Polytechnic Diploma, or Degree / PG',
        'Must register on the Rojgar portal (rojgar.mahaswayam.gov.in)',
        'No income criteria; open to candidates of all social categories'
      ],
      hi: [
        'उम्मीदवार की आयु 18 से 35 वर्ष के बीच होनी चाहिए',
        'महाराष्ट्र राज्य का स्थायी निवासी (अधिवास) होना आवश्यक',
        'न्यूनतम शैक्षणिक योग्यता: 12वीं पास, आईटीआई, डिप्लोमा, या स्नातक/पीजी',
        'रोजगार पोर्टल (rojgar.mahaswayam.gov.in) पर पंजीकरण अनिवार्य',
        'कोई आय सीमा नहीं; सभी वर्गों के लिए उपलब्ध'
      ],
      mr: [
        'उमेदवाराचे वय १८ ते ३५ वर्षांच्या दरम्यान असावे',
        'महाराष्ट्र राज्याचा रहिवासी (डोमिसाईल) असणे आवश्यक',
        'किमान शैक्षणिक पात्रता: १२ वी उत्तीर्ण, आयटीआय, पदविका किंवा पदवी/पदव्युत्तर',
        'महास्वयं रोजगार पोर्टलवर नोंदणी असणे आवश्यक',
        'कोणतीही उत्पन्नाची अट नाही; सर्व प्रवर्गातील तरुणांसाठी खुली'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-domicile',
        name: {
          en: 'Maharashtra Domicile Certificate',
          hi: 'महाराष्ट्र अधिवास प्रमाणपत्र',
          mr: 'महाराष्ट्र अधिवास प्रमाणपत्र (डोमिसाईल)'
        },
        issuingAuthority: {
          en: 'Revenue Authority / Aaple Sarkar',
          hi: 'तहसीलदार कार्यालय',
          mr: 'तहसीलदार कार्यालय'
        },
        howToObtain: {
          en: 'Aaple Sarkar verified domicile certificate.',
          hi: 'आपले सरकार द्वारा जारी प्रमाणपत्र।',
          mr: 'आपले सरकार पोर्टलवरून डिजिटल प्रमाणपत्र.'
        },
        isMandatory: true
      },
      {
        id: 'doc-education-proof',
        name: {
          en: 'Passing Certificate of 12th / ITI / Diploma / Degree',
          hi: '12वीं / आईटीआई / डिप्लोमा / डिग्री उत्तीर्ण प्रमाणपत्र',
          mr: '१२ वी / आयटीआय / डिप्लोमा / पदवी उत्तीर्ण प्रमाणपत्र'
        },
        issuingAuthority: {
          en: 'Board / DVET / University',
          hi: 'बोर्ड / विश्वविद्यालय',
          mr: 'बोर्ड / विद्यापीठ'
        },
        howToObtain: {
          en: 'Degree or passing certificate.',
          hi: 'अंतिम उत्तीर्ण प्रमाणपत्र।',
          mr: 'मूळ गुणपत्रिका व उत्तीर्ण दाखला.'
        },
        isMandatory: true
      },
      {
        id: 'doc-aadhaar-bank',
        name: {
          en: 'Aadhaar Seeded Bank Account Details',
          hi: 'आधार से जुड़ा बैंक खाता विवरण',
          mr: 'आधार लिंक असलेले बँक खाते'
        },
        issuingAuthority: {
          en: 'Nationalized Bank',
          hi: 'बैंक',
          mr: 'बँक'
        },
        howToObtain: {
          en: 'Aadhaar linked passbook for monthly DBT stipend.',
          hi: 'मासिक वजीफे के लिए आधार लिंक्ड बैंक खाता।',
          mr: 'विद्यावेतन जमा होण्यासाठी आधार लिंक बँक पासबुक.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Register on Mahaswayam Portal',
          hi: 'महास्वयं पोर्टल पर पंजीकरण करें',
          mr: 'महास्वयं पोर्टलवर नोंदणी करा'
        },
        description: {
          en: 'Visit rojgar.mahaswayam.gov.in and create jobseeker profile with qualifications.',
          hi: 'rojgar.mahaswayam.gov.in पर जाएं और जॉबसीकर प्रोफाइल बनाएं।',
          mr: 'rojgar.mahaswayam.gov.in वर जाऊन उमेदवार म्हणून प्रोफाईल तयार करा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Select Training Employer Opportunity',
          hi: 'प्रशिक्षण प्रदाता कंपनी/विभाग का चयन करें',
          mr: 'प्रशिक्षण देणाऱ्या कंपनीची/संस्थेची निवड करा'
        },
        description: {
          en: 'Browse internship vacancies matching your district and qualification and apply.',
          hi: 'अपने जिले और डिग्री के अनुसार उपलब्ध इंटर्नशिप पद चुनें।',
          mr: 'आपल्या जिल्ह्यातील उपलब्ध प्रशिक्षण जागा पाहून ऑनलाईन अर्ज करा.'
        }
      }
    ],
    deadline: '2026-12-31',
    deadlineStatus: 'open_rolling',
    officialPortalName: 'MahaSwayam Portal (Maharashtra Govt)',
    officialPortalUrl: 'https://rojgar.mahaswayam.gov.in',
    lastVerifiedDate: '2026-09-21'
  },
  {
    id: 'post-matric-disability',
    code: 'CENT-DEPWD-09',
    title: {
      en: 'Post-Matric Scholarship for Students with Disabilities (Divyangjan)',
      hi: 'दिव्यांग छात्रों हेतु मैट्रिक-उपरांत छात्रवृत्ति योजना',
      mr: 'दिव्यांग विद्यार्थ्यांसाठी मॅट्रिकोत्तर शिष्यवृत्ती योजना'
    },
    department: {
      en: 'Department of Empowerment of Persons with Disabilities, Govt. of India',
      hi: 'दिव्यांगजन सशक्तिकरण विभाग, भारत सरकार',
      mr: 'दिव्यांग व्यक्ती सक्षमीकरण विभाग, भारत सरकार'
    },
    governmentLevel: 'central',
    educationLevels: ['11th-12th', 'diploma', 'iti', 'degree', 'postgraduate'],
    allowedStreams: ['all'],
    allowedCategories: ['all'],
    maxAnnualIncome: 250000,
    minPercentage: 0,
    genderRequirement: 'all',
    requiresMaharashtraDomicile: false,
    requiresDisability: true,
    schemeType: 'scholarship',
    benefitsSummary: {
      en: 'Full Tuition Fee Reimbursement + Monthly Maintenance Allowance + Disability Equipment & Reader Allowance.',
      hi: 'पूरी ट्यूशन फीस माफी + मासिक निर्वाह भत्ता + सहायक उपकरण एवं रीडर भत्ता।',
      mr: 'संपूर्ण कॉलेज फी परतावा + मासिक निर्वाह भत्ता + वाचक व सहाय्यक साधन भत्ता.'
    },
    financialBenefit: {
      en: 'Up to ₹4,000/month allowance + full fee waiver + ₹4,000/year book allowance.',
      hi: '₹4,000/माह तक का निर्वाह भत्ता + पूरी फीस माफी + पुस्तक भत्ता।',
      mr: 'दरमहा ₹४,००० पर्यंत भत्ता + पूर्ण फी माफी + शैक्षणिक पुस्तक अनुदान.'
    },
    simpleExplanation: {
      en: 'Students with 40% or more disability pursuing studies from Class 11th to Post Graduation receive comprehensive financial aid covering tuition, books, assistive devices, and living allowances.',
      hi: '40% या अधिक दिव्यांगता वाले छात्र जो 11वीं से लेकर पोस्ट ग्रेजुएशन तक पढ़ाई कर रहे हैं, उन्हें कॉलेज फीस के साथ-साथ रहने, किताबों और सहायक उपकरणों का पूरा खर्च सरकार देती है।',
      mr: '४०% किंवा त्याहून अधिक दिव्यांगत्व असलेले विद्यार्थी जे ११ वी ते पदव्युत्तर शिक्षण घेत आहेत, त्यांना कॉलेज फी सोबतच राहण्याचा, पुस्तकांचा व उपकरणांचा सर्व खर्च मिळतो.'
    },
    eligibilityBullets: {
      en: [
        'Minimum 40% disability certified by competent medical authority with UDID Card',
        'Studying in Class 11th, 12th, ITI, Diploma, Degree, or PG in recognized institution',
        'Annual parental income should not exceed ₹2,50,000',
        'Applicable across all communities (Open, OBC, SC, ST, EWS)'
      ],
      hi: [
        'सक्षम चिकित्सा बोर्ड द्वारा 40% या अधिक दिव्यांगता प्रमाणित (यूडीआईडी कार्ड धारक)',
        '11वीं, 12वीं, आईटीआई, डिप्लोमा, डिग्री या पीजी में पढ़ रहे हों',
        'पारिवारिक वार्षिक आय ₹2,50,000 से अधिक न हो',
        'सभी वर्गों के छात्रों के लिए समान रूप से उपलब्ध'
      ],
      mr: [
        'वैद्यकीय मंडळाचे किमान ४०% दिव्यांगत्वाचे प्रमाणपत्र किंवा युडीआयडी (UDID) कार्ड',
        '११ वी, १२ वी, आयटीआय, पदविका किंवा पदवी अभ्यासक्रमात शिकत असावे',
        'कौटुंबिक वार्षिक उत्पन्न ₹२,५०,००० पेक्षा जास्त नसावे',
        'सर्व सामाजिक प्रवर्गांतील विद्यार्थ्यांसाठी उपलब्ध'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-udid',
        name: {
          en: 'Unique Disability ID (UDID) Card or Civil Surgeon Certificate (>= 40%)',
          hi: 'यूडीआईडी कार्ड (UDID) या सिविल सर्जन दिव्यांगता प्रमाणपत्र',
          mr: 'युडीआयडी (UDID) कार्ड किंवा जिल्हा शल्यचिकित्सकांचे दिव्यांग प्रमाणपत्र'
        },
        issuingAuthority: {
          en: 'District Civil Surgeon / Department of Empowerment of PwD',
          hi: 'जिला सिविल सर्जन / स्वास्थ्य विभाग',
          mr: 'जिल्हा शल्यचिकित्सक / आरोग्य विभाग'
        },
        howToObtain: {
          en: 'Issued by district government hospital or downloaded from swavlambancard.gov.in.',
          hi: 'swavlambancard.gov.in से यूडीआईडी कार्ड प्राप्त करें।',
          mr: 'swavlambancard.gov.in वरून युडीआयडी कार्ड डाउनलोड करा.'
        },
        isMandatory: true
      },
      {
        id: 'doc-income-tehsildar',
        name: {
          en: 'Income Certificate (< ₹2.5 Lakh)',
          hi: 'आय प्रमाणपत्र (< ₹2.5 लाख)',
          mr: 'तहसीलदार उत्पन्नाचा दाखला (< ₹२.५ लाख)'
        },
        issuingAuthority: {
          en: 'Tahsildar Office',
          hi: 'तहसीलदार',
          mr: 'तहसीलदार'
        },
        howToObtain: {
          en: 'Competent authority income certificate.',
          hi: 'सक्षम प्राधिकारी से प्राप्त करें।',
          mr: 'तहसीलदार कार्यालयाकडून मिळवा.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Apply on National Scholarship Portal (NSP)',
          hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल पर आवेदन करें',
          mr: 'नॅशनल स्कॉलरशिप पोर्टल (NSP) वर अर्ज करा'
        },
        description: {
          en: 'Register on scholarships.gov.in with UDID card details.',
          hi: 'scholarships.gov.in पर यूडीआईडी कार्ड विवरण के साथ आवेदन करें।',
          mr: 'scholarships.gov.in वर युडीआयडी कार्ड क्रमांकासह अर्ज सादर करा.'
        }
      }
    ],
    deadline: '2026-10-31',
    deadlineStatus: 'active',
    officialPortalName: 'National Scholarship Portal (DEPwD)',
    officialPortalUrl: 'https://scholarships.gov.in',
    lastVerifiedDate: '2026-09-14'
  },
  {
    id: 'naps-iti-apprenticeship',
    code: 'CENT-MSDE-NAPS-10',
    title: {
      en: 'National Apprenticeship Promotion Scheme (NAPS / ITI Vocational)',
      hi: 'राष्ट्रीय शिक्षुता संवर्धन योजना (NAPS / आईटीआई शिक्षुता)',
      mr: 'राष्ट्रीय शिकाऊ उमेदवारी प्रोत्साहन योजना (NAPS / आयटीआय अप्रेंटिसशिप)'
    },
    department: {
      en: 'Ministry of Skill Development and Entrepreneurship, Govt. of India & DVET Maharashtra',
      hi: 'कौशल विकास एवं उद्यमिता मंत्रालय, भारत सरकार',
      mr: 'कौशल्य विकास व उद्योजकता मंत्रालय, भारत सरकार व डीव्हीईटी महाराष्ट्र'
    },
    governmentLevel: 'central',
    educationLevels: ['10th', 'iti', 'diploma'],
    allowedStreams: ['vocational', 'general'],
    allowedCategories: ['all'],
    maxAnnualIncome: 0,
    minPercentage: 0,
    genderRequirement: 'all',
    requiresMaharashtraDomicile: false,
    schemeType: 'skill_allowance',
    benefitsSummary: {
      en: 'Government subsidized monthly stipend of ₹7,000 to ₹10,000 during 1-2 years hands-on industry apprenticeship.',
      hi: '1-2 वर्ष के उद्योग प्रशिक्षण के दौरान ₹7,000 से ₹10,000 का सरकारी सब्सिडी वाला मासिक वजीफा।',
      mr: '१-२ वर्षांच्या उद्योग प्रशिक्षणादरम्यान दरमहा ₹७,००० ते ₹१०,००० शासकीय अनुदानित विद्यावेतन.'
    },
    financialBenefit: {
      en: 'Direct stipend reimbursement up to ₹1,500/month contributed directly by Government of India into apprentice bank account.',
      hi: 'प्रति माह ₹1,500 की सरकारी सब्सिडी सीधे प्रशिक्षु के बैंक खाते में डीबीटी द्वारा।',
      mr: 'दरमहा ₹१,५०० थेट भारत सरकारकडून विद्यार्थ्याच्या खात्यात व उर्वरित रक्कम कंपनीकडून.'
    },
    simpleExplanation: {
      en: 'For students who completed 10th standard or ITI trade courses, this scheme connects them with companies for paid apprenticeship contracts where they learn practical skills and earn monthly income.',
      hi: '10वीं या आईटीआई पास छात्रों के लिए यह योजना कंपनियों में व्यावहारिक प्रशिक्षण के साथ हर महीने निश्चित मानदेय दिलाती है।',
      mr: '१० वी किंवा आयटीआय उत्तीर्ण झालेल्या विद्यार्थ्यांना नामांकित कंपन्यांमध्ये प्रत्यक्ष कामाचा अनुभव आणि दरमहा हमखास विद्यावेतन मिळवून देणारी योजना.'
    },
    eligibilityBullets: {
      en: [
        'Candidate must be at least 14 years of age (18 for hazardous trades)',
        'Passed 10th standard, ITI (NCVT/SCVT), or Polytechnic Diploma',
        'Must register on the national apprenticeship portal (apprenticeshipindia.gov.in)',
        'No income ceiling; open to all candidates'
      ],
      hi: [
        'उम्मीदवार की आयु न्यूनतम 14 वर्ष होनी चाहिए',
        '10वीं पास, आईटीआई (NCVT/SCVT) या पॉलिटेक्निक डिप्लोमा धारक',
        'अप्रेंटिसशिप पोर्टल (apprenticeshipindia.gov.in) पर पंजीकरण अनिवार्य',
        'कोई पारिवारिक आय सीमा नहीं'
      ],
      mr: [
        'उमेदवाराचे वय किमान १४ वर्षे पूर्ण असावे',
        '१० वी पास, आयटीआय (NCVT/SCVT) किंवा पॉलिटेक्निक डिप्लोमा उत्तीर्ण',
        'apprenticeshipindia.gov.in पोर्टलवर नोंदणी आवश्यक',
        'कोणतीही उत्पन्नाची अट नाही'
      ]
    },
    requiredDocuments: [
      {
        id: 'doc-iti-marksheets',
        name: {
          en: '10th Marksheet & ITI Trade Certificate',
          hi: '10वीं अंकसूची और आईटीआई ट्रेड सर्टिफिकेट',
          mr: '१० वी गुणपत्रक व आयटीआय ट्रेड प्रमाणपत्र'
        },
        issuingAuthority: {
          en: 'State Board / NCVT / DGT',
          hi: 'एनसीवीटी / बोर्ड',
          mr: 'एनसीव्हीटी / राज्य मंडळ'
        },
        howToObtain: {
          en: 'Issued by your ITI institute.',
          hi: 'अपने आईटीआई संस्थान से प्राप्त करें।',
          mr: 'आपल्या आयटीआय कॉलेजमधून घ्या.'
        },
        isMandatory: true
      },
      {
        id: 'doc-aadhaar-bank',
        name: {
          en: 'Aadhaar Card and e-KYC Bank Passbook',
          hi: 'आधार कार्ड व बैंक पासबुक',
          mr: 'आधार कार्ड व ई-केवायसी बँक पासबुक'
        },
        issuingAuthority: {
          en: 'UIDAI & Bank',
          hi: 'बैंक',
          mr: 'बँक'
        },
        howToObtain: {
          en: 'Standard Aadhaar seeded account.',
          hi: 'आधार लिंक बैंक खाता।',
          mr: 'आधार लिंक असलेले बचत खाते.'
        },
        isMandatory: true
      }
    ],
    applicationProcedure: [
      {
        stepNumber: 1,
        title: {
          en: 'Register on Apprenticeship India Portal',
          hi: 'अप्रेंटिसशिप इंडिया पोर्टल पर पंजीकरण करें',
          mr: 'अप्रेंटिसशिप इंडिया पोर्टलवर नोंदणी करा'
        },
        description: {
          en: 'Complete profile and 100% e-KYC on apprenticeshipindia.gov.in.',
          hi: 'apprenticeshipindia.gov.in पर 100% ई-केवाईसी पूरी करें।',
          mr: 'apprenticeshipindia.gov.in वर जाऊन १००% ई-केवायसी पूर्ण करा.'
        }
      },
      {
        stepNumber: 2,
        title: {
          en: 'Apply to Company Apprenticeship Postings',
          hi: 'उद्योगों में अप्रेंटिसशिप पदों हेतु आवेदन करें',
          mr: 'कंपनीच्या अप्रेंटिसशिप जागांसाठी अर्ज करा'
        },
        description: {
          en: 'Search for establishments in Pune, Mumbai, Aurangabad, etc. and accept apprentice contract.',
          hi: 'अपने क्षेत्र की कंपनियों में उपलब्ध अवसरों के लिए आवेदन करें।',
          mr: 'आपल्या जिल्ह्यातील कंपन्यांमध्ये उपलब्ध संधींसाठी ऑनलाईन अर्ज करा.'
        }
      }
    ],
    deadline: '2026-12-31',
    deadlineStatus: 'open_rolling',
    officialPortalName: 'Apprenticeship India Portal (MSDE)',
    officialPortalUrl: 'https://www.apprenticeshipindia.gov.in',
    lastVerifiedDate: '2026-09-15'
  }
];
