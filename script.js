let count = document.getElementById('number');
let def = document.getElementById('reset');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');


const checkCountStatus = () => {
  if (parseInt(count.innerText) < 0){
    count.style.color = 'red';
  } else if (parseInt(count.innerText) > 0){
count.style.color = 'green';
  } else {
    count.style.color = 'black';
  }
}

const add = () => {
    count.innerText ++
    checkCountStatus();
}
const minus = () => {
    count.innerText --
    checkCountStatus();
}
const toReset = () => {
    count.innerText = 0
    checkCountStatus();
}






def.addEventListener('click',toReset);
increase.addEventListener('click', add);
decrease.addEventListener('click', minus);

