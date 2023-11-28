export const beautifulTime = (int: number) => Math.floor(int);
export const timeSplite = (int: number) => ({
  tenDigit: beautifulTime(int / 10),
  digit: int % 10,
});

export const time = new Date("2024-1-13").getTime() - new Date().getTime();

export const getTimeDesc = (int: number) => {
  const days = beautifulTime(int / (24 * 60 * 60 * 1000));
  const { tenDigit: days1, digit: days2 } = timeSplite(days);
  const hours = beautifulTime(
    (int - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000)
  );
  const { tenDigit: hours1, digit: hours2 } = timeSplite(hours);
  const mins = beautifulTime(
    (int - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / (60 * 1000)
  );
  const { tenDigit: mins1, digit: mins2 } = timeSplite(mins);
  const seconds = beautifulTime(
    (int -
      days * 24 * 60 * 60 * 1000 -
      hours * 60 * 60 * 1000 -
      mins * 60 * 1000) /
      1000
  );
  const { tenDigit: seconds1, digit: seconds2 } = timeSplite(seconds);

  return {
    days1,
    days2,
    hours1,
    hours2,
    mins1,
    mins2,
    seconds1,
    seconds2,
  };
};
