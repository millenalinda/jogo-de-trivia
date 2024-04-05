
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralhar as perguntas antes de iniciar o jogo
shuffleQuestions(questions);

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('score').textContent = `Pontuação: ${score}`;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert(`Quiz Finalizado! Sua pontuação é ${score}/${questions.length}`);
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = `Pontuação: ${score}`;
    displayQuestion();
}

displayQuestion();