function numIdenticalPairs(nums) {
    // Initialize a Map to keep track of the count of each number
    const countMap = new Map();
    let goodPairs = 0;

    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        
        // If the number is already in the Map
        if (countMap.has(num)) {
            // Increment the count of good pairs by the count of this number
            goodPairs = goodPairs + countMap.get(num);
            // Increase the count of this number
            countMap.set(num, countMap.get(num) + 1);
        } else {
            // If the number is not in the Map, add it with a count of 1
            countMap.set(num, 1);
        }
        
    }
    console.log(countMap.has(2))
    
    return goodPairs;
}

// Example Usage
const nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));  // Output: 4


