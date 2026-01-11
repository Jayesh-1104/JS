//let arr = [1,2,3,4,5,6,7]

const myArr = [0,1,2,3,4,5]
console.log(myArr);

const myArr2 = new Array(1,2,3,4,5)

/*whenever we perform copy operation in array 
it creates a shallow copy :- In JavaScript, a shallow copy 
creates a new object 
or array that copies only the top-level properties of the original */

/*In JavaScript, a deep copy creates an entirely independent clone of
 an object or array, including all of its nested properties */

// myArr.push(6)
// myArr.pop(5)
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))


// const newArr = myArr.join( )//adds all the elements into the string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr);


// //slice,spice 
// Original array ko change nahi karta
// ✔ Copy return karta (part of array)
// ✔ Syntax: arr.slice(start, end)

// Example:

// let arr = [1,2,3,4,5];
// let x = arr.slice(1,4); // 1 included, 4 excluded
// console.log(x);   // [2,3,4]
// console.log(arr); // [1,2,3,4,5] (same)
// const munl = myArr.slice( )

//SPLICE

// Original array ko modify karta
// ✔ Remove / Add elements kar sakta
// ✔ Syntax: arr.splice(start, deleteCount, item1, item2, ...)

// Example (Remove):
// let arr = [1,2,3,4,5];
// arr.splice(1,2);
// console.log(arr); // [1,4,5]
