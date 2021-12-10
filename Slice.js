// Implementation of slice method.

let arr = [1, 25, 45, 74, 15, 2, 3];
newArr = [];

function slice(arr, ind1, ind2) {
  for (i = 0; i < arr.length; i++) {
    // when ind1 < 0 && ind2 > 0
    if (ind1 < 0 && ind2 > 0) {
      if (i >= arr[arr.length + ind1] && i < arr[arr.length + ind1 + ind2]) {
        newArr.push(arr[i]);
      }
    }

    //when just copy
    if (ind1 === undefined && ind2 === undefined) {
      newArr = arr;
    }
    // general case
    if (i >= ind1 && i < ind1 + ind2) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(slice(arr, -4, 6));
