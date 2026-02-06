// ats.js
const jobKeywords = [
    "javascript", "html", "css", "node",
    "react", "python", "java",
    "communication", "teamwork", "project"
];

function calculateATS(resumeText) {
    let score = 0;
    let matched = 0;

    jobKeywords.forEach(keyword => {
        if (resumeText.toLowerCase().includes(keyword)) {
            matched++;
        }
    });

    score = Math.round((matched / jobKeywords.length) * 100);
    return score;
}

module.exports = calculateATS;

