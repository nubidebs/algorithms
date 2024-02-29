// FullDate YYYY-MM-DD

export function daysDiffBetweenFullDates(fullDate1: FullDate, fullDate2: FullDate): PositiveInteger {
  const date1 = new Date(fullDate1);
  const date2 = new Date(fullDate2);
  const timeDifferenceInMilliseconds = date2.getTime() - date1.getTime();
  // number of milliseconds in a day (1000 * 60 * 60 * 24)
  const timeDifferenceInDays = Math.round(timeDifferenceInMilliseconds / (1000 * 3600 * 24));

  return timeDifferenceInDays;
}
