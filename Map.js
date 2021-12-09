// Write a function which returns array of usernames.

let users = [
  { username: "Yuri Gagarin", lang: "ru" },
  { username: "Nil Armstrong", lang: "ENG" },
];

let result = [];
// 1.
// function getUserNames(arr) {
//   arr.map((el) => {
//     result.push(el.username);
//   });
//   return result;
// }
// console.log(getUserNames(users));

// 2.

// let result = [];

// function getUsernameLengths(arr) {
//   arr.map((el) => {
//   result.push(el.username.length);
// })
//   return result;
// }
// console.log(getUsernameLengths(users))

// 3.
let arr = ["1", "px", "2", "34"];
let result = [];
function parseInteger(arr) {
  arr.map((el) => {
    result.push(parseInt(el));
  });
  return result;
}
console.log(parseInteger(arr));
