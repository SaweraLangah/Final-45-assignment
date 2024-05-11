 // Assignment # 42

 let magicians: string[] = ["Alice", "David", "Chris"];

 function show_magicians(magicians: string[]) {
    magicians.forEach((magicians) => {
        console.log(magicians);

    });
 }
  function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
  }

  make_great(magicians);  //Modifies the original arry
  show_magicians(magicians);  //shows modified names