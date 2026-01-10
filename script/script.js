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

// MOVIL
// FUNCION DROPDOWN 
// 1. Toggle simplificado 
function toggleElement(menu, arrow) {
  const isHidden = menu.style.display !== "flex";
  menu.style.display = isHidden ? "flex" : "none";
  arrow.style.transform = `rotate(${isHidden ? 180 : 0}deg)`;
}

// 2. Lógica unificada
[
  { btn: difficultyMobileBtn, menu: dropdowns.difficulty, arrow: arrows[0] },
  { btn: modeMobileBtn, menu: dropdowns.mode, arrow: arrows[1] }
].forEach(({ btn, menu, arrow }) => {
  const btnText = btn.querySelector(".btn-text");
  const opciones = menu.querySelectorAll(".select");

  btn.addEventListener("click", () => toggleElement(menu, arrow));

  opciones.forEach(opcion => {
    opcion.addEventListener("click", () => {
      // Sincroniza clases y accesibilidad en un solo paso
      opciones.forEach(opt => {
        const isSelected = opt === opcion;
        opt.classList.toggle("active", isSelected);
        opt.setAttribute("aria-selected", isSelected);
      });

      if (btnText) btnText.textContent = opcion.dataset.value;
      toggleElement(menu, arrow); // Cierra y gira flecha
    });
  });
});








