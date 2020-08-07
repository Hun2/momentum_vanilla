const caculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const plus = caculator.plus;
const minus = caculator.minus;
const multiply = caculator.multiply;
const divide = caculator.divide;
const power = caculator.power;

console.log(plus(5,5)); // 10
console.log(minus(3,2)); // 1
console.log(multiply(5,5)); // 25
console.log(divide(6,3)); // 2
console.log(power(5,2)); // 25

const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

// function handleResize() {
//   console.log('I have been resized');
// }


function init() {
  title.addEventListener('click', handleClick);
}
init();
// window.addEventListener('resize', handleResize);
