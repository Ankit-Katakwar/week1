const user = { name: "Ankit", age: 23 } 

const userCopy = {...user}
const extras = {city:"Bhopal",pet:true}

const fullUser = {...user , ...extras}

const update = {...user, name:"Ishit"}
user.name = "aman"

const user2 ={name:"vidit",age:32,location:{
  state:"M.P",
  city:"Pipariya",
  pincode:"461775"
}}

// const copyUser2 = {...user2} 

// copyUser2.name = "haggu"
// copyUser2.location.city = "Bhopal"


const deepCopyUser2 = JSON.parse(JSON.stringify(user2))

deepCopyUser2.location.city = "delhi"


// console.log(fullUser)
// console.log(update)
// console.log(user)
// console.log(user2)
// console.log(deepCopyUser2)






