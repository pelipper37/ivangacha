export class Save 
{
  public Save(){}

  public set(key: string, val: any): void
  {
    this[key] = val;
  }

  public get(key: string): any
  {
    return this[key];
  }
}