let arr = [1, 2, 3, 4, 5, 6];

function reducer(prev, current) {
  return prev + current;
}

function fakeReduce(arr, reducer) {
  if (arr.length === 1) {
    return arr[0];
  }

  let newArr = [];

  newArr.push(reducer(arr[0], arr[1]));

  for (let i = 2; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return fakeReduce(newArr, reducer);
}

console.log(arr.reduce(reducer));
console.log(fakeReduce(arr, reducer));
