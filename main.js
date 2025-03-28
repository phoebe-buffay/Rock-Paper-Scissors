// function getComputerChoice() {
//   if (Math.random() >= 0 && Math.random() <= 0.33) {
//     return "Rock";
//   } else if (Math.random() >= 0.34 && Math.random() <= 0.66) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }

// console.log(getComputerChoice());

function getComputerChoice() {
  if (
    Math.floor(Math.random() * 11) >= 0 &&
    Math.floor(Math.random() * 11) <= 4
  ) {
    return "Rock";
  } else if (
    Math.floor(Math.random() * 11) >= 5 &&
    Math.floor(Math.random() * 11) <= 8
  ) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Please, make your step.");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    if (computerChoice == "Rock" && humanChoice == "Paper") {
      console.log("You win! Paper beats Rock");
      humanScore = humanScore + 1;
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
      console.log("You lose! Rock beats Scissors");
      computerScore = computerScore + 1;
    } else if (computerChoice == "Rock" && humanChoice == "Rock") {
      console.log("Try one more time.");
    } else if (computerChoice == "Paper" && humanChoice == "Paper") {
      console.log("Try one more time.");
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
      console.log("You lose! Paper beats Rock");
      computerScore = computerScore + 1;
    } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
      console.log("You win! Scissors beats Paper");
      humanScore = humanScore + 1;
    } else if (computerChoice == "Scissors" && humanChoice == "Scissors") {
      console.log("Try one more time.");
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
      console.log("You lose! Scissors beats Paper");
      computerScore = computerScore + 1;
    } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
      console.log("You win! Rock beats Scissors");
      humanScore = humanScore + 1;
    }
  }
  while (computerScore < 5 && humanScore < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  //   let humanChoice = getHumanChoice();
  //   let computerChoice = getComputerChoice();
  //   playRound(humanChoice, computerChoice);

  //   humanChoice = getHumanChoice();
  //   computerChoice = getComputerChoice();
  //   playRound(humanChoice, computerChoice);

  //   humanChoice = getHumanChoice();
  //   computerChoice = getComputerChoice();
  //   playRound(humanChoice, computerChoice);

  //   humanChoice = getHumanChoice();
  //   computerChoice = getComputerChoice();
  //   playRound(humanChoice, computerChoice);

  //   humanChoice = getHumanChoice();
  //   computerChoice = getComputerChoice();
  //   playRound(humanChoice, computerChoice);

  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins");
  } else {
    console.log("Draw");
  }
}

playGame();
