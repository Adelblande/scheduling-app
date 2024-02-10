import { useState } from "react";
import { Modal, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./styles";

LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt";

interface CustomCalendarProps {
  onDayPress: (day: any) => void;
}

export function CustomCalendar({ onDayPress }: CustomCalendarProps) {
  const [selected, setSelected] = useState("");

  return (
    <Modal animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.calendar}>
          <Calendar
            theme={{
              backgroundColor: "#ffffff",
              calendarBackground: "#ffffff",
              textSectionTitleColor: "#6b299a",
              selectedDayBackgroundColor: "#6b299a",
              selectedDayTextColor: "#ffffff",
              todayTextColor: "#6b299a",
              dayTextColor: "#000",
              textDisabledColor: "#cdcdcd",
            }}
            style={{
              borderRadius: 8,
              height: 380,
              width: 380,
            }}
            onDayPress={onDayPress}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
