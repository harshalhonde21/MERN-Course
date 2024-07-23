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
l
// console.log(`Factorial of ${num} is ${factorial}`);





// next topic of string

// let str = "hello";
// let reversedStr = "";


// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
// }

// console.log(reversedStr);



let str = "helo world";
let vowels = "aeiou";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}


console.log(`Number of vowels: ${count}`);


// arrays start from here

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(`Maximum value: ${max}`);