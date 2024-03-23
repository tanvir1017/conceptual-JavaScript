/** Async-Await deep dive
 *
 *
 */

/* const p1 = new Promise((resolved, reject) => {
  setTimeout(() => resolved("Promise 1 is printed after 10s"), 20000);
});

const p2 = new Promise((resolved, reject) => {
  setTimeout(
    () =>
      resolved(
        "Promise 2 is printed after promise 1, But it resolved first than p1"
      ),
    40000
  );
});

async function getData() {
  console.log("Hallo! Guten Tag!");

  const valueOfP1 = await p1;
  console.log("Value 1 ");
  console.log(valueOfP1);

  const valueOfP2 = await p2;
  console.log("Value 2 ");
  console.log(valueOfP2);
}

getData();
 */

/**
 * @Async__Await explain by calling fetch data
 */

const GITHUB_API_URL = "https://invalidUrlToGetData.com";
async function getGithubUserData() {
  // A fetch function always returns a promise. In async/await term we've to handle the promise by using await before fetch. And again it's return a promise which is a readableStream
  const data = await fetch(GITHUB_API_URL);
  const result = await data.json(); // In result variable we will handle the data(Promise) from readableStream and convert it into json object.
  console.log(result);
}

getGithubUserData().catch(function (err) {
  console.log(err);
});

//_________________________________________________________________________________________________________//
//||||||||||||||||||||||||||||||||||  Interview Questions  |||||||||||||||||||||||||||||||||||||||||||||||//

/* 
 01. What is Async/Await
    1.1 => Normally async is a keyword which is used with functions. And async function is different things.
        Await is also a keyword which is used only inside the async function. Both async/await is use to handle promises
        in javascript. This promises is asynchronous. Async function does nothing but wrap as Promise and return promise what inside the async function.
  
  02. How does work async/await behind the scene?
    2.1 => Basically async/await was made for handling asynchronous/Promises job. Async is work differently from how Promise work.  
          In simple terms async function will suspend from call stack when it has to await for anything after the things(i.e fetch,setTimeout, setInterval) is finished the it will appear to the call stack the finished the job. In example of the following:
            
            2.1.1 => const p1 = new Promise((resolved, reject) => {
                      setTimeout(() => resolved("Promise 1 is printed after 10s"), 20000);
                    });

                      const p2 = new Promise((resolved, reject) => {
                        setTimeout(
                          () =>
                            resolved(
                              "Promise 2 is printed after promise 1, But it resolved first than p1"
                            ),
                          40000
                        );
                      });

                      async function getData() {
                        console.log("Hallo! Guten Tag!");

                        const valueOfP1 = await p1;
                        console.log("Value 1 ");
                        console.log(valueOfP1);

                        const valueOfP2 = await p2;
                        console.log("Value 2 ");
                        console.log(valueOfP2);
                      }

                      getData();


          See the source tab from devTools of browser and look into the call stack sections. You will get the exact things that what i old about.
 */
