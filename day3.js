const company = {
  name: "Katakwar Coals",
  owner: {
    name: "Ankit",
    city: "Bhopal",
    age: 23,
  },
};

// const {owner:{name:naam , city }} = company

const info = ({ name,owner: { name: ownerName, age = "0", city = "Unknown" } }) => {
  console.log(`my  name is ${ownerName} and my age is ${age} , I live in ${city} ,I run a business named ${name}`);
};

info(company);
