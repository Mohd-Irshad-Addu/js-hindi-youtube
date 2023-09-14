let myDate = new Date()
// console.log(myDate);
//methods on date
/*
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toISOString())
console.log(typeof(myDate))//date is an object.
*/

//understanding date as object.
const newDateobj = new Date(2023,0,13)
// console.log(newDateobj.toDateString())
            //for time and date//
let newTimeDateObj = new Date(2023,1,13,5,3)
// console.log(newDateobj.toLocaleString())
let newDateobj2 = new Date("2023-09-13")        //another method to create new date
// console.log(newDateobj2.toLocaleString())
let newDateobj3 = new Date("09-13-2023")        //another method to create new date 
// console.log(newDateobj3.toDateString())

//lets understand timespan
let myTimeStamp =  Date.now()
// console.log(myTimeStamp)

//lets understand date methods
let myNewDate = new Date()
// console.log(myNewDate.getFullYear())    //for only full year
// console.log(myNewDate.getDay())       //for day only
// console.log(myNewDate.getDate())       //for date only
// console.log(myNewDate.getMinutes());    //for minutes
// console.log(myNewDate.getMonth(1);  //for month only

//console.log(`today date is ${myNewDate.getDay()} and the month is ${myNewDate.getMonth()} and year is ${myNewDate.getFullYear()}`)

console.log(myNewDate.toLocaleString('default',{
    weekday:"long",
}))









