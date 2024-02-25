import { myObject } from ".";
import { expect, test } from "@jest/globals";

test("private-variable", () => {
  expect(myObject.increment().getValue()).toBe(1);
  expect(myObject.increment(3).getValue()).toBe(4);
  // @ts-expect-error
  expect(myObject.value).toBe(undefined);
});
