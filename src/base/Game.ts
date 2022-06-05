import { PriorityQueue } from '../util/Queue';
import { wait } from '../util/wait';
import Task from './Task';

export class Game
{
  private static instance: Game;

  private stepTime: number;
  private running: boolean = false;
  private queue: PriorityQueue<Task>;
  private repeatableTasks: Task[];

  /** 
   * Creates a Game object
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param { Task[] } tasks  The tasks to execute immediately
   * @param { Task[] } repeatableTasks The tasks to be executed repeatedly
   */
  private constructor (stepTime: number, tasks: Task[] = [], repeatableTasks: Task[] = [])
  {
    this.stepTime = stepTime;
    this.queue = PriorityQueue.heapify<Task>(tasks);
    this.repeatableTasks = repeatableTasks;
  }

  /** 
   * Initializes the Game singleton
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param { Task[] } tasks  The tasks to execute immediately
   * @param { Task[] } repeatableTasks The tasks to be executed repeatedly
   * 
   * @returns {Game} The Game singleton
   */
  public static init(stepTime: number, tasks: Task[] = [], repeatableTasks: Task[] = []): Game
  {
    Game.instance =  new Game(stepTime, tasks, repeatableTasks);

    return Game.instance;
  }

  /**
   * Queues a task to be executed next step.
   * 
   * @param { Task } task The task to be excuted
   */
  public queueTask(task: Task)
  {
    this.queue.insert(task);
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
   */
  public removeRepeatableTask(repeatableTask: Task, deleteFromQueue: boolean = true)
  {
    let rTasks = this.repeatableTasks;
    rTasks.splice(rTasks.indexOf(repeatableTask), 1);

    if (deleteFromQueue)
      this.queue.remove(repeatableTask);
  }

  /**
   * Activates the game systems
   */
  public async activateSystems()
  {
      if (this.running)
      {
        return;
      }

      this.running = true;

      let queue = this.queue;
      let repeatableTasks = this.repeatableTasks;

      while(true)
      {
        if (!this.running) break;

        //queue the repeatable tasks
        for(let i = 0; i < repeatableTasks.length; ++i)
        {
          this.queueTask(repeatableTasks[i]);
        }

        //execute every task in the queue
        let current = queue.pop();

        while(current)
        {
          let returnStatus = current.execute();
          if (returnStatus != 0) console.log("Task "+ current.name +" failed with code: " + returnStatus);

          current = queue.pop();
        }

        await wait(this.stepTime);
      }
  }

  /**
   * Deactivates the game systems
   */
  public async deactivateSystems()
  {
    this.running = false;
  }
}