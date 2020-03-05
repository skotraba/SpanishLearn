const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');


//Keep track of current card
let currentActiveCard = 0;

//Store DOM cards
const cardsEl = [];


const cardsData = [
    {
        question: "¿Qué es esto?",
        answer: "What\s that?"
    },
    {
        question: '¿Cuál es tu favorito?',
        answer: 'Which is your favourite'
    },
    {
        question: "Cuándo vas a ir?",
        answer: 'When will you go?'
    },
    {
        question: "¿Dónde vives?",
        answer: 'Where do you live?'
    },
    {
        question: "¿Cómo está usted? ",
        answer: 'How are you?'
    },
    {
        question: "Hola, ¿cómo te llamas?",
        answer: 'Hello, what’s your name?'
    },
];

//Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

//Create single card in DOM
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if(index === 0) {
        card.classList.add('active');
    }


    card.innerHTML = `<div class="inner-card">
    <div class="inner-card-front">
        <p>
            ${data.question}
        </p>
    </div>
    <div class="inner-card-back">
        <p>
          ${data.answer}  
        </p>
    </div>
</div>`;

card.addEventListener('click', () => card.classList.toggle('show-answer'));

//Add to DOM cards
cardsEl.push(card);
cardsContainer.appendChild(card)
updateCurrentText();

}

function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1} /${cardsEl.length}`;
}


createCards();

//Event Listeners


//Next Button
//Class Name will override class whereas class list will append class
nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';

    currentActiveCard = currentActiveCard + 1;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});

//Previous Button
prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard = currentActiveCard - 1;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});

