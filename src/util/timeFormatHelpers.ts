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
