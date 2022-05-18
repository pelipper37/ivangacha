export abstract class Steppable
{
  private next: Steppable;
  
  abstract step(): void;
  
  setNext(next: Steppable): void
  {
    this.next = next;
  }

  getNext(): Steppable
  {
    return this.next;
  }
}