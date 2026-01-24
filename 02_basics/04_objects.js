//sIngelton oBjECT
// const tinderuser = new Object()
// console.log(tinderuser);

//NONsingelton object
// const tinderuser = {}
//  console.log(tinderuser);
const tinderuser = {}
tinderuser.id = "1"
tinderuser.name  = " jayu"
tinderuser.isLoggedIn = false

//cosole.log(tinderuser)

const regularuser = {
    email : "jayesh@gmail.com",
    fullname : {
        userfullname:{
            firstname: "jayesh",
            lastname:"shewale"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)

//console.log(regularuser.fullname.userfullname)

//merging 2 objects to single arrays

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = Object.assign ({},obj1,obj2)
console.log(obj3)



