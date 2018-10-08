var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let ind = i + 1; ind < nums.length; ind++) {
            if (nums[i] + nums[ind] == target) {
                return [i, ind]
            }
        }
    }
};