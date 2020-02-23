
let x = document.getElementById('rock').addEventListener('click', userChoice);
let y = document.getElementById('paper').addEventListener('click', userChoice);
let z = document.getElementById('scissors').addEventListener('click', userChoice);

let computerScore = 0;
let playerScore = 0;

function userChoice() {
	playerChoice = this.id;
	computerChoiceFunction();
	compareChoices();
	scoreTracker()
}

function computerChoiceFunction() {
	let randomNumber = Math.ceil(Math.random() * 3);
	if (randomNumber === 1) {
		computerChoice = 'rock';
	} else if (randomNumber === 2) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}
	console.log(randomNumber)
	console.log(computerChoice)
	return computerChoice
}

function compareChoices() {
	console.log(computerChoice)

	if (computerChoice === playerChoice) {
		document.getElementById('computer-message').innerHTML =
			'You both chose ' + computerChoice + '! Its a draw!';
	} else if (computerChoice === 'paper' && playerChoice === 'scissors') {
		document.getElementById('computer-message').innerHTML =
			'The computer chose paper! You chose ' + playerChoice + '. You win!';
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
			'Computer chose scissors!' + ' You chose paper!' + ' You lose!';
	}
}

function scoreTracker() {

	console.log(computerChoice)
	if (computerChoice === 'paper' && playerChoice === 'scissors') {
		playerScore++ , computerScore + 0
	} else if (computerChoice === 'paper' && playerChoice === 'rock') {
		computerScore++ , playerScore + 0
	} else if (computerChoice === 'scissors' && playerChoice === 'rock') {
		playerScore++ , computerScore + 0
	} else if (computerChoice === 'scissors' && playerChoice === 'paper') {
		computerScore++ , playerScore + 0
	} else if (computerChoice === 'rock' && playerChoice === 'paper') {
		playerScore++ , computerScore + 0
	} else if (computerChoice === 'rock' && playerChoice === 'scissors') {
		computerScore++ , playerScore + 0
	} else if (computerChoice === 'scissors' && playerChoice === 'scissors') {
		computerScore + 0, playerScore + 0
	} else if (computerChoice === 'rock' && playerChoice === 'rock') {
		computerScore + 0, playerScore + 0
	} else if (computerChoice === 'paper' && playerChoice === 'paper') {
		computerScore + 0, playerScore + 0
	}
	document.getElementById('computers-score').innerText = 'The Computers score is ' + computerScore
	document.getElementById('players-score').innerText = 'Your score is ' + playerScore
}