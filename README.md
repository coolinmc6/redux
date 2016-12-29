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
- We get the test to pass but then we add deepFreeze(listBefore) which freezes the
array and the test fails
- We are trying to AVOID changing the array
- So instead of doing list.push and then returning the list we are simply returning
list.concat([0]) which allows the test to pass
- CM => I need to learn more about the spread operator
- for the addCounter, removeCounter, and incrementCounter functions, there are three ways
to perform the action: (#1) mutating the array, (#2) not mutating the array, and (#3) not 
mutating the array with es6 syntax


### Video 10 - Redux: Avoiding Object Mutations with Object.assign() and ...spread
```javascript
const toggleTodo = (todo) => {
	return Object.assign({}, todo, {
		completed: !todo.completed
	});
};
```
- the Object.assign method is just like the assignment operator.  We are assigning the
left side, which is the first argument between the parens, an empty object. Every further
argument is assigned to the target object.
  - we can override the 'completed' property because the last one wins
- He also discusses the spread operator which is not available in es6 but can be used
in Babel with the stage-2 preset

### Video 11 - Redux: Writing a Todo List Reducer (Adding a Todo)
- a reducer is a pure function you write to implement the update logic of your application
to figure out the next state is calculated given what the current state AND the action
that is dispatched
- Here is a quick run-down of what is happening in the code:
  1. the testAddTodo() function is called (line 40)
  2. testAddTodo() creates an empty array (stateBefore) and an object called 'action' with
  three properties: type, id, and text
  3. testAddTodo() also creates a stateAfter array which contains on object, also with three
  properties
  4. After using deepFreeze on the stateBefore and action items, it uses the expect library
  to call the todos() function and expects it to equal stateAfter
  5. todos() takes two arguments which we've entered as stateBefore (for the state variable)
  and action (for the action variable)
  6. todos() uses a switch to check if the action variable's property 'type' (action.type) is 
  equal to 'ADD_TODO', which it is...
  7. ...it then returns an array with one object in it...its properties are set to whatever
  was given in the action (e.g. id: action.id, text: action.text) while another property
  'completed' is set to false.
    - NOTE: the object is added using the spread operator: ...array_name and then a comma =>
    '...state,' and then the object.  See the v9.js for more on that and how else I could add
    to an array
  8. Lastly, because stateBefore and action are not altered and we arrived at our desired
  result, stateAfter, 'All tests passed' is displayed

### Video 12 - Redux: Writing a Todo List Reducer (Toggling a Todo)
- builds off the code from the last video
- 

### Video 13 - Redux: Reducer Composition with Arrays
- also builds off the code from v11
- STOP

### Video 14 - Redux: Reducer Composition with Objects 


