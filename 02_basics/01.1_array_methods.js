const myarr = [0,1,2,3,4,5]
//myarr.push(6)       //to add element in the last position.
//myarr.pop()     //will remove last element. NO NEED TO WRITE ANYTHING BETWEEN PARENTHESIS.
// myarr.unshift(9)    //will add new value at staring position.
// myarr.shift()   //will remove first element in the array.
//console.log(myarr.includes(2))  //we can check if element is there in our array or not.
// console.log(`index of "irs" is: ${myarr.indexOf("irs")}`)    //to check index of any element present in array.
// console.log(myarr.indexOf("irs"))


    /************   join()  ******************/
const newar=myarr.join()        //this will actually create a new string with existing array. to check
// console.log(typeof(newar))  
// console.log(newar)
// console.log(myarr)

// console.log(myarr)

    /*********      slice() and splice()    ************/
                    /********   slice()     ******* */
const arraySlice = myarr.slice(1,3)         //element from first and 2nd will be print.
console.log("original array -> ",myarr)
console.log("after performing SLICE()",arraySlice)   

console.log(" ")    //for blank space

                /***********        splice()  ************************ */ //NOTE -> SPLICE() will delete portion.//
console.log("original array -> ",myarr)
const arraySplice = myarr.splice(1,3)
console.log("after performing SPLICE() ",arraySplice)
console.log("after performing SPLICE()original array is effected. ",myarr)      //here we will see different result, as SPLICE() will manipulate our original array






