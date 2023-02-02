//? Implement queue using 2 stacks

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  push(x) {
    this.s1.push(x);
  }
  pop() {
    if (this.s1.length === 0) throw new Error("Stack is Empty");
    else {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }

      let x = this.s2.pop();
      while (this.s2.length > 0) {
        this.s1.push(this.s2.pop());
      }
      return x;
    }
  }
}

let q = new Queue();
q.push(1);
q.push(2);
q.push(3);
console.log(q.pop());
q.push(4);
console.log(q.pop());
q.pop();
q.pop();
q.pop();
