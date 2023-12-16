class TreeNode {
  data;
  left;
  right;

  //this ->TreeNode
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  //this-> BinaryTree
  root;
  constructor() {
    this.root = null;
  }

  createBT(arr) {
    this.root = this.#createTree(arr, 0);
  }

  #createTree(arr, index) {
    if (index >= arr.length) {
      return null;
    }
    const n = new TreeNode(arr[index]);
    n.left = this.#createTree(arr, 2 * index + 1);
    n.right = this.#createTree(arr, 2 * index + 2);
    return n;
  }

  preOrder() {
    const ans = [];
    this.#preOrder(this.root, ans);
    return ans;
  }

  #preOrder(root, ans) {
    if (root == null) {
      return;
    }
    ans.push(root.data);
    this.#preOrder(root.left, ans);
    this.#preOrder(root.right, ans);
  }

  postOrder() {
    const ans = [];
    this.#postOrder(this.root, ans);
    return ans;
  }

  #postOrder(root, ans) {
    if (root == null) {
      return;
    }
    this.#postOrder(root.left, ans);
    this.#postOrder(root.right, ans);
    ans.push(root.data);
  }
  inOrder() {
    const ans = [];
    this.#inOrder(this.root, ans);
    return ans;
  }

  #inOrder(root, ans) {
    if (root == null) {
      return;
    }
    this.#inOrder(root.left, ans);
    ans.push(root.data);
    this.#inOrder(root.right, ans);
  }

  iterativeInorder() {
    const ans = [];
    this.#iterativeInorder(this.root, ans);
    return ans;
  }
  #iterativeInorder(node, ans) {
    if (node == null) {
      return ans;
    }
    const stack = [];
    let curr = node;
    while (curr != null || stack.length > 0) {
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      ans.push(curr.data);
      curr = curr.right;
    }
  }
  iterativePreOrder() {
    const ans = [];
    this.#iterativePreOrder(this.root, ans);
    return ans;
  }
  #iterativePreOrder(node, ans) {
    if (node == null) {
      return ans;
    }
    const stack = [];
    stack.push(node);
    while (stack.length > 0) {
      let curr = stack.pop();
      ans.push(curr.data);
      if (curr.right != null) {
        stack.push(curr.right);
      }
      if (curr.left != null) {
        stack.push(curr.left);
      }
    }
  }
  iterativePostOrder() {
  //   const ans = [];
  //   this.#iterativePostOrder(this.root, ans);
  //   return ans;
  // }
  // #iterativePostOrder(node, ans) {
  //   if (node == null) {
  //     return ans;
  //   }
  //   const stack=[]

  }
}

const bt = new BinaryTree();
bt.createBT([1, 2, 3, 4, 5, 6]);
// console.log(bt.inOrder());
// // console.log(bt.preOrder());
// // console.log(bt.postOrder());
// console.log(bt.iterativeInorder());
console.log(bt.iterativePreOrder());
