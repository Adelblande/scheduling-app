import { Schedule } from "../interfaces/schedule";

export function verifyHasPlate(plate: string, schedules: Schedule[]) {
  const filtered = schedules.find((schedule) => schedule.plate === plate);
  return !!filtered;
}
