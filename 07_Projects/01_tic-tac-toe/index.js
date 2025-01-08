const allBoxes = document.querySelectorAll('.box');
// const box = document.querySelector('.box');
const reset = document.querySelector('#reset-btn');
const winner = document.querySelector('.win')

let flag = true;
const patterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [2,5,8]
]
// console.log(allBoxes);

allBoxes.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(flag === true){
      button.textContent = "X";
      flag = false;
    }
    else{
      button.textContent = "O";
      flag = true;
    }
    button.disabled = true;

    checkWinner();
  })
})

function checkWinner(){
  for(let p of patterns){
     let s = allBoxes[p[0]].textContent;
     if(s === '') continue;
     if(allBoxes[p[1]].textContent === s && allBoxes[p[2]].textContent === s){
      winner.textContent = `${s} is the winner`;
    }
  }
}

reset.addEventListener('click', (e)=>{
  allBoxes.forEach((button)=>{
    button.textContent = '';
    button.disabled = false;
    winner.textContent = '';
  })
})



