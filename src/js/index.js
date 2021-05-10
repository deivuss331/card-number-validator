import getCardProvider from "./helpers/getCardProvider";
import validateCardNumber from "./helpers/validateCardNumber";
import validateRequiredParam from "./helpers/validateRequiredParam";

const checkCardNumber = (cardNumber) => {
  validateRequiredParam({ name: "cardNumber", value: cardNumber, type: "number" });

  const provider = getCardProvider(cardNumber);
  const isNumberValid = validateCardNumber(cardNumber);

  if (!provider || !isNumberValid) {
    return "Nieprawidłowy";
  }

  return provider.name;
};

export default checkCardNumber;
