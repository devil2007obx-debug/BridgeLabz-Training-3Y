// Q7 – The Lazy Loader: Promise Combinator Practice

function maybeReject(value) {
  return new Promise((resolve, reject) => {
    const delay = value === "Profile" ? 2000 : value === "Posts" ? 1500 : 1000;

    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error(`${value} failed to load`));
      } else {
        resolve(`${value} Loaded`);
      }
    }, delay);
  });
}

function loadProfile() {
  return maybeReject("Profile");
}

function loadPosts() {
  return maybeReject("Posts");
}

function loadMessages() {
  return maybeReject("Messages");
}

async function loadDashboard() {
  const startTime = Date.now();

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  results.forEach((result, index) => {
    const moduleNames = ["Profile", "Posts", "Messages"];
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]} succeeded: ${result.value}`);
    } else {
      console.error(`${moduleNames[index]} failed: ${result.reason.message}`);
    }
  });

  console.log(`Total time taken: ${Date.now() - startTime} ms`);
}

loadDashboard();
