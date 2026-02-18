/* 
Welcome, aspiring space explorer! Here's an exciting challenge: simulate a zigzag traversal of a grid in JavaScript,
mimicking the navigation of library bookshelves. Start at the bottom-right corner, move upwards in the last column,
then downwards in the previous column, alternating directions. Traverse each column in this zigzag pattern and collect
the items. Good luck!

Example:

Given the grid:

const grid = [
    [101, 102, 103, 104],
    [201, 202, 203, 204]
];

The correct zigzag traversal should return:

[204, 104, 103, 203, 202, 102, 101, 201]
*/



function zigzagTraverse(grid: number[][]) {
    // TODO: Determine the number of rows and columns in 'grid'
    let index = 0;
    let direction = 'up';
    const traversalPath = [];
    const rows = grid.length;
    const cols = grid[0].length;
    let row = rows - 1;
    let col = cols - 1;
    
    // TODO: Traverse 'grid' in a zigzag pattern starting from the bottom right
    while (index < rows * cols) {
        traversalPath[index += 1] = grid[row][col];
        if (direction === 'up') {
            if (row === 0){
                col -= 1;
                direction = 'down';
                continue;
            }
                row -= 1;
        } 
        
        if(direction === 'down') {
            if (row === rows - 1) {
                col -= 1;
                direction = 'up';
                continue;
            }
                row += 1;
        }
        
    }
    return traversalPath;
}

const grid = [
    [101, 102, 103, 104],
    [201, 202, 203, 204]
];

// TODO: Print the zigzag traversal path of items in 'grid'
const output = zigzagTraverse(grid);
console.log(output.join(" "));



// ========================================================================================

// Approach using for looping
/**
 * Traverse a grid in a zigzag pattern starting from the bottom right
 * @param grid - 2D array of numbers
 * @returns Array with elements in zigzag order
 */
function zigzagGridTraversal(grid: number[][]): number[] {
    const rows = grid.length;
    const cols = grid[0].length;
    const result: number[] = [];
    
    // Traverse columns from right to left
    for (let col = cols - 1; col >= 0; col--) {
        // Alternate between going up and down
        if (col % 2 === 0) { // Even columns from right: go UP
            for (let row = rows - 1; row >= 0; row--) {
                result.push(grid[row][col]);
            }
        } else { // Odd columns from right: go DOWN
            for (let row = 0; row < rows; row++) {
                result.push(grid[row][col]);
            }
        }
    }
    
    return result;
}

// Example usage
const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(zigzagGridTraversal(grid).join(' '));
// Output: 12 8 4 3 7 11 10 6 2 1 5 9