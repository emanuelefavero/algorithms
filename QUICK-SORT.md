# Quick Sort

Quick sort is a sorting algorithm that uses the divide and conquer approach and recursion. It picks an element as a pivot and partitions the array around the pivot, such that elements smaller than the pivot are placed before it, and elements greater than the pivot are placed after it. The pivot is then in its correct position, and the algorithm is recursively applied to the sub-arrays before and after the pivot.

## Time Complexity

- Worst Case: O(n^2)
- Best Case: O(n log n)
- Average Case: O(n log n)

> Note: Since the average case is O(n log n), quick sort is considered to be one of the fastest sorting algorithms and is used a lot in programming languages built-in sort methods. (The average case is the one that is most likely to occur)
>
> BEWARE: Quick Sort performs poorly when the array is already sorted or almost sorted. In this case, the worst case time complexity is O(n^2) so Insertion Sort is a better choice for this scenario

## Space Complexity

- O(log n)

## Pseudocode

```js
define quickSort(array)
  // base case
  if array.length <= 1 return array

  // pick a pivot
  pivot = array[0]

  // partition the array around the pivot
  left = []
  right = []

  for i = 1 to array.length
    if array[i] < pivot
      left.push(array[i])
    else
      right.push(array[i])

  // recursively apply quickSort to the sub-arrays
  return [...quickSort(left), pivot, ...quickSort(right)]
```

> Note: The pivot can be any element in the array. In this example, we pick the first element as the pivot. To prevent the worst case time complexity of O(n^2), we can pick a random element as the pivot or pick the median as the pivot. Choosing the first or last element is easier to implement.

## Visualization

![Quick Sort](./quick-sort.webp 'Quick Sort')

> Image from [geeksforgeeks.org](https://www.geeksforgeeks.org/quick-sort)

## When to use Quick Sort

- When you need a sorting algorithm with good average-case performance
- When you prefer a simple implementation with low overhead
- When you are not concerned about the worst-case time complexity
- When the input size is large

> Note: Quick sort has a worst-case time complexity of O(n^2) when the pivot selection is poor, but randomized pivot selection or selecting the median as the pivot can mitigate this issue.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort?useskin%253Dvector)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#quick-sort)

[**← Go Back**](../README.md)

&nbsp;
