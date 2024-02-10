import { Schedule } from "../interfaces/schedule";

export function sortSchedules(schedules: Schedule[]) {
  return schedules.sort(function compare(a, b) {
    if (a.dateIni < b.dateIni) return -1;
    if (a.dateIni > b.dateIni) return 1;
    return 0;
  });
}
