/**
 * Braintube - Complete Notes Database for VTU 2022 Scheme
 * All Branches: CSE, AI&ML, ISE, ECE, EEE, ME, CV, DS
 * Reference: vtucircle.com structure
 */

const NotesExtended = {
    // ==================== SEMESTER 1 & 2 COMMON ====================
    'BESCK104': {
        name: 'Introduction to Electronics',
        modules: [
            { num: 1, title: 'Semiconductor Diodes', file: 'BESCK104_M1.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Transistors', file: 'BESCK104_M2.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Op-Amps', file: 'BESCK104_M3.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 4, title: 'Digital Electronics', file: 'BESCK104_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Communication Systems', file: 'BESCK104_M5.pdf', size: '2.5 MB', pages: 38, status: 'available' }
        ],
        complete: { file: 'BESCK104_Complete.pdf', size: '12.5 MB', pages: 211 }
    },
    'BENGK105': {
        name: 'Communicative English',
        modules: [
            { num: 1, title: 'Listening Skills', file: 'BENGK105_M1.pdf', size: '1.5 MB', pages: 22, status: 'available' },
            { num: 2, title: 'Speaking Skills', file: 'BENGK105_M2.pdf', size: '1.8 MB', pages: 28, status: 'available' },
            { num: 3, title: 'Reading Skills', file: 'BENGK105_M3.pdf', size: '2.0 MB', pages: 32, status: 'available' },
            { num: 4, title: 'Writing Skills', file: 'BENGK105_M4.pdf', size: '2.2 MB', pages: 35, status: 'available' },
            { num: 5, title: 'Grammar & Vocabulary', file: 'BENGK105_M5.pdf', size: '1.8 MB', pages: 28, status: 'available' }
        ],
        complete: { file: 'BENGK105_Complete.pdf', size: '8.5 MB', pages: 145 }
    },
    'BICOK108': {
        name: 'Indian Constitution',
        modules: [
            { num: 1, title: 'Introduction & Preamble', file: 'BICOK108_M1.pdf', size: '1.5 MB', pages: 22, status: 'available' },
            { num: 2, title: 'Fundamental Rights', file: 'BICOK108_M2.pdf', size: '2.0 MB', pages: 32, status: 'available' },
            { num: 3, title: 'Directive Principles', file: 'BICOK108_M3.pdf', size: '1.8 MB', pages: 28, status: 'available' },
            { num: 4, title: 'Union & States', file: 'BICOK108_M4.pdf', size: '2.2 MB', pages: 35, status: 'available' },
            { num: 5, title: 'Elections & Amendments', file: 'BICOK108_M5.pdf', size: '1.5 MB', pages: 22, status: 'available' }
        ],
        complete: { file: 'BICOK108_Complete.pdf', size: '8.0 MB', pages: 139 }
    },
    'BEESK203': {
        name: 'Basic Electrical Engineering',
        modules: [
            { num: 1, title: 'DC Circuits', file: 'BEESK203_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'AC Circuits', file: 'BEESK203_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Transformers', file: 'BEESK203_M3.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 4, title: 'Electrical Machines', file: 'BEESK203_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Measuring Instruments', file: 'BEESK203_M5.pdf', size: '2.5 MB', pages: 38, status: 'available' }
        ],
        complete: { file: 'BEESK203_Complete.pdf', size: '14.5 MB', pages: 244 }
    },
    'BICSK204': {
        name: 'Introduction to Computer Science',
        modules: [
            { num: 1, title: 'Computer Fundamentals', file: 'BICSK204_M1.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Number Systems', file: 'BICSK204_M2.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 3, title: 'Programming Concepts', file: 'BICSK204_M3.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 4, title: 'Data Structures Basics', file: 'BICSK204_M4.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 5, title: 'Computer Networks Intro', file: 'BICSK204_M5.pdf', size: '2.5 MB', pages: 38, status: 'available' }
        ],
        complete: { file: 'BICSK204_Complete.pdf', size: '13.0 MB', pages: 221 }
    },

    // ==================== CSE SEMESTER 3-8 COMPLETE ====================
    'BCS305B': {
        name: 'Object Oriented Programming with C++',
        modules: [
            { num: 1, title: 'C++ Basics & OOP Concepts', file: 'BCS305B_M1.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Classes & Objects', file: 'BCS305B_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Inheritance & Polymorphism', file: 'BCS305B_M3.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Templates & Exception Handling', file: 'BCS305B_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'File Handling & STL', file: 'BCS305B_M5.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BCS305B_Complete.pdf', size: '14.8 MB', pages: 248 }
    },
    'BCS402': {
        name: 'Microcontrollers',
        modules: [
            { num: 1, title: '8051 Architecture', file: 'BCS402_M1.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Instruction Set & Programming', file: 'BCS402_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Timers & Counters', file: 'BCS402_M3.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Serial Communication', file: 'BCS402_M4.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 5, title: 'Interfacing & Applications', file: 'BCS402_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BCS402_Complete.pdf', size: '15.0 MB', pages: 252 }
    },
    'BCS405A': {
        name: 'Graph Theory',
        modules: [
            { num: 1, title: 'Introduction to Graphs', file: 'BCS405A_M1.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Trees & Connectivity', file: 'BCS405A_M2.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Eulerian & Hamiltonian Graphs', file: 'BCS405A_M3.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 4, title: 'Graph Coloring', file: 'BCS405A_M4.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 5, title: 'Planar Graphs & Applications', file: 'BCS405A_M5.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BCS405A_Complete.pdf', size: '12.5 MB', pages: 211 }
    },
    'BCS515A': {
        name: 'Cloud Computing',
        modules: [
            { num: 1, title: 'Cloud Fundamentals', file: 'BCS515A_M1.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Virtualization', file: 'BCS515A_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Cloud Architecture', file: 'BCS515A_M3.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 4, title: 'Cloud Services (IaaS, PaaS, SaaS)', file: 'BCS515A_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Cloud Security', file: 'BCS515A_M5.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BCS515A_Complete.pdf', size: '14.8 MB', pages: 248 }
    },
    'BCS601': {
        name: 'System Software & Compilers',
        modules: [
            { num: 1, title: 'System Software Intro', file: 'BCS601_M1.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Assemblers', file: 'BCS601_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Loaders & Linkers', file: 'BCS601_M3.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Lexical & Syntax Analysis', file: 'BCS601_M4.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'Code Generation & Optimization', file: 'BCS601_M5.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCS601_Complete.pdf', size: '15.5 MB', pages: 261 }
    },
    'BCS602': {
        name: 'Computer Graphics & Image Processing',
        modules: [
            { num: 1, title: 'Graphics Fundamentals', file: 'BCS602_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Line & Circle Algorithms', file: 'BCS602_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: '2D & 3D Transformations', file: 'BCS602_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Clipping & Visible Surfaces', file: 'BCS602_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Image Processing Basics', file: 'BCS602_M5.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCS602_Complete.pdf', size: '16.0 MB', pages: 268 }
    },
    'BCS613A': {
        name: 'Web Technology',
        modules: [
            { num: 1, title: 'HTML5 & CSS3', file: 'BCS613A_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'JavaScript & DOM', file: 'BCS613A_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'PHP & MySQL', file: 'BCS613A_M3.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 4, title: 'XML & AJAX', file: 'BCS613A_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Web Services & Security', file: 'BCS613A_M5.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BCS613A_Complete.pdf', size: '16.0 MB', pages: 270 }
    },
    'BCS701': {
        name: 'Cryptography & Network Security',
        modules: [
            { num: 1, title: 'Security Concepts & Classical Encryption', file: 'BCS701_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Block Ciphers & DES', file: 'BCS701_M2.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'AES & Public Key Cryptography', file: 'BCS701_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Hash Functions & Digital Signatures', file: 'BCS701_M4.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 5, title: 'Network Security Protocols', file: 'BCS701_M5.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BCS701_Complete.pdf', size: '16.0 MB', pages: 268 }
    },
    'BCS711A': {
        name: 'Deep Learning',
        modules: [
            { num: 1, title: 'Neural Network Fundamentals', file: 'BCS711A_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'CNN - Convolutional Networks', file: 'BCS711A_M2.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'RNN & LSTM', file: 'BCS711A_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Transformers & Attention', file: 'BCS711A_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'GANs & Applications', file: 'BCS711A_M5.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCS711A_Complete.pdf', size: '18.5 MB', pages: 310 }
    },

    // ==================== AI & ML BRANCH ====================
    'BAD302': {
        name: 'Digital Design & Computer Organization',
        modules: [
            { num: 1, title: 'Number Systems & Boolean Algebra', file: 'BAD302_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Combinational Circuits', file: 'BAD302_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Sequential Circuits', file: 'BAD302_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'CPU Architecture', file: 'BAD302_M4.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'Memory & I/O', file: 'BAD302_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BAD302_Complete.pdf', size: '16.5 MB', pages: 282 }
    },
    'BAD305': {
        name: 'Python Programming',
        modules: [
            { num: 1, title: 'Python Basics', file: 'BAD305_M1.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Control Structures & Functions', file: 'BAD305_M2.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Data Structures in Python', file: 'BAD305_M3.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'OOP in Python', file: 'BAD305_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'File Handling & Libraries', file: 'BAD305_M5.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BAD305_Complete.pdf', size: '13.5 MB', pages: 231 }
    },
    'BAD401': {
        name: 'Analysis & Design of Algorithms',
        modules: [
            { num: 1, title: 'Algorithm Analysis', file: 'BAD401_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Divide and Conquer', file: 'BAD401_M2.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'Greedy Algorithms', file: 'BAD401_M3.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Dynamic Programming', file: 'BAD401_M4.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 5, title: 'Backtracking & B&B', file: 'BAD401_M5.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BAD401_Complete.pdf', size: '17.0 MB', pages: 290 }
    },
    'BAD403': {
        name: 'Probability & Statistics for ML',
        modules: [
            { num: 1, title: 'Probability Fundamentals', file: 'BAD403_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Random Variables', file: 'BAD403_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Probability Distributions', file: 'BAD403_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Statistical Inference', file: 'BAD403_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Regression & Correlation', file: 'BAD403_M5.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BAD403_Complete.pdf', size: '15.8 MB', pages: 268 }
    },
    'BAD504': {
        name: 'Big Data Analytics',
        modules: [
            { num: 1, title: 'Big Data Introduction', file: 'BAD504_M1.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Hadoop Ecosystem', file: 'BAD504_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'MapReduce Programming', file: 'BAD504_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Apache Spark', file: 'BAD504_M4.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 5, title: 'NoSQL Databases', file: 'BAD504_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BAD504_Complete.pdf', size: '17.5 MB', pages: 294 }
    },
    'BAD601': {
        name: 'Reinforcement Learning',
        modules: [
            { num: 1, title: 'RL Introduction & MDP', file: 'BAD601_M1.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Dynamic Programming', file: 'BAD601_M2.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'Monte Carlo Methods', file: 'BAD601_M3.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Temporal Difference Learning', file: 'BAD601_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'Deep RL', file: 'BAD601_M5.pdf', size: '4.2 MB', pages: 65, status: 'available' }
        ],
        complete: { file: 'BAD601_Complete.pdf', size: '17.0 MB', pages: 288 }
    },
    'BAD701': {
        name: 'Generative AI & LLMs',
        modules: [
            { num: 1, title: 'Generative Models Intro', file: 'BAD701_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Transformer Architecture', file: 'BAD701_M2.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'GPT & BERT Models', file: 'BAD701_M3.pdf', size: '4.8 MB', pages: 75, status: 'available' },
            { num: 4, title: 'Fine-tuning & Prompt Engineering', file: 'BAD701_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'LLM Applications', file: 'BAD701_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BAD701_Complete.pdf', size: '18.8 MB', pages: 317 }
    },

    // ==================== ECE BRANCH ====================
    'BEC402': {
        name: 'Analog Circuits',
        modules: [
            { num: 1, title: 'BJT Amplifiers', file: 'BEC402_M1.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 2, title: 'FET Amplifiers', file: 'BEC402_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Feedback Amplifiers', file: 'BEC402_M3.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Oscillators', file: 'BEC402_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Power Amplifiers', file: 'BEC402_M5.pdf', size: '2.8 MB', pages: 42, status: 'available' }
        ],
        complete: { file: 'BEC402_Complete.pdf', size: '15.8 MB', pages: 265 }
    },
    'BEC403': {
        name: 'Microcontrollers',
        modules: [
            { num: 1, title: '8051 Architecture', file: 'BEC403_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Instruction Set', file: 'BEC403_M2.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 3, title: 'Timers & Interrupts', file: 'BEC403_M3.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Serial Communication', file: 'BEC403_M4.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 5, title: 'Interfacing', file: 'BEC403_M5.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BEC403_Complete.pdf', size: '15.8 MB', pages: 265 }
    },
    'BEC501': {
        name: 'Digital Communication',
        modules: [
            { num: 1, title: 'Sampling & Quantization', file: 'BEC501_M1.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'PCM & DPCM', file: 'BEC501_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Digital Modulation (ASK, FSK, PSK)', file: 'BEC501_M3.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 4, title: 'Error Control Coding', file: 'BEC501_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'Spread Spectrum', file: 'BEC501_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BEC501_Complete.pdf', size: '17.0 MB', pages: 290 }
    },
    'BEC502': {
        name: 'Digital Signal Processing',
        modules: [
            { num: 1, title: 'Discrete Time Signals', file: 'BEC502_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Z-Transform', file: 'BEC502_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'DFT & FFT', file: 'BEC502_M3.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 4, title: 'FIR Filter Design', file: 'BEC502_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'IIR Filter Design', file: 'BEC502_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BEC502_Complete.pdf', size: '17.8 MB', pages: 300 }
    },
    'BEC601': {
        name: 'Wireless Communication',
        modules: [
            { num: 1, title: 'Wireless Channel', file: 'BEC601_M1.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Cellular Concepts', file: 'BEC601_M2.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'GSM & CDMA', file: 'BEC601_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'LTE & 4G', file: 'BEC601_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: '5G & Beyond', file: 'BEC601_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BEC601_Complete.pdf', size: '17.0 MB', pages: 288 }
    },

    // ==================== EEE BRANCH ====================
    'BEE403': {
        name: 'Electrical Machines - I',
        modules: [
            { num: 1, title: 'DC Generators', file: 'BEE403_M1.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 2, title: 'DC Motors', file: 'BEE403_M2.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 3, title: 'Transformers', file: 'BEE403_M3.pdf', size: '5.0 MB', pages: 78, status: 'available' },
            { num: 4, title: 'Testing of DC Machines', file: 'BEE403_M4.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 5, title: 'Special Transformers', file: 'BEE403_M5.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BEE403_Complete.pdf', size: '18.0 MB', pages: 305 }
    },
    'BEE501': {
        name: 'Power Electronics',
        modules: [
            { num: 1, title: 'Power Semiconductor Devices', file: 'BEE501_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Rectifiers', file: 'BEE501_M2.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'DC-DC Converters', file: 'BEE501_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Inverters', file: 'BEE501_M4.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'AC Voltage Controllers', file: 'BEE501_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BEE501_Complete.pdf', size: '18.0 MB', pages: 307 }
    },
    'BEE601': {
        name: 'Power System Analysis - II',
        modules: [
            { num: 1, title: 'Symmetrical Components', file: 'BEE601_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Fault Analysis', file: 'BEE601_M2.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'Power System Stability', file: 'BEE601_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Economic Load Dispatch', file: 'BEE601_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'FACTS Devices', file: 'BEE601_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BEE601_Complete.pdf', size: '18.0 MB', pages: 303 }
    },

    // ==================== ME BRANCH ====================
    'BME402': {
        name: 'Applied Thermodynamics',
        modules: [
            { num: 1, title: 'Gas Power Cycles', file: 'BME402_M1.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 2, title: 'Vapor Power Cycles', file: 'BME402_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Refrigeration Cycles', file: 'BME402_M3.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Psychrometry', file: 'BME402_M4.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Gas Mixtures & Combustion', file: 'BME402_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BME402_Complete.pdf', size: '16.5 MB', pages: 278 }
    },
    'BME404': {
        name: 'Kinematics of Machines',
        modules: [
            { num: 1, title: 'Mechanisms & Links', file: 'BME404_M1.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Velocity & Acceleration Analysis', file: 'BME404_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Cams', file: 'BME404_M3.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Gears', file: 'BME404_M4.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'Gear Trains', file: 'BME404_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BME404_Complete.pdf', size: '16.8 MB', pages: 285 }
    },
    'BME502': {
        name: 'Dynamics of Machines',
        modules: [
            { num: 1, title: 'Force Analysis', file: 'BME502_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Flywheel & Governors', file: 'BME502_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Balancing', file: 'BME502_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Vibrations', file: 'BME502_M4.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 5, title: 'Gyroscope', file: 'BME502_M5.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BME502_Complete.pdf', size: '17.5 MB', pages: 297 }
    },

    // ==================== CV BRANCH ====================
    'BCV402': {
        name: 'Analysis of Determinate Structures',
        modules: [
            { num: 1, title: 'Introduction to Structural Analysis', file: 'BCV402_M1.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Analysis of Trusses', file: 'BCV402_M2.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Cables & Arches', file: 'BCV402_M3.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Influence Lines', file: 'BCV402_M4.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'Deflection of Beams', file: 'BCV402_M5.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BCV402_Complete.pdf', size: '17.0 MB', pages: 289 }
    },
    'BCV502': {
        name: 'Design of RC Structures',
        modules: [
            { num: 1, title: 'Working Stress Method', file: 'BCV502_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Limit State Design', file: 'BCV502_M2.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'Design of Slabs', file: 'BCV502_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Design of Beams', file: 'BCV502_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'Design of Columns', file: 'BCV502_M5.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCV502_Complete.pdf', size: '18.5 MB', pages: 310 }
    },

    // ==================== DS BRANCH ====================
    'BDS305': {
        name: 'Python for Data Science',
        modules: [
            { num: 1, title: 'Python Fundamentals', file: 'BDS305_M1.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'NumPy & Arrays', file: 'BDS305_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Pandas for Data Analysis', file: 'BDS305_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Data Visualization', file: 'BDS305_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Scikit-learn Basics', file: 'BDS305_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BDS305_Complete.pdf', size: '16.0 MB', pages: 272 }
    },
    'BDS405': {
        name: 'Introduction to Data Science',
        modules: [
            { num: 1, title: 'Data Science Overview', file: 'BDS405_M1.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Data Collection & Cleaning', file: 'BDS405_M2.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Exploratory Data Analysis', file: 'BDS405_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Feature Engineering', file: 'BDS405_M4.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Model Building Basics', file: 'BDS405_M5.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BDS405_Complete.pdf', size: '15.5 MB', pages: 261 }
    },
    'BDS502': {
        name: 'Big Data Analytics',
        modules: [
            { num: 1, title: 'Big Data Introduction', file: 'BDS502_M1.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Hadoop Ecosystem', file: 'BDS502_M2.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 3, title: 'MapReduce', file: 'BDS502_M3.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Apache Spark', file: 'BDS502_M4.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 5, title: 'Stream Processing', file: 'BDS502_M5.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BDS502_Complete.pdf', size: '17.5 MB', pages: 294 }
    },
    'BDS601': {
        name: 'Deep Learning',
        modules: [
            { num: 1, title: 'Neural Network Basics', file: 'BDS601_M1.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'CNNs for Image Data', file: 'BDS601_M2.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'RNNs for Sequential Data', file: 'BDS601_M3.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Transformers', file: 'BDS601_M4.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'Generative Models', file: 'BDS601_M5.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BDS601_Complete.pdf', size: '18.5 MB', pages: 310 }
    }
};

// Extended Lab Manuals for ALL branches
const LabManualExtended = {
    // Sem 1-2 Common
    'BCHEL206': { name: 'Applied Chemistry Lab', experiments: ['Electrochemistry', 'Conductometry', 'Potentiometry', 'pH metry', 'Colorimetry'], file: 'BCHEL206_Lab.pdf', size: '4.5 MB', pages: 68 },
    'BEESKL207': { name: 'Basic Electrical Engineering Lab', experiments: ['KVL & KCL verification', 'Thevenin theorem', 'RLC circuits', 'Transformer testing', 'Motor characteristics'], file: 'BEESKL207_Lab.pdf', size: '5.0 MB', pages: 75 },
    'BEDSK208': { name: 'Engineering Design & Drafting', experiments: ['Orthographic projection', 'Isometric views', 'AutoCAD basics', '3D modeling', 'Assembly drawings'], file: 'BEDSK208_Lab.pdf', size: '6.0 MB', pages: 90 },

    // CSE Labs
    'BCSL306': { name: 'Data Structures Laboratory', experiments: ['Array operations', 'Stack - Infix to Postfix', 'Queue simulation', 'Linked lists', 'Binary tree traversal', 'BST operations', 'Graph BFS/DFS', 'Hashing'], file: 'BCSL306_Lab.pdf', size: '6.2 MB', pages: 95 },
    'BCSL406': { name: 'ADA Laboratory', experiments: ['Quick sort', 'Merge sort', 'Binary search', 'Knapsack greedy', 'Dijkstra', 'Kruskal MST', 'Floyd-Warshall', '0/1 Knapsack DP', 'N-Queens', 'TSP'], file: 'BCSL406_Lab.pdf', size: '5.8 MB', pages: 88 },
    'BCSL506': { name: 'Computer Networks Lab', experiments: ['CRC implementation', 'Bellman-Ford', 'Dijkstra routing', 'TCP/UDP sockets', 'Stop-and-Wait', 'Sliding window', 'Leaky bucket', 'DNS simulation'], file: 'BCSL506_Lab.pdf', size: '5.5 MB', pages: 82 },
    'BCSL606': { name: 'System Software Lab', experiments: ['Lexical analyzer', 'Parser using Yacc', 'Symbol table', 'Intermediate code', 'Code optimization', 'Two-pass assembler', 'Macro processor', 'Loader'], file: 'BCSL606_Lab.pdf', size: '5.2 MB', pages: 78 },

    // AI & ML Labs
    'BADL306': { name: 'Python Programming Lab', experiments: ['Python basics', 'Control structures', 'Functions', 'File handling', 'NumPy', 'Pandas', 'Matplotlib', 'Data analysis'], file: 'BADL306_Lab.pdf', size: '5.0 MB', pages: 75 },
    'BADL406': { name: 'Machine Learning Lab', experiments: ['Data preprocessing', 'Linear regression', 'Logistic regression', 'Decision trees', 'Random forest', 'K-means', 'KNN', 'SVM', 'Neural networks'], file: 'BADL406_Lab.pdf', size: '6.5 MB', pages: 98 },
    'BADL505': { name: 'Deep Learning Lab', experiments: ['Neural network basics', 'CNN image classification', 'Transfer learning', 'RNN sequence prediction', 'LSTM sentiment analysis', 'GAN implementation', 'Object detection'], file: 'BADL505_Lab.pdf', size: '7.2 MB', pages: 108 },
    'BADL605': { name: 'NLP & Computer Vision Lab', experiments: ['Text preprocessing', 'Word embeddings', 'Sentiment analysis', 'Named entity recognition', 'Image classification', 'Object detection', 'Face recognition'], file: 'BADL605_Lab.pdf', size: '7.5 MB', pages: 112 },

    // ECE Labs
    'BECL306': { name: 'Digital System Design Lab', experiments: ['Logic gates', 'Combinational circuits', 'Sequential circuits', 'Counters', 'Shift registers', 'VHDL programs'], file: 'BECL306_Lab.pdf', size: '5.5 MB', pages: 82 },
    'BECL406': { name: 'Analog Circuits Lab', experiments: ['CE amplifier', 'CB amplifier', 'CC amplifier', 'FET amplifier', 'Oscillators', 'Power amplifier'], file: 'BECL406_Lab.pdf', size: '5.2 MB', pages: 78 },
    'BECL505': { name: 'DSP Lab', experiments: ['DFT computation', 'FFT implementation', 'FIR filter design', 'IIR filter design', 'Convolution', 'Correlation'], file: 'BECL505_Lab.pdf', size: '5.8 MB', pages: 88 },

    // EEE Labs
    'BEEL306': { name: 'Analog Electronics Lab', experiments: ['Diode characteristics', 'Rectifiers', 'BJT characteristics', 'Amplifier circuits', 'Op-amp circuits'], file: 'BEEL306_Lab.pdf', size: '5.0 MB', pages: 75 },
    'BEEL406': { name: 'Electrical Machines Lab - I', experiments: ['DC generator characteristics', 'DC motor characteristics', 'Transformer testing', 'Speed control'], file: 'BEEL406_Lab.pdf', size: '5.5 MB', pages: 82 },
    'BEEL505': { name: 'Power Electronics Lab', experiments: ['SCR characteristics', 'Rectifier circuits', 'Chopper circuits', 'Inverter circuits', 'AC voltage controller'], file: 'BEEL505_Lab.pdf', size: '5.8 MB', pages: 88 },

    // ME Labs
    'BMEL306': { name: 'Foundry & Forging Lab', experiments: ['Mould preparation', 'Core making', 'Sand testing', 'Casting', 'Forging operations'], file: 'BMEL306_Lab.pdf', size: '4.8 MB', pages: 72 },
    'BMEL406': { name: 'Machine Shop Lab', experiments: ['Lathe operations', 'Milling operations', 'Drilling', 'Grinding', 'CNC programming'], file: 'BMEL406_Lab.pdf', size: '5.2 MB', pages: 78 },
    'BMEL505': { name: 'Fluid Mechanics Lab', experiments: ['Flow measurement', 'Pipe friction', 'Pump characteristics', 'Turbine testing', 'Wind tunnel'], file: 'BMEL505_Lab.pdf', size: '5.5 MB', pages: 82 },

    // CV Labs
    'BCVL306': { name: 'Surveying Lab', experiments: ['Chain surveying', 'Compass surveying', 'Plane table', 'Levelling', 'Theodolite', 'Total station'], file: 'BCVL306_Lab.pdf', size: '5.2 MB', pages: 78 },
    'BCVL406': { name: 'Concrete & Highway Materials Lab', experiments: ['Cement testing', 'Aggregate testing', 'Concrete mix design', 'Bitumen testing', 'Marshal stability'], file: 'BCVL406_Lab.pdf', size: '5.8 MB', pages: 88 },
    'BCVL505': { name: 'Geotechnical Engineering Lab', experiments: ['Soil classification', 'Atterberg limits', 'Compaction', 'Permeability', 'Shear strength', 'Consolidation'], file: 'BCVL505_Lab.pdf', size: '6.0 MB', pages: 92 },

    // DS Labs
    'BDSL306': { name: 'Python Lab', experiments: ['Python basics', 'NumPy operations', 'Pandas dataframes', 'Data visualization', 'Statistical analysis'], file: 'BDSL306_Lab.pdf', size: '5.0 MB', pages: 75 },
    'BDSL406': { name: 'Data Visualization Lab', experiments: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard creation', 'Interactive visualization'], file: 'BDSL406_Lab.pdf', size: '5.5 MB', pages: 82 },
    'BDSL505': { name: 'Machine Learning Lab', experiments: ['Data preprocessing', 'Regression models', 'Classification models', 'Clustering', 'Model evaluation'], file: 'BDSL505_Lab.pdf', size: '6.2 MB', pages: 95 }
};

// Merge with main NotesData
if (typeof window !== 'undefined') {
    window.NotesExtended = NotesExtended;
    window.LabManualExtended = LabManualExtended;
    if (window.NotesData) Object.assign(window.NotesData, NotesExtended);
    if (window.LabManualData) Object.assign(window.LabManualData, LabManualExtended);
}
