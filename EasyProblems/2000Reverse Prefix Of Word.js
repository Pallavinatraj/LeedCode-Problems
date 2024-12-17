// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".


var reversePrefix = function (word, ch) {
  let left = 0;
  let right = word.indexOf(ch);
  if (right === -1) {
    return word;
  }

  let wordArray = word.split('');

  while (left < right) {
    swap(wordArray, left, right);
    left++;
    right--;
  }
  return wordArray.join('');
};

function swap(wordArray, left, right) {
  let temp = wordArray[left];
  wordArray[left] = wordArray[right];
  wordArray[right] = temp;
}