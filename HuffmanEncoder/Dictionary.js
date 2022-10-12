// CLASS: Dictionary
//
// Author: Volodymyr Korol
//
// REMARKS: Implement Hash Table Dictionary
//
//-----------------------------------------

"use strict";
const { Hashable } = require("./Hashable.js");
const { Node, List } = require("./LinkedList.js");

class Dictionary {
	length;
	dictionary;
	isDictionaryEmpty = true;

	//create new dictionary and set its length
	constructor(length) {
		this.length = length;
		this.dictionary = new Array(length);
	}

	//validate the key
	validateKey(key) {
		if (!Hashable.isHashable(key)) {
			throw new Error("INVALID KEY.");
		}
	}

	//put key-value pair inside dictionary
	put(key, value) {
		this.validateKey(key);
		this.isDictionaryEmpty = false;
		const index = key.hash % this.dictionary.length;
		const findKey = ([keyHash, value]) => keyHash.equals(key);
		const keyValue = this.dictionary[index] && this.dictionary[index].find(findKey);

		if (keyValue) {
			keyValue[1] = value;
			return;
		}

		const newNode = new Node([key, value]);
		if (this.dictionary[index]) {
			this.dictionary[index].push(newNode);
			return;
		}
		this.dictionary[index] = new List(newNode);
	}

	//return needed value
	get(keyToGet) {
		this.validateKey(keyToGet);
		const index = keyToGet.hash % this.dictionary.length;
		const findKey = ([key, value]) => key.equals(keyToGet);
		const keyValue = this.dictionary[index] && this.dictionary[index].find(findKey);

		if (keyValue) {
			const [, value] = keyValue;
			return value;
		}
		return;
	}

	//check if keyToFind is present inside dictionary
	contains(keyToFind) {
		this.validateKey(keyToFind);
		const index = keyToFind.hash % this.dictionary.length;
		const findKey = ([key, value]) => key.equals(keyToFind);
		return Boolean(this.dictionary[index] && this.dictionary[index].find(findKey));
	}

	//Checks if dictionary is empty
	isEmpty() {
		return this.isDictionaryEmpty;
	}
	//returns keys
	getKeys() {
		const keys = [];
		this.dictionary.forEach((list) => {
			let iterator = list.head;
			keys.push(iterator.value[0]);
			while (iterator.next) {
				iterator = iterator.next;
				keys.push(iterator.value[0]);
			}
		});
		return keys;
	}

	//returns key-value
	getKeyValues() {
		const keyValues = [];
		this.dictionary.forEach((list) => {
			let iterator = list.head;
			keyValues.push(iterator.value);
			while (iterator.next) {
				iterator = iterator.next;
				keyValues.push(iterator.value);
			}
		});
		return keyValues;
	}
}

module.exports = Dictionary;
