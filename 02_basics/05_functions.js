// function loginusermessage(username){
    // if(username === undefined){
    //     console.log("please enter the username")
    //     return
    // }
//     if(!username){
//         console.log("please enter the value");
//         return
//     }
//     return `${username} just logged in `
// }
// console.log(loginusermessage("Jayesh"))
// console.log(loginusermessage())



/*********************how to pass object************************ */
function calculatecartprice(...num1){//used rest method like ...num1 
    return num1
}

console.log(calculatecartprice(200,400,500))

function calculateanothercart(val1,val2,...num1){
    return num1
}

console.log(calculateanothercart(300,400,500,6000));

const user = {
    username : "jayesh",
    price : 200
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({
    username:"jayesh",
    price :199
})



