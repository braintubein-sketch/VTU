/* ============================================
   Braintube – VTU AI Tutor Script
   Interactive VTU Knowledge Bot
   ============================================ */

(function () {
    // Inject the CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // Handle path resolution
    const depth = window.location.pathname.split('/').filter(x => x.length > 0).length;
    const prefix = document.querySelector('link[href*="styles/premium.css"]') || document.querySelector('link[href*="styles/theme-v3.css"]');
    let basePath = "";
    if (prefix && prefix.href) {
        if(prefix.href.includes('/styles/')) {
            basePath = prefix.href.split('styles/')[0];
        } else {
             const tDepth = window.location.pathname.includes('pages/blog/') ? '../../' : 
                           window.location.pathname.includes('pages/') ? '../' : './';
             basePath = tDepth;
        }
    } else {
         const tDepth = window.location.pathname.includes('pages/blog/') ? '../../' : 
                       window.location.pathname.includes('pages/') ? '../' : './';
         basePath = tDepth;
    }

    if(!document.querySelector('link[href*="vtu-ai.css"]')) {
         const aiCss = document.createElement('link');
         aiCss.rel = 'stylesheet';
         aiCss.href = basePath + 'styles/vtu-ai.css';
         document.head.appendChild(aiCss);
    }

    // Dynamic Updates State
    let liveUpdates = null;
    async function fetchLiveUpdates() {
        try {
            const response = await fetch(basePath + 'data/vtu-updates.json');
            if (response.ok) {
                liveUpdates = await response.json();
                console.log('VTU AI: Live updates loaded', liveUpdates.lastUpdated);
            }
        } catch (e) {
            console.warn('VTU AI: Could not load live updates');
        }
    }
    fetchLiveUpdates();

    // Comprehensive VTU Knowledge Base
    const vtuKnowledge = [
        // Data Structures
        { keywords: ['merge sort', 'sorting', 'time complexity'], ans: `<strong>Merge Sort (Divide & Conquer)</strong><br><br>• <strong>Best/Avg/Worst Time:</strong> O(n log n)<br>• <strong>Space:</strong> O(n) (Not in-place)<br>• <strong>Stable:</strong> Yes<br><br><strong>Algorithm:</strong> Divides array in half recursively until size 1, then merges sorted halves.<br><span class="ref">↳ VTU CS 3rd Sem - BCS304</span>` },
        { keywords: ['bst', 'binary search tree', 'trees'], ans: `<strong>Binary Search Tree (BST)</strong><br><br>A tree where left child &lt; parent and right child &gt; parent.<br><br>• <strong>Search/Insert Avg:</strong> O(log n)<br>• <strong>Worst Case:</strong> O(n) (Skewed tree)<br>• <strong>Inorder Traversal:</strong> Gives sorted order.<br><span class="ref">↳ VTU CS 3rd Sem - BCS304</span>` },
        { keywords: ['stack', 'push', 'pop', 'lifo'], ans: `<strong>Stack (LIFO Data Structure)</strong><br><br>Last-In, First-Out structure.<br><br><strong>Operations (O(1) time):</strong><br>• push(): Add item<br>• pop(): Remove item<br>• peek(): Top item<br><br><strong>Applications:</strong> Expression evaluation, Reversing string, Recursion (Call stack).<br><span class="ref">↳ VTU CS 3rd Sem - BCS304</span>` },
        
        // Physics
        { keywords: ['laser', 'population inversion', 'einstein'], ans: `<strong>LASER (Light Amplification by Stimulated Emission of Radiation)</strong><br><br><strong>Conditions for Lasing:</strong><br>1. Population Inversion (More atoms in excited state N2 &gt; N1).<br>2. Metastable state (Longer lifetime ~10⁻³s).<br>3. Pumping mechanism (Optical, Electrical).<br><span class="ref">↳ VTU Applied Physics - BPHYS102 (Module 1)</span>` },
        { keywords: ['quantum', 'schrodinger', 'wave equation'], ans: `<strong>Schrödinger Wave Equation</strong><br><br>Describes quantum state of a particle.<br><strong>Time Independent:</strong> ∇²ψ + (8π²m/h²)(E-V)ψ = 0<br><br><strong>Physical significance of ψ:</strong> |ψ|² gives the <em>probability density</em> of finding the particle.<br><span class="ref">↳ VTU Applied Physics (Module 2)</span>` },
        
        // Math
        { keywords: ['taylor', 'maclaurin', 'series'], ans: `<strong>Taylor & Maclaurin Series</strong><br><br><strong>Taylor Series at x=a:</strong><br>f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...<br><br><strong>Maclaurin Series (at x=0):</strong><br>f(x) = f(0) + xf'(0) + x²f''(0)/2! + ...<br><span class="ref">↳ VTU Engg Mathematics 1 - BMATS101</span>` },
        { keywords: ['laplace', 'transform', 'l-transform'], ans: `<strong>Laplace Transform</strong><br><br>Converts time domain f(t) to frequency domain F(s).<br><br>L{e^(at)} = 1/(s-a)<br>L{sin(at)} = a/(s²+a²)<br>L{cos(at)} = s/(s²+a²)<br><span class="ref">↳ VTU Engg Math 3 - BMATE301</span>` },
        
        // Mechanical
        { keywords: ['carnot', 'thermodynamics', 'efficiency'], ans: `<strong>Carnot Cycle & Efficiency</strong><br><br>Ideal theoretical cycle with maximum efficiency.<br><strong>Processes:</strong><br>1-2: Reversible Isothermal Heat Add<br>2-3: Reversible Adiabatic Exp.<br>3-4: Reversible Isothermal Heat Reject<br>4-1: Reversible Adiabatic Comp.<br><br><strong>η = 1 - (T_L / T_H)</strong><br><span class="ref">↳ VTU Thermodynamics - BME304</span>` },
        { keywords: ['mohr', 'stress', 'circle'], ans: `<strong>Mohr's Circle</strong><br><br>Graphical method to find normal and shear stresses on any plane.<br><br>• <strong>Center:</strong> C( (σx+σy)/2 , 0)<br>• <strong>Radius:</strong> R = √[((σx-σy)/2)² + τxy²]<br>• <strong>Max Shear:</strong> Occurs exactly at R.<br><span class="ref">↳ VTU Mechanics of Materials</span>` },

        // Electronics
        { keywords: ['kirchhoff', 'kvl', 'kcl', 'circuit'], ans: `<strong>Kirchhoff’s Laws</strong><br><br><strong>1. KCL (Current Law):</strong> Algebraic sum of currents meeting at a node is zero (ΣI = 0). Conserves Charge.<br><br><strong>2. KVL (Voltage Law):</strong> Algebraic sum of voltages in any closed loop is zero (ΣV = 0). Conserves Energy.<br><span class="ref">↳ VTU Basic Electronics - BBEE103</span>` },
        { keywords: ['op-amp', 'opamp', 'amplifier'], ans: `<strong>Operational Amplifier (Op-Amp)</strong><br><br><strong>Ideal Characteristics:</strong><br>• Infinite Voltage Gain (Av = ∞)<br>• Infinite Input Impedance (Z_in = ∞)<br>• Zero Output Impedance (Z_out = 0)<br>• Infinite Bandwidth<br>• Infinite CMRR<br><span class="ref">↳ VTU Analog Electronics</span>` },
        
        // Civil
        { keywords: ['hooke', 'stress', 'strain', 'elasticity'], ans: `<strong>Hooke's Law</strong><br><br>States that within the elastic limit, stress is directly proportional to strain.<br><br><strong>σ = E × ε</strong><br><br>Where:<br>σ = Stress<br>ε = Strain<br>E = Young's Modulus of Elasticity<br><span class="ref">↳ VTU Strength of Materials</span>` },

        // NEW: CHEMISTRY & 1ST YEAR
        { keywords: ['chemistry', 'corrosion', 'electrode'], ans: `<strong>Engineering Chemistry (BCHEC102/202)</strong><br><br>• <strong>Corrosion:</strong> Electrochemical destruction of metals. <br>• <strong>Prevention:</strong> Galvanization, Anodizing, Cathodic protection.<br>• <strong>Batteries:</strong> Li-ion, Ni-MH fundamentals.<br><span class="ref">↳ VTU 1st Year Cycle</span>` },
        { keywords: ['python', 'programming', 'loop', 'list'], ans: `<strong>Principles of Programming using Python (BPLCK105B)</strong><br><br>• <strong>Basics:</strong> Indentation, Dynamic typing.<br>• <strong>Loops:</strong> for x in range(), while condition:<br>• <strong>Structures:</strong> Lists [ ], Tuples ( ), Dictionaries { }.<br><span class="ref">↳ VTU 1st Year - All Branches</span>` },
        { keywords: ['electrical', 'ohm', 'transformer'], ans: `<strong>Basic Electrical Engg (BBEE103)</strong><br><br>• <strong>Ohms Law:</strong> V = IR<br>• <strong>Transformers:</strong> Static device to step-up/down voltage using Mutual Induction (V1/V2 = N1/N2).<br>• <strong>Motors:</strong> DC, Synchronous, Induction basics.<br><span class="ref">↳ VTU 1st Year Cycle</span>` },

        // VTU RULES & REGULATIONS (EVERYTHING)
        { keywords: ['attendance', '75%', 'shortage'], ans: `<strong>VTU Attendance Policy</strong><br><br>• <strong>Requirement:</strong> 75% minimum in theory and practicals separately.<br>• <strong>Condonation:</strong> Up to 10% on medical grounds (requires Principal approval).<br>• <strong>Shortage:</strong> Below 75% leads to being barred from SEE (Externals).<br><span class="ref">↳ VTU Regulation 16.1</span>` },
        { keywords: ['internal', 'cie', 'ia', 'average'], ans: `<strong>CIE (Continuous Internal Evaluation)</strong><br><br>• <strong>Weightage:</strong> Usually 50 marks.<br>• <strong>Components:</strong> 3 IA Tests, Assignments, Quizzes.<br>• <strong>Threshold:</strong> Minimum 40% (20 marks) is needed to qualify for Semester End Exams.<br><span class="ref">↳ VTU Regulation 2022 Scheme</span>` },
        { keywords: ['malpractice', 'uic', 'cheating'], ans: `<strong>Malpractice Warning</strong><br><br>VTU is extremely strict. Possession of mobile phones, notes, or communicating during exams leads to:<br>• Cancellation of the specific paper.<br>• Barring from exams for 1-2 years in severe cases.<br><em>Stick to your hard work!</em><br><span class="ref">↳ VTU Exam Ethics</span>` },

        // EDUCATION & CAREER (ALL)
        { keywords: ['career', 'job', 'salary', 'placement'], ans: `<strong>VTU Placement Prep</strong><br><br>• <strong>Tier 1/2:</strong> 12 LPA+ (Focus on Data Structures, System Design).<br>• <strong>Service Companies:</strong> 4-7 LPA (Focus on Aptitude, Communication).<br>• <strong>Key:</strong> Maintain 7.5+ CGPA and have 2 solid projects on GitHub.<br><span class="ref">↳ Braintube Career Hub</span>` },
        { keywords: ['internship', 'intershala', 'experience'], ans: `<strong>VTU Mandatory Internship</strong><br><br>As per the 2022 scheme, students must complete internships during semester breaks.<br>• <strong>4th/6th Sem:</strong> 4 weeks minimum.<br>• <strong>Evaluation:</strong> Requires report submission and Viva-Voce.<br><span class="ref">↳ Industrial Connect Program</span>` },
        { keywords: ['gate', 'higher studies', 'mtech', 'ms'], ans: `<strong>GATE Exam Prep</strong><br><br>For PSU jobs or M.Tech in IITs/NITs:<br>• <strong>Syllabus:</strong> Matches VTU core subjects almost 90%.<br>• <strong>Start:</strong> Ideal time is 5th Semester.<br>• <strong>Focus:</strong> Engineering Math (15 marks) and Core Concepts.<br><span class="ref">↳ Higher Education Path</span>` },
        { keywords: ['soft skills', 'interview', 'communication'], ans: `<strong>Soft Skills Development</strong><br><br>Engineering is 50% technical and 50% communication.<br>• Work on <strong>Verbal Ability</strong>.<br>• Practice <strong>Mock Interviews</strong>.<br>• Create a professional <strong>LinkedIn</strong> profile early.<br><span class="ref">↳ Braintube Soft Skills</span>` },

        // VTU Info
        { keywords: ['passing marks', 'pass mark', 'grace'], ans: `<strong>VTU Passing Guidelines (2022 Scheme)</strong><br><br>• <strong>CIE (Internals):</strong> Minimum 20 out of 50 (40%)<br>• <strong>SEE (Externals):</strong> Minimum 18 out of 50 (35%)<br>• <strong>Total:</strong> Minimum 40 out of 100 to pass the subject.<br><br>No grace marks policy currently for regular subjects.<br><span class="ref">↳ Braintube VTU Information</span>` },
        { keywords: ['sgpa', 'cgpa', 'calculator'], ans: `<strong>SGPA & CGPA</strong><br><br>VTU uses a 10-point grading scale (O, A+, A, B+, B, C, P).<br><br><strong>SGPA</strong> = Σ(Credits × Grade Points) / ΣCredits<br><strong>CGPA</strong> = Cumulative of all passed semesters.<br><br>Try our <a href="${basePath}pages/calculator.html">VTU SGPA Calculator</a> to calculate easily.<br><span class="ref">↳ Braintube Tools</span>` },
        { keywords: ['notes', 'pdf', 'study material'], ans: `<strong>Braintube Notes</strong><br><br>You can find perfectly organized, module-wise PDF notes for almost every scheme (2022 & 2025).<br><br>Head over to the <a href="${basePath}pages/branches.html">Branches Page</a>, select your branch and semester to download ad-free notes instantly.<br><span class="ref">↳ Braintube Library</span>` },

        // NEW MARCH 2026 UPDATES & EDUCATION
        { keywords: ['latest update', 'current news', 'vtu news', 'recent update', 'latest circular'], ans: `<strong>Latest VTU Updates (March 2026)</strong><br><br>• <strong>Results:</strong> Dec 2025/Jan 2026 BE/B.Tech Results were declared on <strong>March 3, 2026</strong>. BBA/BCA results followed on March 16.<br>• <strong>Upcoming Exams:</strong> Draft timetables for <strong>June/July 2026</strong> exams are currently being circulated for verification.<br>• <strong>Revaluation:</strong> Expected to open shortly for those who appeared in the Dec/Jan cycle.<br>• <strong>Portal:</strong> Check <a href="https://results.vtu.ac.in" target="_blank">results.vtu.ac.in</a> for official marks.<br><span class="ref">↳ Updated: March 17, 2026</span>` },
        { keywords: ['2025 scheme', 'nep 2025', 'new curriculum'], ans: `<strong>VTU 2025 Scheme Updates</strong><br><br>The 2025 scheme is now in full effect for 1st-year students!<br><br>• <strong>Mandatory AI:</strong> Every engineering branch now includes "Introduction to AI" in the 1st year.<br>• <strong>Skill Focus:</strong> More lab-heavy curriculum with early project exposure.<br>• <strong>CS/CST:</strong> Computer Science & Technology now completely follows the CSE syllabus for uniformity.<br><span class="ref">↳ VTU Academic Council 2026</span>` },
        { keywords: ['result', 'check marks', 'usn'], ans: `<strong>Checking Your VTU Results</strong><br><br>1. Go to <a href="https://results.vtu.ac.in" target="_blank">results.vtu.ac.in</a>.<br>2. Enter your <strong>USN</strong> (University Seat Number).<br>3. Solve the captcha and click Submit.<br><br><em>Note: If the site is slow, try early morning or late night.</em><br><span class="ref">↳ March 2026 Result Cycle</span>` },
        { keywords: ['education', 'tips', 'how to study', 'success', '9 cgpa'], ans: `<strong>Braintube Education Expert Tips</strong><br><br>To excel in VTU:<br>• <strong>Master 3 Modules:</strong> VTU exams follow the 5-module rule. Perfecting 3 modules guarantees a comfortable pass; mastering 4-5 ensures 9+ CGPA.<br>• <strong>Topper Notes:</strong> Standard textbooks can be overwhelming. Use our curated <a href="${basePath}pages/branches.html">Module-wise Topper Notes</a>.<br>• <strong>Old QPs:</strong> 60% of questions are repeated patterns from previous 5 years.<br><span class="ref">↳ Braintube Success Guide</span>` },
        { keywords: ['vtu', 'university', 'what is vtu'], ans: `<strong>About VTU</strong><br><br>Visvesvaraya Technological University (VTU) is one of India's largest technical universities, governing almost all engineering colleges in Karnataka. It is headquartered in Belagavi and named after the legendary engineer Sir M. Visvesvaraya.<br><span class="ref">↳ University Info</span>` }
    ];

    // Build the UI
    const botHTML = `
        <div class="vtu-ai-panel" id="vtuAiPanel">
            <div class="vtu-ai-header">
                <div class="vtu-ai-avatar">B</div>
                <div class="vtu-ai-title">
                    <h3>Braintube AI Tutor</h3>
                    <p><span class="vtu-ai-status"></span> VTU Syllabus Expert</p>
                </div>
                <button class="vtu-ai-close" id="vtuAiClose">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            
            <div class="vtu-ai-body" id="vtuAiBody">
                <div class="vtu-msg bot vtu-msg-pop">
                    <strong>Hi there! 👋</strong><br><br>I'm your AI study partner powered by Braintube.<br><br>I know the entire VTU syllabus. Ask me anything about Data Structures, Physics, Maths, Circuits, or VTU rules!
                </div>
            </div>

            <div class="vtu-ai-suggestions" id="vtuAiSuggestions">
                <div class="vtu-suggestion" onclick="vtuAiAsk('Explain Merge Sort time complexity')">Time complexity of Merge Sort?</div>
                <div class="vtu-suggestion" onclick="vtuAiAsk('What is Schrodinger wave equation?')">Schrödinger wave equation</div>
                <div class="vtu-suggestion" onclick="vtuAiAsk('State Kirchhoffs laws')">Kirchhoff's Laws</div>
                <div class="vtu-suggestion" onclick="vtuAiAsk('What are the VTU passing marks?')">Passing marks?</div>
            </div>

            <div class="vtu-ai-footer">
                <div class="vtu-ai-input-wrap">
                    <input type="text" id="vtuAiInput" placeholder="Ask an engineering concept..." autocomplete="off">
                    <button class="vtu-ai-send" id="vtuAiSend">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </div>
        
        <button class="vtu-ai-btn" id="vtuAiBtn" aria-label="Open AI Tutor">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
    `;

    document.body.insertAdjacentHTML('beforeend', botHTML);

    // Elements
    const btn = document.getElementById('vtuAiBtn');
    const panel = document.getElementById('vtuAiPanel');
    const close = document.getElementById('vtuAiClose');
    const body = document.getElementById('vtuAiBody');
    const input = document.getElementById('vtuAiInput');
    const send = document.getElementById('vtuAiSend');
    const suggestions = document.getElementById('vtuAiSuggestions');

    // Toggle Panel
    btn.addEventListener('click', () => {
        panel.classList.add('active');
        btn.style.transform = 'scale(0) translateY(20px)';
        input.focus();
    });

    close.addEventListener('click', () => {
        panel.classList.remove('active');
        btn.style.transform = 'scale(1) translateY(0)';
    });

    // Helper functions
    function scrollToBottom() {
        body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' });
    }

    function addMessage(text, isUser = false) {
        const div = document.createElement('div');
        div.className = `vtu-msg ${isUser ? 'user' : 'bot'}`;
        div.innerHTML = text;
        body.appendChild(div);
        scrollToBottom();
    }

    function showTyping() {
        const div = document.createElement('div');
        div.className = 'vtu-msg bot';
        div.id = 'vtuAiTyping';
        div.innerHTML = '<div class="vtu-typing"><div class="vtu-typing-dot"></div><div class="vtu-typing-dot"></div><div class="vtu-typing-dot"></div></div>';
        body.appendChild(div);
        scrollToBottom();
    }

    function hideTyping() {
        const t = document.getElementById('vtuAiTyping');
        if (t) t.remove();
    }

    // AI Logic
    function getResponse(query) {
        const q = query.toLowerCase();
        
        // Exact small talk
        if (q === 'hi' || q === 'hello' || q === 'hey') {
            return "Hello! I'm the Braintube VTU AI. How can I help you ace your midterms today? 🚀";
        }
        
        // Handle Live Updates Priority
        if (q.includes('update') || q.includes('news') || q.includes('recent') || q.includes('circular')) {
            if (liveUpdates && liveUpdates.news) {
                let newsHtml = `<strong>Latest VTU Updates (${liveUpdates.lastUpdated})</strong><br><br>`;
                liveUpdates.news.forEach(item => {
                    newsHtml += `• <strong>${item.title}:</strong> ${item.content}${item.link ? ` <a href="${item.link}" target="_blank">Link</a>` : ''}<br>`;
                });
                newsHtml += `<br><span class="ref">↳ Live from VTU Circulars</span>`;
                return newsHtml;
            }
        }

        if (q.includes('who are you') || q.includes('what are you')) {
            return "I am a syllabus-aware AI designed purely for VTU engineering students by the Braintube team. I know physics, math, CS, circuits, and more!";
        }
        
        // Fuzzy Knowledge Base Search
        let bestMatch = null;
        let maxScore = 0;

        vtuKnowledge.forEach(item => {
            let score = 0;
            item.keywords.forEach(kw => {
                if (q.includes(kw)) score += 2;
            });
            if (score > maxScore) {
                maxScore = score;
                bestMatch = item.ans;
            }
        });

        if (bestMatch) {
            return bestMatch;
        }

        // Broad semantic fallbacks
        if (q.includes('update') || q.includes('news')) {
             return vtuKnowledge.find(k => k.keywords.includes('latest update')).ans;
        }
        if (q.includes('study') || q.includes('exam') || q.includes('help')) {
             return vtuKnowledge.find(k => k.keywords.includes('education')).ans;
        }

        // Default Fallback
        return "<strong>I'm still learning! 🧠</strong><br><br>I couldn't find a direct answer for that yet.<br><br>Try asking me about:<br>• <em>Latest updates</em><br>• <em>How to score high?</em><br>• <em>Results 2026</em><br>• <em>Specific subjects (Merge Sort, Thermodynamics, etc.)</em>";
    }

    // Submission
    window.vtuAiAsk = function(text) {
        if (!text.trim()) return;
        
        // Hide suggestions on first message
        if (suggestions.style.display !== 'none') {
            suggestions.style.display = 'none';
        }

        addMessage(text, true);
        input.value = '';
        
        // Fake Thinking Delay (for realism)
        setTimeout(() => {
            showTyping();
            const delay = Math.random() * 800 + 800; // 0.8s to 1.6s
            
            setTimeout(() => {
                hideTyping();
                addMessage(getResponse(text));
            }, delay);
            
        }, 100);
    };

    send.addEventListener('click', () => window.vtuAiAsk(input.value));
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            window.vtuAiAsk(input.value);
        }
    });

})();
