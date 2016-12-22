# README

## Egghead.io: Getting Started with Redux

### Video 5

### Video 6

- store is created which we use to tell it that the reducer is 'counter'
- the store has three important methods (getState(), dispatch({}), and subscribe():
```javascript


store.getState();
// returns 0; the default was set to 0 and this simply returns the current state

store.dispatch({ type: 'INCREMENT'});
// this is the action, 'INCREMENT'.  As our logic dictates, 'INCREMENT' adds 1 to state

store.subscribe(() => {
	document.body.innerText = store.getState();
});
// subscribe allows you to render to the UI
```

- the render() method that he created allows us to render the initial state (0)
which the subscribe() method calls

### Video 7