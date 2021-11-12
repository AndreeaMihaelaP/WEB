// Object spread operator
const animals = {
  tiger: 25,
  lion: 5,
  monkey: 2,
  bird: 4,
};

const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

sum(...array);

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tigers, ...rest } = animals;
objectSpread(tiger, lion, rest);

// Finally

const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(urls.map((url) => fetch(url).then((people) => people.json())))
  .then((array) => {
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
    // throw Error;
  })
  .catch((err) => console.log("ughhhh fix it!", err))
  .finally(() => console.log("extra"));

// For await of

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops", err);
  }
};

const loopThroughUrls = (url) => {
  for (url of urls) {
    console.log("Url", urls);
  }
};

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log("Data", data);
  }
};
