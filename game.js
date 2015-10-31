var nameGuest = prompt('My name is Ali, what is your name?');
  alert('Please to meet you ' + nameGuest +'!');

function guessingGame() {
var guess = 0;

var aboutMe1 = prompt('I have witnessed 3 solar eclipse since I was born, Yes or No');
  if ((aboutMe1.toUpperCase() === 'YES') || (aboutMe1.toUpperCase() === 'Y')) {
    alert('That is correct. I have witnessed 3 solar eclipse in my lifetime.');
    guess += 1;
    console.log('You are correct.');
  } else {
    alert('Sorry, it is true that I have witnessed 3 solar eclipse in my lifetime.');
    console.log('You are incorrect.');
  }

var aboutMe2 = prompt('I have hiked trails no wider than a 12 inches ruler, Yes or No');
  if ((aboutMe2.toUpperCase() === 'YES') || (aboutMe2.toUpperCase() === 'Y')) {
    alert('That is correct. I have hiked Banaue Rice Terraces and Mount St. Helens where parts of the trail were no more than 12 inch wide.');
    guess += 1;
    console.log('You are correct.');
  } else {
    alert('Sorry. I have hiked Banaue Rice Terraces and Mount St. Helens where parts of the trail were no more than 12 inch wide.');
    console.log('You are incorrect.');
  }

var aboutMe3 = prompt('I was once detained by the Secret Service in Disneyland, Yes or No');
  if ((aboutMe3.toUpperCase() === 'YES') || (aboutMe3.toUpperCase() === 'Y')) {
    alert('Yes, I was detained by the Secret Service for allegedly using counterfeit money which I withdrawed directly from the bank day before.');
    guess += 1;
    console.log('You are correct.');
  } else {
    alert('Sorry. I was detained by the Secret Service for allegedly using counterfeit money which I withdrawed directly from the bank day before.');
    console.log('You are incorrect.');
  }

if (guess === 3) {
  alert("You guessed " + guess + " out of 3! Way to go!");
} else if (guess === 2){
  alert("You guessed " + guess + " out of 3! Not bad.");
} else {
  alert("You guessed " + guess + " out of 3! Nice try, you should have an adventure with me.");
}
}
