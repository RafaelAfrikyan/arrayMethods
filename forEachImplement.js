// Impelemntation of forEach.

let arr = [1, 2, 3, 4, 5];

const fakeForEach = function (arr, cd) {
  for (let i = 0; i <= arr.length; i++) {
    if (cd(arr[i])) {
      console.log(arr[i]);
    }
  }
};

console.log(
  fakeForEach(arr, (el) => {
    return el < 3;
  })
);
