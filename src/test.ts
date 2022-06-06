
/*Test to check the random output of the random number generator
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
*/
/* Test to serialize and deserialize a Car object with a nested Manufacturer object
import { JsonSerializer } from 'typescript-json-serializer';
import Player from './base/Player';

let car: Player = new Player("Ivan the Great");

let serializer: JsonSerializer = new JsonSerializer();

let string: string = JSON.stringify(serializer.serialize(car));

let reserialized: Player = serializer.deserializeObject(string, Player);

console.log(reserialized.getName());
*/

///* Tests the queue system built into game
import { Game } from "./base/Game";
import Task from "./base/Task";


let task1: Task =
{
    name: "foogleboogle-defense",
    getPriority: () => 1000,
    execute: () =>{
        console.log("Erasing foogleboogles...");
        return 0;
    }
}

let task2: Task = 
{
    name: "wood-generator-01",
    getPriority: () => 3,
    execute: () =>{
        console.log("Generated 1 wood!");
        return 0;
    },
}

let task3: Task = 
{
    name: "foogleboogle-repair",
    getPriority: () => 900,
    execute: () =>{
        console.log("Fixing damages from foogleboogles...");
        return 0;
    },
}

let game: Game = Game.init(1000, [], [task2, task3]);

game.queueTask(task1);

game.activateSystems();

//*/