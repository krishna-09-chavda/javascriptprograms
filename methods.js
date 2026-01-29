// string method
// length()
// trim() ltrim, rtrim means space remove
// toUpperCase()
//toLowerCase()
// includes()
// slice() minus allow
// substring()  minus not allow
// replace()
// concat()
// split()


let string = " HEllo javascript  World ";
console.log(string);
console.log(string.length);


let trimText = string.trim();
console.log("trim() : ", trimText.length)


console.log("toUpperCAse():",string.toUpperCase());

console.log("toLowerCAse():",string.toLowerCase());

console.log("includes :",string.includes("javascript"));

console.log("indexof : ",string.indexOf("javascript"))

console.log("slice():",string.slice(2,7))
 
console.log("substring():",string.substring(2,8));
console.log("replace():",string.replace("javascript","kishu"));

let extratext = " - HEllO JS"
console.log("concat()",string.concat(extratext));

console.log("split():",string.split(" "));



