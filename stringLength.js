const stringLength = (str) => {
  let strLength = str.split('').length;
  if (strLength < 1 || strLength > 10) {
    throw new Error ("String too long/ too short ")
  }
  return strLength;
}

module.exports = stringLength;