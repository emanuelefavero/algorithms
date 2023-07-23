# Memoization and Dynamic Programming

#### Memoization and dynamic programming are techniques used to optimize algorithms by avoiding redundant calculations and storing intermediate results for future use

## Memoization

Memoization involves caching the results of function calls to avoid calculations. It is often used in combination with recursion

## Dynamic Programming

Dynamic programming is a technique for solving problems by breaking them down into overlapping sub-problems and storing the solutions to sub-problems in a table to avoid redundant calculations

## Example

This is an example of memoization and dynamic programming

### Fibonacci Sequence

```js
def fib(n, memo = {})
  if memo[n] return memo[n]

  if (n <= 2) return 1

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

  return memo[n]
end
```

## When to use Memoization and Dynamic Programming

- When you need to optimize a recursive algorithm
- When solving problems that can be broken down into smaller sub-problems and have an optimal substructure

## References

- [Memoization Wikipedia](https://en.wikipedia.org/wiki/Memoization)
- [Dynamic Programming Wikipedia](https://en.wikipedia.org/wiki/Dynamic_programming)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#memoization-and-dynamic-programming)

[**← Go Back**](./README.md)

&nbsp;
