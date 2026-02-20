/* 
Link: https://codesignal.com/learn/course/425/unit/3/practice/1 
Welcome aboard! As a developer, you are tasked with improving a tech-savvy restaurant’s reservation system. Your mission: fix a bug in the transposeSeating function that rearranges seating charts. Inspect the provided JavaScript code and correct it to ensure the seating layout is properly transposed. Analyze the code, identify the error, and adjust the function.

Good luck and happy coding!
*/

// TODO: Fix the function to transpose a seating arrangement represented as a 2D array
function transposeSeating(seating: number[][]) {
  let rows = seating.length;
  let cols = rows > 0 ? seating[0].length : 0;
  let transposed: number[][] = [];

  for (let i = 0; i < cols; ++i) {
    transposed[i] = [];
    for (let j = 0; j < rows; ++j) {
      transposed[i][j] = seating[j][i];
    }
  }

  return transposed;
}

// Sample restaurant seating arrangement represented as a 2D array
let restaurantSeating = [
  [10, 11, 12],
  [20, 21, 22],
];

// Trying to transpose the seating arrangement
let transposedSeating = transposeSeating(restaurantSeating);

for (let row of transposedSeating) {
  console.log(row.join(' '));
}
// Output isn't as expected. Can you identify the fix?
