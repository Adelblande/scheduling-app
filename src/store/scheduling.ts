import { create } from "zustand";
import { Schedule } from "../interfaces/schedule";

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
      set(() => ({ schedules: [...schedules] }));
    },
    addScheduling(schedule) {
      set((state) => ({ schedules: [...state.schedules, schedule] }));
    },
    removeScheduling(id) {
      set((state) => {
        const filtered = state.schedules.filter((item) => item.id !== id);
        return { schedules: [...filtered] };
      });
    },
  })
);
