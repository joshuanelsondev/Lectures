/* 
Given a string of words containing capitalized words, return a new string where each word that's capitalized is separated by a comma.
@params {string} = string with capitalized words inside
@returns {string} = string with the capitalized words separated

examples:
'WelcomeToPursuitInQueensNewYork' => 'Welcome, To, Pursuit, In, Queens, New, York';

'TheCowJumpedOverTheMoon' => 'The, Cow, Jumped, Over, The, Moon'
*/

function splitWithCommasAndSpacesAtCapitalLetter(str){
    let words = str.match(/[A-Z][a-z]+/g);
    return words.join(', ');
}

function properConcatonate(str) {
    let concatonatedArr = str.split('');

    for(let i in concatonatedArr) {
        if(concatonatedArr[i]=== concatonatedArr[i].toUpperCase()) {
            concatonatedArr[i-1] += ', '
        }
    }
    return concatonatedArr.join('');
}

// console.log(properConcatonate('WelcomeToPursuitInQueensNewYork'))

// function separateCapitalizedWordsWithComma(str) {
//   let words = str[0];

//   for (let idx = 1; idx < str.length; idx++) {
//     const char = str[idx];

//     if (char.toUpperCase() == char) {
//       words += ", ";
//     }

//     words += char;
//   }

//   return words;
// }

// const capitalSentence = (str) => {
//     let strArr = str.split(/(?=[A-Z])/);
//     return strArr.join(", ")
// }

// function separateCapitalizedWords(str) {
//     let result = str[0];
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             result += ', ';
//         }
//         result += str[i];
//     }
//     return result;
// }


// const splitSentenceOnCaps = (str) => {
//     let result = ""

//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === str[i].toUpperCase()) {
//             if(i == 0) {
//                 result += str[i]
//                 continue;
//             }else {
//                 result += ", "
//             }
//         }

//         result += str[i]
//     }

//     return result;
// }

// let capitalizedCommas = function (str) {
//    return str.match(/[A-Z][a-z]+/g).join('\, ');
// }

// function seperate(noSpaces){
//     let wordCount = 0;
//     let wordArray = [];
//     for (let i = 0; i < noSpaces.length; i++){
//         if (noSpaces[i] == noSpaces[i].toUpperCase()){
//             wordCount++;
//         }
//     }

//     for (let i = 0; i < wordCount; i++)
//         wordArray.push("");

//     let currentWord = wordCount;

//     for (let i = 0; i < noSpaces.length; i++){
//         wordArray[wordCount-currentWord] += noSpaces[i];
//         if (noSpaces[i+1] && noSpaces[i+1] == noSpaces[i+1].toUpperCase()){
//             currentWord--;
//         }
//     }
//     return wordArray.join(",");
// }

// let capWords = "WelcomeToPursuitInQueensNewYork";
// let splitWords = capWords.split(/(?=[A-Z])/).join(" ");
// console.log(splitWords);


// function convertStr(str) {
// let newStr = '';

// for(let i = 0; i < str.length; i++) {
//   if(str[i] === str[i].toUpperCase()) {
//     newStr.push(str[i] + ', ' )
//   } else { newStr.push(str[i] + '')

//   }
//   return newStr;
// }


// }



function maximumSubarraySum(nums, k) {
    if (nums.length < k) return 0;
    let maxSum = 0;
    let tempSum = 0;
    let duplicates = 0;
    let numFrequency = {};
    
    for (let i = 0; i< k; i++) {
;
        if (numFrequency[nums[i]]) {
            duplicates++;
            numFrequency[nums[i]]++;
        } else {
            numFrequency[nums[i]] = 1;
        }

        tempSum += nums[i]
    }

    if (duplicates === 0) {
        maxSum = tempSum;
    }

    let pointer1 = 0;
    let pointer2 = k;


    while (pointer2 < nums.length) {

        if (numFrequency[nums[pointer2]]) {
            duplicates++
            numFrequency[nums[pointer2]]++
        } else {
            numFrequency[nums[pointer2]] = 1;
        }

        tempSum = tempSum - nums[pointer1] + nums[pointer2];
        numFrequency[nums[pointer1]]--;

        if (numFrequency[nums[pointer1]] > 0) {
            duplicates--;
        }

        if (duplicates === 0) {
            maxSum = Math.max(tempSum, maxSum); 
        }

        pointer1++;
        pointer2++
    }

    return maxSum;
};


// console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3))
// console.log(maximumSubarraySum([4,4,4], 3))
// console.log(maximumSubarraySum([9,9,9,1,2,3], 3))
// console.log(maximumSubarraySum([9,9], 3))
// console.log(maximumSubarraySum([], 3))
// console.log(maximumSubarraySum([1,2,3,3,3,3,4,5,6], 3))
// console.log(maximumSubarraySum([1,2,2], 2))
// console.log(maximumSubarraySum([5,3,3,1,1], 3))
// console.log(maximumSubarraySum([3,3,3,1,2], 4))



