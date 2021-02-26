'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'numKeypadSolutions' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordlist
 *  2. STRING_ARRAY keypads
 
    Pseudocode - need to count frequency of each letter

    - Create empty validWords array
    
    - Create a wordLetterCounter array (that will hold an object for each word)
        - loop through every word
            - loop through every character in each word and build object
            that counts frequency of each letter
    
    - Create a keypadLetterCounter array (that will hold an object for each keypad)
        - Loop through every keypad
            - loop through every character in each keypad and build object that 
            counts freq of each letter (like we do for word list)
            - The first time through loop (if object is empty) 
                creates a special extra keyLetter key (that we'll use later to rule out words that don't have it)
    
    - Loop through keyPadLetterCounter
        - Loop through each word on wordLetterCounter
            - if keyLetter doesn't exist in word, delete word from wordLettercounter 
    
    
    - loop through wordLetterCounter array
        - create validWord counter-variable
        - for each word object compare to each keypadLetter Object
            - If letter doesn't exist break out of loop
            - Otherwise add one to validWordCounter 
        - Push validwordCounter value onto validWords Array
 
    - Return validWords
 */

function numKeypadSolutions(wordlist, keypads) {
    let validWords = []
    
    let wordLetterCounter = []
    let keypadLetterCounter = []
    
    for(let word of wordlist){
        for(let letter of word){
            wordLetterCounter[letter] ? wordLetterCounter[letter] +=1 : wordLetterCounter[letter] = 1
        }
    }
    
    for(let keypad of keypads){
        for(let letter of keypad){
            if (keypadLetterCounter.length === 0){
                keypadLetterCounter["keyletter"] = letter
            }
            keypadLetterCounter[letter] ? keypadLetterCounter[letter] +=1 : keypadLetterCounter[letter] = 1
        }
    }
    
    for (let key in keypadLetterCounter){
        for (let i = 0; i<wordLetterCounter.length; i++){
            
        }
    }
    
    
    return validWords
}
function main() {