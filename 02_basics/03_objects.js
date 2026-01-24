const mysysm = Symbol("key1")// subing symbol to accesss key
//object literals 
const Juser ={
    name : "Jayesh",
    age : 18,
    [mysysm] : "mykey1",
    "time":"1 and half",
    location : "nashik",
    email : "shewqale@gmail.com",
    isLoggedin : false,
    lastlogin: ["monday","saturday"]
}

// console.log(Juser.email) //one method to access variables
// console.log(Juser["email"]);//another ethod to access variables
// console.log(Juser["time"]);
// console.log(Juser[mysysm]);//add key symbol 
// //asked in interview

// Juser.email  = "jayesh@gmail.com"//change in values done by = 
// console.log(Juser["email"]);

// Object.freeze(Juser)//how to freeze them ,no changr further
// Juser.email = " jayesh@jayu.com"
// console.log(Juser);
Juser.greeting = function(){
    console.log("Hello");
    }




Juser.greetingtwo = function(){
    console.log(`Hello ${this.name}`);//working of this
    }
console.log(Juser.greeting());
console.log(Juser.greetingtwo());

