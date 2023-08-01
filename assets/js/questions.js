var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Leveler",
    ],
    correctIndex: 0,
  },

  {
    question: "What does CSS stand for?",
    choices: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
    ],
    correctIndex: 3,
  },

  {
    question: "Commonly used data types DO Not Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctIndex: 2,
  },

  {
    question: "Arrays in JavaScript can be used to store",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctIndex: 3,
  },

  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctIndex: 2,
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctIndex: 3,
  },
];

var highscoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

function displayHighscores() {
  var highscores = [
    { initials: "ABC", score: 100 },
    { initials: "XYZ", score: 90 },
  ];

  highscores.sort((a, b) => b.score - a.score);

  highscores.forEach((entry, index) => {
    var listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${entry.initials} - ${entry.score}`;
    highscoresList.appendChild(listItem);
  });
}

function clearHighscores() {
  highscoresList.innerHTML = "";
}

clearButton.addEventListener("click", clearHighscores);

displayHighscores();
