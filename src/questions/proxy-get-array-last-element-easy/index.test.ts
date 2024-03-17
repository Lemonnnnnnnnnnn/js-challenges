import { arrayWrapper } from ".";
import { expect, test } from "@jest/globals";

test("get last element in array", () => {
	const list = [1, 2, 3];
	expect(arrayWrapper(list)[-1]).toBe(3);
});
