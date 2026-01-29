// // // string method
// // // length()
// // // trim() ltrim, rtrim means space remove
// // // toUpperCase()
// // //toLowerCase()
// // // includes()
// // // slice() minus allow
// // // substring()  minus not allow
// // // replace()
// // // concat()
// // // split()


// // let string = " HEllo javascript  World ";
// // console.log(string);
// // console.log(string.length);


// // let trimText = string.trim();
// // console.log("trim() : ", trimText.length)


// // console.log("toUpperCAse():",string.toUpperCase());

// // console.log("toLowerCAse():",string.toLowerCase());

// // console.log("includes :",string.includes("javascript"));

// // console.log("indexof : ",string.indexOf("javascript"))

// // console.log("slice():",string.slice(2,7))
 
// // console.log("substring():",string.substring(2,8));
// // console.log("replace():",string.replace("javascript","kishu"));

// // let extratext = " - HEllO JS"
// // console.log("concat()",string.concat(extratext));

// // console.log("split():",string.split(" "));


// // // array methods
// // // push() add element in last
// // // pop()remove element in last
// // // shift()remove element
// //unshift()add element first
// // // concat() 
// // // includes()
// // // indexof()
// // // splice()
// // // slice()
// // // join()
// // // delete() delet two array and return new space
// // // map() using link for loop
// // // filter() using like for loop with condition
// // // find()
// // // forEach()
// // // sort()
// // // reverse()
// // // flat () nested array to flat array


//  let arr=['one','two','three']
//  console.log("defalut array:",arr);
//  console.log("length():",arr.length);

//  //console.log("push():",arr.push("new added element"));
//  arr.push("new added element")
//  console.log ("array after push:",arr)

 
//  arr.pop();
//  console.log("array after pop:", arr);
 
//  arr.unshift("first element:")
//  console.log('array after unshift:',arr);

//  arr.shift()
//  console.log('array after shift:',arr);

//  let newArr =["str 1", "str 2"];
//  let mixedArr = arr.concat(newArr);
//  console.log("default array after concat:",arr)
//  console.log("array after concat:",mixedArr);
 
//  console.log("include():", arr.includes("three"));

//  console.log("indexof():" ,arr.indexOf("one"));

//  console.log("slice(():",arr.slice(2,3));
//  //console.log("splice():",arr.splice(2,3));
 
//  console.log("old array:", arr);
//  console.log("join():",arr.join(", "));


//  delete arr[2]
//  console.log(arr);

console.log("Array iteration method:");
let numbers = [1,2,3,4,5,6,]
console.log("map :", numbers.map(num => num*3))
console.log("after map old array:",numbers);
console.log("filter:",numbers.filter (num=>num>2));

console.log("filter map old array:",numbers);

console.log("forEach:");
numbers.forEach(num => console.log(num))




let num=[3,4,5,6,2,1]
console.log("sort():", num.sort());


console.log("reverse():", num.reverse());


 let nestedArray=[1,2,[3,4],[5,6]]
console.log("default nested array:", nestedArray);
let flatArray = nestedArray.flat()
console.log("flat Array", flatArray);











 
 
 
 
 
 

 
 
 




