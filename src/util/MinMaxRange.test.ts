import { MinMaxRange, InvalidRangeError } from "./MinMaxRange";

test("Range_Correctness", () => {
    let range: MinMaxRange<number> = new MinMaxRange(-99, 99)

    expect(range.compressIntoRange(-36754)).toBe(-99);
    expect(range.compressIntoRange(-99)).toBe(-99);

    expect(range.compressIntoRange(2134)).toBe(99);
    expect(range.compressIntoRange(99)).toBe(99);

    expect(range.compressIntoRange(0)).toBe(0);
    expect(range.compressIntoRange(3)).toBe(3);
}
)

test("Range_Error_Handling", () => {
    expect(() => {
        new MinMaxRange(1, -1);
    }).toThrow(InvalidRangeError);
})