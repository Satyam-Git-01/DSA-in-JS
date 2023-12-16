function MergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    MergeSort(arr, low, mid);
    MergeSort(arr, mid + 1, high);
    MergeArrays(arr, low, mid, high);
  }
  return -1;
}
const MergeArrays = (arr, low, mid, high) => {
  let n1 = mid - low + 1;
  let n2 = high - mid;

  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) {
    left[i] = arr[low + i];
  }
  for (let i = 0; i < n2; i++) {
    right[i] = arr[mid + i + 1];
  }
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

const arr = [9, 1, 4, 2, 6, 6, 6, 7,8, 5, 3];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);
