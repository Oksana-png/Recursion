'use strict';
const isNumder = function(n) {
  if(n === null) {
    return false;
  }
  return (isNaN(n) || n.trim() === '');
}
const one = function() {
  const value = 26;
  let answer = prompt('Угадай число от 1 до 100');
  
  function two() {
    if(isNumder(answer)) {
      answer = prompt('Введите число!');
      return two();
    } else if (answer ===  null) {
      return 'Игра  окончена';
    }
    answer = parseFloat(answer);
    if(value === answer) {
      return 'Поздравляю! Вы угадали!!!';
    } else if(value > answer) {
      answer = prompt('Загаданное число больше');
      return two();
    } else if (value < answer) {
      answer = prompt('Загаданное число меньше');
      return two();
    } else if (value === null) {
      return 'Игра  окончена';
    } 
  }
  return two();
}

console.log(one());