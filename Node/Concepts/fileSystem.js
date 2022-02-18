const fs = require("fs");
const { fileURLToPath } = require("url");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("error");
  }
  console.log("Async", data.toString());
});

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

fs.appendFile("./hello.txt", "  This is so cool!", (err) => {
  if (err) {
    console.log("error");
  }
});

fs.writeFile("bye.txt", "Byee!", (err) => {
  if (err) {
    console.log("error");
  }
});

fs.unlink("./bye.txt", (err) => {
  if (err) {
    console.log("error");
  }
});
