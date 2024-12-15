// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]



var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        let left = 0;
        let right = image[i].length - 1;
        while (left <= right) {
            if (left === right) {
                image[i][left] = image[i][left] === 0 ? 1 : 0
            }
            else {
                [image[i][left], image[i][right]] = [image[i][right], image[i][left]];
                image[i][left] = image[i][left] === 0 ? 1 : 0
                image[i][right] = image[i][right] === 0 ? 1 : 0
            }
            left++;
            right--;
        }
    }
    return image;

};