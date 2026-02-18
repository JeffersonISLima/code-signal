/* 
Your task is to create a function that performs a vertical traverse on a 2D matrix (represented as an array of arrays)
starting from the bottom right corner. The function should start from the bottom-right cell (the last element of the last
row), move vertically upwards to the top (the top row is the row with index 0), then move one column to the left and 
continue the process until all columns have been traversed. The function should return an array containing the values 
of the matrix elements in the order they were visited.

Example:
Given the matrix:
const data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

The correct zigzag traversal should return:
[12, 8, 4, 11, 7, 3, 10, 6, 2, 9, 5, 1]
*/


// TODO: Append each element's value to the result array by following the vertical pattern.

function verticalTraverse(matrix: number[][]) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    let index = 0;
    let result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let col = cols -1
    let row = rows - 1;
    while (index < rows * cols) {
        result[index += 1 ] = matrix[row][col]
            if(row === 0) {
                col -= 1;
                row = rows - 1;
                continue;
            }
            row -= 1;
    }
        return result;
}

const data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const traversal = verticalTraverse(data);
console.log(traversal.join(" "));