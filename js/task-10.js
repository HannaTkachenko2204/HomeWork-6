function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
   for (let i = 1; i <= amount; i+=1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);
    console.log(boxesEl);
   }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

btnCreate.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  console.log(amount);
  createBoxes(amount);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});