const coalName = ["bilaspur", "amlai", "tansi", "tava", "sarni"];
const price = [5000, 8200, 9000, 9100, 3500];
const quantityInTON = [62, 52, 84, 82, 35];

coalName.push("damua");
price.push(4000);
quantityInTON.push(78);

const upperCase = coalName.map((item) => item.toUpperCase());

const expensiveCoal = price.filter((price) => price > 4000);

const inverntoryValue = price.reduce((total,currentPrice,index)=>{
    return total + (currentPrice * quantityInTON[index])

},0)

const findCoal = coalName.find(item =>item === "bilaspur")

console.log(price);
console.log(quantityInTON);
console.log(inverntoryValue)
console.log("found" ,findCoal)
