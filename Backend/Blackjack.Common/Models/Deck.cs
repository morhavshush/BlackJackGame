using Blackjack.Common.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.Common.Models
{
    public class Deck
    {
        static Random r = new Random();

        private int AmountCards { get; set; }
        public List<Card> CurrentDeck { get; private set; }

        public Deck()
        {
            AmountCards = 53;
            CurrentDeck = new List<Card>(AmountCards);
            InitDeck();
            ShuffleDeck();
        }

        public List<Card> GetDeck()
        {
            return CurrentDeck;
        }

        private void InitDeck()
        {
            Card card;
            for (int i = 1; i < 14; i++)
            {
                for (int j = 0; j < 4; j++)
                {
                    card = new Card(i, (TypeCard)j,false);
                    CurrentDeck.Add(card);
                }
            }
        }

        private void ShuffleDeck()
        {
            for (int n = CurrentDeck.Count - 1; n > 0; --n)
            {
                int k = r.Next(n + 1);
                Card temp = CurrentDeck[n];
                CurrentDeck[n] = CurrentDeck[k];
                CurrentDeck[k] = temp;
            }
        }

        public Card GetCardFromDeck(bool isCardOpen)
        {
            AmountCards--;
            Card lastCard = CurrentDeck[AmountCards - 1];
            lastCard.IsOpen = isCardOpen;
            CurrentDeck.Remove(lastCard);
            return lastCard;
        }

    }
}
