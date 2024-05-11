"use strict";
// Assignment # 42
let magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); //Modifies the original arry
show_magicians(magicians); //shows modified names
