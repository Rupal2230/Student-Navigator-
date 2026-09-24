import React, { useState } from 'react';
import { EducationLevel, Language, Scheme } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SCHEMES_DATABASE } from '../data/schemesData';
import {
  Compass,
  ArrowRight,
  BookOpen,
  Award,
  DollarSign,
  CheckCircle2,
  Briefcase,
  Layers
} from 'lucide-react';

interface WhatAfterThisClassProps {
  language: Language;
  onSelectScheme: (scheme: Scheme) => void;
}

export const WhatAfterThisClass: React.FC<WhatAfterThisClassProps> = ({
  language,
  onSelectScheme
}) => {
  const t = TRANSLATIONS[language];
  const [activeStage, setActiveStage] = useState<
    'after10th' | 'after12th' | 'afterDiploma' | 'afterITI' | 'afterDegree'
  >('after10th');

  const stageData = {
    after10th: {
      title: {
        en: 'Opportunities After 10th Standard (SSC)',
        hi: '10वीं कक्षा (SSC) के बाद उपलब्ध अवसर',
        mr: '१० वी (SSC) नंतर उपलब्ध संधी व शिष्यवृत्ती'
      },
      description: {
        en: 'Milestone choices: Junior College (Arts, Science, Commerce), Polytechnic Engineering Diploma, ITI Trades, or Technical Vocational Schools.',
        hi: 'प्रमुख विकल्प: 11वीं-12वीं (कला, विज्ञान, वाणिज्य), पॉलिटेक्निक डिप्लोमा, या आईटीआई व्यावसायिक ट्रेड्स।',
        mr: 'पर्याय: ११ वी-१२ वी (कला, वाणिज्य, विज्ञान), पॉलिटेक्निक डिप्लोमा, किंवा शासकीय आयटीआय ट्रेड्स.'
      },
      schemes: SCHEMES_DATABASE.filter(
        (s) =>
          s.educationLevels.includes('10th') ||
          s.educationLevels.includes('11th-12th') ||
          s.educationLevels.includes('iti')
      ),
      guidancePoints: {
        en: [
          'Post-Matric Scholarships open as soon as 11th admission starts.',
          'Girl students get Savitribai Phule scholarship without income limits.',
          'National Apprenticeship (NAPS) allows earning while learning for ITI & 10th pass.',
          'Polytechnic Diploma students become eligible for AICTE Pragati girls scholarship.'
        ],
        hi: [
          '11वीं में प्रवेश लेते ही मैट्रिक-उपरांत छात्रवृत्ति के लिए पात्र होते हैं।',
          'छात्राओं को बिना किसी आय सीमा के सावित्रीबाई फुले छात्रवृत्ति मिलती है।',
          '10वीं व आईटीआई के बाद राष्ट्रीय शिक्षुता (NAPS) से मासिक वजीफा मिलता है।',
          'पॉलिटेक्निक में प्रवेश लेने वाली छात्राओं को ₹50,000/वर्ष एआईसीटीई प्रगति मिलती है।'
        ],
        mr: [
          '११ वी मध्ये प्रवेश घेताच मॅट्रिकोत्तर शिष्यवृत्तीसाठी अर्ज करता येतो.',
          'मागासवर्गीय विद्यार्थिनींना उत्पन्नाच्या मर्यादेशिवाय सावित्रीबाई फुले शिष्यवृत्ती मिळते.',
          '१० वी व आयटीआय नंतर शिकाऊ उमेदवारीतून (NAPS) थेट मासिक विद्यावेतन सुरू होते.',
          'पॉलिटेक्निक डिप्लोमा प्रवेशित मुलींना दरवर्षी ₹५०,००० एआयसीटीई प्रगती शिष्यवृत्ती.'
        ]
      }
    },
    after12th: {
      title: {
        en: 'Opportunities After 12th Standard (HSC)',
        hi: '12वीं कक्षा (HSC) के बाद उपलब्ध अवसर',
        mr: '१२ वी (HSC) नंतर उपलब्ध संधी व शिष्यवृत्ती'
      },
      description: {
        en: 'Milestone choices: Undergraduate Degrees (B.Tech, MBBS, B.Sc, B.Com, BA, BCA, Law) or direct technical skill training.',
        hi: 'प्रमुख विकल्प: 3 या 4 वर्षीय स्नातक डिग्री (इंजीनियरिंग, मेडिकल, बीएससी, बी.कॉम, बीए) या व्यावसायिक इंटर्नशिप।',
        mr: 'पर्याय: पदवी शिक्षण (इंजिनिअरिंग, वैद्यकीय, बी.एस्सी., बी.कॉम, बी.ए.) किंवा थेट कौशल्य प्रशिक्षण.'
      },
      schemes: SCHEMES_DATABASE.filter(
        (s) =>
          s.educationLevels.includes('11th-12th') ||
          s.educationLevels.includes('degree')
      ),
      guidancePoints: {
        en: [
          '80th percentile scorers in 12th board exams can claim Central Sector (CSSS) ₹12,000/yr.',
          'EBC Fee Waiver: 50% tuition reimbursement for Open/EWS with income <= ₹8 Lakh.',
          'Hostel Subsistence: Dr. Panjabrao Deshmukh scheme provides ₹20,000-₹30,000/yr for rural farmer children.',
          'Mukhyamantri Yuva Karya Prashikshan Yojana offers ₹6,000/mo government internship stipend.'
        ],
        hi: [
          '12वीं में 80% से अधिक अंक पाने वाले सेंट्रल सेक्टर योजना से ₹12,000/वर्ष प्राप्त कर सकते हैं।',
          'ईबीसी शुल्क माफी: ₹8 लाख तक आय वाले सामान्य वर्ग के छात्रों को 50% फीस वापसी।',
          'डॉ. पंजाबराव देशमुख योजना से हॉस्टल में रहने वाले किसान पुत्र/पुत्रियों को ₹20,000-₹30,000/वर्ष।',
          'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना से 12वीं पास को ₹6,000/माह का सरकारी वजीफा।'
        ],
        mr: [
          '१२ वी बोर्डात ८०% पेक्षा जास्त गुण असल्यास सेंट्रल सेक्टर योजनेतून दरवर्षी ₹१२,००० मिळतात.',
          'ईबीसी फी सवलत: खुल्या व ईडब्ल्यूएस प्रवर्गातील विद्यार्थ्यांना ५०% ट्यूशन फी परतावा.',
          'डॉ. पंजाबराव देशमुख योजनेतून वसतिगृहातील विद्यार्थ्यांना दरवर्षी ₹२०,००० ते ₹३०,००० निर्वाह भत्ता.',
          'मुख्यमंत्री युवा कार्य प्रशिक्षण योजनेतून १२ वी उत्तीर्णांना दरमहा ₹६,००० विद्यावेतन.'
        ]
      }
    },
    afterDiploma: {
      title: {
        en: 'Opportunities After Polytechnic Diploma',
        hi: 'पॉलिटेक्निक डिप्लोमा के बाद उपलब्ध अवसर',
        mr: 'पॉलिटेक्निक पदविकेनंतर (Diploma) उपलब्ध संधी'
      },
      description: {
        en: 'Milestone choices: Direct Second Year Degree Engineering (Lateral Entry) or Industrial Training.',
        hi: 'प्रमुख विकल्प: इंजीनियरिंग डिग्री के द्वितीय वर्ष में सीधा प्रवेश (लेटरल एंट्री) या उद्योग में तकनीकी पद।',
        mr: 'पर्याय: इंजिनिअरिंग पदवीच्या थेट द्वितीय वर्षात प्रवेश (Lateral Entry) किंवा थेट उद्योग नोकरी.'
      },
      schemes: SCHEMES_DATABASE.filter(
        (s) =>
          s.educationLevels.includes('diploma') ||
          s.educationLevels.includes('degree')
      ),
      guidancePoints: {
        en: [
          'Direct 2nd Year B.Tech admissions through CAP carry full EBC and caste scholarship continuity.',
          'AICTE Pragati scheme continues for girls entering degree engineering lateral entry.',
          'Mukhyamantri Yuva Karya provides ₹8,000/month stipend for diploma holders.',
          'NAPS provides advanced technical apprenticeship with leading manufacturing hubs.'
        ],
        hi: [
          'डिप्लोमा के बाद डिग्री में लेटरल एंट्री लेने पर भी ईबीसी व जाति छात्रवृत्तियां जारी रहती हैं।',
          'छात्राओं को डिग्री इंजीनियरिंग में भी ₹50,000/वर्ष की प्रगति छात्रवृत्ति मिलती है।',
          'डिप्लोमा धारकों को मुख्यमंत्री युवा योजना के तहत ₹8,000/माह का वजीफा मिलता है।',
          'पुणे, नासिक, औरंगाबाद के एमआईडीसी में उन्नत औद्योगिक अप्रेंटिसशिप उपलब्ध।'
        ],
        mr: [
          'डिप्लोमानंतर डिग्रीच्या थेट दुसऱ्या वर्षात (Direct 2nd Year) प्रवेश घेतल्यास ईबीसी व आरक्षण शिष्यवृत्ती सुरू राहते.',
          'मुलींसाठी एआयसीटीई प्रगती शिष्यवृत्तीचे दरवर्षी ₹५०,००० डिग्रीसाठीही कायम राहतात.',
          'डिप्लोमा पूर्ण केलेल्या विद्यार्थ्यांना मुख्यमंत्री युवा योजनेतून दरमहा ₹८,००० विद्यावेतन.',
          'एमआयडीसी परिसरातील नामांकित कंपन्यांमध्ये अप्रेंटिसशिपची हमी.'
        ]
      }
    },
    afterITI: {
      title: {
        en: 'Opportunities After ITI Trades',
        hi: 'आईटीआई ट्रेड्स के बाद उपलब्ध अवसर',
        mr: 'आयटीआय (ITI) नंतर उपलब्ध संधी व योजना'
      },
      description: {
        en: 'Milestone choices: Dual-system Apprenticeship, Polytechnic 2nd Year Lateral Entry, or Industry Technicians.',
        hi: 'प्रमुख विकल्प: राष्ट्रीय अप्रेंटिसशिप (NAPS), पॉलिटेक्निक द्वितीय वर्ष में प्रवेश, या तकनीशियन कार्य।',
        mr: 'पर्याय: राष्ट्रीय शिकाऊ उमेदवारी (NAPS), पॉलिटेक्निक थेट द्वितीय वर्ष प्रवेश किंवा उद्योग तंत्रज्ञ.'
      },
      schemes: SCHEMES_DATABASE.filter(
        (s) =>
          s.educationLevels.includes('iti') ||
          s.educationLevels.includes('diploma')
      ),
      guidancePoints: {
        en: [
          'National Apprenticeship Promotion Scheme (NAPS) gives ₹7,000 to ₹10,000 monthly stipend.',
          'Mukhyamantri Yuva Karya Prashikshan Yojana offers ₹8,000/month training stipend.',
          'Eligible for direct entry into 2nd year of Polytechnic Diploma in corresponding branch.',
          'Social Justice Department provides tool-kit allowances for SC/ST/VJNT artisans.'
        ],
        hi: [
          'राष्ट्रीय शिक्षुता योजना (NAPS) से हर महीने ₹7,000 से ₹10,000 का वजीफा मिलता है।',
          'मुख्यमंत्री युवा कार्य योजना से आईटीआई धारकों को ₹8,000/माह सरकारी मानदेय।',
          'आईटीआई के आधार पर पॉलिटेक्निक के द्वितीय वर्ष में सीधी सीट पा सकते हैं।',
          'टूलकिट और उपकरण खरीदने हेतु समाज कल्याण विभाग से विशेष सहायता।'
        ],
        mr: [
          'राष्ट्रीय शिकाऊ उमेदवारी प्रोत्साहन योजनेतून (NAPS) दरमहा ₹७,००० ते ₹१०,००० मानधन.',
          'मुख्यमंत्री युवा कार्य प्रशिक्षण योजनेतून आयटीआय धारकांना दरमहा ₹८,००० विद्यावेतन.',
          'संबंधित शाखेतून पॉलिटेक्निक डिप्लोमाच्या थेट दुसऱ्या वर्षात प्रवेश घेता येतो.',
          'सामाजिक न्याय विभागामार्फत तंत्रज्ञान अवजारे व किटसाठी विशेष सहाय्य.'
        ]
      }
    },
    afterDegree: {
      title: {
        en: 'Opportunities After Graduation (Degree)',
        hi: 'स्नातक (डिग्री) के बाद उपलब्ध अवसर',
        mr: 'पदवी (Degree) नंतर उपलब्ध संधी व उच्च शिक्षण'
      },
      description: {
        en: 'Milestone choices: Master Degree (M.Tech, MBA, M.Sc, MA), State Competitive Exams, or Graduate Internships.',
        hi: 'प्रमुख विकल्प: उच्च स्नातकोत्तर अध्ययन (M.Tech, MBA, M.Sc) या मुख्यमंत्री युवा कार्य प्रशिक्षण।',
        mr: 'पर्याय: पदव्युत्तर पदवी (एम.टेक, एमबीए, एम.एस्सी, एम.ए.) किंवा पदवीधर कार्य प्रशिक्षण.'
      },
      schemes: SCHEMES_DATABASE.filter(
        (s) =>
          s.educationLevels.includes('postgraduate') ||
          s.educationLevels.includes('degree')
      ),
      guidancePoints: {
        en: [
          'Mukhyamantri Yuva Karya Prashikshan Yojana provides ₹10,000/month direct stipend to graduates.',
          'Post-Matric PG fee reimbursement continues for SC, ST, OBC, VJNT, and EBC students.',
          'Hostel allowances cover post-graduate university students living in urban centers.',
          'Divyangjan post-matric covers post-graduate and doctoral research fellows.'
        ],
        hi: [
          'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना से स्नातक उत्तीर्ण युवाओं को ₹10,000/माह सीधा वजीफा।',
          'एससी, एसटी, ओबीसी, विजेएनटी और ईबीसी छात्रों के लिए पीजी में भी फीस माफी जारी रहती है।',
          'विश्वविद्यालय छात्रावासों में रहने वाले विद्यार्थियों को हॉस्टल निर्वाह भत्ता।',
          'दिव्यांग छात्रों को पोस्ट ग्रेजुएशन के दौरान उपकरण व अध्ययन भत्ता।'
        ],
        mr: [
          'मुख्यमंत्री युवा कार्य प्रशिक्षण योजनेतून पदवीधरांना दरमहा ₹१०,००० थेट विद्यावेतन शासनाकडून.',
          'पदव्युत्तर शिक्षणातही (PG) अनुसूचित जाती, जमाती, ओबीसी व ईबीसी प्रवर्गाची फी माफी सुरू राहते.',
          'विद्यापीठ वसतिगृहात राहणाऱ्या विद्यार्थ्यांना निर्वाह भत्ता उपलब्ध.',
          'दिव्यांग विद्यार्थ्यांना पदव्युत्तर शिक्षणासाठी विशेष वाचक व साधन अनुदान.'
        ]
      }
    }
  };

  const currentStageInfo = stageData[activeStage];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2.5 text-amber-600 mb-1">
          <Compass className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Future Pathway Explorer
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {t.afterClassTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
          {t.afterClassSubtitle}
        </p>

        {/* Milestone Segmented Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mt-5 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveStage('after10th')}
            className={`px-3 py-2 font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeStage === 'after10th'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.after10thTab}
          </button>

          <button
            onClick={() => setActiveStage('after12th')}
            className={`px-3 py-2 font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeStage === 'after12th'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.after12thTab}
          </button>

          <button
            onClick={() => setActiveStage('afterDiploma')}
            className={`px-3 py-2 font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeStage === 'afterDiploma'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.afterDiplomaTab}
          </button>

          <button
            onClick={() => setActiveStage('afterITI')}
            className={`px-3 py-2 font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeStage === 'afterITI'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.afterITITab}
          </button>

          <button
            onClick={() => setActiveStage('afterDegree')}
            className={`px-3 py-2 font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeStage === 'afterDegree'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.afterDegreeTab}
          </button>
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-6 shadow-xs">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {currentStageInfo.title[language]}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {currentStageInfo.description[language]}
          </p>
        </div>

        {/* Milestone Guidance Callout Box */}
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-700" />
            Key Benefits Unlocked At This Stage:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-800">
            {currentStageInfo.guidancePoints[language].map((pt, i) => (
              <li key={i} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-amber-100">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Schemes Applicable for this Education Stage */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Schemes & Subsidies for this Level ({currentStageInfo.schemes.length})
            </h4>
            <span className="text-xs text-slate-500">
              Click any scheme to see documents & how to apply
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentStageInfo.schemes.map((scheme) => (
              <div
                key={scheme.id}
                onClick={() => onSelectScheme(scheme)}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-semibold text-slate-700">
                      {scheme.governmentLevel === 'state' ? 'Maharashtra' : 'Central'}
                    </span>
                    <span className="font-mono">{scheme.code}</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {scheme.title[language]}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {scheme.benefitsSummary[language]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span>Deadline: <strong>{scheme.deadline}</strong></span>
                  <span className="text-amber-700 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
