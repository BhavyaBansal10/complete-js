function userName(num2,num3){
  return num2+num3
}

const value = userName(45,325);
// console.log(value);

function addCartItems(...nums){
  let sum;
  console.log(typeof(sum))
  nums.forEach(e => {
    sum +=e
  });
  return sum
}

const totalItems = addCartItems(23,43,12,12,12,12,12,12);
// console.log(totalItems)

const userDetails = {
  userName : "Bhavya",
  age: 21
}

function objectPrinting(prop){
   return `name: ${prop.userName}, Age: ${prop.age}`
}

// const values = objectPrinting(userDetails)
// console.log(typeof(values))

const arr = [2,3,4,5,4,3,2]

function arrayPrint(arr ){
  return arr[4]+arr[0]
}

console.log(arrayPrint(arr)) 

// Arrow Function 
// this keyword 

const user = {
  userN: "Radhav",
  price: 999,

  welcomeMessage : function() {
      console.log(`Welcome ${this.userN} On Our website`)
      // console.log(this);
  } 
  
}
// console.log(user);
// user.welcomeMessage();
// user.userN = "sita"
// user.welcomeMessage();


// ARROW FUNCTION

const demo = function(){
  const namee = "Raghav"
  console.log(this.namee);
}

const demo2 = () =>{
  console.log(`How are You`);
}

const demo3 = () => (console.log("HIE"))
demo();
demo2();
demo3();
console.log("preds");
