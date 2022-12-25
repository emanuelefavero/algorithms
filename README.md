# Algorithms

This repository contains implementations of various algorithms

## Go to algorithm detail page

Search algorithms:

- [Binary Search](./BINARY-SEARCH.md)
- [Linear Search](./LINEAR-SEARCH.md)

Sorting algorithms:

- [Merge Sort](./MERGE-SORT.md)

## What is an algorithm?

An algorithm is a set of instructions that solves a problem. Like a recipe, an algorithm is a set of steps that must be followed in order to solve a problem.

## Time Complexity

How many operations does an algorithm take to complete?

| Algorithm     | Best  | Average | Worst |
| ------------- | ----- | ------- | ----- |
| Bubble        | n     | n^2     | n^2   |
| Insertion     | n     | n^2     | n^2   |
| Selection     | n^2   | n^2     | n^2   |
| Merge         | nlogn | nlogn   | nlogn |
| Quick         | nlogn | nlogn   | n^2   |
| Heap          | nlogn | nlogn   | nlogn |
| ------------- | ----  | ------- | ----- |
| Binary Search | 1     | logn    | logn  |
| Linear Search | 1     | n       | n     |

> Note: Big O notation is used to describe the time complexity of an algorithm. The notation is used to describe the worst case scenario. For example, the time complexity of the `Bubble` algorithm is `O(n^2)`. This means that the algorithm will take `n^2` (n squared) operations to complete. `n^2` means that the algorithm will take `n` operations for each of `n` elements. For example, if there are 10 elements, the algorithm will take 100 operations to complete.

## Space Complexity

How much memory does an algorithm use?

| Algorithm | Worst |
| --------- | ----- |
| Bubble    | 1     |
| Insertion | 1     |
| Selection | 1     |
| Merge     | n     |
| Quick     | logn  |
| Heap      | 1     |

## Complexity Classes

- constant `O(1)`
- logarithmic `O(log n)`
- linear `O(n)`
- quasilinear `O(n log n)`
- quadratic `O(n^2)`
- cubic `O(n^3)`

> **Algorithm Mantra:**
>
> Can we do better?
