// Q6. Progressive Discount System

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Output.clear();

  const total = Number($("total").value);
  if ($("total").value === "" || Number.isNaN(total) || total < 0) {
    Output.log("Enter a valid purchase amount.", "bad");
    return;
  }

  // Pick the discount tier (highest tier first)
  let discountPercent;
  if (total >= 10000) {
    discountPercent = 25;
  } else if (total >= 5000) {
    discountPercent = 15;
  } else if (total >= 2000) {
    discountPercent = 5;
  } else {
    discountPercent = 0;
  }

  const discountAmount = (total * discountPercent) / 100;
  const finalPrice = Math.round(total - discountAmount); // Math.round() as required

  Output.log(`Original total      : ₹${total}`);
  Output.log(`Discount percentage : ${discountPercent}%`, discountPercent > 0 ? "good" : "warn");
  Output.log(`Final price         : ₹${finalPrice}`, "good");
});
