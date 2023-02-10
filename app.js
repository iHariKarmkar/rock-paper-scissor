const rockElement = document.querySelector('.rock');
const paperElement = document.querySelector('.paper');
const scissorElement = document.querySelector('.scissor');
const compSelectionElement = document.querySelector('.comp-selection')
const userSelectionElement = document.querySelector('.user-selection')
const resultDivElement = document.querySelector('.result-div');
const resultElement = document.querySelector('.result')
const resultMessageElement = document.querySelector('.result-div h3')

// Function to change the DOM after match
function showResultDiv(userChoice, compChoice){
    compSelectionElement.innerHTML = compChoice;
    userSelectionElement.innerHTML = userChoice;
    resultDivElement.style.display = 'block'
    setTimeout(() => {
    resultDivElement.style.display = 'none'
    }, 1500);
}

// Getting computer choice
function getComputerChoice(){
    const choiceList = ['rock', 'paper', 'scissor']
    const compChoice = Math.floor(Math.random() * 3);
    return choiceList[compChoice];
}

// Game logic
function startGame(userChoice) {
    const compChoice = getComputerChoice();    
    switch (userChoice + compChoice) {
    // Win condition
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            resultMessageElement.innerHTML = 'You <span class="result">won!</span>'
            showResultDiv(userChoice, compChoice)
            break;
    // Lose condition
        case 'scissorrock':
        case 'rockpaper':
        case 'paperscissor':
            resultMessageElement.innerHTML = 'You <span class="result">lose!</span>'
            showResultDiv(userChoice, compChoice)
            break;
    // Draw condition
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            resultMessageElement.innerHTML = 'Ohh! Match <span class="result">Draw!</span>'
            showResultDiv(userChoice, compChoice)
            break;
        default:
            break;
    }
    
}

rockElement.addEventListener('click', () => startGame('rock'))
paperElement.addEventListener('click', () => startGame('paper'))
scissorElement.addEventListener('click', () => startGame('scissor'))
