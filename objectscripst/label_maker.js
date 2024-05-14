"use strict";
let contact = {
  name:"sam",
address:"300 market",
city:"atlanta",
state:"GA",
zip:"30400",
};
function printcontact(contact){
  console.log(contact.name);
  console.log(contact.address)
  console.log(contact.city +' '+ contact.state +' ' + contact.zip)
}
printcontact(contact)