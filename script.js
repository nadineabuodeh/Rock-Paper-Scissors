document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function handleClick(playerChoice) {
        const computerChoice = getComputerChoice();
        const resultMessage = determineWinner(playerChoice, computerChoice);
        result.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultMessage}`;
    }

    function resetGame() {
        result.textContent = '';
    }

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.id;
            handleClick(playerChoice);
        });
    });

    resetBtn.addEventListener('click', resetGame);
});
