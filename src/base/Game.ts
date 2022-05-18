import { Steppable} from './Steppable';
import { StepLog } from './StepLog';

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
      return Game.instance;
    return new Game(0.5, new StepLog("init step"))
  }

  public addObject(steppable: Steppable): Game
  {
    this.lastNode.setNext(steppable);
    this.lastNode = steppable;
    
    return this;
  }

  public step(): void
  {
    let nextNode: Steppable = this.firstNode;
    while (nextNode != null)
    {
        nextNode.step();
        nextNode = nextNode.getNext();
    }
  }
}