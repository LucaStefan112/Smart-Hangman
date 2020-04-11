const populationNumber = 2500;
let generations;
let population;
let totalFitness;
const mutationRate = 0.1;
let matingPool;
let found;
let individualParagraphs;
let generationsCount;
let bestIndividualsDiv;
let procentage, procentageNumber;
const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$% ^&*()1234567890-_=+[{]}|;:",<.>/?';

function startComputerGuess(){
	generations = 0;
	population = [];
	totalFitness = 0;
	matingPool = [];
	found = false;
	individualParagraphs = [];
	generationsCount = document.createElement('h1');
	description.appendChild(generationsCount);
	bestIndividualsDiv = document.createElement('div');
	bestIndividualsDiv.id = 'bestIndividualsDiv';
	description.appendChild(bestIndividualsDiv);
	procentage = document.createElement('h1');
	procentageNumber = 0;
	description.appendChild(procentage);

	for(let i = 0; i < 15; i++){
		individualParagraphs[i] = document.createElement('h1');
		individualParagraphs[i].id = 'individualParagraph';
		bestIndividualsDiv.appendChild(individualParagraphs[i]);
	}	

	computerGuess();
}

function fitness(currentWord){

	let fitnessLevel = 0;
	for(let ii = 0; ii < word.length; ii++)
		if(word[ii] == currentWord[ii])
			fitnessLevel++;

	return fitnessLevel;
}

function individual(word, fitness){
	this.word = word;
	this.fitness = fitness;
} 

function calculateTotalFitness(){
	totalFitness = 0;
	for(let i = 0; i < populationNumber; i++)
		totalFitness += population[i].fitness;
}

function createPopulation(){

	generations++;

	for(let i = 0; i <= populationNumber; i++){

		let currentWord = '';

		for(let j = 0; j < word.length; j++){

			let character = characters[Math.floor(Math.random() * 91)];
			currentWord = currentWord.slice(0, j) + character;
		}

		population.push(new individual(currentWord, fitness(currentWord)));
	}
	calculateTotalFitness();

	checkStatus();
}

function newPopulation(){

	generations++;

	for(let i = 0; i < populationNumber; i++){

		let mutation = Math.random();
		let currentWord = '';

		if(mutation <= mutationRate)
			for(let j = 0; j < word.length; j++){

				let character = characters[Math.floor(Math.random() * 91)];
				currentWord = currentWord.slice(0, j) + character;
			}

		else{
			let randomValue1 = Math.random(), iterator1 = 0;
			while(randomValue1 - matingPool[iterator1].fitness >= 0)
				randomValue1 -= matingPool[iterator1++].fitness;

			let randomValue2 = Math.random(), iterator2 = 0;
			while(randomValue2 - matingPool[iterator2].fitness >= 0)
				randomValue2 -= matingPool[iterator2++].fitness;

			let randomPosition = Math.floor(Math.random() * word.length);
			currentWord = matingPool[iterator1].word.slice(0, randomPosition) + matingPool[iterator2].word.slice(randomPosition);
		}
		population[i] = new individual(currentWord, fitness(currentWord));
	}

	calculateTotalFitness();
	checkStatus();
}

function createMatingPool(){

	matingPool = [];

	for(let i = 0; i < populationNumber; i++)
		if(population[i].fitness != 0)
			matingPool.push(new individual(population[i].word, population[i].fitness / totalFitness));
}

function checkStatus(){

	let bestIndividualInGeneration = 0;

	generationsCount.textContent = 'Number of generations: ' + generations;

	for(let i = 0; i < populationNumber; i++)
		if(population[i].fitness > bestIndividualInGeneration.fitness || bestIndividualInGeneration == 0)
			bestIndividualInGeneration = population[i];

	procentageNumber = Math.floor((bestIndividualInGeneration.fitness / word.length) * 10000) / 100;

	procentage.textContent = 'Guessed: '+procentageNumber + '%';

	if(generations < 10){
		individualParagraphs[generations].textContent = bestIndividualInGeneration.word;

		if(bestIndividualInGeneration.word == word)
			individualParagraphs[generations].style.color = 'green';
	}

	else{
		for(let i = 0; i < 9; i++)
			individualParagraphs[i].textContent = individualParagraphs[i + 1].textContent;
		individualParagraphs[9].textContent = bestIndividualInGeneration.word;

		if(bestIndividualInGeneration.word == word)
			individualParagraphs[9].style.color = 'green';
	}

	if(bestIndividualInGeneration.word == word){
		found = true;
		startAgain();
	}
}

function startAgain(){
	let againButton = document.createElement('button');
	againButton.id = 'playButton';
	againButton.addEventListener('click', function(){location.reload();});
	description.appendChild(againButton);
}

function computerGuess(){

	while(totalFitness == 0)
		createPopulation();

	if(!found){
		createMatingPool();
		newPopulation();
	}
	
	if(!found)
		window.requestAnimationFrame(computerGuess);
}
