// *** call keyword ***

function stu() {
  const student = {
    firstName: this.name,
    semester: this.sem,
    marks: this.cgpa,
  };
  console.table(student);
}
const obj1 = {
  name: "Aniket",
  sem: "5th semester",
  cgpa: "8.51",
};
const obj2 = {
  name: "Dubey",
  sem: "7th semester",
  cgpa: "9.12",
};
stu.call(obj1);
stu.call(obj2);

//*** apply keyword ***

const arr = [2, 5, 7, 9, 5];
var maxi = Math.max(arr);
console.log(maxi);
//Output=Nan

var mini = Math.min.apply(null, arr);
console.log(mini);
//Output=2

//*** bind keyword ***/

function add() {
  console.log(this.a + this.b);
}

const addB = add.bind({ a: 10, b: 30 });
addB();

// addB is a new function,bind function returs a new function it sets
// the *this* to the specified parameters .bind permanently binds

const moduleA = {
  x: 100,
  getX: function () {
    return this.x;
  },
};

const fn = moduleA.getX;
console.log(fn());

// global context,output=undefined
//How to solve this? ->👇🏻

const fn2 = moduleA.getX.bind(moduleA);
console.log(fn2()); // output=100(expected)

// line 23: it binds the fn2 function with the moduleA object,basically
// now *this* points to the moduleA object
