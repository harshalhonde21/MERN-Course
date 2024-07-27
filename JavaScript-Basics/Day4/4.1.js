// Array Methods: map, filter, reduce, forEach 


// map method which is already studied

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(number => number * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]

// filter method imp for MERN

// const numbers = [1, 2, 3, 4]; 
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// reduce method 

// const numbers = [1, 2, 3, 4];               
// const sum = numbers.reduce((total, number) => total - number);
// console.log(sum); // Output: 10
    

// For each loop example of array method

// const numbers = [1, 2, 3, 4];
// numbers.forEach(num => {console.log(num)});



// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];
  
//   users.forEach(user => user.age += 1);
//   console.log(users);



// String method start trim()

// const str = "   Hello World!   ";
// const trimmedStr = str.trim();
// console.log(trimmedStr);


// split method 

// const str = "Hello World";
// const words = str.split(" ");
// console.log(words); // Output: ["Hello", "World"]


// replace method of string

// const str = "Hello World";
// const newStr = str.replace("Hello World", "JavaScript");
// console.log(newStr); // Output: "Hello JavaScript"


// object method keys

// const obj = {a: 1, b: 2, c: 3, d:5};
// const keys = Object.keys(obj);
// console.log(keys); // Output: ["a", "b", "c", "d"]



// values method to take value up

// const obj = {a: 1, b: 2, c: 3};
// const values = Object.values(obj);
// console.log(values); // Output: [1, 2, 3]

// entries method

// const obj = {a: 1, b: 2, c: 3, d:4};
// const entries = Object.entries(obj);
// console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]


// example of trim + forEach

// const words = ["Hello", "world     ", "!      "];
// let sentence = "";
// words.forEach(word => sentence += word.trim() + " ");
// console.log(sentence);



