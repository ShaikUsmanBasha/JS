// Task1

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

let grade =
  marks >= 90 ? "Grade A" :
  marks >= 75 ? "Grade B" :
  marks >= 60 ? "Grade C" :
  "Grade D";

console.log("Result:", result);
console.log("Grade:", grade);

// Task2

let salary = 29000;
let bonus = salary * 0.10;
let finalsalary = salary + bonus;

console.log("Original Salary:", salary );
console.log("Bonus:", bonus);
console.log("Final salary:", finalsalary);

// Task3

let email = "admin@gmail.com";
let password = "12345";

if(email === "admin@gmail.com" && password === "12345"){
    console.log("Login Access");
}else{
    console.log("Login Failed");
}

// Task4

let price = 2000;
let Finalamount = price > 1000 ? price-(price * 20/100):price;
console.log("Original Price:", price);
console.log("Final Amount:", Finalamount);

// Task5

let produts = ["Laptop", "Mobile", "Mouse", "Keyboard"];
console.log("First Produts" ,produts[0]);
console.log("Last Produts",produts[produts.length-1])
console.log("Total Produts", produts.length);

// Task6


let employee = {
    name:"Naveen",
    department:"Development",
    salary:30000
}
console.log("Employee Details:", employee);
console.log("Employee Name:", employee.name);
console.log("Employee salary:", employee.salary);

// Task7

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalbill = shirt + pant + shoe ;
let discount = totalbill * 0.10;
let finalamount = totalbill - discount;

console.log("Total bill:", totalbill);
console.log("Discount:", discount);
console.log("Final amount:", finalamount);

// Task8

let age = 19;
if(age >= 18){
    console.log("Eligible for voting");

}else{
    console.log("Not Eligible");
}

// Task9

let a = 10;

a++;
console.log("After a++:",a);
++a;
console.log("After ++a:",a);
a--;
console.log("After a--:",a);
--a;
console.log("After --a:",a);

// Task10
let isPresent = true;
let completedTask = true;

if(isPresent && completedTask){
    console.log("Eligible for salary");

}else{
    console.log("Not Eligible");
}

// Bonus Company-Level Task
// Employee Management Console App

let employee1 = {
    id:101,
    name:"John",
    department:"Development",
    salary:35000,
    experience:2
}
console.log("Employee ID:", employee1.id);
console.log("Employee Name :",employee1.name);
console.log("Department:", employee1.department);
console.log("Salary:",employee1.salary);
console.log("Experience:",employee1.experience);

let bonus1 = employee1.salary * 0.10;
let finalsalary1 = employee1.salary + bonus1;

console.log("Bonus:",bonus1);
console.log("Final salary:",finalsalary1);

let performancestatus = employee1.experience >= 2 ? "Good":"Average";
console.log("Performance Status:", performancestatus);