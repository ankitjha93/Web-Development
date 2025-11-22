// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(typeof(balance));
console.log(typeof(anotherBalance));
// console.log(anotherBalance.valueOf())

// boolean

let isActive = true;
let isReallyActive = new Boolean(true);


// null and undefine

// let firstname;
let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

// string

let myString = "hello";
let myStringOne = 'hola';
let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
console.log(oldGreet)

let greetMessage = `hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

console.log(greetMessage);

let sm1 = Symbol("ankit");
let sm2 = Symbol("ankit");

console.log(sm1 == sm2);
console.log(sm1);



