const inventory = [
  { type: "Bituminous", price: 5000, quantity: 100 },
  { type: "Anthracite", price: 8000, quantity: 50 },
  { type: "Lignite", price: 2000, quantity: 200 },
];
const name = "John Doe";
const getTotalValue = (price, quantity) => {
 return  price * quantity;
};

const getCategory = (price, name = "Coal") => {
  if (price >= 7000) {
    return name + ": Is Premium";
  }
  if (price <= 5000) {
    return name + ": Is standard";
  }
  return name + ": Is Econony";
};


const report = inventory.map((item,idx)=>{
    const totalValue = getTotalValue(item.price,item.quantity)
    const category = getCategory(item.price,item.type)


    return{
index:idx +1,
type:item.type,
category:category,
totalValue:totalValue

    }

})

console.log(report)