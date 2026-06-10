// TASK 1 :
const students = [
  { id: 1, name: "Usman", department: "CSE", mark: 95 },
  { id: 2, name: "Rahul", department: "ECE", mark: 82 },
  { id: 3, name: "Aman", department: "EEE", mark: 72 },
  { id: 4, name: "Kiran", department: "CSE", mark: 65 },
  { id: 5, name: "Ravi", department: "MECH", mark: 91 }
];

console.log("Student Names:");
for (let student of students) {
  console.log(student.name);
}

let totalMarks = 0;
for (let student of students) {
  totalMarks += student.mark;
}
console.log("Total Marks:", totalMarks);

console.log("Students Scoring Above 80:");
for (let student of students) {
  if (student.mark > 80) {
    console.log(student.name);
  }
}

console.log("Grades:");
for (let student of students) {
  let grade;
  if (student.mark >= 90) {
    grade = "A";
  } else if (student.mark >= 75) {
    grade = "B";
  } else {
    grade = "C";
  }
  console.log(student.name + " : " + grade);
}



// TASK 2 : 

const employees = [
  { id: 1, name: "Usman", salary: 25000, department: "HR" },
  { id: 2, name: "Rahul", salary: 35000, department: "IT" },
  { id: 3, name: "Aman", salary: 45000, department: "Finance" },
  { id: 4, name: "Kiran", salary: 28000, department: "HR" }
];

console.log("\nEmployee Names:");
for (let emp of employees) {
  console.log(emp.name);
}

let totalSalary = 0;
for (let emp of employees) {
  totalSalary += emp.salary;
}
console.log("Total Salary Expense:", totalSalary);

console.log("Employees earning above 30000:");
for (let emp of employees) {
  if (emp.salary > 30000) {
    console.log(emp.name);
  }
}

function departmentDescription(department) {
  switch (department) {
    case "HR":
      return "Human Resources";
    case "IT":
      return "Information Technology";
    case "Finance":
      return "Finance Department";
    default:
      return "Unknown Department";
  }
}

for (let emp of employees) {
  console.log(emp.name + " : " + departmentDescription(emp.department));
}

function payrollReport(callback) {
  console.log("Generating Payroll Report...");
  callback();
}

payrollReport(function () {
  console.log("Payroll Report Generated Successfully");
});


// TASK 3 : 

const foods = [
  { id: 1, foodName: "Biryani", price: 250, category: "Main Course" },
  { id: 2, foodName: "Pizza", price: 300, category: "Fast Food" },
  { id: 3, foodName: "Burger", price: 150, category: "Fast Food" },
  { id: 4, foodName: "Ice Cream", price: 100, category: "Dessert" }
];

console.log("\nFood Names:");
for (let food of foods) {
  console.log(food.foodName);
}

let totalMenuValue = 0;
for (let food of foods) {
  totalMenuValue += food.price;
}
console.log("Total Menu Value:", totalMenuValue);

console.log("Foods Above ₹200:");
for (let food of foods) {
  if (food.price > 200) {
    console.log(food.foodName);
  }
}

function foodCategory(category) {
  switch (category) {
    case "Main Course":
      return "Full Meal";
    case "Fast Food":
      return "Quick Snack";
    case "Dessert":
      return "Sweet Dish";
    default:
      return "Unknown";
  }
}

for (let food of foods) {
  console.log(food.foodName + " : " + foodCategory(food.category));
}

function orderConfirmation(callback) {
  console.log("Processing Order...");
  callback();
}

orderConfirmation(function () {
  console.log("Order Confirmed Successfully");
});



// TASK 4 :

const movies = [
  { movieName: "Leo", ticketPrice: 200, availableSeats: 50 },
  { movieName: "Pushpa", ticketPrice: 180, availableSeats: 0 },
  { movieName: "Jailer", ticketPrice: 220, availableSeats: 30 }
];

console.log("\nMovie Names:");
for (let movie of movies) {
  console.log(movie.movieName);
}

let totalSeats = 0;
for (let movie of movies) {
  totalSeats += movie.availableSeats;
}
console.log("Total Available Seats:", totalSeats);

console.log("Booking Status:");
for (let movie of movies) {
  if (movie.availableSeats > 0) {
    console.log(movie.movieName + " Booking Available");
  } else {
    console.log(movie.movieName + " House Full");
  }
}

function movieLanguage(movieName) {
  switch (movieName) {
    case "Leo":
      return "Tamil";
    case "Pushpa":
      return "Telugu";
    case "Jailer":
      return "Tamil";
    default:
      return "Unknown";
  }
}

for (let movie of movies) {
  console.log(movie.movieName + " : " + movieLanguage(movie.movieName));
}

function bookingConfirmation(callback) {
  console.log("Generating Ticket...");
  callback();
}

bookingConfirmation(function () {
  console.log("Ticket Booked Successfully");
});


// TASK 5 :

const patients = [
  { patientId: 1, patientName: "Ramesh", age: 65, disease: "Heart" },
  { patientId: 2, patientName: "Suresh", age: 45, disease: "Fever" },
  { patientId: 3, patientName: "Mahesh", age: 72, disease: "Diabetes" },
  { patientId: 4, patientName: "Naresh", age: 30, disease: "Cold" }
];

console.log("\nPatient Names:");
for (let patient of patients) {
  console.log(patient.patientName);
}

console.log("Total Patients:", patients.length);

console.log("Patients Above Age 60:");
for (let patient of patients) {
  if (patient.age > 60) {
    console.log(patient.patientName);
  }
}

function diseaseDepartment(disease) {
  switch (disease) {
    case "Heart":
      return "Cardiology";
    case "Diabetes":
      return "Endocrinology";
    case "Fever":
      return "General Medicine";
    default:
      return "General Ward";
  }
}

for (let patient of patients) {
  console.log(
    patient.patientName + " : " + diseaseDepartment(patient.disease)
  );
}

function appointmentConfirmation(callback) {
  console.log("Booking Appointment...");
  callback();
}

appointmentConfirmation(function () {
  console.log("Appointment Confirmed Successfully");
});

// TASK 6 :

const books = [
  { bookId: 1, bookName: "JavaScript Basics", author: "John", price: 600 },
  { bookId: 2, bookName: "Python Guide", author: "Mike", price: 450 },
  { bookId: 3, bookName: "Java Complete", author: "David", price: 800 },
  { bookId: 4, bookName: "C Programming", author: "James", price: 350 }
];

console.log("Book Names:");
for (let book of books) {
  console.log(book.bookName);
}

let totalBookValue = 0;
for (let book of books) {
  totalBookValue += book.price;
}
console.log("Total Book Value:", totalBookValue);

console.log("Books Above ₹500:");
for (let book of books) {
  if (book.price > 500) {
    console.log(book.bookName);
  }
}

function bookCategory(bookName) {
  switch (bookName) {
    case "JavaScript Basics":
      return "Programming";
    case "Python Guide":
      return "Technology";
    case "Java Complete":
      return "Programming";
    default:
      return "General";
  }
}

for (let book of books) {
  console.log(book.bookName + " : " + bookCategory(book.bookName));
}

function issueBook(callback) {
  console.log("Issuing Book...");
  callback();
}

issueBook(function () {
  console.log("Book Issued Successfully");
});

// TASK 7 : 

const products = [
  { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
  { productId: 2, productName: "Mouse", price: 500, stock: 20 },
  { productId: 3, productName: "Keyboard", price: 1500, stock: 8 },
  { productId: 4, productName: "Monitor", price: 12000, stock: 15 }
];

console.log("\nProducts:");
for (let product of products) {
  console.log(product.productName);
}

let inventoryValue = 0;
for (let product of products) {
  inventoryValue += product.price * product.stock;
}
console.log("Inventory Value:", inventoryValue);

console.log("Products With Stock Less Than 10:");
for (let product of products) {
  if (product.stock < 10) {
    console.log(product.productName);
  }
}

console.log("Stock Status:");
for (let product of products) {
  if (product.stock < 10) {
    console.log(product.productName + " : Low Stock");
  } else {
    console.log(product.productName + " : Available");
  }
}

function productReport(callback) {
  console.log("Generating Product Report...");
  callback();
}

productReport(function () {
  console.log("Product Report Generated");
});

// TASK 8 :

const applicants = [
  { name: "Usman", age: 20, percentage: 85, department: "CSE" },
  { name: "Rahul", age: 17, percentage: 75, department: "ECE" },
  { name: "Aman", age: 19, percentage: 55, department: "EEE" },
  { name: "Kiran", age: 21, percentage: 90, department: "CSE" }
];

console.log("\nApplicant Names:");
for (let applicant of applicants) {
  console.log(applicant.name);
}

let eligibleCount = 0;

console.log("Eligibility Check:");
for (let applicant of applicants) {
  if (applicant.age >= 18 && applicant.percentage >= 60) {
    console.log(applicant.name + " : Eligible");
    eligibleCount++;
  } else {
    console.log(applicant.name + " : Not Eligible");
  }
}

console.log("Total Eligible Students:", eligibleCount);

function departmentName(department) {
  switch (department) {
    case "CSE":
      return "Computer Science";
    case "ECE":
      return "Electronics";
    case "EEE":
      return "Electrical";
    default:
      return "Unknown";
  }
}

for (let applicant of applicants) {
  console.log(applicant.name + " : " + departmentName(applicant.department));
}

function admissionResult(callback) {
  console.log("Generating Admission Result...");
  callback();
}

admissionResult(function () {
  console.log("Admission Result Generated");
});

// TASK 9

const passengers = [
  { passengerId: 1, name: "Usman", seatNumber: 1, ticketPrice: 500 },
  { passengerId: 2, name: "Rahul", seatNumber: 2, ticketPrice: 500 },
  { passengerId: 3, name: "Aman", seatNumber: 3, ticketPrice: 500 }
];

console.log("\nPassenger Names:");
for (let passenger of passengers) {
  console.log(passenger.name);
}

let totalCollection = 0;
for (let passenger of passengers) {
  totalCollection += passenger.ticketPrice;
}
console.log("Total Collection:", totalCollection);

console.log("Occupied Seats:");
for (let passenger of passengers) {
  console.log("Seat No : " + passenger.seatNumber);
}

function busType(seatNumber) {
  switch (seatNumber) {
    case 1:
      return "AC Bus";
    case 2:
      return "Sleeper Bus";
    case 3:
      return "Express Bus";
    default:
      return "Normal Bus";
  }
}

for (let passenger of passengers) {
  console.log(passenger.name + " : " + busType(passenger.seatNumber));
}

function ticketConfirmation(callback) {
  console.log("Generating Ticket...");
  callback();
}

ticketConfirmation(function () {
  console.log("Ticket Confirmed");
});


// TASK 10 

const mobiles = [
  { brand: "Samsung", model: "S24", price: 80000, stock: 5 },
  { brand: "Apple", model: "iPhone 15", price: 90000, stock: 3 },
  { brand: "Redmi", model: "Note 13", price: 18000, stock: 12 },
  { brand: "Realme", model: "12 Pro", price: 25000, stock: 10 }
];

console.log("\nMobile Names:");
for (let mobile of mobiles) {
  console.log(mobile.brand + " " + mobile.model);
}

let totalStockValue = 0;
for (let mobile of mobiles) {
  totalStockValue += mobile.price * mobile.stock;
}
console.log("Total Stock Value:", totalStockValue);

console.log("Mobiles Above ₹20000:");
for (let mobile of mobiles) {
  if (mobile.price > 20000) {
    console.log(mobile.brand + " " + mobile.model);
  }
}

function brandCategory(brand) {
  switch (brand) {
    case "Samsung":
      return "Android Premium";
    case "Apple":
      return "iOS Premium";
    case "Redmi":
      return "Budget Android";
    case "Realme":
      return "Mid Range Android";
    default:
      return "Unknown";
  }
}

for (let mobile of mobiles) {
  console.log(mobile.brand + " : " + brandCategory(mobile.brand));
}

function salesReport(callback) {
  console.log("Generating Sales Report...");
  callback();
}

salesReport(function () {
  console.log("Sales Report Generated Successfully");
});