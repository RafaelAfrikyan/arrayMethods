// 1. Given an array, return a new array that only includes the numbers.
// let arr1 = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
// 166, NaN];
// let result = [];

// function filterred(arr) {
//   for(i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(filterred(arr1))

// 2. Write a function which remove users with language equals to 'ru'.

// let users = [
//     {
//     username: "Yuri Gagarin",
//     lang: "ru"
//     },
//     {
//     username: "Nil Armstrong",
//     lang: "ENG"
//     }
//     ];

//     let result = [];
//     function filterred (arr) {
//       for (i = 0; i < arr.length; i++){
//         if(arr[i]['lang'] !== 'ru'){
//           result.push(arr[i])
//         }
//       }
//       return result;
//     }

//     console.log(filterred(users))

// 3. Write a function which filters object by field.

let users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",

    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

let result = [];

function filterred(arr) {
  arr.filter((el) => {
    if (el.isAstronaut) {
      result.push(el);
    }
    return result;
  });

  return result;
}
console.log(filterred(users));
