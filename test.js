// Ctrl + Alt + N to run

var twoSum = function (nums, target) {
    var indexOne = -1;
    var indexTwo = -1;
    var balance = -1;

    for (var n = 0; n < nums.length; n++) {
        balance = target - nums[n];
        indexOne = nums.indexOf(nums[n]);

        for (var m = (n + 1); m < nums.length; m++) {
            if (nums[m] == balance) {
                indexTwo = nums.indexOf(nums[m]);
                n = nums.length;
                console.log('this is m = ' + nums[m]);
                console.log(nums.indexOf(nums[m]));
            }
        }
    }

    var indicies = [];
    indicies.push(indexOne);
    indicies.push(indexTwo);

    return indicies;
};

console.log(twoSum([3,3],6));