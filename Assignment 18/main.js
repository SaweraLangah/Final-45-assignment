"use strict";
//Assignment # 18
let placeToVisit = ["paris", "new york", "rome", "italy", "china"];
//print in original order
console.log("original order:", placeToVisit);
//print array in alphabetical order without modifying the acutal list.
console.log("Alphabetical order:", placeToVisit.slice().sort());
//array is still in its original order by printing it.
console.log("original order:", placeToVisit);
//print array in reverse alphabetical orderwithout changing the order of the original list.
console.log("reverse order:", placeToVisit.slice().sort().reverse());
//array is still in its original order by printing it again.
console.log("original order:", placeToVisit);
//Reverse the order of your list . Print the array to show that its order has changed.
console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);
//Reverse the or(der of your list again. Print the list to show it's bact to it's original order.
console.log("original order:", placeToVisit.sort());
placeToVisit.reverse();
console.log(placeToVisit);
//Sort to change array so its stored in reverse alphabetical order. Print the array to show that its order has been changed.
console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);
//sort to change your array so its stored in reverse alphabeticalorder. Print the list to show back to its original order.
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
