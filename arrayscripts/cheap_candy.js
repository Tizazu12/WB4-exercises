"use strict"
let products = [
  {product: "Gummy Worms", price: 5.79},
  {product: "Plain M&Ms", price: 2.89},
  {product: "Peanut M&Ms", price: 2.89},
  {product: "Swedish Fish", price: 3.79},
  {product: "Sour Patch Kids", price: 7.99},
  {product: "Hershey's Kisses", price: 9.49},
  {product: "Reese's Pieces", price: 13.99},
  {product: "Skittles", price: 8.49},
  {product: "Twizzlers", price: 9.99},
  {product: "Snickers", price: 19.79},
  {product: "KitKat", price: 12.29}
];

  
  for(let i= 0; i < products.length;i++){
    if(products[i].price < 4.00){
 console.log(products[i].product)
  }
}

console.log("-------------")

//let productswithMandM = [];
for (let i = 0;i < products.length; i++ ){
  if (products[i].product.includes("M&M")){
   console.log(products[i].product+":$" +products[i].price)

  }
}
 let foundSwedishFish = [];
for (let i = 0; i < products.length; i++){
  if (products[i].product === "Swedish Fish"){
  
    foundSwedishFish = true;
  }

}
if(foundSwedishFish){
  console.log("Yes, we have Swedish Fish.");
}
else {
  console.log("No, we do not have Swedish Fish.");
}

