/**
 * Braintube - Branch Routes
 */

const express = require('express');
const router = express.Router();

// Branch data
const branches = [
    { id: 'cse', name: 'CSE', fullName: 'Computer Science & Engineering', icon: '💻', subjects: 48, documents: 500 },
    { id: 'ece', name: 'ECE', fullName: 'Electronics & Communication', icon: '📡', subjects: 46, documents: 450 },
    { id: 'eee', name: 'EEE', fullName: 'Electrical & Electronics', icon: '⚡', subjects: 44, documents: 420 },
    { id: 'me', name: 'ME', fullName: 'Mechanical Engineering', icon: '⚙️', subjects: 48, documents: 480 },
    { id: 'cv', name: 'CV', fullName: 'Civil Engineering', icon: '🏗️', subjects: 46, documents: 440 },
    { id: 'ise', name: 'ISE', fullName: 'Information Science', icon: '🖥️', subjects: 48, documents: 490 },
    { id: 'aiml', name: 'AI & ML', fullName: 'AI & Machine Learning', icon: '🤖', subjects: 42, documents: 380 },
    { id: 'aids', name: 'AI & DS', fullName: 'AI & Data Science', icon: '📊', subjects: 42, documents: 360 }
];

// Get all branches
router.get('/', (req, res) => {
    res.json({
        success: true,
        count: branches.length,
        data: branches
    });
});

// Get single branch
router.get('/:id', (req, res) => {
    const branch = branches.find(b => b.id === req.params.id);

    if (!branch) {
        return res.status(404).json({ success: false, error: 'Branch not found' });
    }

    res.json({
        success: true,
        data: branch
    });
});

// Get semesters for a branch
router.get('/:id/semesters', (req, res) => {
    const branch = branches.find(b => b.id === req.params.id);

    if (!branch) {
        return res.status(404).json({ success: false, error: 'Branch not found' });
    }

    const semesters = [
        { id: 1, name: 'Semester 1', type: 'Physics Cycle' },
        { id: 2, name: 'Semester 2', type: 'Chemistry Cycle' },
        { id: 3, name: 'Semester 3', type: 'Core' },
        { id: 4, name: 'Semester 4', type: 'Core' },
        { id: 5, name: 'Semester 5', type: 'Core' },
        { id: 6, name: 'Semester 6', type: 'Core' },
        { id: 7, name: 'Semester 7', type: 'Electives' },
        { id: 8, name: 'Semester 8', type: 'Project' }
    ];

    res.json({
        success: true,
        branch: branch.name,
        data: semesters
    });
});

module.exports = router;
