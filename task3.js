// Task1
let basicsalary = 25000;
let HRA = basicsalary * 0.20;
let bonus = basicsalary * 0.10;
let totalsalary = basicsalary + HRA + bonus
let tax = totalsalary * 0.05;
let finalsalary = totalsalary - tax; 

console.log("Task1");
console.log("Basic Salary:", basicsalary);
console.log("HRA:",HRA);
console.log("Bonus:",bonus);
console.log("Tax:",tax) 
console.log("Final Salary:",finalsalary);

// Task2
// let marks = prompt("Enter your marks");
let marks = 85;
console.log("Task2");
if(marks >= 90 && marks <= 100){
    console.log("Grade A+");
}else if(marks >= 80){
    console.log("Grade A");
}else if(marks >= 70){
    console.log("Grade B");
}else if(marks >= 60){
    console.log("Grade C");
}else{
    console.log("Fail");
}

// Tak3

let username = "admin";
let password = "12345";
console.log("Task3");

if(username === "admin"){
    if(password === "12345"){
        console.log("Login Success");
    }else{
        console.log("Invalid Password");
    }
}else{
    console.log("Invalid username");
}

// Task4
let balance = 5000;
let withdrawal = prompt("Enter the money:");
console.log("Task4");

if(withdrawal > balance){
    console.log("Insufficient balance");
}else{
    balance -= withdrawal;
    console.log("Withdrawal Sucess");
    console.log("Remaining balance:", balance);
}

// Task5
let purchase = 12000;
let discount = 0;
console.log("Task5");
if(purchase >= 10000){
    discount = purchase * 0.20
}else if(purchase >= 5000){
    discount = purchase*0.10
}else if(purchase >=2000){
    discount = purchase * 0.05
}

let finalamount = purchase- discount

console.log("Original Amount:", purchase);
console.log("Discount:", discount);
console.log("Final Amount:",finalamount );

// Task6
let helmet = false;
let license = false;
console.log("Task6");

if(!helmet && !license){
    console.log("Fine:3000");
}else if(!helmet){
    console.log("Fine:1000");
}else if(!license){
    console.log("Fine:2000");
}else{
    console.log("No Fine");
}

// Task7

let attendance = ["P","P","A","P","A","P","P"];

let present = 0;
let absent = 0;

for(let i = 0; i< attendance.length; i++){
    if(attendance[i] === "P"){
        present++;
    }else{
        absent++;
    }
}

console.log("Task7");
console.log("Present Days:", present);
console.log("Absent Days:" , absent);

// Task8
let product = {
  productName : "Laptop",
  price : 50000,
  stock : 10
};

console.log("Task8");
for( let key in product){
    console.log(key + ":" + product[key]);
}

// Task9
let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
} else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("\nTask 9");
console.log("Distance :", distance, "KM");
console.log("Total Fare : ₹" + fare);

// Task 10
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("\nTask 10");


console.log("Employees:");
for (let emp of employees) {
    console.log(emp);
}


let highest = employees[0];

for (let emp of employees) {
    if (emp.salary > highest.salary) {
        highest = emp;
    }
}

console.log("Highest Salary Employee :", highest);

let lowest = employees[0];

for (let emp of employees) {
    if (emp.salary < lowest.salary) {
        lowest = emp;
    }
}

console.log("Lowest Salary Employee :", lowest);


console.log("Total Employees :", employees.length);

let total = 0;

for (let emp of employees) {
    total += emp.salary;
}

console.log("Total Salary Expenditure :", total);
