/**
 * Braintube - Subject Routes
 */

const express = require('express');
const router = express.Router();

// Subject data
const subjects = {
    'cse-3': [
        { code: 'BCS301', name: 'Mathematics for Computer Science', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS302', name: 'Digital Design & Computer Organization', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS303', name: 'Operating Systems', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS304', name: 'Data Structures and Applications', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS305A', name: 'Object Oriented Programming with Java', credits: 3, hasNotes: true, hasQP: true, hasFix: false }
    ],
    'cse-4': [
        { code: 'BCS401', name: 'Analysis & Design of Algorithms', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS402', name: 'Microcontrollers', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS403', name: 'Database Management Systems', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS404', name: 'Discrete Mathematical Structures', credits: 4, hasNotes: true, hasQP: true, hasFix: true }
    ],
    'cse-5': [
        { code: 'BCS501', name: 'Software Engineering', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS502', name: 'Computer Networks', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS503', name: 'Theory of Computation', credits: 4, hasNotes: true, hasQP: true, hasFix: false },
        { code: 'BCS504', name: 'Artificial Intelligence', credits: 3, hasNotes: true, hasQP: true, hasFix: true }
    ],
    'cse-6': [
        { code: 'BCS601', name: 'System Software & Compilers', credits: 4, hasNotes: true, hasQP: true, hasFix: true },
        { code: 'BCS602', name: 'Computer Graphics', credits: 4, hasNotes: true, hasQP: true, hasFix: false },
        { code: 'BCS603', name: 'Machine Learning', credits: 4, hasNotes: true, hasQP: true, hasFix: true }
    ]
};

// Get subjects by branch and semester
router.get('/:branchId/:semester', (req, res) => {
    const { branchId, semester } = req.params;
    const key = `${branchId}-${semester}`;
    const subjectList = subjects[key] || [];

    res.json({
        success: true,
        branch: branchId.toUpperCase(),
        semester: parseInt(semester),
        count: subjectList.length,
        data: subjectList
    });
});

// Get single subject details
router.get('/:branchId/:semester/:code', (req, res) => {
    const { branchId, semester, code } = req.params;
    const key = `${branchId}-${semester}`;
    const subjectList = subjects[key] || [];
    const subject = subjectList.find(s => s.code === code);

    if (!subject) {
        return res.status(404).json({ success: false, error: 'Subject not found' });
    }

    // Add resources info
    const enrichedSubject = {
        ...subject,
        resources: {
            notes: [
                { title: 'Module 1 Notes', size: '2.5 MB', type: 'PDF' },
                { title: 'Module 2 Notes', size: '3.1 MB', type: 'PDF' },
                { title: 'Module 3 Notes', size: '2.8 MB', type: 'PDF' },
                { title: 'Module 4 Notes', size: '4.2 MB', type: 'PDF' },
                { title: 'Module 5 Notes', size: '3.5 MB', type: 'PDF' }
            ],
            questionPapers: [
                { title: 'Dec/Jan 2025-26', hasSolution: true },
                { title: 'June/July 2025', hasSolution: true },
                { title: 'Dec/Jan 2024-25', hasSolution: true }
            ]
        }
    };

    res.json({
        success: true,
        data: enrichedSubject
    });
});

module.exports = router;
