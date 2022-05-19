import { Steppable } from './Steppable';
import { StepLog } from './StepLog';

const wait = (ms) => new Promise(res => setTimeout(res, ms));

export class Game
{
  private static instance: Game;
  private stepTime: number;
  private firstNode: Steppable;
  private lastNode: Steppable;

  private constructor (stepTime: number, init: Steppable)
  {
    this.stepTime = stepTime;
    this.firstNode = init;
    this.lastNode = init;
  }

  public static getInstance(): Game
  {
    if (Game.instance)
    {
      return Game.instance;
    }
    Game.instance =  new Game(1000, new StepLog("init step"))
    return Game.instance;
  }

  public addObject(steppable: Steppable): Game
  {
    this.lastNode.setNext(steppable);
    this.lastNode = steppable;
    
    return this;
  }

  private step(): void
  {
    let nextNode: Steppable = this.firstNode;
    while (nextNode != null)
    {
        nextNode.step();
        nextNode = nextNode.getNext();
    }
  }

  public async start()
  {
    while(true)
    {
      this.step();
      await wait(this.stepTime);
    }
  }
}