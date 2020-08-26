var twoSum = function (nums, target) {
  let numberIndex = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;

    if (numberIndex[complement] !== undefined) {
      result[0] = numberIndex[complement];
      result[1] = i;

      return result;
    }

    numberIndex[num] = i;
  }

  return result;
};

// my first attempt.  it works but has N(O)^2
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length-1; i++){
//         for(let j= i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target) return [i, j];
//         }
//     }

// };
