using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.Common.Models
{
    public class GameBoard
    {
        public Player Dealer { get; private set; }
        public Player Player1 { get; private set; }
        public DateTime GameStart { get; private set; }
        public DateTime? GameOver { get; private set; }
        public Deck Deck { get; private set; }

        public GameBoard(string playerName)
        {
            InitGameBoard(playerName);
        }

        private void InitGameBoard(string playerName)
        {
            Deck = new Deck();
            Dealer = new Player("Dealer",
                new Hand(
                    new List<Card>() {
                        Deck.GetCardFromDeck(true) ,
                        Deck.GetCardFromDeck(false)
                    }));
            Player1 = new Player(playerName,
                new Hand(new List<Card>() {
                    Deck.GetCardFromDeck(true),
                    Deck.GetCardFromDeck(true)
                }));
            GameStart = DateTime.Now;
            GameOver = null;
        }

    }
}
