using Blackjack.BL.Interfaces;
using Blackjack.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace Blackjack_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [Route("")]//path looks like this: https://localhost:7166/api/game
        public IActionResult Start()
        {
            return Ok("App is Up!");
        }

        [Route("startNewGame")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GameBoard))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult StartNewGame([FromQuery]string playerName)
        {
            var game = _gameService.InitGame(playerName);
            return Ok(game);
        }
    }
}
