/**
 * Braintube - Complete VTU 2022 Scheme Academic Content
 * All Branches | All Semesters | Full Syllabus & Notes
 */

const VTUData = {
  // All VTU Branches (2022 Scheme)
  branches: [
    { id: 'cse', name: 'CSE', fullName: 'Computer Science & Engineering', icon: 'laptop', subjects: 52, documents: 520 },
    { id: 'aiml', name: 'AI & ML', fullName: 'Artificial Intelligence & Machine Learning', icon: 'brain', subjects: 48, documents: 480 },
    { id: 'ise', name: 'ISE', fullName: 'Information Science & Engineering', icon: 'database', subjects: 50, documents: 500 },
    { id: 'ece', name: 'ECE', fullName: 'Electronics & Communication Engineering', icon: 'radio', subjects: 52, documents: 520 },
    { id: 'eee', name: 'EEE', fullName: 'Electrical & Electronics Engineering', icon: 'zap', subjects: 50, documents: 500 },
    { id: 'me', name: 'ME', fullName: 'Mechanical Engineering', icon: 'cog', subjects: 52, documents: 520 },
    { id: 'cv', name: 'CV', fullName: 'Civil Engineering', icon: 'building', subjects: 50, documents: 500 },
    { id: 'ds', name: 'DS', fullName: 'Data Science', icon: 'chart', subjects: 46, documents: 460 }
  ],

  semesters: [
    { id: 1, name: 'Semester 1', type: 'Physics Cycle' },
    { id: 2, name: 'Semester 2', type: 'Chemistry Cycle' },
    { id: 3, name: 'Semester 3', type: 'Core Subjects' },
    { id: 4, name: 'Semester 4', type: 'Core Subjects' },
    { id: 5, name: 'Semester 5', type: 'Core + Electives' },
    { id: 6, name: 'Semester 6', type: 'Core + Electives' },
    { id: 7, name: 'Semester 7', type: 'Electives + Project' },
    { id: 8, name: 'Semester 8', type: 'Project + Internship' }
  ],

  // ==================== SEMESTER 1 (Common - Physics Cycle) ====================
  sem1: [
    { code: 'BMAT101', name: 'Mathematics-I for CSE Stream', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BPHY102', name: 'Applied Physics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BPOPS103', name: 'Principles of Programming using C', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BESCK104', name: 'Introduction to Electronics', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BENGK105', name: 'Communicative English', credits: 1, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BPHYL106', name: 'Applied Physics Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
    { code: 'BPOPL107', name: 'C Programming Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
    { code: 'BICOK108', name: 'Indian Constitution', credits: 1, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BSFHK109', name: 'Scientific Foundations of Health', credits: 1, type: 'Theory', hasNotes: true, hasQP: false, hasFix: true }
  ],

  // ==================== SEMESTER 2 (Common - Chemistry Cycle) ====================
  sem2: [
    { code: 'BMAT201', name: 'Mathematics-II for CSE Stream', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BCHE202', name: 'Applied Chemistry', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BEESK203', name: 'Basic Electrical Engineering', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BICSK204', name: 'Introduction to Computer Science', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BKSKK205', name: 'Samskrutika Kannada', credits: 1, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
    { code: 'BCHEL206', name: 'Applied Chemistry Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
    { code: 'BEESKL207', name: 'Basic Electrical Engineering Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
    { code: 'BEDSK208', name: 'Engineering Design & Drafting', credits: 2, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
  ],

  // ==================== CSE SUBJECTS (Semester 3-8) ====================
  subjects: {
    'cse-3': [
      { code: 'BCS301', name: 'Mathematics for Computer Science', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS302', name: 'Digital Design & Computer Organization', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS303', name: 'Operating Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS304', name: 'Data Structures and Applications', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS305A', name: 'Object Oriented Programming with Java', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS305B', name: 'Object Oriented Programming with C++', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCSL306', name: 'Data Structures Laboratory', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
      { code: 'BSCK307', name: 'Social Connect & Responsibility', credits: 1, type: 'Activity', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'cse-4': [
      { code: 'BCS401', name: 'Analysis & Design of Algorithms', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS402', name: 'Microcontrollers', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS403', name: 'Database Management Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS404', name: 'Discrete Mathematical Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS405A', name: 'Graph Theory', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS405B', name: 'Biology for Engineers', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCSL406', name: 'Analysis & Design of Algorithms Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
      { code: 'BUHK407', name: 'Universal Human Values', credits: 1, type: 'Theory', hasNotes: true, hasQP: false, hasFix: true }
    ],
    'cse-5': [
      { code: 'BCS501', name: 'Software Engineering & Project Management', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS502', name: 'Computer Networks', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS503', name: 'Theory of Computation', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS504', name: 'Artificial Intelligence', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS515A', name: 'Cloud Computing', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS515B', name: 'Unix Programming', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCSL506', name: 'Computer Networks Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
      { code: 'BRMK507', name: 'Research Methodology & IPR', credits: 2, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true }
    ],
    'cse-6': [
      { code: 'BCS601', name: 'System Software & Compilers', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS602', name: 'Computer Graphics & Fundamentals of Image Processing', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS603', name: 'Machine Learning', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS613A', name: 'Web Technology', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS613B', name: 'Big Data Analytics', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS614A', name: 'Internet of Things', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCSL606', name: 'System Software & Compilers Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true },
      { code: 'BCSP607', name: 'Mini Project', credits: 2, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'cse-7': [
      { code: 'BCS701', name: 'Internet of Things', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS702', name: 'Parallel Computing', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS703', name: 'Cryptography and Network Security', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS711A', name: 'Deep Learning', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS711B', name: 'Natural Language Processing', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS712A', name: 'Blockchain Technology', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS712B', name: 'Cyber Security', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCSP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true },
      { code: 'BCSI706', name: 'Internship', credits: 2, type: 'Internship', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'cse-8': [
      { code: 'BCS811A', name: 'Computer Vision', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCS811B', name: 'Distributed Systems', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCSP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true },
      { code: 'BCSS803', name: 'Technical Seminar', credits: 1, type: 'Seminar', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== AI & ML SUBJECTS ====================
    'aiml-3': [
      { code: 'BAD301', name: 'Mathematics for Machine Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD302', name: 'Digital Design & Computer Organization', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD303', name: 'Operating Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD304', name: 'Data Structures and Applications', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD305', name: 'Python Programming', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BADL306', name: 'Python Programming Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'aiml-4': [
      { code: 'BAD401', name: 'Analysis & Design of Algorithms', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD402', name: 'Database Management Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD403', name: 'Probability & Statistics for ML', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD404', name: 'Introduction to Machine Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD405', name: 'Computer Networks', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BADL406', name: 'Machine Learning Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'aiml-5': [
      { code: 'BAD501', name: 'Deep Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD502', name: 'Natural Language Processing', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD503', name: 'Computer Vision', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD504', name: 'Big Data Analytics', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BADL505', name: 'Deep Learning Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'aiml-6': [
      { code: 'BAD601', name: 'Reinforcement Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD602', name: 'AI in Healthcare', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD603', name: 'Cloud Computing for AI', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD604', name: 'Speech & Audio Processing', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BADL605', name: 'NLP & Computer Vision Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'aiml-7': [
      { code: 'BAD701', name: 'Generative AI & LLMs', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BAD702', name: 'AI Ethics & Fairness', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BADP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true },
      { code: 'BADI706', name: 'Internship', credits: 2, type: 'Internship', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'aiml-8': [
      { code: 'BAD801', name: 'AI for Robotics', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BADP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== ISE SUBJECTS ====================
    'ise-3': [
      { code: 'BIS301', name: 'Mathematics for Computer Science', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS302', name: 'Digital Design & Computer Organization', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS303', name: 'Operating Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS304', name: 'Data Structures and Applications', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS305', name: 'Object Oriented Programming with Java', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BISL306', name: 'Data Structures Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ise-4': [
      { code: 'BIS401', name: 'Analysis & Design of Algorithms', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS402', name: 'Microcontrollers', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS403', name: 'Database Management Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS404', name: 'Discrete Mathematical Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS405', name: 'Computer Networks', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BISL406', name: 'DBMS Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ise-5': [
      { code: 'BIS501', name: 'Software Engineering', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS502', name: 'Theory of Computation', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS503', name: 'Web Technology', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS504', name: 'Artificial Intelligence', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BISL505', name: 'Web Technology Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ise-6': [
      { code: 'BIS601', name: 'Cloud Computing', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS602', name: 'Machine Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS603', name: 'Big Data Analytics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS604', name: 'Information Security', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BISL605', name: 'Cloud Computing Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ise-7': [
      { code: 'BIS701', name: 'Deep Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS702', name: 'DevOps', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BIS703', name: 'Information and Network Security', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BISP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'ise-8': [
      { code: 'BIS801', name: 'Data Mining', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BISP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== ECE SUBJECTS ====================
    'ece-3': [
      { code: 'BEC301', name: 'Transform Calculus, Fourier Series & Numerical Techniques', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC302', name: 'Network Analysis', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC303', name: 'Electronic Devices', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC304', name: 'Digital System Design', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC305', name: 'Signals & Systems', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BECL306', name: 'Digital System Design Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ece-4': [
      { code: 'BEC401', name: 'Complex Analysis, Probability & Statistics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC402', name: 'Analog Circuits', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC403', name: 'Microcontrollers', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC404', name: 'Electromagnetic Waves', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC405', name: 'Control Systems', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BECL406', name: 'Analog Circuits Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ece-5': [
      { code: 'BEC501', name: 'Digital Communication', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC502', name: 'Digital Signal Processing', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC503', name: 'VLSI Design', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC504', name: 'Information Theory & Coding', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BECL505', name: 'DSP Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ece-6': [
      { code: 'BEC601', name: 'Wireless Communication', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC602', name: 'Embedded Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC603', name: 'Antennas & Propagation', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC604', name: 'Computer Networks', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BECL605', name: 'Embedded Systems Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ece-7': [
      { code: 'BEC701', name: 'Microwave Engineering and Antenna Theory', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC702', name: 'Computer Networks and Protocols', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEC703', name: 'Wireless Communication Systems', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BECP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'ece-8': [
      { code: 'BEC801', name: 'Satellite Communication', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BECP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== EEE SUBJECTS ====================
    'eee-3': [
      { code: 'BEE301', name: 'Transform Calculus, Fourier Series & Numerical Techniques', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE302', name: 'Analog Electronic Circuits', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE303', name: 'Network Analysis', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE304', name: 'Electrical & Electronic Measurements', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE305', name: 'Digital Electronics', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEEL306', name: 'Analog Electronics Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'eee-4': [
      { code: 'BEE401', name: 'Complex Analysis, Probability & Statistics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE402', name: 'Electromagnetic Field Theory', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE403', name: 'Electrical Machines - I', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE404', name: 'Microcontrollers', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE405', name: 'Signals & Systems', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEEL406', name: 'Electrical Machines Lab - I', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'eee-5': [
      { code: 'BEE501', name: 'Power Electronics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE502', name: 'Electrical Machines - II', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE503', name: 'Control Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE504', name: 'Power System Analysis - I', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEEL505', name: 'Power Electronics Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'eee-6': [
      { code: 'BEE601', name: 'Power System Analysis - II', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE602', name: 'High Voltage Engineering', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE603', name: 'Electric Drives', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE604', name: 'Switchgear & Protection', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEEL605', name: 'Control Systems Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'eee-7': [
      { code: 'BEE701', name: 'Switchgear and Protection', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE702', name: 'Industrial Drives and Applications', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEE703', name: 'Power System Analysis II', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEEP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'eee-8': [
      { code: 'BEE801', name: 'Electric Vehicles', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BEEP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== MECHANICAL ENGINEERING ====================
    'me-3': [
      { code: 'BME301', name: 'Transform Calculus, Fourier Series & Numerical Techniques', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME302', name: 'Mechanics of Materials', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME303', name: 'Basic Thermodynamics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME304', name: 'Metal Casting & Welding', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME305', name: 'Mechanical Measurements & Metrology', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BMEL306', name: 'Foundry & Forging Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'me-4': [
      { code: 'BME401', name: 'Complex Analysis, Probability & Statistics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME402', name: 'Applied Thermodynamics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME403', name: 'Fluid Mechanics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME404', name: 'Kinematics of Machines', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME405', name: 'Metal Forming & Powder Metallurgy', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BMEL406', name: 'Machine Shop Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'me-5': [
      { code: 'BME501', name: 'Design of Machine Elements - I', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME502', name: 'Dynamics of Machines', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME503', name: 'Turbo Machines', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME504', name: 'Heat Transfer', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BMEL505', name: 'Fluid Mechanics & Machines Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'me-6': [
      { code: 'BME601', name: 'Design of Machine Elements - II', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME602', name: 'Finite Element Methods', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME603', name: 'Control Engineering', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME604', name: 'Operations Research', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BMEL605', name: 'Heat Transfer Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'me-7': [
      { code: 'BME701', name: 'Finite Element Methods', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME702', name: 'Hydraulics and Pneumatics', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BME703', name: 'Control Engineering', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BMEP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'me-8': [
      { code: 'BME801', name: 'Additive Manufacturing', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BMEP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== CIVIL ENGINEERING ====================
    'cv-3': [
      { code: 'BCV301', name: 'Transform Calculus, Fourier Series & Numerical Techniques', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV302', name: 'Mechanics of Materials', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV303', name: 'Fluid Mechanics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV304', name: 'Building Materials & Construction', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV305', name: 'Surveying', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCVL306', name: 'Surveying Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'cv-4': [
      { code: 'BCV401', name: 'Complex Analysis, Probability & Statistics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV402', name: 'Analysis of Determinate Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV403', name: 'Applied Hydraulics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV404', name: 'Concrete Technology', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV405', name: 'Basic Geotechnical Engineering', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCVL406', name: 'Concrete & Highway Materials Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'cv-5': [
      { code: 'BCV501', name: 'Analysis of Indeterminate Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV502', name: 'Design of RC Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV503', name: 'Applied Geotechnical Engineering', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV504', name: 'Transportation Engineering - I', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCVL505', name: 'Geotechnical Engineering Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'cv-6': [
      { code: 'BCV601', name: 'Design of Steel Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV602', name: 'Hydrology & Irrigation Engineering', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV603', name: 'Environmental Engineering - I', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV604', name: 'Transportation Engineering - II', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCVL605', name: 'Environmental Engineering Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'cv-7': [
      { code: 'BCV701', name: 'Design of Steel Structures', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV702', name: 'Estimation and Contract Management', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCV703', name: 'Prestressed Concrete', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCVP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'cv-8': [
      { code: 'BCV801', name: 'Bridge Engineering', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BCVP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],

    // ==================== DATA SCIENCE ====================
    'ds-3': [
      { code: 'BDS301', name: 'Mathematics for Data Science', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS302', name: 'Digital Design & Computer Organization', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS303', name: 'Operating Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS304', name: 'Data Structures and Applications', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS305', name: 'Python for Data Science', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDSL306', name: 'Python Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ds-4': [
      { code: 'BDS401', name: 'Analysis & Design of Algorithms', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS402', name: 'Database Management Systems', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS403', name: 'Probability & Statistics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS404', name: 'Data Visualization', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS405', name: 'Introduction to Data Science', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDSL406', name: 'Data Visualization Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ds-5': [
      { code: 'BDS501', name: 'Machine Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS502', name: 'Big Data Analytics', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS503', name: 'Data Mining & Warehousing', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS504', name: 'Business Analytics', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDSL505', name: 'Machine Learning Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ds-6': [
      { code: 'BDS601', name: 'Deep Learning', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS602', name: 'Natural Language Processing', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS603', name: 'Time Series Analysis', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS604', name: 'Cloud Computing', credits: 3, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDSL605', name: 'Deep Learning Lab', credits: 1, type: 'Lab', hasNotes: true, hasQP: false, hasFix: true, isLab: true }
    ],
    'ds-7': [
      { code: 'BDS701', name: 'AI for Business', credits: 4, type: 'Theory', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDS702', name: 'Data Ethics & Governance', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDSP705', name: 'Project Work Phase - 1', credits: 6, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ],
    'ds-8': [
      { code: 'BDS801', name: 'MLOps', credits: 3, type: 'Elective', hasNotes: true, hasQP: true, hasFix: true },
      { code: 'BDSP802', name: 'Project Work Phase - 2', credits: 10, type: 'Project', hasNotes: false, hasQP: false, hasFix: true }
    ]
  },

  // Helper functions
  getBranch(id) {
    return this.branches.find(b => b.id === id);
  },

  getSubjects(branchId, semId) {
    if (semId === 1) return this.sem1;
    if (semId === 2) return this.sem2;
    return this.subjects[`${branchId}-${semId}`] || [];
  }
};

