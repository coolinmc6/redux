# README

## Notes
- To run Babel and update lib folder:

```sh
npm run build
```
- I had some trouble getting video 8 code to run.  I was getting that 'unexpected
token' error as it did not recognize the react code (I believe).  This is what I did:
```sh
npm i babel-preset-react
npm i babel-preset-es2015
```
  - changed my presets in my .babelrc file:
```json
{
  "presets": ["env", "react", "es2015"]
}
```
  - when it wasn't rendering, I moved my v08.js script tag to below my div#root

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


### Video 8 - Redux: React Counter Example
- the counter component is a 'dumb' component; it only specifies how the current
state outputs into render-able output
- When we render a Counter, we specify what its value should be by accessing the
state (store.getState())
- for video 8 to work, here is HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Redux</title>
	<!-- Add React -->
	<script src="https://unpkg.com/react@15/dist/react.js"></script>
	<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.js"></script>
	<script src="https://unpkg.com/expect/umd/expect.min.js"></script>
</head>
<body>
	<div id="root"></div>

	<script src="lib/getting-started/v08.js" ></script>
</body>
</html>
```

### Video 9 - Redux: Avoiding Array Mutations with concat(), slice(), and spread



