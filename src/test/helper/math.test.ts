import { expect, test } from "vitest";
import {
  formatNumberWithCommas,
  formatNumberWithSpaces,
} from "../../helper/math";

test("expect format numbers with commas for numbers longer than three digits", () => {
  expect(formatNumberWithCommas(123)).toBe("123");
  expect(formatNumberWithCommas(1234)).toBe("1,234");
  expect(formatNumberWithCommas(12345)).toBe("12,345");
  expect(formatNumberWithCommas(123456)).toBe("123,456");
});

test("expect format numbers with space for numbers longer than three digits", () => {
  expect(formatNumberWithSpaces(123)).toBe("123");
  expect(formatNumberWithSpaces(1234)).toBe("1 234");
  expect(formatNumberWithSpaces(12345)).toBe("12 345");
  expect(formatNumberWithSpaces(123456)).toBe("123 456");
});
