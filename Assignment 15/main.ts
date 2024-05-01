//Assignment # 15

let guestlist: string[] = ["Fatima", "Mahnoor", "Sehrish", "Maheen"];

//print the name who cant make dinner
let unableAttands:string |undefined = guestlist.splice(1,1)[0];

console.log(`${unableAttands} note invited for dinner`);  

//push

guestlist.push("saira");

//print a message 

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited`);

});
