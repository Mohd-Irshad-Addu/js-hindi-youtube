//  =====> Immediately Invoked Function Expression  <=====
//REASON TO USE IIFE => so many we get problems with global pollution(variables present globally) so to keep our functions away with pollution, we use IIFE as it executes immediately.
//in normal function 
//normal function
function chai(){
    console.log("Hello mr")
}
chai();     //to use iife function, we have to close previous function with semi colon.

    //iife function
(function chai_iife(){
    console.log("Hi i m iife. ")
})();        //here this () are calling function.

    //arrow function with iife
(() => {
    console.log("Hi  I am arrow iife function.")
})();

        //we can also pass parameters and arguements in iife function.(same will apply to arrow function.)
(function coffee(price){
    console.log(price)
})(100);         //here 100 is argument.

        //parameters and arguements in arrow iife function
((rate) => {
    console.log(rate)
})(400);        //here 400 is argument for rate parameter.
