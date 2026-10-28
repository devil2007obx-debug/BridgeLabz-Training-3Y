// Q10 – The Final Delivery: Async Pipeline Debugger
// Each step takes a random 1–2 seconds and can randomly fail.

function deliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1000);

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed`));
      } else {
        console.log(successMessage);
        resolve();
      }
    }, delay);
  });
}

async function takeOrder() {
  await deliveryStep("Take order", "Step 1: Order taken");
}

async function prepare() {
  await deliveryStep("Prepare", "Step 2: Food prepared");
}

async function pack() {
  await deliveryStep("Pack", "Step 3: Package ready");
}

async function dispatch() {
  await deliveryStep("Dispatch", "Step 4: Out for delivery");
}

async function deliver() {
  await deliveryStep("Deliver", "Delivery completed!");
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // Each await waits for the current Promise before starting the next step.
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    await deliver();
  } catch (error) {
    console.error("Pipeline failed!", error.message);
  }
}

runPipeline();
