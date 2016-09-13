/**
 * Created by akolosovich on 13/09/16.
 */

class Queue {

    constructor() {
        this._dataStore = [];
    }

    /**
     * @param {string} elm
     */
    enqueue(elm) {
        this._dataStore.push(elm);
    }

    /**
     * @returns {string}
     */
    dequeue() {
        return this._dataStore.shift();
    }

    /**
     * @returns {string}
     */
    front() {
        return this._dataStore[0];
    }

    /**
     * @returns {string}
     */
    back() {
        return this._dataStore[this._dataStore.length - 1];
    }

    /**
     * @returns {string}
     */
    toString() {
        return this._dataStore.toString();
    }

    /**
     * @returns {boolean}
     */
    empty() {
        return this._dataStore.length === 0;
    }
}

module.exports = Queue;
