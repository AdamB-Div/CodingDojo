/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a1";

const str4 = "bbcc";
const expected4 = "b2c2";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */


function encodeStr(str) {
    var count = 1
    var decode = ""

    if(str.length === 0){
        return decode
    }
    for(var i = 0; i < str.length + 1; i++){
        if(i === 0){
            decode = str[i]

            
        }else if(i === str.length){
            decode += count;
        }else if(str[i-1] === str[i]){
            count++;
        }else if(str[i - 1] !== str[i]){
            decode += count;
            decode += str[i]
            count = 1;
        }
    }
    return decode;
}

console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));