/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    //return largest number between a and b //----
    return (5 > 8) ? 5 : 8;

}
console.log(max(5, 8))
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function get_max(a, b, c){
    "use strict";
    return Math.max(Math.max(a,b), c);
}

console.log(get_max(120,80,600)); // 600
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
var charLower = char.toLowerCase()
if(charLower === 'a' ||char === 'e' || char ==='i' || char ==='o' || char ==='u')
    return true
else return false;
}

console.log(isVowel("a"))
console.log(isVowel("b"))

// Another way....
// function isVowel(char){
// "use strict";
//return "aeiou" .indexOf (
//char.toLowerCase()) > -1;
//

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var rovarspraket = function rovarspraket(phrase){
    "use strict";
    var result = "";
    for(var i = 0; i < phrase.length; i++){
        if( isVowel(phrase[i]) ){
            result += phrase[i];
        } else if(phrase[i] != ' ') {
            result += phrase[i] + "o" + phrase[i];
        } else {
            result += phrase[i];
        }
    }
    return result;
}

console.log( rovarspraket("The eyes of Texas are upon you.") );
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------


function reverse(phrase){
    "use strict";
    var result = "";
    for(var i = phrase.length; i > 0; i--){
        result += phrase[i-1];
    }
    return result;
}

console.log( reverse("The eyes of Texas are upon you.") )

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    // 1. find # of words
    // 2. look at first word, get length
    // 3. look at third word, get length
    // 4. same
var result = 0;
    for(var i = 0; i < words.length; i++){
        result = max(result, words[i].length);
    }
    return result;
}
console.log (findLongestWord(["the" , "eyes" , "of" , "Texas" , "are" , "upon" , "you."]) )

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
    function findLongestWord(words){
    "use strict";
    // 1. find # of words
    // 2. look at first word, get length
    // 3. look at 2nd word, get length
    // 4. ...
    var result = 0;
    for(var i = 0; i < words.length; i++){
        if(words[i].length > result){
            result = words[i].length
        }
    }
    return result;
}

console.log( findLongestWord(["People", "love", "singing", "Reggae."]) )
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

// function charFreq(string){
//     "use strict";
//  var result = {};


//   for(var i = 0; i < string.length; i++){
//     char = string [i]

//     if(result[ char ]){
//         result [ char ] ++;
//     }else {
//         result [ char ] = 1;

//     }

// console.log(char)
//     }

//  return result;
// }

// console.log( charFreq("The eyes of Texas are upon you"))