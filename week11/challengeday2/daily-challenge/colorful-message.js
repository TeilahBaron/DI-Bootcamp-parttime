const chalkPromise = import('chalk');

async function displayColorfulMessage() {
  // Wait for chalk to be imported
  const chalk = await chalkPromise;
  
  // Use chalk to create and display a colorful message
  console.log(chalk.default.bold.green('This is a colorful message!'));
}

module.exports = displayColorfulMessage;