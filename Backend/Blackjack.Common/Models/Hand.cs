using Blackjack.Common.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.Common.Models
{
    public class Hand
    {
        public HandStatus Status { get; set; }
        public List<Card> Cards { get; set; }
        
        public Hand(List<Card> cards)
        {
            Status = HandStatus.Waiting;
            Cards = cards;
        }
    }
}
