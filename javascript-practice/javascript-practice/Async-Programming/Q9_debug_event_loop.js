// Q9 – Debugging the Event Loop

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation: the two console.log calls in the main script run synchronously.
// Promise.then queues a microtask. setTimeout queues a macrotask (timer task).
// After the synchronous script finishes, microtasks are processed before the
// timer callback, even when the timer delay is 0 ms.
