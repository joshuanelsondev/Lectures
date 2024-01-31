/**
 * @param {number[]} nums
 * @returns {boolean}
 */
function isSorted(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}


/* Solution Explanation: Iterate through the array and compare each element with its previous one. If at any point an element is smaller than the previous one, the array is not sorted. */




/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumPair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}


/* Solution Explanation: Sort the array and use three pointers to iterate through the array efficiently. Adjust pointers based on the sum of the current triplet until all possible triplets are found.
 */




/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
function threeSum(nums, target) {
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                             
                // Avoid duplicates
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}



/* Solution Explanation: Sort the array and use three pointers to iterate through the array efficiently. Adjust pointers based on the sum of the current triplet until all possible triplets are found.
*/


/**
 * @param {number[]} height
 * @returns {number}
 */
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxArea = Math.max(maxArea, h * w);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}


/* Solution Explanation: Use two pointers, one at the beginning and one at the end of the array. Adjust the pointers based on the height of the lines to maximize the container area. */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        const mid = length / 2;
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
}


/* Solution Explanation: Merge the arrays, sort them, and find the median. The challenge is to achieve efficient time complexity (O(log(min(m,n)))) using the two pointers algorithm and binary search.
 */