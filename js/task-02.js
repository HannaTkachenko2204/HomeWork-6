const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfingredients = document.querySelector('#ingredients');

//ForEach не подходит, если нужно вставить все элементы списка одной опирацией

// ingredients.forEach(ingredient => 
//   {
//     const elementOfList = document.createElement('li');
//     elementOfList.textContent = ingredient;
//     elementOfList.classList.add('item');
//     console.log(elementOfList);
//     listOfingredients.append(elementOfList);
//   });


const contextOfList = ingredients.map(ingredient => {
  const elementOfList = document.createElement('li');
  elementOfList.textContent = ingredient;
  elementOfList.classList.add('item');
  console.log(elementOfList);
  return elementOfList;
});

listOfingredients.append(...contextOfList);
