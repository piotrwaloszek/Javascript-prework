/* Function */

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

/* Computer Move */  
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);


printMessage ('Mój ruch to:' + computerMove);

/* Player Move */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove,playerMove);