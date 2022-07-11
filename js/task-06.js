const inputEl = document.querySelector('#validation-input');
const checkInput = Number(inputEl.dataset.length);
inputEl.addEventListener('blur', onFocusInput);
function onFocusInput(event) {
  if (event.currentTarget.value.length === checkInput) {
    inputEl.classList.remove('invalid');
    return inputEl.classList.add('valid');
  }
  inputEl.classList.remove('valid');
  return inputEl.classList.add('invalid');
}
