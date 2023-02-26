const list = document.querySelectorAll('#categories .item');
console.log('Number of categories:', list.length);
list.forEach(item => {
  //   const category = item.firstElementChild;
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
