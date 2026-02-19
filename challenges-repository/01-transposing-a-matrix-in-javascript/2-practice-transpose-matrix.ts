/* 
Link: https://codesignal.com/learn/course/425/unit/3/practice/2
Your task is to write a JavaScript function named transformMatrix that will take a 2D array of integers (representing a matrix) as input and return another 2D array which is the transposed version of the input matrix. To transpose a matrix means to flip it over its diagonal, turning its rows into columns and columns into rows.
Don't forget to call the function and to print the results!

INPUT: A 2D array of integers (matrix).
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
OUTPUT: 
// 1 4
// 2 5
// 3 6
*/
const c = console.log.bind(console);
c('happy code');

function transformMatrix(matrix: number[][]) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;
  let transposed: number[][] = [];
  // TODO: Complete the transposition process by filling in the transposed matrix
  for (let i = 0; i < cols; i += 1) {
    transposed[i] = [];
    for (let j = 0; j < rows; j += 1) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

let originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// TODO: Call transformMatrix with originalMatrix and store the result in a variable
// TODO: Print out the transposed matrix
const output = transformMatrix(originalMatrix);
for (const element of output) {
  c(element.join(' '));
}
