// Q10. Citizen Eligibility Validator
//
// NOTE: the assignment's rules overlap ("citizen and age >= 18" for all services vs
// "citizen and 18-20" for vote only). To make every outcome reachable, this solution
// treats "all services" as citizen AND age >= 21 (driving/passport age),
// and "vote only" as citizen AND age 18-20. Change ALL_SERVICES_AGE to 18 to follow the
// first rule literally.
const ALL_SERVICES_AGE = 21;

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Output.clear();

  const age = Number($("age").value);
  const isCitizen = $("isCitizen").checked;

  if ($("age").value === "" || Number.isNaN(age) || age < 0) {
    Output.log("Enter a valid age.", "bad");
    return;
  }

  Output.log(`Age: ${age} | Citizen: ${isCitizen}`, "info");

  // Nested if-else with logical operators
  if (isCitizen) {
    if (age >= ALL_SERVICES_AGE) {
      Output.log("Eligible for all services.", "good");
    } else if (age >= 18 && age <= ALL_SERVICES_AGE - 1) {
      Output.log("Eligible to vote only.", "good");
    } else {
      Output.log("Not eligible yet.", "bad");
    }
  } else {
    if (age >= 18) {
      Output.log("Only age criteria met.", "warn");
    } else {
      Output.log("Not eligible yet.", "bad");
    }
  }
});
