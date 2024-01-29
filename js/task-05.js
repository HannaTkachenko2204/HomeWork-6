const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
    const currentName = event.currentTarget.value;
    nameOutput.textContent = currentName === '' ? 'Anonymous' : currentName;
  });