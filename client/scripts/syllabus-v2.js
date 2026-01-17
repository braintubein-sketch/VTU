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
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.SyllabusV2 = SyllabusV2;
}
