onmessage = function (message) {
  postMessage("Web worker has start his work...");

  let total = 0;
  for (let i = 0; i < 10000000000; i++) {
    total += i;
  }

  postMessage("Worker has finished working...");

  postMessage(total);
};
