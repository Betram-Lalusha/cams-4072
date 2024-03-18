const { areRelativelyPrime } = require("./AreRelativelyPrime.js");

test("Checks that 1 is relatively prime to 0", () => {
  expect(areRelativelyPrime(1, 0)).toBe(true);
});

test("Checks that -1 is relatively prime to 0", () => {
  expect(areRelativelyPrime(0, -1)).toBe(true);
});

test("Checks that -1 is relatively prime to 1", () => {
  expect(areRelativelyPrime(1, -1)).toBe(true);
});

for (let i = 1; i < 100; i++) {
  test("Checks that 0 is not relatively prime to any other number", () => {
    expect(areRelativelyPrime(Math.floor(Math.random() * 100), 0)).toBe(false);
  });
}

test("Test two relatively prime numbers", () => {
  expect(areRelativelyPrime(100, 10)).toBe(false);
});

test("Test two non relatively prime numbers", () => {
  expect(areRelativelyPrime(7, 8)).toBe(true);
});

for (let i = 1; i < 100; i++) {
  test("Checks that 1 is relatively prime to any other number", () => {
    expect(areRelativelyPrime(Math.floor(Math.random() * 100), 1)).toBe(true);
  });
}

for (let i = 1; i < 100; i++) {
  test("Checks that -1 is relatively prime to any other number", () => {
    expect(areRelativelyPrime(Math.floor(Math.random() * 100), -1)).toBe(true);
  });
}
