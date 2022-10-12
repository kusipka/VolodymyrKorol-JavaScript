// CLASS: Hashable
//
// Author: Volodymyr Korol
//
// REMARKS: implement Linked list if there will be a collision in Dictionary
//
//-----------------------------------------

"use strict";
class Node {
	value;
	next;

	//create new Node
	constructor(value) {
		this.value = value;
	}
}

class List {
	head;

	//crete new linked list
	constructor(head) {
		this.head = head;
	}

	//put inside linked list
	push(node) {
		let iterator = this.head;
		while (iterator.next) {
			iterator = iterator.next;
		}
		iterator.next = node;
	}

	//find value inside linked list
	find(predicate) {
		let iterator = this.head;
		while (iterator.next && !predicate(iterator.value)) {
			iterator = iterator.next;
		}
		if (!predicate(iterator.value)) {
			return;
		}
		return iterator.value;
	}
}

module.exports = { Node, List };
