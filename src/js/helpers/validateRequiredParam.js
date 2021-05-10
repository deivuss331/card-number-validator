export default ({ name, value, type }) => {
  if (!value) {
    throw new Error(`param called ${name} is falsy!`);
  }

  if (!type) {
    return;
  }

  switch (type) {
    case "array":
      if (!Array.isArray(value)) {
        throw new Error(`param called ${name} should be ${type}!`);
      }

      break;

    default:
      if (typeof value !== type) {
        throw new Error(`param called ${name} should be ${type}!`);
      }

      break;
  }
};
