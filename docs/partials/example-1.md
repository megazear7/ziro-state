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

class MessageManager {
  constructor() {
    // Pass your object to the listener
    listen(this);
  }

  stateUpdated() {
    // Recieve updates in the stateUpdated method.
    console.log(exampleState.getState().message);
  }
}

// Initiate updates by calling the methods you defined
exampleState.updateMessageAsync();
```
