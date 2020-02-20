// click one of three images (rock, paper, or scissors) on screen
// computer randomly chooses one also (rock, paper or scissors)
// compare user selected and computer selected choices
// determine if user or computer wins
// dispaly result to the browser
// start process over so user can play again..

let x = document.getElementById('rock').addEventListener('click', userChoice);
let y = document.getElementById('paper').addEventListener('click', userChoice);
let z = document
	.getElementById('scissors')
	.addEventListener('click', userChoice);

let computerChoice;
let playerChoice;

function userChoice() {
	playerChoice = this.id;
	computerChoiceFunction();
	compareChoices();
	console.log(playerChoice);
}

function computerChoiceFunction() {
	let computerChoice = Math.ceil(Math.random() * 3);
	if (computerChoice === 1) {
		computerChoice = 'rock';
	} else if (computerChoice === 2) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}
	console.log(computerChoice);
}

function compareChoices() {
	if (computerChoice === playerChoice) {
		document.getElementById('computer-message').innerHTML =
			'You both chose ' + computerChoice + '! Its a draw!';
	} else if (computerChoice === 'paper' && playerChoice === 'scissors') {
		document.getElementById('computer-message').innerHTML =
			'The computer chose paper! You chose ' + playerChoice + ' You win!';
	} else if (computerChoice === 'paper' && playerChoice === 'rock') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose paper! You chose Rock! You lose!';
	} else if (computerChoice === 'rock' && playerChoice === 'paper') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose rock! You chose paper! You win!';
	} else if (computerChoice === 'rock' && playerChoice === 'scissors') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose rock! You chose Scissors! You lose!';
	} else if (computerChoice === 'scissors' && playerChoice === 'rock') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose scissors! You chose rock! You win!';
	} else if (computerChoice === 'scissors' && playerChoice === 'paper') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose scissors! You chose paper! You lose!';
	}
}
