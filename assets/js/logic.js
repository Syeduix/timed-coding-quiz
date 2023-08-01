var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var timerDisplay = document.getElementById("time");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var feedbackContainer = document.getElementById("feedback");
var finalScoreDisplay = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");

var currentQuestionIndex = 0;
var timeLeft = 0;
var timePerQuestion = 15;
var timerInterval;

function startQuiz() {
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");

  currentQuestionIndex = 0;
  timeLeft = timePerQuestion * questions.length;

  showQuestion();

  startTimer();
}

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("data-index", index);
    choiceButton.addEventListener("click", checkAnswer);
    choicesContainer.appendChild(choiceButton);
  });
}

function checkAnswer(event) {
  var selectedChoiceIndex = parseInt(event.target.getAttribute("data-index"));
  var currentQuestion = questions[currentQuestionIndex];

  if (selectedChoiceIndex === currentQuestion.correctIndex) {
    feedbackContainer.textContent = "Correct!";
  } else {
    feedbackContainer.textContent = "Incorrect!";
    timeLeft -= 10;
  }

  feedbackContainer.classList.remove("hide");
  setTimeout(() => {
    feedbackContainer.classList.add("hide");
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }, 1000); //
}

function endQuiz() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "0";

  var finalScore = timeLeft;

  finalScoreDisplay.textContent = finalScore;

  questionsScreen.classList.add("hide");
  endScreen.classList.remove("hide");
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
    } else {
      endQuiz();
    }
  }, 1000);
}

var startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", () => {});
