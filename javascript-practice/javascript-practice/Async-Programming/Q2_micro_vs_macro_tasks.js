// Q2 – Task Scheduler: Micro vs Macro Challenge
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// Timeout callback (macrotask)
//
// Explanation: synchronous code runs first. Once the current script finishes,
// JavaScript drains the microtask queue (including Promise.then callbacks)
// before taking the next macrotask such as a setTimeout callback.
