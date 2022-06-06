import { Prioritizable } from "../util/Queue";

export default interface Task extends Prioritizable
{
    
    readonly name: string;

    execute(): void;
}