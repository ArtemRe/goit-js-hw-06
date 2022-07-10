const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', chengeInputRange);
span.style.fontSize = `${input.value}px`;
function chengeInputRange(event) {
  span.style.fontSize = event.currentTarget.value + 'px';
}
