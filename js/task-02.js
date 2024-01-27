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
    elementOfList.textContent = ingredient;
    elementOfList.classList.add('item');
    console.log(elementOfList);
    listOfingredients.append(elementOfList);
  });