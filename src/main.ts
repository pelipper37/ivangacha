import { Game } from './base/Game';
import { Random, returnTable } from './rng/Engine';
import { Save } from './base/Save';
import { StepLog } from './base/StepLog';

function startGame()
{
  Game.getInstance().start();
}

function testEngine(map: returnTable)
{
  let eng: Random = new Random(map);  
  
  console.log(eng.getRandom());
}

let save: Save = new Save();

save.set("ivan", new StepLog("a"));

console.log(save.get("ivan"));

let ivan: string = JSON.stringify(save);
console.log(ivan);

let parsedIvan: any = JSON.parse(ivan);
parsedIvan.get("ivan").step();