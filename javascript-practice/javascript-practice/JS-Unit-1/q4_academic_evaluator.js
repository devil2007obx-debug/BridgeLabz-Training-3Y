// Q4. Academic Performance Evaluator

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Output.clear();

  // Marks of 5 subjects in an array
  const marks = [];
  for (let i = 0; i < 5; i++) {
    marks.push(Number($("m" + i).value));
  }

  // Validation: every mark must be a number from 0 to 100
  if (marks.some((m) => Number.isNaN(m) || m < 0 || m > 100)) {
    Output.log("Enter valid marks between 0 and 100 for all 5 subjects.", "bad");
    return;
  }

  const totalMarks = marks.reduce((sum, m) => sum + m, 0);
  const average = totalMarks / marks.length;
  const percentage = (totalMarks / (marks.length * 100)) * 100;
  const failedASubject = marks.some((m) => m < 35); // any subject below 35

  Output.log(`Marks      : ${marks.join(", ")}`);
  Output.log(`Total      : ${totalMarks} / ${marks.length * 100}`);
  Output.log(`Average    : ${average.toFixed(2)}`);
  Output.log(`Percentage : ${percentage.toFixed(2)}%`);

  let result;
  let tone;
  if (failedASubject || percentage < 50) {
    result = failedASubject ? "Detained (a subject is below 35)" : "Detained";
    tone = "bad";
  } else if (percentage >= 85) {
    result = "Promoted with Distinction";
    tone = "good";
  } else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
    tone = "good";
  }
  Output.log(`Result     : ${result}`, tone);
});
