# Heap Sort

Heap sort is a comparison-based sorting algorithm that uses a Binary Heap data structure. In Heap Sort, the array is treated as a complete binary tree and is transformed into a max heap or min heap. The root element (maximum or minimum) is then swapped with the last element of the array and removed from consideration. This process is repeated until the array is sorted.

> We use an array to represent a binary heap. For any given node at index `i`, the left child is at index `2i + 1` and the right child is at index `2i + 2`.

## Time Complexity

- O(n log n)

## Space Complexity

- O(1)

## Pseudocode

```js
define heapSort(array)
n = length of array

// Build the max heap
for i from n/2 - 1 down to 0
    heapify(array, n, i)

// Extract elements from the heap
for i from n-1 down to 1
    swap array[0] with array[i]
    heapify(array, i, 0)

define heapify(array, n, i)
largest = i
left = 2*i + 1
right = 2*i + 2

if left < n and array[left] > array[largest]
    largest = left

if right < n and array[right] > array[largest]
    largest = right

if largest != i
    swap array[i] with array[largest]
    heapify(array, n, largest)
```

## Heap Sort is an in-place sorting algorithm

An in-place sorting algorithm sorts the elements within the original array without requiring additional memory space

## When to use Heap Sort

- When a stable sorting algorithm is not required
- When the input size is large
- When worst-case time complexity of O(n lo n) is acceptable

> Note: Heap sort is not a stable sorting algorithm. A stable sorting algorithm maintains the relative order of elements with equal keys. For example, in the array `[5, 2, 5, 1]`, the two `5`s will be in the same order before and after sorting. However, in heap sort, the two `5`s may be swapped during the heapify process.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Heapsort?useskin=vector)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#heap-sort)

[**← Go Back**](./README.md)

&nbsp;
