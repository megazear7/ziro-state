const observers = [];

export const listen = observer => observers.push(observer);

export const sendUpdate = () => {
    observers.forEach(observer => {
        observer.stateUpdated();
    });
}