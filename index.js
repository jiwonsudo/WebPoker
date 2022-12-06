// window.onload = 

// about cards
const allCards = [
  'c_2', 'c_3', 'c_4', 'c_5',' c_6', 'c_7', 'c_8', 'c_9', 'c_10', 'c_ace', 'c_jack', 'c_king', 'c_queen',
  'd_2', 'd_3', 'd_4', 'd_5', 'd_6', 'd_7', 'd_8', 'd_9', 'd_10', 'd_ace', 'd_jack', 'd_king', 'd_queen',
  'h_2', 'h_3', 'h_4', 'h_5', 'h_6', 'h_7', 'h_8', 'h_9', 'h_10', 'h_ace', 'h_jack', 'h_king', 'h_queen',
  's_2', 's_3', 's_4', 's_5', 's_6', 's_7', 's_8', 's_9', 's_10', 's_ace', 's_jack', 's_king', 's_queen',
];

let thisCards = [];
let communityCards = [];

// about players
const players = ['playerMe', 'platerLeft', 'playerFront', 'playerRight'];

const playerMe = {
  cards : [],
  money : 430,
  chip_1 : 5,
  chip_5 : 5,
  chip_10 : 5,
  chip_20 : 5,
  chip_50 : 5,
  isFold : false,
  isLose : false,
};

const playerLeft = {
  cards : [],
  money : 430,
  chip_1 : 5,
  chip_5 : 5,
  chip_10 : 5,
  chip_20 : 5,
  chip_50 : 5,
  isFold : false,
  isLose : false,
};

const playerFront = {
  cards : [],
  money : 430,
  chip_1 : 5,
  chip_5 : 5,
  chip_10 : 5,
  chip_20 : 5,
  chip_50 : 5,
  isFold : false,
  isLose : false,
};

const playerRight = {
  cards : [],
  money : 430,
  chip_1 : 5,
  chip_5 : 5,
  chip_10 : 5,
  chip_20 : 5,
  chip_50 : 5,
  isFold : false,
  isLose : false,
};

// about game itself
let blindNow = 0;

/**
 * set smallBlind and bigBlind, set blindnow as blindnow + 1 to prepare next game.
 * @returns [smallBlind, bigBlind] (as Number Array, Between 0 and 3)
 */
function setBlind() {
  let blinds = [];
  if (blindNow === 3) {
    blinds.push(players[3]);
    blinds.push(players[0]);
    blindNow = 0;
  } else {
    blinds.push(players[blindNow]);
    blinds.push(players[blindNow + 1]);
    blindNow++;
  }
  return blinds;
}

function dealPreFlop() {
  thisCards = [...allCards];

  // deal 2 cards to each player.
  for (let i = 0; i < 2; i++) {
    playerMe.cards.push(pickRandomCard());
    playerLeft.cards.push(pickRandomCard());
    playerFront.cards.push(pickRandomCard());
    playerRight.cards.push(pickRandomCard());
  }

  //TODO write code to visualize each player's picked cards on HTML.

}

function dealFlop() {
  for (let i = 0; i < 3; i++) {
    communityCards.push(pickRandomCard());
  }
  
  //TODO write code to visualize picked community cards on HTML.

}

function dealTurnOrRiver() {
  communityCards.push(pickRandomCard());

  //TODO write code to visualize picked community cards on HTML.

}

function betting() {

}

function checkRanksOfHands() {

}

function betMoney() {
  
}

function estimateWinningRate() {

}

function judgeWinner() {

}

function setNextGame() {

}

/**
 * picks random card in thisCards, and erase it from thisCards.
 * @returns {string} name of picked card
 */
function pickRandomCard() {
  const indexOfPickedCard = getRandomNumber(0, thisCards.length - 1);
  const pickedCard = thisCards[indexOfPickedCard];
  thisCards.splice(indexOfPickedCard, 1);
  return pickedCard;
}

/**
 * @param {number} min - minimum number of random number
 * @param {number} max - maximum number of random number
 * @returns random number between min and max
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}