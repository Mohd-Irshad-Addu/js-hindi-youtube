//******************        Math.random is important method     ************************** */
console.log(Math.random()); //will throw any random value between 0 and 1.
console.log(Math.random()*10)   //to avoid 0 we multiplied with 10
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)     //floor will give round figure value but less than 10..to avoid 0 we are adding 1.

const min = 10
const max = 20

console.log(Math.floor(Math.random()*( max - min + 1 )) + min ) 
/*here we are generating random values between 10 and 20.
    so to get values between 10 and 20 we declared two variables.
        and to avoid 0 as our answer we are adding 1.
            and to get number greater than 10 we are adding min.

*/

