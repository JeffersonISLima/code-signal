/* 
Link: https://codesignal.com/learn/course/425/unit/3/practice/5
Time to apply what you've learned about transposing matrices! Your task is to write JavaScript code from scratch to take an initial seating arrangement (a 2D array) and transpose it. Remember, transposing switches the rows and columns, creating a new perspective on seating.

Input:
[
  [1, 2],
  [3, 4],
  [5, 6]
]

Output:
[
  [1, 3, 5],
  [2, 4, 6]
]
*/

// TODO: Define a function 'transposeSeating' that takes a 2D array 'arrangement' as its parameter.
const c = console.log.bind(console);
c('Happy Coding!');

function transposeSeating(matrix) {
  let result = [];
  const rows = matrix.length;
  const cols = !!matrix ? matrix[0].length : 0;

  for (let i = 0; i < cols; i += 1) {
    result[i] = [];
    for (let j = 0; j < rows; j += 1) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
}

// Restaurant seating before transposition (rows)
let seatingBefore = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// TODO: Call the 'transposeSeating' function with 'seatingBefore' and print the result to see the new seating arrangement.
const output = transposeSeating(seatingBefore);
for (element of output) {
  c(element.join(' '));
}
