# Selection Sort

Selection sort is a simple comparison-based sorting algorithm. In Selection Sort, the first smallest element is selected from the unsorted array and placed at the first position. After that second smallest element is selected and placed in the second position and so on. This process is repeated until all the elements are placed at their correct positions

### Time Complexity

- Worst Case: O(n^2)
- Best Case: O(n^2)
- Average Case: O(n^2)

### Space Complexity

- Worst Case: O(1)

## Pseudocode

```js
define selectionSort(array)
n = length of array
for i from 0 to n-1
lowest = i
for j from i+1 to n
if array[j] < array[lowest]
lowest = j
swap array[lowest] with array[i]
```

### Visualization

![Selection Sort](./selection-sort.webp 'Selection Sort')

> Image from [geeksforgeeks.org](https://www.geeksforgeeks.org/selection-sort)

## Selection Sort is an in-place sorting algorithm

An in-place sorting algorithm sorts the elements within the original array without requiring additional memory space

## When to use Selection Sort

- When the input size is small
- When simplicity is preferred over efficiency
- When the auxiliary space usage needs to be minimal

> Note: Selection sort has poor performance compared to other sorting algorithms for large input sizes

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort?useskin=vector)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#selection-sort)

[**← Go Back**](../README.md)

&nbsp;
