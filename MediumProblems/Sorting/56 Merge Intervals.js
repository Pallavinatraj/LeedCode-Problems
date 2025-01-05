// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].



var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [];
    for (let i = 0; i < intervals.length; i++) {
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }
    return merged;
};