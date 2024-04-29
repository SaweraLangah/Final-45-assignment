//assignment # 2

let personName: string="sawera";


//in lowercase
console.log("lowercase:" , personName.toLowerCase());

//in uppercase
console.log("uppercase:" , personName.toUpperCase());

//in titlecase
console.log("titlecase:" , personName.replace(/\b\w/g,c=> c.toUpperCase()));