const numArr = [1,4,3,5,6,2,3,8,9,5,6,1]

function maxSubArraySum(nums, size) {
    if (size < 0 || size > nums.length) return null;

    let currSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        // Update currSum with the next num element
        currSum += nums[i];
        // Once i is equal to the size begin updating the maxSum and currSum values
        if (i >= size - 1) {
            // Update maxSum to be the value of whichever is greater between maxSum and currSum
            maxSum = Math.max(currSum, maxSum);
            // if (currSum > maxSum) {
            //     maxSum = currSum;
            // }
            // Update currSum by subtracting the first element in the sliding window
            currSum -= nums[i - (size - 1)]
        }
    }

    return maxSum;
}


function maxSubArraySum(nums, subArrLength) {

    let maxSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        let currentSum = 0;
        let tempArr = nums.slice(i, subArrLength + i)
        for (let j = 0; j < tempArr.length; j++) {
            currentSum += tempArr[j];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}





function maxSubArraySum(nums, size) {
    if (nums.subArrLength < size) return null;
    let maxSum = 0;
    // Sum the first n elements to establish the initial sum
    for (let i = 0; i < size; i++) {
        maxSum += nums[i];
    }

    let pointer1 = 0;
    let pointer2 = size;
    let tempSum = maxSum;

// Continue until pointer 2 reaches the end of the nums array
    while (pointer2 < nums.length) {
        // Update tempSum by subtracting the first element and adding the new element to the right 
        tempSum = tempSum - nums[pointer1] + nums[pointer2]
        // Update the maxSum if tempSum is greater than maxSum
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        // Slide window along the array by updating the pointers by 1
        pointer1++;
        pointer2++
    }

    return maxSum
}

console.log(maxSubArraySum(numArr, 3))

/*
 Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/
function minSubArrayLen(target, nums) {
    let prevTotal = 0;
    let lowestCount = 0;

    for (let i = 0; i < nums.length; i++) {
        prevTotal += nums[i];
        lowestCount++;

        if (prevTotal >= target) {
            break;
        }
    }
   
    if (prevTotal < target) {
        return 0;
    }    

    for (let j = 1; j < nums.length; j++) {
        const currentTotal = prevTotal - nums[j - 1];
        if (currentTotal >= target) {
            lowestCount--;
            prevTotal = currentTotal;
        } else {
            prevTotal = currentTotal + nums[j + lowestCount - 1]
        }
    }

    return lowestCount;
}

// console.log(minSubArrayLen(7, numArr))

