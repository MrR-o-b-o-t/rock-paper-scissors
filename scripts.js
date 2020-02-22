
let x = document.getElementById('rock').addEventListener('click', userChoice);
let y = document.getElementById('paper').addEventListener('click', userChoice);
let z = document.getElementById('scissors').addEventListener('click', userChoice);

// let computerChoice;
// let playerChoice;

let computerScore = 0;
let playerScore = 0;

function userChoice() {
	playerChoice = this.id;
	computerChoiceFunction();
	compareChoices();
	scoreTracker()
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
	return computerChoice
}

function compareChoices() {

	let thisComputerChoice = computerChoiceFunction()

	if (thisComputerChoice === playerChoice) {
		document.getElementById('computer-message').innerHTML =
			'You both chose ' + thisComputerChoice + '! Its a draw!';
	} else if (thisComputerChoice === 'paper' && playerChoice === 'scissors') {
		document.getElementById('computer-message').innerHTML =
			'The computer chose paper! You chose ' + playerChoice + '. You win!';
	} else if (thisComputerChoice === 'paper' && playerChoice === 'rock') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose paper! You chose Rock! You lose!';
	} else if (thisComputerChoice === 'rock' && playerChoice === 'paper') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose rock! You chose paper! You win!';
	} else if (thisComputerChoice === 'rock' && playerChoice === 'scissors') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose rock! You chose Scissors! You lose!';
	} else if (thisComputerChoice === 'scissors' && playerChoice === 'rock') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose scissors! You chose rock! You win!';
	} else if (thisComputerChoice === 'scissors' && playerChoice === 'paper') {
		document.getElementById('computer-message').innerHTML =
			'Computer chose scissors!' + ' You chose paper!' + ' You lose!';
	}
}

function scoreTracker() {

	let thisComputerChoice = computerChoiceFunction()

	if (thisComputerChoice === 'paper' && playerChoice === 'scissors') {
		playerScore += 1
	} else if (thisComputerChoice === 'paper' && playerChoice === 'rock') {
		computerScore += 1
	} else if (thisComputerChoice === 'scissors' && playerChoice === 'rock') {
		playerScore += 1
	} else if (thisComputerChoice === 'scissors' && playerChoice === 'paper') {
		computerScore += 1
	} else if (thisComputerChoice === 'rock' && playerChoice === 'paper') {
		playerScore += 1
	} else if (thisComputerChoice === 'rock' && playerChoice === 'scissors') {
		computerScore += 1
	}
	document.getElementById('computers-score').innerText = 'The Computers score is ' + computerScore
	document.getElementById('players-score').innerText = 'Your score is ' + playerScore
}