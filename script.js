document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    displaySavedNotes();
    displayQuiz();
    addEventListeners();
});

function addEventListeners() {
    const orderButton = document.getElementById('order');
    const dissertationButton = document.getElementById('dissertation');
    const assignmentButton = document.getElementById('assignment');
    const inquiryButton = document.getElementById('inquiry');
    const freeVideoButton = document.getElementById('free-video');
    const submitQuizButton = document.getElementById('submit-quiz');

    if (orderButton) {
        orderButton.addEventListener('click', function() {
            chrome.tabs.create({url: 'https://academicexpert.uk/order-now/'});
        });
    }
    if (dissertationButton) {
        dissertationButton.addEventListener('click', function() {
            chrome.tabs.create({url: 'https://academicexpert.uk/dissertation-writing/'});
        });
    }
    if (assignmentButton) {
        assignmentButton.addEventListener('click', function() {
            chrome.tabs.create({url: 'https://academicexpert.uk/cheap-assignment-writing-services/'});
        });
    }
    if (inquiryButton) {
        inquiryButton.addEventListener('click', function() {
            chrome.tabs.create({url: 'https://tawk.to/chat/6475c68b74285f0ec46e6882/1h1m0v4m9'});
        });
    }
    if (freeVideoButton) {
        freeVideoButton.addEventListener('click', function() {
            window.location.href = 'video.html';
        });
    }
    if (submitQuizButton) {
        submitQuizButton.addEventListener('click', function() {
            let score = 0;
            quizData.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
                if (selectedOption && selectedOption.value === q.answer) {
                    score++;
                }
            });
            document.getElementById('quiz-result').innerText = `You scored ${score} out of ${quizData.length}`;
        });
    }
}

function displaySavedNotes() {
    const savedNotesElement = document.getElementById('saved-notes');
    if (savedNotesElement) {
        const savedNotes = localStorage.getItem('quickNotes');
        savedNotesElement.innerText = savedNotes ? savedNotes : 'No notes saved.';
    }
}

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "Mark Twain", "Charles Dickens"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    }
];

function displayQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    console.log("Quiz container:", quizContainer);
    if (quizContainer) {
        quizContainer.innerHTML = quizData.map((q, index) => `
            <div class="quiz-question">
                <h4>${q.question}</h4>
                ${q.options.map(option => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `).join('');
        console.log("Quiz questions added");
    }
}
