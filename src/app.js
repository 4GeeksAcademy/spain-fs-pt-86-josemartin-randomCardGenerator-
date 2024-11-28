const valueList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
const symbolList = ["♣️", "♠️", "♥️", "♦️"];
const colorList = ["blue", "red"];

const getRandomValue = () => {
  let rnd = Math.random();
  let item = Math.floor(rnd * valueList.length);
  return valueList[item];
};

const getRandomSymbol = () => {
  let rnd = Math.random();
  let item = Math.floor(rnd * symbolList.length);
  return symbolList[item];
};

const getRandomColor = () => {
  let rnd = Math.random();
  let item = Math.floor(rnd * colorList.length);
  return colorList[item];
};

const getRandomCard = () => {
  let value = getRandomValue();
  let symbol = getRandomSymbol();
  let color = getRandomColor();
  if (symbol === "♣️" || symbol === "♠️") {
    color = "blue";
  }
  if (symbol === "♥️" || symbol === "♦️") {
    color = "red";
  }
  return { value, symbol, color };
};

const getMaze = () => {
  const cardOne = getRandomCard();
  const cardTwo = getRandomCard();
  const cardThree = getRandomCard();
  const cardFour = getRandomCard();
  const cardFive = getRandomCard();
  return [cardOne, cardTwo, cardThree, cardFour, cardFive];
};

const renderCard = (card, selector) => {
  if (/__value\d+/.test(selector)) {
    document.querySelector(selector).innerHTML = card.value;
  } else if (/__symbol/.test(selector)) {
    document.querySelector(selector).innerHTML = card.symbol;
  }
};

const renderMaze = maze => {
  const [cardOne, cardTwo, cardThree, cardFour, cardFive] = maze;

  renderCard(cardOne, "#card-one");
  renderCard(cardOne, ".card-one__value1");
  renderCard(cardOne, ".card-one__symbol");
  renderCard(cardOne, ".card-one__value2");

  renderCard(cardTwo, "#card-two");
  renderCard(cardTwo, ".card-two__value1");
  renderCard(cardTwo, ".card-two__symbol");
  renderCard(cardTwo, ".card-two__value2");

  renderCard(cardThree, "#card-three");
  renderCard(cardThree, ".card-three__value1");
  renderCard(cardThree, ".card-three__symbol");
  renderCard(cardThree, ".card-three__value2");

  renderCard(cardFour, "#card-four");
  renderCard(cardFour, ".card-four__value1");
  renderCard(cardFour, ".card-four__symbol");
  renderCard(cardFour, ".card-four__value2");

  renderCard(cardFive, "#card-five");
  renderCard(cardFive, ".card-five__value1");
  renderCard(cardFive, ".card-five__symbol");
  renderCard(cardFive, ".card-five__value2");
};

const play = () => {
  const maze = getMaze();
  renderMaze(maze);
};

play();
