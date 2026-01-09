// Variables de estado del test
let currentText = "";
let userInput = "";
let startTime = null;
let timerInterval = null;
let isTestActive = false;
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

// Variables de configuración
let currentDifficulty = "Easy";
let currentMode = "15s";
let timeLimit = 15;
let isPassageMode = false;

// Variables para almacenamiento
let personalBest = 0;
const personalBestKey = "typingTestPersonalBest";

// Elementos DOM - Estadísticas en tiempo real
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const timeElement = document.getElementById("time");

// Elementos DOM - Área de escritura
const textInputElement = document.getElementById("text-input");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

// Elementos DOM - Configuración móvil
const difficultyMobileBtn = document.getElementById("difficulty-mobile-btn");
const modeMobileBtn = document.getElementById("mode-mobile-btn");
const arrows = document.querySelectorAll(".arrow");
const dropdownDifficulty = document.querySelector(".dropdown-difficulty");
const dropdownMode = document.querySelector(".dropdown-mode");
const dropdowns = {
  difficulty: dropdownDifficulty,
  mode: dropdownMode,
};

// Elementos DOM - Configuración desktop
const difficultyButtons = document.querySelectorAll(".btn-difficulty");
const modeButtons = document.querySelectorAll(".btn-mode");

// Elementos DOM - Resultados finales
const testCompleteSection = document.querySelector(".test-complete");
const wpmCompleteElement = document.getElementById("wpm-complete");
const accuracyCompleteElement = document.getElementById("accuracy-complete");
const correctElement = document.getElementById("Correct");
const incorrectElement = document.getElementById("Incorrect");
const goAgainBtn = document.getElementById("go-again-btn");

// Elementos DOM - Récord personal
const pbScoreElement = document.getElementById("pb-score");

// FUNCION DROPDOWN MOVIL
function toggleElement(menu, arrow) {
  const isHidden = menu.style.display === "none" || menu.style.display === "";

  menu.style.display = isHidden ? "flex" : "none";
  arrow.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
}
// Eventos limpios de una sola línea
difficultyMobileBtn.addEventListener("click", () => toggleElement(dropdowns.difficulty, arrows[0]));
modeMobileBtn.addEventListener("click", () => toggleElement(dropdowns.mode, arrows[1]));
