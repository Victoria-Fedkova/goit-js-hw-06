const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const makeIngredientsList = names => {
  return names.map(name => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = name;

    return li;
  });
};

const listItems = makeIngredientsList(ingredients);
list.append(...listItems);
