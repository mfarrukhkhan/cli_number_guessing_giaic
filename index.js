#! usr/bin/env node
import inquirer from "inquirer";
// 1.COmputer Generate Random Number
// 2.User Input Guessing Number
// 3. Compare COmputer NUmber with User Number and Show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number b/w 1 to 6:"
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations You Guessed a Right Number");
    console.log("If you Play More then Run Program Again");
}
else {
    console.log("You Guessed Wrong Number");
    console.log("Run the Program and Try Again!!");
}
