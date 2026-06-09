// Task1
let age = Number(prompt("Enter Age"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Task2

let salary = Number(prompt("Enter Salary"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + salary * 0.20;
} else if (salary <= 50000) {
    newSalary = salary + salary * 0.10;
} else {
    newSalary = salary + salary * 0.05;
}

console.log("Old Salary:", salary);
console.log("New Salary:", newSalary);

// Task3
let units = Number(prompt("Enter Units"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Total Bill:", bill);

// Task4
let balance = 10000;
let amount = Number(prompt("Enter Withdrawal Amount"));

if (amount <= balance) {
    balance -= amount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Funds");
}

// Task5
let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// Task6

let recharge = Number(prompt("Enter Recharge Amount"));

if (recharge >= 499) {
    console.log("Netflix Offer");
} else if (recharge >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}

// Task7
let color = prompt("Enter Signal Color");

switch(color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Color");
}

// Task8
let workingDays = Number(prompt("Working Days"));
let presentDays = Number(prompt("Present Days"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance:", attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task9
let ticketPrice = 500;
let tickets = Number(prompt("Number of Tickets"));

let total = ticketPrice * tickets;
let gst = total * 0.05;
let finalAmount = total + gst;

console.log("Total Amount:", total);
console.log("GST:", gst);
console.log("Final Amount:", finalAmount);

// Task10
let foodCost = Number(prompt("Enter Food Cost"));
let finalBill;

if (foodCost > 2000) {
    finalBill = foodCost - (foodCost * 0.10);
} else {
    finalBill = foodCost;
}

console.log("Final Bill:", finalBill);

// Task11
let age1 = Number(prompt("Age"));
let height = Number(prompt("Height"));
let weight = Number(prompt("Weight"));

if (age1 >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight Less Than 55");
        }
    } else {
        console.log("Rejected: Height Less Than 160");
    }
} else {
    console.log("Rejected: Age Less Than 18");
}

// Task12
let m1 = Number(prompt("Mark 1"));
let m2 = Number(prompt("Mark 2"));
let m3 = Number(prompt("Mark 3"));
let m4 = Number(prompt("Mark 4"));
let m5 = Number(prompt("Mark 5"));

let total1 = m1 + m2 + m3 + m4 + m5;
let percentage = total1 / 5;

console.log("Total:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade A+");
} else if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Task13
let time = Number(prompt("Enter Hour (0-23)"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else {
    console.log("Night Shift");
}

// Task14
let age2 = Number(prompt("Age"));
let salary2 = Number(prompt("Salary"));
let experience2 = Number(prompt("Experience"));

if (age2 >= 21 && salary2 >= 25000 && experience2 >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task15
let distance = Number(prompt("Enter Distance"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Fare:", fare);

// Task16
let num = Number(prompt("Enter Number"));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Task17
let length = Number(prompt("Enter Password Length"));

if (length < 6) {
    console.log("Weak");
} else if (length <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}

// Task18
let experience = Number(prompt("Experience"));
let salary3 = Number(prompt("Salary"));

let bonus;

if (experience <= 2) {
    bonus = salary3 * 0.05;
} else if (experience <= 5) {
    bonus = salary3 * 0.10;
} else {
    bonus = salary3 * 0.20;
}

console.log("Bonus:", bonus);

// Task19
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");

// Task20
let degree = prompt("Degree Completed (yes/no)");
let communication = prompt("Communication (good/bad)");
let technicalScore = Number(prompt("Technical Score"));

if (degree.toLowerCase() === "yes") {
    if (communication.toLowerCase() === "good") {
        if (technicalScore >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Technical Score Below 70");
        }
    } else {
        console.log("Rejected: Communication Not Good");
    }
} else {
    console.log("Rejected: Degree Not Completed");
}