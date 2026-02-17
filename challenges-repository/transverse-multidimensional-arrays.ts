/* 
Welcome back!

Fill in the missing part to print the codes of the apartments on the first floor of our building. Make sure to maintain the simplicity of the solution.

Good luck and happy coding! */

// Creating a 2D array representing an apartment building
const building01 = [
  ['1A', '1B', '1C'],
  ['2A', '2B', '2C'],
  ['3A', '3B', '3C'],
];

// TODO: Complete the code to print the apartment codes of the ground floor only.

for (let i = 0; i < building01.length; i += 1) {
  for (let j = 0; j < building01[i].length; j += 1) {
    if (i === 0) {
      console.log(building01[i][j]);
    }
  }
}

// ====================================================================
/* 
Now that we've learned about multidimensional arrays in JavaScript, we'll simulate adding a new floor to our electronic building directory. Your task is to add another floor to our array, which represents adding a new set of rooms to our building. Afterward, ensure that the directory can list all floors and rooms, including the ones newly added.
*/

function addNewFloor(original: string[][], newFloor: string[]) {
  original.push(newFloor);
  return original;
}

let apartments = [
  ['Apt 101', 'Apt 102'],
  ['Apt 201', 'Apt 202'],
];

apartments = addNewFloor(apartments, ['Apt 301', 'Apt 302']);
const output = apartments.map((outerElement) =>
  outerElement.map((innerElement) => console.log(innerElement)),
);

// ====================================================================

/* 
You're managing a 3-story residential building using JavaScript 2D arrays. Your tasks are to:

Create a 3-story building (2D array) with 3 units per floor.
Mark one unit as vacant by changing its value.
Print the names of all units, floor by floor.
Feel free to ask me if you have any doubts. Good luck and happy coding!
*/

// TODO: Initialize a 3-story building with 3 units per floor using a 2D array.
const building = [
  ['1A', '1B', '1C'],
  ['2A', '2B', '2C'],
  ['3A', '3B', '3C'],
];

// TODO: Update the name of one of the apartments to "Vacant".

building[1][2] = 'Vacant';

// TODO: Traverse the building and print out the names of all units, one floor at a time.

for (let i = 0; i < building.length; i += 1) {
  for (let j = 0; j < building[i].length; j += 1) {
    console.log(building[i][j]);
  }
}
