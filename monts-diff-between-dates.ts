/*
** this replaces the moment methods a.diff(b, 'months') which is without decimals
**
** FullDate = YYYY-MM-DD
*/
export function monthsDiffBetweenFullDates(fullDate1: FullDate, fullDate2: FullDate): NonNegativeInteger {
  const endDate: Date = new Date(fullDate1);
  const startDate: Date = new Date(fullDate2);
  let months;

  months = (startDate.getFullYear() - endDate.getFullYear()) * 12;
  months -= endDate.getMonth();
  months += startDate.getMonth();

  return nonNegativeIntegerFromNumber(months);
}

