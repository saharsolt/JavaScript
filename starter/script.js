//JavaScript Fundamentals – Part 1
//Linking a JavaScript File
let js = "amazing";
if (js === "amazing") alert("JS is FUN!");

console.log(40 + 20 + 10 - 9);
console.log("Sahar");
console.log(20);

//Values and Variables
let firstName = "Sahar";
let lastName = "Soltanmohammadi";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let sahar_soltanmohammadi = "SS";
let $function = 27;

let person = "Sahar";
let PI = 3.1415;

let myFirstJob = "Coder";
let mySecondJob = "Teacher";

//let job1 = "programmer";
//let job2 = "teacher";
console.log(myFirstJob);

let javaScriptISFUN = true;
console.log(javaScriptISFUN);

//Data Types
console.log(typeof true);
console.log(typeof javaScriptISFUN);
console.log(typeof 23);
console.log(typeof "Sahar");

javaScriptISFUN = "YES!";
console.log(typeof javaScriptISFUN);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(null);

//let, const and var
let age = 32;
age = 33;

const birthYear = 1989;
//birthYear = 1990; Error
//const birthYear; Error

var job = "Programmer";
job = "Coder";

lastName = "Soltanmohammadi"; //do not clarify a variable without let, const or var.
console.log(lastName);

//Basic Operators
// Math operators
//const ageSahar = 2022 - 1989;
//const ageNeda = 2022 - 1987;
const now = 2022;
const ageSahar = now - 1989;
const ageNeda = now - 1987;
console.log(ageSahar, ageNeda);
console.log(ageNeda * 3, ageSahar / 10, 2 ** 4);

const myFirstName = "Sahar";
const myLastName = "Soltanmohammadi";
console.log(myFirstName + " " + myLastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 5; // x = x * 5
x++;
x--;
x--;
console.log(x); //124

//Comparison operators
console.log(ageNeda > 30);
console.log(ageSahar >= 33);
console.log(ageSahar >= 34);

const isFullAge = ageSahar >= 18;
console.log(isFullAge);

console.log(now - 1989 > now - 1987);

//Operator precedence
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageNeda + ageSahar) / 2;
console.log(ageNeda, ageSahar, averageAge);

//Strings and Template Literals
const nickName = "Sahar";
const job1 = "teacher";
const brthYear = 1989;

const sahar = "I'm " + nickName + ", a " + (now - brthYear) + " year old " + job1 + "!";
console.log(sahar);

const saharNew = `I'm ${nickName}, a ${now - brthYear} year old ${job1}!`;
console.log(saharNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`string with
multiple
lines`);

//If-else
const ageNarges = 15;
//const ageLicense = ageNarges >= 18;

if (ageNarges >= 18) {
  console.log("Narges can start driving license!");
} else {
  ageLeft = 18 - ageNarges;
  console.log(`Narges is too young. Wait another ${ageLeft} years to drive a car :)`);
}
