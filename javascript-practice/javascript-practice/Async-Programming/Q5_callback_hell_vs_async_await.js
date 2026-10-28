// Q5 – Frontend Rush: Avoiding Callback Hell

// Version 1: Nested callbacks (callback hell demonstration).
function runWithCallbacks() {
  console.log("\\nCallback version:");
  setTimeout(() => {
    console.log("Design complete");
    setTimeout(() => {
      console.log("Build complete");
      setTimeout(() => {
        console.log("Test complete");
        setTimeout(() => {
          console.log("Deploy complete");
          setTimeout(() => {
            console.log("Celebrate! Pipeline finished.");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// Promise-based helper for the async/await version.
function runStage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${stageName} complete`);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("\\nAsync/await version:");
  await runStage("Design");
  await runStage("Build");
  await runStage("Test");
  await runStage("Deploy");
  await runStage("Celebrate");
  console.log("Pipeline finished.");
}

// Run both examples one after the other.
runWithCallbacks();
setTimeout(() => {
  runWithAsyncAwait();
}, 5500);

// Explanation: async/await keeps sequential asynchronous steps in a readable,
// top-to-bottom structure. await pauses this async function until its Promise
// settles; it does not block the JavaScript thread.
