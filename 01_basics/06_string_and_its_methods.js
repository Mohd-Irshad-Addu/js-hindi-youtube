const nameOne = "salma"
const empid = 232

// console.log(nameOne + " " + nameTwo) 
// good practice to concatinate two or more strings.
console.log(`Hi my name is ${nameOne} and my id is ${empid}`)

console.log("")//for blank space

//now lets know to define a string in a different way
const nameTwo = new String("Asif")
const empid2 = new String(455)

//now lets do check some string methods
const testName = new String("Anushka")
console.log(testName.length)
console.log(testName.toUpperCase())
console.log(testName.charAt(2)) //to check what charecter is at index 2

console.log("")//for blank space

//substring method
const newName = testName.substring(0,4) //here we are giving 0 to 4 means takes letters from 0 to 4 index.
console.log(newName)    //this will create a new string from existing one

console.log("")//for blank space

//slicing on Strings
console.log(testName.slice(2,6))

console.log("")//for blank space

//trim() method use to remove spaces
const city="   utkoor   "
console.log(city)
console.log(city.trim())       
console.log(city.trimStart())   //this will remove space from start
console.log(city.trimEnd()) //this will remove space from end

console.log("")//for blank space

//to replace something in string
const url="https//www.facebook%irshad.com"
console.log(url)
console.log(url.replace('%',"_"))

console.log("")//for blank space

//to check letters or words are included in our string or not
const story ="He is a man"
console.log(story.includes("He"))   //if "He" founds, it will return true.
