#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let loop: boolean = true;

let msg = chalk.green(
  "\t---------------------------------------\n\t    Welcome to Shayan's Word Counter\n\t---------------------------------------"
);
console.log(msg);

while (loop) {
  //! Getting input from user
  let user = await inquirer.prompt([
    {
      type: "input",
      name: "sentence",
      message: chalk.bgBlue(`Please enter a sentence: \n`),
    },
  ]);

  //! Splitting the sentence into words
  let letters = user.sentence.length;

  //! Splitting the sentence into words
  const wordArray = user.sentence.split(" "); //* Don't worry, *split* just cuts the word when a " " comes
  let words = wordArray.length; //* It prints the length of the words stored in the array

  console.log(
    chalk.green(
      `\tThe number of words in the sentence = ${words}. (Letters = ${letters})`
    )
  );

  //!Quit Function
  let quit = await inquirer.prompt([
    {
      type: "confirm",
      name: "quit",
      message: "Would you like to continue ?",
      default: false,
    },
  ]);
  if (quit.quit == false) {
    loop = false;
    let quitMsg =
      "\n------------Thanks for Using our Word Counter-------------";
    const rainbowAnimateQ = chalkAnimation.radar(quitMsg);
    setTimeout(() => {
      rainbowAnimateQ.stop();
      console.clear();
    }, 4370);
    // Stop animation after 4.37 seconds

    loop = false;
  } else {
    loop = true;
  }
}
