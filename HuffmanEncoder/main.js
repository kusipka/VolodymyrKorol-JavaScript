//-----------------------------------------
// NAME		: Volodymyr Korol
// get inputFile as a parameter and run whole programm by running huffmanEncoder.encode();
//
//
//-----------------------------------------

const HuffmanEncoder = require("./HuffmanEncoder.js");

if (!process.argv[2]) {
	throw new Error("Provide the correct path to input file as 3rd argument.");
}
const huffmanEncoder = new HuffmanEncoder(process.argv[2]);
huffmanEncoder.encode();
