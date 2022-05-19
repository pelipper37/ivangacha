import { Game } from './base/Game';
import { Random, returnTable } from './rng/Engine';

function startGame()
{
  Game.getInstance().start();
}

function testEngine(map: returnTable)
{
  let eng: Random = new Random(map);  
  
  console.log(eng.getRandom());
}

