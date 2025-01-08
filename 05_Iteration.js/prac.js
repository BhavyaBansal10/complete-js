
const obj = {
  id : 23,
  namee: "SpiderMan",
  email: "spi@ai"
}

Object.keys(obj).forEach((item)=>{ // usage of forEach in objects
  //console.log(`item ${item}`)
})


const arr = [
  {
    id:1,
    namee: "spiderMan"
  },
  {
    id: 2,
    namee: "batman"
  },
  {
    id: 3,
    namee: "pushpa"
  },
  {
    id:4,
    namee: "Raghav"
  }

];

arr.forEach(function func(item) {
  // /console.log(`The ${item.id} superhero is ${item.namee}`)
})

// filter 

const ary = [2,4,2,4,3,2,4,4]

const fil = ary.filter((item)=>{
   return item>2;
})

// console.log(fil)


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

books.forEach((item, index, books) => {
  // console.log(`${item.title} Have genre ${item.genre}`)
})

const item = books.filter((item) =>{
  return item.publish > 1987 && item.genre === 'Science'
})

// console.log(item)

// REduce 

const arre = [1,2,3,4,5]

const i = 0
const newArray = arre.reduce((acc,value) => acc-value,i)
 
const secNew = arre.reduce(function (acc,val){
  return acc+val
},0)
// console.log(secNew)


const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

console.log(shoppingCart.reduce(function (acc , val){
    return acc+val.price
},0))

