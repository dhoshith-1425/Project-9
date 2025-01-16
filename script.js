const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2,
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "12"],
    correct: 1,
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "Java", "C++"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.onclick = () => selectAnswer(index);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctIndex = currentQuestion.correct;

  document.querySelectorAll(".option").forEach((btn, index) => {
    btn.disabled = true;
    btn.style.background = index === correctIndex ? "green" : index === selectedIndex ? "red" : "";
  });

  if (selectedIndex === correctIndex) score++;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quiz.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.onclick = () => {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quiz.classList.remove("hidden");
  loadQuestion();
};

loadQuestion();
