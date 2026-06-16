// Task1
const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

const highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);

const firstEmployee = employees.find(emp => emp.salary > 60000);
console.log(firstEmployee);

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

const names = employees.map(emp => emp.name);
console.log(names);

// Task2

function checkAdmission(name, age, percentage) {
  const student = { name, age, percentage };

  if (student.age >= 18 && student.percentage >= 60) {
    return "Admission Approved";
  } else {
    return "Admission Rejected";
  }
}

console.log(checkAdmission("Rahul", 20, 75));

// Task3
const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

// Total Bill
const totalBill = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
console.log(totalBill);

const expensive = cart.reduce((max, item) =>
  item.price > max.price ? item : max
);
console.log(expensive);

const productNames = cart.map(item => item.product);
console.log(productNames);

// Task4
const signal = "red";

switch (signal) {
  case "red":
    console.log("Stop - Fine ₹1000 if violated");
    break;

  case "yellow":
    console.log("Wait - Fine ₹500 if violated");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

// Task5
const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

const passed = students.filter(student => student.mark >= 50);
console.log(passed);

const failed = students.filter(student => student.mark < 50);
console.log(failed);

const grades = students.map(student => ({
  name: student.name,
  grade:
    student.mark >= 90
      ? "A"
      : student.mark >= 75
      ? "B"
      : student.mark >= 50
      ? "C"
      : "F"
}));

console.log(grades);

// Task6
function placeOrder(customerName, ...items) {
  console.log("Customer:", customerName);
  console.log("Items:", items);
  console.log("Total Items:", items.length);
}

placeOrder("Rahul", "Pizza", "Burger", "Fries");

// Task7
let balance = 1000;

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdraw(amount) {
  balance -= amount;
  return balance;
}

function checkBalance() {
  return balance;
}

console.log(deposit(500));
console.log(withdraw(200));
console.log(checkBalance());

// Task8
let bookedSeats = [];

function bookSeat(seatNo) {
  if (bookedSeats.includes(seatNo)) {
    console.log("Seat Already Booked");
  } else {
    bookedSeats.push(seatNo);
    console.log("Seat Booked:", seatNo);
  }
}

bookSeat("A1");
bookSeat("A2");
bookSeat("A1");

for (let seat of bookedSeats) {
  console.log(seat);
}

// Task9
function validateLogin(username, password, email) {
  if (username.includes(" ")) {
    return "Username should not contain spaces";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (!email.includes("@")) {
    return "Invalid Email";
  }

  return "Login Valid";
}

console.log(
  validateLogin("rahul123", "password123", "rahul@gmail.com")
);

// Task10

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    products.forEach(product =>
      console.log(product.title)
    );


    const costlyProducts = products.filter(
      product => product.price > 1000
    );

    console.log(costlyProducts);


    console.log("Total Products:", products.length);
  })
  .catch(error => console.log(error));

//Task10 Async/Await version
async function getProducts() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const products = await response.json();

    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
// Task11
const dob = new Date("2000-08-15");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", days[dob.getDay()]);

// Task12
const plan = "Premium";

const benefits =
  plan === "Mobile"
    ? "1 Mobile Device"
    : plan === "Basic"
    ? "HD Streaming"
    : plan === "Standard"
    ? "2 Devices + Full HD"
    : plan === "Premium"
    ? "4 Devices + Ultra HD"
    : "Invalid Plan";

console.log(benefits);

// Task13
const patients = [
  { id: 1, name: "Rahul", critical: true },
  { id: 2, name: "John", critical: false },
  { id: 3, name: "Kavin", critical: true }
];


const criticalPatients = patients.filter(
  patient => patient.critical
);

console.log(criticalPatients);

const patient = patients.find(
  patient => patient.id === 2
);

console.log(patient);
console.log("Total Patients:", patients.length);

// Task14

const inventory1 = [
  { id: 1, product: "Laptop" }
];

const inventory2 = [
  { id: 2, product: "Mobile" }
];


const mergedInventory = [
  ...inventory1,
  ...inventory2
];

console.log(mergedInventory);

const { id, product } = mergedInventory[0];

console.log(id);
console.log(product);

const updatedInventory = [
  ...mergedInventory,
  { id: 3, product: "Tablet" }
];

console.log(updatedInventory);

// Task15

let group = ["Rahul", "John", "Kavin"];

group.push("Arun");


group.pop();

group.unshift("Admin");

group.shift();

group.splice(1, 0, "David");

console.log(group);
