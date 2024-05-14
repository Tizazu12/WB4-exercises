"use strict";


let entry1 =  "ETC:4089-L";

let part = entry1;

console.log(getproduactsize (part));

function getsupplier(code){
let supplierIndexEnd = code.indexOf(":");
let supplierName = code.substring(0 , supplierIndexEnd);
return supplierName;
}

function getproductNumber(code){
  let startNumber = code.indexOf(":")
  let end = code.indexOf("-");
  let productNumbe= code.substring(startNumber + 1,end)
  return productNumbe;

}
function getproduactsize(code){
  let sizestart=code.indexOf("-");
  let productsize = code.substring(sizestart +1);
  return productsize;
  //console.log(productsize);
}