class Solution {
  mostFrequentElement(nums) {
    let map = {};

    // Count frequencies
    for (let n of nums) {
      map[n] = (map[n] || 0) + 1;
    }

    let maxFreq = 0;
    let result = Infinity;

    for (let key in map) {
      let num = parseInt(key);
      let freq = map[key];

      if (freq > maxFreq) {
        maxFreq = freq;
        result = num;
      } else if (freq === maxFreq && num < result) {
        result = num;
      }
    }

    return result;
  }
}
