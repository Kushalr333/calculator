const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('#clear');
const calculateBtn = document.querySelector('#calculate');
const buttons = document.querySelectorAll('button:not(#clear):not(#calculate)');

let equation = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    equation += button.value;
    screen.children[0].textContent = equation;
  });
});

calculateBtn.addEventListener('click', () => {
  try {
    result = eval(equation);
    screen.children[1].textContent = result;
  } catch (error) {
    screen.children[1].textContent = 'Error';
  }});

