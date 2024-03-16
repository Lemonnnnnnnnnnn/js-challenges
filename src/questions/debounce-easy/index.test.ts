import { debounce } from ".";
import { test, expect, jest } from "@jest/globals";

jest.useFakeTimers()

function printer(name: string) {
  console.log(name);
  return name;
}

const debouncePrinter = debounce(printer, 500);

test("debounce return value", () => {
  debouncePrinter("li").then((res) => {
    expect(res).toBe("li");
  });
});

test("debounce cancel", () => {
  debouncePrinter("li").then((res) => {
    expect(res).toBe(undefined);
  });
  debouncePrinter("zhang").then((res) => {
    expect(res).toBe("zhang");
  });
});

test("debounce delay", () => {
  debouncePrinter("li").then((res) => {
    expect(res).toBe(undefined);
  });
  setTimeout(() => {
    debouncePrinter("huang").then((res) => {
      expect(res).toBe("huang");
    });
  }, 400);
});

test("debounce timeout", () => {
  debouncePrinter("li").then((res) => {
    expect(res).toBe("li");
  });
  setTimeout(() => {
    debouncePrinter("huang").then((res) => {
      expect(res).toBe("huang");
    });
  }, 700);
});
