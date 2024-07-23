// Activity 1:Function declaration
// Task 1

function check_oe(num){
    if(num%2 == 0){
        return "even";
    }else{
        return "odd";
    }
}

let num = 9;
console.log(check_oe(num));               //output: odd

// task 2

function square(num){
    return num*num;
}

num = 4;
console.log(square(num));                   //output: 16

// task 3
// Activity 2: Function Expression
function max(num1 , num2){
    if(num1 > num2){
        console.log(num1,"is greater");
    }else if(num1 == num2){
        console.log("numbers are equal");
    }else{
        console.log(num2,"is greater");
    }
}

max(2,3);   // 3 is greater

// task 4

function concat(str1 , str2){
    return str1+" "+str2;
}
let s1 = "priyanka";
let s2 = "garhwal ";
let result = concat(s1,s2);
console.log(result);                           //output: priyanka garhwal

// activity 3:
// task 5

let sum=(a,b)=>{
    return a+b;
}
let result1 = sum(2,3);
console.log("sum:",result1);                   //output: sum: 5

// task 6

let includes = (str,ch)=>{
    return str.includes(ch);
}

console.log(includes("priyanka",'k'));                //output: true

// task 7

function pro(a,b=2){
    return a*b;
}
let a = 5;
let b = 3;
console.log("product is:",pro(a,b));   // output:15

// task 8

function greetings(name,age=15){
    return `name:  ${name}, age: ${age}`;
}
console.log(greetings("jitu",18));  


//task 9

function repeatFunction(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}


function greet() {
    console.log("hello");
}


repeatFunction(greet, 5);




// task 10
function high_order_function(func1 ,func2, val){
    return func2(func1(val));
}

function func1(val){
    return val*2;
}
function func2(val){
    return val*val;
}

console.log(high_order_function(func1,func2,5));     //output: 100



