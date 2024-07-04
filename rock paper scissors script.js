const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice').querySelector('span');
const computerChoiceDisplay = document.getElementById('computer-choice').querySelector('span');
const resultDisplay = document.getElementById('game-result').querySelector('span');

const choicesArray = ['Rock', 'Paper', 'Scissors'];

choices.forEach(choice => choice.addEventListener('click', (e) => {
    const userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = computerChoice;
    const result = getResult(userChoice, computerChoice);
    resultDisplay.textContent = result;
}));

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice.toLowerCase()) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'Scissors') ||
        (userChoice === 'paper' && computerChoice === 'Rock') ||
        (userChoice === 'scissors' && computerChoice === 'Paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
