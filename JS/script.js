let GLOBAL = {
    gameLevel: undefined,
}

const startButton = document.querySelector('.startButton');
const gameLevel = document.querySelectorAll('.level');
const difficultySelection = document.querySelector('.difficultySelection');


gameLevel.forEach(level => {
    level.addEventListener('click', function(e) {
        GLOBAL.gameLevel = level.classList[1];
        level.classList.add("selected");
        console.log (GLOBAL.gameLevel);
    });
});


startButton.addEventListener('click', function(e) {
    clearScreen(difficultySelection);
});

function clearScreen(screen) {
    if (GLOBAL.gameLevel !== undefined) {
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
        } 
    }
}