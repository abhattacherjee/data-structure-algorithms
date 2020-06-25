const Node = require("./node");

function traverseDFS(root) {
  let stack = [root];
  let result = [];

  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.value);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
}

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

const result = traverseDFS(node1);
console.log(result);
