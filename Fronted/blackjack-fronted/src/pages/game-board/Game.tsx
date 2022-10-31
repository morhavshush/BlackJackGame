import React, { useState } from "react";

import { setWinnerAsync } from "utils/redux/reducers/game";
import { useAppDispatch } from "utils/redux/store";

import Button from "components/ui-elements/Button";
import Image from "components/ui-elements/Image";

import { CardImage } from "utils/constans/Enums";
import { GameBoard, Card } from "utils/constans/Types";

import { PlayAudio } from "utils/constans/PlayAudio";
import NewCard from "assets/audio-clips/card-slide.mp3";

import {
  showScoresOnPage,
  getBestScore,
  getCardSvg,
} from "utils/helpers/gameFunctions";

interface IGameProps {
  game: GameBoard;
}
const Game: React.FC<IGameProps> = ({ game }) => {
  const [playerHand, setPlayerHand] = useState<Card[]>(game.player1.hand.cards);
  const [dealerHand, setDealerHand] = useState<Card[]>(game.dealer.hand.cards);
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const audio = PlayAudio(NewCard);
  const dispatch = useAppDispatch();

  const playerPlayed = (isPlayerHit: boolean) => {
    setIsPlayerTurn(isPlayerHit);
    let newCard = game.deck.currentDeck.pop();
    if (newCard) {
      if (isPlayerHit) {
        audio.play();
        newCard.isOpen = true;
        playerHand.push(newCard);
        setPlayerHand([...playerHand]);
        checkWinnerPlayerHit(playerHand);
      } else {
        setInterval(() => {
          if (dealerHand[1].isOpen === false) {
            audio.play();
            dealerHand[1].isOpen = true;
            setDealerHand([...dealerHand]);
            if (checkWinnerDealerTurn(playerHand, dealerHand) !== "")
              dispatch(
                setWinnerAsync(checkWinnerDealerTurn(playerHand, dealerHand))
              );
          } else {
            let newCard = game.deck.currentDeck.pop();
            if (
              newCard &&
              checkWinnerDealerTurn(playerHand, dealerHand) === ""
            ) {
              audio.play();
              newCard.isOpen = true;
              dealerHand.push(newCard);
              setDealerHand([...dealerHand]);
              dispatch(
                setWinnerAsync(checkWinnerDealerTurn(playerHand, dealerHand))
              );
            }
          }
        }, 3000);
      }
    }
  };

  //check winner when player hit or stand
  const checkWinnerPlayerHit = (playerHand: Card[]) => {
    let playerScore = getBestScore(playerHand);
    if (playerScore > 21) dispatch(setWinnerAsync("You Bust!"));
    else if (playerScore === 21) dispatch(setWinnerAsync("Black Jack!"));
  };

  //check winner when dealer playing
  const checkWinnerDealerTurn = (playerCards: Card[], dealerCards: Card[]) => {
    let playerFinalScore = getBestScore(playerCards);
    let dealerFinalScore = getBestScore(dealerCards);

    if (dealerFinalScore > 21) return "Dealer Bust!";
    if (dealerFinalScore === 21) return "Dealer Black Jack";

    if (dealerFinalScore > 16) {
      if (playerFinalScore === dealerFinalScore) return "Drow";
      if (playerFinalScore > dealerFinalScore) return "You Win!";
      else if (playerFinalScore < dealerFinalScore && dealerFinalScore < 21)
        return "Dealer Win!";
    }
    return "";
  };

  checkWinnerPlayerHit(playerHand);

  return (
    <div className="text-white h-screen">
      <div className="flex w-full absolute mt-3 justify-center">
        {showScoresOnPage(dealerHand)}
      </div>
      <div className="flex w-full gap-4 mt-10 justify-center">
        {dealerHand?.map((card, index) => {
          return (
            <Image
              key={index}
              className="card"
              image={`${CardImage[getCardSvg(card)]}.svg`}
              alt="/10C.svg"
            />
          );
        })}
      </div>
      <div className="absolute w-full gap-20 place-content-center bottom-1/2 text-black">
        <div className="flex gap-20 place-content-center">
          <Button
            title="Hit"
            className="w-32 f-bold text-xl"
            onClick={() => playerPlayed(true)}
            disabled={!isPlayerTurn}
          />
          <Button
            title="Stand"
            className="w-32 f-bold text-xl"
            onClick={() => playerPlayed(false)}
            disabled={!isPlayerTurn}
          />
        </div>
      </div>
      <div className="flex w-full gap-4 absolute bottom-0 mb-10 justify-center">
        {playerHand?.map((card, index) => {
          return (
            <Image
              key={index}
              className="card"
              image={`${CardImage[getCardSvg(card)]}.svg`}
              alt="/10C.svg"
            />
          );
        })}
      </div>
      <div className="flex w-full gap-4 absolute bottom-0 mb-3 justify-center">
        {game.player1.name}'s {showScoresOnPage(playerHand)}
      </div>
    </div>
  );
};

export default Game;
