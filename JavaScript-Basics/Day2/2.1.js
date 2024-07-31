// day 2 loops in js 

// basics understanding of loops 
// initialization, condition, increment/decrement
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let i = 2;
// while (i <= 5) {   
//     console.log(i);
//     i++;
// }


// let i = 1;
// do {
//     console.log(i);
//     i++; 
// } while (i <= 5);



// basics understanding of loops

// for (let i = 1; i <= 10; i++) {
//     console.log(i * 3);
// }

// let i = 1;
// while (i <= 1024) {
//     console.log(i);
//     i *= 2; 
// }


// let num = 5;
// let factorial = 1;

// for (let i = 1; i <= 5; i++) {
//     factorial *= i;  
// }

// console.log(`Factorial of ${num} is ${factorial}`);



// let str = "helo world";
// let vowels = "aeiou";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++;
//     }
// }


// console.log(`Number of vowels: ${count}`);


// arrays start from here

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(`Maximum value: ${max}`);


let arr = [2,50,8,96,888,57,36,89,57,45,12,5,8,6,5];
let max = arr[0];

for (let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}

console.log(max)






// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let max = arr[0]; 
// console.log(max); 

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     console.log(`Iteration ${i}, arr[${i}] = ${arr[i]}, max = ${max}`); 
// }

// console.log(`Maximum value: ${max}`); 


// let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
  
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
//     }
//   }

//   matrix[2][2]

// objects in js


// let person = {
//     name: "Harshal", 
//     age: 30,
//     job: "Developer",
//     greet: function () {
//         console.log("Hello, my name is " + this.name);
//     }   
// };

// console.log(person.name); 
// console.log(person["name"]);
// console.log(person.greet())


// let building = {
//     name: "The White House",
//     address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
//     smallHouse : {
//         name:"Ram nivas",

//         bigHouse:{
//             name:"Ram nivas 2",

//             VeryBigHouse: {
//                 name: "Ram nivas 3"
//             }
//         }
//     }
// }

// console.log(building.smallHouse.bigHouse.VeryBigHouse.name)
// console.log(building["smallHouse"]["bigHouse"]["VeryBigHouse"]["name"])
