function addTwo(num1,num2){
    console.log(num1+num2)
    //return num1+num2
}
addTwo(2,4)

function adding(a,b){
    let h=a+b
    return h

    //or

    return a+b
    
    
}
const result = adding(10,20)
console.log(result)

function three(x,y){
    console.log("Hi I will print.")
    return x+y
    console.log("i will not print")     //this console will not work because once return keyword is used in function, after that console will not work.
}
const three_result = three(20,30)
console.log(three_result)

    //function when we dont pass arguement
function arg_check(message){
    console.log(message)
}
arg_check()

    //we can pass default arguement if user didnt give any arguement
function five(name="someone"){
    console.log(`${name} has just logged in.`)
}
five()

    //using if condition in function
function your_marks(marks){
    if(marks === undefined){                //we can write !marks    which means if marks is not there 
        console.log("Please enter your marks")
    }
    return marks
}
console.log(your_marks())

    //only for test
// function test(m,n){
//     let x=m+n
//     return x
// }
// const result_test =  test(10,50)
// console.log(result_test)
