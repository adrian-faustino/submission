export const formatMonth = (index: number) => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ][index];
};

export const formatLeadingZeros = (char: number | string, pad: number) => {
  let result = char.toString();
  while (result.length < pad) {
    result = "0" + result;
  }
  return result;
};

// return HH:MM:SS
export const formatDateObj = (date: Date) => {
  const month = formatMonth(date.getMonth());
  const _date = formatLeadingZeros(date.getDate(), 2);
  const hours = formatLeadingZeros(date.getHours(), 2);
  const minutes = formatLeadingZeros(date.getMinutes(), 2);
  const seconds = formatLeadingZeros(date.getSeconds(), 2);

  return `${month} ${_date}, ${hours}:${minutes}:${seconds}`;
};

// convert total seconds to HH:MM
export const formatMStoHHMMSS = (s: number) => {
  let remainder = s;
  const h = Math.floor(remainder / 60 / 60);
  remainder -= h * 60;
  const m = Math.floor(remainder / 60);
  remainder -= m * 60;
  const _s = Math.floor(remainder);

  let resultStr = ``;
  // if hours are present, then conditionally concat to result
  h > 0 && (resultStr = resultStr + `${formatLeadingZeros(h, 2)}:`);

  // always show min, even if at 0
  resultStr = resultStr + `${formatLeadingZeros(m, 2)}`;

  // always show second, even if at 0
  resultStr = resultStr + `:${formatLeadingZeros(_s, 2)}`;

  return resultStr;
};
