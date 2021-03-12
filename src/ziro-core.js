const observers = [];
const states = [];

// TODO observe changes to the states and when it changes call stateChanged on each observer.

export const listen = observer => observers.push(observer);
export const connect = state => states.push(state);
