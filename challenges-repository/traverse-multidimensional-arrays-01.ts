/* 
In this challenge, let's adjust our matrix traversal method! Originally, our method involved traversing even-indexed
columns upwards and odd-indexed columns downwards. Your task is to reverse this pattern without adding new lines of code. Make the necessary change in the condition within the loop so that even-indexed columns are traversed downwards, and odd-indexed ones upwards.
Let's enhance this pattern!
*/


function matrixTraversal(matrix: number [][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let col = cols - 1; col >= 0; --col) {
        if (col % 2 === 1) {
            for (let row = rows - 1; row >= 0; --row) {
                result.push(matrix[row][col]);
            }
        } else {
            for (let row = 0; row < rows; ++row) {
                result.push(matrix[row][col]);
            }
        }
    }
    
    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const output01 = matrixTraversal(matrix);
console.log(output01.join(" "));