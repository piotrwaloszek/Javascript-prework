let computerScore = 0
let playerScore = 0

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if (argMoveId == 1) {
		return 'kamień';
	}
	else if (argMoveId == 2) {
		return 'papier';
	}
	else if (argMoveId == 3) {
		return 'nożyce';
	}
  
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}

function displayResult(argComputerMove,argPlayerMove){
	console.log('Wywołano funkcję displayResult z argumentami:' + argComputerMove + argPlayerMove);
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Wygrałeś!');
	}else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage ('Wygrałeś!');
	}else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage ("Wygrałeś!");
	}else if (argComputerMove == argPlayerMove) {
		printMessage ("Remis!");
	}else if (argPlayerMove == "nieznany ruch") {
		printMessage ("Nieznany ruch");
	}else {
		printMessage ("Przegrałeś");
	}
}

function playGame (playerInput) {
	clearMessages();
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let computerMove = getMoveName(randomNumber);
	printMessage ('Mój ruch to:' + computerMove);
	printMessage('Twój ruch to: ' + playerInput);
	displayResult(computerMove,playerInput);
}

function score (argPoint) {
	if (argPoint == 1) {
		computerScore = computerscore+1;
	} else if (argPoint == 0) {
		playerScore = playerScore+1;
	}return computerscore,playerInput;
}

document.getElementById('play-rock').addEventListener("click", function () {
	playGame('kamień');
});
	
document.getElementById('play-paper').addEventListener("click", function () {
	playGame('papier');
});
	
document.getElementById('play-scissors').addEventListener("click", function () {
	playGame('nożyce');
});
document.getElementById('result').innerHTML = "Komputer:" + computerScore + "Gracz:" + playerScore;
score(displayResult(computerMove,playerInput));
