
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
import { Car, Manufacturer } from './test/Car'

let car: Car = new Car("ivanmobile", new Manufacturer("billy"));

let serializer: JsonSerializer = new JsonSerializer();

let string: string = JSON.stringify(serializer.serialize(car));

let reserialized: Car = serializer.deserializeObject(car, Car);

reserialized.honk();
*/


import { Prioritizable, PriorityQueue } from "./util/Queue";

let q: Prioritizable[] = [];

for ( let i = 0; i < 7; ++i )
{
    q.push(
        {
            getPriority: () => i,
            value: i,
        }
    );
}

let node = 
    {
        getPriority: () => 5,
        value: 5,
    }

q.push(node);

let queue: PriorityQueue = PriorityQueue.createFromArray(q);

console.log(queue);

queue.remove(node);

console.log(queue);
