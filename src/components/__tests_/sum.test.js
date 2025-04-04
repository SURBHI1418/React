import { Sum } from "../Sum";

test("Sum Function should calculate the sum of two number:", () => {
  const result = Sum(3, 4);

  //Asseration
  expect(result).toBe(7);
});
