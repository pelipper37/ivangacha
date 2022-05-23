type weight<T> = {weight: number, returns: T};
export type returnTable<T> = weight<T>[];
type map<T> = {min: number, returns: T};
type returnMap<T> = map<T>[];

export class Random <T>
{
  private rngMultiplier: number;
  private returnMap: returnMap<T>; //sorted in ascending order on initialization
  
  /**
   * Creates a RandomEngine that returns a random value assocaited with a weight.
   * @param returnTable A table mapping a weight to a value
   */
  public constructor(returnTable: {weight: number, returns: T}[])
  {
    let sum: number = 0;
    let compiledTable: returnMap<T> = [];
    
    for(let i: number = 0; i < returnTable.length; ++i)
    {
      let cTable: weight<T> = returnTable[i];
      
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

  /**
   * Returns a random number according to the weighted table.
   * @returns {T} A random value according to their weights.
   */
  public getRandom(): T
  {
    let rng: number = Math.random() * this.rngMultiplier; //create a random number between 0 and the sum of the weights
    
    let returnMap: returnMap<T> = this.returnMap;
    
    for (let i: number = 0; i < returnMap.length; ++i) //since returnMap is sorted by ascending order, this won't find the wrong "less than"
    {
      let cMap: map<T> = returnMap[i];
      
      if (rng < cMap.min)
      {
        return cMap.returns;
      }
    }
  }

  /**
   * Generates a random number
   * @param {number} min The minimum number of the float
   * @param {number} max The maximum number of the float
   * @returns {number} The random number
   */
  public static randomNumber(min: number, max: number)
  {
    return Math.random() * (max - min) + min;
  }
}