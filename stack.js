/**
 * Created by akolosovich on 13/09/16.
 */

/**
 * A list-like structure that can be used to solve many problems in computing is the stack.
 * Stacks are efficient data structures because data can be added or removed only from the top of a stack,
 * making these procedures fast and easy to implement. Stacks are used extensively in programming language
 * implementations for everything from expression evaluation to handling function calls.
 */

class Stack {

    constructor() {
        this._dataStore = [];
        this._top = 0;
    }

    /**
     * @param {string} elm
     */
    push(elm) {
        this._dataStore[this._top++] = elm;
    }

    /**
     * @returns {string}
     */
    pop() {
        return this._dataStore[--this._top];
    }

    /**
     * @returns {string}
     */
    peek() {
        return this._dataStore[this._top - 1];
    }

    /**
     * @returns {number}
     */
    length() {
        return this._top;
    }

    clear() {
        delete this._dataStore;
        this._dataStore = [];
        this._top = 0;
    }
}

module.exports = Stack;