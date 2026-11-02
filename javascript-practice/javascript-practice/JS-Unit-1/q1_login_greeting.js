// Q1. Personalized Login Greeting
// Greets the user with a message that depends on the time of day.

$("form").addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading
  Output.clear();

  const userName = $("userName").value.trim() || "Guest";

  // Current hour from the system clock (0-23). A test hour can override it.
  const testHour = $("testHour").value;
  const currentHour = testHour !== "" ? Number(testHour) : new Date().getHours();

  if (currentHour < 0 || currentHour > 23 || Number.isNaN(currentHour)) {
    Output.log("Please enter an hour between 0 and 23.", "bad");
    return;
  }

  let greeting;
  if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
  } else if (currentHour <= 17) { // 12 to 17 (5 PM)
    greeting = `Good Afternoon ${userName}!`;
  } else {
    greeting = `Good Evening ${userName}!`;
  }

  Output.log(`Current hour: ${currentHour}`, "info");
  Output.log(greeting, "good");
});
