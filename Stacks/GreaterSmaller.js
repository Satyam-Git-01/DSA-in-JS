const arr = [1, 7, 6, 9, 8, 11, 2, 5];

//Next Greater on Right
const NGR = (arr) => {
  const stack = [];
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] < arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return ans;
};

//Next Samller on Right
const NSR = (arr) => {
  const stack = [];
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length != 0 && stack.slice(-1)[0] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack.slice(-1)[0];
    }
    stack.push(arr[i]);
  }
  return ans;
};

//Next Greater on Left
const NGL = (arr) => {
  const stack = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && stack.slice(-1)[0] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack.slice(-1)[0];
    }
    stack.push(arr[i]);
  }
  return ans;
};

//Next Samller on Left
const NSL = (arr) => {
  const stack = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && stack.slice(-1)[0] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack.slice(-1)[0];
    }
    stack.push(arr[i]);
  }
  return ans;
};
console.log(NGR(arr));
console.log(NSR(arr));
console.log(NGL(arr));
console.log(NSL(arr));
