var merge = function (nums1, m, nums2, n) {
    let a = m - 1;
    let b = n - 1;
    let c = m + n - 1;

    while (b >= 0) {
        if (a >= 0 && nums1[a] > nums2[b]) {
            nums1[c] = nums1[a];
            a--;
        }
        else {
            nums1[c] = nums2[b];
            b--;
        }
        c--;
    }
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);