const user ={
    username:"irshad",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to the board.`);     //here THIS refers to the current context which is nothing but user.username
        console.log(this);
    }
}
user.welcomeMsg()

    //after modifying object property
user.username="virat"
user.welcomeMsg()

console.log(this);      //here if we print THIS, we will get empty object, because in global we have nothing.(if you print THIS in browser, we will get windows result.)
console.log("");    //blank space

    //+++ important NOTE
    //lets check THIS keyword will work in function or not
function msg(){
    let a="virat"
    console.log(this.a);        //i am trying to print a with the help of THIS keyword.(which will not work.)
}
msg();