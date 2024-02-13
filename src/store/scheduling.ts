import { create } from "zustand";
import { Schedule } from "../interfaces/schedule";
import { sortSchedules } from "../utils/sort";

interface SchedulingStoreProps {
  schedules: Schedule[];
  addSchedules: (schedules: Schedule[]) => void;
  addScheduling: (schedule: Schedule) => void;
  removeScheduling: (id: string) => void;
}

export const useSchedulingStore = create<SchedulingStoreProps>()(
  (set, get) => ({
    schedules: [],
    addSchedules(schedules) {
      const pending = schedules.filter(
        (schedule) => schedule.status === "pending"
      );
      const ordened = sortSchedules(pending);
      set(() => ({ schedules: [...ordened] }));
    },
    addScheduling(schedule) {
      set((state) => {
        const unordened = [...state.schedules, schedule];
        const ordened = sortSchedules(unordened);
        return { schedules: ordened };
      });
    },
    removeScheduling(id) {
      set((state) => {
        const filtered = state.schedules.filter((item) => item.id !== id);
        return { schedules: [...filtered] };
      });
    },
  })
);
