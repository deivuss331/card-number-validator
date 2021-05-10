import immutable from "seamless-immutable";

export default immutable([
  {
    name: "Mastercard",
    numberLength: [16],
    startsWith: [51, 52, 53, 54, 55],
  },
  {
    name: "Visa",
    numberLength: [13, 16],
    startsWith: [4],
  },
  {
    name: "American Express",
    numberLength: [15],
    startsWith: [34, 37],
  },
]);
