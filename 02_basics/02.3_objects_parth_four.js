//singleton object example
const ex_obj = new Object()
//console.log(typeof(ex_obj))






const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = {obj1,obj2}    //if we combine objects in this method then objects will create inside another object
console.log(obj3)


// correct way to concatinate objects
const obj4 = {...obj1,obj2}
console.log(obj4)

console.log(obj1.hasOwnProperty(3))


