import cardProviders from "../../config";
import validateRequiredParam from "./validateRequiredParam";

const getCardProvider = (cardNumber) => {
  validateRequiredParam({ name: "cardNumber", value: cardNumber, type: "number" });

  const numberLength = String(cardNumber).split("").length;
  const provider = cardProviders.find((cardProvider) => {
    const matchesNumberLength = cardProvider.numberLength.includes(numberLength);

    if (!matchesNumberLength) {
      return false;
    }

    const matchesStartingNumber = matchStartingNumber({ cardNumber, cardProvider });

    return matchesStartingNumber;
  });

  if (!provider) {
    return false;
  }

  return provider;
};

function matchStartingNumber({ cardNumber, cardProvider }) {
  const { startsWith } = cardProvider;
  const match = startsWith.find((num) => String(cardNumber).startsWith(num));

  return match;
}

export default getCardProvider;
