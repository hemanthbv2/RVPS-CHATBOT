/* =========================================================
   RV Schools Chatbot — app.js
   Decision-tree chatbot with verified school data
   ========================================================= */

// ──────────────────────────────────────────────
//  SCHOOL DATA  (all verified from websites)
// ──────────────────────────────────────────────

const SCHOOLS = {
  rvs: {
    id: 'rvs',
    name: 'RV School',
    shortName: 'RVS',
    icon: '🏫',
    accentVar: '--rvs-accent',
    accent: '#2E86AB',
    accentGlow: 'rgba(46, 134, 171, 0.3)',
    gradient: 'linear-gradient(135deg, #2E86AB, #1a6d91)',
    board: 'Karnataka State Board',
    established: '2018',
    campus: '2 acres, Tata Silk Farm, Bengaluru',
    grades: 'Primary & Secondary (English Medium)',
    principal: 'Shakila R. (M.A., B.Ed.)',
    phone: '080-26768583',
    mobile: '+91-9036876175',
    email: 'principal.rvs@rvei.edu.in',
    address: '#16/17, 3rd Cross, Tata Silk Farm, Bengaluru - 560028',
    website: 'https://www.rvschool.edu.in',
    facebook: 'https://www.facebook.com/RVSchoolEdu/',
    instagram: 'https://www.instagram.com/rvschool_edu/',
    admissionLink: 'https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/zrvischoolform/index.html',
    transport: false,
    midDayMeal: false,
    facilities: ['Amphitheater', 'Elevators', 'Food Court', 'Splash Pool', 'Sandpit', 'Enormous Playground'],
    usps: ['Inclusive education for hearing-impaired children', 'Splash Pool', 'Part of RVEI (80+ year legacy)'],
    programs: ['Art', 'Craft', 'Music', 'Dance', 'Physical Education'],
    management: {
      president: 'Dr. M.P. Shyam',
      secretary: 'Dr.(h.c). A.V.S. Murthy',
    },
  },

  rvps: {
    id: 'rvps',
    name: 'RV Public School',
    shortName: 'RVPS',
    icon: '📚',
    accentVar: '--rvps-accent',
    accent: '#A23B72',
    accentGlow: 'rgba(162, 59, 114, 0.3)',
    gradient: 'linear-gradient(135deg, #A23B72, #8a2d5e)',
    board: 'ICSE (CISCE)',
    established: '2003',
    campus: '2 acres, Opposite Lalbagh West Gate, V V Puram',
    grades: 'Nursery to Standard 10',
    phone: '+91-080-69757300',
    altPhone: '+91-80-2656-9588',
    email: 'rvps@rvei.edu.in',
    address: 'RV Public School, Opposite Lalbagh West Gate, V V Puram, Bangalore - 560004',
    website: 'https://www.rvps.edu.in',
    facebook: 'https://facebook.com/rvps.co.in',
    instagram: 'https://instagram.com/rvps_official',
    admissionLink: 'https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/zrvischoolform/index.html#/scode/RVPS',
    transport: true,
    transportDetails: 'Safe bus services along select routes of South Bangalore',
    midDayMeal: false,
    stats: { students: '1000+', teachers: '60', alumni: '250+' },
    facilities: ['Physics/Chemistry/Biology Labs', 'Computer Lab (CS from Class 1)', 'Digitised Library', 'Vast Playground (Cricket, Basketball, Volleyball)', 'State-of-art Auditorium', 'Edu-Smart Classrooms'],
    sportsPartner: 'Leapstart',
    accreditation: 'British Council ISA (International School Award)',
    houses: ['Charaka', 'Aryabhatta', 'Bhaskara', 'Sushrutha'],
    ncc: true,
    virtualTour: 'https://goo.gl/gQqbhq',
    timings: {
      prePrimary: '8:20 AM – 12:15 PM (Mon–Fri)',
      primary: '8:20 AM – 3:15 PM (Mon–Fri)',
      feeOffice: '10:00 AM – 1:00 PM (Weekdays), 10:30 AM – 12:30 PM (Sat)',
      ptm: '3:20 PM – 3:45 PM daily',
      office: '8:45 AM – 4:30 PM (Mon–Fri), 10:30 AM – 1:00 PM (Sat)',
    },
    uniform: {
      regular: 'Dark Blue Pinafore/Shorts + Check Shirt + Black Ribbons (Girls)',
      wednesday: 'House-coloured T-shirt + Track Pants',
      shoes: 'Black shoes, Dark Blue socks (red border), Belt (Class 1–10)',
    },
    admissionCriteria: [
      { level: 'Nursery', age: '3 years by June 1' },
      { level: 'Std 1', age: '6 years by academic year start (completed pre-primary)' },
      { level: 'Std 2–7', age: 'Admission test required' },
      { level: 'Std 8', age: '13 years (completed Std 7, seat availability)' },
      { level: 'Std 9', age: 'Requires Council approval' },
    ],
    toppers: [
      { name: 'Anirudh S', pct: '97.2%' },
      { name: 'Pravardhinii S', pct: '96.4%' },
      { name: 'Bhargav A', pct: '95.7%' },
      { name: 'Shreevardhan B M', pct: '94.5%' },
      { name: 'Apraameya Narayanan', pct: '94.4%' },
    ],
    extracurricular: ['Music', 'Yoga', 'Dance', 'Cubs & Bulbuls', 'NCC', 'Karate', 'Taekwondo', 'Science Olympiad'],
    management: {
      president: 'Dr. M.P. Shyam',
      chairman: 'Naveen Pasuparthy',
    },
  },

  rvghs: {
    id: 'rvghs',
    name: 'RV Girls High School',
    shortName: 'RVGHS',
    icon: '👩‍🎓',
    accentVar: '--rvghs-accent',
    accent: '#6F62F0',
    accentGlow: 'rgba(111, 98, 240, 0.3)',
    gradient: 'linear-gradient(135deg, #6F62F0, #5a4ed4)',
    board: 'Karnataka State Board',
    established: '1962',
    campus: 'Jayanagar, Bengaluru',
    grades: 'High School (Girls Only)',
    headmaster: 'Mr. Devaru Bhat',
    students: '~400',
    phone: '080-2657 7792',
    mobile: '+91-9036876165',
    email: 'rvghs@rvei.edu.in',
    address: 'RV Teachers College Building, 15, Ashoka Pillar Road, 2nd Block, Jayanagar, Bengaluru - 560011',
    website: 'https://rvghs.edu.in',
    admissionLink: 'https://rvghs.edu.in/admissions/',
    brochure: 'http://rvghs.edu.in/wp-content/uploads/2025/04/Brochure.pdf',
    alumniPortal: 'https://rvghs.almaconnect.com/',
    donateLink: 'https://www.rvinstitutions.com/donate/',
    transport: false,
    midDayMeal: true,
    midDayMealDetails: 'Akshaya Patra Foundation provides nutritious meals (incl. milk/ragi malt). Daily Supplementary Nutritious Food (eggs, chikki, or bananas) provided by Azim Premji Foundation & Department of Education.',
    ncc: true,
    officeHours: 'Mon–Fri: 9:00 AM – 4:30 PM | Sat: 9:00 AM – 1:00 PM',
    facilities: ['Science Laboratory', 'Computer Lab (networked campus)', 'Library (with LCD projector)', 'Audio-Visual Room', 'Sports Room + Playground', 'AC Auditorium (500+ seats)', 'Canteen'],
    languageSections: {
      A: { first: 'Sanskrit', second: 'Kannada', third: 'English' },
      B: { first: 'English', second: 'Kannada', third: 'Sanskrit' },
      C: { first: 'Kannada', second: 'English', third: 'Hindi' },
    },
    coreSubjects: ['Mathematics', 'General Science', 'Social Science'],
    coCurricular: ['Physical Education', 'Craft & SUPW', 'Computer Education'],
    clubs: ['Student Union Club', 'Humanities Club', 'Electoral Literacy Club', 'Science Club', 'Sanskrit Club', 'Kannada Sangha', 'Health Club', 'Eco Club', 'NCC', 'Sports Club', 'Bugle Band Set', 'Girl Guide'],
    competitiveExams: 'NMMS, CHARD GK, Hindi/Sanskrit exams, Ramayana & Mahabharata exams — up to ₹12,000 financial aid',
    admissionDocs: [
      'Original SATS Transfer Certificate (with PEN & Aadhaar)',
      'Passport-size photograph',
      'Birth Certificate (photocopy)',
      'Previous class Marks Card (photocopy)',
      'Bhagyalakshmi Bond (photocopy, if applicable)',
      'DISE number from previous school',
      'Caste Certificate (photocopy)',
      'Parent\'s Income Certificate (photocopy)',
      'Student & Parents Aadhaar Cards (photocopy)',
      'Student Bank Passbook front page (photocopy)',
      'BPL Card (photocopy, if applicable)',
      'DDPI Permission Order (if Central → State syllabus)',
    ],
    academicCalendar: [
      { event: 'FA 1', month: 'July 2025' },
      { event: 'FA 2', month: 'August 2025' },
      { event: 'SA 1', month: 'September 2025' },
      { event: 'Mid-term Holidays', month: 'Sep 20 – Oct 7, 2025' },
      { event: 'FA 3', month: 'November 2025' },
      { event: 'Class 10 Preparatory', month: 'Dec 2025 & Jan 2026' },
      { event: 'FA 4', month: 'January 2026' },
      { event: 'SA 2 (Class 8 & 9)', month: 'March 2026' },
      { event: 'Summer Holidays', month: 'Apr 11 – May 28, 2026' },
    ],
    results: [
      { year: '2024-25', url: 'http://rvghs.edu.in/wp-content/uploads/2025/06/RVGHS-Banner-2024-2025.pdf' },
      { year: '2023-24', url: 'http://rvghs.edu.in/wp-content/uploads/2025/04/RVGHS-Banner-2023-2024.pdf' },
      { year: '2022-23', url: 'http://rvghs.edu.in/wp-content/uploads/2025/04/RVGHS-BANNER-2022-2023.pdf' },
    ],
    events: ['Annual Day', 'Sports Meet', 'Independence Day', 'Republic Day', 'Children\'s Day', 'Teachers\' Day', 'Kannada Rajyotsava', 'Ganesha Festival (eco-friendly)', 'Gandhi Jayanthi', 'Ambedkar Jayanthi'],
  },
};


// ──────────────────────────────────────────────
//  CONVERSATION TREES
// ──────────────────────────────────────────────

function buildTree(s) {
  /* Shared nodes */
  const mainMenuOptions = (schoolId) => {
    const base = [
      { label: '📚 Admissions', node: 'admissions' },
      { label: '🏫 About the School', node: 'about' },
      { label: '📖 Academics', node: 'academics' },
      { label: '🏗️ Facilities', node: 'facilities' },
      { label: '💰 Fee Structure', node: 'fees' },
      { label: '📞 Contact Us', node: 'contact' },
    ];
    if (schoolId === 'rvps') {
      base.push({ label: '🚌 Transport / Bus', node: 'transport' });
      base.push({ label: '🏆 Toppers', node: 'toppers' });
      base.push({ label: '👔 Uniform & Timings', node: 'uniform' });
    }
    if (schoolId === 'rvghs') {
      base.push({ label: '🍱 Mid-day Meals', node: 'midday' });
      base.push({ label: '🎯 Clubs & Beyond Academics', node: 'clubs' });
      base.push({ label: '📊 Results', node: 'results' });
      base.push({ label: '📅 Academic Calendar', node: 'calendar' });
    }
    if (schoolId === 'rvs') {
      base.push({ label: '♿ Inclusive Education', node: 'inclusive' });
    }
    return base;
  };

  const backOption = { label: '← Back to Menu', node: 'menu' };

  // ── RV School Tree ──
  if (s.id === 'rvs') {
    return {
      welcome: {
        message: `👋 Welcome to *RV School*!\n\n🏫 State Board | Est. 2018\n📍 Tata Silk Farm, Bengaluru\n👩‍🏫 Principal: ${s.principal}\n\nHow can I help you today?`,
        options: mainMenuOptions('rvs'),
      },
      menu: {
        message: `What else would you like to know about *RV School*?`,
        options: mainMenuOptions('rvs'),
      },
      admissions: {
        message: `📚 *Admissions — RV School*\n\nWhich level are you seeking admission for?`,
        options: [
          { label: '📖 Primary School', node: 'adm_details' },
          { label: '📘 Secondary School', node: 'adm_details' },
          backOption,
        ],
      },
      adm_details: {
        message: `📋 *Admission Info*\n\nRV School follows Karnataka State Board syllabus (English Medium).\n\n✅ Board: State Board\n✅ Recognized by: Govt. of Karnataka\n✅ Campus: 2 acres\n\nAdmissions are processed via the RVEI SAP Portal.\n\nWhat would you like to do?`,
        options: [
          { label: '🔗 Apply Online (SAP Portal)', node: 'adm_apply' },
          { label: '🏫 Book a Campus Visit', node: 'adm_visit' },
          { label: '📞 Call Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_apply: {
        message: `🔗 *Apply Online*\n\nYou can apply via the RVEI SAP Admission Portal:\n👉 ${s.admissionLink}\n\nKeep your child's documents ready before starting.`,
        options: [backOption],
      },
      adm_visit: {
        message: `🏫 *Campus Visit*\n\nTo schedule a campus visit, please contact:\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}\n\nOur team will arrange a convenient time for you.`,
        options: [backOption],
      },
      adm_call: {
        message: `📞 *Admissions Contact*\n\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}`,
        options: [backOption],
      },
      about: {
        message: `🏫 *About RV School*\n\nRV School is part of RV Educational Institutions (RVEI) under the Rashtreeya Sikshana Samithi Trust (RSST).\n\n📌 Est. 2018 | State Board | English Medium\n📌 2-acre campus at Tata Silk Farm\n📌 28 institutions under RVEI\n📌 Legacy of 80+ years (founded by Sri M.C. Sivananda Sarma)\n\n🎯 Mission: "Holistic development of every child"\n🎯 Motto: "Excellence in education with societal commitment"\n\n♿ *Special*: Inclusive education for children with hearing impairment\n\nWhat else?`,
        options: [
          { label: '👥 Management', node: 'management' },
          { label: '♿ Inclusive Education', node: 'inclusive' },
          backOption,
        ],
      },
      management: {
        message: `👥 *Management*\n\n🏛️ President (RVEI): ${s.management.president}\n🏛️ Hon. Secretary: ${s.management.secretary}\n\nMore details: ${s.website}/management2/`,
        options: [backOption],
      },
      inclusive: {
        message: `♿ *Inclusive Education*\n\nRV School specifically supports *special children with hearing impairment*.\n\nInclusive education is a core commitment — every child deserves quality education.\n\nWant to learn more?`,
        options: [
          { label: '📞 Contact Admissions', node: 'adm_call' },
          { label: '🏫 Visit Campus', node: 'adm_visit' },
          backOption,
        ],
      },
      academics: {
        message: `📖 *Academics — RV School*\n\n✅ Board: Karnataka State Board\n✅ Medium: English\n✅ Levels: Primary & Secondary\n\n🎨 Programs offered:\n• Art & Craft\n• Music & Dance\n• Physical Education\n\nRecognized by Govt. of Karnataka.`,
        options: [backOption],
      },
      facilities: {
        message: `🏗️ *Facilities — RV School*\n\n${s.facilities.map(f => '• ' + f).join('\n')}\n\n🍽️ Food Court available on campus\n🏊 Splash Pool for younger students\n🎭 Amphitheater for performances\n♿ Elevator access`,
        options: [backOption],
      },
      fees: {
        message: `💰 *Fee Structure*\n\nFor fee details for the current academic year, please contact the school office:\n\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}`,
        options: [backOption],
      },
      contact: {
        message: `📞 *Contact — RV School*\n\n📍 ${s.address}\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}\n🌐 ${s.website}\n\n📘 Facebook: facebook.com/RVSchoolEdu\n📸 Instagram: @rvschool_edu`,
        options: [backOption],
      },
    };
  }

  // ── RV Public School Tree ──
  if (s.id === 'rvps') {
    return {
      welcome: {
        message: `👋 Welcome to *RV Public School*!\n\n📚 ICSE Board | Est. 2003\n📍 Opp. Lalbagh West Gate, V V Puram\n🏅 British Council ISA Accredited\n📊 ${s.stats.students} Students | ${s.stats.teachers} Teachers\n\nHow can I help you today?`,
        options: mainMenuOptions('rvps'),
      },
      menu: {
        message: `What else would you like to know about *RV Public School*?`,
        options: mainMenuOptions('rvps'),
      },
      admissions: {
        message: `📚 *Admissions — RVPS*\n\nWhich section are you interested in?`,
        options: [
          { label: '🧒 Pre-Primary (Nursery–UKG)', node: 'adm_preprimary' },
          { label: '📖 Primary (Std 1–7)', node: 'adm_primary' },
          { label: '📘 Secondary (Std 8–10)', node: 'adm_secondary' },
          backOption,
        ],
      },
      adm_preprimary: {
        message: `🧒 *Pre-Primary Admissions*\n\n📋 Nursery, LKG, UKG\n👶 Age: 3 years by June 1 of the academic year\n⏰ Timings: 8:20 AM – 12:15 PM (Mon–Fri)\n\nAdmissions open for 2026-27!`,
        options: [
          { label: '🔗 Apply Online', node: 'adm_apply' },
          { label: '📞 Call Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_primary: {
        message: `📖 *Primary Admissions (Std 1–7)*\n\n👦 Std 1: Must be 6 years old by academic year start + completed pre-primary\n📝 Std 2–7: Admission test required\n⏰ Timings: 8:20 AM – 3:15 PM (Mon–Fri)\n\n💻 Computer Science training starts from Class 1!`,
        options: [
          { label: '🔗 Apply Online', node: 'adm_apply' },
          { label: '📞 Call Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_secondary: {
        message: `📘 *Secondary Admissions (Std 8–10)*\n\n👦 Std 8: Must be 13 years old + completed Std 7 (seat availability applies)\n⚠️ Std 9: Requires Council approval\n📋 ICSE Board Exams in Std 10\n⏰ Timings: 8:20 AM – 3:15 PM (Mon–Fri)`,
        options: [
          { label: '🔗 Apply Online', node: 'adm_apply' },
          { label: '📞 Call Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_apply: {
        message: `🔗 *Apply Online*\n\nApply via the RVEI SAP Portal:\n👉 ${s.admissionLink}\n\nAdmissions open for AY 2026-27!`,
        options: [backOption],
      },
      adm_call: {
        message: `📞 *Admissions Contact*\n\n📞 ${s.phone}\n📧 ${s.email}\n\n🕐 Office: ${s.timings.office}`,
        options: [backOption],
      },
      about: {
        message: `🏫 *About RV Public School*\n\nRVPS is an ICSE school under RVEI / RSST Trust.\n\n📌 Est. 2003 | 2-acre campus\n📌 Opp. Lalbagh West Gate, V V Puram\n📌 CISCE (ICSE) Board\n📌 ${s.stats.students} students | ${s.stats.teachers} teachers\n\n🏅 *British Council ISA Award* for Outstanding International Dimension in Curriculum\n\n🎯 Focus: Unlocking the hidden potential of every child\n\n👤 President (RVEI): ${s.management.president}\n👤 Chairman (RVPS): ${s.management.chairman}`,
        options: [
          { label: '🏗️ Facilities', node: 'facilities' },
          { label: '🏆 Toppers', node: 'toppers' },
          backOption,
        ],
      },
      academics: {
        message: `📖 *Academics — RVPS*\n\n✅ Board: ICSE (CISCE)\n✅ Academic Year: June to April\n\n📚 Sections:\n• Pre-Primary: Nursery, LKG, UKG\n• Primary: Std 1–7\n• Secondary: Std 8–10\n\n💻 Computer Science from Class 1\n🎨 Compulsory: Music, Yoga, Dance, Cubs & Bulbuls\n🎖️ NCC (National Cadet Corps)\n🥋 Karate (Indian Shotokan) & Taekwondo\n🧪 Science Olympiad`,
        options: [
          { label: '🏆 ICSE Toppers', node: 'toppers' },
          { label: '🏠 Houses', node: 'houses' },
          backOption,
        ],
      },
      toppers: {
        message: `🏆 *ICSE Toppers — RVPS*\n\n${s.toppers.map((t, i) => `${['🥇','🥈','🥉','4️⃣','5️⃣'][i]} ${t.name} — ${t.pct}`).join('\n')}`,
        options: [backOption],
      },
      houses: {
        message: `🏠 *Houses — RVPS*\n\n${s.houses.map(h => '🏛️ ' + h).join('\n')}\n\nStudents wear house-coloured T-shirts on Wednesdays!\nInter-house competitions in Art, Craft, Sports & Music.`,
        options: [backOption],
      },
      facilities: {
        message: `🏗️ *Facilities — RVPS*\n\n${s.facilities.map(f => '• ' + f).join('\n')}\n\n🏋️ Sports Partner: *Leapstart* fitness organisation\n🏏 Cricket, Basketball, Volleyball\n🎥 Virtual Tour: ${s.virtualTour}`,
        options: [backOption],
      },
      transport: {
        message: `🚌 *Transport — RVPS*\n\n✅ Yes! RVPS provides *safe bus services* along select routes of South Bangalore.\n\nFor routes & availability, contact:\n📞 ${s.phone}\n📧 ${s.email}`,
        options: [backOption],
      },
      uniform: {
        message: `👔 *Uniform & Timings — RVPS*\n\n🕐 *School Timings:*\n• Nursery–UKG: ${s.timings.prePrimary}\n• Std 1–10: ${s.timings.primary}\n• PTM: ${s.timings.ptm}\n\n👔 *Uniform:*\n• Mon/Tue/Thu/Fri: ${s.uniform.regular}\n• Wednesday: ${s.uniform.wednesday}\n• Shoes/Socks: ${s.uniform.shoes}\n\n💰 Fee Office: ${s.timings.feeOffice}`,
        options: [backOption],
      },
      fees: {
        message: `💰 *Fee Structure — RVPS*\n\nFee Office Hours:\n🕐 Weekdays: 10:00 AM – 1:00 PM\n🕐 Saturday: 10:30 AM – 12:30 PM\n\n📞 ${s.phone}\n📧 ${s.email}`,
        options: [backOption],
      },
      contact: {
        message: `📞 *Contact — RVPS*\n\n📍 ${s.address}\n📞 ${s.phone}\n📧 ${s.email}\n🌐 ${s.website}\n\n🕐 Mon–Fri: 8:45 AM – 4:30 PM\n🕐 Sat: 10:30 AM – 1:00 PM\n\n📘 Facebook: @rvps.co.in\n📸 Instagram: @rvps_official`,
        options: [backOption],
      },
    };
  }

  // ── RV Girls High School Tree ──
  if (s.id === 'rvghs') {
    return {
      welcome: {
        message: `👋 Welcome to *RV Girls High School*!\n\n👩‍🎓 Girls Only | State Board | Since 1962\n📍 Jayanagar, Bengaluru\n👨‍🏫 Headmaster: ${s.headmaster}\n👧 ${s.students} Students\n\n💎 Diamond Jubilee celebrated in 2023!\n\nHow can I help you today?`,
        options: mainMenuOptions('rvghs'),
      },
      menu: {
        message: `What else would you like to know about *RV Girls High School*?`,
        options: mainMenuOptions('rvghs'),
      },
      admissions: {
        message: `📚 *Admissions — RVGHS*\n\nRVGHS welcomes girls to be part of a nurturing and enriching academic environment. Admission is simple and hassle-free.\n\nWhat would you like to know?`,
        options: [
          { label: '📋 Required Documents', node: 'adm_docs' },
          { label: '📥 Download Brochure', node: 'adm_brochure' },
          { label: '📞 Contact Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_docs: {
        message: `📋 *Required Admission Documents:*\n\n${s.admissionDocs.map((d, i) => `${i+1}. ${d}`).join('\n')}\n\n⚠️ If transferring from Central to State syllabus, DDPI Permission Order is also required.`,
        options: [
          { label: '📥 Download Brochure', node: 'adm_brochure' },
          { label: '📞 Contact Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_brochure: {
        message: `📥 *Download Brochure*\n\n👉 ${s.brochure}\n\nThis PDF contains complete admission information for the current academic year.`,
        options: [
          { label: '📞 Contact Admissions', node: 'adm_call' },
          backOption,
        ],
      },
      adm_call: {
        message: `📞 *Admissions Contact*\n\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}\n\n🕐 ${s.officeHours}`,
        options: [backOption],
      },
      about: {
        message: `🏫 *About RVGHS*\n\nFounded on *7th June 1962* with just 25 girls, RVGHS now shelters ~400 students.\n\n📌 Karnataka State Board | Girls Only\n📌 Part of RVEI (28 institutions)\n📌 Founded by Sri M.C. Sivananda Sarma\n📌 First HM: Sri K. Nanjundaswamy (1962–1988)\n\n🎯 *Mission:* Educating and empowering women to lead\n\n💎 Golden Jubilee: 2011 ("Suvarna Sinchana")\n💎 Diamond Jubilee: 2023 ("Vajra Vibha")`,
        options: [
          { label: '🎓 Alumni Network', node: 'alumni' },
          { label: '❤️ Donate', node: 'donate' },
          backOption,
        ],
      },
      alumni: {
        message: `🎓 *Alumni Network*\n\nConnect with fellow RV'ians on AlmaConnect:\n👉 ${s.alumniPortal}`,
        options: [backOption],
      },
      donate: {
        message: `❤️ *Support Girls' Education*\n\nDonate to help shape the future:\n👉 ${s.donateLink}`,
        options: [backOption],
      },
      academics: {
        message: `📖 *Academics — RVGHS*\n\n✅ Board: Karnataka State Board\n\n🗣️ *Language Sections:*\n• Section A: Sanskrit / Kannada / English\n• Section B: English / Kannada / Sanskrit\n• Section C: Kannada / English / Hindi\n\n📚 *Core:* Maths, Science, Social Science\n🎨 *Co-curricular:* PE, Craft & SUPW, Computer Ed\n\n🏆 *Competitive Exam Coaching:*\n${s.competitiveExams}`,
        options: [backOption],
      },
      midday: {
        message: `🍱 *Mid-day Meal Program — RVGHS*\n\n✅ Yes! RVGHS provides Government mid-day meals:\n\n🍱 *Akshaya Patra Foundation* provides nutritious meals including milk or ragi malt.\n\n🥚 *Daily Supplementary Nutritious Food (SNF)* provided by Azim Premji Foundation + Dept. of Education — eggs, chikki, or bananas every day.\n\nThis ensures every student receives proper nutrition for effective learning! 💪`,
        options: [backOption],
      },
      clubs: {
        message: `🎯 *Clubs & Beyond Academics — RVGHS*\n\n12 Active Clubs:\n${s.clubs.map(c => '• ' + c).join('\n')}\n\n🎪 *Key Events:*\n${s.events.slice(0, 5).map(e => '• ' + e).join('\n')}\n...and more!\n\nClubs develop leadership, teamwork, and confidence.`,
        options: [
          { label: '📅 Academic Calendar', node: 'calendar' },
          backOption,
        ],
      },
      facilities: {
        message: `🏗️ *Infrastructure — RVGHS*\n\n${s.facilities.map(f => '• ' + f).join('\n')}\n\n🎭 Auditorium: AC, 500+ seats, professional acoustics\n📺 AV Room: Large projection screen + TV\n💻 Computer Lab: Weekly sessions, internet access\n📚 Library: Weekly book issuance + LCD projector`,
        options: [backOption],
      },
      results: {
        message: `📊 *Results — RVGHS*\n\nDownload result PDFs:\n${s.results.map(r => `📄 ${r.year}: ${r.url}`).join('\n')}`,
        options: [backOption],
      },
      calendar: {
        message: `📅 *Academic Calendar 2025-26*\n\n${s.academicCalendar.map(c => `📌 ${c.event}: ${c.month}`).join('\n')}`,
        options: [backOption],
      },
      fees: {
        message: `💰 *Fee Structure — RVGHS*\n\nFor fee details, please contact:\n\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}\n\n🕐 ${s.officeHours}`,
        options: [backOption],
      },
      contact: {
        message: `📞 *Contact — RVGHS*\n\n📍 ${s.address}\n📞 ${s.phone}\n📱 ${s.mobile}\n📧 ${s.email}\n🌐 ${s.website}\n\n🕐 ${s.officeHours}`,
        options: [backOption],
      },
    };
  }
}


// ──────────────────────────────────────────────
//  KEYWORD MATCHING (free-text input)
// ──────────────────────────────────────────────

const KEYWORD_MAP = [
  { keywords: ['admission', 'apply', 'enroll', 'registration', 'join', 'seat'], node: 'admissions' },
  { keywords: ['about', 'history', 'founded', 'mission', 'vision', 'who'], node: 'about' },
  { keywords: ['fee', 'fees', 'cost', 'price', 'payment', 'amount'], node: 'fees' },
  { keywords: ['contact', 'phone', 'email', 'address', 'location', 'reach', 'where', 'map', 'direction'], node: 'contact' },
  { keywords: ['academic', 'subject', 'syllabus', 'curriculum', 'board', 'study'], node: 'academics' },
  { keywords: ['facility', 'facilities', 'infrastructure', 'lab', 'library', 'auditorium', 'playground', 'campus'], node: 'facilities' },
  { keywords: ['bus', 'transport', 'route', 'pick', 'drop'], node: 'transport' },
  { keywords: ['meal', 'lunch', 'food', 'mid-day', 'midday', 'canteen', 'tiffin', 'akshaya'], node: 'midday' },
  { keywords: ['club', 'ncc', 'guide', 'bugle', 'extracurricular', 'extra', 'activity', 'beyond'], node: 'clubs' },
  { keywords: ['result', 'topper', 'marks', 'pass', 'percentage', 'score'], node: 'toppers' },
  { keywords: ['uniform', 'dress', 'timing', 'time', 'schedule', 'hour', 'when'], node: 'uniform' },
  { keywords: ['calendar', 'holiday', 'exam', 'assessment', 'fa', 'sa'], node: 'calendar' },
  { keywords: ['inclusive', 'hearing', 'impair', 'disability', 'special'], node: 'inclusive' },
  { keywords: ['donate', 'donation', 'support', 'contribute'], node: 'donate' },
  { keywords: ['alumni', 'ex-student', 'old student'], node: 'alumni' },
  { keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'], node: 'menu' },
  { keywords: ['menu', 'help', 'start', 'option', 'home', 'back', 'main'], node: 'menu' },
  { keywords: ['thanks', 'thank', 'bye', 'ok', 'great', 'nice', 'cool'], node: '_thanks' },
  { keywords: ['human', 'person', 'talk', 'agent', 'call', 'speak'], node: 'contact' },
];

function matchKeyword(text, tree) {
  const lower = text.toLowerCase().trim();
  for (const entry of KEYWORD_MAP) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      if (tree[entry.node]) return entry.node;
    }
  }
  return null;
}


// ──────────────────────────────────────────────
//  UI ENGINE
// ──────────────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let currentSchool = null;
let currentTree = null;


const chatPage = $('#chatPage');
const chatContainer = $('#chatContainer');
const chatBody = $('#chatBody');
const chatInput = $('#chatInput');
const sendBtn = $('#sendBtn');

const clearChatBtn = $('#clearChatBtn');
const chatSchoolName = $('#chatSchoolName');
const bgGradient = $('#bgGradient');

// ── Set accent colors ──
function setAccent(school) {
  const root = document.documentElement;
  root.style.setProperty('--accent', school.accent);
  root.style.setProperty('--accent-glow', school.accentGlow);
  root.style.setProperty('--accent-gradient', school.gradient);
}

// ── Open chat ──
function openChat(schoolId) {
  currentSchool = SCHOOLS[schoolId];
  currentTree = buildTree(currentSchool);
  setAccent(currentSchool);
  chatSchoolName.textContent = currentSchool.name;
  chatContainer.innerHTML = '';
  chatPage.classList.add('active');
  

  // Send welcome after brief delay
  setTimeout(() => {
    sendBotMessage('welcome');
  }, 400);
}

// ── Close chat ──
function closeChat() {}

// ── Format message text ──
function formatText(text) {
  // Bold: *text*
  let formatted = text.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
  // Links
  formatted = formatted.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  // Newlines
  formatted = formatted.replace(/\n/g, '<br>');
  return formatted;
}

// ── Create message element ──
function createMessage(text, type) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${type}`;

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = type === 'bot' ? currentSchool.icon : '👤';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = formatText(text);

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(bubble);
  return msgDiv;
}

// ── Create quick replies ──
function createQuickReplies(options) {
  const container = document.createElement('div');
  container.className = 'quick-replies';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quick-reply-btn';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      // Disable all quick replies
      container.querySelectorAll('.quick-reply-btn').forEach(b => b.classList.add('active'));

      // Show user message
      addUserMessage(opt.label);

      // Navigate to node
      setTimeout(() => {
        sendBotMessage(opt.node);
      }, 300);
    });
    container.appendChild(btn);
  });

  return container;
}

// ── Create typing indicator ──
function createTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'typing-indicator';
  div.id = 'typingIndicator';

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = currentSchool ? currentSchool.icon : '🤖';

  const dots = document.createElement('div');
  dots.className = 'dots';
  dots.innerHTML = '<span></span><span></span><span></span>';

  div.appendChild(avatar);
  div.appendChild(dots);
  return div;
}

// ── Add user message ──
function addUserMessage(text) {
  const msg = createMessage(text, 'user');
  chatContainer.appendChild(msg);
  scrollToBottom();
}

// ── Send bot message by node ──
function sendBotMessage(nodeId) {
  const node = currentTree[nodeId];
  if (!node) return;

  // Show typing indicator
  const typing = createTypingIndicator();
  chatContainer.appendChild(typing);
  scrollToBottom();

  // Simulate typing delay
  const delay = Math.min(400 + node.message.length * 2, 1200);
  setTimeout(() => {
    // Remove typing indicator
    typing.remove();

    // Add bot message
    const msg = createMessage(node.message, 'bot');
    chatContainer.appendChild(msg);

    // Add quick replies
    if (node.options && node.options.length > 0) {
      const qr = createQuickReplies(node.options);
      chatContainer.appendChild(qr);
    }

    scrollToBottom();
  }, delay);
}

// ── Scroll to bottom ──
function scrollToBottom() {
  requestAnimationFrame(() => {
    chatBody.scrollTo({
      top: chatBody.scrollHeight,
      behavior: 'smooth',
    });
  });
}

// ── Handle free-text input ──
function handleInput() {
  const text = chatInput.value.trim();
  if (!text) return;

  chatInput.value = '';
  addUserMessage(text);

  setTimeout(() => {
    // Try keyword matching
    const matchedNode = matchKeyword(text, currentTree);

    if (matchedNode === '_thanks') {
      // Special thanks response
      const typing = createTypingIndicator();
      chatContainer.appendChild(typing);
      scrollToBottom();
      setTimeout(() => {
        typing.remove();
        const msg = createMessage(`You're welcome! 😊 Feel free to ask anything else about *${currentSchool.name}*.`, 'bot');
        chatContainer.appendChild(msg);
        const qr = createQuickReplies([{ label: '← Back to Menu', node: 'menu' }]);
        chatContainer.appendChild(qr);
        scrollToBottom();
      }, 600);
    } else if (matchedNode) {
      sendBotMessage(matchedNode);
    } else {
      // Fallback
      const typing = createTypingIndicator();
      chatContainer.appendChild(typing);
      scrollToBottom();
      setTimeout(() => {
        typing.remove();
        const fallbackMsg = createMessage(
          `❓ I didn't quite understand that. Here are some things I can help with:`,
          'bot'
        );
        chatContainer.appendChild(fallbackMsg);
        const fallbackOptions = [
          { label: '📚 Admissions', node: 'admissions' },
          { label: '💰 Fees', node: 'fees' },
          { label: '📞 Contact', node: 'contact' },
          { label: '🏫 About', node: 'about' },
          { label: '🏗️ Facilities', node: 'facilities' },
        ];
        if (currentSchool.id === 'rvps') fallbackOptions.push({ label: '🚌 Transport', node: 'transport' });
        if (currentSchool.id === 'rvghs') fallbackOptions.push({ label: '🍱 Meals', node: 'midday' });
        const qr = createQuickReplies(fallbackOptions);
        chatContainer.appendChild(qr);
        scrollToBottom();
      }, 600);
    }
  }, 300);
}


// ──────────────────────────────────────────────
//  EVENT LISTENERS
// ──────────────────────────────────────────────

// School card clicks


// Back button


// Clear chat
clearChatBtn.addEventListener('click', () => {
  if (currentTree) {
    chatContainer.innerHTML = '';
    setTimeout(() => sendBotMessage('welcome'), 300);
  }
});

// Send button
sendBtn.addEventListener('click', handleInput);

// Enter key
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleInput();
  }
});

// Keyboard shortcut: Escape to go back
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatPage.classList.contains('active')) {
    closeChat();
  }
});


// Initialize chat for RV Public School
document.addEventListener('DOMContentLoaded', () => {
  openChat('rvps');
});
