# Selection Sort

Selection Sort is a simple sorting algorithm that repeatedly selects 
the minimum element from an unsorted part of the array and places it 
at the beginning. The algorithm divides the array into a sorted and an 
unsorted region. In each iteration, it finds the minimum element from 
the unsorted region and swaps it with the first unsorted element.

![animation selection sort](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5WXRN62ddiM_Gcf4GDdCZg.gif)
## Function Parameters
`array`: The array to be sorted.

## Performance
Selection Sort has a time complexity of `O(n^2)`, making it inefficient for 
large datasets. It performs well for small datasets due to its simplicity.
