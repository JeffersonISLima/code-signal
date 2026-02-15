/*
Link: https://app.codesignal.com/practice-question/question/progressiveFilesystemUnitTests?context=invitations

Instructions
Welcome to the practice task! This task is designed to be a playground that allows you to get acquainted with the testing environment and practice the functionalities of the platform before your real assessment. Your task is to implement a simple container of integer numbers. All operations that should be supported by this database are described below.
Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.
You are not required to provide the most efficient implementation. Any code that passes the unit tests is sufficient.
Environment details (click here to hide)
To read the details about the language version, libraries used in the task, and the testing framework, used check out the README tabin the left panel of the page.
To customize the editor settings and see the editor hotkeys, check out the SETTINGS tabin the left panel of the page.
To reset your code, clickbutton in the top right corner of the page. Be careful, this will reset all your code changes!

 Unit tests are already implemented and cannot be modified. You can find level 1 tests among the open files. Feel free to look at them and get familiar with the details. There is also an editable sandbox test file, which can be used for testing your code with custom test cases. These tests will be run together with other tests but will not be taken into account for scoring.
 To run the tests, you can choose either In Terminal or Structured option from the dropdownand clickbutton located on the right part of the screen. The difference between these options is the format of the test results:
 If you'd like to receive a raw report of tests, choose the In Terminal option. The tests in this report will contain all debug output you've printed to the console.
 If you'd like to receive test results with more structure, choose the Structured option. Note that debug output is not supported in this option.
 You can execute a single test case by running the following command in the terminal: bash run_single_test.sh "<test_case_name>".

 ====================================================================================================================

Requirements
Your task is to implement a simple container of integer numbers. Plan your design according to the level specifications below:

Level 1: Container should support adding and removing numbers.
Level 2: Container should support getting the median of the numbers stored in it.
To move to the next level, you need to pass all the tests at this level when submitting the solution.

Level 1
Implement two operations for adding and removing numbers from the container. Initially, the container is empty.

add(value: number): number — should add the specified integer value to the container and return the number of integers in the container after the addition.

delete(value: number): boolean — should attempt to remove the specified integer value from the container. If the value i  s present in the container, remove it and return true, otherwise, return fals e.

Examples  
The example below shows how these operations should work (the section is scrollable to the right):  
Queries	          Explanations  
add(5)            returns 1; container state: [5] 
add(10)           returns 2; container state: [5, 10] 
add(5)            returns 3; container state: [5, 10, 5]  
delete(10)        returns true; container state: [5, 5]
delete(1)         returns false; container state: [5, 5]
add(1)            returns 3; container state: [5, 5, 1]
*/

import IntegerContainerInterface from './integerContainerInterface';
export default class IntegerContainer extends IntegerContainerInterface {
  container: number[] = [];
  constructor() {
    super();
  }

  add(integer: number): number {
    return this.container.push(integer);
  }

  delete(integer: number): boolean {
    const indexAtArray = this.container.indexOf(integer);
    if (indexAtArray !== -1) {
      this.container.splice(indexAtArray, 1);
      return true;
    }
    return false;
  }

  getMedian(): number | null {
    const container = this.container;
    if (!container.length) {
      return null;
    }
    container.sort((numberA, numberB) => numberA - numberB);
    const isOdd = container.length % 2 !== 0;
    const halfContainer = container.length / 2;
    const handleIndex = Math.floor(halfContainer);
    if (isOdd) {
      return container[handleIndex];
    }
    return container[handleIndex - 1];
  }
}
