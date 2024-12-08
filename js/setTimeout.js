setTimeout(() => {
  console.log("after 7 seconds");
}, 7000);

let fetchingMicroTaskQue = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise fulfilled~~~~~~~~~");
  }, 5500);
});

fetchingMicroTaskQue.then((d) => console.log(d));

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("after working for 10s with synchronized while looping");
