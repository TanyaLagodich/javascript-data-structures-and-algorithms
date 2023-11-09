import { LinkedList } from '../linked-list.js';

describe('Linked List', () => {
    const linkedList = new LinkedList(2);

    describe('creating LinkedList with value 2', () => {
        it('create [1]', () => {
            expect(linkedList.toArray()).toEqual([2]);
        });

        it('create head of LinkedList with value 1', () => {
            expect(linkedList.head.value).toEqual(2);
        });

        it('create tail of LinkedList with value 1', () => {
            expect(linkedList.tail.value).toEqual(2);
        });
    });


    describe('adding new Node with value 3 in the end of LinkedList', () => {
        it('update linkedList', () => {
            linkedList.push(3);
            expect(linkedList.toArray()).toEqual([2, 3]);
        });

        it('update tail', () => {
            expect(linkedList.tail.value).toEqual(3);
        })
    })

    describe('adding new Node with value 1 in the beginning of the LinkedList', () => {
        it('update linkedList', () => {
            linkedList.unshift(1);
            expect(linkedList.toArray()).toEqual([1, 2, 3]);
        });

        it('update head', () => {
            expect(linkedList.head.value).toEqual(1);
        })
    })

    describe('removing new Node with value 1 in the beginning of the LinkedList', () => {
        it('update linkedList', () => {
            linkedList.shift();
            expect(linkedList.toArray()).toEqual([2, 3]);
        });

        it('update head', () => {
            expect(linkedList.head.value).toEqual(2);
        })
    })

    describe('setting new value by index', () => {
        it('update linkedList', () => {
            linkedList.unshift(10);
            linkedList.set(0, 1);
            expect(linkedList.toArray()).toEqual([1, 2, 3]);
        });

        it('update head', () => {
            expect(linkedList.head.value).toEqual(1);
        })
    })

    describe('adding new Node in the middle of LinkedList', () => {
        it('update linkedList', () => {
            linkedList.insert(2, 7);
            expect(linkedList.toArray()).toEqual([1, 2, 7, 3]);
        });
    })

    describe('removing node by index in the LinkedList', () => {
        it('remove a node by value linkedList', () => {
            linkedList.remove( 2);
            expect(linkedList.toArray()).toEqual([1, 2, 3]);
        });
    })

    describe('reversing the LinkedList', () => {
        it('reverse the linkedList', () => {
            linkedList.reverse( );
            expect(linkedList.toArray()).toEqual([3, 2, 1]);
        });
    })

})
