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








