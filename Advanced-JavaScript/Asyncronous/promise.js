// A promise is an object that may produce
// a single value some time in the future

// A promise can be in one o these states
// fulfilled - > resolved
// rejected
// pending

// Before promise it was callback
// Which waited something to happen to execute the next code

const promise = new Promise((resolve, reject) => {
  const a = 1;
  if (a) {
    resolve("Stuff Worked");
  } else {
    reject("Error");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hii");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Pookie");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Is it me you are looking for?");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log("Values", values);
});

promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
  })
  .catch((e) => console.log(e));

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/alnums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch((error) => console.log("error", error));
