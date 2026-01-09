/**
 * VTU 2022 Scheme - Complete Syllabus Database
 * All Branches | All Semesters | Module-wise Details
 */

const VTUSyllabus = {
    // ==================== SEMESTER 1 (Physics Cycle) ====================
    'BMATK103': {
        name: 'Mathematics for CSE - I',
        code: 'BMATK103',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers essential mathematical concepts including calculus, linear algebra, and differential equations required for computer science applications.',
        objectives: [
            'Apply calculus concepts to solve engineering problems',
            'Understand linear algebra and matrix operations',
            'Solve ordinary differential equations',
            'Apply numerical methods for computing'
        ],
        outcomes: [
            'Ability to solve problems using calculus',
            'Apply linear algebra in computing',
            'Solve differential equations',
            'Use numerical methods effectively'
        ],
        modules: [
            { num: 1, title: 'Differential Calculus', hours: 10, topics: 'Polar curves, Radius of Curvature, Taylor and Maclaurin series expansion for one variable.' },
            { num: 2, title: 'Integral Calculus', hours: 10, topics: 'Reduction formulae, Curve tracing, Applications of definite integrals to find area, length, volume and surface area.' },
            { num: 3, title: 'Ordinary Differential Equations', hours: 10, topics: 'First order ODEs, Linear differential equations with constant coefficients, Method of variation of parameters.' },
            { num: 4, title: 'Linear Algebra', hours: 10, topics: 'Rank of a matrix, Consistency of system of linear equations, Gauss elimination method, Eigenvalues and Eigenvectors.' },
            { num: 5, title: 'Numerical Methods', hours: 10, topics: 'Finite differences, Interpolation using Newton and Lagrange formulae, Numerical differentiation and integration, Numerical solutions of ODEs.' }
        ],
        textbooks: [
            'Higher Engineering Mathematics - B.S. Grewal, Khanna Publishers',
            'Advanced Engineering Mathematics - Erwin Kreyszig, Wiley'
        ],
        references: [
            'Engineering Mathematics - N.P. Bali and Manish Goyal',
            'Higher Engineering Mathematics - H.K. Dass'
        ]
    },
    'BPHYK102': {
        name: 'Applied Physics for CSE',
        code: 'BPHYK102',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course provides fundamental understanding of physics concepts relevant to computer science including quantum mechanics, semiconductors, and laser technology.',
        objectives: [
            'Understand quantum mechanics fundamentals',
            'Learn about semiconductor physics',
            'Study laser principles and applications',
            'Understand optical fiber communication'
        ],
        outcomes: [
            'Apply quantum mechanics concepts',
            'Understand semiconductor device physics',
            'Explain laser working principles',
            'Design optical communication systems'
        ],
        modules: [
            { num: 1, title: 'Quantum Mechanics', hours: 10, topics: 'Wave-particle duality, de Broglie hypothesis, Heisenberg uncertainty principle, Schrodinger wave equation.' },
            { num: 2, title: 'Quantum Computing', hours: 8, topics: 'Principles of quantum computing, Qubits, Quantum gates, Quantum algorithms basics.' },
            { num: 3, title: 'Laser and Optical Fibers', hours: 10, topics: 'Laser principles, Types of lasers, Optical fiber construction, Numerical aperture, Fiber optic communication.' },
            { num: 4, title: 'Semiconductors', hours: 10, topics: 'Band theory, Intrinsic and extrinsic semiconductors, p-n junction, Hall effect.' },
            { num: 5, title: 'Electrical Properties', hours: 8, topics: 'Classical free electron theory, Quantum free electron theory, Superconductivity, Applications.' }
        ],
        textbooks: [
            'Engineering Physics - Gaur and Gupta, Dhanpat Rai Publications',
            'A Textbook of Engineering Physics - M.N. Avadhanulu'
        ],
        references: [
            'Concepts of Modern Physics - Arthur Beiser',
            'Introduction to Solid State Physics - Charles Kittel'
        ]
    },
    'BESCK104E': {
        name: 'Introduction to Electronics',
        code: 'BESCK104E',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        description: 'Fundamentals of analog and digital electronics including semiconductor devices, amplifiers, and logic circuits.',
        objectives: [
            'Understand semiconductor device operation',
            'Learn amplifier circuit design',
            'Study digital logic fundamentals',
            'Apply electronics in computing systems'
        ],
        outcomes: [
            'Analyze semiconductor devices',
            'Design basic amplifier circuits',
            'Implement digital logic circuits',
            'Interface electronic components'
        ],
        modules: [
            { num: 1, title: 'Semiconductor Diodes', hours: 8, topics: 'PN junction diode, Zener diode, LED, Photodiode, Rectifiers and filters.' },
            { num: 2, title: 'Bipolar Junction Transistors', hours: 10, topics: 'BJT construction, Operation, Configurations, Biasing, Load line analysis.' },
            { num: 3, title: 'Operational Amplifiers', hours: 10, topics: 'Op-amp characteristics, Inverting and non-inverting amplifiers, Applications of op-amps.' },
            { num: 4, title: 'Digital Electronics Basics', hours: 10, topics: 'Number systems, Logic gates, Boolean algebra, Combinational circuits.' },
            { num: 5, title: 'Sequential Circuits', hours: 8, topics: 'Flip-flops, Registers, Counters, Introduction to microprocessors.' }
        ],
        textbooks: [
            'Electronic Devices and Circuit Theory - Boylestad and Nashelsky',
            'Digital Logic and Computer Design - M. Morris Mano'
        ],
        references: [
            'Electronic Devices - Floyd',
            'Microelectronic Circuits - Sedra and Smith'
        ]
    },
    'BPOPS103': {
        name: 'Principles of Programming using C',
        code: 'BPOPS103',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        description: 'Introduction to programming concepts using C language, covering fundamentals of structured programming, data types, control structures, and functions.',
        objectives: [
            'Understand programming fundamentals',
            'Learn C language syntax and semantics',
            'Develop problem-solving skills',
            'Write efficient C programs'
        ],
        outcomes: [
            'Write syntactically correct C programs',
            'Apply control structures effectively',
            'Use functions and arrays',
            'Implement file handling operations'
        ],
        modules: [
            { num: 1, title: 'Introduction to C', hours: 8, topics: 'History of C, Structure of C program, Data types, Variables, Constants, Operators, Expressions.' },
            { num: 2, title: 'Control Statements', hours: 10, topics: 'Decision making: if, if-else, nested if, switch. Loops: while, do-while, for. Break and continue.' },
            { num: 3, title: 'Arrays and Strings', hours: 10, topics: 'One-dimensional arrays, Two-dimensional arrays, String handling functions, Character arrays.' },
            { num: 4, title: 'Functions and Pointers', hours: 10, topics: 'Function definition, Call by value and reference, Recursion, Pointers, Pointer arithmetic.' },
            { num: 5, title: 'Structures and Files', hours: 8, topics: 'Structure definition, Array of structures, Nested structures, File operations: fopen, fclose, fprintf, fscanf.' }
        ],
        textbooks: [
            'The C Programming Language - Kernighan and Ritchie',
            'Programming in C - E. Balagurusamy'
        ],
        references: [
            'Let Us C - Yashavant Kanetkar',
            'C: The Complete Reference - Herbert Schildt'
        ]
    },

    // ==================== SEMESTER 2 (Chemistry Cycle) ====================
    'BMATK203': {
        name: 'Mathematics for CSE - II',
        code: 'BMATK203',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'Advanced mathematical concepts including transforms, vector calculus, and complex analysis essential for computer science.',
        objectives: [
            'Apply Laplace transforms',
            'Understand Fourier series and transforms',
            'Learn vector calculus operations',
            'Study complex analysis fundamentals'
        ],
        outcomes: [
            'Solve problems using Laplace transforms',
            'Apply Fourier analysis techniques',
            'Perform vector calculus operations',
            'Analyze complex functions'
        ],
        modules: [
            { num: 1, title: 'Laplace Transforms', hours: 10, topics: 'Definition, Transforms of elementary functions, Properties, Inverse Laplace transforms, Applications to ODEs.' },
            { num: 2, title: 'Fourier Series', hours: 10, topics: 'Periodic functions, Dirichlet conditions, Fourier series expansion, Half range series.' },
            { num: 3, title: 'Fourier Transforms', hours: 8, topics: 'Fourier integral, Fourier sine and cosine transforms, Applications to boundary value problems.' },
            { num: 4, title: 'Vector Calculus', hours: 10, topics: 'Gradient, Divergence, Curl, Line, Surface and Volume integrals, Green, Stokes and Gauss theorems.' },
            { num: 5, title: 'Complex Analysis', hours: 10, topics: 'Analytic functions, Cauchy-Riemann equations, Cauchy integral formula, Taylor and Laurent series, Residue theorem.' }
        ],
        textbooks: [
            'Higher Engineering Mathematics - B.S. Grewal',
            'Advanced Engineering Mathematics - Erwin Kreyszig'
        ],
        references: [
            'Engineering Mathematics - N.P. Bali',
            'Complex Variables and Applications - Churchill'
        ]
    },

    // ==================== CSE SEMESTER 3 ====================
    'BCS301': {
        name: 'Mathematics for Computer Science',
        code: 'BCS301',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course provides mathematical foundation for computer science including linear algebra, probability, statistics, and graph theory essential for algorithms and machine learning.',
        objectives: [
            'Apply linear algebra in computing applications',
            'Solve probability and statistics problems',
            'Understand graph theory concepts',
            'Apply mathematical concepts in algorithm design'
        ],
        outcomes: [
            'Solve systems of linear equations using matrix methods',
            'Apply probability distributions in computing',
            'Analyze graphs and trees mathematically',
            'Use statistical methods for data analysis'
        ],
        modules: [
            { num: 1, title: 'Linear Algebra', hours: 10, topics: 'Matrices, Rank, Eigenvalues, Eigenvectors, Diagonalization, LU and QR Decomposition, Singular Value Decomposition.' },
            { num: 2, title: 'Calculus', hours: 8, topics: 'Partial Derivatives, Gradient, Hessian, Multiple Integrals, Vector Calculus fundamentals.' },
            { num: 3, title: 'Probability', hours: 10, topics: 'Sample space, Events, Conditional probability, Bayes theorem, Random variables, Probability distributions.' },
            { num: 4, title: 'Statistics', hours: 8, topics: 'Mean, Variance, Standard deviation, Correlation, Regression analysis, Hypothesis testing basics.' },
            { num: 5, title: 'Graph Theory', hours: 10, topics: 'Graphs, Trees, Spanning trees, Shortest path algorithms, Network flow, Graph coloring, Planar graphs.' }
        ],
        textbooks: [
            'Discrete Mathematics and Its Applications - Kenneth Rosen, McGraw Hill',
            'Probability and Statistics for Engineers - Miller and Freund'
        ],
        references: [
            'Linear Algebra and Its Applications - Gilbert Strang',
            'Introduction to Graph Theory - Douglas West'
        ]
    },
    'BCS302': {
        name: 'Digital Design & Computer Organization',
        code: 'BCS302',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers digital logic design fundamentals and computer organization including processor architecture, memory systems, and I/O organization.',
        objectives: [
            'Design combinational and sequential circuits',
            'Understand computer architecture components',
            'Learn memory hierarchy concepts',
            'Study I/O organization and interfacing'
        ],
        outcomes: [
            'Design and analyze digital circuits',
            'Explain CPU organization and instruction execution',
            'Analyze memory hierarchy and cache systems',
            'Interface I/O devices with processors'
        ],
        modules: [
            { num: 1, title: 'Digital Logic Fundamentals', hours: 10, topics: 'Number systems, Boolean algebra, Logic gates, K-maps, Combinational circuits: Adders, Subtractors, Multiplexers, Decoders.' },
            { num: 2, title: 'Sequential Circuits', hours: 10, topics: 'Flip-flops (SR, JK, D, T), Registers, Counters, Finite State Machines, State table and diagram.' },
            { num: 3, title: 'CPU Organization', hours: 10, topics: 'Basic computer organization, Instruction formats, Addressing modes, Instruction cycle, Microprogrammed control unit.' },
            { num: 4, title: 'Memory Organization', hours: 8, topics: 'Memory hierarchy, Cache memory, Mapping techniques, Virtual memory, Page replacement algorithms.' },
            { num: 5, title: 'I/O Organization', hours: 8, topics: 'I/O interface, Programmed I/O, Interrupt-driven I/O, DMA, I/O processors, Peripheral devices.' }
        ],
        textbooks: [
            'Digital Design - M. Morris Mano, Pearson',
            'Computer Organization and Architecture - William Stallings'
        ],
        references: [
            'Computer Organization - Carl Hamacher',
            'Digital Logic and Computer Design - M. Morris Mano'
        ]
    },
    'BCS303': {
        name: 'Operating Systems',
        code: 'BCS303',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers operating system concepts including process management, memory management, file systems, and security mechanisms.',
        objectives: [
            'Understand OS structure and services',
            'Learn process scheduling and synchronization',
            'Study memory and storage management',
            'Understand file system organization'
        ],
        outcomes: [
            'Explain OS architecture and components',
            'Apply CPU scheduling algorithms',
            'Implement process synchronization solutions',
            'Design file system structures'
        ],
        modules: [
            { num: 1, title: 'OS Introduction', hours: 8, topics: 'Operating system structures, System calls, OS services, System programs, OS design and implementation.' },
            { num: 2, title: 'Process Management', hours: 12, topics: 'Process concept, Process scheduling, CPU scheduling algorithms (FCFS, SJF, Priority, Round Robin), Interprocess communication.' },
            { num: 3, title: 'Process Synchronization', hours: 10, topics: 'Critical section problem, Peterson solution, Semaphores, Monitors, Classical synchronization problems, Deadlocks.' },
            { num: 4, title: 'Memory Management', hours: 10, topics: 'Contiguous allocation, Paging, Segmentation, Virtual memory, Demand paging, Page replacement algorithms.' },
            { num: 5, title: 'Storage & File Systems', hours: 8, topics: 'Disk structure, Disk scheduling, File concepts, Directory structure, File system implementation, I/O systems.' }
        ],
        textbooks: [
            'Operating System Concepts - Silberschatz, Galvin and Gagne, Wiley',
            'Modern Operating Systems - Andrew S. Tanenbaum'
        ],
        references: [
            'Operating Systems: Internals and Design Principles - William Stallings',
            'Unix System Programming - Terrence Chan'
        ]
    },
    'BCS304': {
        name: 'Data Structures and Applications',
        code: 'BCS304',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers fundamental data structures and their applications including arrays, linked lists, stacks, queues, trees, and graphs with implementation in C.',
        objectives: [
            'Understand linear data structures',
            'Implement tree and graph structures',
            'Apply data structures in problem solving',
            'Analyze algorithm complexity'
        ],
        outcomes: [
            'Implement basic data structures',
            'Choose appropriate data structure for applications',
            'Apply searching and sorting algorithms',
            'Design efficient algorithms using data structures'
        ],
        modules: [
            { num: 1, title: 'Introduction & Arrays', hours: 8, topics: 'Data structure concepts, Arrays, Structures, Pointers, Dynamic memory allocation, Sparse matrices.' },
            { num: 2, title: 'Stacks & Queues', hours: 10, topics: 'Stack ADT, Applications (infix to postfix, evaluation), Queue types (circular, priority, deque), Applications.' },
            { num: 3, title: 'Linked Lists', hours: 10, topics: 'Singly linked list, Doubly linked list, Circular linked list, Operations, Applications, Polynomial representation.' },
            { num: 4, title: 'Trees', hours: 12, topics: 'Binary trees, Binary search trees, Tree traversals, AVL trees, B-Trees, Heaps, Priority queues.' },
            { num: 5, title: 'Graphs', hours: 10, topics: 'Graph representations, BFS, DFS, Shortest path algorithms (Dijkstra, Floyd), Minimum spanning tree (Prim, Kruskal).' }
        ],
        textbooks: [
            'Data Structures Using C - Reema Thareja, Oxford',
            'Fundamentals of Data Structures in C - Horowitz and Sahni'
        ],
        references: [
            'Data Structures and Algorithm Analysis in C - Mark Allen Weiss',
            'Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein'
        ]
    },
    'BCS305A': {
        name: 'Object Oriented Programming with Java',
        code: 'BCS305A',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers object-oriented programming concepts using Java including classes, inheritance, polymorphism, exception handling, and multithreading.',
        objectives: [
            'Understand OOP concepts and principles',
            'Learn Java programming syntax',
            'Implement inheritance and polymorphism',
            'Handle exceptions and threads'
        ],
        outcomes: [
            'Write Java programs using OOP concepts',
            'Implement class hierarchies with inheritance',
            'Handle exceptions effectively',
            'Develop multithreaded applications'
        ],
        modules: [
            { num: 1, title: 'Java Fundamentals', hours: 8, topics: 'History of Java, JVM architecture, Data types, Variables, Operators, Control statements, Arrays.' },
            { num: 2, title: 'Classes and Objects', hours: 10, topics: 'Class definition, Objects, Constructors, Methods, Access modifiers, Static members, this keyword.' },
            { num: 3, title: 'Inheritance & Polymorphism', hours: 10, topics: 'Inheritance types, Method overriding, super keyword, Abstract classes, Interfaces, Polymorphism.' },
            { num: 4, title: 'Exception Handling & Packages', hours: 8, topics: 'Exception hierarchy, try-catch-finally, throw, throws, Custom exceptions, Packages, Access protection.' },
            { num: 5, title: 'Multithreading & I/O', hours: 10, topics: 'Thread creation, Thread lifecycle, Synchronization, Inter-thread communication, I/O streams, File handling.' }
        ],
        textbooks: [
            'Java: The Complete Reference - Herbert Schildt, Oracle Press',
            'Head First Java - Kathy Sierra and Bert Bates'
        ],
        references: [
            'Core Java Volume I - Cay Horstmann',
            'Effective Java - Joshua Bloch'
        ]
    },

    // ==================== CSE SEMESTER 4 ====================
    'BCS401': {
        name: 'Analysis & Design of Algorithms',
        code: 'BCS401',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers algorithm design techniques including divide and conquer, greedy, dynamic programming, and their analysis using asymptotic notations.',
        objectives: [
            'Analyze algorithm efficiency',
            'Apply divide and conquer technique',
            'Design greedy and DP solutions',
            'Understand computational complexity'
        ],
        outcomes: [
            'Analyze time and space complexity',
            'Design algorithms using standard techniques',
            'Solve optimization problems',
            'Understand NP-completeness concepts'
        ],
        modules: [
            { num: 1, title: 'Algorithm Analysis', hours: 8, topics: 'Asymptotic notations (O, Ω, Θ), Recurrence relations, Master theorem, Amortized analysis.' },
            { num: 2, title: 'Divide and Conquer', hours: 10, topics: 'Binary search, Merge sort, Quick sort, Strassen matrix multiplication, Closest pair problem.' },
            { num: 3, title: 'Greedy Method', hours: 10, topics: 'Fractional knapsack, Job sequencing, Huffman coding, Prim and Kruskal MST, Dijkstra shortest path.' },
            { num: 4, title: 'Dynamic Programming', hours: 12, topics: 'Principles of DP, 0/1 Knapsack, LCS, Matrix chain multiplication, Floyd-Warshall, Bellman-Ford.' },
            { num: 5, title: 'Backtracking & Branch and Bound', hours: 8, topics: 'N-Queens, Graph coloring, Hamiltonian cycle, Sum of subsets, TSP using B&B, NP-completeness basics.' }
        ],
        textbooks: [
            'Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein, MIT Press',
            'Fundamentals of Algorithm - Horowitz and Sahni'
        ],
        references: [
            'Algorithm Design - Kleinberg and Tardos',
            'The Algorithm Design Manual - Steven Skiena'
        ]
    },
    'BCS403': {
        name: 'Database Management Systems',
        code: 'BCS403',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers database concepts including relational model, SQL, normalization, transaction processing, and database design.',
        objectives: [
            'Understand database system architecture',
            'Design relational databases',
            'Write SQL queries',
            'Apply normalization techniques'
        ],
        outcomes: [
            'Design ER diagrams and relational schemas',
            'Write complex SQL queries',
            'Normalize databases to appropriate forms',
            'Manage database transactions'
        ],
        modules: [
            { num: 1, title: 'Introduction to DBMS', hours: 8, topics: 'Database system concepts, DBMS architecture, Data models, ER model, ER diagrams, Extended ER features.' },
            { num: 2, title: 'Relational Model', hours: 10, topics: 'Relational algebra, Tuple relational calculus, Domain relational calculus, ER to relational mapping.' },
            { num: 3, title: 'SQL', hours: 12, topics: 'DDL, DML, DCL, Aggregate functions, Joins, Subqueries, Views, Indexes, Stored procedures, Triggers.' },
            { num: 4, title: 'Database Design', hours: 10, topics: 'Functional dependencies, Normal forms (1NF, 2NF, 3NF, BCNF), Decomposition, Multivalued dependencies, 4NF.' },
            { num: 5, title: 'Transactions', hours: 8, topics: 'ACID properties, Concurrency control, Locking protocols, Timestamp ordering, Deadlock handling, Recovery techniques.' }
        ],
        textbooks: [
            'Database System Concepts - Silberschatz, Korth, Sudarshan, McGraw Hill',
            'Fundamentals of Database Systems - Elmasri and Navathe'
        ],
        references: [
            'Database Management Systems - Raghu Ramakrishnan',
            'An Introduction to Database Systems - C.J. Date'
        ]
    },

    // ==================== CSE SEMESTER 5 ====================
    'BCS501': {
        name: 'Software Engineering & Project Management',
        code: 'BCS501',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers software development lifecycle, process models, requirements engineering, design principles, testing, and project management.',
        objectives: [
            'Understand software development processes',
            'Learn requirements engineering',
            'Apply software design principles',
            'Manage software projects effectively'
        ],
        outcomes: [
            'Apply appropriate process models',
            'Elicit and document requirements',
            'Design software using UML',
            'Plan and manage software projects'
        ],
        modules: [
            { num: 1, title: 'SE Introduction', hours: 8, topics: 'Software characteristics, Process models (Waterfall, Spiral, Agile), DevOps, Requirement engineering process.' },
            { num: 2, title: 'Software Design', hours: 10, topics: 'Design concepts, Architectural design, Component design, UML diagrams, Design patterns introduction.' },
            { num: 3, title: 'Software Testing', hours: 10, topics: 'Testing fundamentals, White box testing, Black box testing, Unit and integration testing, System testing, Test automation.' },
            { num: 4, title: 'Project Management', hours: 10, topics: 'Project planning, Estimation (COCOMO, FP), Scheduling, Risk management, Quality management.' },
            { num: 5, title: 'Software Quality', hours: 8, topics: 'Quality assurance, Software metrics, Configuration management, CMMI, ISO standards, Code reviews.' }
        ],
        textbooks: [
            'Software Engineering: A Practitioner Approach - Roger S. Pressman, McGraw Hill',
            'Software Engineering - Ian Sommerville'
        ],
        references: [
            'Agile Software Development - Robert C. Martin',
            'The Mythical Man-Month - Frederick Brooks'
        ]
    },
    'BCS502': {
        name: 'Computer Networks',
        code: 'BCS502',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers networking fundamentals including OSI/TCP-IP models, data link protocols, network layer routing, transport protocols, and application layer services.',
        objectives: [
            'Understand network architecture',
            'Learn data link layer protocols',
            'Study network layer routing',
            'Understand transport and application protocols'
        ],
        outcomes: [
            'Explain network layering concepts',
            'Analyze data link protocols',
            'Apply routing algorithms',
            'Configure network services'
        ],
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'Network types, OSI and TCP/IP models, Transmission media, Network topologies, Network devices.' },
            { num: 2, title: 'Data Link Layer', hours: 10, topics: 'Framing, Error detection and correction, Flow control, HDLC, PPP, MAC sublayer, Ethernet, WiFi.' },
            { num: 3, title: 'Network Layer', hours: 12, topics: 'IP addressing, Subnetting, CIDR, Routing algorithms (RIP, OSPF, BGP), IPv4, IPv6, ICMP, ARP.' },
            { num: 4, title: 'Transport Layer', hours: 10, topics: 'TCP, UDP, Port numbers, Connection establishment, Flow control, Congestion control, Quality of Service.' },
            { num: 5, title: 'Application Layer', hours: 8, topics: 'DNS, HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DHCP, Network security basics, Firewalls.' }
        ],
        textbooks: [
            'Computer Networks - Andrew S. Tanenbaum, Pearson',
            'Data Communications and Networking - Behrouz Forouzan'
        ],
        references: [
            'Computer Networking: A Top-Down Approach - Kurose and Ross',
            'TCP/IP Protocol Suite - Behrouz Forouzan'
        ]
    },
    'BCS503': {
        name: 'Theory of Computation',
        code: 'BCS503',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers automata theory, formal languages, computability, and computational complexity including Turing machines and NP-completeness.',
        objectives: [
            'Design finite automata',
            'Understand formal grammars',
            'Study Turing machines',
            'Analyze computational complexity'
        ],
        outcomes: [
            'Design DFA and NFA',
            'Construct context-free grammars',
            'Design Turing machines',
            'Classify problems by complexity'
        ],
        modules: [
            { num: 1, title: 'Finite Automata', hours: 12, topics: 'DFA, NFA, NFA to DFA conversion, Minimization, Regular expressions, Pumping lemma for regular languages.' },
            { num: 2, title: 'Context-Free Languages', hours: 10, topics: 'CFG, Derivation trees, Ambiguity, Simplification, CNF, GNF, Pushdown automata, Pumping lemma for CFLs.' },
            { num: 3, title: 'Turing Machines', hours: 10, topics: 'TM definition and design, Variations of TM, Universal TM, Church-Turing thesis.' },
            { num: 4, title: 'Decidability', hours: 8, topics: 'Decidable and undecidable problems, Halting problem, Rice theorem, Post correspondence problem.' },
            { num: 5, title: 'Complexity Theory', hours: 8, topics: 'Time complexity, P and NP classes, NP-complete problems, Reductions, Cook theorem, NP-hard problems.' }
        ],
        textbooks: [
            'Introduction to Automata Theory, Languages, and Computation - Hopcroft, Motwani, Ullman',
            'Theory of Computation - Michael Sipser'
        ],
        references: [
            'Elements of Theory of Computation - Lewis and Papadimitriou',
            'Introduction to the Theory of Computation - Sipser'
        ]
    },

    // ==================== CSE SEMESTER 6 ====================
    'BCS601': {
        name: 'System Software & Compilers',
        code: 'BCS601',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers system software including assemblers, loaders, linkers, macro processors, and compiler design phases.',
        objectives: [
            'Understand system software components',
            'Learn assembler design',
            'Study compiler construction phases',
            'Implement lexical and syntax analysis'
        ],
        outcomes: [
            'Design assemblers and loaders',
            'Implement lexical analyzers',
            'Construct parsers',
            'Generate intermediate code'
        ],
        modules: [
            { num: 1, title: 'System Software Introduction', hours: 6, topics: 'System software overview, Machine architecture, Instruction formats, Addressing modes.' },
            { num: 2, title: 'Assemblers', hours: 10, topics: 'Basic assembler functions, Machine-dependent features, Machine-independent features, Two-pass assemblers.' },
            { num: 3, title: 'Loaders & Linkers', hours: 8, topics: 'Loader design, Relocation, Linking, Bootstrap loaders, Dynamic linking.' },
            { num: 4, title: 'Lexical & Syntax Analysis', hours: 12, topics: 'Lexical analysis, Regular expressions, LEX, Parsing techniques, Top-down and bottom-up parsing, YACC.' },
            { num: 5, title: 'Code Generation', hours: 10, topics: 'Intermediate code, Three-address code, Syntax-directed translation, Code optimization, Code generation.' }
        ],
        textbooks: [
            'System Software - Leland L. Beck, Pearson',
            'Compilers: Principles, Techniques, and Tools - Aho, Lam, Sethi, Ullman (Dragon Book)'
        ],
        references: [
            'Systems Programming - Dhamdhere',
            'Engineering a Compiler - Keith Cooper'
        ]
    },
    'BCS602': {
        name: 'Computer Graphics & Image Processing',
        code: 'BCS602',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers computer graphics fundamentals including 2D/3D transformations, clipping, rendering, and digital image processing techniques.',
        objectives: [
            'Understand graphics primitives',
            'Learn 2D and 3D transformations',
            'Study visibility and rendering',
            'Apply image processing techniques'
        ],
        outcomes: [
            'Implement line and circle algorithms',
            'Apply geometric transformations',
            'Implement clipping algorithms',
            'Process digital images'
        ],
        modules: [
            { num: 1, title: 'Graphics Primitives', hours: 10, topics: 'Line drawing algorithms (DDA, Bresenham), Circle drawing, Ellipse generation, Polygon filling.' },
            { num: 2, title: '2D Transformations', hours: 8, topics: 'Translation, Rotation, Scaling, Reflection, Shearing, Homogeneous coordinates, Composite transformations.' },
            { num: 3, title: '3D Graphics', hours: 10, topics: '3D transformations, Viewing pipeline, Projections (parallel, perspective), 3D clipping.' },
            { num: 4, title: 'Visible Surface Detection', hours: 8, topics: 'Back-face detection, Z-buffer, Scan-line algorithm, BSP trees, Ray casting, Illumination models.' },
            { num: 5, title: 'Image Processing', hours: 10, topics: 'Image fundamentals, Enhancement techniques, Spatial filtering, Frequency domain, Edge detection, Segmentation.' }
        ],
        textbooks: [
            'Computer Graphics: Principles and Practice - Foley, Van Dam, Feiner, Hughes',
            'Digital Image Processing - Rafael Gonzalez and Richard Woods'
        ],
        references: [
            'Computer Graphics - Hearn and Baker',
            'Fundamentals of Computer Graphics - Shirley'
        ]
    },

    // ==================== CSE SEMESTER 7 ====================
    'BCS701': {
        name: 'Artificial Intelligence & Machine Learning',
        code: 'BCS701',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers AI fundamentals including search algorithms, knowledge representation, machine learning algorithms, and neural networks.',
        objectives: [
            'Understand AI problem solving',
            'Learn machine learning algorithms',
            'Study neural network architectures',
            'Apply AI/ML techniques'
        ],
        outcomes: [
            'Apply search algorithms',
            'Implement ML classification algorithms',
            'Design neural networks',
            'Solve real-world AI problems'
        ],
        modules: [
            { num: 1, title: 'AI Introduction', hours: 8, topics: 'Intelligence, AI history, Agents, Problem solving, Search strategies (BFS, DFS, A*, Hill climbing).' },
            { num: 2, title: 'Knowledge Representation', hours: 8, topics: 'Propositional logic, First-order logic, Inference, Knowledge bases, Expert systems.' },
            { num: 3, title: 'Machine Learning Basics', hours: 12, topics: 'ML types, Linear regression, Logistic regression, Decision trees, Random forests, SVM, Naive Bayes.' },
            { num: 4, title: 'Neural Networks', hours: 10, topics: 'Perceptron, MLP, Backpropagation, Activation functions, CNN basics, RNN basics.' },
            { num: 5, title: 'Advanced ML', hours: 10, topics: 'Clustering (K-means, hierarchical), Dimensionality reduction (PCA), Ensemble methods, Model evaluation.' }
        ],
        textbooks: [
            'Artificial Intelligence: A Modern Approach - Stuart Russell and Peter Norvig',
            'Pattern Recognition and Machine Learning - Christopher Bishop'
        ],
        references: [
            'Machine Learning - Tom Mitchell',
            'Deep Learning - Ian Goodfellow, Yoshua Bengio, Aaron Courville'
        ]
    },

    // ==================== ECE SUBJECTS ====================
    'BEC301': {
        name: 'Mathematics for ECE',
        code: 'BEC301',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'Mathematical foundations for electronics including transforms, complex variables, and numerical methods for signal processing applications.',
        objectives: [
            'Apply Laplace and Z-transforms',
            'Understand complex analysis',
            'Learn probability for communications',
            'Apply numerical methods'
        ],
        outcomes: [
            'Solve transform problems',
            'Analyze complex functions',
            'Apply probability in ECE',
            'Use numerical techniques'
        ],
        modules: [
            { num: 1, title: 'Laplace Transforms', hours: 10, topics: 'Laplace transform definition, Properties, Inverse transforms, Applications to differential equations.' },
            { num: 2, title: 'Z-Transforms', hours: 10, topics: 'Z-transform definition, ROC, Properties, Inverse Z-transform, Applications to discrete systems.' },
            { num: 3, title: 'Complex Analysis', hours: 8, topics: 'Analytic functions, Cauchy-Riemann equations, Line integrals, Residue theorem.' },
            { num: 4, title: 'Probability & Statistics', hours: 10, topics: 'Random variables, PDF, CDF, Distributions, Correlation, Random processes.' },
            { num: 5, title: 'Numerical Methods', hours: 8, topics: 'Numerical integration, Numerical solutions of ODEs, Curve fitting, FFT algorithm.' }
        ],
        textbooks: [
            'Higher Engineering Mathematics - B.S. Grewal',
            'Advanced Engineering Mathematics - Erwin Kreyszig'
        ],
        references: [
            'Signals and Systems - Oppenheim and Willsky',
            'Probability and Random Processes - Papoulis'
        ]
    },
    'BEC401': {
        name: 'Signals and Systems',
        code: 'BEC401',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers continuous and discrete-time signals and systems, their analysis using transforms and system characteristics.',
        objectives: [
            'Analyze continuous-time signals',
            'Study system characteristics',
            'Apply Fourier and Laplace transforms',
            'Analyze discrete-time systems'
        ],
        outcomes: [
            'Classify signals and systems',
            'Perform convolution operations',
            'Apply transform techniques',
            'Design basic filters'
        ],
        modules: [
            { num: 1, title: 'Signal Fundamentals', hours: 8, topics: 'Signal classification, Basic operations, Elementary signals, System properties, LTI systems.' },
            { num: 2, title: 'Time Domain Analysis', hours: 10, topics: 'Convolution integral, Convolution sum, System response, Causality and stability.' },
            { num: 3, title: 'Fourier Analysis', hours: 12, topics: 'Fourier series, Fourier transform, Properties, Frequency response, Parseval theorem.' },
            { num: 4, title: 'Laplace Transform', hours: 10, topics: 'Bilateral Laplace transform, Transfer function, Poles and zeros, Stability analysis.' },
            { num: 5, title: 'Z-Transform', hours: 8, topics: 'Z-transform, Inverse Z-transform, Transfer function, Discrete system analysis, Digital filter basics.' }
        ],
        textbooks: [
            'Signals and Systems - Oppenheim, Willsky, and Nawab',
            'Signals and Systems - Simon Haykin'
        ],
        references: [
            'Signal Processing First - McClellan, Schafer, Yoder',
            'Signals and Systems - Nagoor Kani'
        ]
    },

    // ==================== MECHANICAL SUBJECTS ====================
    'BME301': {
        name: 'Mathematics for Mechanical Engineering',
        code: 'BME301',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'Mathematical concepts for mechanical engineering including vector calculus, complex analysis, and numerical methods for engineering applications.',
        objectives: [
            'Apply vector calculus',
            'Understand PDEs',
            'Learn numerical methods',
            'Apply transforms in engineering'
        ],
        outcomes: [
            'Solve vector field problems',
            'Apply PDE solutions',
            'Use numerical methods',
            'Apply Laplace transforms'
        ],
        modules: [
            { num: 1, title: 'Vector Calculus', hours: 10, topics: 'Vector differentiation, Gradient, Divergence, Curl, Line and surface integrals, Stokes and Gauss theorems.' },
            { num: 2, title: 'Partial Differential Equations', hours: 10, topics: 'Classification of PDEs, Wave equation, Heat equation, Laplace equation, Separation of variables.' },
            { num: 3, title: 'Laplace Transforms', hours: 10, topics: 'Definition, Properties, Inverse transforms, Convolution, Applications to ODEs and PDEs.' },
            { num: 4, title: 'Fourier Series', hours: 8, topics: 'Fourier series expansion, Half-range series, Parseval identity, Applications.' },
            { num: 5, title: 'Numerical Methods', hours: 10, topics: 'Numerical differentiation, Numerical integration, Numerical solutions of ODEs, Finite difference methods.' }
        ],
        textbooks: [
            'Higher Engineering Mathematics - B.S. Grewal',
            'Advanced Engineering Mathematics - Erwin Kreyszig'
        ],
        references: [
            'Mathematical Methods for Physicists - Arfken and Weber',
            'Numerical Methods for Engineers - Chapra and Canale'
        ]
    },
    'BME402': {
        name: 'Applied Thermodynamics',
        code: 'BME402',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers power cycles, refrigeration, internal combustion engines, and psychrometry for mechanical engineering applications.',
        objectives: [
            'Analyze power cycles',
            'Study IC engines',
            'Understand refrigeration cycles',
            'Apply psychrometry concepts'
        ],
        outcomes: [
            'Analyze gas and vapor power cycles',
            'Evaluate IC engine performance',
            'Design refrigeration systems',
            'Solve psychrometry problems'
        ],
        modules: [
            { num: 1, title: 'Gas Power Cycles', hours: 10, topics: 'Air standard cycles, Otto, Diesel, Dual cycles, Brayton cycle, Regeneration, Intercooling.' },
            { num: 2, title: 'Vapor Power Cycles', hours: 10, topics: 'Rankine cycle, Reheat and regenerative cycles, Binary vapor cycles, Cogeneration.' },
            { num: 3, title: 'IC Engines', hours: 10, topics: 'Engine classification, Valve timing, Performance parameters, Combustion, Supercharging.' },
            { num: 4, title: 'Refrigeration', hours: 10, topics: 'Vapor compression refrigeration, COP, Refrigerants, Air refrigeration, Heat pumps.' },
            { num: 5, title: 'Psychrometry', hours: 8, topics: 'Psychrometric properties, Psychrometric chart, Processes, Air conditioning systems.' }
        ],
        textbooks: [
            'Engineering Thermodynamics - P.K. Nag',
            'Thermodynamics: An Engineering Approach - Cengel and Boles'
        ],
        references: [
            'Thermal Engineering - R.S. Khurmi',
            'Internal Combustion Engines - V. Ganesan'
        ]
    },

    // ==================== CIVIL SUBJECTS ====================
    'BCV301': {
        name: 'Mathematics for Civil Engineering',
        code: 'BCV301',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'Mathematical foundations for civil engineering including numerical methods, statistics, and applied mathematics for structural analysis.',
        objectives: [
            'Apply numerical methods',
            'Understand statistical analysis',
            'Learn optimization techniques',
            'Apply mathematics in structures'
        ],
        outcomes: [
            'Solve numerical problems',
            'Perform statistical analysis',
            'Apply optimization methods',
            'Use mathematical modeling'
        ],
        modules: [
            { num: 1, title: 'Numerical Methods - I', hours: 10, topics: 'Solution of equations, Newton-Raphson, Interpolation, Curve fitting.' },
            { num: 2, title: 'Numerical Methods - II', hours: 10, topics: 'Numerical differentiation, Numerical integration, Solution of ODEs.' },
            { num: 3, title: 'Probability & Statistics', hours: 10, topics: 'Probability distributions, Sampling, Hypothesis testing, Regression analysis.' },
            { num: 4, title: 'Linear Programming', hours: 8, topics: 'Formulation, Graphical method, Simplex method, Duality, Transportation problem.' },
            { num: 5, title: 'PDEs & Complex Variables', hours: 10, topics: 'Classification of PDEs, Wave and heat equations, Analytic functions, Conformal mapping.' }
        ],
        textbooks: [
            'Higher Engineering Mathematics - B.S. Grewal',
            'Probability and Statistics for Engineers - Miller and Freund'
        ],
        references: [
            'Numerical Methods for Engineers - Chapra and Canale',
            'Operations Research - Hamdy Taha'
        ]
    },
    'BCV402': {
        name: 'Analysis of Determinate Structures',
        code: 'BCV402',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        description: 'This course covers analysis of statically determinate structures including beams, trusses, arches, and cables.',
        objectives: [
            'Analyze beams and frames',
            'Study truss analysis',
            'Understand arch behavior',
            'Analyze cable structures'
        ],
        outcomes: [
            'Calculate reactions and internal forces',
            'Analyze trusses',
            'Determine deflections',
            'Draw influence lines'
        ],
        modules: [
            { num: 1, title: 'Introduction', hours: 6, topics: 'Structural systems, Loads, Reactions, Equilibrium, Static determinacy, Stability.' },
            { num: 2, title: 'Analysis of Trusses', hours: 10, topics: 'Plane trusses, Method of joints, Method of sections, Compound trusses.' },
            { num: 3, title: 'Analysis of Beams', hours: 12, topics: 'Bending moment and shear force diagrams, Relation between load, shear and moment, Deflection of beams.' },
            { num: 4, title: 'Arches and Cables', hours: 10, topics: 'Three-hinged arches, Parabolic arches, Cable with concentrated and distributed loads.' },
            { num: 5, title: 'Influence Lines', hours: 10, topics: 'Influence lines for beams, Influence lines for trusses, Moving loads, Maximum effects.' }
        ],
        textbooks: [
            'Structural Analysis - R.C. Hibbeler',
            'Analysis of Structures - Vazirani and Ratwani'
        ],
        references: [
            'Structural Analysis - Aslam Kassimali',
            'Mechanics of Materials - Beer and Johnston'
        ]
    }
};

// Export syllabus data
if (typeof window !== 'undefined') {
    window.VTUSyllabus = VTUSyllabus;
}
