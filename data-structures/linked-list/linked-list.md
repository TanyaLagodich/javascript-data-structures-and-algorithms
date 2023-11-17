# Single Linked List

A simple implementation of a Single Linked List in JavaScript, with basic functionalities and methods for manipulating the list.

### What is a Linked List?
*A Linked List* is a linear data structure consisting of a sequence of elements known as nodes. Each node contains data and a reference (or pointer) to the next node in the sequence. The first node is called the head, while the last node, which points to null, is called the tail. Unlike arrays, Linked Lists do not have a predetermined fixed size, allowing for more flexibility in adding or removing elements. There are various types of Linked Lists, such as singly linked lists, doubly linked lists, and circular linked lists, each with specific features and use cases.

![linked list](https://miro.medium.com/v2/resize:fit:953/1*iiEWrP2IznA6HbmuIdK0lQ.png)

### Big O Notation
The performance of data structures and algorithms is often evaluated using Big O notation for the worst case, which describes the time complexity and space complexity of an algorithm or operation. Here is the Big O analysis for various operations in a singly linked list:

* Adding in the end `O(1)`
* Popping something from the end `O(n)`
* Adding in the beginning `O(1)`
* Removing from the beginning `O(1)`
* Insertion by index `O(n)`
* Removing from index `O(n)`

### Methods

The Single Linked List implementation provides the following methods:

* `push(value)` adds a new node with the given value at the end of the list.
* `pop()` removes the last node from the list.
* `unshift(value)` adds a new node with the given value at the beginning of the list.
* `shift()` removes the first node from the list.
* `get(index)` retrieves the node at the specified index.
* `set(index, value)` sets the value of the node at the specified index.
* `insert(index, value)` inserts a new node with the given value at the specified index.
* `remove(index)` removes the node at the specified index.
* `reverse()` reverses the order of the nodes in the list.
* `toArray()` returns an array containing the values of all nodes in the list.

### Testing
This Single Linked List comes with a comprehensive test suite using Jest. You can run the tests by executing the following command:

```
npm run test
```
### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request.
