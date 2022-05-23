/*
import { Game } from './base/Game';
import { StepLog } from './base/StepLog';

let game: Game = Game.init(1000, new StepLog(100, "Hola, mi amigo!"));
game.addObject(new StepLog(12, "Buenos dias!"));
game.addObject(new StepLog(2134, "Donde esta la biblioteca?"));

game.start();
*/

///*Test to check the random output of the random number generator
import { Random, returnTable} from './rng/Engine';

let map: returnTable<string> = [
    {
        weight: 3,
        returns: "alice",
    },
    {
        weight: 10,
        returns: "bob",
    },
    {
        weight: 12,
        returns: "charlie",
    },
];

let eng: Random<string> = new Random(map);  
  
console.log(eng.getRandom());
//*/

/* Test to serialize and deserialize a Car object with a nested Manufacturer object
import { JsonSerializer } from 'typescript-json-serializer';
import { Car, Manufacturer } from './test/Car'

let car: Car = new Car("ivanmobile", new Manufacturer("billy"));

let serializer: JsonSerializer = new JsonSerializer();

let string: string = JSON.stringify(serializer.serialize(car));

let reserialized: Car = serializer.deserializeObject(car, Car);

reserialized.honk();
*/