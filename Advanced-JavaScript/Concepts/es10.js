// flat
const array = [1, [2, [3, 6, [7, 8], 4]], 5];
array.flat(4);

const entries = ["bob", "Sally", , , , , , , "cindy"];
entries.flat();

// flatMap
const arrayFlatMap = array.flatMap((element) => element + "!");

// trimStart trimEnd
const userEmail = "              asdasd2@sd.com";
const userEmail1 = "_johnysdas@gmail.com   ";
userEmail.trimStart();
userEmail1.trimEnd();

// fromEntries
const userProfiles = [
  ["Tom", 23],
  ["John", 24],
  ["Julia", 22],
];

Object.fromEntries(userProfiles);

// try catch
try {
  bob + "hi";
} catch (error) {
  console.log("you messed up" + error);
}
