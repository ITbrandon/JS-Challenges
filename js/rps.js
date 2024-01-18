const initGame = () => {
  const startGame = confirm("Let's Play Rock Paper Scissors");
  startGame ? playGame() : alert("ok, maybe next time");
}

const playGame = () => {
  while(true)
  {
    let playerMove = getPlayerMove();
    playerMove = format(playerMove);

    if(playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors') {
      gameplay(playerMove, getComputerMove());
    }


    else {
      invalidChoice();
      continue;
    }
  }
}

const gameplay = (playerMove, computerMove) => {
  const result = (playerMove === computerMove) ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nWe Tied`
    : (playerMove === 'rock' && computerMove === 'scissors') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
      : (playerMove === 'rock' && computerMove === 'paper') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`
        : (playerMove === 'paper' && computerMove === 'rock') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
          : (playerMove === 'paper' && computerMove === 'scissors') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`
            : (playerMove === 'scissors' && computerMove === 'paper') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
              : `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`;
                
  alert(result);
  playAgain();
}

const getPlayerMove = () => {

  const move = prompt("Type 'rock', 'paper', or 'scissors'");
  
  if(move === null) {
    changedMind();
  }

  
  return move;
}

const getComputerMove = () => {
  const computerNumber = Math.floor(Math.random() * 3);
  const computerArray = ['rock', 'paper', 'scissors'];
  const computerMove = computerArray[computerNumber];
  return computerMove;
}

const format = (move) => {
  return move.trim().toLowerCase();
}

const playAgain = () => {
  const playAgain = confirm("Play Again?");
  
  if(playAgain)
  {
    playGame();
  }

  else
  {
    alert("Thanks for Playing")
    playAgain = false;
  }
}

const changedMind = () => {
  alert("I guess you changed your mind");
  
}

const invalidChoice = () => {
  alert("Wait you didn't Pick a Proper Action");
}

initGame();