const refs = {
  input: document.querySelector('#name-input'),
  outInput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', ChangeInput);

function ChangeInput(event) {
  if (refs.input.value === '') {
    refs.outInput.textContent = 'Anonymous';
  } else {
    refs.outInput.textContent = event.currentTarget.value;
  }
}
