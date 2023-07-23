# Binary Search

**Binary search is a search algorithm that finds the position of a target value within a sorted array.**

Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

> Note: Each time the array length doubles, the number of steps required to find an element increases only by one. This is why binary search is so efficient.

### Time Complexity

- Worst Case: O(log n)
- Best Case: O(1)
- Average Case: O(log n)

### Space Complexity

- Worst Case: O(1)

## Pseudocode

```js
define binarySearch(array, target)
  define left pointer at start of array
  define right pointer at end of array
  while left pointer is less than or equal to right pointer
    define middle pointer at the half of left and right pointers
    if value at middle pointer is equal to target
      return middle pointer
    else if value at middle pointer is less than target
      move left pointer to middle pointer plus one
    else
      move right pointer to middle pointer minus one
  return -1
```

> Note: Binary Search can also be implemented recursively. (check out binarySearchRecursive.js in this repo)

### Visualization

![Binary Search](./binary-search.webp 'Binary Search')

> Image from [geeksforgeeks.org](https://www.geeksforgeeks.org/binary-search)

## When to use Binary Search

- When you need to find an element in a sorted array or linked list

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#binary-search)

[**← Go Back**](./README.md)

&nbsp;
