/**
 * Braintube - Extended VTU 2022 Scheme Syllabus
 * Complete syllabus for all branches: ECE, EEE, ME, CV, DS, CSBS, BT
 */

const SyllabusExtended = {
    // ==================== ECE SEMESTER 3 ====================
    'BEC301': {
        name: 'Transform Calculus, Fourier Series & Numerical Techniques',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Apply Laplace transforms', 'Analyze Fourier series', 'Solve using numerical methods'],
        modules: [
            { num: 1, title: 'Laplace Transforms', hours: 8, topics: ['Definition', 'Properties', 'Inverse Laplace', 'Convolution theorem', 'Applications to ODEs'], outcomes: 'CO1: Apply Laplace transforms' },
            { num: 2, title: 'Fourier Series', hours: 8, topics: ['Periodic functions', 'Fourier coefficients', 'Half range series', 'Harmonic analysis'], outcomes: 'CO2: Analyze periodic functions' },
            { num: 3, title: 'Fourier Transforms', hours: 8, topics: ['Infinite Fourier transforms', 'Sine and cosine transforms', 'Inverse transforms'], outcomes: 'CO3: Apply Fourier transforms' },
            { num: 4, title: 'Z-Transforms', hours: 8, topics: ['Definition', 'Properties', 'Inverse Z-transform', 'Applications to difference equations'], outcomes: 'CO4: Solve difference equations' },
            { num: 5, title: 'Numerical Methods', hours: 8, topics: ['Solution of equations', 'Interpolation', 'Numerical differentiation', 'Numerical integration'], outcomes: 'CO5: Apply numerical methods' }
        ],
        textbooks: ['Higher Engineering Mathematics - B.S. Grewal', 'Advanced Engineering Mathematics - Erwin Kreyszig']
    },
    'BEC302': {
        name: 'Network Analysis',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Analyze electrical networks', 'Apply network theorems', 'Design filters'],
        modules: [
            { num: 1, title: 'Basic Concepts', hours: 8, topics: ['Voltage & current sources', 'Source transformation', 'Mesh & nodal analysis', 'Network topology'], outcomes: 'CO1: Analyze basic networks' },
            { num: 2, title: 'Network Theorems', hours: 8, topics: ['Superposition', 'Thevenin', 'Norton', 'Maximum power transfer', 'Reciprocity'], outcomes: 'CO2: Apply network theorems' },
            { num: 3, title: 'Transient Analysis', hours: 8, topics: ['RL circuits', 'RC circuits', 'RLC circuits', 'Initial conditions', 'Step response'], outcomes: 'CO3: Analyze transient response' },
            { num: 4, title: 'Two-Port Networks', hours: 8, topics: ['Z parameters', 'Y parameters', 'h parameters', 'ABCD parameters', 'Interconnections'], outcomes: 'CO4: Characterize two-port networks' },
            { num: 5, title: 'Filters', hours: 8, topics: ['Low pass', 'High pass', 'Band pass', 'Band stop', 'm-derived filters'], outcomes: 'CO5: Design passive filters' }
        ],
        textbooks: ['Network Analysis - Van Valkenburg', 'Engineering Circuit Analysis - Hayt & Kemmerly']
    },
    'BEC303': {
        name: 'Electronic Devices',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand semiconductor physics', 'Analyze electronic devices', 'Design basic circuits'],
        modules: [
            { num: 1, title: 'Semiconductor Fundamentals', hours: 8, topics: ['Crystal structure', 'Energy bands', 'Carrier concentration', 'Drift & diffusion', 'Continuity equation'], outcomes: 'CO1: Understand semiconductor physics' },
            { num: 2, title: 'PN Junction Diode', hours: 8, topics: ['PN junction formation', 'Forward & reverse bias', 'I-V characteristics', 'Breakdown mechanisms', 'Diode applications'], outcomes: 'CO2: Analyze diode circuits' },
            { num: 3, title: 'Bipolar Junction Transistor', hours: 10, topics: ['BJT operation', 'Current components', 'CB, CE, CC configurations', 'Biasing', 'Small signal model'], outcomes: 'CO3: Design BJT circuits' },
            { num: 4, title: 'Field Effect Transistors', hours: 8, topics: ['JFET operation', 'MOSFET types', 'CMOS technology', 'Biasing', 'Small signal analysis'], outcomes: 'CO4: Analyze FET circuits' },
            { num: 5, title: 'Special Devices', hours: 6, topics: ['Zener diode', 'Tunnel diode', 'Photodiode', 'LED', 'Solar cell', 'SCR'], outcomes: 'CO5: Understand special devices' }
        ],
        textbooks: ['Semiconductor Physics - S.M. Sze', 'Electronic Devices - Floyd']
    },
    'BEC304': {
        name: 'Digital System Design',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Design digital circuits', 'Implement sequential systems', 'Program using HDL'],
        modules: [
            { num: 1, title: 'Combinational Logic', hours: 8, topics: ['Boolean algebra', 'K-maps', 'Multiplexers', 'Decoders', 'Encoders', 'Adders'], outcomes: 'CO1: Design combinational circuits' },
            { num: 2, title: 'Sequential Circuits', hours: 10, topics: ['Flip-flops', 'Counters', 'Shift registers', 'State machines', 'State minimization'], outcomes: 'CO2: Design sequential circuits' },
            { num: 3, title: 'Programmable Logic', hours: 6, topics: ['ROM', 'PLA', 'PAL', 'CPLD', 'FPGA'], outcomes: 'CO3: Use programmable devices' },
            { num: 4, title: 'VHDL Basics', hours: 8, topics: ['VHDL syntax', 'Data types', 'Operators', 'Concurrent statements', 'Sequential statements'], outcomes: 'CO4: Write basic VHDL' },
            { num: 5, title: 'VHDL Design', hours: 8, topics: ['Structural modeling', 'Behavioral modeling', 'Testbenches', 'Synthesis'], outcomes: 'CO5: Design using VHDL' }
        ],
        textbooks: ['Digital Design - Morris Mano', 'VHDL Primer - Bhasker']
    },

    // ==================== EEE SEMESTER 3 ====================
    'BEE302': {
        name: 'Analog Electronic Circuits',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Analyze amplifier circuits', 'Design feedback systems', 'Implement oscillators'],
        modules: [
            { num: 1, title: 'BJT Amplifiers', hours: 10, topics: ['CE amplifier', 'CB amplifier', 'CC amplifier', 'Frequency response', 'Multistage amplifiers'], outcomes: 'CO1: Design BJT amplifiers' },
            { num: 2, title: 'FET Amplifiers', hours: 8, topics: ['CS amplifier', 'CG amplifier', 'CD amplifier', 'High frequency model', 'Cascode amplifier'], outcomes: 'CO2: Design FET amplifiers' },
            { num: 3, title: 'Feedback Amplifiers', hours: 8, topics: ['Feedback topologies', 'Series-shunt', 'Shunt-shunt', 'Stability analysis'], outcomes: 'CO3: Analyze feedback circuits' },
            { num: 4, title: 'Oscillators', hours: 8, topics: ['Barkhausen criterion', 'RC oscillators', 'LC oscillators', 'Crystal oscillators'], outcomes: 'CO4: Design oscillator circuits' },
            { num: 5, title: 'Power Amplifiers', hours: 6, topics: ['Class A', 'Class B', 'Class AB', 'Class C', 'Efficiency analysis'], outcomes: 'CO5: Design power amplifiers' }
        ],
        textbooks: ['Electronic Devices & Circuits - Boylestad', 'Microelectronic Circuits - Sedra & Smith']
    },
    'BEE303': {
        name: 'Network Analysis',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Analyze AC/DC circuits', 'Apply network theorems', 'Understand coupled circuits'],
        modules: [
            { num: 1, title: 'Circuit Analysis', hours: 8, topics: ['Mesh analysis', 'Nodal analysis', 'Source transformation', 'Network topology'], outcomes: 'CO1: Analyze DC circuits' },
            { num: 2, title: 'Network Theorems', hours: 8, topics: ['Superposition', 'Thevenin', 'Norton', 'Maximum power transfer', 'Millman theorem'], outcomes: 'CO2: Apply network theorems' },
            { num: 3, title: 'AC Circuits', hours: 8, topics: ['Phasors', 'Impedance', 'Power factor', 'Resonance', 'Three phase circuits'], outcomes: 'CO3: Analyze AC circuits' },
            { num: 4, title: 'Coupled Circuits', hours: 8, topics: ['Mutual inductance', 'Coefficient of coupling', 'Dot convention', 'Coupled circuit analysis'], outcomes: 'CO4: Analyze coupled circuits' },
            { num: 5, title: 'Transient Analysis', hours: 8, topics: ['First order circuits', 'Second order circuits', 'Initial conditions', 'Natural & forced response'], outcomes: 'CO5: Analyze transient behavior' }
        ],
        textbooks: ['Engineering Circuit Analysis - Hayt', 'Network Analysis - Van Valkenburg']
    },

    // ==================== ME SEMESTER 3-4 ====================
    'BME302': {
        name: 'Mechanics of Materials',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Analyze stress & strain', 'Design beams', 'Analyze columns'],
        modules: [
            { num: 1, title: 'Simple Stresses', hours: 8, topics: ['Types of stresses', 'Stress-strain diagram', 'Elastic constants', "Poisson's ratio", 'Thermal stresses'], outcomes: 'CO1: Analyze simple stresses' },
            { num: 2, title: 'Shear Force & Bending Moment', hours: 8, topics: ['Types of beams', 'Types of loads', 'SF & BM diagrams', 'Relationship between load, SF, BM'], outcomes: 'CO2: Draw SF & BM diagrams' },
            { num: 3, title: 'Bending Stresses', hours: 8, topics: ['Theory of simple bending', 'Section modulus', 'Composite beams', 'Flitched beams'], outcomes: 'CO3: Calculate bending stresses' },
            { num: 4, title: 'Torsion', hours: 8, topics: ['Torsion of circular shafts', 'Power transmission', 'Hollow shafts', 'Shaft design'], outcomes: 'CO4: Design shafts' },
            { num: 5, title: 'Columns & Struts', hours: 8, topics: ["Euler's theory", 'Rankine formula', 'Eccentrically loaded columns', 'Column design'], outcomes: 'CO5: Design columns' }
        ],
        textbooks: ['Mechanics of Materials - Beer & Johnston', 'Strength of Materials - R.K. Bansal']
    },
    'BME303': {
        name: 'Basic Thermodynamics',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Apply thermodynamic laws', 'Analyze thermodynamic cycles', 'Understand entropy'],
        modules: [
            { num: 1, title: 'Basic Concepts', hours: 8, topics: ['System & surroundings', 'Properties', 'State & process', 'Zeroth law', 'Temperature scales'], outcomes: 'CO1: Understand thermodynamic concepts' },
            { num: 2, title: 'First Law', hours: 8, topics: ['Energy', 'Work & heat', 'First law for closed systems', 'First law for open systems', 'Steady flow energy equation'], outcomes: 'CO2: Apply first law' },
            { num: 3, title: 'Second Law', hours: 8, topics: ['Heat engines', 'Refrigerators', 'Kelvin-Planck statement', 'Clausius statement', 'Carnot cycle'], outcomes: 'CO3: Apply second law' },
            { num: 4, title: 'Entropy', hours: 8, topics: ['Entropy definition', 'Entropy change', 'Entropy generation', 'T-s diagram', 'Irreversibility'], outcomes: 'CO4: Calculate entropy changes' },
            { num: 5, title: 'Gas Cycles', hours: 8, topics: ['Otto cycle', 'Diesel cycle', 'Dual cycle', 'Brayton cycle', 'Air standard efficiency'], outcomes: 'CO5: Analyze gas cycles' }
        ],
        textbooks: ['Engineering Thermodynamics - P.K. Nag', 'Thermodynamics - Cengel & Boles']
    },

    // ==================== CV SEMESTER 3-4 ====================
    'BCV302': {
        name: 'Mechanics of Materials',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Analyze structural members', 'Design beams & columns', 'Understand material behavior'],
        modules: [
            { num: 1, title: 'Simple Stresses & Strains', hours: 8, topics: ['Stress & strain', 'Elastic constants', "Hooke's law", 'Composite bars', 'Thermal stresses'], outcomes: 'CO1: Analyze stresses' },
            { num: 2, title: 'Compound Stresses', hours: 8, topics: ['Principal stresses', "Mohr's circle", 'Theories of failure', 'Combined loading'], outcomes: 'CO2: Analyze compound stresses' },
            { num: 3, title: 'SF & BM Diagrams', hours: 8, topics: ['Types of beams', 'SFD & BMD', 'Point of contraflexure', 'Relationship between load, SF, BM'], outcomes: 'CO3: Draw SF & BM diagrams' },
            { num: 4, title: 'Bending & Shear', hours: 8, topics: ['Theory of bending', 'Bending stress', 'Shear stress distribution', 'Shear center'], outcomes: 'CO4: Calculate stresses in beams' },
            { num: 5, title: 'Deflection & Columns', hours: 8, topics: ['Deflection methods', 'Macaulay method', "Euler's column theory", 'Rankine formula'], outcomes: 'CO5: Calculate deflections' }
        ],
        textbooks: ['Strength of Materials - S.S. Bhavikatti', 'Mechanics of Materials - Beer & Johnston']
    },

    // ==================== DS SEMESTER 3-4 ====================
    'BDS301': {
        name: 'Mathematics for Data Science',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Apply linear algebra to data', 'Use probability in ML', 'Understand optimization'],
        modules: [
            { num: 1, title: 'Linear Algebra', hours: 8, topics: ['Vectors & matrices', 'Eigenvalues', 'SVD', 'Matrix decomposition', 'Applications in data science'], outcomes: 'CO1: Apply linear algebra' },
            { num: 2, title: 'Multivariate Calculus', hours: 8, topics: ['Partial derivatives', 'Gradient', 'Hessian', 'Chain rule', 'Optimization'], outcomes: 'CO2: Apply calculus to ML' },
            { num: 3, title: 'Probability', hours: 8, topics: ['Random variables', 'Distributions', 'Expectation', 'Variance', 'Bayes theorem'], outcomes: 'CO3: Apply probability' },
            { num: 4, title: 'Statistics', hours: 8, topics: ['Descriptive statistics', 'Hypothesis testing', 'Confidence intervals', 'Regression'], outcomes: 'CO4: Apply statistical methods' },
            { num: 5, title: 'Optimization', hours: 8, topics: ['Gradient descent', 'Convex optimization', 'Lagrange multipliers', 'Constrained optimization'], outcomes: 'CO5: Apply optimization' }
        ],
        textbooks: ['Mathematics for Machine Learning - Deisenroth', 'Linear Algebra - Gilbert Strang']
    },

    // ==================== CSBS SEMESTER 3-4 ====================
    'BCSBS301': {
        name: 'Mathematics for Computer Science',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Apply discrete mathematics', 'Understand graph theory', 'Apply probability'],
        modules: [
            { num: 1, title: 'Logic & Proofs', hours: 8, topics: ['Propositional logic', 'Predicate logic', 'Proof techniques', 'Mathematical induction'], outcomes: 'CO1: Construct mathematical proofs' },
            { num: 2, title: 'Sets & Relations', hours: 8, topics: ['Set theory', 'Relations', 'Equivalence relations', 'Partial orders'], outcomes: 'CO2: Apply set theory' },
            { num: 3, title: 'Functions & Counting', hours: 8, topics: ['Functions', 'Permutations', 'Combinations', 'Pigeonhole principle'], outcomes: 'CO3: Apply counting principles' },
            { num: 4, title: 'Graph Theory', hours: 8, topics: ['Graphs', 'Trees', 'Shortest paths', 'Graph coloring'], outcomes: 'CO4: Apply graph theory' },
            { num: 5, title: 'Probability', hours: 8, topics: ['Probability', 'Random variables', 'Distributions', 'Expected value'], outcomes: 'CO5: Apply probability' }
        ],
        textbooks: ['Discrete Mathematics - Kenneth Rosen', 'Discrete Mathematics - Tremblay & Manohar']
    },

    // ==================== BT SEMESTER 3-4 ====================
    'BBT301': {
        name: 'Biochemistry',
        credit: 4, cie: 50, see: 50, total: 100,
        objectives: ['Understand biomolecules', 'Analyze metabolic pathways', 'Apply enzymology'],
        modules: [
            { num: 1, title: 'Carbohydrates', hours: 8, topics: ['Monosaccharides', 'Disaccharides', 'Polysaccharides', 'Glycosidic bonds', 'Properties'], outcomes: 'CO1: Classify carbohydrates' },
            { num: 2, title: 'Proteins', hours: 8, topics: ['Amino acids', 'Protein structure', 'Protein folding', 'Protein sequencing'], outcomes: 'CO2: Analyze protein structure' },
            { num: 3, title: 'Lipids', hours: 8, topics: ['Fatty acids', 'Triglycerides', 'Phospholipids', 'Steroids', 'Membranes'], outcomes: 'CO3: Classify lipids' },
            { num: 4, title: 'Enzymes', hours: 8, topics: ['Enzyme classification', 'Kinetics', 'Michaelis-Menten', 'Inhibition', 'Regulation'], outcomes: 'CO4: Analyze enzyme kinetics' },
            { num: 5, title: 'Metabolism', hours: 8, topics: ['Glycolysis', 'Krebs cycle', 'Electron transport', 'Oxidative phosphorylation'], outcomes: 'CO5: Trace metabolic pathways' }
        ],
        textbooks: ['Lehninger Principles of Biochemistry', 'Biochemistry - Stryer']
    }
};

// Merge with main SyllabusData if available
if (typeof window !== 'undefined') {
    window.SyllabusExtended = SyllabusExtended;
    if (window.SyllabusData) {
        Object.assign(window.SyllabusData, SyllabusExtended);
    }
}
