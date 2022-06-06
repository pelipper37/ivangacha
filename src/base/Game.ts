import { PriorityQueue } from '../util/Queue';
import { wait } from '../util/wait';
import Task from './Task';

export class Game {
  private static instance: Game;

  private stepTime: number;
  private running: boolean = false;
  private queue: PriorityQueue<Task>;
  private repeatableTasks: Task[];

  /** 
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param { Task[] } tasks  The tasks to execute immediately
   * @param { Task[] } repeatableTasks The tasks to be executed repeatedly
   */
  private constructor(stepTime: number, tasks: Task[] = [], repeatableTasks: Task[] = [])
  {
    this.stepTime = stepTime;
    this.queue = PriorityQueue.heapify<Task>(tasks);
    this.repeatableTasks = repeatableTasks;
  }

  /** 
   * @param {number} stepTime The amount of time (in milliseconds) between each step()
   * @param { Task[] } tasks  The tasks to execute immediately
   * @param { Task[] } repeatableTasks The tasks to be executed repeatedly
   * 
   * @returns {Game} The Game singleton
   */
  public static init(stepTime: number, tasks: Task[] = [], repeatableTasks: Task[] = []): Game
  {
    Game.instance = new Game(stepTime, tasks, repeatableTasks);

    return Game.instance;
  }

  public queueTask(task: Task): void
  {
    this.queue.insert(task);
  }

  public addRepeatableTask(repeatableTask: Task): void
  {
    this.repeatableTasks.push(repeatableTask);
  }

  public removeRepeatableTask(repeatableTask: Task): void
  {
    let rTasks = this.repeatableTasks;
    rTasks.splice(rTasks.indexOf(repeatableTask), 1);
  }

  public async activateSystems(): Promise<void>
  {
    if (this.running) {
      return;
    }

    this.running = true;

    let queue = this.queue;
    let repeatableTasks = this.repeatableTasks;

    function executeTasks(): void {
      let current = queue.pop();

      while (current) {
        current.execute();
        current = queue.pop();
      }
    }

    function queueRepeatableTasks(): void {
      for (let i = 0; i < repeatableTasks.length; ++i) {
        this.queueTask(repeatableTasks[i]);
      }
    }

    while (true) {
      if (!this.running) break;

      queueRepeatableTasks();
      executeTasks();

      await wait(this.stepTime);
    }
  }

  public async deactivateSystems(): Promise<void>
  {
    this.running = false;
  }
}