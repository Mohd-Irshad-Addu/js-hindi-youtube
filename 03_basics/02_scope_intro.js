//1.GLOBAL SCOPE
//NOTE : we can access globally declared variables inside local scope BUT we can not access locally declared variables outside of its scope.
let a = "Hi I am global scope"

//2.LOCAL SCOPE
if (true) {
    let a = "Hi I am Local scope"
    console.log(a);     //this is local scope
}
console.log(a);     //this is global scope
console.log("");    //for blank space


//3.example NO 2 of GLOBAL AND LOCAL SCOPE
let gScope = "Hi i am GLOBAL SCOPE"

if (true) {
    let lScope = "Hi I am LOCAL SCOPE"
    console.log(lScope);
    console.log(`${gScope} that is why you can able to print me in local scope`);
}

console.log(gScope);
// console.log(lScope);    //we will get error, because we are trying to access local variable outside of its scope