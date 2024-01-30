const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

    event.preventDefault();

    const {elements: { email, password }} = event.target;

    if(email.value === '' || password.value === '') {
        alert('All fields must be filled in!');
    } else {
        console.log({[email.name]:email.value, [password.name]:password.value});
    }
    
    event.target.reset();
}


// function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     console.log({[form.elements.email.name]:`${email}`, [form.elements.password.name]:`${password}`});
//     if(email === '' || password === '') {
//         alert('All fields must be filled in!');
//     }
//     form.reset();
// }


// function handleSubmit(event) {
//     event.preventDefault();
//     const objectOfData = {};
//     const form = event.target;
//     const email = form.elements.email.value;
//     objectOfData.email = email;
//     const password = form.elements.password.value;
//     objectOfData.password = password;
//     console.log(objectOfData);
//     if(email === '' || password === '') {
//         alert('All fields must be filled in!');
//     }
//     //console.log(`${email}, ${password}`);
//     form.reset();
// }