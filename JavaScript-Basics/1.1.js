// declartion of variable in js

// es6 - ecmastricpt 2015 is pehele

// var is variable to declare any variable

// var a = 2;
// var a = 3;
// var a = 5;
// var a = 9;
// console.log(a) 



// let a = 15;
// a = 16;
// a = 18;
// console.log(a);

// const a = 15;
// console.log(a);

//example 1 for keyword/variable (var)

// function varExample() {
//     var count = 1;
//     if (count != 0) {
//       var count = 3;
//       console.log('Inside if block (var):', count);
//     }else{
//       var count = 5;
//       console.log('In else block (var)', count);
//     }
//     console.log('Outside if block (var):', count);
//   }

//   varExample()



// function letExample() {
//     let count = 1;
//     count = 20;
//     if (true) {
//         let count = 2;
//         console.log("Inside if block (let):", count);  // output : 2
//     }
//     console.log("Outside if block (let):", count); // output : 20
// }

// letExample();  


// function constExample() {
//     const count = 1;
//     console.log('Initial count (const):', count);

//     if (true) {
//         const count = 2;
//         console.log('Inside if block (const):', count);  
//     }

//     console.log('Outside if block (const):', count); 
// }

// constExample();



// function getDayName(dayNumber) {
//     let dayName;
    
//     switch (dayNumber) {  // dayNumber : 5
//       case 1:
//         let dayName = 'Monday';
//         break;
//       case 2:
//         dayName = 'Tuesday';
//         break;
//       case 3:
//         dayName = 'Wednesday';
//         break;
//       case 4:
//         dayName = 'Thursday';
//         break;
//       case 5:
//         dayName = 'Friday';
//         break;
//       case 6:
//         dayName = 'Saturday';
//         break;
//       case 7:
//         dayName = 'Sunday';
//         break;
//       default:
//         dayName = 'Invalid day number';
//     }
    
//     return dayName;
//   }
  
//   console.log(getDayName(5)); 
 
  
