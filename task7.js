// Task1
let signal = prompt("Enter the signal colour")

switch (signal){
    case "Red":
        console.log("Stop");
        break;

    case "Green":
        console.log("Go");
        break;

    case "Yellow":
        console.log("Get Ready");
        break;
    
    default:
        console.log("Invalid signal");
}

// Task2

for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}

// Task3
let balance = 10000;

while (balance > 0){
    balance -=500;
    console.log(`Remaining Balance: ${balance}`);
    
}

// Task4
let age = 20;
let percentage = 80;
let exampassed = true;

if(age >= 18){
    if(percentage >= 70){
        if(exampassed) {
            console.log("Admission Approved");
            
        }else{
            console.log("Rejected: Entrance Exam is not passed");
            
        }
    }else{
        console.log("Rejected: Percentage Below 70");
        
    }
}else{
    console.log("Rejected : Your age is not accepted");
    
}

// Task5
function deliveryStatus(customerName, foodItem, deliveryAddress) {
  console.log(
    `Hello ${customerName}, your order of ${foodItem} has been delivered to ${deliveryAddress}.`
  );
}

deliveryStatus(
  "Usman",
  "Chicken Biryani",
  "Hyderabad"
);

// Task6
function calculatesalary(basicsalary){
    return basicsalary;
}

function calculatebonus(salary){
    return salary + ( salary * 20/100);

}

let salary = calculatesalary(50000);
let totalsalary = calculatebonus(salary);

console.log("Basic Salary:", salary);
console.log("Salary with bonus:", totalsalary);

// Task7

function applyDiscount(amount, callback) {
  let discountedAmount = amount - (amount * 10 / 100);

  callback(discountedAmount);
}

function generateInvoice(finalAmount) {
  console.log("Invoice Generated");
  console.log("Final Amount: ₹" + finalAmount);
}

applyDiscount(10000, generateInvoice);

// Task8

function* offersGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let offers = offersGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task9

let scienceStudents = [
  "Rahul",
  "Priya",
  "Arjun"
];

let commerceStudents = [
  "Kiran",
  "Anjali",
  "Ravi"
];

let allStudents = [
  ...scienceStudents,
  ...commerceStudents
];

console.log(allStudents);

// Task10
function calculateMarks(studentName, ...marks) {
  let total = 0;

  for (let mark of marks) {
    total += mark;
  }

  console.log("Student:", studentName);
  console.log("Total Marks:", total);
}

calculateMarks(
  "Usman",
  85,
  90,
  78,
  88,
  92
);

// Task11

let employee = {
  name: "Usman",
  department: "IT",
  salary2: 50000,
  experience: 3
};

let { name, department, salary2, experience } = employee;

console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary2);
console.log("Experience:", experience);

// Task12

let products = [
  { name: "Laptop", price: 55000, category: "Electronics" },
  { name: "Mobile", price: 25000, category: "Electronics" },
  { name: "Mouse", price: 800, category: "Accessories" },
  { name: "Keyboard", price: 1500, category: "Accessories" }
];

let expensiveProducts = products.filter(product => product.price > 5000);

console.log(expensiveProducts);

// Task13

let customers = [
  { name: "Rahul", purchaseAmount: 20000 },
  { name: "Priya", purchaseAmount: 35000 },
  { name: "Arjun", purchaseAmount: 60000 },
  { name: "Kiran", purchaseAmount: 80000 }
];

let premiumCustomer = customers.find(
  customer => customer.purchaseAmount > 50000
);

console.log(premiumCustomer);

// Task14

let expenses = [10000, 15000, 20000, 5000, 12000];

let totalExpense = expenses.reduce(
  (total, expense) => total + expense,
  0
);

console.log("Total Company Expense: ₹" + totalExpense);

// Task15

let players = [
  { name: "Player1", age: 20 },
  { name: "Player2", age: 22 },
  { name: "Player3", age: 19 },
  { name: "Player4", age: 25 }
];

let allAdults = players.every(
  player => player.age > 18
);

console.log("All Players Above 18:", allAdults);

// Task16

let candidates = [
  {
    name: "Rahul",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Priya",
    skills: ["Python", "Java"]
  },
  {
    name: "Arjun",
    skills: ["React", "Node.js"]
  },
  {
    name: "Kiran",
    skills: ["SQL", "MongoDB"]
  }
];

let knowsReact = candidates.some(
  candidate => candidate.skills.includes("React")
);

console.log("At least one candidate knows React:", knowsReact);


// Task17

let mobileNumber = "9876543210";

if (
  mobileNumber.length === 10 &&
  (mobileNumber.startsWith("6") ||
   mobileNumber.startsWith("7") ||
   mobileNumber.startsWith("8") ||
   mobileNumber.startsWith("9"))
) {
  console.log("Valid Mobile Number");
} else {
  console.log("Invalid Mobile Number");
}

// Task18

let title = "Learn JavaScript Complete Course";

let slug = title
  .toLowerCase()
  .split(" ")
  .join("-");

console.log(slug);

// Task19

let employees = [
  { name: "Rahul", salary: 50000 },
  { name: "Priya", salary: 75000 },
  { name: "Arjun", salary: 60000 },
  { name: "Kiran", salary: 45000 }
];

// Highest to Lowest
employees.sort((a, b) => b.salary - a.salary);

console.log("Highest to Lowest Salary");
console.log(employees);

// Lowest to Highest
employees.sort((a, b) => a.salary - b.salary);

console.log("Lowest to Highest Salary");
console.log(employees);

// Task20

let movies = [
  "Pushpa 2",
  "Salaar",
  "RRR",
  "KGF 2"
];

let bookingIds = movies.map(
  (movie, index) => ({
    movieName: movie,
    bookingId: "MOV" + (index + 1)
  })
);

console.log(bookingIds);




