/* 
Link: https://codesignal.com/learn/course/425/unit/3/practice/3

You've just learned how to transpose a matrix. Now, let's add a twist! Write the transformMatrix function to transpose the given matrix in reverse order, starting from the last column and moving to the first column. This slight modification will provide a fresh perspective on transposing matrices. Go ahead and give it a try!
Don't forget to call the function and to print the results!

For example, if the given matrix is:
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

The reverse transposed matrix will be:
[
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
]
*/

const c = console.log.bind();
c('Happy coding!');

function transformMatrix(matrix: number[][]) {
  let result: number[][] = [];
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;

  // TODO: Modify the loop to transpose the matrix in reverse order
  for (let i = cols - 1; i >= 0; i -= 1) {
    result[i] = [];
    for (let j = rows - 1; j >= 0; j -= 1) {
      result[i][j] = matrix[j][i];
    }
  }
  return result.reverse();
}

let matrix = [
  [101, 102, 103, 104],
  [201, 202, 203, 204],
  [301, 302, 303, 304],
];

// TODO: Store the result of transformMatrix in transposedMatrix and print it
const output = transformMatrix(matrix);
for (const element of output) {
  c(element.join(' '));
}
