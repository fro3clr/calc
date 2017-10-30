export const isNumeric = str => !isNaN(parseFloat(str)) && isFinite(str);

export default isNumeric;
