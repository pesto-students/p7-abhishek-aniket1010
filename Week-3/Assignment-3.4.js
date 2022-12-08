// function createStack() {
//     return {
//       items: [],
//       push(item) {
//         this.items.push(item);
//       },
//       pop() {
//         return this.items.pop();
//       }
//     };
//   }
//   const stack = createStack();
//   stack.push(10);
//   stack.push(5);
//   stack.pop(); // => 5
//   stack.items; // => [10]
//   stack.items = [10, 100, 1000];

function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); //Output:undefined(expected)

//before we were returning items as a property of the object
//stack , hence possible to modify.Moving the items array
//out of the returned object we limit its scope inside
//the function itself.
