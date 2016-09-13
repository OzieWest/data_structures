/**
 * Created by akolosovich on 13/09/16.
 */

class Node {

    /**
     * @param {string} elm
     */
    constructor(elm) {
        this.elm = elm;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {

    constructor() {
        this._head = new Node('head');
    }

    /**
     * @param {string} elm
     * @returns {Node}
     */
    find(elm) {
        let currentNode = this.head;
        while (currentNode.elm !== elm) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    /**
     * @param {string} newElm
     * @param {string} elm
     */
    insert(newElm, elm) {
        const node = new Node(newElm);
        const current = this.find(elm);
        node.next = current.next;
        node.prev = current;
        current.next = node;
    }

    /**
     * @param {string} elm
     */
    remove(elm) {
        const currentNode = this.find(elm);
        if (currentNode.next !== null) {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
            currentNode.next = null;
            currentNode.prev = null;
        }
    }

    /**
     * @returns {Node}
     */
    findLast() {
        let currentNode = this._head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    display() {
        let currentNode = this._head;
        while (!(currentNode.next !== null)) {
            console.log(currentNode.next.elm);
            currentNode = currentNode.next;
        }
    }
}

module.exports = DoubleLinkedList;