// Q9. Random Math Quiz Generator

let current = null; // holds the current question { a, b, operator, correct }

function randomNumber() {
  return Math.floor(Math.random() * 20) + 1; // 1 to 20
}

function newQuestion() {
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const a = randomNumber();
  const b = randomNumber();

  // Calculate the correct answer with a switch statement
  let correct;
  switch (operator) {
    case "+": correct = a + b; break;
    case "-": correct = a - b; break;
    case "*": correct = a * b; break;
    case "/": correct = (a / b).toFixed(2); break; // rounded to 2 decimals (string)
    default:  correct = NaN;
  }

  current = { a, b, operator, correct };
  $("question").textContent = `${a} ${operator} ${b} = ?`;
  $("answer").value = "";

  Output.clear();
  Output.log(`Question       : ${a} ${operator} ${b}`);
  Output.log(`Correct answer : ${correct}`, "info");
}

$("form").addEventListener("submit", (event) => {
  event.preventDefault();

  if ($("answer").value === "") {
    Output.log("Type an answer first.", "bad");
    return;
  }

  const userAnswer = Number($("answer").value);
  // Small tolerance because the division answer is rounded to 2 decimals
  if (Math.abs(userAnswer - Number(current.correct)) < 0.01) {
    Output.log(`Your answer ${userAnswer}: Correct!`, "good");
  } else {
    Output.log(`Your answer ${userAnswer}: Wrong. The answer is ${current.correct}.`, "bad");
  }
});

$("newQuestion").addEventListener("click", newQuestion);
newQuestion();
