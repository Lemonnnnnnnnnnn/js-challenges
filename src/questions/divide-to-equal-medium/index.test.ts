import { divideToEqual } from ".";
import { expect, test } from "@jest/globals";

test("divide to equal", () => {
	expect(
		divideToEqual([11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]),
	).toEqual(
		expect.arrayContaining([
			[90, 23, 11, 6, 5],
			[78, 42, 11, 4],
			[56, 42, 23, 6, 5, 4],
		]),
	);
	expect(divideToEqual([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual(
		expect.arrayContaining([
			[8, 4],
			[7, 5],
			[6, 3, 2, 1],
		]),
	);
	expect(divideToEqual([1, 1, 12, 12])).toEqual(
		expect.arrayContaining([[1, 1], [12], [12]]),
	);
	expect(divideToEqual([2, 5, 8, 9, 1, 2, 4, 6, 12, 15, 2, 1, 6, 13])).toEqual(
		expect.arrayContaining([
			[15, 13, 1],
			[12, 9, 6, 2],
			[8, 6, 5, 4, 2, 2, 1],
		]),
	);
	expect(divideToEqual([5, 1, 2, 8, 9, 4, 12, 15, 11, 4, 3, 1, 2])).toEqual(
		expect.arrayContaining([
			[15, 9, 2],
			[12, 11, 2, 1],
			[8, 5, 4, 4, 3, 1],
		]),
	);
	expect(
		divideToEqual([
			5, 3, 2, 6, 9, 8, 11, 21, 11, 4, 3, 1, 2, 15, 9, 5, 6, 15, 12, 25, 27, 31,
			2, 4,
		]),
	).toEqual(
		expect.arrayContaining([
			[25, 15, 15, 12, 11, 1],
			[11, 9, 9, 8, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2],
			expect.arrayContaining([21, 27, 31]),
		]),
	);
});
