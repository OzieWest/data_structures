/**
 * Created by akolosovich on 13/09/16.
 */

class Set {

    constructor() {
        this._dataStore = [];
    }

    /**
     * @param {string} elm
     * @returns {boolean}
     */
    add(elm) {
        if (this._dataStore.indexOf(elm) >= 0) return false;

        this._dataStore.push(elm);
        return true;
    }

    /**
     * @param {string} elm
     * @returns {boolean}
     */
    remove(elm) {
        const pos = this._dataStore.indexOf(elm);
        if (pos >= 0) {
            this._dataStore.splice(pos, 1);
            return true;
        }
        return false;
    }

    /**
     * @param {string} elm
     * @returns {boolean}
     */
    contains(elm) {
        return this._dataStore.indexOf(elm) >= 0;
    }

    /**
     * @param {function} fn
     */
    each(fn) {
        this._dataStore.forEach(fn);
    }

    /**
     * @param {Set} set
     * @returns {Set}
     */
    union(set) {
        const result = new Set();

        this.each(item => result.add(item));
        set.each(item => result.add(item));

        return result;
    }

    /**
     * @param {Set} set
     * @returns {Set}
     */
    intersect(set) {
        const result = new Set();

        this.each(item => {
            if (set.contains(item)) {
                result.add(item);
            }
        });

        return result;
    }

    /**
     * @param {Set} set
     * @returns {boolean}
     */
    subset(set) {
        if (this.size() > set.size()) return false;

        for (let i = 0; i < this.size(); i++) {
            const elm = this._dataStore[i];

            if (!set.contains(elm)) return false;
        }

        return true;
    }

    /**
     * @param {Set} set
     * @returns {Set}
     */
    difference(set) {
        const result = new Set();

        this.each(item => !set.contains(item) ? result.add(item) : null);

        return result;
    }

    clear() {
        delete this._dataStore;
        this._dataStore = [];
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this._dataStore.length === 0;
    }

    /**
     * @returns {Number}
     */
    size() {
        return this._dataStore.length;
    }

    /**
     * @returns {Array.<string>}
     */
    toArray() {
        const temp = JSON.stringify(this._dataStore);
        return JSON.parse(temp);
    }

    /**
     * @returns {string}
     */
    toString() {
        return this._dataStore.toString();
    }
}

module.exports = Set;