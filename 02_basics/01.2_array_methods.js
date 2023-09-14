const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]


        /********  lets join two arrays *******************/

// marvelHeros.push(dcHeros)       //this will create sub array inside an array
// console.log(marvelHeros)

    /****  best way to join two arrays *************/ //we can only join two arrays
    
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros)
    //ANOTHER BEST WAY TO JOIN TWO OR MORE ARRYS IS -> //here we can join more than two arrays.
const testHeros = ["shaktiman","virat"]
const allNewHeros = [...marvelHeros,...dcHeros,...testHeros]
console.log(allNewHeros)