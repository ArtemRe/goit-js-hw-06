const valueCounter = {
  value: 0,
  increment() {
    console.log('increment => this, this');
    this.value += 1;
  },
  decrement() {
    console.log('decrement => this, this');
    this.value -= 1;
  },
};
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  valueCounter.decrement();
  counterValue.textContent = valueCounter.value;
});

incrementBtn.addEventListener('click', function () {
  valueCounter.increment();
  counterValue.textContent = valueCounter.value;
});
