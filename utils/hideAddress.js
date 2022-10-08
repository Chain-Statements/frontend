export const hideAddress = (address) => {
  if (address) {
    return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
  } else {
    return address;
  }
};
