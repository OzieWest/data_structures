/**
 * Created by akolosovich on 14/09/16.
 */

'use strict';

class Node {

    /**
     * @param {number} value
     * @param {Node=} left
     * @param {Node=} right
     */
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

class BST {

    constructor() {
        this.root = null;
    }

    /**
     * @param {number} value
     * @returns {Node}
     */
    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            return this.root = node;
        }

        let current = this.root;
        let parrent = null;
        while (true) {
            parrent = current;
            if (value < current.value) {
                current = current.left;
                if (current === null) {
                    parrent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parrent.right = node;
                    break;
                }
            }
        }
    }

    /**
     * @param {Node=} node
     * @param {Array.<number>=} result
     * @returns {Array.<number>}
     */
    inOrder(node, result) {
        result = result || [];
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    /**
     * @param {Node=} node
     * @returns {number}
     */
    getMin(node) {
        let current = node || this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    /**
     * @param {Node=} node
     * @returns {number}
     */
    getMax(node) {
        let current = node || this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    /**
     * @param {number} value
     * @returns {Node}
     */
    find(value) {
        let current = this.root;
        while (current.value !== value) {

            current = value < current.value ?
                current.left :
                current.right;

            if (current === null) return null;
        }
        return current;
    }

    removeNode(node, value) {
        if (node === null) return null;

        if (value === node.value) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            const tempNode = this.getMin(node.right);
            node.value = tempNode.value;
            node.right = this.removeNode(node.right, tempNode.value);
            return node;
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else {
            node.right = this.removeNode(node.right, value);
            return node;
        }
    }

    /**
     * @param {number} value
     */
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
}

/**
 * Asserts
 */
const input = [99, 11, 93, 86, 36, 73, 17, 7, 97, 83];
const inOrderExpected = [7, 11, 17, 36, 73, 83, 86, 93, 97];

const bst = new BST();

input.forEach(item => bst.insert(item));

console.assert(bst.getMin() === 7, 'bst.getMin() === 7');
bst.remove(99);
console.assert(bst.getMax() === 97, 'bst.getMax() === 97');
console.assert(bst.find(17) !== null, 'bst.find(17) !== null');
console.assert(bst.find(999) === null, 'bst.find(999) === null');
console.assert(bst.inOrder(bst.root).toString() === inOrderExpected.toString());

module.exports = BST;
