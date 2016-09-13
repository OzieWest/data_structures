/**
 * Created by akolosovich on 13/09/16.
 */

class Dictionary {

    constructor() {
        this._dataStore = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     */
    add(key, value) {
        this._dataStore[key] = value;
    }

    /**
     * @param {string} key
     * @returns {string}
     */
    find(key) {
        return this._dataStore[key];
    }

    /**
     * @param {string} key
     */
    remove(key) {
        delete this._dataStore[key];
    }

    /**
     * @returns {Array.<string>}
     */
    keys() {
        return Object.keys(this._dataStore);
    }

    /**
     * @returns {Array.<string>}
     */
    values() {
        return this.keys().map(key => this._dataStore[key]);
    }

    /**
     * @returns {Number}
     */
    count() {
        return this.keys().length;
    }

    clear() {
        delete this._dataStore;
        this._dataStore = {};
    }
}

module.exports = Dictionary;