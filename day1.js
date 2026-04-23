const company = {
  name: "Katakwar Coal",
  owner: {
    name: "Ankit",
    age: 23,
    contact: {
      phone: "9876543210",
      email: "ankit@coal.com"
    }
  },
  inventory: ["Bituminous", "Anthracite"],
  getOwnerEmail() {
    return this.owner.contact.email
  }
}

// Access karna
console.log(company.owner.name)              // Ankit
console.log(company.owner.contact.phone)     // 9876543210
console.log(company.getOwnerEmail())         // ankit@coal.com