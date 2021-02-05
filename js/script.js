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
	if(argMoveId == 1){
	  return 'kamień';
	}
	else if(argMoveId == 2){
		return 'papier';
	}
	else if(argMoveId == 3){
		return 'nożyce';
	}
  
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
  }

function displayResult(argComputerMove,argPlayerMove){
	console.log('Wywołano funkcję displayResult z argumentami:' + argComputerMove + argPlayerMove);
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Wygrałeś!');
	}else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage ('Wygrałeś!');
	}else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage ("Wygrałeś!");
	}else if (argComputerMove == argPlayerMove){
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

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
	computerMove = "papier";
} else {
	computerMove = "nożyczki";
}
*/

printMessage ('Mój ruch to:' + computerMove);

/* Player Move */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
	playerMove = 'papier';
} else if (playerInput == '3'){
	playerMove = 'nożyce';
} else {
	printMessage == playerMove;
}
*/

printMessage('Twój ruch to: ' + playerMove);

/* 
if( computerMove == 'kamień' && playerMove == "kamień"){
	printMessage ('Remis');
} else if (computerMove == 'kamień' && playerMove =='papier'){
	printMessage ('Ty wygrywasz');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage ('przegrywasz');
} else if (computerMove == 'kamień' && playerMove == 'nieznany ruch'){
	printMessage ('Grasz niezgodnie z zasadami');
} else if (computerMove == 'papier' && playerMove =='kamień'){
	printMessage ('przegrywasz');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage ('Ty wygrywasz');
} else if (computerMove == 'papier' && playerMove == 'nieznany ruch'){
	printMessage ('Grasz niezgodnie z zasadami');
} else if (computerMove == 'papier' && playerMove == 'papier'){
	printMessage ('remis');
} else if (computerMove == 'nożyce' && playerMove =='kamień'){
	printMessage ('Ty wygrywasz');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage ('przegrywasz');
} else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
	printMessage ('Grasz niezgodnie z zasadami');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage ('remis');
}
*/
displayResult(computerMove,playerMove);