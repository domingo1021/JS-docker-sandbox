require('dotenv').config
const { twoSum }  = require(process.env.TOWSUMFILE);

//Test two sum
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([2, 7, 11, 15], 26)); // [2,3]
console.log(twoSum([1, 1, 1, 1], 2)); //[0, 1]
console.log(twoSum([-1], 10)); // -1