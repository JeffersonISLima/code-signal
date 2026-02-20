/* 
Link: https://codesignal.com/learn/course/425/unit/3/practice/4

Complete the function reflectOverSecondaryDiagonal which takes a square matrix and returns a new matrix that is a reflection over its secondary diagonal. The secondary diagonal is the line from the upper-right to the bottom-left corner. Don't forget to call the function and to print the results!

Example:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

After reflection, the matrix should be:
let transformed = [
    [9, 6, 3],
    [8, 5, 2],
    [7, 4, 1]
];
 */

const c = console.log.bind(console);
c('Happy Coding!');

function reflectOverSecondaryDiagonal(matrix) {
    let newMatrix = [];
    matrix = matrix.reverse();
    let size = matrix.length;

    for (let i = 0; i < size; ++i) {
        newMatrix[i] = [];
        for (let j = 0; j < size; ++j) {
            // TODO: Complete the code to obtain the reflected square matrix in newMatrix.
            newMatrix[i][j] = matrix[j][i];
        }
    }
    return newMatrix.reverse();
}

// Example square matrix to reflect over the secondary diagonal
let squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// TODO: Call the function on squareMatrix and store the result in transformedMatrix.
// Print the transformed matrix.
const output = reflectOverSecondaryDiagonal(squareMatrix);
for (const element of output) {
    c(element.join(' '));
}
