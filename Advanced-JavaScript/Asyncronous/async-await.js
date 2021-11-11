// async-await return a promise
// easier to read

async function playerStart() {
  const firstMove = await movePlayer(100, "left");
  await movePlayer(200, "left");
  await movePlayer(300, "right");
  await movePlayer(400, "left");
}

async function fetchUsers() {
  const resp = await fetch("https://jsonplacefolder.typicode.com/users");
  const data = resp.json();
  console.log("Data: ", data);
}

const urls = [
  "https://jsonplacefolder.typicode.com/users",
  "https://jsonplacefolder.typicode.com/posts",
  "https://jsonplacefolder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log(users, posts, albums);
  } catch (e) {
    console.log("Error", e);
  }
};
