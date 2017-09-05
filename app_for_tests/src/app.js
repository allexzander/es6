import Point from './Point';
import ColorPoint from './ColorPoint';
import Cat from './Cat';
import Dog from './Dog';


var cats = [new Cat("maria", 28), new Cat("julia", 28), new Cat("jhonsy", 28)];
var dogs = [new Dog("jack", 28), new Dog("sparky", 28), new Dog("sckooby", 28)];

console.log("Testing ES6 classes*******************************************************");
for (let i = 0; i < cats.length; ++i) {
    cats[i].dump();
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp.toString()); // true
console.log(cp instanceof Point); // true
console.log("***************************************************************************");

console.log("Testing other ES6 features**************************************************");
console.log("Arrow function:")
var arrowFunction = () => {console.log("Arrow function with no arguments")};
arrowFunction();
var arrowFunctionWithArguments = (a, b) => {console.log("a + b = " + (a + b))};
arrowFunctionWithArguments(5, 6);
console.log("****************************************************************************");