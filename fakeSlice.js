let arr = [1, 2, 3, 4, 5, 6, 7];

function fakeSlice(arr, begin, end) {
  let result = [];

  if (end === undefined) {
    end = arr.length;
  }

  if (end < 0) {
    end += arr.length;
  }

  for (let i = begin; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(arr.slice(2, 5));
console.log(fakeSlice(arr, 2, 5));

console.log("...");

console.log(arr.slice(2));
console.log(fakeSlice(arr, 2));

console.log("...");

console.log(arr.slice(2, null));
console.log(fakeSlice(arr, 2, null));

console.log("...");

console.log(arr.slice(2, 1));
console.log(fakeSlice(arr, 2, 1));

console.log("...");

console.log(arr.slice(2, -1));
console.log(fakeSlice(arr, 2, -1));
