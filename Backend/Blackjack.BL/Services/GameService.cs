using Blackjack.BL.Interfaces;
using Blackjack.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.BL.Services
{
    public class GameService : IGameService
    {
        private GameBoard _gameBoard;
        public GameBoard InitGame(string playerName)
        {
            _gameBoard = new GameBoard(playerName);
            return _gameBoard;
        }

    }
}
