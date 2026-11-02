// Q5. Weather Activity Planner

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Output.clear();

  const temperature = Number($("temperature").value);
  const windSpeed = Number($("windSpeed").value);
  const isRaining = $("isRaining").checked;

  if (Number.isNaN(temperature) || Number.isNaN(windSpeed) || $("temperature").value === "" || $("windSpeed").value === "") {
    Output.log("Please enter temperature and wind speed.", "bad");
    return;
  }

  // Named conditions built with && so the main chain stays readable
  const isTooHot = temperature > 35;
  const isColdAndWindy = temperature < 15 && windSpeed > 20;

  Output.log(`Temperature: ${temperature}°C | Wind: ${windSpeed} km/h | Raining: ${isRaining}`, "info");

  if (isRaining) {
    Output.log("Stay indoors with hot coffee.", "good");
  } else if (isTooHot) {
    Output.log("Go swimming.", "good");
  } else if (isColdAndWindy) {
    Output.log("Too cold and windy — stay home.", "warn");
  } else {
    Output.log("Perfect day for a walk.", "good");
  }
});
