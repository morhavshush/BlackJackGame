using Blackjack.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blackjack.BL.Interfaces
{
    public interface IGameService
    {
        GameBoard InitGame(string playerName);
    }
}
