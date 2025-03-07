//  loops are used to repeat a block of code 
// multiple times based on a condition. 
// They are essential for performing repetitive tasks efficiently. JavaScript offers several types of loops, each suited for different use cases. Let's go through the main types of loops in JavaScript.
// 1. for Loop
// The for loop is one of the most commonly used loops in JavaScript. It's typically used when you know in advance how many times you want the loop to run.
// for (initialization; condition; increment/decrement) {
//     // code to be executed
//   }

for (let i = 0; i <= 5; i++){
    console.log(i);
    for(let j =1; j <= 3; j++){
        console.log('inner loop' + j);
        
    }
}

let coding = ['Javascript', 'python', 'cpp']

for (let i = 0; i < coding.length; i++){
    console.log(coding[i]);
}

//while loop
let p = 50
while(p<=100){
    //code to be repeated//
    console.log(p);
    p++;
}
//do while loop
let d = 1;

do{
    console.log(d);
    d++;
}while(d<=5);

//break
for(let i = 1; i <=5; i++){
    if(i === 2){
        break
    }
    console.log(i);
}
for(let i = 1; i <=5; i++){
    if(i === 3){
        continue
}
}
