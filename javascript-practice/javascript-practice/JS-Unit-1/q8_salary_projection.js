// Q8. Employee Salary Projection (5 years)

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Output.clear();

  const currentSalary = Number($("salary").value);
  const incrementRate = Number($("rate").value); // in percent

  if ($("salary").value === "" || $("rate").value === "" || currentSalary < 0 || incrementRate < 0 || Number.isNaN(currentSalary) || Number.isNaN(incrementRate)) {
    Output.log("Enter a valid salary and increment rate.", "bad");
    return;
  }

  let salary = currentSalary;
  const projection = [];

  for (let year = 1; year <= 5; year++) {
    const increment = Math.round((salary * incrementRate) / 100);
    salary += increment; // assignment operator adds the yearly increment
    projection.push({
      Year: year,
      Increment: `₹${increment}`,
      Salary: `₹${Math.round(salary)}`
    });
  }

  Output.log(`Starting salary: ₹${currentSalary} | Increment: ${incrementRate}% per year`, "info");
  Output.table(projection);
});
