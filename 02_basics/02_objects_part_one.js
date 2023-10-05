    //constructor method to create object
    // Object.create

    //example of object literals

const mysym = Symbol("mykey1")
const jUser = {
    name : "virat",
    age : 25,
    email : "virat@cricekt.com",
    location : "Hyderabad",
    isLoggedIn : false,
    lastLogin : ("Monday","Tuesday"),
    [mysym]:"mykey1"        //this is the way to use symbole in object, but first create symbol outside object and then use it in your object.(here we are square bracket for key because it is a symbol.)
}

    //ways to access objects (2 ways)
console.log(jUser.email)
console.log(jUser["email"])

    //way to access symbol present in object.
console.log(jUser[mysym])  //we are trying to print symbol from object, thats why we are using square brackets.

    //way to modify values of object(lets try to modify email)
jUser.email = "virat@google.com"        //email has been modified, we can check now.
console.log(jUser.email)        

    //we can lock values so no one can modify our object date.
//Object.freeze(jUser)      //we have successfully locked our data in object, now no one can modify it. lets try to modify
jUser.name = "irshad"       //we have tried to change name from virat to irshad, lets check what happend.
console.log(jUser.name)     //here we can see the result, 

//console.log(jUser)

    //creating function for objects    [NOTE: we have freezed our object, so we cant modify our object, so first we need to unfreeze it.]
jUser.greetings = function(){
    console.log("Hello jUser")
}
console.log(jUser.greetings())      //greetings is a function so we have to use () in the end.

        //creating function and printing other values of object in that function
jUser.greetings_two = function(){
    console.log(`Hello ${this.name} from jUser`)        //here we are using this keyword as a replacement of jUser.name 
}
console.log(jUser.greetings_two())






