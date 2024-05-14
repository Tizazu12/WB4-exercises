"use strict";
let lunch = [
  
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
  ];
  function totalbill(order){
    let sum = 0;
    let numorder= order.length;
    for (let i = 0; i < numorder; i++){
      sum += order[i].price;
    }
  

    let tax = sum *.08;
    let tip = .18 * sum;
    let totalDue = sum+ tax +tip;
    return totalDue.toFixed(2);


  }
  console.log(totalbill(lunch));
  
  //console.(lunch))
