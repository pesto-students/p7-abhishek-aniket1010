//? Left shift LL by k nodes
/*
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

var rotateRight = function (head, k) {
  if (head == null) return null;
  if (k == 0) return head;
  // calculate the length
  let len = 1;
  let tail = head;
  while (tail.next != null) {
    tail = tail.next;
    len++;
  }
  //connect last node with first node
  tail.next = head;
  k = k % len;
  k = len - k;

  while (k-- > 0) {
    tail = tail.next;
  }
  head = tail.next;
  tail.next = null;
  return head;
};

const node5 = new Node(5, null);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

let new_node = rotateRight(node1, 2);
console.log(new_node);
