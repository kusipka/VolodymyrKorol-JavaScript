I am Volodymyr Korol

This is HuffmanEncoder. 
The purpose of this project is to convert text to binary code using multiple data structures. 
The project creates HashMap and every unique symbol in the text is placed in HashMap(in order to avoid collisions, it creates LinkedList)
Calculate how frequently each symbol appears in the text(called weight).
Place each symbol from the HashMap to the BinaryTree(by its weight).
Calculate binary code for each symbol by BinaryTree(left leaf - 1, right leaf - 0).
Write converted text to txt file.


Steps to run:
  1.Install Node.js 
  2.In terminal navigate to project directory.
  3.Execute:  node ./main.js <full path to .txt input file>
<->Example: node "./Project/main.js" "C:/Users/user1/Desktop/js/Project/data/hamlet.txt"

   To run UnitTests, run Dictionary.UnitTests.js
<->Example: node "./Project/Dictionary.UnitTests.js"

   You can also try running script on "test.txt". It has the same resulting binary codes as in assignment instructions example.
<->Example:  node "./Project/main.js" "C:/Users/user1/Desktop/js/data/test.txt"  
   Example in pdf instructions: TOBEORNOTTOBETHATISTHEBANANA

Script outputs following values to help with debug: 
 -- Character Weight
 -- Order of combining subtrees (When "/n" and "/r" are added output starts looking weird but its okay)
 -- Resulting binary codes
