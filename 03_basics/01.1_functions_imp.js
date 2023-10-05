    //1.what to do if we dont know the exact number of arguments user will provide.
function Calculate_price(...price){         //... is known as REST OPERATOR and also it is known as SPREAD OPERATOR.according to use case its role changes.
    console.log(price)                  //arguments will save in array format.
}
Calculate_price(10,20,30)   //here we are giving 3 arguments but we have declared only one parameter but its works now, because we are using rest operator(...)


        //2.objects in function
const user = {
    name:"virat",
    email:"virat@cricket.com"
}
function handleObject(anyobj){              //here anyobject is just a name of parameter
    console.log(`Username is ${anyobj.name} and email is ${anyobj.email}`)   
}
handleObject(user)      //here we are assigning USER to the anyobj so ANYOBJ can access properties of USER

    //we can also pass direct object  in function
console.log("") //for blank space
console.log("result after directly passing object")
handleObject({
    name:"irshad",
    email:"irshad@something.com"
})

    //3.array in function
const myarr = [10,20,30,40]
function array_handling(getarray){      //getarray is just a name of parameter to access array values
    return getarray[2]      //2 is indexing in array
}
console.log(array_handling(myarr))