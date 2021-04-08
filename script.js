'use strict';

const isNumder = function(n) {
  if(n === null) {
    return false;
  }
  return (isNaN(n) || n.trim() === '');
};

const one = function() {
  const value = Math.round(Math.random() * 99 + 1);
  let count = 10;
  let answer = prompt('Угадай число от 1 до 100');
  
  function two() {
    if(count === 1) {
      return 'Попытки закончились, хотите сыграть еще?';
    }
    if(isNumder(answer)) {
      answer = prompt('Введите число!');
      return two();
    } else if (answer ===  null) {
      return 'Игра  окончена';
    }
    answer = parseFloat(answer);
    if(value === answer) {
      return 'Поздравляю! Вы угадали!!! Хотели бы сыграть еще?';
    } else if(value > answer) {
      count--;
      answer = prompt('Загаданное число больше, осталось попыток ' + count);
      return two();
    } else if (value < answer) {
      count--;
      answer = prompt('Загаданное число меньше, осталось попыток ' + count);
      return two();
    } else if (value === null) {
      return 'Игра  окончена';
    } 
  }

  return two();
};

let restar = confirm(one());

if(restar === true) {
  restar = confirm(one());
}
