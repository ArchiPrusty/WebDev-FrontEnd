
const quizData = [
  {
  question: "Which planet has the longest day in our solar system?",
  options: ["Venus", "Jupiter", "Neptune", "Earth"],
  answer: "Venus"
  },
  {
    question: "On which planet is it believed that it rains diamonds?",
    options: ["Venus", "Mars", "Saturn", "Mercury"],
    answer: "Saturn"
  },
  {
    question: "What type of galaxy is the Milky Way?",
    options: ["Elliptical", "Irregular", "Spiral", "Lenticular"],
    answer: "Spiral"
  },
  {
    question: "Which galaxy is expected to collide with the Milky Way in the future?",
    options: ["Triangulum", "Messier 87", "Whirlpool Galaxy", "Andromeda"],
    answer: "Andromeda"
  },
  {
    question: "Who is known as the 'Father of the Indian Space Program'?",
    options: ["A.P.J. Abdul Kalam", "K. Sivan", "Vikram Sarabhai", "Satish Dhawan"],
    answer: "Vikram Sarabhai"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuiz() {
  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;
  answerBtns.forEach((btn, index) => {
    btn.innerText = current.options[index];
    btn.onclick = () => {
      if (btn.innerText === current.answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        showResult();
      }
    };
  });
}

function showResult() {
  document.getElementById("quiz").innerHTML = `
    <h2>You scored ${score}/${quizData.length}</h2>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

loadQuiz();
