// control flow statements are used to control the order 
// in which code is executed based on certain conditions. 
// These statements allow the program to make decisions, 
// repeat actions, or skip code blocks. 
// The primary control flow statements in JavaScript include conditional 
// statements and looping statements and try catch.

//1. Conditional Statements
// These statements execute code based on whether a condition is true or false.
// if Statement
//else statement
//else if statement

//if statements
let age = 20;
let age2 =16

if (age >= 18){
    console.log('Verified')
}
else{
    console.log('Your are below the age limit')
}
if (age2 > 18){
    console.log('verified');
}
else if(age >= 17){
    console.log('Your are broke');
    
}
else{
    console.log('your are below the age limit');
    
}

let country = 'Kenya';

let countryAge = 20

if (countryAge >= 18 && country =='india'){
    console.log('Welcome');
}
else{
    console.log('This is not available in your country yet');
    
}

//switch is a conditional statement that is used to execute a block of code based
// on the value of an expression.
let matchDay = 4;

switch(matchDay){
    case 1: 
        matchDay = 'Millo Vs Keen';
        break;
    case 2: 
        matchDay = 'Millo Vs Maya';
        break;
    case 3: 
        matchDay = 'Maya Vs Keen';
        break;
    case 4: 
        matchDay = 'Keen vs Millo';
        break;
    default:
        console.log('invalid match day')
        break;

}

console.log('Todays match is ' + matchDay);
console.log('Todays match is ' + matchDay);

//Ternery operator
// condition ? value -if-true : value-if-false

let myage= 20;

let msg = (age >= 18) ? 'your are an adult' : 'your are a minor'
console.log(msg);

