import { Prioritizable } from "../util/Queue";

export default interface Task extends Prioritizable
{
    execute(): number;
}