

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// live forms 

const user = { name: "Ankit", age: 23, city: "Bhopal" }
// const user2 = 

Object.entries(user).forEach(([key,value])=>{
  console.log(`${key} : ${value}`)
})