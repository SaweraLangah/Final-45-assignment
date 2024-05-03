//Assignment # 19

let guestlist :string[] = ["Fatima", "Mahnoor", "Sehrish"];

console.log("unfortunately! the new dinner table table wont arrive so we can invite only 2 guest");

guestlist.unshift("sana", "Hina");

//print message updated list

console.log("updated list of guest:", guestlist);

//remove guest from the list
while (guestlist.length > 2) {
    let removeGuest :string | undefined = guestlist.pop();
    if (removeGuest != undefined) {
        console.log(`sorry, ${removeGuest}, we cant invite you`);
    }
}

// print a message to each of the two people stile on your list, letting them know they're still invited

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for the dinner`)
});

//remove 2 names from the list
guestlist.splice(0, guestlist.length)

//print updatedempty list

console.log("updated list of guest:" , guestlist)