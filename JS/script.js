let GLOBAL = {
    gameLevel: undefined,
}
let cardURL = 0;

const suits  = ['clubs', 'diamonds', 'hearts', 'spades']
const cards = ['6', '7','8','9','10','jack','queen','king','ace']

const startButton = document.querySelector('.button');
const gameLevel = document.querySelectorAll('.level');
const difficultySelection = document.querySelector('.difficultySelection');
const wrap = document.querySelector('.wrap');

gameLevel.forEach(level => {
    level.addEventListener('click', function(e) {
        GLOBAL.gameLevel = level.classList[1];
        level.classList.add("selected");
        console.log (GLOBAL.gameLevel);
    });
});


startButton.addEventListener('click', function(e) {
    clearScreen(document.body);
    CreateGameScreen();
});


function CreateGameScreen() {
    renderScreen ('section', 'wrap gameScreen', document.body);
    renderScreen ('div', 'gameData', document.querySelector('.wrap'));
    renderScreen ('div', 'timer', document.querySelector('.gameData'));
    renderScreen ('div', 'timerName', document.querySelector('.timer'));
    renderScreen ('p', '', document.querySelector('.timerName'), 'min');
    renderScreen ('p', '', document.querySelector('.timerName'), 'sec');
    renderScreen ('h2', 'timerDigital', document.querySelector('.timer'), '00.00');
    renderScreen ('button', 'button resetBtn', document.querySelector('.gameData'), 'Начать заново');
    renderScreen ('div', 'cardField', document.querySelector('.wrap'));
    
    
    for (let i = 0; i < GLOBAL.gameLevel ; i++) { 
        renderScreen ('div', `playCard playCardCover card${i}`, document.querySelector('.cardField'));
      } 

    cardMaker(`.card0`);
}

function clearScreen(screen) {
    if (GLOBAL.gameLevel !== undefined) {
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
        } 
    }
}

function renderScreen (attribute, className, node, textContent) {
    const render = document.createElement(attribute);
    render.classList = className;
    render.textContent = textContent;
    node.appendChild(render);
  }



 function cardMaker(cardNumber){
    let randSuits = ~~(Math.random()*suits.length);
    let cardSuits = suits[randSuits];
    let randCards = ~~(Math.random()*cards.length);
    let cardCards = cards[randCards];
    cardURL = `./img/cards/${cardSuits}/${cardCards}.png`
    document.querySelector(cardNumber).style.backgroundImage = `url(${cardURL})`;;
    console.log (cardURL)
    
 }



