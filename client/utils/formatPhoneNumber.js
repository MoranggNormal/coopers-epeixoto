export const formatPhoneNumber = (value) => {
  const cleanedValue = value.replace(/\D/g, "");

  if (cleanedValue.length < 3) {
    return cleanedValue;
  } else if (cleanedValue.length < 7) {
    return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2)}`;
  } else {
    return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(
      2,
      7
    )}-${cleanedValue.slice(7, 11)}`;
  }
};