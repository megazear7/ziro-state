const observers = [];

export const listen = observer => {
    observers.push(observer);
    observer.stateUpdated();
};

export const sendUpdate = () => {
    observers.forEach(observer => {
        observer.stateUpdated();
    });
}