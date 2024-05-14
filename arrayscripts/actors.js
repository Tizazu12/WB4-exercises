"use strict";
let academyMembers = [

{ memID: 101,name: "Bob Brown",
films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
},
{memID: 142,
  name: "Sallie Smith",
  films: ["A Good Day", "A Better Day"]
},
{
  memID: 187,name: "Fred Flanders",
  films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
},
{ memID: 203,name: "Bobbie Boots",
  films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
},
]
console.log("------------------ Number ID 187-------------")

for (let i= 0;i<academyMembers.length;i++){
  if (academyMembers[i].memID == 187){
console.log(academyMembers[i].name)
  }
}
console.log();

console.log("--------------------------At least three films")

for (let i= 0;i<academyMembers.length;i++){
  if (academyMembers[i].films.length >=3){
console.log(academyMembers[i].name)
  }
}
console.log();

// name that begin with BOB

console.log("-----------------Name that starts with Bob-----------")

// let starsNameWithBob =[];
// const prefix = "Bob";
// for (let i= 0; i < academyMembers.length; i++){
//   let member = academyMembers[i].name;
//   let firstnameIndex = -1;
//   for(let j =0; i < member.name.length; j++){
//     if(member.name[j] === ' '){
//       firstnameIndex = j;
//       break;
//     }
//   }
//   let firstname = 
//   }
let starsNameWithBob = [];
for(let i =0; i < academyMembers.length; i++){
  let name = academyMembers[i].name;

  // I want to check if the first three letters are B o b
  //  let peopleName = ["B", "O","b"];
  //output

  if(name[0] === "B" && name[1]=== "o" && name[2]==="b"){
    // if all of this is true I want to put it inside of my empty "bucket"
    starsNameWithBob.push(name)

  }
}

console.log("Starts with Bob: " + starsNameWithBob);
  console.log()
 // let fisrtName = actorName.indexOf(" ");
  // let fisrtName = actorName.substring(0,actorName.indexOf(" "));
  // if (fisrtName == "Bob"){
  //    starsNameWithBob.push(academyMembers[i].name)
    //  }

  // let starsNeamWithBob =[];
  
  console.log("-----Films that starts with the letter A------------");
  // find films that starts with A
  for (let i= 0;i<academyMembers.length;i++){
          let member = academyMembers[i];
  for(let j = 0; j < member.films.length; j++){
     let film = member.films[j];
  let filmsFristLetters = film.substring(0, 1);
  // console.log(filmsFristLetters);
  if(filmsFristLetters=="A"){

console.log(`${member.name}, ${film}`);
  }
}
  }  
  

