import { Schedule } from "../interfaces/schedule";

export const useSchedules = () => {
  const { EXPO_PUBLIC_BASE_URL_API } = process.env;

  const getSchedules = async (): Promise<Schedule[]> => {
    const response = await fetch(
      `${EXPO_PUBLIC_BASE_URL_API}/schedules?status=pending`
    );
    const schedules = await response.json();

    return schedules;
  };

  const updateSchedulingStatus = async (
    id: string,
    status: string
  ): Promise<Schedule> => {
    const response = await fetch(
      `${EXPO_PUBLIC_BASE_URL_API}/schedules/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          status,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const schedules = await response.json();

    return schedules;
  };

  const createScheduling = async (data: Schedule): Promise<Schedule> => {
    const response = await fetch(`${EXPO_PUBLIC_BASE_URL_API}/schedules`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const schedule = await response.json();

    return schedule;
  };

  return { getSchedules, updateSchedulingStatus, createScheduling };
};
