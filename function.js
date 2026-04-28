console.log("Hello function");
// Function declaration
function getEven(nums) {
   let max = null;
   let secondMax = 0;
  for (let num of nums) {
    if (num % 2 === 0) {

      if (num > max) {

        max = num;
        
      }
      if(max > secondMax) {
         secondMax = secondMax
      }
   }
}
console.log(secondMax)  
}
console.log(getEven([3,5,4,6,8]))