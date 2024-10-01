/*references:
https://www.enablegeek.com/tutorial/implementing-readline-for-user-input-in-node-js/
https://www.shecodes.io/athena/36373-how-to-create-an-if-statement-in-javascript
https://www.w3schools.com/JSREF/jsref_if.asp
*/
//creating age checker
//implementing the readline for node js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//user's input for age
readline.question("Enter your age: ", age => {
    age = parseInt(age);
//checking the input
if (age < 13) {
    console.log("You are a child");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager");
} else  {
    console.log("You are an adult");
} 

    readline.close();
});
