// Task1
let Employeename = "Usman";
let Salary = 20000;
let experience = 5;
let bonus = 0;

if(experience >= 5){
    bonus = Salary * 0.20;
}else if (experience >= 2){
    bonus = Salary * 0.10;
}else{
    bonus = Salary * 0.05;
}

let finalsalary = Salary +bonus;

console.log("Employee Name:",Employeename);
console.log("Final Salary:", finalsalary);

// Task2

let studentname = "usman";
let age = 25;
let percentage = 75;
if(age >= 17){
    if(percentage >= 60){
        console.log("Admission Approved");   
    }else{
        console.log("Admission Rejected");
        
    }
}else{
    console.log("Admission Rejected");
    
}

// Task3

let choice = 2;
switch (choice){
    case 1:
        console.log("Order Confirmed: Pizza");
        break;
    case 2:
        console.log("Order Confirmed: Burger");
        break;
    case 3:
        console.log("Order Confirmed: Shawarma");
        break;
    case 4:
        console.log("Order Confirmed: Fried Rice");
        break;
    default:
        console.log("Invalid Choice");
}

// Task4

let students = [
    "usman","basha","shaik","suhail","irfan", "fizan","ail","mohan"];
for (let student of students){
    console.log(student);
}
console.log("Total Students:",students.length);

// Task5

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let total = 0;
let expensive = cart[0];

for (let item of cart) {
    console.log(item.product);

    total += item.price;

    if (item.price > expensive.price) {
        expensive = item;
    }
}

console.log("Total Cart Value:", total);
console.log("Most Expensive Product:", expensive.product);

// Task6

let balance = 10000;

function deposit(amount){
    balance += amount;
    console.log("Desposited:", amount);   
}

function withdraw(amount){
    if(amount <= balance){
        balance -= amount;
        console.log("Withdrawn:" ,amount);
    }else{
        console.log("Insufficient Balance:");
        
    }
}

function checkbalance(amount){
    console.log("Current Balance:", balance);

}
deposit(5000);
withdraw(3000);
checkbalance();

// Task7
let age1 = 25;
if(age1 < 5 ){
    console.log("Free Ticket");
}else if(age1 <= 18){
    console.log("Ticket Price: 100");    
}else if(age1 <= 60){
    console.log("Ticket Price: 200");
}else{
    console.log("Ticket Price: 120");
}

// Task8

let amount = 6000;
let discount = 0;
if(amount > 5000){
    discount = amount * 0.20;
}else if(amount > 3000){
    discount = amount * 0.10;
}else if(amount > 1000){
    discount = amount * 0.05;
}

let finalamount = amount - discount;
console.log("Original Amount:", amount);
console.log("Discount:", discount);
console.log("Final Amount:", finalamount);

// Task9

let food = ["Rice","Oil","Sugar","Milk","Egg"]
food.push("Oats");
food.push("Cake");

food.shift();
food.pop();

console.log("Milk Exists:", food.includes("Milk"));
console.log("Final Food List:" , food);

// Task10

let patient = {
    patientName : "Rockzz",
    age3 : 45,
    disease : "Fever",
    doctor : "Dr.Usman"
};

for(let key in patient) {
    console.log(key + ":", patient[key]);
}

let {patientName, age3, disease, doctor} = patient;
console.log(patientName);
console.log(age3);
console.log(disease);
console.log(doctor);

// Task11

function sendSMS(){
    console.log("SMS Sent To Customer");
}

function placeorder(callback){
    console.log("Order Placed Successfully");
    callback();
    
}
placeorder(sendSMS);

// Task12

function* offers(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Task13
let employees = [
    {id:1,name:"Rahul",salary:25000},
    {id:2,name:"Kavin",salary:30000},
    {id:3,name:"John",salary:40000}
];

let totalSalary = 0;
let highest = employees[0];

for (let emp of employees) {
    console.log(emp.name);

    totalSalary += emp.salary;

    if (emp.salary > highest.salary) {
        highest = emp;
    }
}

console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highest.name);

// Task14
let availableSeats = 50;

function bookSeats(seats) {
    if (seats <= availableSeats) {
        availableSeats -= seats;
        console.log(seats + " seats booked");
        console.log("Remaining Seats:", availableSeats);
    } else {
        console.log("Booking Rejected");
    }
}

bookSeats(10);
bookSeats(20);
bookSeats(25);

// Task15

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = prompt("Enter the products");

let total2 = 0;

for (let item of selectedProducts) {
    total += products[item];
}

let gst = total2 * 0.18;
let finalBill = total2 + gst;

console.log("Selected Products:", selectedProducts);
console.log("Total Amount:", total2);
console.log("GST 18%:", gst);
console.log("Final Bill:", finalBill);