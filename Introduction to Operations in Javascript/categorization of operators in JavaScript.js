// categorization of operators in JavaScript based on there functionality
// Arthmatic operators

// addition

let value1 = 5
let value = 89
console.log(value1 + value)

// subtraction
let value2 = 46
let value0 = 17
console.log(value2 - value0)

// multiplication
let value3 = 7
let value4 = 8
console.log(value3 * value4)

// division
let value5 = 65
let value6 = 5
console.log(value5 / value6)

// modulous
let value7 = 25
let value8 = 3
console.log(value7 % value8)

// power
let value9 = 5
let value10 = 3
console.log(value9 ** value10)

// Assignment Operators:These operators assign values to variables
// single equal sign (=) is an assignment
// it means that the value on the right side will be stored into the variable on the left

// Assignment operator (=)
let number = 10

// Addition assignment operator (+=)
let number0 = 10
number0 += 5 // myVariable is now equal to 15
console.log(number0)

// Subtraction assignment operator (-=)
let number1 = 10
number1 -= 5 // myVariable is now equal to 10
console.log(number1)

// Multiplication assignment operator (*=)
let number2 = 10
number2 *= 2 // myVariable is now equal to 20
console.log(number2)

// Division assignment operator (/=)
let number3 = 10
number3 /= 2 // myVariable is now equal to 10
console.log(number3)

// Modulos assignment operator (%=)
let number4 = 10
number4 %= 3 // myVariable is now equal to 1
console.log(number4)


// Comparision Operator:These operators compare two values and return a Boolean value (true or false).

// Equal to
let num = 2
let string = 7
console.log(num == string)

// not Equal to
console.log(num != string)

// less than
console.log(num < string)

// greater than
console.log(num > string)

// less than equal to
console.log(num >= string)

// greater than equal to
console.log(num <= string)

// If we use === like this then they compare the datatype and value both 
let num1 = 3
let str = "3"
console.log(num1 === str) //output will be false because one of them is string datatype while other one is number
console.log(num1 == str) //output will be true because it doesn't consider datatype

// Logical Operator:These operators perform logical operations on Boolean values.

// AND operator:The logical AND operator returns true if both operand1 and operand2 are true. Otherwise, it returns false.
let opr1 = 5;
let opr2 = 10;
console.log(opr1 < 10 && opr2 > 5); // Output: true


// OR operator:The logical OR operator returns true if at least one of operand1 or operand2 is true. It returns false only if both operands are false.

console.log(opr1 < 10 || opr2 < 5); // Output: true

// NOT operator:The logical NOT operator returns true if the operand is false, and false if the operand is true. It negates the value of the operand.

console.log(!(opr1 == 5)); // Output: false

