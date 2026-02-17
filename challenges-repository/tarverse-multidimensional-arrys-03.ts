/* 
Focus on the essential maneuver of traversing and switching directions in a 2D matrix using JavaScript. Implement the part of the logic where if we have reached the bottom or top of a column, we need to switch directions and move left. We are initializing our traversal from the bottom-right corner of the matrix, moving upwards first, then switching direction when the top or bottom is hit.
Example:
Given the matrix:

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

The correct zigzag traversal should return:
[12, 8, 4, 3, 7, 11, 10, 6, 2, 1, 5, 9]
*/

function columnTraverse(matrix: number [][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = rows - 1;
    let col = cols - 1;
    let direction = "up";
    const output = [];
    let index = 0;

    while (index < rows * cols) {
        output[index++] = matrix[row][col];
        if (direction === 'up') {            
            if(row === 0 ) {
                col -= 1
                direction = 'down';
                continue;
            } 
            row -= 1;
        }
        if (direction === 'down') { 
            if(row === rows - 1 ) {
                col -= 1
                direction = 'up';
                continue;
            } 
            row += 1;
        }
    }
    return output;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const result = columnTraverse(matrix);
console.log(result.join(" "));