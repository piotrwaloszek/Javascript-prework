{
	let computerScore = 0
	let playerScore = 0
	let resultDOM = document.getElementById('result');

	const printMessage = function(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	const clearMessages = function(){
		document.getElementById('messages').innerHTML = '';
	}

	const getMoveName = function(argMoveId){
		if (argMoveId == 1){
			return 'kamień';
		}
		else if (argMoveId == 2){
			return 'papier';
		}
		else if (argMoveId == 3){
			return 'nożyce';
		}
	
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}

	const displayResult = function(argComputerMove,argPlayerMove){
		console.log('Wywołano funkcję displayResult z argumentami:' + argComputerMove + argPlayerMove);
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('Wygrałeś!');
			score('player');
		}else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			printMessage ('Wygrałeś!');
			score('player');
		}else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			printMessage ("Wygrałeś!");
			score('player');
		}else if (argComputerMove == argPlayerMove){
			printMessage ("Remis!");
		}else if (argPlayerMove == "nieznany ruch"){
			printMessage ("Nieznany ruch");
		}else {
			printMessage ("Przegrałeś");
			score('computer');
		}
	}

	const playGame = function(playerInput) {
		clearMessages();
		let randomNumber = Math.floor(Math.random() * 3 + 1);
		let computerMove = getMoveName(randomNumber);
		printMessage ('Mój ruch to:' + computerMove);
		printMessage('Twój ruch to: ' + playerInput);
		displayResult(computerMove,playerInput);
	}

	const score = function(winner){
		if (winner == 'computer'){
			computerScore++;
		} else if (winner == 'player'){
			playerScore++;
		}
		resultDOM.innerHTML = `Komputer: ${computerScore} : Gracz: ${playerScore}`;
	}

	document.getElementById('play-rock').addEventListener("click", function(){
		playGame('kamień');
	});
		
	document.getElementById('play-paper').addEventListener("click", function(){
		playGame('papier');
	});
		
	document.getElementById('play-scissors').addEventListener("click", function(){
		playGame('nożyce');
	});
}
