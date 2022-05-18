import { Steppable } from './Steppable'

export class StepLog extends Steppable
{
    private logMessage: string;
    constructor(logMessage: string)
    {
      super();
      this.logMessage = logMessage;
    }

    step()
    {
      console.log(this.logMessage);
    }
}