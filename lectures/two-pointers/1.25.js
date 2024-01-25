/** 
Problem 1 
Implement a function that checks if a given array of integers is sorted in non-decreasing order. Use the two pointers approach to solve this problem efficiently.
 * @param {number[]} nums
 * @returns {boolean}

*/
function isSorted(nums) {

}

// Example
console.log(isSorted([1, 2, 3, 4, 5]));  // Should return true
console.log(isSorted([5, 3, 7, 8, 10]));  // Should return false





/**  
Problem 2 
Given a sorted array of distinct integers and a target sum, find a pair of elements in the array that add up to the target sum. Implement the solution using the two pointers technique.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumPair(nums, target) {

}

// Example
console.log(twoSumPair([1, 2, 3, 4, 5], 9));  // Should return [4, 5]
console.log(twoSumPair([-2, 0, 2, 5, 7], 5));  // Should return [-2, 7]




/** 
Problem 3 
Given an array of integers, find all unique triplets that sum up to a target value. Ensure that the triplets are in non-decreasing order. Implement the solution using the two pointers approach.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
function threeSum(nums, target) {
    // Implementation
}

// Example
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));  // Should return [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0], 0));  // Should return [[0, 0, 0]]



/**  
Problem 4 
Implement the "Container With Most Water" problem. Given an array representing the height of bars, find two bars that together with the x-axis forms a container that can hold the most water. Use the two pointers algorithm to optimize the solution.
 * @param {number[]} height
 * @returns {number}
 */
function maxArea(height) {
    // Implementation
}

// Example
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // Should return 49


/**  
Problem 5 
Given two sorted arrays, find the median element. The overall run time complexity should be O(log(min(m,n))), where m and n are the lengths of the two arrays. Utilize the two pointers algorithm and binary search to achieve this efficiency.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}c
 */

function findMedianSortedArrays(nums1, nums2) {
    // Implementation
}

// Example
console.log(findMedianSortedArrays([1, 3], [2]));  // Should return 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4]));  // Should return 2.5
