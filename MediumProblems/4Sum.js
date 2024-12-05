var fourSum = function (nums, target) {
    n = nums.length;
    nums.sort((a, b) => a - b);
    arrY = [];
    if (nums == null || nums.length < 4) {
        return arrY;
    }

    for (let a = 0; a < n - 1; a++) {
        if (a > 0 && nums[a] == nums[a - 1]) {
            continue;
        }
        for (let b = a + 1; b < n - 1; b++) {
            if (b > a + 1 && nums[b] == nums[b - 1]) {
                continue;
            }
            let c = b + 1;
            let d = n - 1;
            while (c < d) {
                let total = nums[a] + nums[b] + nums[c] + nums[d];
                if (total === target) {
                    arrY.push([nums[a], nums[b], nums[c], nums[d]]);

                    while (c < d && nums[c] == nums[c + 1]) {
                        c++;
                    }

                    while (c < d && nums[d] == nums[d - 1]) {
                        d--;
                    }
                    c++;
                    d--;
                }
                else if (total > target) {
                    d--;
                }
                else {
                    c++;
                }
            }
        }
    }
    console.log(arrY);
};

fourSum([1, 0, -1, 0, -2, 2], 0);
fourSum([2, 2, 2, 2, 2], 8);