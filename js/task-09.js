const bodyEl = document.querySelector('body');
const btnColore = document.querySelector('button');
const textColore = document.querySelector('.color');
btnColore.addEventListener('click', onChengeColor);

function onChengeColor() {
  let color = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${color}`);
  textColore.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function onChangeColor() {
//   let color = getRandomHexColor();
//   document.body.setAttribute('style', `background-color: ${color}`);
//   textWidgetColor.textContent = color;
// }
