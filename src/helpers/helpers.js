export const checkSign = changeAmount => {
  if (changeAmount > 0) {
    return "+";
  }
};
export const setColor = changeSign => {
  if (changeSign === "+") {
    return "green";
  } else {
    return "red";
  }
};
