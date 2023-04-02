// Store the HTML elements in variables
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const winsEle = document.getElementById('wins');
const tiesEle = document.getElementById('ties');
const lossesEle = document.getElementById('losses');
const resultEle = document.getElementById('result');

// Global variables to keep track of wins, ties, and losses
let wins = 0;
let ties = 0;
let losses = 0;

// Function to generate the computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']; // Array of choices
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index
    return choices[randomIndex]; // Return the choice at the random index
}

// Function to play one round of the game
function playRound(playerSelection, computerSelection) {
    // if the player and computer make the same choice, it's a tie
    if (playerSelection === computerSelection) {
        ties++;
        tiesEle.textContent = ties;
        return "It's a tie!";
    // if the player chooses rock and the computer chooses scissors, the player wins
    // if the player chooses paper and the computer chooses rock, the player wins
    // if the player chooses scissors and the computer chooses paper, the player wins
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        wins++; // Increment the wins variable
        winsEle.textContent = wins; // Update the wins element
        return "You win! You picked " + playerSelection + " which beats " + computerSelection;
    // if the player chooses rock and the computer chooses paper, the player loses
    } else {
        losses++; // Increment the losses variable
        lossesEle.textContent = losses; // Update the losses element
        return "You lose! The computer picked " + computerSelection + " which beats " + playerSelection;
    }
}

// Function to handle the user's click on a button
function handleClick(event) {
    const playerSelection = event.target.id; // Get the id of the button that was clicked
    const computerSelection = computerPlay(); // Get the computer's choice
    const result = playRound(playerSelection, computerSelection); // Play one round of the game
    resultEle.textContent = result; // Display the result of the round
}

// Add event listeners to the buttons
rockBtn.addEventListener('click', handleClick);
paperBtn.addEventListener('click', handleClick);
scissorsBtn.addEventListener('click', handleClick);