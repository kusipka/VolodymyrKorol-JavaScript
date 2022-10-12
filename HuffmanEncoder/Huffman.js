// CLASS: Huffman
//
// Author: Volodymyr Korol
//
// REMARKS: Class that runs whole programm
//
//-----------------------------------------

const Dictionary = require("./Dictionary.js");
const { StringHash } = require("./Hashable.js");
const { Tree, Node } = require("./BinaryTree.js");

class Huffman {
	//run everything
	static encode(content) {
		const dictionary = Huffman.formDictionary(content);
		const tree = Huffman.buildTree(dictionary);
		const binDictionary = Huffman.formBinaryDictionary(dictionary, tree);
		const pairs = binDictionary
			.getKeyValues()
			.map(([key, code]) => [key.value, code])
			.sort(function ([, a], [, b]) {
				if (a > b) return 1;
				if (a < b) return -1;
				return 0;
			});
		console.log("____________________________");
		console.log("Binary Dictionary:");
		console.log("Symbol | Code");
		console.log(pairs);
		const codes = [];
		for (let i in content) {
			codes.push(binDictionary.get(new StringHash(content[i])));
		}
		return codes.join(" ");
	}

	//create new Dictionary and load chars and values from input file to this dictionary
	static formDictionary(content) {
		const dictionary = new Dictionary(100);

		for (let i in content) {
			const newKey = new StringHash(content[i]);
			const repeats = dictionary.get(newKey) || 0;
			dictionary.put(newKey, repeats + 1);
		}
		dictionary.getKeys().forEach((key) => {
			const repeats = dictionary.get(key);
			dictionary.put(key, repeats / content.length);
		});
		return dictionary;
	}

	//print dictionary with keys and weights and create trees from this dictionary
	static buildTree(dictionary) {
		const pairs = dictionary
			.getKeyValues()
			.map(([key, weight]) => [key.value, weight])
			.sort(function ([, a], [, b]) {
				if (a > b) return 1;
				if (a < b) return -1;
				return 0;
			});

		console.log("Dictionary:");
		console.log("Symbol | Weight");
		console.log(pairs);
		console.log("____________________________");

		const trees = pairs.map(([key, weight]) => new Tree(new Node(weight, key)));
		if (!trees.length) {
			throw new Error("Empty Dictionary.");
		}
		if (trees.length === 1) {
			return trees[0];
		}
		while (trees.length > 1) {
			const sortedTrees = trees.sort((a, b) => a.compareTo(b));
			const [minTree, secMinTree] = trees.splice(0, 2);
			minTree.combineTree(secMinTree);
			trees.unshift(minTree);
		}
		return trees[0];
	}

	//create new dictionary with character-binaryCode pairs
	static formBinaryDictionary(dictionary, tree) {
		const binDictionary = new Dictionary(100);

		dictionary.getKeys().forEach((key) => {
			binDictionary.put(key, tree.getBinaryPath(key.value));
		});
		return binDictionary;
	}
}

module.exports = Huffman;
