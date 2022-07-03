// const inputEl = document.querySelector('input');

// inputEl.addEventListener('blur', () => {
//   if (inputEl.value.length === Number(inputEl.dataset.length)) {
//     inputEl.classList.toggle('#validation-input.valid');
//   } else {
//     inputEl.classList.toggle('#validation-input.invalid');
//   }
// });
const inputEl = document.querySelector('#validation-input');
const checkInput = +inputEl.dataset.length;
inputEl.addEventListener('blur', onFocusInput);
function onFocusInput(event) {
  if (event.currentTarget.value.length === checkInput) {
    inputEl.classList.remove('invalid');
    return inputEl.classList.add('valid');
  }
  inputEl.classList.remove('valid');
  return inputEl.classList.add('invalid');
}
