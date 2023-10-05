    //way to declare object in singleton method
//const tinderUser = new Object()

    //non singleton object example
const tiktok_user = {}
tiktok_user.name = "virat"
tiktok_user.email = "virat@yahoo.com"
tiktok_user.isLoggedIn = false
console.log(tiktok_user)

    //nesting in objects(we can create number of objects inside another object)
const regular_user = {
    userFullName:{
        firstName:"mohd",
        lastName:"Siraj"
    }
}
//console.log(regular_user.userFullName.firstName)        //accessing objects

    //combining two or more objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}    //wrong way to combine objects
console.log(obj3)

    //another way to combine objects
const obj4 = Object.assign({},obj1,obj2)    //here better to use empty curly braces 
console.log(obj4)

    //best way to combine objects
const best_way = {...obj1,...obj2}      //this ... is called spread operator/spread mehtod
console.log(best_way)

    //objects in array (when data comes from database it will form inside array as objects, see the example)
const user_data = [
    {
        id:1,
        email:"virat@something.com"
    },
    {
        id:2,
        email:"rohit@something.com"
    },
    {
        id:3,
        email:"dhoni@something.com"
    },
    {
        id:4,
        email:"siraj@something.com"
    }
]
   //now access the data of that array
console.log(user_data[2].email) //here we are accessing array's data with the help of indexing.

        // some important object methods
console.log(tiktok_user)
console.log(Object.keys(tiktok_user))       //here keys is a special method which gives us keys of object in array format.
console.log(Object.values(tiktok_user))     //here values is a special method which gives us values of an object in array format.
console.log(Object.entries(tiktok_user))    //here entries is a special method which gives data of an object in nested array form.
console.log(tiktok_user.hasOwnProperty("isLoggedIn")) //hasOwnProperty is a special method to check any value is present in our object or not.