var twoSum = function(nums, target) {
  let hash_table = {}
  
  for(let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]

    if(hash_table.hasOwnProperty(comp)) {
      return [hash_table[comp], i]
    }

    hash_table[nums[i]] = i
  }
};