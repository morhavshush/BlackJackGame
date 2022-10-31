import React, { useEffect, useState } from "react";

import Button from "components/ui-elements/Button";
import Input from "components/ui-elements/Input";
import Game from "pages/game-board/Game";
import { DialogMessage } from "pages/popup-message/DialogMessage";

import { GameBoard } from "utils/constans/Types";

import { selectWinner, setWinnerAsync } from "utils/redux/reducers/game";
import { useAppSelector, useAppDispatch } from "utils/redux/store";

const OpenPage: React.FC = () => {
  const [name, setName] = useState("");
  const [game, setNewGame] = useState<GameBoard>();
  const [header, setNewHeader] = useState<any>("");
  const [isDialog, setNewDialog] = useState<boolean>(false);
  const state = useAppSelector(selectWinner);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const startGame = () => {
    fetch(`https://localhost:7166/api/game/startNewGame?playerName=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json().then((value) => {
          const game: GameBoard = {
            gameStart: value.gameStart,
            gameOver: value.gameOver,
            dealer: value.dealer,
            player1: value.player1,
            playerScore: 0,
            dealerScore: 0,
            deck: value.deck,
          };
          setNewGame(game);
        });
      })
      .catch((err) => {
         alert(err);
      });
  };

  useEffect(() => {
    if (state !== "") {
      setNewDialog(true);
      setNewHeader(state);
    }
  }, [state]);

  const handleChangeDialogBtn = (continueOrStop: string) => {
    dispatch(setWinnerAsync(""));
    setNewGame(undefined);
    continueOrStop === "continue"?startGame():setName('');
    setNewDialog(false);
  };

  return (
    <div className="grid">
      <DialogMessage
        header={header}
        openDialog={isDialog}
        onClick={handleChangeDialogBtn}
      />
      {!game ? (
        <div className="flex mx-auto mt-60">
          <div className="grid">
            <Input
              placeholder="Insert your name..."
              onChange={handleChange}
              value={name}
            />
            <Button
              title="Start"
              className="f-bold"
              disabled={name === ""}
              onClick={() => {
                startGame();
              }}
            />
          </div>
        </div>
      ) : (
        <Game game={game} />
      )}
    </div>
  );
};

export default OpenPage;
