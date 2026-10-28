// Q4 – DevOps Delay: Async Timeout Race

function contactServer(serverName, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Random failure; both Promise.all and Promise.race handle rejections.
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} failed to respond.`));
      } else {
        resolve(`${serverName} responded successfully`);
      }
    }, delayMs);
  });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

// Promise.all succeeds only if both servers succeed.
Promise.all([serverA, serverB])
  .then((responses) => {
    console.log("Deployment completed for all servers");
    console.log(responses);
  })
  .catch((error) => {
    console.error("Deployment failed:", error.message);
  });

// Promise.race settles as soon as the first Promise settles.
// If the first result is a rejection, race rejects as well.
Promise.race([serverA, serverB])
  .then((response) => console.log("Fastest response:", response))
  .catch((error) => console.error("Fastest response failed:", error.message));
