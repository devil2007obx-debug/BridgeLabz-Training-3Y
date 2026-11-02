// Q7. Smart Guessing Game (1-50)

let secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function startGame() {
  secretNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 0;
  $("attempts").textContent = "Attempts: 0";
  Output.clear();
  Output.log("New game started. I picked a number between 1 and 50.", "info");
  console.log("(Cheat for testing) secret number:", secretNumber);
}

$("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const userGuess = Number($("userGuess").value);

  // Nested if: first check the guess is valid, then compare it
  if ($("userGuess").value !== "" && userGuess >= 1 && userGuess <= 50) {
    attempts++;
    $("attempts").textContent = `Attempts: ${attempts}`;

    if (userGuess === secretNumber) {
      Output.log(`${userGuess}: Correct guess! You needed ${attempts} attempt(s).`, "good");
    } else {
      if (Math.abs(userGuess - secretNumber) <= 3) {
        Output.log(`${userGuess}: Very close!`, "warn");
      } else {
        if (userGuess > secretNumber) {
          Output.log(`${userGuess}: Too high`, "bad");
        } else {
          Output.log(`${userGuess}: Too low`, "bad");
        }
      }
    }
  } else {
    Output.log("Enter a whole number between 1 and 50.", "bad");
  }
});

$("newGame").addEventListener("click", startGame);
startGame();
