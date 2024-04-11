import { sum } from "../sum";
import "@testing-library/jest-dom";

test("calculte the sum of the two numbers", () => {
  const result = sum(1, 2);

  //Assertion

  expect(result).toBe(3);
});
