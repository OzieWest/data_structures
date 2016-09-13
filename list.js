/**
 * Created by akolosovich on 13/09/16.
 */

/**
 * Lists are one of the most common organizing tools people use in their day-to-day lives.
 * We have to-do lists, grocery lists, top-ten lists, bottom-ten lists, and many other types.
 * Our computer programs can also use lists, particularly if we only have a few items to store in list form.
 * Lists are especially useful if we don’t have to perform searches on the items in the list
 * or put them into some type of sorted order. When we need to perform long searches or complex sorts,
 * lists become less useful, especially with more complex data structures.
 */

class List {

    constructor() {
        this._listSize = 0;
        this._pos = 0;
        this._dataStore = [];
    }

    /**
     * @param {string} elm
     */
    append(elm) {
        this._dataStore[this._listSize++] = elm;
    }

    /**
     * @param {string} elm
     * @returns {number}
     */
    find(elm) {
        for (let i = 0; i < this._dataStore.length; i++) {
            if (this._dataStore[i] === elm) return i;
        }
        return -1;
    }

    /**
     * @param {string} elm
     * @returns {boolean}
     */
    remove(elm) {
        const foundAt = this.find(elm);
        if (foundAt > -1) {
            this._dataStore.splice(foundAt, 1);
            this._listSize--;
            return true;
        }
        return false;
    }

    /**
     * @returns {number}
     */
    length() {
        return this._listSize;
    }

    /**
     * @returns {string}
     */
    toString() {
        return this._dataStore.toString();
    }

    /**
     * @param {string} elm
     * @param {string} after
     * @returns {boolean}
     */
    insert(elm, after) {
        const insertPos = this.find(after);
        if (insertPos > -1) {
            this._dataStore.splice(insertPos + 1, 0, elm);
            this._listSize++;
            return true;
        }
        return true;
    }

    clear() {
        delete this._dataStore;
        this._dataStore = [];
        this._listSize = this._pos = 0;
    }

    /**
     * @param {string} elm
     * @returns {boolean}
     */
    contains(elm) {
        for (let i = 0; i < this._dataStore.length; i++) {
            if (this._dataStore[i] === elm) return true;
        }
        return false;
    }

    front() {
        this._pos = 0;
    }

    end() {
        this._pos = this._listSize - 1;
    }

    prev() {
        if (this._pos > 0) {
            this._pos--;
        }
    }

    next() {
        if (this._pos < this._listSize - 1) {
            this._pos++;
        }
    }

    /**
     * @returns {number}
     */
    cursorPos() {
        return this._pos;
    }

    /**
     * @param {number} position
     */
    moveTo(position) {
        this._pos = position;
    }

    /**
     * @returns {*}
     */
    getElement() {
        return this._dataStore[this._pos];
    }
}

module.exports = List;