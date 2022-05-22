import { Steppable } from './Steppable';

const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

export class Game
{
  private static instance: Game;
  private stepTime: number;
  private firstNode: Steppable;
  private lastNode: Steppable;

  /** 
   * Creates a Game object
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param {Steppable} init The first node in the GameObject
   */
  private constructor (stepTime: number, init: Steppable)
  {
    this.stepTime = stepTime;
    this.firstNode = init;
    this.lastNode = init;
  }

  /** 
   * Initializes the Game singleton
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param {Steppable} steppable The first node in the GameObject
   * 
   * @returns {Game} The Game singleton
   */
  public static init(stepTime: number, steppable: Steppable): Game
  {
    Game.instance =  new Game(stepTime, steppable);

    return Game.instance;
  }

  /** 
   * Gets the Game singleton object
   * 
   * @returns {Game} The Game singleton
   */
  public static getInstance(): Game
  {
    return Game.instance;
  }

  /**
   * @param {Steppable} steppable A steppable object to put on the queue
   * 
   * @returns {Game} The game object being acted on
   */
  public addObject(steppable: Steppable): Game
  {
    let curNode: Steppable = this.firstNode;
    let nextNode: Steppable = this.firstNode.getNext();
    let priority: number = steppable.getPriority();

    if (curNode.lowerThan(priority))
    {
      this.firstNode = steppable;
      steppable.setNext(curNode);
      return this;
    }

    while(true)
    {
      if (nextNode == null || nextNode.lowerThan(priority)) //if it's at the last node, or if the nextNode has a lower priority then
      {
        //insert the node between the current and the next
        curNode.setNext(steppable);
        steppable.setNext(nextNode);

        break;
      }

      curNode = nextNode;
      nextNode = curNode.getNext();
    }
    
    return this;
  }

  /**
   * Moves the game one step further
   */
  private step(): void
  {
    let nextNode: Steppable = this.firstNode;
    while (nextNode != null)
    {
        nextNode.step();
        nextNode = nextNode.getNext();
    }
  }

  /**
   * Begins execution of the game object
   * @async
   */
  public async start(): Promise<void>
  {
    while(true)
    {
      this.step();
      await wait(this.stepTime);
    }
  }
}