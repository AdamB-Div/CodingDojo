/* 
String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */

function decodeStr(str){
        var n = str.length;
        for (i = 0; i < n; i++){
            var count = 1;
            while (i < n - 1 && str[i] == str[i+1]){
                count++;
                i++;
            }
        console.log(str[i]);
        console.log(count);
        }
    }

decodeStr(str1);