import { TypeCard } from "utils/constans/Enums";
import { Card } from "utils/constans/Types";

//get img by card
const getCardSvg = (card: Card) => {
  if (!card.isOpen) return 0;
  else {
    let index = 0;
    switch (card.typeCard) {
      case TypeCard.Clubs:
        index += card.value;
        break;
      case TypeCard.Diamonds:
        index += 13;
        index += card.value;
        break;
      case TypeCard.Hearts:
        index += 26;
        index += card.value;
        break;
      case TypeCard.Spades:
        index += 39;
        index += card.value;
        break;
    }
    return index;
  }
};

//check if there is an ace
const isAceExist = (cards: Card[]) => {
  const isAceExist = cards?.find((obj) => {
    return obj.value === 1;
  });
  return isAceExist ? true : false;
};

//get score without ace
const getScore = (cards: Card[]) => {
  let score = 0;
  cards?.forEach((element) => {
    if (element.isOpen) {
      element.value < 10 ? (score += element.value) : (score += 10);
    }
  });
  return score;
};

//get the score closest to 21
const getBestScore = (cards: Card[]) => {
  if (isAceExist(cards)) {
    let option1 = getScore(cards);
    let option2 = option1 + 10;
    return option2 > 21 ? option1 : option2;
  } else return getScore(cards);
};

//return score options to user
const showScoresOnPage = (hand: Card[]) => {
  let score = "Score: ";
  hand = hand.filter((card) => card.isOpen === true);
  if (getBestScore(hand) === 21) {
    score += getBestScore(hand);
    return score;
  }
  if (isAceExist(hand) && getScore(hand) + 10 > 21) {
    score += getBestScore(hand);
    return score;
  }
  if (isAceExist(hand) && getScore(hand) + 10 < 21) {
    score += `${getScore(hand)}/${getScore(hand) + 10}`;
    return score;
  } else {
    score += getBestScore(hand);
    return score;
  }
};

export {
    showScoresOnPage,
    getBestScore,
    getCardSvg
}
