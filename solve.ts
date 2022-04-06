import {
  div,
  exponentiation as exp,
  make,
  mul,
  string,
  sub,
} from "https://deno.land/x/bigfloat@v3.0.2/mod.ts";

function calcFalsePositive(m: number, n: number) {
  const k = Math.round(Math.log(2) * m / n);
  console.log("The best k =", k);
  const zeroRate = (1 - 1 / m) ** (n * k);
  return (1 - zeroRate) ** k;
}

function calcByBigFloat(_m: number, _n: number) {
  const k = make(Math.round(Math.log(2) * _m / _n));
  const m = make(_m);
  const n = make(_n);
  const zeroRate = exp(sub(make(1), div(make(1), m)), mul(n, k));
  return parseFloat(string(exp(sub(make(1), zeroRate), k))!);
}

console.log(`The bloom filter contains m bits and has capacity of n elements.`);
const m = parseInt(prompt("Enter m: ") || "0");
const n = parseInt(prompt("Enter n: ") || "0");
console.log("False positive rate =", calcFalsePositive(m, n));

// console.log("\nCalculating using BigFloat...");

// console.log("False positive rate =", calcByBigFloat(m, n));
