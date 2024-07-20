//Activity 1:Arithmetic Operations

//Task 1: Add two number
let num1 = 100;
let num2 = 200;
let sum = num1 + num2;
console.log(sum); // Output: 300

//Task 2: Subtract
let sub1 = 20;
let sub2 = 10;
let sub = sub1 - sub2;
console.log(sub);  //Output: 10

//Task 3: Multiply
let Mul1 = 2;
let Mul2 = 7;
let product = Mul1 * Mul2;
console.log(product); //Output: 14

//Task 4: Divide
let Div1 = 10;
let Div2 = 5;
let divide = Div1 / Div2;
console.log(divide); //Output: 2

//Task 5: Remainder
let R1 = 10;
let R2 = 3;
let remainder = R1 % R2;
console.log(remainder); //Output: 1

// Acitvity 2  : Assignment Operators

//Task 6 : += operator
let A = 5;
let B = 5;
A += B;
console.log(A); //Output: 10

//Task 7 : -= operator
let num = 20;
num -= 5;
console.log(num); //Output: 15

//Activity 3 : Comparison Operator

//Task 8 : '>' &'<' operator
let a1 = 20;
let a2 = 10;
if (a1 > a2) {
    console.log(a1 + " is greater than " + a2);
} else if (a1 < a2) {
    console.log(a1 + " is less than " + a2);
} else {
    console.log(a1 + " is equal to " + a2);
}  // Output : 10is less than 20

//Task 9 :'>=' &'<=' operator
let b1 = 20;
let b2 = 10;
if (b1 >= b2) {
    console.log(b1 + " is greater than or equal to " + b2);
} else {
    console.log(b1 + " is less than or equal to " + b2);   
}
//Output : 15 is greater than or equal to 10

let c1 = 10;
let c2 = 20;
if (c1 <= c2) {
    console.log(c1 + " is less than or equal to " + c2);
} else {
    console.log(c1 + " is greater than or equal to " + c2);
}
//Output : 10 is less than or equal to 20

//Task 10 :'==' & '===' operator
let d1 = 200;
let d2 = '200';

// '==' comparison
if (d1 == d2) {
    console.log(d1 + " is equal to " + d2);
    //Output : 200 is equal to 200
} else {
    console.log(d1 + " is not equal to " + d2);
}

// '===' comparison"
if (d1 === d2){
    console.log(d1 + " is equal to " + d2);
} else {
    console.log(d1 + " is not equal to " + d2);
} //Output: 200 is not equal to 200


//Acitvity 4: Logical Operator

//Task 11 : && operator
let a = 10;
let b = 20;

if (a > 5 && b < 3){
    console.log("Both conditions are true.");
} else {
    console.log("At least one of the conditions is false.");
} // Output: At least one of the condition is false.

//Task 12 : || operator
let c = 10;
let d = 20;
if (c > 15 || d < 25){
    console.log("At least one of the conditions is true.");
} else {
    console.log("Both conditions are false.");
} // Output : At least one of the conditions is true.

//Task 13 : ! operator
let e = 10;
if (!(e > 20)) {
    console.log(e + "is not greater than 20.");
} else {
    console.log(e + " is greater than 20.");
} // Output: 10 is not greater than 20.

//Activity 5 : Ternary Operator

//Task 14 : 
let n = -1;

if(n>0){
    console.log("positive");
}
else {
    console.log("negative")
}
console.log(n); // Output: Negative


//Feature Request

//1.Arithmetic Operations Script:

let n1 = 6;
let n2 = 4;

let addition = n1 + n2; //Addition
let subtraction = n1 - n2; //Subtraction
let multiplication = n1 * n2; //Multiplication
let division = n1 / n2; //Division
let remainderr = n1 % n2; //Remainder

console.log("Addition: " + n1 + " + " + n2 + " = " + addition);
//Output: Addition: 6 + 4 = 10
console.log("Subtraction: " + n1 + " - " + n2 + " = " + subtraction);
//Output: Subtraction: 6 - 4 = 2
console.log("Multiplication: " + n1 + " * " + n2 + " = " + multiplication);
//Output: Multiplication: 6 * 4 = 24
console.log("Division: " + n1 + " / " + n2 + " = " + division);
//Output: Division: 6 / 4 = 1.50
console.log("Remainder: " + n1 + " % " + n2 + " = " + remainderr);
//Output: Remainder: 6 % 4 = 2

//2. Comparison and Logical Operations Script

let firstNum = 10;
let secondNum = 20;

// Comparison using different operators
let isGreaterThan = firstNum > secondNum;
let isLessThan = firstNum < secondNum;
let isEqualTo = firstNum == secondNum;
let isNotEqualTo = firstNum != secondNum;
let isGreaterThanOrEqualTo = firstNum >= secondNum;
let isLessThanOrEqualTo = firstNum <= secondNum;

console.log(firstNum + " > " + secondNum + " : " + isGreaterThan);
//Output : 10 > 20 : false
console.log(firstNum + " < " + secondNum + " : " + isLessThan);
//Output : 10 < 20 : true
console.log(firstNum + " == " + secondNum + " : " + isEqualTo);
//Output : 10 == 20 : false
console.log(firstNum + " != " + secondNum + " : " + isNotEqualTo);
//Output : 10 != 20 : true
console.log(firstNum + " >= " + secondNum + " : " + isGreaterThanOrEqualTo);
//Output : 10 >= 20 : false
console.log(firstNum + " <= " + secondNum + " : " + isLessThanOrEqualTo);
//Output: 10 <= 20 : true

// Combine conditions using logical operators
let condition1 = firstNum > 5;
let condition2 = secondNum < 25;

let and = condition1 && condition2;
let or = condition1 || condition2;

console.log("Condition 1 (firstNum > 5) && Condition 2 (secondNum < 25): " + and);
//Output: Condition 1 (firstNum > 5) && Condition 2 (secondNum < 25) : true
console.log("Condition 1 (firstNum > 5) || Condition 2 (secondNum < 25): " + or);
//Output: Condition 1 (firstNum > 5) || Condition 2 (secondNum < 25): true

//3.Ternary Operator script:

let value = -7;

// Use the ternary operator to check if the number is positive
let output = value > 0 ? 'Positive' : 'Negative';

