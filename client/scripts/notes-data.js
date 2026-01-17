/**
 * Notes Data - Module-wise PDF Links
 * Maps subject codes to their note PDFs
 */

const notesData = {
    // BCS701 - Internet of Things
    'BCS701': {
        subjectName: 'Internet of Things',
        branch: 'CSE',
        semester: 7,
        modules: [
            {
                module: 1,
                title: 'Introduction to IoT',
                pdf: '/assets/notes/BCS701/IOT_BCS701_MOD1_NOTES.pdf'
            },
            {
                module: 2,
                title: 'IoT Architecture',
                pdf: '/assets/notes/BCS701/IOT_BCS701_MOD2_NOTES.pdf'
            },
            {
                module: 3,
                title: 'IoT Protocols',
                pdf: '/assets/notes/BCS701/IOT_BCS701_MOD3_NOTES.pdf'
            },
            {
                module: 4,
                title: 'IoT Physical Devices',
                pdf: '/assets/notes/BCS701/IOT_BCS701_MOD4_NOTES.pdf'
            },
            {
                module: 5,
                title: 'IoT Applications',
                pdf: '/assets/notes/BCS701/IOT_BCS701_MOD5_NOTES.pdf'
            }
        ]
    },

    // BCS702 - Parallel Computing
    'BCS702': {
        subjectName: 'Parallel Computing',
        branch: 'CSE',
        semester: 7,
        modules: [
            {
                module: 1,
                title: 'Introduction to Parallel Computing',
                pdf: '/assets/notes/BCS702/PC_BCS702_MOD1_NOTES.pdf'
            },
            {
                module: 2,
                title: 'Parallel Architectures',
                pdf: '/assets/notes/BCS702/PC_BCS702_MOD2_NOTES.pdf'
            },
            {
                module: 3,
                title: 'Parallel Programming',
                pdf: '/assets/notes/BCS702/PC_BCS702_MOD3_NOTES.pdf'
            },
            {
                module: 4,
                title: 'Parallel Algorithms',
                pdf: '/assets/notes/BCS702/PC_BCS702_MOD4_NOTES.pdf'
            },
            {
                module: 5,
                title: 'GPU Computing',
                pdf: '/assets/notes/BCS702/PC_BCS702_MOD5_NOTES.pdf'
            }
        ]
    },

    // BEC703 - Wireless Communication
    'BEC703': {
        subjectName: 'Wireless Communication',
        branch: 'ECE',
        semester: 7,
        modules: [
            {
                module: 1,
                title: 'Principles of Wireless Communication',
                pdf: '/assets/notes/BEC703/BEC703- Module 1 Principles of Wireless Communication.pdf'
            },
            {
                module: 2,
                title: 'CDMA',
                pdf: '/assets/notes/BEC703/BEC703- Module 2 CDMA (1).pdf'
            },
            {
                module: 3,
                title: 'Evolution of Cellular Technologies',
                pdf: '/assets/notes/BEC703/BEC703- Module 3 Evolution of Cellular Technologies.pdf'
            },
            {
                module: 4,
                title: 'MIMO Wireless Communications',
                pdf: '/assets/notes/BEC703/BEC703 _Module 4 MIMO Wireless Communications.pdf'
            },
            {
                module: 5,
                title: 'Overview and Channel Structure of LTE',
                pdf: '/assets/notes/BEC703/Module 5 Overview and Channel Structure of LTE.pdf'
            }
        ]
    },

    // BEE703 - Power System Analysis
    'BEE703': {
        subjectName: 'Power System Analysis',
        branch: 'EEE',
        semester: 7,
        modules: [
            {
                module: 1,
                title: 'Network Topology',
                pdf: '/assets/notes/BEE703/Lecture Notes_BEE703_Module-1_Network Topology.pdf'
            },
            {
                module: 2,
                title: 'Load Flow Analysis',
                pdf: '/assets/notes/BEE703/Lecture Notes_BEE703_Module-2_Load Flow Analysis.pdf'
            },
            {
                module: 3,
                title: 'Load Flow Analysis (Continued)',
                pdf: '/assets/notes/BEE703/Lecture Notes_BEE703_Module-3_Load Flow Analysis(continued)_Dr.R.Gunasekari.pdf'
            },
            {
                module: 4,
                title: 'Economic Operation of Power System',
                pdf: '/assets/notes/BEE703/Lecture Notes_BEE703_Module-4_Economic Operation of Power System and Unit Commitment_Dr.R.Gunasekari.pdf'
            },
            {
                module: 5,
                title: 'Symmetrical Fault Analysis & Power System Stability',
                pdf: '/assets/notes/BEE703/Lecture Notes_BEE703_Module-5_Symmetrical Fault Analysis and Power System Stability_Dr.R.Gunasekari.pdf'
            }
        ]
    }
};

// Function to get notes for a subject
function getSubjectNotes(subjectCode) {
    return notesData[subjectCode] || null;
}

// Function to get all available subjects with notes
function getAvailableNotes() {
    return Object.keys(notesData).map(code => ({
        code,
        ...notesData[code]
    }));
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { notesData, getSubjectNotes, getAvailableNotes };
}
