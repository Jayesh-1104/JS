// const score = 400
// console.log(score)
// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString());
// console.log(balance.toString().length); 
// /*****to fixed 100 --> 100.0/ 100.00***** */
// console.log(balance.toFixed(2));



/******to precision******* */
// const othernumber = 23.8699
// console.log(othernumber.toPrecision(3));
// console.log(othernumber.toPrecision(1));
// console.log(othernumber.toPrecision(2));


/*************to localstring *******************/

// const hundread  = 10000000
// console.log(hundread.toLocaleString())

// console.log(hundread.toLocaleString('en-IN'))


/****************MATHS****************** */
// console.log(Math);

// console.log(Math.abs(-4));//negative to positive

// console.log(Math.round(4.63))// for round off 


// console.log(Math.round(4.63)-1)// for round off but with -1

/*****here we have 2 value ceil and bottom********** */

// console.log(Math.ceil(4.2))

// console.log(Math.floor(4.9))

/*******for minimum and maximum value in array***********/
// console.log(Math.min(3,4,5,6));
// console.log(Math.max(3,4,5,6,7));


console.log(Math.random())//between 0 & 1 
/**for dice game ***** */
/********we want value between 0 and 1  */
console.log((Math.random()*10 )+ 1 )

console.log(Math.floor(Math.random()*10 )+ 1 )

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+ min)





