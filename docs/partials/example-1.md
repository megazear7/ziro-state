#### Define your state
```js
import { ZiroState } from 'ziro-state';

class ExampleState extends ZiroState {
  // Initialize your state
  init() {
    return {
      message: 'Hello, World'
    }
  }

  // After reading json from local storage, this method can be used
  // to transform that state into an JS object or perform other transformations.
  transform(state) {
    return  {
      message: state.message.toLowerCase();
    }
  }

  // Define synchronous updates
  updateMessage(str) {
    this.state.message = str;
  }

  // Define asynchronous updates
  updateMessageAsync() {
    setTimeout(
      () => this.updateMessage('Async update'),
      2000
    );
  }
}

// Export your object
export default new ExampleState('example-state');
```

#### Use your state
```js
import { listen } from 'ziro-state';
import exampleState from './example-state.js';

class MessageListener {
  constructor() {
    // Pass your object to the listener
    listen(this);
  }

  stateUpdated() {
    // Recieve updates in the stateUpdated method
    console.log(exampleState.getState().message);
  }
}

// Create an instance of your message listener
new MessageListener();

// Initiate updates by calling the methods you defined
exampleState.updateMessageAsync();
```
