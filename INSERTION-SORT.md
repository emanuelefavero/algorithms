# Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.

It is much less efficient on large lists than more advanced algorithms such as **quicksort**, **heapsort**, or **merge sort**. However, insertion sort provides several advantages:

- It is efficient for small data sets or nearly sorted data.
- It is an in-place sorting algorithm, meaning it does not require any additional memory.
- It is stable, meaning it maintains the relative order of equal elements.

### Time Complexity

- Worst Case: O(n^2)
- Best Case: O(n)
- Average Case: O(n^2)

### Space Complexity

- Worst Case: O(1)

## Pseudocode

```js
define insertionSort(array)
  for i = 1 to array.length
    current = array[i]
    j = i - 1

    while j >= 0 and array[j] > current
      array[j + 1] = array[j]
      j = j - 1

    array[j + 1] = current

  return array
```

### Visualization

![Insertion Sort](./insertion-sort.webp 'Insertion Sort')

> Image from [geeksforgeeks.org](https://www.geeksforgeeks.org/insertion-sort)

## When to use Insertion Sort

- When the input size is small or the list is nearly sorted
- When simplicity and ease of implementation is more important than efficiency.
- When you want a sorting algorithm that uses a small amount of additional memory.

> Note: Insertion sort has poor performance compared to other sorting algorithms and is not recommended for large or complex lists.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort?useskin=vector)
