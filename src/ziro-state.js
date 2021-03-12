import {connect} from './ziro-core.js';

export default class ZiroState {
    constructor() {
        this.state = this.init();
        connect(this.state);
    }

    init() {
        return {
        }
    }

    getState() {
        // TODO Make deep copy?
        return this.state;
    }

    isUpdating() {
        return true; // TODO
    }

    isSuccess() {
        return true; // TODO
    }


    isFailure() {
        return true; // TODO
    }
}
