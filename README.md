# Algorithms

This repository contains implementations of various algorithms

## Go to algorithm detail page

Search algorithms:

- [Binary Search](./BINARY-SEARCH.md)
- [Linear Search](./LINEAR-SEARCH.md)

Sorting algorithms:

- [Merge Sort](./MERGE-SORT.md)
- [Bubble Sort](./BUBBLE-SORT.md)
- [Selection Sort](./SELECTION-SORT.md)
- [Insertion Sort](./INSERTION-SORT.md)
- [Quick Sort](./QUICK-SORT.md)

> Note: Quick Sort is generally considered the best sorting algorithm for most cases unless the data is already sorted or almost sorted. In this case, Insertion Sort is a better choice

## What is an algorithm?

An algorithm is a set of instructions that solves a problem. Like a recipe, an algorithm is a set of steps that must be followed in order to solve a problem.

## Big O Notation

### Time Complexity

**If there are N data elements, how many steps does the algorithm take to complete?**

| Algorithm     | Best    | Average | Worst   |
| ------------- | ------- | ------- | ------- |
| Bubble        | n       | n^2     | n^2     |
| Insertion     | n       | n^2     | n^2     |
| Selection     | n^2     | n^2     | n^2     |
| Merge         | n log n | n log n | n log n |
| Quick         | n log n | n log n | n^2     |
| Heap          | n log n | n log n | n log n |
| ------------- | ----    | ------- | -----   |
| Binary Search | 1       | log n   | log n   |
| Linear Search | 1       | n       | n       |

> Note: Big O notation is used to describe the time complexity of an algorithm. The notation is used to describe the worst case scenario. For example, the time complexity of the `Bubble` algorithm is `O(n^2)`. This means that the algorithm will take `n^2` (n squared) operations to complete. `n^2` means that the algorithm will take `n` operations for each of `n` elements. For example, if there are 10 elements, the algorithm will take 100 operations to complete.

## Space Complexity

**How much memory does an algorithm use?**

| Algorithm | Worst |
| --------- | ----- |
| Bubble    | 1     |
| Insertion | 1     |
| Selection | 1     |
| Merge     | n     |
| Quick     | logn  |
| Heap      | 1     |

## Complexity Classes

- **constant `O(1)`** - no matter how many elements, the algorithm will always take the same amount of steps
- **logarithmic `O(log n)`** - each time the data is doubled, the number of steps only increases by one
- **linear `O(n)`** - the number of steps is directly proportional to the number of elements
- **quasilinear `O(n log n)`** - the steps grows linearly with the input size multiplied by the logarithm of the input size
- **quadratic `O(n^2)`** - the number of steps is proportional to the square of the number of elements
- **cubic `O(n^3)`** - the number of steps is proportional to the cube of the number of elements
- **factorial `O(n!)`** - the number of steps is proportional to the factorial of the number of elements (e.g. `O(3!)` = `O(3 * 2 * 1)` = `O(6)`)

## Logarithms

- **logarithm** - the inverse of exponentiation

Example: `log2(8) = 3` because _how many times do you have to multiply 2 by itself to get a result of 8? 3_

Or: _How many times do we need to halve 8 until we end up with 1? 3_

### O(log n) explained

`O(log n)` is a shorthand for `O(log2 n)`

If we keep dividing the number of elements by 2, we will eventually end up with 1. This is exactly what happens with `binary search`.
`O(log N)` means _the algorithm takes as many steps as it takes to keep halving the data elements until we remain with 1 element_

> O(log N) algorithm takes just one additional step each time the data is doubled

---

## Run Typescript files locally

- Install `nodemon` and `ts-node` globally

```bash
npm install -g nodemon ts-node
```

- Run the file

```bash
nodemon file-name.ts
```
