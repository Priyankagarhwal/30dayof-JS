//   Activity 1:If Else Statement


//  Task1 : write a program to check if a number is positive ,negative,or zero,and log the result to the console.

let num1=2;
if(num1>0){
    console.log("Positive");
}
else if(num1<0){
    console.log("Negative");
}
else {
    console.log("Zero");
} // Output:Positive

//Task 2: write a program to check if a person is eligible to vote and log the result to the console 

let age=19;
if(age>=18){
    console.log("eligible for vote");
}
else {
    console.log("not eligible");
}// Output:eligible for vote

//Activity :2 Nested If-Else statement
// Task 3 :write a program to find the largest of three number using nested if else statements.
let a=2;
let b=5;
let c=9;
if(a>b){
    if(a>c){
        console.log(a,"is greatest number among three number");

    }
    else {
        console.log(c,"is greatest number among three number");
 
    }
}
else {
    if(b>c){
        console.log(b,"is greatest number among three number")

    }
    else {
        console.log(c,"is greatest number among three number")

    }
}// output:9 is largest among three number

//Activity 3:Switch case

//Task4:write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day.
let day = 2;
switch(day)
{
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THURSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("INVALID DAY");
}//output:TUESDAY

// Task :5 write a program that uses  a switch cases to assign grade
let score=73;
switch(Math.floor(score/10))
{
    case 10:
        console.log("A+");
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    case 5:
        console.log('E');
        break;
    default:
        console.log('F');
} //output:C

// Activity 4:
// Task 6 :check number is odd/even 
let num2=77;
if(num2%2==0){
    console.log("Even");
}
else {
    console.log("odd");
}
//Task:7 checking of leap year.
let year=1200;
if(year%4==0&&(year%100!=0||year%400==0)){
    console.log("leap year");
}
else {
    console.log("Not a leap year");
}
//output:leap year






