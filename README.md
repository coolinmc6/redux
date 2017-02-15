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

## Next Steps
- 01/03/17 => one run-through done but I'll need to run through again, maybe after I've done
another React-Redux tutorial or two.  There are a ton of good things to learn here, it needs at 
least a day to rip through and get the code and actually learn something


## Egghead.io: Getting Started with Redux

### Video 1: The Single Immutable State Tree
- Everything that changes in your application, including the data and UI state, is 
included in a single JavaScript object called 'state' or the 'state tree'
- First Principle of Redux: your entire application state is stored in an object tree
inside a single store

### Video 2: Describing State Changes with Actions
- The Second Principle of Redux: state is read-only; it cannot be modified or mutated.
- To change state, you dispatch an action describing that change
- the action is the minimal representation of that change
- The components don't know what's happening but they just have to dispatch an action
- The state is read-only; the only way to change the state tree is by dispatching an
action.  Actions are plain JS object describing in a minimal way what is changing with
the application state

### Video 3: Pure and Impure Functions
- Pure functions do not have any observable side-effects such as network or database
calls.
- Pure functions do not modify the values passed to them
- Impure functions may call the database or network, they may override the values you
pass to them, etc.

### Video 4: The Reducer Function
- The state mutations in your app need to be described as a pure function that takes 
the previous state and the action being dispatched and returns the next state of your
application.
- It cannot modify the previous state
- Third Principle of Redux: to describe state mutations, you have to write a function that
takes the previous state of the app AND an action being dispatched and then return the
next step of the app.  This function has to be 'pure'; this function is called a 'reducer'.

### Quick Review
- First Principle of Redux: your entire application state is stored in an object tree
inside a single store
- The Second Principle of Redux: state is read-only; it cannot be modified or mutated.
- Third Principle of Redux: to describe state mutations, you have to write a function that
takes the previous state of the app AND an action being dispatched and then return the
next step of the app.
- a reducer is a function that takes the current state and an action and then returns
the next state of the application

### Video 5: Writing a Counter Reducer with Tests
- First one of the key lessons in this is that using if-else statements don't really work because 
of all the different cases there could be.  Using a switch is better and cleaner; if none
of the cases apply, simply return state.
- Notice that in each expect statement, we are calling our reducer, `counter()`, and we are
passing it two arguments: our current state (or whatever the count is now) and an object
with just one key, 'type'.  
- This looks super simple BUT just to try it, I also gave each test object a payload.  So despite 
looking like an oversimplification, this matches up exactly with what I've learned to be 'reducers'.

### Video 6: Store Methods: getState(), dispatch(), and subscribe()

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


### Video 14 - Redux: Reducer Composition with Objects 
- 

### Video 15 - Redux: Reducer Composition with combineReducers()
- we learned how to use the reducer composition pattern to let different reducers to handle
different parts of the state tree and then combine their results
- the combine reducers is so common that they've created a function for you
- always name reducers after the state keys that they manage

### Video 16 - Redux: Implementing combineReducers() from Scratch
- this lesson we implement the combineReducers utility function from scratch
- I should review the reduce function before I do this video again

### Video 17 - Redux: React Todo List Example (Adding a Todo)
- looks like a "reset" of the code...maybe back to video 8?  It goes back a good bit
- you see the top parts of the code near the end
- great run through of the todo list example

### Video 18 - Redux: React Todo List Example (Toggling a Todo)
- good run-through of the toggle

### Video 19 - Redux: React Todo List Example (Filtering Todos)
- longer video (~8 mins)
- how does e.preventDefault() work?
- really good, watch again

### Video 20 - Redux: Extracting Presentational Components (Todo, TodoList)
- refactor all that code and break it into multiple components
- onClick, completed, and text are props
- Todo, TodoList
- the TodoList is the container component


### Video 21 - Redux: Extracting Presentational Components (AddTodo, Footer, FilterLink)
- a lot of things that I didn't follow
- data flow run-through around 4:12
- single container component called TodoApp that is re-rendered every time the store 
is changed
- it receives the todos and visibilityFilter props
- onAddClick function is a prop for the AddTodo component
- the TodoList component receives an array of todos and maps over them rendering 
individual Todo components
- it uses the spread operator to spread every property of the todo object to the Todo
component
- good run through that I'll need to watch again, probably a couple times


### Video 22 - Redux: Extracting Container Components (FilterLink)
- the TodoApp specifies the behaviors; the others ones don't do anything with
actions, it passes it to the TodoApp via props
- Another refactor => extract container components.  Currently, the parents need 
to know too much of what the children components need 
- 

### Video 23 - Redux: Extracting Container Components (VisibleTodoList, AddTodo)
- all container components are similar => connect a presentational component to
the Redux store AND specify the data and the behavior that it needs
- just one ReactDOM.render() call at the end
- the AddTodo is kinda both a presentational component and container component;
they are kept together for ease
- the VisibleTodoList is a proper container component
- the Footer is a presentational component rendering three different FilterLink
- the FilterLink is a container component so it subscribes to the store and it
renders the presentational component called Link
- Link is a presentational component that renders an a-tag
- He recommends separating presentational and container components

### Video 24 - Redux: Passing the Store Down Explicitly via Props
- es6 construction syntax


### Video 25 - Redux: Passing the Store Down Implicitly via Context
- React feature called context
- we now pass the context down implicitly
- the providers component renders whatever you pass it
- it also provides the context for grandchildren
- I think allos me to just set the context and not set the props on one component and
its child component JUST to pass it down to its child
- the context is not a stable API and has changed before, try not to rely on it too much

### Video 26 - Redux - Passing the Store Down with &lt;Provider&gt;
- imported the Provider via the React-Redux library which is a binder

### Video 27 - Redux - Generating Containers with connect() from React Redux (VisibleTodoList)
- 

### Video 28 - Redux - Generating Containers with connect() from React Redux (AddTodo)
- 

### Video 29 - Redux - Generating Containers with connect() from React Redux (FooterLink)
- writing the mapStateToLinkProps function
- writing the mapDispatchToLinkProprs function
- call connect function (FilterLink)
- 

### Video 30 - Extracting Action Creators
- 









