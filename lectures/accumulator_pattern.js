// Accumulator Pattern
const rolls = [4, 5, 6, 1, 1, 2, 4, 6, 4, 5, 3, 1, 5];

function calculateTotal(rolls) {
    // Create your accumulator variable and initialize it with the datatype you want to use
    let total = 0;

    for (let i = 0; i < rolls.length; i++) {
        // Accumulation happens here
        total += rolls[i];
    }

    return total;
    // for (const roll of rolls) {
        // total += roll
    // }
}

function minimumValue(rolls) {
    // Use number datatype to initialize accumulator
    let minimum = INFINITY; // If you have a dataset where trying to find the min use 'INFINITY'; if you have a dataset includes negative numbers use '-INFINITY'

    for (const roll of rolls) {
        if (roll < minimum) {
            // If our element makes our conditional true then update the accumulator
            minimun = roll;
        }
    }

    return minimum;
}

function listPlayers(names) {
    // initialize our accumulator as a string
    let playersNames = '';
    
    for (const name of names) {
        playersNames += name + ', ';
    }

    return playersNames
}

const players = ["Sebastian", "Kai", "Saanvi"];
// console.log(listPlayers(players)); //> "Sebastian, Kai, Saanvi,"

function hasSix(rolls) {
    // have to initialize accumulator as a boolean
    let isSix = false;

    for (const roll of rolls) {
        if (roll === 6) {
            isSix = true;
        }
    }

    return isSix;
}

function addBonusToAllRolls(rolls) {
    // We want to update each element and return a new a array with those updated elements
    let bonusArr = [];

    for (const roll of rolls) {
        // Start with accumulator
        bonusArr.push(roll + 2)
    }

    return bonusArr;
}

// 
// const rolls = [4, 5, 6, 1, 1, 2, 4, 6, 4, 5, 3, 1, 5];

// write a function that takes in an array of dice rolls. Return an object that counts how many times a number has been rolled.

function countDiceRolls(rolls) {
    // Want to return an object, so we initialize accumulator as an object
    const rollCount = {
        // we create key value pairs (initializing) to zero
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    // for (let i = 0; i < rolls.length; i++) {
    //     // start with the accumulator
    //     rollCount[rolls[i]]++;
    // } 

    for (const roll of rolls) {
        rollCount[roll]++;
    }

    return rollCount

}

const nums = [1,5,3,4,4,3,2,1,1,2,3,7,8,9,9,9,8,6,5,5,5,5,5,3,2,1,1,10,45,67,3,23,4,16,75,42]
// **** You NEED! a key when using an object and the data that is inside of it
function countNums(numsArr) {
    // Creation
    const numCountObj = {};
    // Iteration
    // for (const nums of numsArr) {
    //     if (!numCountObj[nums]) {
    //         numCountObj[nums] = 1;
    //     } else {
    //         numCountObj[nums]++;
    //     }
    // }
    for (let i = 0; i < numsArr.length; i++) {
       if (!numCountObj[numsArr[i]]) {
            numCountObj[numsArr[i]] = 1;
        } else {
            numCountObj[numsArr[i]]++;
        } 
    }
    // Return
    return numCountObj;
}
console.log(countNums(nums))
