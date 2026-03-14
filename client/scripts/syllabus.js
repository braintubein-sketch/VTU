/**
 * Braintube - Complete VTU 2022 Scheme Syllabus Content
 * Module-wise breakdown for all subjects
 */

const SyllabusData = {
    // ==================== SEMESTER 1 COMMON SUBJECTS ====================
    'BMAT101': {
        name: 'Mathematics-I for CSE Stream',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: [
            'Apply single variable calculus and multivariable calculus to solve engineering problems',
            'Learn vector calculus to analyze vector fields',
            'Apply concepts of ordinary differential equations',
            'Learn the concepts of linear algebra'
        ],
        modules: [
            {
                num: 1, title: 'Differential Calculus', hours: 8,
                topics: ["Taylor's and Maclaurin's Series", 'Indeterminate Forms', "L'Hospital's Rule", 'Polar Curves', 'Angle between polar curves', 'Pedal equation', 'Curvature & Radius of Curvature'],
                outcomes: 'CO1: Apply differential calculus to solve engineering problems'
            },
            {
                num: 2, title: 'Integral Calculus', hours: 8,
                topics: ['Reduction Formulae', 'Curve tracing', 'Area enclosed by curves', 'Length of curves', 'Volume of solids of revolution', 'Surface area of solids'],
                outcomes: 'CO2: Apply integral calculus for geometrical applications'
            },
            {
                num: 3, title: 'Ordinary Differential Equations', hours: 8,
                topics: ['Linear differential equations with constant coefficients', 'Equations reducible to linear form', 'Bernoulli equations', 'Orthogonal trajectories', 'Applications to electrical circuits'],
                outcomes: 'CO3: Solve ordinary differential equations with applications'
            },
            {
                num: 4, title: 'Partial Differential Equations', hours: 8,
                topics: ['Formation of PDEs', 'Solution of first order PDEs', "Lagrange's linear PDE", "Charpit's method", 'Method of separation of variables'],
                outcomes: 'CO4: Solve partial differential equations using various methods'
            },
            {
                num: 5, title: 'Linear Algebra', hours: 8,
                topics: ['Rank of matrix', 'Echelon form', 'Consistency of linear systems', 'Gauss elimination', 'Eigenvalues & Eigenvectors', 'Diagonalization', 'Cayley-Hamilton theorem'],
                outcomes: 'CO5: Apply linear algebra concepts to solve engineering problems'
            }
        ],
        textbooks: ['Higher Engineering Mathematics - B.S. Grewal', 'Advanced Engineering Mathematics - Erwin Kreyszig'],
        references: ['Engineering Mathematics - N.P. Bali', 'Higher Engineering Mathematics - H.K. Dass']
    },

    'BPHY102': {
        name: 'Applied Physics',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand quantum mechanics principles', 'Learn semiconductor physics', 'Study laser and fiber optics', 'Understand modern physics concepts'],
        modules: [
            {
                num: 1, title: 'Quantum Mechanics', hours: 8,
                topics: ['Wave-particle duality', 'de-Broglie hypothesis', 'Heisenberg uncertainty principle', 'Wave function', 'Schrödinger equation', 'Particle in a box', 'Quantum tunneling'],
                outcomes: 'CO1: Apply quantum mechanical concepts'
            },
            {
                num: 2, title: 'Laser Physics', hours: 8,
                topics: ['Spontaneous & stimulated emission', 'Einstein coefficients', 'Population inversion', 'Laser construction', 'Types of lasers', 'Ruby laser', 'He-Ne laser', 'Semiconductor laser', 'Applications'],
                outcomes: 'CO2: Understand laser principles and applications'
            },
            {
                num: 3, title: 'Optical Fibers', hours: 8,
                topics: ['Total internal reflection', 'Numerical aperture', 'Types of optical fibers', 'Step index & graded index', 'Attenuation', 'Dispersion', 'Fiber optic communication'],
                outcomes: 'CO3: Apply fiber optics principles'
            },
            {
                num: 4, title: 'Electrical Properties of Materials', hours: 8,
                topics: ['Classical free electron theory', 'Quantum free electron theory', 'Fermi energy', 'Density of states', 'Band theory', 'Semiconductors', 'Hall effect'],
                outcomes: 'CO4: Understand electrical properties of materials'
            },
            {
                num: 5, title: 'Nanotechnology', hours: 8,
                topics: ['Nanoscale', 'Surface to volume ratio', 'Quantum confinement', 'Synthesis methods', 'Carbon nanotubes', 'Applications of nanomaterials'],
                outcomes: 'CO5: Understand nanotechnology fundamentals'
            }
        ],
        textbooks: ['Engineering Physics - S.L. Gupta & Sanjeev Gupta', 'A Textbook of Engineering Physics - M.N. Avadhanulu'],
        references: ['Concepts of Modern Physics - Arthur Beiser', 'Solid State Physics - S.O. Pillai']
    },

    'BPOPS103': {
        name: 'Principles of Programming using C',
        credit: 3, cie: 50, see: 50, total: 100,
        objectives: ['Understand programming fundamentals', 'Learn C language constructs', 'Develop problem-solving skills', 'Write efficient C programs'],
        modules: [
            {
                num: 1, title: 'Introduction to C', hours: 8,
                topics: ['Computer fundamentals', 'Algorithms', 'Flowcharts', 'C program structure', 'Data types', 'Variables', 'Constants', 'Operators', 'Expressions', 'Type conversion', 'I/O statements'],
                outcomes: 'CO1: Understand basic programming concepts'
            },
            {
                num: 2, title: 'Control Structures', hours: 8,
                topics: ['Decision making statements', 'if, if-else, nested if', 'switch-case', 'Loops', 'while, do-while, for', 'Break & continue', 'Nested loops', 'goto statement'],
                outcomes: 'CO2: Apply control structures in programming'
            },
            {
                num: 3, title: 'Arrays & Strings', hours: 8,
                topics: ['One-dimensional arrays', 'Two-dimensional arrays', 'Multi-dimensional arrays', 'String handling', 'String functions', 'Array of strings', 'Sorting & searching'],
                outcomes: 'CO3: Work with arrays and strings'
            },
            {
                num: 4, title: 'Functions & Pointers', hours: 8,
                topics: ['Function definition', 'Function declaration', 'Function call', 'Parameter passing', 'Recursion', 'Pointers', 'Pointer arithmetic', 'Pointers & arrays', 'Pointers & functions'],
                outcomes: 'CO4: Implement functions and use pointers'
            },
            {
                num: 5, title: 'Structures & File Handling', hours: 8,
                topics: ['Structure definition', 'Structure members', 'Array of structures', 'Nested structures', 'Structure & functions', 'Union', 'File operations', 'File handling functions'],
                outcomes: 'CO5: Work with structures and files'
            }
        ],
        textbooks: ['Programming in ANSI C - E. Balagurusamy', 'The C Programming Language - Kernighan & Ritchie'],
        references: ['Let Us C - Yashavant Kanetkar', 'C Programming - Reema Thareja']
    },

    // ==================== CSE SEMESTER 3 ====================
    'BCS301': {
        name: 'Mathematics for Computer Science',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Apply transform techniques', 'Solve probability problems', 'Analyze numerical methods', 'Apply graph theory'],
        modules: [
            {
                num: 1, title: 'Linear Algebra', hours: 8,
                topics: ['Vector spaces', 'Linear transformations', 'Matrix representation', 'Rank-nullity theorem', 'Inner product spaces', 'Gram-Schmidt process', 'Orthonormal bases'],
                outcomes: 'CO1: Apply linear algebra in computing'
            },
            {
                num: 2, title: 'Calculus', hours: 8,
                topics: ['Partial differentiation', 'Total derivative', 'Jacobians', 'Multiple integrals', 'Change of variables', 'Applications to probability'],
                outcomes: 'CO2: Apply calculus for problem solving'
            },
            {
                num: 3, title: 'Probability Theory', hours: 8,
                topics: ['Random variables', 'Probability distributions', 'Expectation', 'Variance', 'Binomial', 'Poisson', 'Normal distribution', "Bayes' Theorem"],
                outcomes: 'CO3: Solve probability problems'
            },
            {
                num: 4, title: 'Statistics', hours: 8,
                topics: ['Measures of central tendency', 'Dispersion', 'Correlation', 'Regression', 'Curve fitting', 'Least squares method'],
                outcomes: 'CO4: Apply statistical methods'
            },
            {
                num: 5, title: 'Graph Theory', hours: 8,
                topics: ['Graphs', 'Paths', 'Cycles', 'Trees', 'Spanning trees', 'Shortest path algorithms', 'Graph coloring', 'Planar graphs'],
                outcomes: 'CO5: Apply graph theory concepts'
            }
        ],
        textbooks: ['Discrete Mathematics and Its Applications - Kenneth H. Rosen', 'Probability and Statistics - Walpole & Myers'],
        references: ['Introduction to Graph Theory - Douglas West', 'Linear Algebra - Gilbert Strang']
    },

    'BCS302': {
        name: 'Digital Design & Computer Organization',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Design digital circuits', 'Understand computer architecture', 'Analyze memory systems', 'Design CPU components'],
        modules: [
            {
                num: 1, title: 'Boolean Algebra & Logic Gates', hours: 8,
                topics: ['Binary systems', 'Boolean algebra', 'Logic gates', 'K-map simplification', 'Quine-McCluskey method', 'NAND/NOR implementations', "Don't care conditions"],
                outcomes: 'CO1: Simplify Boolean expressions'
            },
            {
                num: 2, title: 'Combinational Circuits', hours: 8,
                topics: ['Adders', 'Subtractors', 'Multiplexers', 'Demultiplexers', 'Encoders', 'Decoders', 'Code converters', 'Magnitude comparators'],
                outcomes: 'CO2: Design combinational circuits'
            },
            {
                num: 3, title: 'Sequential Circuits', hours: 8,
                topics: ['Latches', 'Flip-flops (SR, JK, D, T)', 'State diagrams', 'State tables', 'Counters', 'Registers', 'Shift registers', 'FSM design'],
                outcomes: 'CO3: Design sequential circuits'
            },
            {
                num: 4, title: 'Memory & CPU Organization', hours: 8,
                topics: ['Memory hierarchy', 'RAM', 'ROM', 'Cache memory', 'Virtual memory', 'CPU architecture', 'Instruction cycle', 'ALU design', 'Control unit'],
                outcomes: 'CO4: Understand memory and CPU organization'
            },
            {
                num: 5, title: 'Pipelining & I/O', hours: 8,
                topics: ['Instruction pipelining', 'Pipeline hazards', 'I/O organization', 'Interrupts', 'DMA', 'I/O processors'],
                outcomes: 'CO5: Analyze pipelining and I/O systems'
            }
        ],
        textbooks: ['Digital Design - Morris Mano', 'Computer Organization - Carl Hamacher'],
        references: ['Computer Architecture - Patterson & Hennessy', 'Digital Logic - Floyd']
    },

    'BCS303': {
        name: 'Operating Systems',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand OS concepts', 'Analyze process management', 'Implement memory management', 'Study file systems'],
        modules: [
            {
                num: 1, title: 'Introduction to OS', hours: 8,
                topics: ['OS introduction', 'Types of OS', 'OS structure', 'System calls', 'OS services', 'System programs', 'OS design & implementation'],
                outcomes: 'CO1: Understand OS fundamentals'
            },
            {
                num: 2, title: 'Process Management', hours: 10,
                topics: ['Process concept', 'Process states', 'PCB', 'Context switching', 'Threads', 'Multithreading models', 'Process scheduling', 'CPU scheduling algorithms'],
                outcomes: 'CO2: Analyze process scheduling'
            },
            {
                num: 3, title: 'Synchronization & Deadlocks', hours: 8,
                topics: ['Critical section', 'Peterson solution', 'Semaphores', 'Monitors', 'Classical synchronization problems', 'Deadlock characterization', 'Prevention', 'Avoidance', 'Detection', 'Recovery'],
                outcomes: 'CO3: Handle synchronization and deadlocks'
            },
            {
                num: 4, title: 'Memory Management', hours: 8,
                topics: ['Contiguous allocation', 'Paging', 'Segmentation', 'Page table', 'TLB', 'Virtual memory', 'Demand paging', 'Page replacement algorithms', 'Thrashing'],
                outcomes: 'CO4: Implement memory management'
            },
            {
                num: 5, title: 'File Systems & Security', hours: 6,
                topics: ['File concept', 'File organization', 'Directory structure', 'Disk scheduling', 'RAID', 'File system implementation', 'Protection', 'Security mechanisms'],
                outcomes: 'CO5: Design file systems'
            }
        ],
        textbooks: ['Operating System Concepts - Silberschatz, Galvin & Gagne', 'Modern Operating Systems - Andrew Tanenbaum'],
        references: ['Operating Systems - William Stallings', 'Unix & Linux System Administration - Nemeth']
    },

    'BCS304': {
        name: 'Data Structures and Applications',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Implement linear data structures', 'Apply tree structures', 'Implement graph algorithms', 'Analyze algorithm complexity'],
        modules: [
            {
                num: 1, title: 'Introduction & Arrays', hours: 8,
                topics: ['Data structure classification', 'Abstract data types', 'Arrays', 'Sparse matrices', 'Polynomials', 'Strings', 'Pattern matching'],
                outcomes: 'CO1: Understand data structure fundamentals'
            },
            {
                num: 2, title: 'Stacks & Queues', hours: 8,
                topics: ['Stack ADT', 'Array & linked implementation', 'Infix to postfix', 'Expression evaluation', 'Queue ADT', 'Circular queue', 'Deque', 'Priority queue'],
                outcomes: 'CO2: Implement stacks and queues'
            },
            {
                num: 3, title: 'Linked Lists', hours: 8,
                topics: ['Singly linked list', 'Doubly linked list', 'Circular linked list', 'Operations', 'Applications', 'Polynomial addition', 'Sparse matrix representation'],
                outcomes: 'CO3: Implement linked list variants'
            },
            {
                num: 4, title: 'Trees', hours: 10,
                topics: ['Binary tree', 'Tree traversals', 'Binary search tree', 'AVL tree', 'B-tree', 'B+ tree', 'Heap', 'Heap sort', 'Huffman coding'],
                outcomes: 'CO4: Implement tree data structures'
            },
            {
                num: 5, title: 'Graphs', hours: 8,
                topics: ['Graph representation', 'BFS', 'DFS', 'Topological sort', 'Shortest path algorithms', 'Dijkstra', 'Bellman-Ford', 'MST', 'Prim', 'Kruskal'],
                outcomes: 'CO5: Implement graph algorithms'
            }
        ],
        textbooks: ['Data Structures using C - Reema Thareja', 'Fundamentals of Data Structures in C - Horowitz & Sahni'],
        references: ['Data Structures & Algorithms - Narasimha Karumanchi', 'Introduction to Algorithms - Cormen']
    },

    'BCS305A': {
        name: 'Object Oriented Programming with Java',
        credit: 3, cie: 50, see: 50, total: 100,
        objectives: ['Understand OOP concepts', 'Master Java programming', 'Handle exceptions', 'Implement multithreading'],
        modules: [
            {
                num: 1, title: 'Java Fundamentals', hours: 8,
                topics: ['JVM', 'JDK', 'JRE', 'Data types', 'Variables', 'Operators', 'Control statements', 'Arrays', 'Command line arguments'],
                outcomes: 'CO1: Write basic Java programs'
            },
            {
                num: 2, title: 'Classes & Objects', hours: 8,
                topics: ['Class definition', 'Objects', 'Methods', 'Constructors', 'this keyword', 'Static members', 'Access modifiers', 'Encapsulation'],
                outcomes: 'CO2: Implement classes and objects'
            },
            {
                num: 3, title: 'Inheritance & Polymorphism', hours: 8,
                topics: ['Inheritance types', 'super keyword', 'Method overriding', 'Dynamic method dispatch', 'Abstract classes', 'final keyword', 'Object class'],
                outcomes: 'CO3: Apply inheritance and polymorphism'
            },
            {
                num: 4, title: 'Packages & Interfaces', hours: 8,
                topics: ['Package creation', 'Access protection', 'Importing packages', 'Interfaces', 'Multiple inheritance', 'Nested interfaces', 'Default methods'],
                outcomes: 'CO4: Work with packages and interfaces'
            },
            {
                num: 5, title: 'Exception Handling & Multithreading', hours: 8,
                topics: ['Exception types', 'try-catch', 'finally', 'throw', 'throws', 'Custom exceptions', 'Thread creation', 'Synchronization', 'Inter-thread communication'],
                outcomes: 'CO5: Handle exceptions and threads'
            }
        ],
        textbooks: ['Java: The Complete Reference - Herbert Schildt', 'Head First Java - Kathy Sierra'],
        references: ['Core Java - Cay Horstmann', 'Effective Java - Joshua Bloch']
    },

    // ==================== CSE SEMESTER 4 ====================
    'BCS401': {
        name: 'Analysis & Design of Algorithms',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Analyze algorithm complexity', 'Apply design paradigms', 'Solve optimization problems', 'Understand NP-completeness'],
        modules: [
            {
                num: 1, title: 'Algorithm Analysis', hours: 8,
                topics: ['Asymptotic notations', 'Time complexity', 'Space complexity', 'Recurrence relations', 'Master theorem', 'Amortized analysis'],
                outcomes: 'CO1: Analyze algorithm complexity'
            },
            {
                num: 2, title: 'Divide and Conquer', hours: 8,
                topics: ['Binary search', 'Merge sort', 'Quick sort', 'Heap sort', 'Strassen matrix multiplication', 'Convex hull'],
                outcomes: 'CO2: Apply divide and conquer'
            },
            {
                num: 3, title: 'Greedy Method', hours: 8,
                topics: ['Knapsack problem', 'Job sequencing', 'Optimal merge patterns', 'Huffman coding', 'MST algorithms', 'Single source shortest path'],
                outcomes: 'CO3: Design greedy algorithms'
            },
            {
                num: 4, title: 'Dynamic Programming', hours: 10,
                topics: ['Matrix chain multiplication', 'LCS', '0/1 Knapsack', 'Optimal BST', 'Floyd-Warshall', 'Travelling salesman problem'],
                outcomes: 'CO4: Apply dynamic programming'
            },
            {
                num: 5, title: 'Backtracking & Branch and Bound', hours: 8,
                topics: ['N-Queens problem', 'Sum of subsets', 'Graph coloring', 'Hamiltonian cycle', 'Branch and bound', 'FIFO BB', 'LC BB', 'TSP using BB'],
                outcomes: 'CO5: Implement backtracking and B&B'
            }
        ],
        textbooks: ['Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein', 'Design and Analysis of Algorithms - Aho, Hopcroft, Ullman'],
        references: ['Algorithm Design - Kleinberg & Tardos', 'The Algorithm Design Manual - Steven Skiena']
    },

    'BCS403': {
        name: 'Database Management Systems',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Design databases', 'Write SQL queries', 'Apply normalization', 'Manage transactions'],
        modules: [
            {
                num: 1, title: 'Introduction to DBMS', hours: 8,
                topics: ['Database concepts', 'Data models', 'DBMS architecture', 'ER model', 'ER diagram', 'Attributes', 'Relationships', 'Extended ER features'],
                outcomes: 'CO1: Design ER models'
            },
            {
                num: 2, title: 'Relational Model & SQL', hours: 10,
                topics: ['Relational model', 'Relational algebra', 'SQL basics', 'DDL', 'DML', 'DCL', 'Constraints', 'Views', 'Joins', 'Subqueries', 'Aggregate functions'],
                outcomes: 'CO2: Write SQL queries'
            },
            {
                num: 3, title: 'Normalization', hours: 8,
                topics: ['Functional dependencies', 'Closure', 'Keys', 'Normal forms', '1NF', '2NF', '3NF', 'BCNF', '4NF', 'Decomposition', 'Lossless join'],
                outcomes: 'CO3: Normalize database schemas'
            },
            {
                num: 4, title: 'Transaction Management', hours: 8,
                topics: ['Transaction concept', 'ACID properties', 'Serializability', 'Concurrency control', 'Locking protocols', 'Two-phase locking', 'Deadlock handling', 'Recovery'],
                outcomes: 'CO4: Manage transactions'
            },
            {
                num: 5, title: 'Storage & Indexing', hours: 6,
                topics: ['File organization', 'Indexing', 'Primary index', 'Secondary index', 'B-tree', 'B+ tree', 'Hashing', 'Query optimization basics'],
                outcomes: 'CO5: Implement indexing schemes'
            }
        ],
        textbooks: ['Database System Concepts - Silberschatz, Korth, Sudarshan', 'Fundamentals of Database Systems - Elmasri & Navathe'],
        references: ['Database Management Systems - Raghu Ramakrishnan', 'SQL: The Complete Reference']
    },

    // ==================== CSE SEMESTER 5 ====================
    'BCS502': {
        name: 'Computer Networks',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand network architectures', 'Analyze protocols', 'Design networks', 'Implement network security'],
        modules: [
            {
                num: 1, title: 'Introduction & Physical Layer', hours: 8,
                topics: ['Network models', 'OSI model', 'TCP/IP model', 'Transmission media', 'Guided media', 'Unguided media', 'Multiplexing', 'Switching'],
                outcomes: 'CO1: Understand network fundamentals'
            },
            {
                num: 2, title: 'Data Link Layer', hours: 8,
                topics: ['Framing', 'Error detection', 'Error correction', 'Flow control', 'Stop-and-wait', 'Sliding window', 'HDLC', 'PPP', 'MAC protocols', 'CSMA/CD', 'Ethernet'],
                outcomes: 'CO2: Implement data link protocols'
            },
            {
                num: 3, title: 'Network Layer', hours: 10,
                topics: ['IPv4 addressing', 'Subnetting', 'CIDR', 'IPv6', 'Routing algorithms', 'Distance vector', 'Link state', 'RIP', 'OSPF', 'BGP', 'ICMP', 'ARP'],
                outcomes: 'CO3: Configure network layer'
            },
            {
                num: 4, title: 'Transport Layer', hours: 8,
                topics: ['UDP', 'TCP', 'Segment structure', 'Connection management', 'Flow control', 'Congestion control', 'TCP timers', 'Socket programming'],
                outcomes: 'CO4: Understand transport protocols'
            },
            {
                num: 5, title: 'Application Layer', hours: 6,
                topics: ['DNS', 'HTTP', 'HTTPS', 'FTP', 'SMTP', 'POP', 'IMAP', 'Network security basics', 'SSL/TLS', 'Firewalls'],
                outcomes: 'CO5: Configure application protocols'
            }
        ],
        textbooks: ['Computer Networks - Andrew Tanenbaum', 'Data Communications and Networking - Behrouz Forouzan'],
        references: ['TCP/IP Protocol Suite - Forouzan', 'Computer Networking: A Top-Down Approach - Kurose & Ross']
    },

    'BCS503': {
        name: 'Theory of Computation',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Design automata', 'Analyze formal languages', 'Understand computability', 'Analyze complexity classes'],
        modules: [
            {
                num: 1, title: 'Finite Automata', hours: 10,
                topics: ['Alphabets', 'Strings', 'Languages', 'DFA', 'NFA', 'NFA to DFA conversion', 'Minimization', 'Moore & Mealy machines'],
                outcomes: 'CO1: Design finite automata'
            },
            {
                num: 2, title: 'Regular Languages', hours: 8,
                topics: ['Regular expressions', 'RE to FA', 'FA to RE', 'Pumping lemma', 'Closure properties', 'Decision properties', 'Myhill-Nerode theorem'],
                outcomes: 'CO2: Analyze regular languages'
            },
            {
                num: 3, title: 'Context-Free Languages', hours: 8,
                topics: ['Context-free grammar', 'Derivation trees', 'Ambiguity', 'Simplification', 'CNF', 'GNF', 'CFL pumping lemma', 'Closure properties'],
                outcomes: 'CO3: Design context-free grammars'
            },
            {
                num: 4, title: 'Pushdown Automata', hours: 8,
                topics: ['PDA', 'Acceptance by final state', 'Acceptance by empty stack', 'CFG to PDA', 'PDA to CFG', 'Deterministic PDA'],
                outcomes: 'CO4: Construct pushdown automata'
            },
            {
                num: 5, title: 'Turing Machines & Decidability', hours: 8,
                topics: ['Turing machine', 'TM variants', 'Universal TM', 'Halting problem', 'Undecidability', 'P vs NP', 'NP-completeness', 'Reductions'],
                outcomes: 'CO5: Analyze computability'
            }
        ],
        textbooks: ['Introduction to Automata Theory - Hopcroft, Motwani, Ullman', 'Theory of Computation - Michael Sipser'],
        references: ['Introduction to Theory of Computation - Sipser', 'Elements of Theory of Computation - Lewis & Papadimitriou']
    },

    // ==================== CSE SEMESTER 6 ====================
    'BCS603': {
        name: 'Machine Learning',
        credit: 3, cie: 50, see: 50, total: 100,
        objectives: ['Understand ML fundamentals', 'Implement supervised learning', 'Apply unsupervised learning', 'Evaluate ML models'],
        modules: [
            {
                num: 1, title: 'Introduction to ML', hours: 6,
                topics: ['Types of ML', 'Well-posed learning problems', 'Learning approaches', 'Feature engineering', 'Train-test split', 'Cross-validation', 'Bias-variance tradeoff'],
                outcomes: 'CO1: Understand ML fundamentals'
            },
            {
                num: 2, title: 'Supervised Learning - Regression', hours: 8,
                topics: ['Linear regression', 'Gradient descent', 'Polynomial regression', 'Regularization', 'Ridge', 'Lasso', 'Logistic regression', 'Evaluation metrics'],
                outcomes: 'CO2: Implement regression models'
            },
            {
                num: 3, title: 'Supervised Learning - Classification', hours: 10,
                topics: ['KNN', 'Naive Bayes', 'Decision trees', 'Random forest', 'SVM', 'Kernel trick', 'Ensemble methods', 'Bagging', 'Boosting', 'XGBoost'],
                outcomes: 'CO3: Implement classification models'
            },
            {
                num: 4, title: 'Unsupervised Learning', hours: 8,
                topics: ['K-means clustering', 'Hierarchical clustering', 'DBSCAN', 'PCA', 'Dimensionality reduction', 't-SNE', 'Association rules', 'Apriori algorithm'],
                outcomes: 'CO4: Apply unsupervised learning'
            },
            {
                num: 5, title: 'Neural Networks', hours: 8,
                topics: ['Perceptron', 'Multi-layer perceptron', 'Activation functions', 'Backpropagation', 'Optimization algorithms', 'Introduction to deep learning'],
                outcomes: 'CO5: Understand neural networks'
            }
        ],
        textbooks: ['Machine Learning - Tom Mitchell', 'Pattern Recognition and Machine Learning - Christopher Bishop'],
        references: ['Hands-On Machine Learning - Aurélien Géron', 'The Elements of Statistical Learning - Hastie, Tibshirani']
    },

    // ==================== AI & ML SUBJECTS ====================
    'BAD501': {
        name: 'Deep Learning',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand deep neural networks', 'Implement CNNs', 'Apply RNNs', 'Design generative models'],
        modules: [
            {
                num: 1, title: 'Deep Learning Fundamentals', hours: 8,
                topics: ['Neural network basics', 'Activation functions', 'Loss functions', 'Backpropagation', 'Gradient descent variants', 'Regularization techniques', 'Dropout', 'Batch normalization'],
                outcomes: 'CO1: Understand deep learning basics'
            },
            {
                num: 2, title: 'Convolutional Neural Networks', hours: 10,
                topics: ['Convolution operation', 'Pooling', 'CNN architectures', 'LeNet', 'AlexNet', 'VGGNet', 'ResNet', 'Inception', 'Transfer learning'],
                outcomes: 'CO2: Design CNN architectures'
            },
            {
                num: 3, title: 'Recurrent Neural Networks', hours: 8,
                topics: ['Sequence modeling', 'Vanilla RNN', 'Vanishing gradient', 'LSTM', 'GRU', 'Bidirectional RNN', 'Sequence-to-sequence models'],
                outcomes: 'CO3: Implement sequence models'
            },
            {
                num: 4, title: 'Attention & Transformers', hours: 8,
                topics: ['Attention mechanism', 'Self-attention', 'Transformer architecture', 'BERT', 'GPT', 'Vision transformers'],
                outcomes: 'CO4: Apply attention mechanisms'
            },
            {
                num: 5, title: 'Generative Models', hours: 6,
                topics: ['Autoencoders', 'Variational autoencoders', 'GANs', 'DCGAN', 'StyleGAN', 'Diffusion models'],
                outcomes: 'CO5: Build generative models'
            }
        ],
        textbooks: ['Deep Learning - Ian Goodfellow, Yoshua Bengio, Aaron Courville', 'Deep Learning with Python - François Chollet'],
        references: ['Neural Networks and Deep Learning - Michael Nielsen', 'Dive into Deep Learning - Zhang et al.']
    },

    'BAD502': {
        name: 'Natural Language Processing',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand NLP fundamentals', 'Implement text processing', 'Apply word embeddings', 'Build NLP applications'],
        modules: [
            {
                num: 1, title: 'NLP Fundamentals', hours: 8,
                topics: ['NLP overview', 'Linguistic basics', 'Text preprocessing', 'Tokenization', 'Stemming', 'Lemmatization', 'Stop words', 'N-grams', 'Regular expressions'],
                outcomes: 'CO1: Preprocess text data'
            },
            {
                num: 2, title: 'Text Representation', hours: 8,
                topics: ['Bag of words', 'TF-IDF', 'Word embeddings', 'Word2Vec', 'GloVe', 'FastText', 'Document embeddings'],
                outcomes: 'CO2: Represent text numerically'
            },
            {
                num: 3, title: 'Language Models', hours: 8,
                topics: ['N-gram models', 'Perplexity', 'Neural language models', 'RNN for NLP', 'LSTM for text', 'Sequence labeling'],
                outcomes: 'CO3: Build language models'
            },
            {
                num: 4, title: 'NLP Applications', hours: 8,
                topics: ['Text classification', 'Sentiment analysis', 'Named entity recognition', 'POS tagging', 'Machine translation', 'Question answering'],
                outcomes: 'CO4: Build NLP applications'
            },
            {
                num: 5, title: 'Transformers for NLP', hours: 8,
                topics: ['BERT', 'GPT', 'T5', 'Fine-tuning', 'Prompt engineering', 'Large language models', 'ChatGPT architecture overview'],
                outcomes: 'CO5: Apply transformers to NLP'
            }
        ],
        textbooks: ['Speech and Language Processing - Jurafsky & Martin', 'Natural Language Processing with Python - Bird, Klein, Loper'],
        references: ['Transformers for Natural Language Processing - Denis Rothman', 'Practical NLP - Sowmya Vajjala et al.']
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.SyllabusData = SyllabusData;
}
