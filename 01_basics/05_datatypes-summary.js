// primitive Data types
    // 1.String 2.Number 3.boolean 4.null 5.undefined 6.bigInt 7.symbol

//examples one by one
const mystr = "infosys"
const mynum = 12455
const isLoggedin = false
const temp = null
// console.log(typeof(temp));//output will be object
let useremail; //means undefined

//***   lets understand symbol clearly   *****(mostly used in frameworks)/
const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2) //the answer will be false because values are same but we are using symbol which means it will make unique.

const bigInt =  23749872332534n;    //if we put n at the end the number will change to bigint
console.log(typeof(bigInt))

//Non-primitive (reference )data type
    //1.Array   2.Object    3.Function

const myarray = ["virat","dhoni","rohit"]
// console.log(typeof(myarray));

const myobj ={

    name:"irshad",
    empId:532,

}
// console.log(typeof(myobj));

//now lets try to create function in a different way by giving variable name to functions
const myfunc = function{
    console.log("Hello welcome to my function.")

}
myfunc()