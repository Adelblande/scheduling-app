import { useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CardSchedule } from "../../components/CardSchedule";
import { EmptyScheduling } from "../../components/EmptyScheduling";
import { HeaderSchedules } from "../../components/HeaderSchedules";
import { useSchedules } from "../../hooks/schedules";
import { useSchedulingStore } from "../../store/scheduling";
import { sortSchedules } from "../../utils/sort";

export default function Schedules() {
  const { getSchedules, updateSchedulingStatus } = useSchedules();
  const { schedules, addSchedules, removeScheduling } = useSchedulingStore();

  async function handleDone(id: string) {
    const updated = await updateSchedulingStatus(id, "done");
    if (updated.status === "done") {
      removeScheduling(id);
    }
  }

  async function handleCancel(id: string) {
    const updated = await updateSchedulingStatus(id, "cancel");
    if (updated.status === "cancel") {
      removeScheduling(id);
    }
  }

  const fetchSchedules = async () => {
    const schedules = await getSchedules();
    sortSchedules(schedules);
    addSchedules(schedules);
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={schedules}
        ListEmptyComponent={<EmptyScheduling />}
        ListHeaderComponent={() => <HeaderSchedules />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <CardSchedule
                key={item.id}
                schedule={item}
                handleDone={() => handleDone(item.id)}
                handleCancel={() => handleCancel(item.id)}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
