function validateInput(n: number): void {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("Input must be a positive integer.");
  }
  if (n > Number.MAX_SAFE_INTEGER) {
    throw new Error(
      `Input exceeds safe integer range: ${Number.MAX_SAFE_INTEGER}`
    );
  }
}

// 1. Using a loop
function sumWithLoop(n: number): number {
  validateInput(n);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 2. Using recursion
function sumWithRecursion(n: number): number {
  validateInput(n);
  if (n <= 1) return n;
  return n + sumWithRecursion(n - 1);
}

// 3. Using the arithmetic formula
function sumWithFormula(n: number): number {
  validateInput(n);
  const sum = (n * (n + 1)) / 2;
  if (!Number.isSafeInteger(sum)) {
    throw new Error("Result exceeds safe integer range.");
  }
  return sum;
}

// Example usage
try {
  const n = 10;
  console.log(`Sum from 1 to ${n} (loop):`, sumWithLoop(n));
  console.log(`Sum from 1 to ${n} (recursion):`, sumWithRecursion(n));
  console.log(`Sum from 1 to ${n} (formula):`, sumWithFormula(n));
} catch (error) {
  console.error((error as Error).message);
}
