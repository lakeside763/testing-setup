const { 
  findTwoSum,
  findTwoSum2,
  maxWaterContainer,
  maxWaterContainer2,
  trappingRainWater,
  removeDuplicates,
  reverseArray,
  longestOfLongestSubstring,
  merge,
  merge2,
  topKFrequent,
  shortestWordDistance,
  groupAnagrams,
  groupAnagrams2,
  edgesToGraph,
  edgesToGraph2,
  undirectedPath,
  connectedComponentsCount,
  largestComponent,
  shortestPath,
  islandCount,
  findPattern,
  commonElements,
  fibonacci
} = require('./algo_1');
const { createCounter, fareCalculator } = require('./closure');
const { getTopScoredDriverAmongExperienced, drivers } = require('./array-list.js');

// console.log(findTwoSum2([1, 3, 7, 8, 2], 11));
// console.log(findTwoSum([1, 3, 7, 8, 2], 11));
// console.log(maxWaterContainer([7, 1, 2, 3, 9]));
// console.log(maxWaterContainer2([1, 8, 9, 2, 3, 4]));
// console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
// console.log(longestOfLongestSubstring('abcabcbb'));
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge2([[1,3],[2,6],[8,10],[15,18]]));
// console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(shortestWordDistance(
//   ["practice", "makes", "perfect", "coding", "makes"],
//   "makes",
//   "coding"
// ));
// console.log(groupAnagrams(["eat","tea","tan","ant","bat"]));
// console.log(groupAnagrams2(["eat","tea","tan","ant","bat"]));
const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l'], ['o', 'n']];
// console.log(edgesToGraph2(edges));
// console.log(undirectedPath(edges, 'k', 'm'));
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}
// console.log(connectedComponentsCount(graph));
// console.log(largestComponent(graph));
const edges1 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]
// console.log(shortestPath(edges1, 'w', 'z'));
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
];
// console.log(islandCount(grid))
// console.log(findPattern([4, 1, 3, 4, 4, 5, 1], [1, 0, -1]))

// Revome Duplicates...
/* let nums = [1, 1, 2, 2, 3, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k)
console.log(nums.slice(0, k)); */

// Output: 7 
// (Buy on day 2 (price = 1) and sell on day 3 (price = 5), 
// profit = 5-1 = 4. Buy on day 4 (price = 3) and sell on day 5 (price = 6), 
// profit = 6-3 = 3. Total profit is 4 + 3 = 7.)

//console.log('counter........')....
/* counter = createCounter();
console.log(counter.getCount())
console.log(counter.increment())
console.log(counter.increment())
 */

// console.log('fare calculator........')...;
/* const economyRide = fareCalculator(5, 1.5);
const fare1 = economyRide(10, 0.10)
console.log(fare1); */

// Reverse Array
// console.log(reverseArray([1, 2, 3, 4]));


// Reverse Array Example 2
// console.log(getTopScoredDriverAmongExperienced(drivers, 3));

// console.log(commonElements);
console.log(fibonacci);



