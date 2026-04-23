let numbers=[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
let mixedArray=[1,"Hey",true,
    {name:"Riha"},[1,2,3]
];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(numbers.length);

//normal function
function greet(){
    console.log("Hello,world!");
}
greet();

//func expression
let divide =function(a,b){
return a/b;
};
console.log(divide(10,2)); //5

//for each with Arrow function 
//array element
let fruits = ["apple", "banana", "guava"];
fruits.forEach((fruit) => console.log(fruit));

let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.map((num) => num * 5);
console.log(squaredArray);

//filter on array
let evenNumbers=[1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers);

let sum=[1,2,3,4,5];
let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 1);
console.log(total);

let students=[
    {name:"Alia",marks:78},
    {name:"Ria",marks:98},
    {name:"Anaya",marks:83}
];

//map to get marks of all students
let marks=students.map(student => student.marks);
console.log(marks);

//filter to get marks greater than 80
let topStudents = students.filter(student => student.marks > 80);
console.log(topStudents);

//reduce to get total of all marks
let totalMarks = students.reduce((acc,student) => acc+ student.marks,0);
console.log(totalMarks);

//mixed object
let mixObject = {
    name: "Rihana",
    age: 23,
    hobbies: ["reading", "travelling", "coding"],
    address: {
        street: "123 Main road",
        city: "New York",
        country: "USA"
    }, // Ensure this comma is here
    greet: function() {
        console.log("Hey!");
    }
}; 


console.log(mixObject);
console.log(mixObject.name);

//object inside array
let people =[
    { name : "Alice" , age: 23},
    {name: "Sia", age: 25},
    {name:"Sneha",age :22}
];
console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);

// for loop on arr of obj
let myStudents = [
    {name: "Alice", age: 23},
    {name: "Shruti", age: 32},
    {name: "Neha", age: 22}
];

for (let student of myStudents) {
    // Standard concatenation
   console.log(student.name + " is " + student.age + " years old");
    // By template literal (using backticks)
    console.log(`${student.name} is ${student.age} years old`);
}