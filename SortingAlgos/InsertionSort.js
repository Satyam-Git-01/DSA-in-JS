const arr = [9, 1, 4, 2, 7, 5, 3];
const InsertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
};
console.log(InsertionSort(arr));
