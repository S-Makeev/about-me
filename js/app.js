'use strict';

let userName = prompt('What is your name?');
alert(`Welcome to this page, ${userName}! You will be given a set of 5 questions. Please, answer: yes/no or y/n to each question!`);



let questionOneGuess = prompt('Do I have a guitar?').toLowerCase();
if(questionOneGuess === 'yes' ||questionOneGuess === 'y'){
  alert('you are correct!');}
else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('sorry, you guessed wrong!');
}

let questionTwoGuess = prompt('Do I sing?').toLowerCase();
if(questionTwoGuess === 'yes' ||questionTwoGuess === 'y'){
  alert('you are correct!');}
else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('sorry, you guessed wrong!');
}

let questionThreeGuess = prompt('Do I speak Mandarin?').toLowerCase();
if(questionThreeGuess === 'yes' ||questionThreeGuess === 'y'){
  alert('sorry, you guessed wrong!');}
else if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('you are correct!');
}

let questionFourGuess = prompt('Am I good at math?').toLowerCase();
if(questionFourGuess === 'yes' ||questionFourGuess === 'y'){
  alert('sorry, you guessed wrong!');}
else if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('you are correct!');
}

let questionFiveGuess = prompt('is this the last question?').toLowerCase();
if(questionFiveGuess === 'yes' ||questionFiveGuess === 'y'){
  alert('you are correct!');}
else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('sorry, you guessed wrong!');
}


alert(`Thank  you for playing, ${userName}!`);
