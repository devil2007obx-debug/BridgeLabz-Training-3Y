// Q3. Monthly Expense Tracker
// Total, average and final amount after 10% tax. Updates live while typing.

const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];

function calculate() {
  Output.clear();

  // Array of expenses for the 5 categories
  const expenses = [];
  for (let i = 0; i < categories.length; i++) {
    expenses.push(Number($("exp" + i).value) || 0);
  }

  // Add everything up with the += assignment operator
  let total = 0;
  for (const amount of expenses) {
    total += amount;
  }

  const average = total / expenses.length;

  // Add 10% tax using assignment operators
  let finalAmount = total;
  finalAmount += total * 0.10;

  Output.table(categories.map((name, i) => ({ Category: name, Amount: expenses[i].toFixed(2) })));
  Output.log(`Total expense   : ₹${total.toFixed(2)}`);
  Output.log(`Average expense : ₹${average.toFixed(2)}`);
  Output.log(`Final after 10% tax: ₹${finalAmount.toFixed(2)}`, "good");
}

$("form").addEventListener("submit", (event) => { event.preventDefault(); calculate(); });
// Dynamic update: recalculate on every keystroke. Console.log fires each time too.
$("form").addEventListener("input", calculate);
calculate();
