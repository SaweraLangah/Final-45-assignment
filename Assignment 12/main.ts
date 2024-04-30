// Assignment # 12

let names: string[] = ["Sawera", "Hina", "Sana", "Saira", "Mehak"];
//loop
for (let i = 0; i < names.length; i++) {
   console.log(`hello, ${names[i]}! how are you?`);
}

//for each
names.forEach(friend => {
    console.log(`Hi, ${friend}! how are you?`);
});

//for of loop
for (let friendName of names) {
    console.log(`Dear, ${friendName}! how are you?`);
}