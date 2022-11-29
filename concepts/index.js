// anything that has 2 forward slashes and a single space is considered to be a comment and is not code that will ever execute

// Concepts in this code file include:
//  code comments (like this!)
//  constants and variables (constants use the const keyword whereas variables are either function parameters or declared using the let keyword)
//  data types of variables and constants (integers, decimals, booleans, strings, dates, functions, and objects)
//  declaring and calling functions, passing values into the functions via parameters, and the difference between null and undefined
//  if / else if / else statements used for performing conditional behavior by evaluating things in a logical order

const myInteger = 1; // this is an integer number constant (aka a variable that can only have its value initialized but not changed)
const myString = 'Hello World'; // this is a string constant
const myDecimal = 3.14; // this is a decimal number constant
const myBoolean = true; // this is a boolean constant
const myDateTime = new Date(); // this is a datetime constant (this initializes to the current datetime)
const myFunction = () => {
    return 'This is a function that returns this string';
}; // this is a function constant...functions store code that can be called by other lines of code over and over

let myVarInteger = 9; // this is an integer number variable
let myVarString = 'cogito ergo sum'; // this is a string variable
let myVarDecimal = 0.55; // this is a decimal number variable
let myVarBoolean = false; // this is a boolean variable
let myVarDateTime = new Date(1776, 7, 4, 12, 15, 30, 500); // this is a datetime variable (this has been initialized precisely to July 4th, 1776 at 12:15PM at the 30.5 seconds...fyi 500 milliseconds is half of a second)


// below is a constant object, so while it's a constant, the properties it contains can all be changed and can consist
// of any of the variable types from above, including functions and even other objects!
const myObject = {
    myIntegerProperty: 5, // this is an integer number property 
    myStringProperty: 'Goodbye World', // this is a string property
    myDecimalProperty: 4.13, // this is a decimal number property
    myBooleanProperty: false, // this is a boolean property
    myFunctionProperty: (myParameter, myParameter2) => {
        // In functions, any variables listed in between the parenthesis are called parameters...which are just variables that are provided by whoever calls the function.
        // Multiple parameters are separated by commas.
        // If the caller of the function doesn't provide a value for a parameter, then the value of that parameter variable is a special JavaScript value called undefined.

        if (myParameter2 === undefined) {
            console.log('myParameter2 was undefined');
        } else if (myParameter2 === null) {
            console.log('myParameter2 was null');
        } else {
            console.log('myParameter2 was NOT undefined NOR null', myParameter2);
        }

        if (myParameter && myParameter !== 'hello') {
            // The below string is returned only if myParameter is not null/undefined AND IS NOT the word hello.
            return 'no hello';
        } else if (myParameter === 'hello') {
            // If myParameter is the word 'hello' (which means it can't be null/undefined) then the below string is returned.
            return 'got hello';
        } else {
            // If myParameter is null/undefined then the below string is returned.
            return 'got nada';
        }
    }
};

// Below are some examples of calling the function on our myObject object. Note that in each case, the console will have a message logged
// that reads 'myParameter2 was undefined' since none of the examples are passing in a value for the 2nd parameter in the function.
let result1 = myObject.myFunctionProperty(); // result1 would be set to the string 'got nada' since the myParameter value wasn't set (it would be evaluated as undefined).
let result2 = myObject.myFunctionProperty(null); // result2 would also be set to the string 'got nada' since the myParameter value was sent, but with the special value null.
let result3 = myObject.myFunctionProperty('wazzzzup'); // result3 would be set to the string 'no hello' since the myParameter value wasn't null or undefined, but also wasn't the string value 'hello'.
let result4 = myObject.myFunctionProperty('hello'); // result4 would be set to the string  'got hello' since the myParameter value was set to the string value 'hello'.

// Below are some examples of calling the function on our myObject object by where the 2nd parameter IS being passed, and so what gets logged to the console will vary.
let result5 = myObject.myFunctionProperty('hello', null); // result5 would be set to the string 'got hello' AND the console will have the string 'myParameter2 was null' logged

// Below is a function that demonstrates a for loop
const myFunctionWithForLoop = () => {
    for (let i = 0; i <= 10; i++) {
        console.log('The value of i is', i);
    }
};