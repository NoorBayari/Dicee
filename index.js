// image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = 'images/dice' + randomNumber1 + '.png';

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomDiceImage);

// image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = 'images/dice' + randomNumber2 + '.png';

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomDiceImage2);

// compare results and change the text of heading depending on the values

if (randomNumber1 > randomNumber2) {
  document.querySelector('.heading').textContent = '🚩 Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('.heading').textContent = 'Player 2 Wins! 🚩';
} else {
  document.querySelector('.heading').textContent = 'Draw!';
}
