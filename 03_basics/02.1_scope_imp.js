//1.here lets understand how block/scope works
//++++ NOTE : we can access variables from parent function but as a parent function we can not access variables of children function.
7//(means inner function can access variables of outer function BUT outer function can not access variables of inner function)

function elders() {
    const user_name = "irshad"

    function childrens() {
        const website = "youtube"
        console.log(user_name);     //here we are accessing global function's variable, which is valid, and the code will work perfectly.
    }
    // console.log(website);   //here we are trying to access variable from nested local function, which is invalid and this will through an error.(so we have to comment this line)

    childrens()
}
elders()
console.log("");   //for blank space

//2. same scope conditions will apply for if conditions, so lets understand with example.
if (true) {
    let player_name = "virat"
    if (player_name === " virat") {
        let team_name = "rcb"
        console.log(player_name + team_name);
    }
    // console.log(team_name); //we will get an error here, because we are trying to access inner function's variable outside of its scope,(so thats why comment out this line)
}
            // console.log(player_name);   //here we will get an error, because we are trying to access outer function's variable outside of its scope,(so thats why comment out this line)