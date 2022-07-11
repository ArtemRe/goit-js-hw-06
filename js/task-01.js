const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);
categories.forEach((elem) => {
  console.log('Category :', elem.children[0].textContent);
  console.log('Elements:', elem.children[1].children.length);

  //   console.log('Category :', elem.children[0].textContent);
  //   console.log('Elements:', elem.children[1].children.length);

  //   console.log('Category :', elem.children[0].textContent);
  //   console.log('Elements:', elem.children[1].children.length);
});
// console.log(categories);

//  console.log('Number of categories:', categories.children.length);
//  console.log('Category :', items[0].children[0].textContent);
//  console.log('Elements:', items[0].children[1].children.length);

//  console.log('Category :', items[1].children[0].textContent);
//  console.log('Elements:', items[1].children[1].children.length);

//  console.log('Category :', items[2].children[0].textContent);
// console.log('Elements:', items[2].children[1].children.length);
// const categories = document.querySelector("#categories");
// const items = categories.children;
