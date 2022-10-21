import {sendUpdate} from './ziro-core.js';

const KEY_PREFIX = 'ziro-';

export default class ZiroState {
    constructor(name) {
        this._config = typeof this.config === 'function' ? this.config() : {};
        this._success = true;
        this._updating = false;
        this.key = KEY_PREFIX + name;

        const initialState = typeof this.init === 'function' ? this.init() : {};
        try {
            let savedState = undefined;
            if (this._config.localStorage) {
                savedState = JSON.parse(localStorage.getItem(this.key));
            } else if (this._config.sessionStorage) {
                savedState = JSON.parse(sessionStorage.getItem(this.key));
            }
            this._innerState = this.transform(savedState ? Object.assign(initialState, savedState) : initialState);
        } catch (e) {
            console.error('Error retrieving saved state', this.key, e);
            this._innerState = this.transform(initialState);
        }

        this.state = {};
        const self = this;
        Object.keys(this._innerState).forEach(key => {
            Object.defineProperty(this.state, key, {
                set: function(val) {
                    self._innerState[key] = val;
                    if (self._config.localStorage) {
                        localStorage.setItem(self.key, JSON.stringify(self._innerState));
                    } else if (self._config.sessionStorage) {
                        sessionStorage.setItem(self.key, JSON.stringify(self._innerState));
                    }
                    sendUpdate();
                },
                get: function() {
                    return self._innerState[key];
                }
            });
        });

        sendUpdate();
    }

    transform(state) {
        return state;
    }

    init() {
        return {
        }
    }

    getState() {
        return this._innerState;
    }

    sendUpdate(promise) {
        this._updating = true;

        return promise.then(() => {
            this._updating = false;
            this._success = true;
        }).catch(() => {
            this._updating = false;
            this._success = false;
        }); 
    }

    isUpdating() {
        return this._updating;
    }

    isUpdated() {
        return !this._updating;
    }

    isSuccess() {
        return this._success;
    }

    isFailure() {
        return !this._success;
    }
}
