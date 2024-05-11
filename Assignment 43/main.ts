// Assignment # 43

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great (magicians: string[]): string[] {
    let greatMagicians : string[] = [];
    magicians.forEach((magician) => {
  greatMagicians.push(` ${magician} the Great`);

    });

    return greatMagicians
}

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });

}

let greatMagicians = make_great(magicians.slice()); // creates a new modified array.
console.log("original magicians:");
show_magicians(magicians); //shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); //shows modified names