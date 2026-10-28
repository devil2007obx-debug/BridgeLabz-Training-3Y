// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Approximately 50% chance of success and 50% chance of failure.
      if (Math.random() < 0.5) {
        resolve("Order submitted successfully");
      } else {
        reject(new Error("Order submission failed"));
      }
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      console.log(result);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
    }
  }

  throw new Error("Order could not be processed");
}

processOrder().catch((error) => {
  console.error(error.message);
});
