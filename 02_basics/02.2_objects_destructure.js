//destructure is a process of converting lengthy name of a key into short name
const test_obj = {
    name:"siraj",
    play_for_royal_challengers:true
}

const {play_for_royal_challengers : play}=test_obj  //here we are temporary converting play_for_royal_challengers TO play in order to access easily.
console.log(play)