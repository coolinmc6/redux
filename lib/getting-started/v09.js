'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addCounter = function addCounter(list) {
	// list.push(0);
	// return list;

	// return list.concat([0]);

	return [].concat(_toConsumableArray(list), [0]);
};

var removeCounter = function removeCounter(list, index) {
	// list.splice(index, 1)
	// return list;

	// return list
	// 	.slice(0, index)
	// 	.concat(list.slice(index + 1))

	// es6 syntax
	return [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1)));
};

var incrementCounter = function incrementCounter(list, index) {
	// list[index]++;
	// return list;

	// return list
	// 	.slice(0, index)
	// 	.concat([list[index] + 1])
	// 	.concat(list.slice(index + 1));

	return [].concat(_toConsumableArray(list.slice(0, index)), [list[index] + 1], _toConsumableArray(list.slice(index + 1)));
};

var testAddCounter = function testAddCounter() {
	var listBefore = [];
	var listAfter = [0];

	deepFreeze(listBefore);

	expect(addCounter(listBefore)).toEqual(listAfter);
};

var testRemoveCounter = function testRemoveCounter() {
	var listBefore = [0, 10, 20];
	var listAfter = [0, 20];

	deepFreeze(listBefore);

	expect(removeCounter(listBefore, 1)).toEqual(listAfter);
};

var testIncrementCounter = function testIncrementCounter() {
	var listBefore = [0, 10, 20];
	var listAfter = [0, 11, 20];

	deepFreeze(listBefore);

	expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed');