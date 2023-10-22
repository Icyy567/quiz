const btn1 = document.getElementById('btn-1');
const section1 = document.getElementById('section-1');
const nameInput = document.getElementById('nameInput');
var textElement = document.getElementById('greeting');
const section2 = document.getElementById('section-2');
const btn2 = document.getElementById('proceed');
const quizApp = document.getElementById('app');
const hamburger = document.getElementById('hamburger');


// TOGGLING THE SECTIONS
btn1.addEventListener('click', () => {
    section1.classList.toggle('inactive');
    section2.classList.toggle('active');
})

// ADDING THE INACTIVE CLASS ON THE PROCEED BUTTON
btn2.addEventListener('click', () => {
    // section2.classList.remove('active');
    section2.classList.add('inactive');
    quizApp.classList.add('active');
})

// ADDING A FUNCTION TO DISPLAY ANY NAME THE USER INPUTS IN THE INPUT
function repeatvalue() {
    textElement.innerHTML = "HELLO  " + nameInput.value.toUpperCase() + "!";
}

// ADDING THE CLICKING EFFECT ON THE FUNCTION CREATED ABOVE
btn1.addEventListener('click', repeatvalue);

hamburger.addEventListener('click', () => {
    quizApp.classList.add('inactive');
    section1.classList.toggle('active');
});

// THE QUESTIONS FOR THE QUIZZ APP
const question = [{
        question: "Which is the largest animal in the world?",
        answer: [{
                text: "Shark",
                correct: false
            },
            {
                text: "Blue Whale",
                correct: true
            },
            {
                text: "Elephant",
                correct: false
            },
            {
                text: "Giraffe",
                correct: false
            },
        ]

    },

    {
        question: "Which is the smallest country in the world?",
        answer: [{
                text: "Vatican City",
                correct: true
            },
            {
                text: "Bhutan",
                correct: false
            },
            {
                text: "Napal",
                correct: false
            },
            {
                text: "Shri Lanka",
                correct: false
            },
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answer: [{
                text: "Kalahari",
                correct: false
            },
            {
                text: "Gobi",
                correct: true
            },
            {
                text: "Sahara",
                correct: false
            },
            {
                text: "Antarctica",
                correct: true
            },
        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answer: [{
                text: "Asia",
                correct: false
            },
            {
                text: "Australia",
                correct: true
            },
            {
                text: "Arctic",
                correct: false
            },
            {
                text: "Africa",
                correct: false
            },
        ]
    }
]


// CODES FOR THE QUIZ APP

const answerButton = document.getElementById('answer-buttons');
const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');

let currentQuestionindex = 0;
let score = 0;

// FUNCTION

function startQuiz() {
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectkAnswer);
    });
}


function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectkAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.classList.correct === 'true') {
            button.classList.add('correct');
        }

        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length}! ${nameInput.value.toUpperCase()}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionindex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();