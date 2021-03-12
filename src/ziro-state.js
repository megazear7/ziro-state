import {sendUpdate} from './ziro-core.js';

export default class ZiroState {
    constructor() {
        this._success = true;
        this._updating = false;
        this._innerState = this.init();
        this.state = {};
        const self = this;

        Object.keys(this._innerState).forEach(key => {
            this.state = {
                ...this.state,
                set [key](val) {
                    self._innerState[key] = val;
                    sendUpdate();
                }
            }
        });
    }

    init() {
        return {
        }
    }

    getState() {
        return JSON.parse(JSON.stringify(this._innerState));
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
