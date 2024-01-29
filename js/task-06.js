const validationInput = document.querySelector("#validation-input");

// validationInput.addEventListener("blur", (event) => {
// if(event.currentTarget.value.length === Number(event.currentTarget.getAttribute('data-length'))) {
//     event.currentTarget.classList.remove('invalid');
//     event.currentTarget.classList.add('valid');
//     } else {
//         event.currentTarget.classList.remove('valid');
//         event.currentTarget.classList.add('invalid');
//     }
// });

validationInput.addEventListener("blur", () => {
    if(validationInput.value.length === Number(validationInput.getAttribute('data-length'))) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});