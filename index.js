// 1. Deposit some money
// 2. Determine the no. of lines to bet
// 3. Collect the bet amount
// 4. Spin the slot machine
// 5. Check for winnings
// 6. give the user thier winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposite = () => {
  const depositAmount = prompt("Enter a deposit Amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("Invalid deposit amount , try again ");
  } else {
    return numberDepositAmount;
  }
};
const depositAmount = deposite();
console.log(depositAmount);
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};
