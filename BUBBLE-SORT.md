# Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

> Bubble sort gets its name because greater elements bubble to the end of the list

### Time Complexity

- Worst Case: O(n^2)
- Best Case: O(n)
- Average Case: O(n^2)

### Space Complexity

- Worst Case: O(1)

## Pseudocode

```js
define bubbleSort(array)
  for i = 0 to array.length - 1
    for j = 0 to array.length - 1 - i
      if array[j] > array[j + 1]
        swap array[j] and array[j + 1]

  return array
```

> TIP: Very often (but not always) when you see nested loops the algorithm will be O(n ^ 2)

### Visualization

![Bubble Sort](./bubble-sort.webp 'Bubble Sort')

> Image from [geeksforgeeks.org](https://www.geeksforgeeks.org/bubble-sort)

## Bubble Sort is a stable sorting algorithm

A stable sorting algorithm maintains the relative order of the items with equal sort keys. An unstable sorting algorithm does not. In other words, when a collection is sorted with a stable sorting algorithm, items with the same sort keys preserve their order after the collection is sorted.

## When to use Bubble Sort

- When the input size is small or the list is nearly sorted
- When simplicity and ease of implementation is more important than efficiency
- When you want a sorting algorithm that uses a small amount of additional memory

> Note: Bubble sort has poor performance compared to other sorting algorithms and is not recommended for large or complex lists.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
