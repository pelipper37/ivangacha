import { assert } from "console";

export class InvalidRangeError extends Error {
    constructor() {
        super("The minimum value in the range cannot be larger than the maximum!");
    }
}

export class MinMaxRange<T> {
    private min: T;
    private max: T;

    constructor(min: T, max: T) {
        if (min > max) throw new InvalidRangeError();

        this.min = min;
        this.max = max;
    }

    public compressIntoRange(value: T): T {
        if (value >= this.max)
            return this.max;
        else if (value < this.min)
            return this.min;
        else
            return value;
    }
}

export const percentageRange = new MinMaxRange(0, 100);