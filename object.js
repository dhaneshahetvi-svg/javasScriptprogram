//object is the collection of any type of data
// const person = {
//     name :'testing',
//     age : 24,
//     hobbies: ['cricket', 'listen music'],
//     greet: function(){
//         console.log("hello")
//     }
// }

//access values from object
// console.log(person.name)
// console.log(person['name'])

//adding or modifying the data of  music

// person.job = "react"
// person.salary = 50000
// console.log(person)

// delete person.salary
// console.log(person)


//nested object

// const person1 ={
//     name: 'hetvi',
//     age: 30,
//     address:{
//         city: "keshod",
//         zipcode:"362220",
//         street: "123 main st."
//     }
// }
// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))

//

const user = {
    name : "user 1",
    role : "Admin",
    designation : "devlpoer",
    age : 20,
    address:{
        city : "keshod",
        zipcode : "362220",
        street : "123 main st."
    }
}
// const {name,age,role} = user
// console.log((name,age,role))

// const{name : profileName,age :profileage} = user
// console.log(profileName,profileage)

const {name, age, role, state = "Gujart"} = user
console.log(name,age,role,state)

const array = [1,2,3]
const moreElements = [... array,4,5,6]
console.log(moreElements)


const originalArray = [1,2,3]
const copiedArray = [... originalArray]
console.log(copiedArray)


const arr1 = [1,2,3]
const arr2 = [4,5,6]
const mergedArray = [...arr1,...arr2]
console.log(mergedArray)

//spred opt. in obj

const user1 = {
    name: "user1",
    city: "keshod",



}
console.log(user1)

const newObj = {
    ...user1,
    role: "react"
}
console.log(newObj)

//copy obj
 const obj1 = {
    name : "hetvi",
    age : "12",
 }
 const obj2 ={
    city: "keshod",
    state: "Gujart",
    age: 30
    

 }
 const obj3 = {...obj1, ...obj2}
 console.log(obj3)