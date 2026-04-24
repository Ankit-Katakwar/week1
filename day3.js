const company = {
  name: "Katakwar Coal",
  owner: {
    name: "Ankit",
    city: "Bhopal",
  },
};

// Destructuring
// const {name:businessName,owner:{name:ownerName , city}} = company

// console.log(ownerName)
// console.log(businessName)

function greet({ name:businessName,owner: { name: ownerNaam, city } }) {
  console.log(`My name is ${ownerNaam} and I live in ${city} also I run a business called ${businessName}`);
}

greet(company);
