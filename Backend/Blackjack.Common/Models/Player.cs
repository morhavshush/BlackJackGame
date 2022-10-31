using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.Common.Models
{
    public class Player
    {
        public string Name { get; set; }
        public Hand Hand { get; set; }

        public Player(string name, Hand hand)
        {
            Name = name;
            Hand = hand;
        }
    }
}
