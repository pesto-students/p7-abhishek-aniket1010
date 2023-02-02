//? Reverse A Linked List
/* 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1] 
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

var reverseList = function (head) {
  let newHead = null;
  while (head != null) {
    let next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
};

const node3 = new Node(3, null);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

console.log(node1);
reverseList(node1);
console.log(node3);
