let hangman = ['media/PaperSheet/paperSheet.jpg',
					  'media/PaperSheet/paperSheetHead.jpg',
					  'media/PaperSheet/paperSheetBody.jpg',
					  'media/PaperSheet/paperSheetHand1.jpg',
					  'media/PaperSheet/paperSheetHand2.jpg',
					  'media/PaperSheet/paperSheetLeg1.jpg',
					  'media/PaperSheet/paperSheetLeg2.jpg'];
let paperSheet = document.getElementById('paperSheet');
let description = document.getElementById('description');
let text = document.getElementById('text');
let playButton = document.getElementById('playButton');
let word, guess = '';
let keyBoard = 'qwertyuiopasdfghjklzxcvbnm';
let numberOfAttempts = 0, numberOfGuessed = 0;
let screenPrint = document.createElement('h1');
let keyBoardSection = document.createElement('div');
paperSheet.src = hangman[numberOfAttempts];

function preload(){
	word = loadJSON('https://random-word-api.herokuapp.com/word?number=1');
}

function setup(){
	word = word[0];
}

function gameOver(win){
	description.removeChild(keyBoardSection);
	guess = word;
	screenPrint.textContent = guess;
	let endMessage = document.createElement('h1');
	endMessage.id = 'endMessage';
	description.appendChild(endMessage);

	if(win){
		endMessage.textContent = 'You won.'
		endMessage.style.color = 'green';
	}

	else{
		endMessage.textContent = 'You lost.'
		endMessage.style.color = 'red';
	}

	let endText = document.createElement('p');
	endText.id = 'endText';
	endText.textContent = "Now, the computer:";
	description.appendChild(endText);

	setTimeout(function(){description.id = 'descriptionFade'; 

		setTimeout(function(){
			description.removeChild(endMessage);
			description.removeChild(endText);
			description.removeChild(screenPrint);
			startComputerGuess();},2000);
			
			}, 3000);
	}

function letterGuess(letter, currentButton){
	let ok = false;
	for(let i = 0; i < word.length; i++)
		if(word[i] == letter){
			ok = true; 

			if(guess[2*i] == '_')
			numberOfGuessed++;
		
			currentButton.style.background = 'green';
			guess = guess.slice(0, 2*i) + letter + guess.slice(2*i + 1);
			screenPrint.textContent = guess;
		}

	if(ok == false){
		numberOfAttempts++;
		currentButton.style.background = 'red';
	}
	paperSheet.src = hangman[numberOfAttempts];

	if(numberOfAttempts == 6 || numberOfGuessed == word.length)
		gameOver(ok);
}

function startGame(){
	description.removeChild(text);
	description.removeChild(playButton);
	numberOfAttempts = 0;

	for(let i = 0; i < word.length; i++)
		guess += '_ ';

	screenPrint.textContent = guess;
	screenPrint.id = 'screenPrint';
	description.appendChild(screenPrint);

	description.appendChild(keyBoardSection);
	let nrDiv = 0, currentDiv;
	for(i = 0; i < 26; i++){
		if(i == 0 || i == 10 || i == 19){
			currentDiv = document.createElement('div');
			keyBoardSection.appendChild(currentDiv);
		}
		let letter = keyBoard[i];
		let currentButton = document.createElement('button');
		currentButton.textContent = letter;
		currentButton.id = 'keyButton';
		currentButton.addEventListener('click', function(){letterGuess(letter, currentButton);});
		currentDiv.appendChild(currentButton);
	}
}
