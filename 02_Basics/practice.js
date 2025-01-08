let arr = ["hi", "sasha", 1,43, 5.654, [43,54,3,[45,[89],[98,[98,[67,[67]]]]],[6]]]
let arr2 = [43,[45], [54],"kapila"]
// console.log(Array.isArray(arr))
// console.log(...arr,...arr2)


// let arr3 = arr.flat(7)
// console.log(arr3)

const sym = Symbol("key");

let obj = {
  namee: "Raghav", 
  email: "r@gmai.com",
  [sym] : "key1",
  age : 3,
  [greeting] : function(){
    console.log( `Hellow, ${this.namee}`)
  }
};

// console.log(obj);
// obj.email = "ra@gmail.com";

// // Object.freeze(obj);
// obj.email = "raghav@fdfvc";
// obj.age = 45;
// console.log(obj);

// obj.greeting = function(){
//   console.log( `Hellow, ${this.namee}`)
// }

// console.log(obj[greeting])

