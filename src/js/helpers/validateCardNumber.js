import validateRequiredParam from "./validateRequiredParam";

/** Validate card number with Luhna algorithm */

const validateCardNumber = (cardNumber) => {
  validateRequiredParam({ name: "cardNumber", value: cardNumber, type: "number" });

  const numberFactors = String(cardNumber).split("");
  const numberFactorsRev = numberFactors.reverse();
  const { oddNumbers, evenNumbers } = getOddAndEvenNumbers(numberFactorsRev);
  const oddNumbersSum = getOddNumbersSum(oddNumbers);
  const evenNumbersSum = evenNumbers.reduce((prevNum, num) => prevNum + num);
  const numbersSum = oddNumbersSum + evenNumbersSum;
  const luhnaSumDivideBy = 10;

  if (!(numbersSum % luhnaSumDivideBy)) {
    return true;
  }

  return false;
};

function getOddAndEvenNumbers(numberFactors) {
  validateRequiredParam({ name: "numberFactors", value: numberFactors, type: "array" });

  const oddNumbers = [];
  const evenNumbers = [];
  const luhnaOddMultiplyBy = 2;

  numberFactors.forEach((numString, index) => {
    const num = Number(numString);

    if (index % 2) {
      oddNumbers.push(num * luhnaOddMultiplyBy);

      return;
    }

    evenNumbers.push(num);
  });

  return {
    oddNumbers,
    evenNumbers,
  };
}

function getOddNumbersSum(oddNumbers) {
  validateRequiredParam({ name: "oddNumbers", value: oddNumbers, type: "array" });

  return oddNumbers.reduce((prevNum, num) => {
    const numFactors = String(num)
      .split("")
      .map((e) => Number(e));
    const numFactorsSum = numFactors.reduce((a, b) => a + b);

    return prevNum + numFactorsSum;
  }, 0);
}

export default validateCardNumber;
