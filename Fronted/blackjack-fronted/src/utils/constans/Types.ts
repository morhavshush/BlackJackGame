import { StatusHand, TypeCard } from "./Enums";

interface Card {
  value: number;
  typeCard: TypeCard;
  isOpen: boolean;
}
interface Deck {
  amountCards: number;
  currentDeck: Card[];
}
interface Hand {
  statusHand: StatusHand;
  cards: Card[];
}
interface Player {
  name: string;
  hand: Hand;
}
interface GameBoard {
  gameStart: Date;
  gameOver: Date;
  dealer: Player;
  player1: Player;
  deck: Deck;
  playerScore: number;
  dealerScore: number;
}

export { GameBoard, Card, Player, Hand, Deck };
