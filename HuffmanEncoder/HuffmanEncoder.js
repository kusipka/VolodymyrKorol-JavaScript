// CLASS: HuffmanEncoder
//
// Author: Volodymyr Korol
//
// REMARKS: read input file and write output file and run Huffman.encode();
//
//-----------------------------------------
const fs = require("fs");
const Huffman = require("./Huffman.js");

class HuffmanEncoder {
	constructor(path) {
		this.path = path;
	}
	//read input file
	readFile() {
		return fs.readFileSync(this.path, "utf-8");
	}
	//write outputfile
	writeFile(content) {
		return fs.writeFileSync(this.path + ".huff", content);
	}
	//run everything
	encode() {
		const content = this.readFile();
		const encodedContent = Huffman.encode(content);
		this.writeFile(encodedContent);
	}
}

module.exports = HuffmanEncoder;
