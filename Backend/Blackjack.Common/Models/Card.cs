using Blackjack.Common.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.Common.Models
{
    public class Card
    {
        public int Value { get; set; }
        public TypeCard TypeCard { get; set; }
        public bool IsOpen { get; set; }
        public Card(int value, TypeCard typeCard,bool isOpen)
        {
            Value = value;
            TypeCard = typeCard;
            IsOpen = isOpen;
        }
    }
}
