'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When no number is entered
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';
    }

    //When guess is correct
    else if (guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }   
    }
        
    //When guess is wrong
    else if (guess !== number) {
        if (score > 1) {

            //When guess is low
            if (guess < number) {
                document.querySelector('.message').textContent = '📉 Too low!';
            }

            //When guess is high
            else if(guess > number) {
                document.querySelector('.message').textContent = '📈 Too high!';
            }
            score--;
            document.querySelector('.score').textContent = score;
        }

        //When score becomes zero
        else {
            score = 0;
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('body').style.backgroundColor = 'rgb(250, 100, 100)';   
        }
        document.querySelector('.score').textContent = score;
    } 
})


//When 'again' button is clicked
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';      
})