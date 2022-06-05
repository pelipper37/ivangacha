import { Prioritizable } from "../util/Queue";

export default interface Task extends Prioritizable
{
    
    readonly name: string;

    /**
     * Executes the task
     * 
     * @returns { number } 0 if successful, otherwise returns the error code of the task.
     */
    execute(): number;
}