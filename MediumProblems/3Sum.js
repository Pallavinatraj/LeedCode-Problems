var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let newArry = [];

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            let t = nums[i] + nums[j] + nums[k];

            if (t === 0) {
                newArry.push([nums[i], nums[j], nums[k]]);


                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;

                j++;
                k--;
            } else if (t > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    console.log(newArry);
};
threeSum([-1, 0, 1, 2, -1, -4]);
