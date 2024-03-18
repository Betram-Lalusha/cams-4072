// Return true if a and b are relatively prime.
module.exports.areRelativelyPrime = function (a, b) {
  // Only 1 and -1 are relatively prime to 0.
  if (a == 0) return b == 1 || b == -1;
  if (b == 0) return a == 1 || a == -1;

  let gcd = GCD(a, b);
  return gcd == 1 || gcd == -1;
};

// Use Euclid's algorithm to calculate the
// greatest common divisor (GCD) of two numbers.
// See https://en.wikipedia.org/wiki/Euclidean_algorighm
function GCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  // if a or b is 0, return the other value.
  if (a == 0) return b;
  if (b == 0) return a;

  let remainder = b;
  while (remainder != 0) {
    remainder = a % b;
    if (remainder == 0) return b;
    a = b;
    b = remainder;
  }

  return b;
}
