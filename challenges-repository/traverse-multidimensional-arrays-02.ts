/* 
You are given a 2D array representing a library's bookshelf layout. Your task is to traverse the shelves starting from the bottom left corner, zigzagging upwards through the rows until you hit the top, then moving one column to the right and switching direction to move downwards, repeating this pattern. A bug is disrupting the traversal path. Detect and fix the bug to ensure seamless traversal.

Example:

Given the library array:
const library = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [9, 11, 13, 15]
];
[9, 2, 1, 3, 4, 11, 13, 6, 5, 7, 8, 15]

*/

function traverseLibrary(library: number[][]) {
    let row = library.length - 1;
    let col = 0;
    let goingUp = true;
    const result = [];

    while (col < library[0].length) {
        result.push(library[row][col]);
        if (goingUp) {
            if (row == 0) {
                goingUp = false;
                col += 1;
            } else {
                row -= 1;
            }
        } else {
            if (row == library.length - 1) {
                goingUp = true;
                col += 1;
            } else {
                row += 1;
            }
        }
    }

    return result;
}

const library = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [9, 11, 13, 15]
];

const result = traverseLibrary(library);
console.log (result);