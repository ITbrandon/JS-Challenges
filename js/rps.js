let playGame = confirm("Let's Play Rock Paper Scissors");

if(playGame)
{
  let move = prompt("Type 'rock', 'paper', or 'scissors'");
  let playerMove = move.trim().toLowerCase();
  let computerNumber = Math.floor((Math.random()*3)+1);
  let computerMove = (computerNumber === 1) ? "rock" : (computerNumber === 2) ? "paper" :  "scissors";

  let result = (playerMove === null) ? "Wait you didn't Pick an Action" : (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') ? "Not a proper action"
  : (playerMove === computerMove) ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nWe Tied`
    : (playerMove === 'rock' && computerMove === 'scissors') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
      : (playerMove === 'rock' && computerMove === 'paper') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`
        : (playerMove === 'paper' && computerMove === 'rock') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
          : (playerMove === 'paper' && computerMove === 'scissors') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`
            : (playerMove === 'scissors' && computerMove === 'paper') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
              : `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`;
                
  alert(result);
  let playAgain = confirm("Play Again?");
  playAgain ? location.reload() : alert("Thanks for Playing");
}

else {
  alert("ok, maybe next time")
}