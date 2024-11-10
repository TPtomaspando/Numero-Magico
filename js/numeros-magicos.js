let magicNumber = 0;

function startGame() {
  magicNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Numero generado " + magicNumber);
  document.getElementById("gameArea").classList.remove("d-none");
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(userGuess)) {
    alert("Porfavor ingrese un numero valido");
    return;
  }

  if (userGuess === magicNumber) {
    alert("¡Felicidades! Adivinaste el número.");
  } else if (userGuess < magicNumber) {
    alert("El número es mayor.");
  } else {
    alert("El número es menor.");
  }
}

document.getElementById("startGameBtn").addEventListener("click", startGame);
document.getElementById("guessBtn").addEventListener("click", checkGuess);
