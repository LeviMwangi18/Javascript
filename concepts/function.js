//function = a section of reusable code.
// declare code once, use it whenever you want .
// call the function to execute that code.

function happyBirthday(username, age){
    console.log( `happy birthday to ${username}`)
    console.log(`Your are ${age} years old` )
}
happyBirthday('Millo', 25);
happyBirthday('Millo', 30);

function add(x, y){
    let result = x + y;
    return result;
}
let answer = add(2, 3);
console.log(answer);