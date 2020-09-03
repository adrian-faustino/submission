export const formatMonth = (index: number) => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
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

// return HH:MM:SS and AM/PM
export const formatDateObj = (date: Date) => {
  const month = formatMonth(date.getMonth());
  const _date = formatLeadingZeros(date.getDate(), 2);
  let hours: number | string = date.getHours();
  const minutes = formatLeadingZeros(date.getMinutes(), 2);
  let am_pm = "am";

  if (hours > 12) {
    hours -= 12;
    hours = formatLeadingZeros(hours, 2);
    am_pm = "pm";
  }

  return `${month} ${_date}, ${hours}:${minutes} ${am_pm}`;
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

// e.g. 0.5h
export const formatMStoHourFloat = (s: number) => {
  const hours = s / 60 / 60;
  return `${hours.toFixed(2)}h`;
};
