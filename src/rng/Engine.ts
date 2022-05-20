type weight = {weight: number, returns: any};
export type returnTable = weight[];
type map = {min: number, returns: any};
type returnMap = map[];

export class Random
{
  private rngMultiplier: number;
  private returnMap: returnMap; //sorted in ascending order on initialization
  
  public constructor(returnTable: returnTable)
  {
    let sum: number = 0;
    let compiledTable: returnMap = [];
    
    for(let i: number = 0; i < returnTable.length; ++i)
    {
      let cTable: weight = returnTable[i];
      
      sum += cTable.weight;
      compiledTable[i] = 
        {
          min: sum,
          returns: cTable.returns,
        };
    }

    this.rngMultiplier = sum;
    this.returnMap = compiledTable
  }

  public getRandom(): any
  {
    let rng: number = Math.random() * this.rngMultiplier; //create a random number between 0 and the sum of the weights
    
    let returnMap: returnMap = this.returnMap;
    
    for (let i: number = 0; i < returnMap.length; ++i) //since returnMap is sorted by ascending order, this won't find the wrong "less than"
    {
      let cMap: map = returnMap[i];
      
      if (rng < cMap.min)
      {
        return cMap.returns;
      }
    }
  }

  public static randomNumber(min: number, max: number)
  {
    return Math.random() * (max - min) + min;
  }
}