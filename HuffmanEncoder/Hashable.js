// CLASS: Hasable
//
// Author: Volodymyr Korol
//
// REMARKS: Implement Hashable, IntHash and StringHash
//
//-----------------------------------------
const prime = 17;

//Hashable class as parent class for IntHash and StringHash
class Hashable {
	value;
	hash;

	hashVal() {}
	equals() {}

	static isHashable(object) {
		return (
			object.hashVal &&
			typeof object.hashVal === "function" &&
			object.hashVal &&
			typeof object.equals === "function"
		);
	}
}

//Inthash child of Hashable
class IntHash extends Hashable {
	constructor(value) {
		super();
		//check for number
		if (typeof value !== "number") {
			throw new Error("Expected: NUMBER Got: " + typeof value);
		}
		this.value = value;
		this.hashVal();
	}

	//if its is a number just leave it as a number
	hashVal() {
		this.hash = this.value;
	}
	equals(hashable) {
		return this.hash === hashable.hash;
	}
}

//StringHash child of Hashsble
class StringHash extends Hashable {
	constructor(value) {
		super();
		//check for String
		if (typeof value !== "string") {
			throw new Error("Expected: STRING Got: " + typeof value);
		}
		this.value = value;
		this.hashVal();
	}

	//Returns hashValue for current Char or Strings
	hashVal() {
		let hash = 0;
		for (let i = 0; i < this.value.length; i++) {
			hash += this.value.charCodeAt(i) * Math.pow(prime, this.value.length - 1 - i);
		}
		this.hash = hash;
	}
	equals(hashable) {
		return this.hash === hashable.hash;
	}
}

module.exports = { Hashable, IntHash, StringHash };
