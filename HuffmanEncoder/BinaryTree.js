// CLASS: BinaryTree and Node
//
// Author: Volodymyr Korol
//
// REMARKS: Implement BinaryTree and methods related to it
//
//-----------------------------------------

//Nodes inside tree
class Node {
	value;
	weight;

	rightNode;
	leftNode;
	//set value(character) and weight(how often character appears)
	constructor(weight, value) {
		this.value = value;
		this.weight = weight;
	}
}

//Set tree of nodes
class Tree {
	root;
	constructor(root) {
		this.root = root;
	}

	//cobine "this" tree and "tree" tree
	combineTree(tree) {
		console.log('Combining "' + this.root.value + '" and "' + tree.root.value + '"');
		const newRoot = new Node(
			this.root.weight + tree.root.weight,
			this.root.value + tree.root.value
		);
		if (this.compareTo(tree) >= 0) {
			newRoot.leftNode = this.root;
			newRoot.rightNode = tree.root;
		} else {
			newRoot.leftNode = tree.root;
			newRoot.rightNode = this.root;
		}
		this.root = newRoot;
	}

	//compare 2 trees by weights
	compareTo(tree) {
		if (tree.root.weight < this.root.weight) return 1;

		if (tree.root.weight > this.root.weight) return -1;
		const thisTreeMinValue = this.findMinValue();
		const thatTreeMinValue = tree.findMinValue();
		if (thisTreeMinValue > thatTreeMinValue) {
			return 1;
		}
		if (thisTreeMinValue < thatTreeMinValue) {
			return -1;
		}
		return 0;
	}

	//searches in all leaves for min val
	findMinValue() {
		let minNode = this.root;
		const traverse = (node) => {
			if (node.value < minNode.value) {
				minNode = node;
			}
			if (node.leftNode) {
				traverse(node.leftNode);
			}
			if (node.rightNode) {
				traverse(node.rightNode);
			}
		};
		traverse(minNode);
		return minNode.value;
	}

	//get the path to sertain leaf to get 0,1 set of numbers
	getBinaryPath(nodeValue) {
		const traverse = (node, path = "") => {
			if (node.value === nodeValue) {
				return path;
			}
			if (node.leftNode) {
				const foundPath = traverse(node.leftNode, path + "1");
				if (foundPath) {
					return foundPath;
				}
			}
			if (node.rightNode) {
				const foundPath = traverse(node.rightNode, path + "0");
				if (foundPath) {
					return foundPath;
				}
			}
		};
		return traverse(this.root);
	}
}

module.exports = { Node, Tree };
