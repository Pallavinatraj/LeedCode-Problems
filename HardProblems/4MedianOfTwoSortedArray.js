var findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b);
    let n = arr.length;
    if (n % 2 === 0) {
        console.log((arr[n / 2 - 1] + arr[n / 2]) / 2);
    }
    else {
        console.log(arr[Math.floor(n / 2)]);
    }

};
findMedianSortedArrays([1, 3], [2]);