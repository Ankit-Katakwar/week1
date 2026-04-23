const user = {
  name: "Ankit",
  age: 23,
  city: "Bhopal",
  role: "developer"
}

// Basic destructuring
const { name, age } = user
console.log(name) // Ankit

const { name: userName, age: userAge } = user
console.log(userName) // Ankit
console.log(userAge)  // 23

const { name: n, salary = 50000 } = user
console.log(salary) 

const company = {
  name: "Katakwar Coal",
  owner: {
    name: "Ankit",
    city: "Bhopal"
  }
}

const { owner: { name: ownerName, city } } = company
console.log(ownerName) 
console.log(city)      

const printUser = ({ name, age, city = "Unknown" }) => {
  console.log(`${name}, ${age}, ${city}`)
}

printUser(user) 