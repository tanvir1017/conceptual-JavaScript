const worker = new Worker("worker.js");
const showResultOfWorker = document.getElementById("show-worker-result");

const totalButton = document.getElementById("total");
const bgButton = document.getElementById("bg");

totalButton.addEventListener("click", () => {
  worker.postMessage("Hello worker! Please do the work for me");
});

worker.onmessage = (message) => {
  showResultOfWorker.innerText = message.data;
};

bgButton.addEventListener("click", () => {
  const bgBody = document.body.style["backgroundColor"];
  if (bgBody !== "green") {
    document.body.style["backgroundColor"] = "green";
  } else {
    document.body.style["backgroundColor"] = "tomato";
  }
});
