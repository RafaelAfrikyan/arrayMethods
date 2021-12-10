// Implementation of forEach.

let arr = [1, 2, 3, 4, 5];

const fakeForEach = function (arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i], i, arr);
  }
};

fakeForEach(arr, (el, i, originalArr) => {
  console.log(el, i, originalArr);
});
