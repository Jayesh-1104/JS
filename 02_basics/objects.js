const mysysm = Symbol("key1")// subing symbol to accesss key

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

console.log(Juser.email) //one method to access variables
console.log(Juser["email"]);//another ethod to access variables
console.log(Juser["time"]);
console.log(Juser[mysysm]);//add key symbol 
//asked in interview

