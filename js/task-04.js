let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const clickDecrement = event => {
    console.log("BtnDecrement was clicked");
    counterValue -= 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
};

const clickIncrement = event => {
    console.log("BtnIncrement was clicked");
    counterValue += 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
};

btnDecrement.addEventListener('click', clickDecrement);
btnIncrement.addEventListener('click', clickIncrement);

