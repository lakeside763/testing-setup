const findTwoSum = (nums, target) => {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];

    for(let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2]
      }
    }
  }
  return null;
}

const findTwoSum2 = (nums, target) => {
  const numsMap = {};
  for(let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
}

var twoSum = function(nums, target) {
  let numIndices = {};
  
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numIndices[complement] !== undefined) {
          return [numIndices[complement], i];
      }
      numIndices[nums[i]] = i;
  }
  
  return [];  // Just to adhere to function's expected return type, ideally shouldn't reach here.
};

const maxWaterContainer = (heights) => {
  let maxArea = 0;
  for (let h1 = 0; h1 < heights.length; h1++) {
    for (let h2 = h1 + 1; h2 < heights.length; h2++) {
      const minH = Math.min(heights[h1], heights[h2]);
      const width = h2 - h1;
      const area = minH * width;
      maxArea = maxArea > area ? maxArea : area;
    }
  }
  return maxArea;
}

const maxWaterContainer2 = (heights) => {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while(p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    console.log(p1, p2, 'p1, p2');

    if (heights[p1] <= heights[p2]) {
      console.log(heights[p1], 'p1')
      p1++;
    } else {
      console.log(heights[p2], 'p2');
      p2--;
    }
  }
  return maxArea;
}

const trappingRainWater = (heights) => {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p;
    let rightP = p;
    let maxLeft = 0;
    let maxRight = 0;

    while(leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while(rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
}

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  console.log(nums);
  return i + 1;
}

const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

const longestOfLongestSubstring = (s) => {
  let start = 0;
  let maxLength = 0;
  const chars = new Set();

  for(let end = 0; end < s.length; end++) {
    while(chars.has(s[end])) {
      chars.delete(s[start]);
      start++
    }
    chars.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;

  while(i < intervals.length - 1) {
    const [_, firstRight] = intervals[i];
    const [secondLeft, secondRight] = intervals[i + 1];

    if (firstRight > secondLeft) {
      intervals[i][1] = Math.max(firstRight, secondRight);
      intervals.splice(i + 1, 1);
    } else {
      i++
    }
  }
  return intervals;;
}

const merge2 = (intervals) => {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = merged[merged.length - 1];

    if (currentInterval[1] >= intervals[i][0]) {
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1])
    } else {
      merged.push(intervals[i])
    }
  }
  return merged;
}

const topKFrequent = (nums, k) => {
  const frequency = {};
  for (let num of nums) {
    // frequency[num] = frequency[nums] ? frequency[nums] + 1 : 1
    frequency[num] = (frequency[num] || 0) + 1;
  }
  return Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]).slice(0, 2)
}
 
const shortestWordDistance = (words, word1, word2) => {
  let index1 = -1;
  let index2 = -1
  let minDistance = words.length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      index1 = i;
    } else if(words[i] === word2) {
      index2 = i
    }

    if (index1 !== -1 && index2 !== -1) {
      minDistance = Math.min(minDistance, Math.abs(index1 - index2))
    }
  }
  return minDistance;
}

const groupAnagrams = function(strs) {
  const map = new Map();
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const ch of str) {
      count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    const key = count.join('#');  // Convert the count array to a string to use as a key.
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return [...map.values()];
};

const groupAnagrams2 = (strs) => {
  const map = new Map();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    console.log(sortedStr);

    if (!map.has(sortedStr)) {
      map.set(sortedStr, [])
    }
    map.get(sortedStr).push(str);
  }
  return [...map.values()]
}

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
};

const BFS = (graph, startNode) => {
  let visited = {}; // Stores nodes that are visited;
  let queue = []; // Queue of nodes to be processed;

  // Start with the initial node
  visited[startNode] = true;
  queue.push(startNode);

  while (queue.length > 0) {
    let node = queue.shift(); // Dequeue a vertex;
    console.log(node); // Process the node

    let neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbors = neighbors[i];

      if (!visited[neighbors]) {
        visited[neighbors] = true;
        queue.push(neighbors);
      }
    }
  }
}

const edgesToGraph = (edges) => {
  const graph = new Map();

  for (let edge of edges) {
    const [src, dest] = edge;

    if (!graph.has(src)) {
      graph.set(src, [])
    }
    graph.get(src).push(dest);

    if (!graph.has(dest)) {
      graph.set(dest, []);
    }
    graph.get(dest).push(src);
  }

  return graph;
}

const edgesToGraph2 = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [src, dest] = edge;

    if (!graph[src]) {
      graph[src] = []
    }
    graph[src].push(dest)

    if (!graph[dest]) {
      graph[dest] = []
    }
    graph[dest].push(src)
  }

  return graph;
}

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph2(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbors of graph[src]) {
    if (hasPath(graph, neighbors, dst, visited) === true) {
      return true;
    }
  }
  return false
}

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }

  return true;
}

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
}

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  } 

  return size;
}

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = edgesToGraph2(edges);
  const visited = {};
  const queue = [[nodeA, 0]];
  visited[nodeA] = true;

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;

    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push([neighbor, distance + 1])
      }
    }
  }

  return -1;
};

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreGrid(grid, r, c, visited) === true) {
        count += 1;
      };
    }
  }
  return count;
}

const exploreGrid = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid.length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === 'W') return false;

  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  exploreGrid(grid, r - 1, c, visited);
  exploreGrid(grid, r + 1, c, visited);
  exploreGrid(grid, r, c - 1, visited);
  exploreGrid(grid, r, c + 1, visited);

  return true;
}

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreIslandSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
}

const exploreIslandSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid.length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === 'W') return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreGrid(grid, r - 1, c, visited);
  size += exploreGrid(grid, r + 1, c, visited);
  size += exploreGrid(grid, r, c - 1, visited);
  size += exploreGrid(grid, r, c + 1, visited);

  return size;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
}

const depthFirstValues2 = () => {
  if (root === null) return [];
  const leftValues = depthFirstValues2(root.left);
  const rightValues = depthFirstValues2(root.right);
  depthFirstValues2(root.right);
  return [root.val, ...leftValues, ...rightValues]
}

const breadthFirstValues = () => {
  if (root === null) return [];

  const values = [];
  const queue = [root];

  while(queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return values;
}

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}

const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

function findPattern(numbers, pattern) {
  const n = numbers.length;
  const m = pattern.length;
  
  // Iterate through the numbers array
  for (let i = 0; i <= n - m; i++) {
    let matched = true;
    
    // Check if the pattern matches at the current position
    for (let j = 0; j < m; j++) {
      if (numbers[i + j] !== pattern[j]) {
        matched = false;
        break;
      }
    }
    
    // If the pattern matches, return the starting index
    if (matched) {
      return i;
    }
  }
  
  // Return -1 if the pattern is not found
  return -1;
}

const matrix = [
  [1, 0, 1, 5, 6],
  [3, 3, 0, 3, 3],
  [2, 9, 2, 1, 2],
  [0, 2, 4, 2, 0]
]

const arraysToIntersect = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
const commonElements = arraysToIntersect.reduce((acc, current) => acc.filter(value => current.includes(value)));
// console.log(commonElements); // Output: [3]

const commonElements2 = arraysToIntersect.reduce((acc, current, index) => {
  console.log(acc, current, index)
  return acc.filter((value) => {
    return  current.includes(value)
  })
});

const fibonacci = Array.from({ length: 10 }).reduce((acc, _, index) => {
  console.log(index)
  return acc.concat(index ? acc[index - 1] + acc[index - 2] :  index)
}, []);

const itemsToPartition = [1, 2, 3, 4, 5, 6, 7, 8];
const partitioned = itemsToPartition.reduce((acc, _, index) => {
  if (index % 3 === 0) {
    acc.push(itemsToPartition.slice(index, index + 3))
  }
  return acc;
}, [])



module.exports = {
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
  BFS,
  edgesToGraph,
  edgesToGraph2,
  undirectedPath,
  connectedComponentsCount,
  exploreSize,
  largestComponent,
  shortestPath,
  islandCount,
  minimumIsland,
  findPattern,
  commonElements,
  fibonacci
}