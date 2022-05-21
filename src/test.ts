import { JsonSerializer } from 'typescript-json-serializer';
import { Game } from './base/Game';
import { Random, returnTable } from './rng/Engine';
import { Car, Manufacturer } from './test/Car'

function startGame()
{
  Game.getInstance().start();
}

function testEngine(map: returnTable)
{
  let eng: Random = new Random(map);  
  
  console.log(eng.getRandom());
}

let car: Car = new Car("ivanmobile", new Manufacturer("billy"));

let serializer: JsonSerializer = new JsonSerializer();

let string: string = JSON.stringify(serializer.serialize(car));

let reserialized: Car = serializer.deserializeObject(car, Car);

reserialized.honk();