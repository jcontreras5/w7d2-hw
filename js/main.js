//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

//Need to come back to this problem to finish it.
function show_food(obj){
    for (let i = 0; i < Object.keys(obj).length; i++){
        if(Array.isArray(Object.values(obj)[i])==true){
            console.log(Object.entries(obk[i])
            }else{
            console.log(Object.values(obj)[i]);
        }
    }
}


// function show_food(obj){
//     for (let i = 0; i < Object.keys(obj).length; i++){
//         if(Array.isArray(Object.values(obj)[i])==true){
//             for(let j=0;j<Object.values(obj)[i][j].length;j++){
//                 console.log()
//             }
//         }else{
//             console.log(Object.values(obj)[i]);
//         }
//     }
// }

console.log(show_food(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/



// Create our Person Prototype
class Person{
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    printInfo = ()=>{
        return `Name:${this.name} \n Age:${this.age} `;}
    
// Use an arrow to create the printInfo method
    addAge =(num)=>{
        let new_age=this.age + num
        this.age = new_age
        return `${this.name} is now ${this.age} years old`
    }

}

let x= new Person('James',22)
let y= new Person('Xavi',42)

console.log(x.printInfo())
console.log(y.printInfo())

console.log(x.addAge(4))
console.log(x.addAge(6))


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const lengthDet=(string)=>{
    return new Promise((resolve,reject)=>{
        if (string.length>10){
            resolve('Big Word')
        }else{
            reject('Small Number')
        }
    })
    
}

lengthDet('Yellow')

//resolve
.then((result)=>{
    console.log(`string is ${result}`)
})

//reject
.catch((error)=>{
    console.log(`string is ${error}`)
})