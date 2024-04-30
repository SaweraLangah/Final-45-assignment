"use strict";
//Assignment # 11
let names = ["Sawera", "Hina", "Sana", "Saira", "Mehak"];
//loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(name => {
    console.log(name);
});
//for of loop
for (const friendName of names) {
    console.log(friendName);
}
