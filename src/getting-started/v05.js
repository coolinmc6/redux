// Original Version
// function counter(state, action){
// 	if (typeof state === 'undefined') {
// 		return 0;
// 	}
// 	if (action.type === 'INCREMENT') {
// 		return state + 1;
// 	} else if (action.type === 'DECREMENT') {
// 		return state - 1;
// 	} else {
// 		return state;	
// 	}
// }

// Re-written with es6 and switch
console.log('VIDEO 5');
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

expect(
	counter(0, {type: 'INCREMENT', payload: 'Stuff!'})
).toEqual(1);

expect(
	counter(1, {type: 'INCREMENT', payload: 'Stuff!'})
).toEqual(2);

expect(
	counter(2, {type: 'DECREMENT', payload: 'Stuff!'})
).toEqual(1);

expect(
	counter(1, {type: 'DECREMENT', payload: 'Stuff!'})
).toEqual(0);

expect(
	counter(1, {type: 'SOMETHING ELSE'})
).toEqual(1);

expect(counter(undefined, {})).toEqual(0)

console.log('Tests passed!');