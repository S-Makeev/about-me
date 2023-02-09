/* eslint-disable no-unused-vars */
'use strict';


let userName = prompt('What is your name?');
alert(`Welcome to this page, ${userName}! You will be given a set of 5 questions. Please, answer: yes/no or y/n to each question!`);


function guessingGameOne(){
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
}

function guessingGameTwo(){
  let answer = Math.floor(Math.random() * 10)+1;
  let userInput = +prompt(`It's a number guessing game. Enter your number from 1 to 10. You have 4 attempts. Good luck, ${userName} !`);
  let attempt = 3;

  while(userInput !== answer)
  {
    if(attempt === 0)
    {
      alert(`sorry, you've lost! The answer was ${answer}`);
      break;
    }
    else if(userInput > answer)
    {
      userInput = +prompt('Too high!');
      attempt--;
    }
    else if(userInput < answer)
    {
      userInput = +prompt('Too low!');
      attempt--;
    }
    else {(alert(`You got it, it was ${answer}. Nice job!`));
      break;
    }
  }
}

function guessingGameThree(){
  alert(`hey ${userName}, did you like the previous game? I know you did! Here is another guessing game.`);


  let movieAttempt = 6;
  let movies = ['fargo','shrek','inception','skyfall','leon','matrix'];
  let points = 0;


  while (movieAttempt > 0)
  {
    let movieInput =  prompt(`You have ${movieAttempt} attempts left to guess my favourite movies. Good luck!`);
    movieAttempt--;
    for(let i = 0; i < movies.length; i++)
    {
      if(movies[i] === movieInput)
      {
        alert(`Correct! You have ${movieAttempt} left`);
        points++;
      }
    }
  }

  function correctAnswers(){
    let text = `You've earned ${points} points! \n`;
    text += 'The correct answers were : \n';
    for (let i = 0; i <movies.length; i++) {
      text += movies[i] + '\n';
    }
    return text;
  }

  alert(correctAnswers());
}

guessingGameOne();
guessingGameTwo();
guessingGameThree();








// alert(`Thank  you for playing, ${userName}!`);
