const moves = ["rock", "paper", "scissors"];

//this array contains the three valid moves: rock, paper, and scissors. It is used to validate the player’s input and randomly pick a move for the computer.

// gets the player's move from process.argv
const playerMove = process.argv[2]?.toLowerCase();
//?.: ensures the script doesn't crash if no input is provided. If process.argv[2] is undefined, the code won’t throw an error

if (!moves.includes(playerMove)) {
  console.log("Please enter a valid move: rock, paper, or scissors.");
  process.exit(1);
}
//moves.includes(playerMove): checks if the input is one of the valid moves

// generates a random move for the computer
const computerMove = moves[Math.floor(Math.random() * moves.length)];
//if the index is 0, it selects "rock".
//if the index is 1, it selects "paper".
//if the index is 2, it selects "scissors".

let result; // determines the result

if (playerMove === computerMove) {
  result = "It's a draw!";
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "scissors" && computerMove === "paper") ||
  (playerMove === "paper" && computerMove === "rock")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);