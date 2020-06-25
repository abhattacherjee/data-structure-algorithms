const Node = require("./node");

/**
 * Given a binary tree, traverse through the tree and return results
 * as array of levels
 *
 * eg. consider the following binary tree
 *
 *             1
 *        2       3
 *      4   5    6   7
 *
 * the results will be [[1], [2,3], [4, 5, 6, 7]]
 * @param root
 * @returns {{res: [], widestLevel: number, maxWidth: number}}
 */
function traverseBFS(root) {
  let queue = [root];
  let res = [];
  let widestLevel = 0,
    currentLevel = 0;
  let maxWidth = 0,
    currentWidth = 0;

  while (queue.length) {
    let size = queue.length;
    let tempLevel = [];
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      tempLevel.push(curr.value);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    res.push(tempLevel);
    currentWidth = tempLevel.length;
    if (currentWidth >= maxWidth) {
      maxWidth = currentWidth;
      widestLevel = currentLevel;
    }
    currentLevel++;
  }

  return { res, maxWidth, widestLevel };
}

function simpleBFSTraversal(root) {
  let queue = [root];
  let result = [];

  while (queue.length) {
    let curr = queue.shift();
    result.push(curr.value);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return result;
}

/**
 * Given a root node, find the closest widest level
 * @param root
 */
function calculateWidestLevel(root) {}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.left = node2;
node1.right = node3;

const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

const { res, maxWidth, widestLevel } = traverseBFS(node1);

console.log("BFS:", res, "Max width:", maxWidth, "Widest level:", widestLevel);

const result = simpleBFSTraversal(node1);
console.log(result);
