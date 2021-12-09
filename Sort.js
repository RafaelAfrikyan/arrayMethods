// Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

let arr = [2, 5, 1, 78, 105, 3];
function compareArr(a, b) {
  return b - a;
}
arr.sort(compareArr);
console.log(arr);
