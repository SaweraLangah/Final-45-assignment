"use strict";
//Assignmeny # 16
let guestlist = ["Fatima", "Mahnoor", "Sehrish"];
console.log("Great Nwes! we found a bigger table");
//unshift
guestlist.unshift("Saba");
//splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Sara");
//push()
guestlist.push("cheetah");
console.log(guestlist);
//foreach
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner`);
});
