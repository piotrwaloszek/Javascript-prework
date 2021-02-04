function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
	computerMove = "papier";
} else {
	computerMove = "nożyczki";
}
printMessage ('Mój ruch to:' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
	playerMove = 'papier';
} else if (playerInput == '3'){
	playerMove = 'nożyce';
} else {
	printMessage == playerMove;
}

printMessage('Twój ruch to: ' + playerMove);

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
} else if (computerMove == 'nożyczki' && playerMove =='kamień'){
	printMessage ('Ty wygrywasz');
} else if (computerMove == 'nożyczki' && playerMove == 'papier'){
	printMessage ('przegrywasz');
} else if (computerMove == 'nożyczki' && playerMove == 'nieznany ruch'){
	printMessage ('Grasz niezgodnie z zasadami');
} else if (computerMove == 'nożyczki' && playerMove == 'nożyce'){
	printMessage ('remis');
}