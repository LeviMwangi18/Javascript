// Operators are symbols that are used to perform operations on opernds.
// oprends are the values and variables.

// Arithmetic Operators
// Are used to perform Mathematical operations on operands.

// Addition

let sum = 5 + 3;
console.log(sum)

//subtraction

let x = 5 - 3;
console.log(x)

//multiplication

let y = 5 * 3;
console.log(y)

//  Division 
let div = 15/3;
console.log(div)

// modulus/ remainder
let mod = 17 % 4;
console.log(mod)

//power/ exponentiation
let p = 2 ** 4;
console.log(p);

//Assignment Operators
// Are used to asign values to variables.
let O = 5;

O += 3; // addition
console.log(O)

O -= 3 // subtraction
console.log(O)

O *= 3 // Multiplicatiom
console.log(O)

O /= 3 //Division
console.log(O)

O %= 3 // Remainder
console.log(O)

O **= 3; //power
console.log(O)

//Increment / Decrement Operators.
// ++ / --
//prefix and postfix;

let a = 10;

console.log(++a);
console.log(a)

console.log(--a);
console.log(a);

// post fix

console.log(a++)
console.log(a)
console.log(a--)
console.log(a)

//Comparison Operators.
// Compare two value and give back a boolean value.
// are usefu in decision making and loop programs in java script
//== (equal to)
// != (not equal to)
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// 1. Equality Operator (==)
// Purpose: Compares whether two values are equal.
// Usage: This operator checks if the values on both sides are the same.
// 2. Inequality Operator (!=)
// Purpose: Compares whether two values are not equal.
// Usage: This operator returns True if the values are not equal, and False if they are equal.
//3. Greater Than Operator (>)
// Purpose: Compares if the left operand is greater than the right operand.
// Usage: Returns True if the left value is greater than the right value.
// Greater Than or Equal To Operator (>=)
// Purpose: Compares if the left operand is greater than or equal to the right operand.
// Usage: Returns True if the left value is greater than or equal to the right value.
//6. Less Than or Equal To Operator (<=)
// Purpose: Compares if the left operand is less than or equal to the right operand.
// Usage: Returns True if the left value is less than or equal to the right value.


let m = 10;
let n  = 20;

console.log(m < n); //less than
console.log(m > n); // greater than
console.log(m <= n); //less or equal to
console.log(m >= n); // greater or equal to

console.log(m == n); //equal
console.log(m !== n) // reverse

console.log(m === n); //strict
console.log(m !== n); // reverse

let k = '10'
let c = 10

console.log(k==c);
console.log(k === c);
console.log(k !== c);

// logical operators
// 1. AND (&&)
// Purpose: Returns true if both conditions or expressions are true.
// Usage: This operator is often used when both conditions need to be satisfied
// 2. OR (||)
// Purpose: Returns true if at least one of the conditions or expressions is true.
// Usage: This operator is used when only one of the conditions needs to be satisfied.
// 3. NOT (!)
// Purpose: Reverses the Boolean value of the condition. If the condition is true, it becomes false; if it is false, it becomes true.
// Usage: This operator is used to negate a condition.


