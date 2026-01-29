let student={
    name:"firstname",
    email:" USER@GMAIL.COM ",
    course : "JavaScript ,React,Node",
    marks : [45,76,60,90,33],
    hobbies : ["music","cricket","reading"],
    address : ["india",["gujarat","ahmedabad"]]
};
// string operations
// removve extra spaces fro, name ans convert it to uppercase



console.log(student.name.trim().toUpperCase());

//email to lowercase
console.log(student.email.toLowerCase());


//cource include
console.log(student.course.includes("react"));


//find inddex
console.log("indexofNode : ",student.course.indexOf("Node"))

// replace "javascrtipt" with js//

let course = "javascript";
console.log(course.replace("javascript" , "js"));


//convert cource string into array//
let course1 = "Math,Physics,Chemistry";
console.log(course1.split(","));

//display the length of the student name.//

let name ="krishna chavda";
console.log("length():,",name.length);

 //aarray operation//

 //add swimming to hobbies//
 let hobbies =["dancing","singing"];
 console.log("push():",hobbies.push("swimming"));
 
 //remove the last hobby//  

 let hobbies1 =["dancing","singing","swimming"];
 console.log("pop():",hobbies1.pop(" "));
 


 //add "drawing" at the begining og the hobbies
   let hobbies2 =["dancing","singing"];
   hobbies2.unshift("drawing");
   console.log("array after unshift:" ,hobbies2 );

   


   //remove the first hobbies

   let hobbies3 =["drawing","dancing","singing"];
   hobbies3.shift( );
   console.log("array after shift:" ,hobbies3 );
   

   //merge hoobies  with course array
   let courseArr = student.course.split(",")
let mergedArr = [...student.hobbies,...courseArr]
console.log("after merge : ",mergedArr);

//check if "react" exists in course array//

console.log("React exists in course array ? ",student.course.includes("React"));


//find index of "js" in course array
console.log("Index of JS in course array : ",student.course.indexOf("JS"));


// extract first two mark
let sliceMark = student.marks.slice(0,2)
console.log("first two marks : ",sliceMark);


// remove one failed  subject mark(less then 40) usingg spice

let failed = student.marks.filter(m => m < 40)
let index = student.marks.indexOf(failed[0])
let result = student.marks.splice(index,1)
console.log("after remove the failed : ",student.marks);

//covert hobbies  array into string

let hobbiesStr = student.hobbies.join(", ")
console.log("after convert to string : ",hobbiesStr);



//-----array iteration method-----

//add 5 mark to each
student.marks = student.marks.map(m => m + 5)
console.log("add 5 mark to each : ",student.marks);

//get only pass mark
student.marks = student.marks.filter(m => m >= 40)
console.log("get only pass mark : ",student.marks);

//find the first mark above 80
let findFirst = student.marks.find(m => m > 80)
console.log("get first mark above 80 : ",findFirst);

//foreach to print hobbies
console.log("hobbies using foreach : ");
student.hobbies.forEach(h => console.log(h))

//sort the marks
console.log("after sorting the marks : ",student.marks.sort());

//reverse the mark order
console.log("after reverse the marks order : ",student.marks.reverse());

//flatten the address
console.log("address before the flat : ",student.address);
student.address = student.address.flat()




//add property 


let failedMark = student.marks.filter(m => m < 40)
student.result = failedMark.length === 0 ? "pass" : "fail"
console.log("reault : ",student.result);
console.log("final student object : ",student);

