// /* String: Reverse
// Given a string,
// return a new string that is the given string reversed
// */

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// const str3 = "hello";
// const expected3 = "olleh";

// const str4 = "";
// const expected4 = "";

// /**
// Reverses the given str.
// - Time: O(?).
// - Space: O(?).
// @param {string} str String to be reversed.
// @returns {string} The given str reversed.
// */
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString(str1));
// console.log(reverseString(str2));
// console.log(reverseString(str3));
// console.log(reverseString(str4));

// ==========================================================================================

/* 
Given an arr and a separator string, output a string of every item in the array separated by the separator.
No trailing separator at the end
Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3, 45, 23, 1, 23];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

/**
Converts the given array into a string of items separated by the given separator.
- Time: O(?).
- Space: O(?).
@param {Array<string|number|boolean>} arr The items to be joined as a string.
@param {string} separator To separate each item of the given arr.
@returns {string} The given array items as a string separated by the given separator.
*/
function join(arr, separator) {
    new_str = "";
    for(i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            new_str += ([arr[i]]);
        }else{
            new_str += ([arr[i] + [separator]]);
        }
    }
    return new_str;
}

console.log(join(arr1, separator1));