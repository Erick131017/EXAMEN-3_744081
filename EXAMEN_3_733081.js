
// Selecciona elementos del DOM para interactuar con ellos posteriormente
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

// Inicializa variables de estado
let guessCount = 1;
let resetButton;

// Función para verificar el intento del usuario
function checkGuess() {
  // Obtiene el valor ingresado por el usuario y lo convierte a un número
  let userGuess = Number(guessField.value);
  
  // Actualiza la interfaz de usuario basada en el intento del usuario
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    // Si el usuario adivina el número, muestra un mensaje de felicitaciones
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    // Si el usuario alcanza el límite máximo de intentos, muestra un mensaje de fin de juego
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver();
  } else {
    // Si el usuario no adivina el número, muestra un mensaje de error y pistas
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "¡El número es muy bajo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "¡El número es muy grande!";
    }
  }

  // Incrementa el contador de intentos y limpia el campo de entrada
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

// Agrega un evento al botón de envío de intento
guessSubmit.addEventListener("click", checkGuess);

// Función para manejar el final del juego
function setGameOver() {
  // Deshabilita la entrada del usuario y muestra un botón de reinicio
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

// Función para restablecer el juego
function resetGame() {
  // Reinicia las variables de estado, elimina los resultados anteriores, habilita la entrada del usuario y genera un nuevo número aleatorio
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Bucle que imprime los números del 1 al 20 en la consola
for (let i = 1; i < 21; i++) {
  console.log(i);
}

// Selecciona elementos del DOM y limpia su contenido
const resetParas = document.querySelectorAll(".resultParas p");
for (let i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = "";
}

// Pone el foco en el campo de entrada de adivinanza
guessField.focus();

// Selecciona el campo de entrada de adivinanza y le asigna un valor predeterminado
const guessField = document.querySelector(".guessField");
guessField.focus();
guessField.value = "Hola";

// Manipulación de estilo del elemento guesses
guesses.value;
guesses.textContent = "¿Dónde está mi párrafo?";
guesses.style.backgroundColor = "yellow";
guesses.style.fontSize = "200%";
guesses.style.padding = "10px";
guesses.style.boxShadow = "3px 3px 6px black";
