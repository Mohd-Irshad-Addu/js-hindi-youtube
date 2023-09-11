//Types of Memory
        //Stack (Primitive)
        //Heap  (Non-Primitive )


let myname = "salman"
let yourname = myname
// console.log(yourname)
yourname =  "irshad";
// console.log(yourname)
// console.log(myname)

let userObj = {
    email:"abc@gmail.com",
    empid:1234,
}
let userObj2 = userObj
userObj2.email="xyz@gmail.com"

console.log(userObj.email)
console.log(userObj2.email)
