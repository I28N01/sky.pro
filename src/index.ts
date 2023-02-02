let GLOBAL = {
    gameLevel: 0,
    timer: 0,
};

let playCards = [];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const cards = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const startButton = document.querySelector('.button');
const gameLevel = document.querySelectorAll('.level');

gameLevel.forEach((level) => {
    level.addEventListener('click', function () {
        if (level.classList.contains('selected')) {
            level.classList.remove('selected');
            GLOBAL.gameLevel = 0;
        } else {
            gameLevel.forEach((level2) => {
                level2.classList.remove('selected');
            });
            GLOBAL.gameLevel = Number(level.classList[1]);
            level.classList.add('selected');
            console.log(GLOBAL.gameLevel);
        }
    });
});

startButton.addEventListener('click', function () {
    if (GLOBAL.gameLevel !== 0) {
        clearScreen(document.querySelector('.firstScreen'));
        CreateGameScreen();
    } else {
        document.querySelector('.header').classList.add('bounce');
        setTimeout(ChooseYourDestiny, 1000);
    }

    function ChooseYourDestiny() {
        document.querySelector('.header').classList.remove('bounce');
    }
});

/** Создание экрана */
function CreateGameScreen() {
    renderScreen('section', 'wrap game-screen', document.body, null);
    renderScreen('div', 'game-data', document.querySelector('.wrap'), null);
    renderScreen('div', 'timer', document.querySelector('.game-data'), null);
    renderScreen('div', 'timer-name', document.querySelector('.timer'), null);
    renderScreen('p', '', document.querySelector('.timer-name'), 'min');
    renderScreen('p', '', document.querySelector('.timer-name'), 'sec');
    renderScreen('h2', 'timer-digital timer-start', document.querySelector('.timer'), '0.00');
    renderScreen(
        'button',
        'button reset-btn',
        document.querySelector('.game-data'),
        'Начать заново'
    );
    document.querySelector('.reset-btn').addEventListener('click', function () {
        document.location.reload();
    });

    renderScreen('div', 'card-field', document.querySelector('.wrap'), null);

    createCards();
    for (let i = 0; i < GLOBAL.gameLevel; i++) {
        renderScreen('div', `play-card card${i} ${i}`, document.querySelector('.card-field'), null);
        const card = document.querySelector<HTMLElement>(`.card${i}`);
        card.style.backgroundImage = `${playCards[i]}`;
    }

    /** закрытие карт */
    timer();
    setTimeout(closeCards, 5000);
    setTimeout(OpenCards, 5000);

    /** Открытие карт */
    function OpenCards() {
        const playCard = document.querySelectorAll('.play-card');
        playCard.forEach((card) => {
            card.addEventListener('click', function () {
                let cardNumber = card.classList[2];
                const card1 = document.querySelector<HTMLElement>(`.card${cardNumber}`);
                card1.style.backgroundImage = `${playCards[cardNumber]}`;

                document.querySelector(`.card${cardNumber}`).classList.add('active');
                document.querySelector(`.card${cardNumber}`).classList.add('done');
                let active = document.querySelectorAll<HTMLElement>(`.active`);

                if (GLOBAL.gameLevel <= document.querySelectorAll('.done').length) {
                    clearTimeout(t);
                    document.querySelector(`.blackout`).classList.add('popup');
                    document
                        .querySelector('.play-again-btn')
                        .addEventListener('click', function () {
                            document.location.reload();
                        });
                    document.querySelector(`.header`).textContent = 'Вы выйграли! ';
                    const card3 = document.querySelector<HTMLImageElement>(`.final-img`);
                    card3.src = 'src/img/win.png';
                }
                if (active.length > 1) {
                    if (active[0].style.backgroundImage === active[1].style.backgroundImage) {
                        playCard.forEach(() => {
                            if (document.querySelector(`.active`)) {
                                document.querySelector(`.active`).classList.remove('active');
                            }
                        });
                    } else {
                        clearTimeout(t);
                        document.querySelector(`.blackout`).classList.add('popup');
                        document
                            .querySelector('.play-again-btn')
                            .addEventListener('click', function () {
                                document.location.reload();
                            });
                    }
                }
            });
        });
    }
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
        const card5 = document.querySelector<HTMLElement>(`.card${i}`);
        card5.style.backgroundImage = `url(./src/img/card-cover.png)`;
    }
}

/** timer **/
//@ts-ignore
let sec = 0;
let min = 0;
let t;

//@ts-ignore
function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        t;
    }
}
function add() {
    let timerStart = document.querySelector('.timer-start');
    let timerFinish = document.querySelector('.timer-finish');

    tick();

    GLOBAL.timer = Number((min > 9 ? min : '0' + min) + '.' + (sec > 9 ? sec : '0' + sec));
    timerStart.textContent = String(GLOBAL.timer);
    timerFinish.textContent = String(GLOBAL.timer);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
