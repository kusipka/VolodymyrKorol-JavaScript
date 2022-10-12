// CLASS: UnitTests
//
// Author: Volodymyr Korol
//
// REMARKS: Test Dictionary.js
//
//-----------------------------------------

const assert = require("assert");
const Dictionary = require("./Dictionary.js");
const { StringHash } = require("./Hashable.js");

//Test for emptiness
function shouldCreateAnEmptyDictionary() {
	const dictionary = new Dictionary(10);

	assert.equal(dictionary.isEmpty(), true);
}

//Test if new element is present in dictionary
function shouldPushElementIntoEmptyDictionary() {
	const length = 10;
	const dictionary = new Dictionary(length);
	const key = new StringHash("H");
	const value = 9;

	dictionary.put(key, value);

	assert.equal(dictionary.isEmpty(), false);
	assert.notEqual(dictionary.dictionary[key.hash % length], undefined);
}

//Test for get() function
function shouldGetElementValue() {
	const dictionary = new Dictionary(10);
	const key = new StringHash("B");
	const value = 8;

	dictionary.put(key, value);

	assert.equal(dictionary.get(key), value);
}

//Test for editing existing key
function shouldEditExistingElementValue() {
	const dictionary = new Dictionary(10);
	const key = new StringHash("A");
	const oldValue = 5;
	const newValue = 6;

	dictionary.put(key, oldValue);
	dictionary.put(key, newValue);

	assert.equal(dictionary.get(key), newValue);
}

//Test for checking if LinkedList created while collision happening
function shouldResolveCollisionProblem() {
	const length = 1;
	const dictionary = new Dictionary(length);
	const key1 = new StringHash("V");
	const key2 = new StringHash("K");

	dictionary.put(key1, 5);
	dictionary.put(key2, 9);

	assert.notEqual(dictionary.dictionary[0].head.next, undefined);
}

// Test contains function
function shouldCheckIfContainsElement() {
	const length = 10;
	const dictionary = new Dictionary(length);
	const key1 = new StringHash("N");
	const key2 = new StringHash("Q");

	dictionary.put(key1, 5);

	assert.equal(dictionary.contains(key1), true);
	assert.equal(dictionary.contains(key2), false);
}

//Test for putting invalid key to the dictionary
function shouldThrowIfInvalidKeyProvidedToPut() {
	const length = 10;
	const dictionary = new Dictionary(length);
	const key = "hash";
	let hasError = false;

	try {
		dictionary.put(key, 5);
	} catch {
		hasError = true;
	}

	assert.equal(hasError, true);
}

//Test get() function for invalid value
function shouldThrowIfInvalidKeyProvidedToGet() {
	const length = 10;
	const dictionary = new Dictionary(length);
	const key = "hash";
	let hasError = false;

	try {
		dictionary.get(key);
	} catch {
		hasError = true;
	}

	assert.equal(hasError, true);
}

//Test contains() function for invalid value
function shouldThrowIfInvalidKeyProvidedToContains() {
	const length = 10;
	const dictionary = new Dictionary(length);
	const key = "hash";
	let hasError = false;

	try {
		dictionary.contains(key);
	} catch {
		hasError = true;
	}

	assert.equal(hasError, true);
}

//    RUN all unit-tests
function runTests() {
	shouldCreateAnEmptyDictionary();
	shouldPushElementIntoEmptyDictionary();
	shouldGetElementValue();
	shouldEditExistingElementValue();
	shouldResolveCollisionProblem();
	shouldCheckIfContainsElement();
	shouldThrowIfInvalidKeyProvidedToPut();
	shouldThrowIfInvalidKeyProvidedToGet();
	shouldThrowIfInvalidKeyProvidedToContains();

	console.log("All tests executed successfully.");
}

runTests();
