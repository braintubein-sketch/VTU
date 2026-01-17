/**
 * Braintube - Complete VTU 2022 Scheme Syllabus (Part 2)
 * Comprehensive syllabus for all branches: AI/ML, DS, ECE, EEE, ME, CV
 */

const SyllabusV2 = {
    // ==================== AI & ML SUBJECTS ====================
    'BAI301': {
        name: 'Mathematics for AI & ML - I',
        code: 'BAI301',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Linear Algebra', hours: 10, topics: 'Vector spaces, Linear transformations, Matrix decomposition, PCA.' },
            { num: 2, title: 'Multivariate Calculus', hours: 10, topics: 'Gradient, Hessian, Multi-layer perceptron math, Optimization techniques.' },
            { num: 3, title: 'Probability & Distributions', hours: 10, topics: 'Conditional probability, Bayes theorem, Gaussian, Poisson, Binomial.' },
            { num: 4, title: 'Optimization', hours: 10, topics: 'Convex sets, Gradient descent, Stochastic gradient descent, Lagrange multipliers.' },
            { num: 5, title: 'Numerical Analysis', hours: 10, topics: 'Approximations, Numerical integration, Solving large systems.' }
        ]
    },
    'BAI305': {
        name: 'Object Oriented Programming with Java',
        code: 'BAI305',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'Java history, JVM, Bytecode, Basic syntax, Data types.' },
            { num: 2, title: 'Classes & Inheritance', hours: 10, topics: 'Constructors, Overloading, Inheritance, Polymorphism, Abstract classes.' },
            { num: 3, title: 'Packages & Interfaces', hours: 8, topics: 'Access specifiers, Interfaces, Default methods, Multithreading basics.' },
            { num: 4, title: 'Exception Handling', hours: 8, topics: 'Try-catch, Custom exceptions, Collections framework basics.' },
            { num: 5, title: 'I/O & GUIs', hours: 8, topics: 'Stream classes, Serialization, Introduction to JavaFX/Swing.' }
        ]
    },

    // ==================== DATA SCIENCE SUBJECTS ====================
    'BDS305': {
        name: 'Python for Data Science',
        code: 'BDS305',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Python Basics', hours: 8, topics: 'Data structures, Lists, Tuples, Dicts, Flow control, Functions.' },
            { num: 2, title: 'NumPy & Computation', hours: 10, topics: 'Arrays, Vectorization, Broadcasting, Linear algebra with NumPy.' },
            { num: 3, title: 'Pandas & Data Cleaning', hours: 10, topics: 'DataFrames, Indexing, Grouping, Merging, Handling missing values.' },
            { num: 4, title: 'Data Visualization', hours: 8, topics: 'Matplotlib, Seaborn, Plotly, Interactive plots, Histograms, Scatter plots.' },
            { num: 5, title: 'Statistical Analysis', hours: 8, topics: 'SciPy, Hypothesis testing, Regressions, ANOVA basics.' }
        ]
    },
    'BDS404': {
        name: 'Data Visualization',
        code: 'BDS404',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Principles of Visualization', hours: 8, topics: 'Cognitive load, Color theory, Gestalt principles, Chart selection.' },
            { num: 2, title: 'Dashboarding', hours: 10, topics: 'Tableau, PowerBI fundamentals, KPI design, User experience for data.' },
            { num: 3, title: 'Web Visualization', hours: 10, topics: 'D3.js basics, SVG, Canvas, Responsive visualizations.' },
            { num: 4, title: 'Geospatial Data', hours: 10, topics: 'Maps, GIS, Choropleths, Heatmaps, Latitude/Longitude projection.' },
            { num: 5, title: 'Storytelling with Data', hours: 8, topics: 'Narrative flow, Annotation, Data journalism principles.' }
        ]
    },

    // ==================== ECE core subjects ====================
    'BEC402': {
        name: 'Analog Circuits',
        code: 'BEC402',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Transistor Biasing', hours: 10, topics: 'BJT & MOSFET biasing, Q-point stability, Bias compensation.' },
            { num: 2, title: 'Amplifiers', hours: 10, topics: 'Common-emitter, Common-source, Multistage amplifiers, Gain-bandwidth.' },
            { num: 3, title: 'Feedback', hours: 10, topics: 'Negative feedback, Topology comparison, Stability, Oscillators (Colpitts, Wien-bridge).' },
            { num: 4, title: 'Power Amplifiers', hours: 8, topics: 'Class A, B, AB, C efficiency, Transformer coupling, Distortion.' },
            { num: 5, title: 'Op-Amp Applications', hours: 10, topics: 'Filters, Inverters, Summers, Integrators, Schmitt triggers.' }
        ]
    },
    'BEC403': {
        name: 'Microcontrollers',
        code: 'BEC403',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: '8051 Architecture', hours: 10, topics: 'Registers, Pin diagram, Memory organization, Instruction sets.' },
            { num: 2, title: 'Assembly & C', hours: 10, topics: 'Programming microcontrollers, Arithmetic, Logical and Stack operations.' },
            { num: 3, title: 'Timers & Interrupts', hours: 10, topics: 'Timer modes, Interrupt handling, Serial communication (UART).' },
            { num: 4, title: 'Peripheral Interfacing', hours: 10, topics: 'LCD, Keypad, Stepper motor, ADC, DAC interfacing.' },
            { num: 5, title: 'ARM fundamentals', hours: 8, topics: 'ARM7 architecture, RISC philosophy, ARM vs Thumb state.' }
        ]
    },

    // ==================== EEE core subjects ====================
    'BEE403': {
        name: 'Electrical Machines - I',
        code: 'BEE403',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Transformers', hours: 12, topics: 'Ideal vs Practical, Equivalent circuits, Efficiency, Autotransformer.' },
            { num: 2, title: 'Three Phase Transformers', hours: 8, topics: 'Star-Delta, Open-delta, Scott connection, Parallel operation.' },
            { num: 3, title: 'DC Generators', hours: 10, topics: 'Construction, EMF equation, Armature reaction, Characteristics.' },
            { num: 4, title: 'DC Motors', hours: 10, topics: 'Back EMF, Torque, Speed control, Starters, Swinburne\'s test.' },
            { num: 5, title: 'Testing of Machines', hours: 8, topics: 'Brake test, Retardation test, Field\'s test, Separation of losses.' }
        ]
    },

    // ==================== MECHANICAL Core ====================
    'BME402': {
        name: 'Applied Thermodynamics',
        code: 'BME402',
        credits: 4,
        type: 'Theory',
        description: 'Advanced thermodynamic cycles and their applications in propulsion and power generation.',
        modules: [
            { num: 1, title: 'Gas Power Cycles', hours: 10, topics: 'Otto, Diesel, Dual, Brayton cycles, Jet propulsion.' },
            { num: 2, title: 'Vapor Power Cycles', hours: 10, topics: 'Rankine cycle, Reheat, Regeneration, Binary vapor cycles.' },
            { num: 3, title: 'IC Engines', hours: 10, topics: 'Combustion, Knocking, SI and CI engine performance, Emission control.' },
            { num: 4, title: 'Refrigeration', hours: 10, topics: 'Vapor compression, Absorption systems, Refrigerants, Psychrometry.' },
            { num: 5, title: 'Compressors', hours: 8, topics: 'Reciprocating, Centrifugal, Axial, Isothermal efficiency.' }
        ]
    },
    'BME403': {
        name: 'Fluid Mechanics',
        code: 'BME403',
        credits: 4,
        type: 'Theory',
        modules: [
            { num: 1, title: 'Properties & Statics', hours: 10, topics: 'Viscosity, Surface tension, Pressure measurement, Manometers.' },
            { num: 2, title: 'Fluid Kinematics', hours: 10, topics: 'Streamlines, Continuity equation, Acceleration, Potential flow.' },
            { num: 3, title: 'Fluid Dynamics', hours: 10, topics: 'Bernoulli\'s equation, Euler\'s equation, Venturimeter, Orificemeter.' },
            { num: 4, title: 'Laminar & Turbulent Flow', hours: 8, topics: 'Reynolds number, Hagen-Poiseuille, Boundary layer theory.' },
            { num: 5, title: 'Flow through Pipes', hours: 10, topics: 'Darcy-Weisbach, Minor losses, Pipes in parallel and series.' }
        ]
    },

    // ==================== CIVIL Core ====================
    'BCV403': {
        name: 'Applied Hydraulics',
        code: 'BCV403',
        credits: 4,
        type: 'Theory',
        modules: [
            { num: 1, title: 'Open Channel Flow', hours: 10, topics: 'Uniform flow, Chezy, Manning, Most economical channel section.' },
            { num: 2, title: 'Non-Uniform Flow', hours: 10, topics: 'Specific energy, Hydraulic jump, GVF profiles.' },
            { num: 3, title: 'Dimensional Analysis', hours: 8, topics: 'Rayleigh method, Buckingham Pi, Model testing, Similitude.' },
            { num: 4, title: 'Impact of Jets', hours: 10, topics: 'Vanes, Force exerted on moving/stationary curved plates.' },
            { num: 5, title: 'Hydraulic Machines', hours: 10, topics: 'Pelton wheel, Francis, Kaplan turbines, Centrifugal pumps.' }
        ]
    },

    // ==================== SEMESTER 7 & 8 (All Branches) ====================
    'BCS701': {
        name: 'Internet of Things',
        code: 'BCS701',
        credits: 4,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'Physical and Logical design, IoT Protocols, IoT levels, M2M and IoT.' },
            { num: 2, title: 'IoT Infrastructure', hours: 10, topics: 'SDN and NFV, NETCONF-YANG, Wireless Sensor Networks Basics.' },
            { num: 3, title: 'Python for IoT', hours: 10, topics: 'Packages for IoT, Interfacing sensors with Raspberry Pi, Data collection.' },
            { num: 4, title: 'Cloud for IoT', hours: 10, topics: 'IoT Platforms, AWS IoT, Adafruit IO, Data analytics on cloud.' },
            { num: 5, title: 'IoT Applications', hours: 8, topics: 'Smart Home, Smart Cities, Agriculture, Healthcare Case Studies.' }
        ]
    },
    'BCS703': {
        name: 'Cryptography & Network Security',
        code: 'BCS703',
        credits: 3,
        type: 'Theory',
        scheme: '2022',
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'Attacks, Services, Mechanisms, Classical Encryption Techniques.' },
            { num: 2, title: 'Symmetric Ciphers', hours: 10, topics: 'Block Ciphers, DES, AES, Blowfish, Stream Ciphers.' },
            { num: 3, title: 'Asymmetric Ciphers', hours: 10, topics: 'RSA, Elliptic Curve, Key Management, Diffie-Hellman.' },
            { num: 4, title: 'Hashing & MAC', hours: 8, topics: 'MD5, SHA, Digital Signatures, Authentication Protocols.' },
            { num: 5, title: 'Network Security', hours: 10, topics: 'IPSec, Web Security, SSL/TLS, Firewalls, Intruders, Malicious Software.' }
        ]
    },

    // ==================== ELECTIVES & SPECIALIZATIONS ====================
    'BDS601': {
        name: 'Deep Learning',
        code: 'BDS601',
        modules: [
            { num: 1, title: 'Neural Networks Fundamentals', hours: 10, topics: 'Perceptrons, Backpropagation, Gradient Descent variants.' },
            { num: 2, title: 'Convolutional Neural Networks', hours: 10, topics: 'Kernels, Pooling, Strides, Popular Architectures (VGG, ResNet).' },
            { num: 3, title: 'Recurrent Neural Networks', hours: 10, topics: 'LSTMs, GRUs, Sequence modelling, Attention mechanisms.' },
            { num: 4, title: 'Autoencoders & GANs', hours: 8, topics: 'Latent space, Variational Autoencoders, Generative Adversarial Networks.' },
            { num: 5, title: 'Advanced Topics', hours: 8, topics: 'Transformers, Reinforcement Learning basics, Transfer Learning.' }
        ]
    },
    'BEE801': {
        name: 'Electric Vehicles',
        code: 'BEE801',
        modules: [
            { num: 1, title: 'Introduction', h: 8, topics: 'History, EV components, Environmental impact.' },
            { num: 2, title: 'Energy Storage', h: 10, topics: 'Battery types, BMS, Charging topologies, Supercapacitors.' },
            { num: 3, title: 'Propulsion Systems', h: 10, topics: 'DC motors, Induction motors, PMBLDC motors for EVs.' },
            { num: 4, title: 'Vehicle Dynamics', h: 8, topics: 'Forces acting on vehicle, Power/Torque requirement calculations.' },
            { num: 5, title: 'Future Trends', h: 8, topics: 'Autonomous EVs, Smart charging, V2G technology.' }
        ]
    },

    // ==================== ECE SEMESTER 5 & 6 ====================
    'BEC501': {
        name: 'Digital Communication',
        code: 'BEC501',
        modules: [
            { num: 1, title: 'Signal Representation', hours: 10, topics: 'Hilbert transform, Pre-envelope, Complex envelope, Canonical representation.' },
            { num: 2, title: 'Digital Modulation', hours: 10, topics: 'PSK, FSK, QAM, Generation and detection, M-ary signalling.' },
            { num: 3, title: 'Spread Spectrum', hours: 10, topics: 'PN sequences, DS-SS, FH-SS, CDMA, Applications.' },
            { num: 4, title: 'Error Control Coding', hours: 10, topics: 'Linear block codes, Cyclic codes, Convolutional codes, Viterbi decoding.' },
            { num: 5, title: 'Information Theory', hours: 8, topics: 'Entropy, Source coding, Channel capacity, Shannon-Hartley theorem.' }
        ]
    },
    'BEC502': {
        name: 'Digital Signal Processing',
        code: 'BEC502',
        modules: [
            { num: 1, title: 'DFT & FFT', hours: 10, topics: 'Discrete Fourier Transform, Properties, Radix-2 FFT algorithms.' },
            { num: 2, title: 'IIR Filters', hours: 10, topics: 'Butterworth, Chebyshev, Impulse invariance, Bilinear transformation.' },
            { num: 3, title: 'FIR Filters', hours: 10, topics: 'Windowing techniques, Frequency sampling, Linear phase properties.' },
            { num: 4, title: 'Structures', hours: 8, topics: 'Direct, Cascade, Parallel forms for IIR and FIR.' },
            { num: 5, title: 'Adaptive Filters', hours: 8, topics: 'LMS algorithm, Applications in noise cancellation and echo removal.' }
        ]
    },

    // ==================== EEE SEMESTER 5 & 6 ====================
    'BEE501': {
        name: 'Power Electronics',
        code: 'BEE501',
        modules: [
            { num: 1, title: 'Devices', hours: 8, topics: 'SCR, IGBT, MOSFET, Static and dynamic characteristics, Gating circuits.' },
            { num: 2, title: 'Controlled Rectifiers', hours: 10, topics: '1-phase and 3-phase converters, Semi and full converters, RLE loads.' },
            { num: 3, title: 'Choppers', hours: 10, topics: 'Step-up, Step-down, Class A-E choppers, Buck, Boost, Buck-boost converters.' },
            { num: 4, title: 'Inverters', hours: 10, topics: 'VSI, CSI, Single phase and three-phase (120/180 degree mode), PWM techniques.' },
            { num: 5, title: 'AC Voltage Controllers', hours: 8, topics: 'ON-OFF control, Phase control, Cycloconverters basics.' }
        ]
    },
    'BEE602': {
        name: 'High Voltage Engineering',
        code: 'BEE602',
        modules: [
            { num: 1, title: 'Breakdown in Gases', hours: 10, topics: 'Townsend\'s criterion, Paschen\'s law, Streamer theory.' },
            { num: 2, title: 'Breakdown in Liquids/Solids', hours: 8, topics: 'Intrinsic breakdown, Electromechanical breakdown, Cavitation theory.' },
            { num: 3, title: 'Generation of High Voltage', hours: 10, topics: 'Cockroft-Walton, Van de Graaff, Marx circuit, Impulse generators.' },
            { num: 4, title: 'Measurement', hours: 10, topics: 'Sphere gaps, Electrostatic voltmeters, CVT, Oscilloscopes for HV.' },
            { num: 5, title: 'Testing', hours: 8, topics: 'Testing of insulators, Bushings, Transformers, Power cables.' }
        ]
    },

    // ==================== MECHANICAL SEMESTER 7 & 8 ====================
    'BME702': {
        name: 'Hydraulics and Pneumatics',
        code: 'BME702',
        modules: [
            { num: 1, title: 'Fluid Power Systems', hours: 8, topics: 'Pascal\'s law, Power units, Hydraulic vs Pneumatic systems.' },
            { num: 2, title: 'Pumps & Actuators', hours: 10, topics: 'Gear, Vane, Piston pumps, Linear and rotary actuators.' },
            { num: 3, title: 'Control Valves', hours: 10, topics: 'Directional, Pressure, and Flow control valves, Servo valves.' },
            { num: 4, title: 'Pneumatic Systems', hours: 10, topics: 'Compressors, Air treatment, Filter-Regulator-Lubricator (FRL) units.' },
            { num: 5, title: 'Circuit Design', hours: 10, topics: 'Regenerative circuits, Sequencing, Modern control in fluid power.' }
        ]
    },
    'BME801': {
        name: 'Additive Manufacturing',
        code: 'BME801',
        modules: [
            { num: 1, title: 'AM Fundamentals', hours: 8, topics: 'History, 8-step AM process, Benefits and limitations.' },
            { num: 2, title: 'Liquid & Solid based AM', hours: 10, topics: 'Stereolithography (SLA), Fused Deposition Modelling (FDM), LOM.' },
            { num: 3, title: 'Powder based AM', hours: 10, topics: 'Selective Laser Sintering (SLS), PBF, DED techniques.' },
            { num: 4, title: 'Design for AM', hours: 10, topics: 'Topology optimization, Support structures, Post-processing.' },
            { num: 5, title: 'Applications', hours: 8, topics: 'Aerospace, Medical, Automotive, Tooling applications.' }
        ]
    },

    // ==================== CIVIL SEMESTER 5 & 6 ====================
    'BCV502': {
        name: 'Design of RC Structures',
        code: 'BCV502',
        modules: [
            { num: 1, title: 'Limit State Method', hours: 10, topics: 'Philosophical basis, Factors of safety, Flexural strength of beams.' },
            { num: 2, title: 'Beams & Slabs', hours: 12, topics: 'Singley and doubly reinforced beams, One-way and two-way slabs.' },
            { num: 3, title: 'Shear & Bond', hours: 10, topics: 'Diagonal tension, Shear reinforcement, Development length, Anchorage.' },
            { num: 4, title: 'Columns', hours: 8, topics: 'Short and slender columns, Axial load and uniaxial bending.' },
            { num: 5, title: 'Footings', hours: 8, topics: 'Isolated footings, Square and rectangular, Design for shear and bending.' }
        ]
    },

    // ==================== AI & ML SEMESTER 7 ====================
    'BAI701': {
        name: 'Natural Language Processing',
        code: 'BAI701',
        modules: [
            { num: 1, title: 'Text Processing', hours: 10, topics: 'Tokenization, Lemmatization, POS tagging, Language models.' },
            { num: 2, title: 'Deep Learning for NLP', hours: 10, topics: 'Word Embeddings (Word2Vec, GloVe), RNNs, LSTMs for text.' },
            { num: 3, title: 'Transformers', hours: 10, topics: 'Attention mechanisms, BERT, GPT architecture, Fine-tuning.' },
            { num: 4, title: 'Information Extraction', hours: 8, topics: 'NER, Question answering, Text summarization.' },
            { num: 5, title: 'Applications', hours: 8, topics: 'Sentiment analysis, Chatbots, Machine translation.' }
        ]
    },

    // ==================== AIML CORE (BAD CODES) ====================
    'BAD301': {
        name: 'Mathematics for Machine Learning',
        code: 'BAD301',
        modules: [
            { num: 1, title: 'Linear Algebra', hours: 10, topics: 'System of linear equations, Vector spaces, Echelon form, Basis.' },
            { num: 2, title: 'Matrix Theory', hours: 10, topics: 'Eigenvalues, Eigenvectors, Diagonalization, SVD.' },
            { num: 3, title: 'Calculus for ML', hours: 10, topics: 'Partial derivatives, Chain rule, Gradient, Hessian.' },
            { num: 4, title: 'Optimization', hours: 10, topics: 'Local/Global minima, Constrained optimization, SGD.' },
            { num: 5, title: 'Vector Calculus', hours: 8, topics: 'Gradients of vector-valued functions, Jacobian.' }
        ]
    },
    'BAD305': {
        name: 'Python Programming',
        code: 'BAD305',
        modules: [
            { num: 1, title: 'Python Fundamentals', hours: 8, topics: 'Keywords, Operators, Control flow, Functions.' },
            { num: 2, title: 'Data Structures', hours: 10, topics: 'Lists, Tuples, Dictionaries, Sets, Comprehensions.' },
            { num: 3, title: 'Object Oriented Python', hours: 10, topics: 'Classes, Objects, Inheritance, Overloading.' },
            { num: 4, title: 'Scientific Computing', hours: 10, topics: 'NumPy arrays, Broadcasting, Vectorization.' },
            { num: 5, title: 'Data Analysis', hours: 8, topics: 'Pandas DataFrames, Series, Cleaning and Transforming data.' }
        ]
    },

    // ==================== ISE CORE (BIS CODES) ====================
    'BIS301': {
        name: 'Mathematics for Computer Science',
        code: 'BIS301',
        modules: [
            { num: 1, title: 'Probability', hours: 10, topics: 'Sample space, Bayes theorem, Random variables.' },
            { num: 2, title: 'Distributions', hours: 10, topics: 'Binomial, Poisson, Normal, Exponential.' },
            { num: 3, title: 'Logic', hours: 10, topics: 'Propositional logic, Predicates, Rules of inference.' },
            { num: 4, title: 'Relations & Graphs', hours: 10, topics: 'Properties of relations, Digraphs, Graph isomorphism.' },
            { num: 5, title: 'Counting', hours: 8, topics: 'Permutations, Combinations, Recurrence relations.' }
        ]
    },
    'BIS405': {
        name: 'Computer Networks',
        code: 'BIS405',
        modules: [
            { num: 1, title: 'Application Layer', hours: 8, topics: 'HTTP, FTP, SMTP, DNS, Peer-to-Peer.' },
            { num: 2, title: 'Transport Layer', hours: 10, topics: 'Multiplexing, UDP, TCP mechanisms, Congestion control.' },
            { num: 3, title: 'Network Layer', hours: 10, topics: 'IP addressing, IPv4/v6, Routing (OSPF, RIP).' },
            { num: 4, title: 'Link Layer', hours: 8, topics: 'Error detection, Multiple access protocols, Ethernet.' },
            { num: 5, title: 'Wireless Networks', hours: 10, topics: 'Wi-Fi, Bluetooth, Mobile IP, Cellular networks.' }
        ]
    },
    'BIS601': {
        name: 'Cloud Computing',
        code: 'BIS601',
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'NIST model, SaaS, PaaS, IaaS, Cloud characteristics.' },
            { num: 2, title: 'Virtualization', hours: 10, topics: 'Hypervisors, Containers (Docker), Resource management.' },
            { num: 3, title: 'Cloud Platforms', hours: 10, topics: 'AWS services, Google App Engine, Microsoft Azure basics.' },
            { num: 4, title: 'Cloud Security', hours: 10, topics: 'Data security, Identity management, Compliance.' },
            { num: 5, title: 'Future of Cloud', hours: 8, topics: 'Edge computing, Serverless architecture, Cloud orchestration.' }
        ]
    },

    // ==================== DATA SCIENCE CORE (BDS CODES) ====================
    'BDS402': {
        name: 'Database Management Systems',
        code: 'BDS402',
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'DBMS architecture, Data models, ER diagrams.' },
            { num: 2, title: 'Relational Model', hours: 10, topics: 'SQL, Joins, Triggers, Views, Normalization (1NF to BCNF).' },
            { num: 3, title: 'Transaction Management', hours: 10, topics: 'ACID properties, Concurrency control, Deadlocks.' },
            { num: 4, title: 'NoSQL Databases', hours: 10, topics: 'CAP theorem, MongoDB, Key-value stores, Document stores.' },
            { num: 5, title: 'Data Warehousing', hours: 8, topics: 'OLAP vs OLTP, Star schema, ETL process.' }
        ]
    },
    'BDS502': {
        name: 'Big Data Analytics',
        code: 'BDS502',
        modules: [
            { num: 1, title: 'Hadoop Ecosystem', hours: 10, topics: 'HDFS, MapReduce, YARN architecture.' },
            { num: 2, title: 'Spark', hours: 10, topics: 'RDDs, DataFrames, Spark SQL, Streaming analytics.' },
            { num: 3, title: 'Storage Systems', hours: 8, topics: 'HBase, Cassandra, Hive, Pig Latin.' },
            { num: 4, title: 'Analytics with Spark', hours: 10, topics: 'GraphX, MLLib, In-memory computing.' },
            { num: 5, title: 'Real-time Analytics', hours: 8, topics: 'Kafka, Flink, Designing high-throughput pipelines.' }
        ]
    },

    // ==================== CORE 2022 SCHEME (CSE/ISE/AIML/DS SHARED) ====================
    'BCS302': {
        name: 'Digital Design & Computer Organization',
        code: 'BCS302',
        modules: [
            { num: 1, title: 'Digital Logic', hours: 10, topics: 'K-Maps, Quine-McCluskey, Combinational circuits (Adders, Mux), Sequential circuits (Flip-flops).' },
            { num: 2, title: 'Basic Structure of Computers', hours: 10, topics: 'Functional units, Performance, Instructions, Addressing modes, Memory operations.' },
            { num: 3, title: 'I/O Organization', hours: 10, topics: 'Accessing I/O devices, Interrupts, Direct Memory Access (DMA), Bus arbitration.' },
            { num: 4, title: 'Memory System', hours: 10, topics: 'Internal organization, Cache memory (Mapping, Replacement), Virtual memory, ROM.' },
            { num: 5, title: 'Basic Processing Unit', hours: 8, topics: 'Hardwired control, Microprogrammed control, Pipelining basics.' }
        ]
    },
    'BCS303': {
        name: 'Operating Systems',
        code: 'BCS303',
        modules: [
            { num: 1, title: 'Introduction', hours: 8, topics: 'OS structure, Operations, Process management, Dual-mode, System calls.' },
            { num: 2, title: 'Process Management', hours: 10, topics: 'Scheduling (FCFS, SJF, Priority, RR), Inter-process communication.' },
            { num: 3, title: 'Synchronization & Deadlocks', hours: 10, topics: 'Critical section, Semaphores, Monitors, Deadlock prevention, avoidance, detection.' },
            { num: 4, title: 'Memory Management', hours: 10, topics: 'Paging, Segmentation, Swapping, Demand paging, Page replacement algorithms.' },
            { num: 5, title: 'Storage & File Systems', hours: 8, topics: 'Disk scheduling, File access methods, Directory structure, Protection.' }
        ]
    },
    'BCS304': {
        name: 'Data Structures and Applications',
        code: 'BCS304',
        modules: [
            { num: 1, title: 'Basic Concepts', hours: 8, topics: 'Recursion, Pointers, Dynamic memory allocation, Asymptotic notation.' },
            { num: 2, title: 'Stacks & Queues', hours: 10, topics: 'Array/Linked implementation, Applications (Expression evaluation, Conversion).' },
            { num: 3, title: 'Linked Lists', hours: 10, topics: 'Singly, Doubly, Circular linked lists, Polynomial manipulation.' },
            { num: 4, title: 'Trees', hours: 10, topics: 'Binary trees, Traversals, BST, Threaded binary trees, AVL trees.' },
            { num: 5, title: 'Graphs & Searching', hours: 10, topics: 'Adjacency matrix/list, BFS, DFS, Hashing (Collision resolution), Sorting.' }
        ]
    },
    'BCS401': {
        name: 'Analysis & Design of Algorithms',
        code: 'BCS401',
        modules: [
            { num: 1, title: 'Introduction', hours: 10, topics: 'Algorithm analysis framework, Growth of functions, Divide and Conquer.' },
            { num: 2, title: 'Greedy Technique', hours: 10, topics: 'Prim\'s, Kruskal\'s, Dijkstra\'s, Huffman coding, Knapsack problem.' },
            { num: 3, title: 'Dynamic Programming', hours: 10, topics: 'Warshall\'s, Floyd\'s, Knapsack, Optimal BST, Traveling Salesperson.' },
            { num: 4, title: 'Backtracking & Branch-and-Bound', hours: 10, topics: 'N-Queens, Hamiltonian circuit, Assignment problem, P and NP classes.' },
            { num: 5, title: 'Decrease-and-Conquer', hours: 8, topics: 'Insertion sort, DFS/BFS applications, Topological sorting.' }
        ]
    },
    'BCS403': {
        name: 'Database Management Systems',
        code: 'BCS403',
        modules: [
            { num: 1, title: 'Introduction', h: 8, topics: 'Characteristics of DBMS, Data models, ER modeling, Relationships.' },
            { num: 2, title: 'SQL', h: 10, topics: 'DDL, DML, Constraints, Joins, Set operations, Aggregate functions.' },
            { num: 3, title: 'Normalization', h: 10, topics: 'Informal design guidelines, Functional dependencies, 1NF, 2NF, 3NF, BCNF.' },
            { num: 4, title: 'Transaction Control', h: 10, topics: 'Schedules, Serializability, Concurrency control, Lock-based protocols.' },
            { num: 5, title: 'Recovery & Storage', h: 8, topics: 'Undo/Redo, Log-based recovery, Indexing, B-trees, Hashing.' }
        ]
    },

    // ==================== COMMON 2022 SCHEME SUBJECTS (AEC/Ability Enhancement) ====================
    'BICOK108': {
        name: 'Indian Constitution',
        code: 'BICOK108',
        modules: [
            { num: 1, title: 'Introduction', h: 3, topics: 'Preamble, Salient features, Citizenship, Fundamental Rights, Duties.' },
            { num: 2, title: 'Union Executive', h: 4, topics: 'President, Vice President, PM, Cabinet, Parliament, Supreme Court.' },
            { num: 3, title: 'State Executive', h: 3, topics: 'Governor, CM, Council of Ministers, Assembly, High Courts.' },
            { num: 4, title: 'Elections & Amendments', h: 3, topics: 'Election commission, Electoral process, Amendment procedure, Major amendments.' },
            { num: 5, title: 'Engineering Ethics', h: 2, topics: 'Responsibility of engineers, Safety and risk, Professional ethics basics.' }
        ]
    },
    'BSFHK109': {
        name: 'Scientific Foundations of Health',
        code: 'BSFHK109',
        modules: [
            { num: 1, title: 'Health and Wellness', h: 3, topics: 'Dimensions of health, Wellness, Disease prevention, Immunity.' },
            { num: 2, title: 'Nutrition', h: 3, topics: 'Balanced diet, Metabolism, BMI, Nutritional disorders.' },
            { num: 3, title: 'Mental Health', h: 3, topics: 'Stress management, Anxiety, Depression, Resilience, Emotional health.' },
            { num: 4, title: 'Physical Activity', h: 3, topics: 'Exercise physiology, Aerobic/Anaerobic, Posture, Ergonomics for engineers.' },
            { num: 5, title: 'Social Health', h: 3, topics: 'Addiction (Drug, Alcohol, Social Media), Personal hygiene, HIV/AIDS awareness.' }
        ]
    },
    'BUHK407': {
        name: 'Universal Human Values',
        code: 'BUHK407',
        modules: [
            { num: 1, title: 'Self-Exploration', h: 4, topics: 'Happiness and Prosperity, Right understanding, Relationship, Physical facilities.' },
            { num: 2, title: 'Harmony in the Human Being', h: 4, topics: 'Self and Body, I and Body requirements, Activities of Self.' },
            { num: 3, title: 'Harmony in Family & Society', h: 4, topics: 'Trust and Respect, Justice in relationships, Fearlessness, Co-existence.' },
            { num: 4, title: 'Harmony in Nature', h: 4, topics: 'The four orders of nature, Recyclability, Self-regulation.' },
            { num: 5, title: 'Professional Ethics', h: 4, topics: 'Vision for holistic technology, Competence in professional ethics, Case studies.' }
        ]
    },
    'BRMK507': {
        name: 'Research Methodology & IPR',
        code: 'BRMK507',
        modules: [
            { num: 1, title: 'Research Basics', h: 5, topics: 'Types of research, Research process, Literature review, Ethics.' },
            { num: 2, title: 'Research Design', h: 5, topics: 'Variables, Sampling, Data collection methods, Statistical tools.' },
            { num: 3, title: 'IPR Fundamentals', h: 5, topics: 'Patents, Copyrights, Trademarks, Trade secrets, Geographical indications.' },
            { num: 4, title: 'Patent Process', h: 5, topics: 'Filing, Examination, Infringement, Licensing and tech transfer.' },
            { num: 5, title: 'Reporting', h: 5, topics: 'Thesis writing, Technical papers, Plagiarism checks, Citation styles.' }
        ]
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.SyllabusV2 = SyllabusV2;
}
