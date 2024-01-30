const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

//console.log(inputEl.value);
textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', (event) => {
    const currentSize = event.currentTarget.value;
    console.log(currentSize);
    textEl.style.fontSize = `${currentSize}px`;
    //console.log(textEl.style.fontSize);
})

