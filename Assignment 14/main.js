"use strict";
// Assignment # 14
//Define array of guest
let guestlist = ["Fatima", "Mahnoor", "Sehrish", "Maheen"];
//invite each guest for dinner
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invitied to dinner`);
});
//Map()
//invite guest
let invitations = guestlist.map(guest => `Dear ${guest}, you are cordially invitied to dinner `);
console.log(invitations);
invitations.forEach(invitations => {
    console.log(invitations);
});
