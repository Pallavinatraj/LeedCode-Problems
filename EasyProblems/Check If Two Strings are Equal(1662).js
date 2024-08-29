//Check if two strings are equal 
function arrayStringsAreEqual(word1, word2) {
    return word1.join('')===word2.join('');
}
arrayStringsAreEqual(["ab", "c"],["a", "bc"]);
