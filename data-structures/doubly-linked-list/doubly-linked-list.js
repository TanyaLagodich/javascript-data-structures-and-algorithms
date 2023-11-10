class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;

        const temp = this.tail;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            this.head = newNode;
            temp.prev = this.head;
            this.head.next = temp;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.length) return undefined;

        const temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {

            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined;
        let temp = this.head;

        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }

        return temp;
    }

    set(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return undefined;

        const newNode = new Node(value);
        const prev = this.get(index - 1);
        const next = prev.next;
        prev.next = newNode;
        newNode.prev = prev;

        newNode.next = next;
        next.before = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < 0 || index > this.length) return undefined;

        const temp = this.get(index);
        const prev = temp.prev;
        const next = temp.next;

        prev.next = temp.next;
        next.prev = temp.prev;

        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    toArray() {
        let current = this.head;
        let values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }

        return values;
    }
}
