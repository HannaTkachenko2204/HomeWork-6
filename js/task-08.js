const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const objectOfData = {};
    const form = event.target;
    const email = form.elements.email.value;
    objectOfData.email = email;
    const password = form.elements.password.value;
    objectOfData.password = password;
    console.log(objectOfData);
    if(email === '' || password === '') {
        alert('All fields must be filled in!');
    }
    //console.log(`${email}, ${password}`);
    form.reset();
}