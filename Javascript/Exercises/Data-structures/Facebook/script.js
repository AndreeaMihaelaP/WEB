var database = [
  {
    username: "Julie",
    password: "123",
  },
  {
    username: "Julian",
    password: "1234",
  },
  {
    username: "July",
    password: "1234",
  },
];

var newsFeed = [
  {
    username: "Bob",
    timeline: "Good job!",
  },
  {
    username: "Sal",
    timeline: "I am so tired!",
  },
  {
    username: "Bobby",
    timeline: "Good and Amazing",
  },
];

var userNamePrompt = prompt("What's your username?");
var userPasswordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, userPasswordPrompt);
