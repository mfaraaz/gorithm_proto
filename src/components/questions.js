const questions=[
  {
    "id":1,
    "question": "Subarray with given sum",
    "description": "Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.",
    "input":"N = 5, S = 12 A[] = {1,2,3,7,5}",
    "output":"2 4",
    "explaination":"The sum of elements from 2nd position to 4th position is 12.",
  }, {
    "id":2,
    "question": "Kadane's Algorithm ",
    "description": "Given an array arr of N integers. Find the contiguous sub-array with maximum sum.",
    "input":"N = 5 arr[] = {1,2,3,-2,5}",
    "output":"9",
    "explaination":"Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.",
  }, {
    "id":3,
    "question": "Count the triplets",
    "description": "Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.",
    "input":"N = 4 arr[] = {1, 5, 3, 2}",
    "output":"2",
    "explaination":"There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5 ",
  }, {
    "id":4,
    "question": "Missing number in array",
    "description": "Given an array of size N-1 such that it can only contain distinct integers in the range of 1 to N. Find the missing element.",
    "input":"N = 5 A[] = {1,2,3,5}",
    "output":"4",
    "explaination":"",
  },{
    "id":5,
    "question": "Merge two sorted arrays",
    "description": "Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements",
    "input":"n = 4, arr1[] = [1 3 5 7] m = 5, arr2[] = [0 2 6 8 9]",
    "output":"arr1[] = [0 1 2 3] arr2[] = [5 6 7 8 9]",
    "explaination":"After merging the two non-decreasing arrays, we get, 0 1 2 3 5 6 7 8 9.",
  },
];

export default questions;
