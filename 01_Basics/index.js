"use strict" // treat all js code as newer version..

console.log("hello");
const s1 = "huhu";
var s2 = "123";
let s3 = "tamatarr";
// never use var keyword
console.table([s1,s2,s3]); // forms table

// alert("hellow bhavya"); //will show error here on bcz we are not working in browser.

console.log(typeof(null)); //object

let score = 34;
let changed = Boolean(score);
console.log(changed);
console.log(typeof(score));