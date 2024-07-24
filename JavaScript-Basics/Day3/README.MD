# JavaScript Functions

## Function Declarations and Expressions

### Function Declarations
A function declaration defines a named function. Function declarations are hoisted, meaning they can be called before they are defined in the code.

**Example:**
```javascript
function greet() {
    console.log("Hello, world!");
}

greet(); 

```
### Function Expressions
A function expression defines a function inside an expression. Function expressions are not hoisted, so they cannot be called before they are defined.

```javascript
const greet = function() {
    console.log("Hello, world!");
};

greet(); 
```

### Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions. They are always anonymous and do not have their own this context.


```javascript 
const greet = () => {
    console.log("Hello, world!");
};

greet(); 

// Example with Parameter real use case of arrow function 
const add = (a, b) => a + b;

console.log(add(2, 3));
```


### Higher-Order Functions

A higher-order function is a function that takes another function as an argument, returns a function, or both. Higher-order functions are a key feature of functional programming in JavaScript.

```javascript
function higherOrderFunction(callback) {
    console.log("Higher-order function called");
    callback();
}

function callbackFunction() {
    console.log("Callback function called");
}

higherOrderFunction(callbackFunction);
```


### Example of Higher order Function

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled);

```


# Design and Written by Harshal Honde