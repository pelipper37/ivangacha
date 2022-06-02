import { table } from 'console';
import { PriorityQueue } from '../util/Queue';
import Task from './Task';

const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

export class Game
{
  private static instance: Game;
  private queue: PriorityQueue;
  private repeatableTasks: Task[];

  /** 
   * Creates a Game object
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param {Steppable} init The first node in the GameObject
   */
  private constructor (stepTime: number)
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
  public static init(stepTime: number): Game
  {
    Game.instance =  new Game(stepTime);

    return Game.instance;
  }

  /**
   * Queues a task to be executed next step.
   * 
   * @param { Task } task The task to be excuted
   * @param { number } priority The priority of the task
   */
  public queueTask(task: Task, priority: number)
  {
    this.queue.insert(
      {
        getPriority: () => priority,
        value: task,
      }
    );
  }

  /**
   * Adds a task to be repeated every game step.
   * 
   * @param { Task } repeatableTask The task to be re-queued every game step.
   */
  public addRepeatableTask(repeatableTask: Task)
  {
    this.repeatableTasks.push(repeatableTask);
  }

  /**
   * Removes a repeating task from being executed every game step.
   * 
   * @param { Task } repeatableTask The task to be removed from being re-queued.
   * @param { boolean } deleteFromQueue Whether to remove the task from the next immediate queue or not, defaults to true.
   * 
   */
  public removeRepeatableTask(repeatableTask: Task, deleteFromQueue: boolean = true)
  {
    let rTasks = this.repeatableTasks;
    rTasks.splice(rTasks.indexOf(repeatableTask), 1);

    if (deleteFromQueue)
      this.queue.remove(repeatableTask);
  }
}