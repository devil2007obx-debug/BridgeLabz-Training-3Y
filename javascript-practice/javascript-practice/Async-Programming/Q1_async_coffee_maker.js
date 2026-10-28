// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise and takes 1–2 seconds.

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Water could not be boiled."));
      console.log("Water boiled.");
      resolve();
    }, randomDelay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Coffee brewing failed."));
      console.log("Coffee brewed.");
      resolve();
    }, randomDelay());
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Could not pour coffee."));
      console.log("Coffee poured into the cup.");
      resolve();
    }, randomDelay());
  });
}

boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));
