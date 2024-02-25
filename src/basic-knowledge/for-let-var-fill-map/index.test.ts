import { myNodes, myNodes2, myNodes3, myNodes4, myNodes5 } from ".";
import { expect, test } from "@jest/globals";

test("let error", () => {
  expect(myNodes[1].onClick && myNodes[1].onClick()).toBe(5);
});

test("var error", () => {
  expect(myNodes4[1].onClick && myNodes4[1].onClick()).toBe(5);
});

test("let success", () => {
  expect(myNodes5[1].onClick && myNodes5[1].onClick()).toBe(1);
});

test("fill error", () => {
  expect(myNodes2[1].onClick && myNodes2[1].onClick()).toBe(4);
});

test("closure success", () => {
  expect(myNodes3[1].onClick && myNodes3[1].onClick()).toBe(1);
});
