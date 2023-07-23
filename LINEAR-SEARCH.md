# Linear Search

Linear search is a search algorithm that sequentially checks each element of the array until a match is found or the whole array has been searched.

### Time Complexity

- Worst Case: O(n)
- Best Case: O(1)
- Average Case: O(n)

### Space Complexity

- Worst Case: O(1)

## Pseudocode

```js
define linearSearch(array, target)
  for each element in array
    if element is equal to target
      return index of element
  return -1
```

### Visualization

![Linear Search](./linear-search.webp 'Linear Search')

> Image from [geeksforgeeks.org](https://www.geeksforgeeks.org/linear-search)

## When to use Linear Search

- when the list has only a few elements
- when performing a single search in an un-ordered list.

## When not to use Linear Search

- when the list has a large number of elements
- when performing a search in an ordered list. In this case, use binary search.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linear_search#:~:text=Linear%20search%20is%20usually%20very,to%20use%20a%20faster%20method.)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#linear-search)

[**← Go Back**](./README.md)

&nbsp;
