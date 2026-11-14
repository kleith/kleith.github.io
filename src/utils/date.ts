import { differenceInYears } from "date-fns";

export function diffYears(startDate: Date, endDate: Date): number {
  const years = differenceInYears(endDate, startDate);

  return years;
}
