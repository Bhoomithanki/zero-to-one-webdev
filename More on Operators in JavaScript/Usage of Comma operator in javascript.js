// Usage of comma operator in JavaScript
//  The comma operator , evaluates each of its operands (from left to right) and returns the value of the last operand. It is primarily used in situations where multiple expressions need to be evaluated, but only one value is expected or returned.

let number = (3 + 7, 5 + 7)
console.log(number) //In this example, the comma operator first evaluates 3 + 7, which is 10, but it discards this value because it's not the last operand. Then it evaluates 5 + 7, which is 12, and returns this value. So, the value will be 12.