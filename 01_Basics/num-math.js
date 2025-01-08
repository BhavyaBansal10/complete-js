const n = new Number(1234200)
console.log(n.toLocaleString('en-UK')) //1,234,200
console.log(n.toLocaleString('en-IN')) //12,34,200

const n1 = 123.43223
console.log(n1.toFixed(2)) // 123.43  to get two numbers only after decimal

const n2 = 123.3723
console.log(n2.toPrecision(4)) //123.4
// to round of the number till 4 but have a drawback, we should know exactly how many numbers are coming brfore decimal.
console.log(n2.toPrecision(2)) // 1.2e+2

const n3 = 124
console.log(n3.toString()) //124
console.log(n3.toString().length) //3 can use string operations after converting it to string


//hitsh sirsss

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));