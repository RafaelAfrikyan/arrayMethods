let arr = [1, 2, 3, 4];

function fakeMap(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }

  return newArr;
}

let result = fakeMap(arr, (el) => {
  return el * 2;
});

console.log(result);
