const bubbleSort = (arr) => {
  for (let pass = 0; pass < arr.length; pass++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};
const arr = [9, 1, 4, 2, 7, 5, 3];
console.log(bubbleSort(arr));
