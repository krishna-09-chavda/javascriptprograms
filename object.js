// object is collcetion of  any type of data.
const  person ={
    name : 'kishu',
    age  : 20,
    hobbies:['skattiong','badminton'],
    greet : function(){
        console.log("hellow");
        
    }
}

// access values from object
console.log(person.name);


console.log(person['age']);


// adding or modifying the data of obj
person.job ="developer"
person.sallary="50000"
console.log(person);
delete person.sallary
console.log(person);



// nested objest
const person1={
    name :'krishna',
    age :20,
    address:{
        city: "keshod",
        zipcode :"362220",
        street :"123 main st."
    } 
}
console.log(person1?.address?.city);

console.log(Object.keys(person1));

console.log(Object.values(person1));

console.log(Object.entries(person1));



