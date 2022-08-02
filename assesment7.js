console.log("hello world");
/*Write a function that takes in an array of numbers. 
The function should return True if any two numbers in list sum to 0,
 and false otherwise.*/
//let addToZero = ([1, 2, 3, -2]);
let addToZero = ([1, 2, 3]);

// For example:
function sumOfZero (array) {
    let equalToZero = false;
    for(i=0; i<array.length; i++){
        for(j=1; j<array.length; j++){
            if(array[i] + array[j] === 0){
                equalToZero = true;
            }
        }
    }   
    return console.log("1. Equal to Zero?:", equalToZero);
}

sumOfZero(addToZero);

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False




// -> True

/*Write a function that takes in a single word,
 as a string. It should return True if that word
  contains only unique characters. Return False otherwise.*/

// //For example:

// hasUniqueChars("Monday");
// // -> True

let hasUniqueChars = ("Moonday");
// // -> False
function uniqueChar (word) {
    let duplicateFound = false;
    let uniqString = "";
    splitString = word.toLowerCase()//.split("");
    for ( i=0; i<splitString.length; i++){
        if(uniqString.includes(word[i])){
            //console.log(splitString)
            duplicateFound = true;
        }
        else{
            uniqString += word[i];
        }
    }
    console.log("2. Duplicate letter found?:", duplicateFound)
}

uniqueChar(hasUniqueChars);

/*A pangram is a sentence that contains all the letters of the
 English alphabet at least once, like “The quick brown fox jumps
  over the lazy dog.”*/

/*Write a function to check a sentence to see if it is a pangram or not.

For example:*/


let isPangram = ("The quick brown fox jumps over the lazy dog!");
// -> True
//let isPangram = ("I like cats, but not mice");
// -> False

function checkForPangram (isPangram){
let panBool = true;
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let strArr = isPangram.toLowerCase();

    for(i=0; i<alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0){
            console.log
            panBool = false;
        }
    }
    console.log("3. Is a Pangram?:", panBool)
}
checkForPangram(isPangram)

/*Write a function, find_longest_word, 
that takes a list of words and
returns the length of the longest one.*/

let findLongestWord = (["hi", "hello", "garcia"]);
// -> 5

function longestWord (findLongestWord) {
    let bigWord = 0;
    for(i=0; i<findLongestWord.length; i++){
        if(findLongestWord[i].length > bigWord){
            bigWord = findLongestWord[i].length
        }
    }
    console.log("4. The longest word in this array is:", bigWord);
 }

 longestWord(findLongestWord);
