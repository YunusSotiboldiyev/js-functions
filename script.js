//12 - vazifa

let num1 = 12, num2 = 25, num3 = 9, num4 = 45, num5 = 33;
let largest = num1;

if (num2 > largest) largest = num2;
if (num3 > largest) largest = num3;
if (num4 > largest) largest = num4;
if (num5 > largest) largest = num5;

alert("Eng kattasi: " + largest);

//13 - vazifa

let a = 123, b = 453, c = 783;

let lastDigitA = a % 10;
let lastDigitB = b % 10;
let lastDigitC = c % 10;

if (lastDigitA === lastDigitB && lastDigitB === lastDigitC) {
    document.write("Ohirgi raqamlar bir hil.");
} else {
    document.write("Ohirgi raqamlar turli hil.");
}
document.write("<br>");
//14 - vazifa

for (let i = 0; i <= 15; i++) {
     if (i % 2 === 0) {
         document.write(i + " - juft <br>");
     } else {
         document.write(i + " - toq <br>");
     }
 }
 
//15 - vazifa

for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log(i+" FizzBuzz");
     } else if (i % 3 === 0) {
         console.log(i+" Fizz");
     } else if (i % 5 === 0) {
         console.log(i+" Buzz");
     } else {
         console.log(i);
     }
 }
 
