// Assignment # 43
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push(" ".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice()); // creates a new modified array.
console.log("original magicians:");
show_magicians(magicians); //shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); //shows modified names
