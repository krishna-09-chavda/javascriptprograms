// // object is collcetion of  any type of data.
// const  person ={
//     name : 'kishu',
//     age  : 20,
//     hobbies:['skattiong','badminton'],
//     greet : function(){
//         console.log("hellow");
        
//     }
// }

// // access values from object
// console.log(person.name);


// console.log(person['age']);


// // adding or modifying the data of obj
// person.job ="developer"
// person.sallary="50000"
// console.log(person);
// delete person.sallary
// console.log(person);



// // nested objest
// const person1={
//     name :'krishna',
//     age :20,
//     address:{
//         city: "keshod",
//         zipcode :"362220",
//         street :"123 main st."
//     } 
// }
// console.log(person1?.address?.city);

// console.log(Object.keys(person1));

// console.log(Object.values(person1));

// console.log(Object.entries(person1));



// const user ={
//     name : "user 1",
//     role : "admin",
//     designation: "developer",

//     age :20,
//     addrress:
//     {
//         city:"keshod",
//         zipcode:"362220",
//         street : "123 main st."
//     }
// }
// // const {name,age,role} = user
// // console.log(name,age,role);


// const{ name: profileName , age :profileage}= user
// console.log(profileName,profileage);

// const {
//     name,age,role,state="gujarat"
// }=user
// console.log(name,age,role,state);


// //copy array
// const array =[1,2,3]
// const moreElements=[...array,4,5,6]
// console.log(moreElements);
// const originalArray =[1,2,3]
// const copiedArray=[... originalArray]
// console.log(copiedArray);

// //merge array
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const mergeArray =[...arr1,...arr2]
// console.log(mergeArray);


//  spread opt. in obj

const user1=
{
    name :"krishna",
    city:"keshod"

}
console.log(user1);
const newobj={
    ...user1,

    role:"React developer"
}
console.log(newobj); 


// copy obj

// const user2=
// {
//     name:"user2"

// }
// const user3={
//     ...user2
// }
// console.log(user3);




// merge object
const obj1 = {
    name : "obj1",
    age : 40
}
const obj2 = {
    age :20
}
const obj3={...obj1,...obj2}
console.log(obj3);






 