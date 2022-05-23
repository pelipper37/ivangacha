export abstract class Steppable
{
  private next: Steppable;
  private priority: number;
  
  abstract step(): void;

  /**
   * Turns the object into a steppable object
   * @param {number} priority The priority of the Steppable. A higher priority means it executes faster.
   */
  protected constructor(priority: number)
  {
    this.priority = priority
  }
  
  /**
   * Sets the node after this node.
   * @param {Steppable} next The node after this node.
   */
  public setNext(next: Steppable): void
  {
    this.next = next;
  }

  /**
   * Returns the next node.
   * @returns {Steppable} The next node.
   */
  public getNext(): Steppable
  {
    return this.next;
  }

  /**
   * Checks if a given priority is lower than this nodes
   * @param priority The priority to check against
   * @returns true if the priority passed is lower than this nodes, false if the priority passsed is greater than or equal to this nodes
   */
  public lowerThan(priority: number): boolean
  {
    return this.priority < priority;
  }

  /**
   * Returns a number representing this nodes priority.
   * @returns {number} The priority of this node.
   */
  public getPriority(): number
  {
    return this.priority;
  }
}