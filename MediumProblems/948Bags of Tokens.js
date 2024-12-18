// Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
// Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
// Return the maximum possible score you can achieve after playing any number of tokens.

// Input: tokens = [100,200,300,400], power = 200
// Output: 2

var bagOfTokensScore = function (tokens, power) {
    let token = tokens.sort((a, b) => a - b);
    let left = 0;
    let right = token.length - 1;
    let res = 0;
    let score = 0;

    while (left <= right) {
        if (token[left] <= power) {
            power -= token[left];
            score++;
            res = Math.max(res, score);
            left++;
        }
        else if (score > 0) {
            score--;
            power += token[right];
            res = Math.max(res, score);
            right--;
        }
        else {
            break;
        }

    }
    return res;
};