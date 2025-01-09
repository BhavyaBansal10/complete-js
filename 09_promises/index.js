const myP = new Promise(function (resolve, reject){
  // console.log("before")
  setTimeout(()=>{
    // console.log("Heeloow");
  }, 2000)
  // console.log("after");
})
myP.then(
  // console.log("process done")
).then(
  // console.log("cutipiee"),
  setTimeout(()=>{
    // console.log("aftermmm")
  },1000)
)



//callback Hell

function getData(data, func){
    setTimeout(()=>{
      // console.log("Data ",data);
      if(func){
        func();
      }
    }, 1000)
}

getData(1, ()=>{
  getData(2, ()=>{
    getData(3, ()=>{
      getData(4);
    })
  })
})

function myfun(data){
return new Promise(resolve =>{
  setTimeout(()=>{
    console.log("Data", data)
  },2000)
  resolve();
})
}
myfun(1)
.then(()=>{
  myfun(2)
  .then(()=>myfun(3))
})


//promise

function asyncFunc(){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log(resolve)
        console.log(`inside promise ${resolve}`);
        resolve();
      }, 2000)
      // reject();
  })
}

let promise = asyncFunc();
promise.then((res)=>{
   console.log(`inside first .then function ${res}`)
}).catch((err)=>{
  console.log(`inside error ${err}`);
  
})


const fun = new Promise((resolve)=> resolve(10))
.then((res)=>res*10)
.then(resi => console.log(resi));

console.log(fun);
