/**
 * Braintube - Complete Notes Database for VTU 2022 Scheme
 * Module-wise notes for all subjects with file metadata
 */

const NotesData = {
    // ==================== SEMESTER 1 COMMON SUBJECTS ====================
    'BMAT101': {
        name: 'Mathematics-I for CSE Stream',
        modules: [
            { num: 1, title: 'Differential Calculus', file: 'BMAT101_M1_Differential_Calculus.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Integral Calculus', file: 'BMAT101_M2_Integral_Calculus.pdf', size: '3.5 MB', pages: 52, status: 'available' },
            { num: 3, title: 'Ordinary Differential Equations', file: 'BMAT101_M3_ODE.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 4, title: 'Partial Differential Equations', file: 'BMAT101_M4_PDE.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 5, title: 'Linear Algebra', file: 'BMAT101_M5_Linear_Algebra.pdf', size: '3.8 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BMAT101_Complete_Notes.pdf', size: '14.5 MB', pages: 242 }
    },
    'BPHY102': {
        name: 'Applied Physics',
        modules: [
            { num: 1, title: 'Quantum Mechanics', file: 'BPHY102_M1_Quantum.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Laser Physics', file: 'BPHY102_M2_Laser.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 3, title: 'Optical Fibers', file: 'BPHY102_M3_Optical_Fibers.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 4, title: 'Electrical Properties of Materials', file: 'BPHY102_M4_Electrical.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Nanotechnology', file: 'BPHY102_M5_Nano.pdf', size: '2.6 MB', pages: 40, status: 'available' }
        ],
        complete: { file: 'BPHY102_Complete_Notes.pdf', size: '12.8 MB', pages: 213 }
    },
    'BPOPS103': {
        name: 'Principles of Programming using C',
        modules: [
            { num: 1, title: 'Introduction to C', file: 'BPOPS103_M1_Introduction.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Control Structures', file: 'BPOPS103_M2_Control.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Arrays & Strings', file: 'BPOPS103_M3_Arrays_Strings.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 4, title: 'Functions & Pointers', file: 'BPOPS103_M4_Functions_Pointers.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Structures & File Handling', file: 'BPOPS103_M5_Structures_Files.pdf', size: '3.5 MB', pages: 52, status: 'available' }
        ],
        complete: { file: 'BPOPS103_Complete_Notes.pdf', size: '14.2 MB', pages: 241 }
    },

    // ==================== SEMESTER 2 COMMON SUBJECTS ====================
    'BMAT201': {
        name: 'Mathematics-II for CSE Stream',
        modules: [
            { num: 1, title: 'Laplace Transforms', file: 'BMAT201_M1_Laplace.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Fourier Series', file: 'BMAT201_M2_Fourier_Series.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 3, title: 'Fourier Transforms', file: 'BMAT201_M3_Fourier_Transform.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 4, title: 'Z-Transforms', file: 'BMAT201_M4_Z_Transform.pdf', size: '2.6 MB', pages: 40, status: 'available' },
            { num: 5, title: 'Numerical Methods', file: 'BMAT201_M5_Numerical.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BMAT201_Complete_Notes.pdf', size: '13.2 MB', pages: 220 }
    },
    'BCHE202': {
        name: 'Applied Chemistry',
        modules: [
            { num: 1, title: 'Electrochemistry', file: 'BCHE202_M1_Electrochemistry.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Corrosion & Control', file: 'BCHE202_M2_Corrosion.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 3, title: 'Polymers', file: 'BCHE202_M3_Polymers.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Fuels & Combustion', file: 'BCHE202_M4_Fuels.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 5, title: 'Water Chemistry', file: 'BCHE202_M5_Water.pdf', size: '2.5 MB', pages: 38, status: 'available' }
        ],
        complete: { file: 'BCHE202_Complete_Notes.pdf', size: '12.0 MB', pages: 205 }
    },

    // ==================== CSE SEMESTER 3 ====================
    'BCS301': {
        name: 'Mathematics for Computer Science',
        modules: [
            { num: 1, title: 'Linear Algebra', file: 'BCS301_M1_Linear_Algebra.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Calculus', file: 'BCS301_M2_Calculus.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Probability Theory', file: 'BCS301_M3_Probability.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 4, title: 'Statistics', file: 'BCS301_M4_Statistics.pdf', size: '2.6 MB', pages: 40, status: 'available' },
            { num: 5, title: 'Graph Theory', file: 'BCS301_M5_Graph_Theory.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BCS301_Complete_Notes.pdf', size: '13.8 MB', pages: 230 }
    },
    'BCS302': {
        name: 'Digital Design & Computer Organization',
        modules: [
            { num: 1, title: 'Boolean Algebra & Logic Gates', file: 'BCS302_M1_Boolean.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Combinational Circuits', file: 'BCS302_M2_Combinational.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Sequential Circuits', file: 'BCS302_M3_Sequential.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Memory & CPU Organization', file: 'BCS302_M4_Memory_CPU.pdf', size: '4.5 MB', pages: 68, status: 'available' },
            { num: 5, title: 'Pipelining & I/O', file: 'BCS302_M5_Pipeline_IO.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BCS302_Complete_Notes.pdf', size: '16.5 MB', pages: 275 }
    },
    'BCS303': {
        name: 'Operating Systems',
        modules: [
            { num: 1, title: 'Introduction to OS', file: 'BCS303_M1_Introduction.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Process Management', file: 'BCS303_M2_Process.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 3, title: 'Synchronization & Deadlocks', file: 'BCS303_M3_Sync_Deadlock.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Memory Management', file: 'BCS303_M4_Memory.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'File Systems & Security', file: 'BCS303_M5_FileSystem.pdf', size: '3.5 MB', pages: 52, status: 'available' }
        ],
        complete: { file: 'BCS303_Complete_Notes.pdf', size: '16.8 MB', pages: 279 }
    },
    'BCS304': {
        name: 'Data Structures and Applications',
        modules: [
            { num: 1, title: 'Introduction & Arrays', file: 'BCS304_M1_Arrays.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Stacks & Queues', file: 'BCS304_M2_Stacks_Queues.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Linked Lists', file: 'BCS304_M3_LinkedLists.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Trees', file: 'BCS304_M4_Trees.pdf', size: '4.8 MB', pages: 75, status: 'available' },
            { num: 5, title: 'Graphs', file: 'BCS304_M5_Graphs.pdf', size: '4.5 MB', pages: 68, status: 'available' }
        ],
        complete: { file: 'BCS304_Complete_Notes.pdf', size: '17.5 MB', pages: 298 }
    },
    'BCS305A': {
        name: 'Object Oriented Programming with Java',
        modules: [
            { num: 1, title: 'Java Fundamentals', file: 'BCS305A_M1_Fundamentals.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Classes & Objects', file: 'BCS305A_M2_Classes.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Inheritance & Polymorphism', file: 'BCS305A_M3_Inheritance.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 4, title: 'Packages & Interfaces', file: 'BCS305A_M4_Packages.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 5, title: 'Exception Handling & Multithreading', file: 'BCS305A_M5_Exceptions.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCS305A_Complete_Notes.pdf', size: '14.8 MB', pages: 248 }
    },

    // ==================== CSE SEMESTER 4 ====================
    'BCS401': {
        name: 'Analysis & Design of Algorithms',
        modules: [
            { num: 1, title: 'Algorithm Analysis', file: 'BCS401_M1_Analysis.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Divide and Conquer', file: 'BCS401_M2_Divide_Conquer.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'Greedy Algorithms', file: 'BCS401_M3_Greedy.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Dynamic Programming', file: 'BCS401_M4_DP.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 5, title: 'Backtracking & Branch and Bound', file: 'BCS401_M5_Backtracking.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BCS401_Complete_Notes.pdf', size: '17.2 MB', pages: 287 }
    },
    'BCS402': {
        name: 'Microcontrollers',
        modules: [
            { num: 1, title: '8051 Architecture', file: 'BCS402_M1_Architecture.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Instruction Set', file: 'BCS402_M2_Instructions.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Timers & Interrupts', file: 'BCS402_M3_Timers.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Serial Communication', file: 'BCS402_M4_Serial.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 5, title: 'Interfacing', file: 'BCS402_M5_Interfacing.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BCS402_Complete_Notes.pdf', size: '15.0 MB', pages: 252 }
    },
    'BCS403': {
        name: 'Database Management Systems',
        modules: [
            { num: 1, title: 'Introduction & ER Model', file: 'BCS403_M1_ER_Model.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Relational Model & SQL', file: 'BCS403_M2_SQL.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 3, title: 'Normalization', file: 'BCS403_M3_Normalization.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Transaction Management', file: 'BCS403_M4_Transactions.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 5, title: 'Storage & Indexing', file: 'BCS403_M5_Indexing.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BCS403_Complete_Notes.pdf', size: '16.5 MB', pages: 276 }
    },
    'BCS404': {
        name: 'Discrete Mathematical Structures',
        modules: [
            { num: 1, title: 'Logic & Proofs', file: 'BCS404_M1_Logic.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Set Theory & Relations', file: 'BCS404_M2_Sets.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 3, title: 'Functions & Recursion', file: 'BCS404_M3_Functions.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Graph Theory', file: 'BCS404_M4_Graphs.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Algebraic Structures', file: 'BCS404_M5_Algebra.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BCS404_Complete_Notes.pdf', size: '15.0 MB', pages: 248 }
    },

    // ==================== CSE SEMESTER 5 ====================
    'BCS501': {
        name: 'Software Engineering & Project Management',
        modules: [
            { num: 1, title: 'Software Process Models', file: 'BCS501_M1_Process.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Requirements Engineering', file: 'BCS501_M2_Requirements.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Design & Architecture', file: 'BCS501_M3_Design.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Testing Strategies', file: 'BCS501_M4_Testing.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Project Management', file: 'BCS501_M5_PM.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BCS501_Complete_Notes.pdf', size: '16.0 MB', pages: 268 }
    },
    'BCS502': {
        name: 'Computer Networks',
        modules: [
            { num: 1, title: 'Introduction & Physical Layer', file: 'BCS502_M1_Physical.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Data Link Layer', file: 'BCS502_M2_DataLink.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'Network Layer', file: 'BCS502_M3_Network.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 4, title: 'Transport Layer', file: 'BCS502_M4_Transport.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 5, title: 'Application Layer', file: 'BCS502_M5_Application.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BCS502_Complete_Notes.pdf', size: '15.8 MB', pages: 265 }
    },
    'BCS503': {
        name: 'Theory of Computation',
        modules: [
            { num: 1, title: 'Finite Automata', file: 'BCS503_M1_FA.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Regular Languages', file: 'BCS503_M2_Regular.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Context-Free Languages', file: 'BCS503_M3_CFL.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Pushdown Automata', file: 'BCS503_M4_PDA.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Turing Machines & Decidability', file: 'BCS503_M5_TM.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BCS503_Complete_Notes.pdf', size: '16.0 MB', pages: 268 }
    },
    'BCS504': {
        name: 'Artificial Intelligence',
        modules: [
            { num: 1, title: 'Introduction to AI', file: 'BCS504_M1_Intro.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Search Algorithms', file: 'BCS504_M2_Search.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'Knowledge Representation', file: 'BCS504_M3_KR.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 4, title: 'Machine Learning Basics', file: 'BCS504_M4_ML.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 5, title: 'Expert Systems & NLP', file: 'BCS504_M5_Expert.pdf', size: '3.2 MB', pages: 48, status: 'available' }
        ],
        complete: { file: 'BCS504_Complete_Notes.pdf', size: '15.5 MB', pages: 261 }
    },

    // ==================== CSE SEMESTER 6 ====================
    'BCS601': {
        name: 'System Software & Compilers',
        modules: [
            { num: 1, title: 'Introduction to System Software', file: 'BCS601_M1_Intro.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Assemblers', file: 'BCS601_M2_Assemblers.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Loaders & Linkers', file: 'BCS601_M3_Loaders.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 4, title: 'Lexical & Syntax Analysis', file: 'BCS601_M4_Parsing.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'Code Generation & Optimization', file: 'BCS601_M5_CodeGen.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCS601_Complete_Notes.pdf', size: '15.5 MB', pages: 261 }
    },
    'BCS602': {
        name: 'Computer Graphics & Image Processing',
        modules: [
            { num: 1, title: 'Graphics Fundamentals', file: 'BCS602_M1_Fundamentals.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 2, title: 'Line & Circle Algorithms', file: 'BCS602_M2_Algorithms.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: '2D & 3D Transformations', file: 'BCS602_M3_Transforms.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Clipping & Visible Surfaces', file: 'BCS602_M4_Clipping.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Image Processing', file: 'BCS602_M5_Image.pdf', size: '3.8 MB', pages: 58, status: 'available' }
        ],
        complete: { file: 'BCS602_Complete_Notes.pdf', size: '16.0 MB', pages: 268 }
    },
    'BCS603': {
        name: 'Machine Learning',
        modules: [
            { num: 1, title: 'Introduction to ML', file: 'BCS603_M1_Intro.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 2, title: 'Supervised Learning - Regression', file: 'BCS603_M2_Regression.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 3, title: 'Supervised Learning - Classification', file: 'BCS603_M3_Classification.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 4, title: 'Unsupervised Learning', file: 'BCS603_M4_Unsupervised.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Neural Networks', file: 'BCS603_M5_NN.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BCS603_Complete_Notes.pdf', size: '17.5 MB', pages: 293 }
    },

    // ==================== AI & ML SUBJECTS ====================
    'BAD301': {
        name: 'Mathematics for Machine Learning',
        modules: [
            { num: 1, title: 'Linear Algebra for ML', file: 'BAD301_M1_Linear.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 2, title: 'Multivariate Calculus', file: 'BAD301_M2_Calculus.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Probability Theory', file: 'BAD301_M3_Probability.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 4, title: 'Optimization', file: 'BAD301_M4_Optimization.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 5, title: 'Statistics for ML', file: 'BAD301_M5_Statistics.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BAD301_Complete_Notes.pdf', size: '15.5 MB', pages: 261 }
    },
    'BAD404': {
        name: 'Introduction to Machine Learning',
        modules: [
            { num: 1, title: 'ML Fundamentals', file: 'BAD404_M1_Fundamentals.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Regression Algorithms', file: 'BAD404_M2_Regression.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Classification Algorithms', file: 'BAD404_M3_Classification.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 4, title: 'Clustering Algorithms', file: 'BAD404_M4_Clustering.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 5, title: 'Model Evaluation', file: 'BAD404_M5_Evaluation.pdf', size: '2.8 MB', pages: 42, status: 'available' }
        ],
        complete: { file: 'BAD404_Complete_Notes.pdf', size: '16.0 MB', pages: 271 }
    },
    'BAD501': {
        name: 'Deep Learning',
        modules: [
            { num: 1, title: 'Neural Network Basics', file: 'BAD501_M1_NN.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 2, title: 'Convolutional Neural Networks', file: 'BAD501_M2_CNN.pdf', size: '5.0 MB', pages: 78, status: 'available' },
            { num: 3, title: 'Recurrent Neural Networks', file: 'BAD501_M3_RNN.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 4, title: 'Transformers & Attention', file: 'BAD501_M4_Transformers.pdf', size: '4.8 MB', pages: 75, status: 'available' },
            { num: 5, title: 'GANs & Autoencoders', file: 'BAD501_M5_GANs.pdf', size: '4.2 MB', pages: 65, status: 'available' }
        ],
        complete: { file: 'BAD501_Complete_Notes.pdf', size: '20.5 MB', pages: 346 }
    },
    'BAD502': {
        name: 'Natural Language Processing',
        modules: [
            { num: 1, title: 'NLP Fundamentals', file: 'BAD502_M1_Fundamentals.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Text Representation', file: 'BAD502_M2_Text.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Language Models', file: 'BAD502_M3_LM.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'NLP Applications', file: 'BAD502_M4_Applications.pdf', size: '4.2 MB', pages: 65, status: 'available' },
            { num: 5, title: 'Transformers for NLP', file: 'BAD502_M5_Transformers.pdf', size: '4.5 MB', pages: 70, status: 'available' }
        ],
        complete: { file: 'BAD502_Complete_Notes.pdf', size: '17.5 MB', pages: 294 }
    },
    'BAD503': {
        name: 'Computer Vision',
        modules: [
            { num: 1, title: 'Image Fundamentals', file: 'BAD503_M1_Image.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Feature Detection', file: 'BAD503_M2_Features.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 3, title: 'Object Detection', file: 'BAD503_M3_Detection.pdf', size: '5.0 MB', pages: 78, status: 'available' },
            { num: 4, title: 'Image Segmentation', file: 'BAD503_M4_Segmentation.pdf', size: '4.5 MB', pages: 70, status: 'available' },
            { num: 5, title: 'Video Analysis', file: 'BAD503_M5_Video.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BAD503_Complete_Notes.pdf', size: '19.0 MB', pages: 316 }
    },

    // ==================== ECE SUBJECTS ====================
    'BEC301': {
        name: 'Transform Calculus & Numerical Techniques',
        modules: [
            { num: 1, title: 'Laplace Transforms', file: 'BEC301_M1_Laplace.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Fourier Series', file: 'BEC301_M2_Fourier.pdf', size: '3.0 MB', pages: 45, status: 'available' },
            { num: 3, title: 'Fourier Transforms', file: 'BEC301_M3_FT.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 4, title: 'Z-Transforms', file: 'BEC301_M4_ZT.pdf', size: '2.5 MB', pages: 38, status: 'available' },
            { num: 5, title: 'Complex Analysis', file: 'BEC301_M5_Complex.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BEC301_Complete_Notes.pdf', size: '13.5 MB', pages: 228 }
    },
    'BEC302': {
        name: 'Network Analysis',
        modules: [
            { num: 1, title: 'Basic Network Concepts', file: 'BEC302_M1_Basics.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'Network Theorems', file: 'BEC302_M2_Theorems.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Transient Analysis', file: 'BEC302_M3_Transient.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Two-Port Networks', file: 'BEC302_M4_TwoPort.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Filters & Resonance', file: 'BEC302_M5_Filters.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BEC302_Complete_Notes.pdf', size: '14.8 MB', pages: 248 }
    },

    // ==================== MECHANICAL ENGINEERING ====================
    'BME302': {
        name: 'Mechanics of Materials',
        modules: [
            { num: 1, title: 'Stress & Strain', file: 'BME302_M1_Stress.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 2, title: 'Shear Force & Bending Moment', file: 'BME302_M2_SFBM.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 3, title: 'Bending Stresses', file: 'BME302_M3_Bending.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Torsion', file: 'BME302_M4_Torsion.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Columns & Struts', file: 'BME302_M5_Columns.pdf', size: '3.0 MB', pages: 45, status: 'available' }
        ],
        complete: { file: 'BME302_Complete_Notes.pdf', size: '16.0 MB', pages: 268 }
    },
    'BME303': {
        name: 'Basic Thermodynamics',
        modules: [
            { num: 1, title: 'Basic Concepts', file: 'BME303_M1_Basics.pdf', size: '2.8 MB', pages: 42, status: 'available' },
            { num: 2, title: 'First Law of Thermodynamics', file: 'BME303_M2_FirstLaw.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Second Law of Thermodynamics', file: 'BME303_M3_SecondLaw.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 4, title: 'Entropy', file: 'BME303_M4_Entropy.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 5, title: 'Thermodynamic Cycles', file: 'BME303_M5_Cycles.pdf', size: '4.0 MB', pages: 62, status: 'available' }
        ],
        complete: { file: 'BME303_Complete_Notes.pdf', size: '15.8 MB', pages: 265 }
    },

    // ==================== CIVIL ENGINEERING ====================
    'BCV302': {
        name: 'Mechanics of Materials',
        modules: [
            { num: 1, title: 'Simple Stresses & Strains', file: 'BCV302_M1_Stress.pdf', size: '3.2 MB', pages: 48, status: 'available' },
            { num: 2, title: 'Compound Stress', file: 'BCV302_M2_Compound.pdf', size: '3.5 MB', pages: 55, status: 'available' },
            { num: 3, title: 'Shear Force & Bending Moment', file: 'BCV302_M3_SFBM.pdf', size: '4.0 MB', pages: 62, status: 'available' },
            { num: 4, title: 'Bending & Shear Stresses', file: 'BCV302_M4_Bending.pdf', size: '3.8 MB', pages: 58, status: 'available' },
            { num: 5, title: 'Deflection of Beams', file: 'BCV302_M5_Deflection.pdf', size: '3.5 MB', pages: 55, status: 'available' }
        ],
        complete: { file: 'BCV302_Complete_Notes.pdf', size: '16.5 MB', pages: 278 }
    }
};

// Lab Manual Data
const LabManualData = {
    'BPHYL106': {
        name: 'Applied Physics Lab',
        experiments: [
            'Determination of wavelength using diffraction grating',
            'Determination of numerical aperture of optical fiber',
            'Study of laser characteristics',
            'Determination of Fermi energy',
            'Study of I-V characteristics of LED'
        ],
        file: 'BPHYL106_Lab_Manual.pdf', size: '5.5 MB', pages: 85
    },
    'BPOPL107': {
        name: 'C Programming Lab',
        experiments: [
            'Basic programs - Input/Output operations',
            'Decision making programs',
            'Looping programs',
            'Array operations',
            'String operations',
            'Functions and recursion',
            'Pointers and arrays',
            'Structure programs',
            'File handling programs'
        ],
        file: 'BPOPL107_Lab_Manual.pdf', size: '4.8 MB', pages: 72
    },
    'BCSL306': {
        name: 'Data Structures Laboratory',
        experiments: [
            'Array operations and polynomial evaluation',
            'String operations',
            'Stack implementation - Infix to Postfix',
            'Expression evaluation using stack',
            'Circular queue simulation',
            'Singly linked list operations',
            'Doubly linked list operations',
            'Binary tree traversals',
            'Binary search tree operations',
            'Graph traversals - BFS and DFS',
            'Hashing techniques'
        ],
        file: 'BCSL306_Lab_Manual.pdf', size: '6.2 MB', pages: 95
    },
    'BCSL406': {
        name: 'Analysis & Design of Algorithms Lab',
        experiments: [
            'Selection sort and time complexity',
            'Quick sort implementation',
            'Merge sort implementation',
            'Binary search with divide and conquer',
            'Knapsack using greedy approach',
            'Dijkstra shortest path',
            'Kruskal MST algorithm',
            'Floyd-Warshall algorithm',
            '0/1 Knapsack using dynamic programming',
            'N-Queens using backtracking',
            'Travelling salesman problem'
        ],
        file: 'BCSL406_Lab_Manual.pdf', size: '5.8 MB', pages: 88
    },
    'BCSL506': {
        name: 'Computer Networks Lab',
        experiments: [
            'Simulate performance of WAN protocols',
            'CRC algorithm implementation',
            'Bellman-Ford routing algorithm',
            'Dijkstra routing algorithm',
            'OSPF routing protocol simulation',
            'TCP/UDP socket programming',
            'Stop and Wait protocol',
            'Sliding window protocol',
            'Leaky bucket algorithm',
            'DNS lookup simulation'
        ],
        file: 'BCSL506_Lab_Manual.pdf', size: '5.5 MB', pages: 82
    },
    'BCSL606': {
        name: 'System Software & Compilers Lab',
        experiments: [
            'Lexical analyzer using Lex',
            'Parser using Yacc',
            'Symbol table management',
            'Intermediate code generation',
            'Code optimization techniques',
            'Pass-1 of two pass assembler',
            'Pass-2 of two pass assembler',
            'Macro processor',
            'Absolute loader implementation',
            'Relocating loader implementation'
        ],
        file: 'BCSL606_Lab_Manual.pdf', size: '5.2 MB', pages: 78
    },
    'BADL306': {
        name: 'Python Programming Lab',
        experiments: [
            'Python basics and data types',
            'Control structures',
            'Functions and modules',
            'File handling',
            'NumPy arrays',
            'Pandas dataframes',
            'Data visualization with Matplotlib',
            'Basic statistical analysis',
            'Linear regression implementation',
            'Classification using scikit-learn'
        ],
        file: 'BADL306_Lab_Manual.pdf', size: '5.0 MB', pages: 75
    },
    'BADL406': {
        name: 'Machine Learning Lab',
        experiments: [
            'Data preprocessing and visualization',
            'Linear regression implementation',
            'Logistic regression for classification',
            'Decision tree classifier',
            'Random forest implementation',
            'K-means clustering',
            'K-nearest neighbors',
            'Support vector machines',
            'Naive Bayes classifier',
            'Neural network using TensorFlow',
            'Model evaluation and cross-validation'
        ],
        file: 'BADL406_Lab_Manual.pdf', size: '6.5 MB', pages: 98
    },
    'BADL505': {
        name: 'Deep Learning Lab',
        experiments: [
            'Neural network from scratch',
            'Keras and TensorFlow basics',
            'Convolutional neural networks',
            'Image classification with CNN',
            'Transfer learning with pre-trained models',
            'Recurrent neural networks',
            'LSTM for sequence prediction',
            'Sentiment analysis using RNN',
            'Generative adversarial networks',
            'Object detection with YOLO'
        ],
        file: 'BADL505_Lab_Manual.pdf', size: '7.2 MB', pages: 108
    }
};

// Question Papers Data
const QuestionPapersData = {
    years: ['Dec/Jan 2025-26', 'June/July 2025', 'Dec/Jan 2024-25', 'June/July 2024', 'Dec/Jan 2023-24'],
    getForSubject: (code) => ({
        papers: QuestionPapersData.years.map((year, i) => ({
            year,
            file: `${code}_QP_${year.replace(/[\/\s]/g, '_')}.pdf`,
            size: `${(0.8 + Math.random() * 0.5).toFixed(1)} MB`,
            hasSolution: i < 2
        }))
    })
};

// Make available globally
if (typeof window !== 'undefined') {
    window.NotesData = NotesData;
    window.LabManualData = LabManualData;
    window.QuestionPapersData = QuestionPapersData;
}
