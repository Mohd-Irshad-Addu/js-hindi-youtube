        //we have two ways to declare arrow function --> 1.implicit return 2.explicit return
        //1.implicit return example
// const chai = () => (num1 + num2)
// chai(10,20)
        //1.1 implicit return example (object in implicit function)
// const fun_obj = () => ({username:"virat"})
// console.log(fun_obj())

        //2.explicit return example
        const coffee = (suger,milk) =>{
            return suger+milk
        }
        console.log(coffee(10,20))      