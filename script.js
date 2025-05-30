// Exercise 1
let language = "JavaScript";
document.getElementById("message1").textContent = "I am learning JavaScript!";

// Exercise 2
function greet(name) {
    return "Hello, " + name + "!";
}

function updateGreeting() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        name = "Guest";
    }
    let greeting = greet(name);
    document.getElementById("message2").textContent = greeting;
}

// Exercise 3
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function checkNumber() {
    let number = parseInt(document.getElementById("numberInput").value);
    if (isNaN(number)) {
        document.getElementById("message3").textContent = "Please enter a valid number";
    } else {
        let result = checkEvenOdd(number);
        document.getElementById("message3").textContent = `${number} is ${result}`;
    }
}

// Exercise 4
function startCountdown() {
    let startNumber = parseInt(document.getElementById("countdownInput").value);
    if (isNaN(startNumber) || startNumber < 1 || startNumber > 10) {
        document.getElementById("message4").textContent = "Please enter a number between 1 and 10";
        return;
    }
    
    let countdown = "";
    for (let i = startNumber; i >= 1; i--) {
        countdown += i + " ";
    }
    countdown += "Boom!";
    document.getElementById("message4").textContent = countdown;
}

// Exercise 5
let colors = [];

function addColor() {
    let color = document.getElementById("colorInput").value;
    if (color.trim() !== "") {
        colors.push(color);
        document.getElementById("colorInput").value = "";
        showColors();
    }
}

function showColors() {
    let colorList = colors.join(" ");
    document.getElementById("message5").textContent = colorList || "No colors added yet";
}

// Task 1: Greet Me
function task1() {
    let language = "JavaScript";
    console.log("I am learning JavaScript!");
    document.getElementById("console1").textContent = "I am learning JavaScript! (Check browser console)";
}

// Task 2: Create a Greeting Function
function task2() {
    function greet(name) {
        return "Hello, " + name + "!";
    }
    let name = document.getElementById("nameInput").value || "Guest";
    let greeting = greet(name);
    console.log(greeting);
    document.getElementById("console2").textContent = greeting;
}

// Task 3: Even or Odd
function task3() {
    let number = parseInt(document.getElementById("numberInput").value);
    if (isNaN(number)) {
        document.getElementById("console3").textContent = "Please enter a valid number";
        return;
    }
    let result = number % 2 === 0 ? "Even" : "Odd";
    console.log(result);
    document.getElementById("console3").textContent = result;
}

// Task 4: Countdown Timer
function task4() {
    let startNumber = parseInt(document.getElementById("countdownInput").value);
    if (isNaN(startNumber) || startNumber < 1 || startNumber > 10) {
        document.getElementById("console4").textContent = "Please enter a number between 1 and 10";
        return;
    }
    let output = "";
    for (let i = startNumber; i >= 1; i--) {
        console.log(i);
        output += i + "\n";
    }
    console.log("Boom!");
    output += "Boom!";
    document.getElementById("console4").textContent = output;
}

// Task 5: Print All Colors
function task5() {
    let output = colors.join("\n");
    document.getElementById("console5").textContent = output || "No colors added yet";
}

// Task 8: Generate a Random Number
function task8() {
    let max = parseInt(document.getElementById("maxNumber").value) || 100;
    let randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    document.getElementById("console8").textContent = randomNum;
}

// Task 9: Simple Add Function
function task9() {
    function add(a, b) {
        return a + b;
    }
    let num1 = parseFloat(document.getElementById("num1").value) || 0;
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    let sum = add(num1, num2);
    console.log(sum);
    document.getElementById("console9").textContent = sum;
}

// Task 10: Login Status
function task10() {
    let isLoggedIn = document.getElementById("isLoggedIn").checked;
    if (isLoggedIn) {
        console.log("Welcome back!");
        document.getElementById("console10").textContent = "Welcome back!";
    } else {
        document.getElementById("console10").textContent = "Please log in";
    }
}

// Task 11: String Length
function task11() {
    let word = document.getElementById("wordInput").value;
    if (word.trim() === "") {
        document.getElementById("console11").textContent = "Please enter a word";
        return;
    }
    console.log(word.length);
    document.getElementById("console11").textContent = word.length;
}

// Task 12: Add to Fruits Array
function task12() {
    let fruits = ["Apple", "Banana"];
    let newFruit = document.getElementById("fruitInput").value;
    if (newFruit.trim() !== "") {
        fruits.push(newFruit);
        console.log(fruits);
        document.getElementById("console12").textContent = fruits.join(", ");
        document.getElementById("fruitInput").value = "";
    }
}

// Task 13: Break a Loop at 5
function task13() {
    let breakAt = parseInt(document.getElementById("breakNumber").value) || 5;
    let output = "";
    for (let i = 0; i < 10; i++) {
        if (i === breakAt) {
            break;
        }
        console.log(i);
        output += i + "\n";
    }
    document.getElementById("console13").textContent = output;
}

// Task 14: Find Variable Type
function task14() {
    let input = document.getElementById("typeInput").value;
    let type = typeof input;
    console.log(type);
    document.getElementById("console14").textContent = type;
}

// Task 15: Make Text Red
function task15() {
    document.getElementById("colorText").style.color = "red";
}

