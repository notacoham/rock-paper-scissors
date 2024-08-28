function getComputerChoice() {
  const choiceNum = Math.floor(Math.random() * 3);
  let choice = '';
  if (choiceNum === 0) {
    choice = 'rock';
  }
  if (choiceNum === 1) {
    choice = 'paper';
  }
  if (choiceNum === 2) {
    choice = 'scissors';
  }

  const computerChoice = choice.toUpperCase();
  console.log('The Computer Chose: ' + computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt(
    'Enter your choice (Rock, Paper, Scissors): '
  ).toUpperCase();
  console.log('You chose: ' + humanChoice);
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
      (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
      (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
      console.log('You win!');
      humanScore++;
    } else if (
      (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') ||
      (computerChoice === 'PAPER' && humanChoice === 'ROCK') ||
      (computerChoice === 'SCISSORS' && humanChoice === 'PAPER')
    ) {
      console.log('You lose!');
      computerScore++;
    } else {
      console.log('Its a tie!');
    }

    console.log(`Score: `);
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log('---------------------------');
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You're the ultimate victor! Final Score: `);
    console.log(`You: ${humanScore} --> Computer: ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lost this time... Final Score: `);
    console.log(`You: ${humanScore} --> Computer: ${computerScore}`);
  } else {
    console.log('Its a tie in the end!!! How exciting!');
  }
}

playGame();
