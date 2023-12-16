const arr = [9, 1, 4, 2, 6, 6, 6, 7, 8, 5, 3];

const partitionFunction = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[j];
  arr[j] = arr[low];
  arr[low] = temp;
  return j;
};
function QuickSort(arr, low, high) {
  if (low < high) {
    let pi = partitionFunction(arr, low, high);
    QuickSort(arr, low, pi - 1);
    QuickSort(arr, pi + 1, high);
  }
}

QuickSort(arr, 0, arr.length - 1);
console.log(arr);
