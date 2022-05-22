import { Steppable } from './Steppable'

export class StepLog extends Steppable
{
    private logMessage: string;

    /**
     * Creates a new StepLog. Logs a message to the console every game step.
     * @param priority The priority of the object in the Game. Higher number execute first.
     * @param logMessage The message to log every step.
     */
    constructor(priority: number, logMessage: string)
    {
      super(priority);
      this.logMessage = logMessage;
    }

    /**
     * Logs a message to the console.
     */
    public step()
    {
      console.log(this.logMessage);
    }
}