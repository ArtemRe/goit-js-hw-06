const categories = document.querySelector("#categories");
const items = categories.children;

console.log("Number of categories:", categories.children.length);
console.log("Category :", items[0].children[0].textContent);
console.log("Elements:", items[0].children[1].children.length);

console.log("Category :", items[1].children[0].textContent);
console.log("Elements:", items[1].children[1].children.length);

console.log("Category :", items[2].children[0].textContent);
console.log("Elements:", items[2].children[1].children.length);
