import checkCardNumber from "./index";

const cardNumbers = [
  340200685223237,
  4929019491701637,
  340200685278337,
  5124342581975584,
  5240471636583942,
  4973676374546487,
];

cardNumbers.forEach((num) => {
  alert(`${num} - ${checkCardNumber(num)}`);
});
