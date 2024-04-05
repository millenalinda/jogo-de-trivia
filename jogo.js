const questionsPerRound = 10;
let questionsAnswered = 0;

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleQuestions(questions);

let currentQuestionIndex = 0;
let score = 0;

function showResult() {
    const resultMessage = `Você respondeu ${questionsAnswered} perguntas e acertou ${score}.`;
    alert(resultMessage);
    score = 0; // Zerar a pontuação
}

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
    
    if (questionsAnswered < questionsPerRound) {
        nextQuestion();
    } else {
        showResult();
    }

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