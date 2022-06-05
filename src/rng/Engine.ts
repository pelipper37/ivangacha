type weight<T> = { weight: number, returns: T };
export type returnTable<T> = weight<T>[];
type map<T> = { min: number, returns: T };
type returnMap<T> = map<T>[];

/**
 * An engine that takes in weights and values, returning a value dependent on the weights.
 */
export class Random<T>
{
  private weightSum: number;
  private returnMap: returnMap<T>; //sorted in ascending order on initialization

  public constructor(returnTable: { weight: number, returns: T }[]) {
    let sum: number = 0;
    let compiledTable: returnMap<T> = [];

    for (let i: number = 0; i < returnTable.length; ++i) {
      let cTable: weight<T> = returnTable[i];

      sum += cTable.weight;
      compiledTable[i] =
      {
        min: sum,
        returns: cTable.returns,
      };
    }

    this.weightSum = sum;
    this.returnMap = compiledTable
  }

  public getRandom(): T {
    let rng: number = Random.randomNumber(0, this.weightSum);

    let returnMap: returnMap<T> = this.returnMap;

    for (let i: number = 0; i < returnMap.length; ++i) //since returnMap is sorted by ascending order, this won't find the wrong "less than"
    {
      let cMap: map<T> = returnMap[i];

      if (rng < cMap.min) {
        return cMap.returns;
      }
    }
  }

  public static randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}