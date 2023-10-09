//below I have two types of functions, and lets see what happens if i call those functions before its creation.

console.log(addOne(5))
function addOne(num) {
    return num + 1
}

console.log(addTwo(5)) 
const special_func = function addTwo(num) {
    return num + 2
}

    // ++++++ IMPORTANT NOTE ABOUT ABOVE FUNCTIONS +++++++//
        //I have created two function,the first function is I have created directly but second function i have created and then assigned it to a variable.
        //The thing is a FUNCTION can be execute before its creation, but a VARIABLE can not execute before its creation..
        //To run above two functions without any errors, we need to comment line number 8.