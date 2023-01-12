let GLOBAL = {
    gameLevel: undefined,
};

let playCards = [];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const cards = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const startButton = document.querySelector('.button');
const gameLevel = document.querySelectorAll('.level');

gameLevel.forEach((level) => {
    level.addEventListener('click', function () {
        GLOBAL.gameLevel = level.classList[1];
        level.classList.add('selected');
        console.log(GLOBAL.gameLevel);
    });
});

startButton.addEventListener('click', function () {
    if (GLOBAL.gameLevel !== undefined) {
        clearScreen(document.body);
        CreateGameScreen();
    } else {
        console.log('выберите уровень');
    }
});

/** Создание экрана */
function CreateGameScreen() {
    renderScreen('section', 'wrap game-screen', document.body);
    renderScreen('div', 'game-data', document.querySelector('.wrap'));
    renderScreen('div', 'timer', document.querySelector('.game-data'));
    renderScreen('div', 'timer-name', document.querySelector('.timer'));
    renderScreen('p', '', document.querySelector('.timer-name'), 'min');
    renderScreen('p', '', document.querySelector('.timer-name'), 'sec');
    renderScreen(
        'h2',
        'timer-digital',
        document.querySelector('.timer'),
        '00.00'
    );
    renderScreen(
        'button',
        'button reset-btn',
        document.querySelector('.game-data'),
        'Начать заново'
    );
    renderScreen('div', 'card-field', document.querySelector('.wrap'));
    document.querySelector('.reset-btn').addEventListener('click', function () {
        document.location.reload();
    });
    createCards();
    for (let i = 0; i < GLOBAL.gameLevel; i++) {
        renderScreen(
            'div',
            `play-card card${i} 10${i}`,
            document.querySelector('.card-field')
        );
        document.querySelector(
            `.card${i}`
        ).style.backgroundImage = `${playCards[i]}`;
    }

    /** закрытие карт */
    setTimeout(closeCards, 5000);

    /** Открытие карт */
    const playCard = document.querySelectorAll('.play-card');
    playCard.forEach((card) => {
        card.addEventListener('click', function () {
            let cardNumber = card.classList[2] - 100;
            document.querySelector(
                `.card${cardNumber}`
            ).style.backgroundImage = `${playCards[cardNumber]}`;
            document
                .querySelector(`.card${cardNumber}`)
                .classList.add('active');
            let active = document.querySelectorAll(`.active`);
            if (
                active[0].style.backgroundImage ===
                active[1].style.backgroundImage
            ) {
                alert('Вы победили');
            } else {
                alert('Вы проиграли =(');
            }
        });
    });
}

/** Функции */
function clearScreen(screen) {
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
}

function renderScreen(attribute, className, node, textContent) {
    const render = document.createElement(attribute);
    render.classList = className;
    render.textContent = textContent;
    node.appendChild(render);
}

function createCards() {
    for (let i = 0; i < GLOBAL.gameLevel / 2; i++) {
        let cardSuits = suits[`${~~(Math.random() * suits.length)}`];
        let cardCards = cards[`${~~(Math.random() * cards.length)}`];
        playCards.push(`url(./src/img/cards/${cardSuits}/${cardCards}.png)`);
        playCards.push(`url(./src/img/cards/${cardSuits}/${cardCards}.png)`);
        playCards.sort(() => Math.random() - 0.6);
    }
}

function closeCards() {
    for (let i = 0; i < GLOBAL.gameLevel; i++) {
        document.querySelector(
            `.card${i}`
        ).style.backgroundImage = `url(./src/img/card-cover.png)`;
    }
}
