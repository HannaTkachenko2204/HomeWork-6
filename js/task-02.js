const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfingredients = document.querySelector('#ingredients');

ingredients.forEach(ingredient => 
  {
    const elementOfList = document.createElement('li');
    console.log(elementOfList);
    elementOfList.textContent = ingredient;
    elementOfList.classList.add('item');
    listOfingredients.innerHTML = elementOfList;
  })