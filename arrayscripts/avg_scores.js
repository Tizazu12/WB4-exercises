"use strict"
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getaverage(Scores) {
  let sum = 0;
  for (let i = 0; i < Scores.length; i++) {
    sum += Scores[i];
  }
  let average = sum / Scores.length;
  return average;
}
//function(sum,value){
//return sum +value;
//,0)/Scores.length;
console.log(getaverage(myScores));
console.log(getaverage(yourScores));