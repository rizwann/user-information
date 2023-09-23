import { getAge } from "../../lib/utils";

describe("getAge function", () => {
  it("calculates the age correctly for past dates", () => {
    // Define a birth date in the past
    const birthDate = "1990-01-01"; // Format: YYYY-MM-DD
    const age = getAge(birthDate);

    // Assert that the calculated age is correct
    expect(age).toBeGreaterThan(0); // Age should be greater than zero
    expect(age).toBe(33);
  });

  it("calculates the age correctly for future dates (returns 0)", () => {
    // Define a birth date in the future
    const birthDate = "2030-01-01"; // Format: YYYY-MM-DD
    const age = getAge(birthDate);

    // Assert that the calculated age is 0 (negative age is not possible)
    expect(age).toBe(0);
  });

  it("handles invalid input gracefully (returns 0)", () => {
    // Define an invalid birth date
    const birthDate = "invalid-date";
    const age = getAge(birthDate);

    // Assert that the function returns 0 for invalid input
    expect(age).toBe(0);
  });

  it("handles empty input gracefully (returns 0)", () => {
    // Define an empty birth date
    const birthDate = "";
    const age = getAge(birthDate);

    // Assert that the function returns 0 for empty input
    expect(age).toBe(0);
  });
});
