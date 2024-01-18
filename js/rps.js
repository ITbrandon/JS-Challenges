let playGame = confirm("Let's Play Rock Paper Scissors");

if(playGame)
{
  while (playGame) {
  const move = prompt("Type 'rock', 'paper', or 'scissors'");

  if (move != null)
  {
  const playerMove = move.trim().toLowerCase();
  


    if(playerMove === 'rock' || playerMove === 'paper' || playerMove === 'scissors')
    {
  const computerNumber = Math.floor(Math.random() * 3);
  const computerArray = ['rock', 'paper', 'scissors'];
  const computerMove = computerArray[computerNumber];
  const result = (playerMove === computerMove) ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nWe Tied`
    : (playerMove === 'rock' && computerMove === 'scissors') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
      : (playerMove === 'rock' && computerMove === 'paper') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`
        : (playerMove === 'paper' && computerMove === 'rock') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
          : (playerMove === 'paper' && computerMove === 'scissors') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`
            : (playerMove === 'scissors' && computerMove === 'paper') ? `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Win`
              : `Player: ${playerMove}\n\nComputer: ${computerMove}\n\nYou Lose`;
                
  alert(result);
  playGame = confirm("Play Again?");
  if(!playGame) alert("Ok, thanks for playing");
    }

  else {
    alert("Wait you didn't Pick a Proper Action");
    continue;
  }
  }

  else {
    alert("I guess you changed your mind");
    break;
  }

}
}
else {
  alert("ok, maybe next time")
}