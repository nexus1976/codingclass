// Concepts in this code file include:
//  arrays

// Arrays can almost always remain constants rather than variables because like an object, the data within it can be manipulated,
// which is because objects and arrays live on the heap (remember our lesson on the stack and heap).
// Each entry in an array is referred to as an element and each element in an array can be accessed via its index. The index is the numeric position within the array (and is 0-based).
// So the index of the first value 'hello' in the myStringArray below is 0 and you access these elements using these index numbers my refrencing the array variable name with square brackets.
// e.g. myStringArray[0]    contains the value 'hello'
//      myStringArray[1]    contains the value 'world'
//      myStringArray[2]    produces an index out of range error

const myArray = []; // initializes an empty array, the data type 
const myStringArray = ['hello', 'world']; // initializes an array of strings with 2 elements in it
const myIntegerArray = [8, 6, 7, 5, 3, 0, 9]; // initializes an array of integer numbers with 7 elements in it

let myStringVariable = myStringArray[0]; // initializes a string variable to the value 'hello'
let myIntegerArrayLength = myIntegerArray.length; // initializes an integer variable to the value of 7

// it's a common pattern to iterate through each element in an array using a for loop
for (let i = 0; i < myStringArray.length - 1; i++) {
    // now I can use the variable i to access the element of the array
    console.log(myStringArray[i]);
}

// The for loop above will run twice and the first time through it will log the value 'hello' to the console and the 2nd time through it will log the value 'world'.

// We can also add values to an array
myIntegerArray.push(4); // appends a new element to the end of the array with the integer value of 4...now the array contains 86753094