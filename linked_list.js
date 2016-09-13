/**
 * Created by akolosovich on 13/09/16.
 */

class Node {

    constructor(elm) {
        this.elm = elm;
        this.next = null;
    }
}

class LinkedList {

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
        current.next = node;
    }

    display() {
        let currentNode = this._head;
        while (!(currentNode.next !== null)) {
            console.log(currentNode.next.elm);
            currentNode = currentNode.next;
        }
    }

    /**
     * @param {string} elm
     * @returns {Node}
     */
    findPrev(elm) {
        let currentNode = this._head;
        while (!(currentNode.next !== null) && (currentNode.next.elm !== elm)) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    /**
     * @param {string} elm
     */
    remove(elm) {
        const prevNode = this.findPrev(elm);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
}

module.exports = LinkedList;