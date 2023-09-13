const mystr = new String("Anushka")

const utr = 2
// console.log(utr.at())

//charCodeAt()
const mystr2 = new String("Hello How are you? ")
const index = 5

console.log(`The character code ${mystr.charCodeAt(index)} is equal to ${mystr2.charAt()}`);

console.log("")//for blank space

//codepointAt()
const icons = '☃★♲';
console.log(icons.codePointAt(2));

console.log("")//for blank space

//concat()
const str1 = "Hello";
const str2 =  "Irshad";

console.log(str1.concat(" ",str2));

console.log("")//for blank space

//endswith()        will check the last value is present in our sentence or not 
const cat = new String("Cats are the best.")
console.log(cat.endsWith("best."))

console.log("")//for blank space

//valueof()
const strobj = new String("foo")
console.log(strobj)
console.log(strobj.valueOf())

console.log("")//for blank space

//split()
const story = "Once upon a time in Mumbai."
const word = story.split(' ')   //IMPORTANT -> here if you give any space between inverted comma, it will form as a complete word.See the example for better understanding.
console.log(word[3])

const letter = story.split('')  //IMPORTANT -> Here if you give no space between inverted comma, it will form as single letter. See the example for better understanding.
console.log(letter[3])

console.log("")//for blank space

//search()
const para = "Who are you?"
const regCheck = /[^\w\s]/g;
console.log(para.search(regCheck))
console.log(para[para.search(regCheck)])

console.log("")//for blank space

//replace()
const para2 = "Once upan a time in a jungle, There was a dog."
console.log(para2.replace('dog','lion'))    //dog will replace by lion
                    //or
const regex = /dog/i
console.log(para2.replace(regex,"lion"));

console.log("")//for blank space
//replaceAll()
const para3 = "Hi Irshad, How are you Irshad"
console.log(para3.replaceAll('irshad','sameer'))    //have to check this, its not working 

console.log("")//for blank space
//repeat()
const msg = "Happy! "
console.log(`irshad is ${msg.repeat(3)}`)








