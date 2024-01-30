function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('.input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

// inputEl.addEventListener('input', (event) => {
//   const amount = event.currentTarget.value;
//   console.log(amount);
// })



function createBoxes(amount) {
   for (let i = 1; i <= amount; i+=1) {
    const divEl = document.createElement('div');
    console.log(divEl);
    boxesEl.append(divEl);
    console.log(boxesEl);
   }
}

function destroyBoxes() {
  boxesEl.reset();
}

btnCreate.addEventListener('click', createBoxes);
//btnDestroy.addEventListener('click', destroyBoxes);