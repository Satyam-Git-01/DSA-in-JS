function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }

  return arr;
}
const arr = [9, 1, 4, 2, 7, 5, 3];
console.log(SelectionSort(arr));
