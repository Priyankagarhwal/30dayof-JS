// Task 1
const a = [1, 2, 3, 4, 5];
console.log(a);   // output: [ 1, 2, 3, 4, 5 ]

// Task 2
const f = a[0];
const l = a[a.length - 1];

console.log('First Element:', f); // output : First Element: 1
console.log('Last Element:', l);  // output : Last Element: 5


// Activity 2 :  Array methods (basic)

// Task 3
const arr = [1, 2, 3];
arr.push(7);
console.log(arr);   // output :  [ 1, 2, 3,  7 ]

// Task 4
arr.pop();
console.log(arr);   // output :  [ 1, 2, 3 ]

// Task 5
arr.shift();
console.log(arr);  // output : [ 2, 3 ]

// Task 6
arr.unshift(5);
console.log(arr);  // output : [ 5, 2, 3 ]


// Activity 3 : Array methods (intermediate)

// Task 7
const arr1 = [1, 2, 3];
const doubledNum = arr1.map(number => number * 2);

console.log(doubledNum);    // output : [ 1,4,6 ]

// Task 8
const arr2 = [1,2,3,4,5,6];
const evenNum = arr2.filter(number => number % 2 === 0);

console.log(evenNum);   // output : [ 2, 6, 4 ]

// Task 9
const arr3 = [1,2,3,4];
function sum(n1, n2) {
    return n1 + n2;
}
const result = arr3.reduce(sum);
console.log(result);    // output : 10;


// Activity 4 : Array Iteration

// Task 10
const arr4 = [1,2,3];

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);       // output : 1,2,3
}  

// Task 11
function printArr(element) {
    console.log(element);
}
arr4.forEach(printArr);   // output : 1,2,3


// Activity 5 : Multi-dimensional arrays

// Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// output : [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Task 13
console.log(matrix[0][0]);   // output : 1