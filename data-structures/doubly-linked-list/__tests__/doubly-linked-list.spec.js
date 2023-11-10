import { DoublyLinkedList } from '../doubly-linked-list.js';

describe('Doubly Linked List', () => {
    const doublyLinkedList = new DoublyLinkedList(1);

    describe('creating LinkedList with value 1', () => {
        it('create [1]', () => {
            expect(doublyLinkedList.toArray()).toEqual([1]);
        });

        it('create head of LinkedList with value 1', () => {
            expect(doublyLinkedList.head.prev).toEqual(null);
            expect(doublyLinkedList.head.next).toEqual(null);
            expect(doublyLinkedList.head.value).toEqual(1);
        });

        it('create tail of LinkedList with value 1', () => {
            expect(doublyLinkedList.tail.prev).toEqual(null);
            expect(doublyLinkedList.tail.next).toEqual(null);
            expect(doublyLinkedList.tail.value).toEqual(1);
        });
    });

    describe('pushing a new node with value 2', () => {
        it('push new Node with value 2', () => {
            doublyLinkedList.push(2);
            expect(doublyLinkedList.toArray()).toEqual([1, 2]);
        })

        it('create head next with right value', () => {
            expect(doublyLinkedList.head.next.value).toEqual(2);
        })

        it('create tail prev with right value', () => {
            expect(doublyLinkedList.tail.prev.value).toEqual(1);
        })
    });

    describe('popping the last node with value 2', () => {
        it('pop the last Node with value 2', () => {
            doublyLinkedList.pop();
            expect(doublyLinkedList.toArray()).toEqual([1]);
        })

        it('create head next with right value', () => {
            expect(doublyLinkedList.head.next).toEqual(null);
        })

        it('create tail prev with right value', () => {
            expect(doublyLinkedList.tail.prev).toEqual(null);
        })
    });

    describe('removing the first node', () => {
        it('pop the first Node', () => {
            doublyLinkedList.shift();
            expect(doublyLinkedList.toArray()).toEqual([]);
        })

        it('empty list after removing the first and signle node', () => {
            expect(doublyLinkedList.head).toEqual(null);
            expect(doublyLinkedList.tail).toEqual(null);
        })
    });

    describe('adding the first node', () => {
        it('add in the beginning the new Node with value 2', () => {
            doublyLinkedList.unshift(2);
            expect(doublyLinkedList.toArray()).toEqual([2]);
        })

        it('empty list after removing the first and signle node', () => {
            expect(doublyLinkedList.head.value).toEqual(2);
            expect(doublyLinkedList.tail.value).toEqual(2);
        })

        it('add in the beginning the new Node with value 1', () => {
            doublyLinkedList.unshift(1);
            expect(doublyLinkedList.toArray()).toEqual([1, 2]);
        })

        it('check if the head was changed after unshift', () => {
            expect(doublyLinkedList.head.value).toEqual(1);
            expect(doublyLinkedList.tail.value).toEqual(2);
        })
    });

    describe('adding the new node in the middle', () => {
        it('add the new Node with value 5', () => {
            doublyLinkedList.insert(1, 5);
            expect(doublyLinkedList.toArray()).toEqual([1, 5, 2]);
        })
    });

    describe('setting the new value of the existing node in the middle', () => {
        it('set new value 3', () => {
            doublyLinkedList.set(1, 3);
            expect(doublyLinkedList.toArray()).toEqual([1, 3, 2]);
        })
    });

    describe('removing the node from index', () => {
        it('remove the node', () => {
            doublyLinkedList.remove(1);
            expect(doublyLinkedList.toArray()).toEqual([1, 2]);
        })
    });






})
